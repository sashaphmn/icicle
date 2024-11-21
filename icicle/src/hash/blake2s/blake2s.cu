#include <assert.h>
#include "gpu-utils/device_context.cuh"
#include "gpu-utils/error_handler.cuh"
#include "gpu-utils/modifiers.cuh"
#include "hash/hash.cuh"

#include "hash/blake2s/blake2s.cuh"
using namespace hash;

#include "matrix/matrix.cuh"
using matrix::Matrix;

namespace blake2s {

  typedef struct {
    WORD digestlen;
    BYTE key[32];
    WORD keylen;
    BYTE buff[BLAKE2S_BLOCK_LENGTH];
    uint32_t chain[BLAKE2S_CHAIN_SIZE];
    uint32_t state[BLAKE2S_STATE_SIZE];
    WORD pos;
    uint32_t t0;
    uint32_t t1;
    uint32_t f0;
  } cuda_blake2s_ctx_t;

  typedef cuda_blake2s_ctx_t CUDA_BLAKE2S_CTX;

  __constant__ CUDA_BLAKE2S_CTX c_CTX;

  __constant__ uint32_t BLAKE2S_IVS[8] = {0x6A09E667UL, 0xBB67AE85UL, 0x3C6EF372UL, 0xA54FF53AUL,
                                          0x510E527FUL, 0x9B05688CUL, 0x1F83D9ABUL, 0x5BE0CD19UL};

  const uint32_t CPU_BLAKE2S_IVS[8] = {0x6A09E667UL, 0xBB67AE85UL, 0x3C6EF372UL, 0xA54FF53AUL,
                                       0x510E527FUL, 0x9B05688CUL, 0x1F83D9ABUL, 0x5BE0CD19UL};

  static DEVICE_INLINE unsigned int d_next_pow_of_two(unsigned int v)
  {
    v--;
    v |= v >> 1;
    v |= v >> 2;
    v |= v >> 4;
    v |= v >> 8;
    v |= v >> 16;
    v++;
    return v;
  }

  void cpu_blake2s_init(cuda_blake2s_ctx_t* ctx, BYTE* key, WORD keylen, WORD digestbitlen)
  {
    memset(ctx, 0, sizeof(cuda_blake2s_ctx_t));
    if (keylen > 0) {
      memcpy(ctx->buff, key, keylen);
      memcpy(ctx->key, key, keylen);
    }
    ctx->keylen = keylen;
    ctx->digestlen = digestbitlen >> 3;
    ctx->pos = 0;
    ctx->t0 = 0;
    ctx->t1 = 0;
    ctx->f0 = 0;
    ctx->chain[0] = CPU_BLAKE2S_IVS[0] ^ (ctx->digestlen | (ctx->keylen << 8) | 0x1010000);
    ctx->chain[1] = CPU_BLAKE2S_IVS[1];
    ctx->chain[2] = CPU_BLAKE2S_IVS[2];
    ctx->chain[3] = CPU_BLAKE2S_IVS[3];
    ctx->chain[4] = CPU_BLAKE2S_IVS[4];
    ctx->chain[5] = CPU_BLAKE2S_IVS[5];
    ctx->chain[6] = CPU_BLAKE2S_IVS[6];
    ctx->chain[7] = CPU_BLAKE2S_IVS[7];

    ctx->pos = (keylen > 0) ? BLAKE2S_BLOCK_LENGTH : 0;
  }

  __constant__ uint8_t BLAKE2S_SIGMA[10][16] = {
    {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}, {14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3},
    {11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4}, {7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8},
    {9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13}, {2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9},
    {12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11}, {13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10},
    {6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5}, {10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0}};

  __inline__ __device__ uint32_t cuda_blake2s_ROTR32(uint32_t a, uint8_t b) { return (a >> b) | (a << (32 - b)); }

  __device__ void
  cuda_blake2s_G(cuda_blake2s_ctx_t* ctx, uint32_t m1, uint32_t m2, int32_t a, int32_t b, int32_t c, int32_t d)
  {
    ctx->state[a] = ctx->state[a] + ctx->state[b] + m1;
    ctx->state[d] = cuda_blake2s_ROTR32(ctx->state[d] ^ ctx->state[a], 16);
    ctx->state[c] = ctx->state[c] + ctx->state[d];
    ctx->state[b] = cuda_blake2s_ROTR32(ctx->state[b] ^ ctx->state[c], 12);
    ctx->state[a] = ctx->state[a] + ctx->state[b] + m2;
    ctx->state[d] = cuda_blake2s_ROTR32(ctx->state[d] ^ ctx->state[a], 8);
    ctx->state[c] = ctx->state[c] + ctx->state[d];
    ctx->state[b] = cuda_blake2s_ROTR32(ctx->state[b] ^ ctx->state[c], 7);
  }

  __device__ __forceinline__ void cuda_blake2s_init_state(cuda_blake2s_ctx_t* ctx)
  {
    memcpy(ctx->state, ctx->chain, BLAKE2S_CHAIN_LENGTH);
    ctx->state[8] = BLAKE2S_IVS[0];
    ctx->state[9] = BLAKE2S_IVS[1];
    ctx->state[10] = BLAKE2S_IVS[2];
    ctx->state[11] = BLAKE2S_IVS[3];
    ctx->state[12] = ctx->t0 ^ BLAKE2S_IVS[4];
    ctx->state[13] = ctx->t1 ^ BLAKE2S_IVS[5];
    ctx->state[14] = ctx->f0 ^ BLAKE2S_IVS[6];
    ctx->state[15] = BLAKE2S_IVS[7];
  }

  __device__ __forceinline__ void cuda_blake2s_core(cuda_blake2s_ctx_t* ctx, const uint32_t* m)
  {
    for (int round = 0; round < BLAKE2S_ROUNDS; round++) {
      cuda_blake2s_G(ctx, m[BLAKE2S_SIGMA[round][0]], m[BLAKE2S_SIGMA[round][1]], 0, 4, 8, 12);
      cuda_blake2s_G(ctx, m[BLAKE2S_SIGMA[round][2]], m[BLAKE2S_SIGMA[round][3]], 1, 5, 9, 13);
      cuda_blake2s_G(ctx, m[BLAKE2S_SIGMA[round][4]], m[BLAKE2S_SIGMA[round][5]], 2, 6, 10, 14);
      cuda_blake2s_G(ctx, m[BLAKE2S_SIGMA[round][6]], m[BLAKE2S_SIGMA[round][7]], 3, 7, 11, 15);
      cuda_blake2s_G(ctx, m[BLAKE2S_SIGMA[round][8]], m[BLAKE2S_SIGMA[round][9]], 0, 5, 10, 15);
      cuda_blake2s_G(ctx, m[BLAKE2S_SIGMA[round][10]], m[BLAKE2S_SIGMA[round][11]], 1, 6, 11, 12);
      cuda_blake2s_G(ctx, m[BLAKE2S_SIGMA[round][12]], m[BLAKE2S_SIGMA[round][13]], 2, 7, 8, 13);
      cuda_blake2s_G(ctx, m[BLAKE2S_SIGMA[round][14]], m[BLAKE2S_SIGMA[round][15]], 3, 4, 9, 14);
    }

    for (int offset = 0; offset < BLAKE2S_CHAIN_SIZE; offset++)
      ctx->chain[offset] = ctx->chain[offset] ^ ctx->state[offset] ^ ctx->state[offset + 8];
  }

  __device__ __forceinline__ void cuda_blake2s_compress(cuda_blake2s_ctx_t* ctx, const BYTE* in, WORD inoffset)
  {
    cuda_blake2s_init_state(ctx);
    uint32_t m[16] = {0};
    memcpy((void*)&m, in + inoffset, BLAKE2S_BLOCK_LENGTH);

    cuda_blake2s_core(ctx, m);
  }

  __device__ void cuda_blake2s_init(cuda_blake2s_ctx_t* ctx, BYTE* key, WORD keylen, WORD digestbitlen)
  {
    memset(ctx, 0, sizeof(cuda_blake2s_ctx_t));
    ctx->keylen = keylen;
    ctx->digestlen = digestbitlen >> 3;
    ctx->pos = 0;
    ctx->t0 = 0;
    ctx->t1 = 0;
    ctx->f0 = 0;
    ctx->chain[0] = BLAKE2S_IVS[0] ^ (ctx->digestlen | (ctx->keylen << 8) | 0x1010000);
    ctx->chain[1] = BLAKE2S_IVS[1];
    ctx->chain[2] = BLAKE2S_IVS[2];
    ctx->chain[3] = BLAKE2S_IVS[3];
    ctx->chain[4] = BLAKE2S_IVS[4];
    ctx->chain[5] = BLAKE2S_IVS[5];
    ctx->chain[6] = BLAKE2S_IVS[6];
    ctx->chain[7] = BLAKE2S_IVS[7];

    if (keylen > 0) {
      memcpy(ctx->buff, key, keylen);
      memcpy(ctx->key, key, keylen);
    }
    ctx->pos = (keylen > 0) ? BLAKE2S_BLOCK_LENGTH : 0;
  }

  __device__ void cuda_blake2s_update(cuda_blake2s_ctx_t* ctx, const BYTE* in, LONG inlen)
  {
    if (inlen == 0) return;

    WORD start = 0;
    int64_t in_index = 0, block_index = 0;

    if (ctx->pos) {
      start = BLAKE2S_BLOCK_LENGTH - ctx->pos;
      if (start < inlen) {
        memcpy(ctx->buff + ctx->pos, in, start);
        ctx->t0 += BLAKE2S_BLOCK_LENGTH;

        if (ctx->t0 == 0) ctx->t1++;

        cuda_blake2s_compress(ctx, ctx->buff, 0);
        ctx->pos = 0;
        memset(ctx->buff, 0, BLAKE2S_BLOCK_LENGTH);
      } else {
        memcpy(ctx->buff + ctx->pos, in, inlen);
        ctx->pos += inlen;
        return;
      }
    }

    block_index = inlen - BLAKE2S_BLOCK_LENGTH;
    for (in_index = start; in_index < block_index; in_index += BLAKE2S_BLOCK_LENGTH) {
      ctx->t0 += BLAKE2S_BLOCK_LENGTH;
      if (ctx->t0 == 0) ctx->t1++;

      cuda_blake2s_compress(ctx, in, in_index);
    }

    memcpy(ctx->buff, in + in_index, inlen - in_index);
    ctx->pos += inlen - in_index;
  }

  __device__ void cuda_blake2s_final(cuda_blake2s_ctx_t* ctx, BYTE* out)
  {
    ctx->f0 = 0xFFFFFFFFUL;
    ctx->t0 += ctx->pos;
    if (ctx->pos > 0 && ctx->t0 == 0) ctx->t1++;

    cuda_blake2s_compress(ctx, ctx->buff, 0);
    memset(ctx->buff, 0, BLAKE2S_BLOCK_LENGTH);
    memset(ctx->state, 0, BLAKE2S_STATE_LENGTH);

    int i4 = 0;
    for (int i = 0; i < BLAKE2S_CHAIN_SIZE && ((i4 = i * 4) < ctx->digestlen); i++) {
      BYTE* BYTEs = (BYTE*)(&ctx->chain[i]);
      if (i4 < ctx->digestlen - 4)
        memcpy(out + i4, BYTEs, 4);
      else
        memcpy(out + i4, BYTEs, ctx->digestlen - i4);
    }
  }

  __device__ void cuda_blake2s_hash_2d(
    CUDA_BLAKE2S_CTX* ctx, const Matrix<BYTE>* inputs, unsigned int number_of_inputs, uint64_t row_idx)
  {
    uint32_t m[BLAKE2S_STATE_SIZE] = {0};
    unsigned int index = 0;
    for (int i = 0; i < number_of_inputs; i++) {
      const Matrix<BYTE>* input = inputs + i;
      for (int j = 0; j < (input->width / 4); j++) {
        m[index] = ((uint32_t*)input->values)[row_idx * (input->width / 4) + j];
        index++;
        if (index == BLAKE2S_STATE_SIZE) {
          cuda_blake2s_init_state(ctx);
          cuda_blake2s_core(ctx, m);
          index = 0;
        }
      }
    }

    if (index) {
      for (int i = index; i < BLAKE2S_STATE_SIZE; i++) {
        m[i] = 0;
      }
      cuda_blake2s_init_state(ctx);
      cuda_blake2s_core(ctx, m);
    }
  }

  __global__ void
  kernel_blake2s_hash(const BYTE* indata, WORD inlen, BYTE* outdata, WORD n_batch, WORD BLAKE2S_BLOCK_SIZE, bool mmcs)
  {
    WORD thread = blockIdx.x * blockDim.x + threadIdx.x;
    if (thread >= n_batch) { return; }
    BYTE key[32] = ""; // Null key
    WORD keylen = 0;
    CUDA_BLAKE2S_CTX blake_ctx;
    const BYTE* in = indata + thread * inlen;
    BYTE* out = outdata + thread * BLAKE2S_BLOCK_SIZE;

    cuda_blake2s_init(&blake_ctx, key, keylen, (BLAKE2S_BLOCK_SIZE << 3));
    if (mmcs) {
      memset(blake_ctx.chain, 0, BLAKE2S_CHAIN_LENGTH);
      cuda_blake2s_compress(&blake_ctx, in, 0);
      memcpy(out, blake_ctx.chain, BLAKE2S_CHAIN_LENGTH);
    } else {
      cuda_blake2s_update(&blake_ctx, in, inlen);
      cuda_blake2s_final(&blake_ctx, out);
    }
  }

  __global__ void
  hash_2d_kernel(const Matrix<BYTE>* inputs, BYTE* output, unsigned int number_of_inputs, unsigned int output_len)
  {
    uint64_t idx = (blockIdx.x * blockDim.x) + threadIdx.x;
    if (idx >= inputs[0].height) { return; }

    CUDA_BLAKE2S_CTX ctx;
    cuda_blake2s_init(&ctx, nullptr, 0, (32 << 3));
    memset(ctx.chain, 0, BLAKE2S_CHAIN_LENGTH);
    cuda_blake2s_hash_2d(&ctx, inputs, number_of_inputs, idx);
    memcpy(output + idx * output_len, ctx.chain, BLAKE2S_CHAIN_LENGTH);
  }

  __global__ void compress_and_inject_kernel(
    const Matrix<BYTE>* matrices_to_inject, unsigned int number_of_inputs, const BYTE* prev_layer, BYTE* next_layer)
  {
    int idx = (blockIdx.x * blockDim.x) + threadIdx.x;
    uint64_t number_of_rows = d_next_pow_of_two(matrices_to_inject[0].height);
    if (idx >= number_of_rows) { return; }

    CUDA_BLAKE2S_CTX ctx;
    cuda_blake2s_init(&ctx, nullptr, 0, (32 << 3));
    memset(ctx.chain, 0, BLAKE2S_CHAIN_LENGTH);

    size_t next_layer_len = matrices_to_inject[0].height;
    cuda_blake2s_compress(&ctx, &prev_layer[idx * BLAKE2S_BLOCK_LENGTH], 0);

    if (idx < next_layer_len) { cuda_blake2s_hash_2d(&ctx, matrices_to_inject, number_of_inputs, idx); }

    memcpy(next_layer + idx * BLAKE2S_CHAIN_LENGTH, ctx.chain, BLAKE2S_CHAIN_LENGTH);
  }

  extern "C" {
  cudaError_t
  cuda_blake2s_hash_batch(BYTE* key, WORD keylen, BYTE* in, WORD inlen, BYTE* out, WORD output_len, WORD n_batch)
  {
    BYTE* cuda_indata;
    BYTE* cuda_outdata;
    const WORD BLAKE2S_BLOCK_SIZE = output_len;
    cudaMalloc(&cuda_indata, inlen * n_batch);
    cudaMalloc(&cuda_outdata, BLAKE2S_BLOCK_SIZE * n_batch);
    assert(keylen <= 32);

    cudaMemcpy(cuda_indata, in, inlen * n_batch, cudaMemcpyHostToDevice);

    WORD thread = 256;
    WORD block = (n_batch + thread - 1) / thread;
    kernel_blake2s_hash<<<block, thread>>>(cuda_indata, inlen, cuda_outdata, n_batch, BLAKE2S_BLOCK_SIZE, false);
    cudaMemcpy(out, cuda_outdata, BLAKE2S_BLOCK_SIZE * n_batch, cudaMemcpyDeviceToHost);
    cudaDeviceSynchronize();
    // cudaError_t error = cudaGetLastError();
    // if (error != cudaSuccess) { printf("Error cuda blake2s hash: %s \n", cudaGetErrorString(error)); }
    cudaFree(cuda_indata);
    cudaFree(cuda_outdata);
    CHK_IF_RETURN(cudaPeekAtLastError());
    return CHK_LAST();
  }
  }

  cudaError_t Blake2s::run_hash_many_kernel(
    const BYTE* input,
    BYTE* output,
    WORD number_of_states,
    WORD input_len,
    WORD output_len,
    const device_context::DeviceContext& ctx) const
  {
    const WORD BLAKE2S_BLOCK_SIZE = output_len;
    WORD thread = 256;
    WORD block = (number_of_states + thread - 1) / thread;

    kernel_blake2s_hash<<<block, thread, 0, ctx.stream>>>(
      input, input_len, output, number_of_states, BLAKE2S_BLOCK_SIZE, !use_iv);

    CHK_IF_RETURN(cudaPeekAtLastError());
    return CHK_LAST();
  }

  cudaError_t Blake2s::hash_2d(
    const Matrix<BYTE>* inputs,
    BYTE* states,
    unsigned int number_of_inputs,
    unsigned int output_len,
    uint64_t number_of_rows,
    const device_context::DeviceContext& ctx) const
  {
    const WORD BLAKE2S_BLOCK_SIZE = output_len;
    WORD thread = 256;
    WORD block = (number_of_rows + thread - 1) / thread;

    hash_2d_kernel<<<block, thread, 0, ctx.stream>>>(inputs, states, number_of_inputs, output_len);
    return CHK_LAST();
  }

  cudaError_t Blake2s::compress_and_inject(
    const Matrix<BYTE>* matrices_to_inject,
    unsigned int number_of_inputs,
    uint64_t number_of_rows,
    const BYTE* prev_layer,
    BYTE* next_layer,
    unsigned int digest_elements,
    const device_context::DeviceContext& ctx) const
  {
    const WORD BLAKE2S_BLOCK_SIZE = digest_elements;
    WORD thread = 256;
    WORD block = (number_of_rows + thread - 1) / thread;

    compress_and_inject_kernel<<<block, thread, 0, ctx.stream>>>(
      matrices_to_inject, number_of_inputs, prev_layer, next_layer);
    return CHK_LAST();
  }

} // namespace blake2s