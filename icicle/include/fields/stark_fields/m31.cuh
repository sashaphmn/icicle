#pragma once

#include "fields/storage.cuh"
#include "fields/field.cuh"
#include "fields/complex_extension.cuh"
#include "fields/quartic_extension.cuh"
#include "fields/params_gen.cuh"
#include "fields/point.cuh"

#include <thread>
#include <vector>
#include <random>

namespace m31 {
  template <class CONFIG>
  class MersenneField : public Field<CONFIG>
  {
  public:
    HOST_DEVICE_INLINE MersenneField(const MersenneField& other) : Field<CONFIG>(other) {}
    HOST_DEVICE_INLINE MersenneField(const uint32_t& x = 0) : Field<CONFIG>({x}) {}
    HOST_DEVICE_INLINE MersenneField(storage<CONFIG::limbs_count> x) : Field<CONFIG>{x} {}
    HOST_DEVICE_INLINE MersenneField(const Field<CONFIG>& other) : Field<CONFIG>(other) {}

    static constexpr HOST_DEVICE_INLINE MersenneField zero() { return MersenneField(CONFIG::zero); }

    static constexpr HOST_DEVICE_INLINE MersenneField one() { return MersenneField(CONFIG::one); }

    static constexpr HOST_DEVICE_INLINE MersenneField from(uint32_t value) { return MersenneField(value); }

    static HOST_INLINE MersenneField rand_host() { return MersenneField(Field<CONFIG>::rand_host()); }

    static HOST_INLINE MersenneField rand_host_fast(int seed)
    {
      return MersenneField(Field<CONFIG>::rand_host_fast(seed));
    }

    // static void rand_host_many(MersenneField* out, int size)
    // {
    //   for (int i = 0; i < size; i++) //TODO: parallel - as it's painfully slow
    //     out[i] = rand_host();
    // }

    // static HOST_INLINE MersenneField rand_host_fast(int seed) { return {(uint32_t)seed}; }

    static void rand_host_many(MersenneField* out, int size)
    {
      int num_threads = std::thread::hardware_concurrency(); // Get number of supported threads
      int chunk_size = size / num_threads;

      auto worker = [&](int start, int end) {
        for (int i = start; i < end; i++) {
          // out[i] = rand_host();
          out[i] = rand_host_fast(i);
        }
      };

      std::vector<std::thread> threads;

      // Launch threads
      for (int i = 0; i < num_threads; i++) {
        int start = i * chunk_size;
        int end = (i == num_threads - 1) ? size : (i + 1) * chunk_size;
        threads.emplace_back(worker, start, end);
      }

      // Join threads
      for (auto& t : threads) {
        t.join();
      }
    }

    HOST_DEVICE_INLINE MersenneField& operator=(const Field<CONFIG>& other)
    {
      if (this != &other) { Field<CONFIG>::operator=(other); }
      return *this;
    }

    HOST_DEVICE_INLINE uint32_t get_limb() const { return this->limbs_storage.limbs[0]; }

    //  The `Wide` struct represents a redundant 32-bit form of the Mersenne Field.
    struct Wide {
      uint32_t storage;
      static constexpr HOST_DEVICE_INLINE Wide from_field(const MersenneField& xs)
      {
        Wide out{};
        out.storage = xs.get_limb();
        return out;
      }
      static constexpr HOST_DEVICE_INLINE Wide from_number(const uint32_t& xs)
      {
        Wide out{};
        out.storage = xs;
        return out;
      }
      friend HOST_DEVICE_INLINE Wide operator+(Wide xs, const Wide& ys)
      {
        uint64_t tmp = (uint64_t)xs.storage + ys.storage;                   // max: 2^33 - 2 = 2^32(1) + (2^32 - 2)
        tmp = ((tmp >> 32) << 1) + (uint32_t)(tmp);                         // 2(1)+(2^32-2) = 2^32(1)+(0)
        return from_number((uint32_t)((tmp >> 32) << 1) + (uint32_t)(tmp)); // max: 2(1) + 0 = 2
      }
      friend HOST_DEVICE_INLINE Wide operator-(Wide xs, const Wide& ys)
      {
        uint64_t tmp = CONFIG::modulus_3 + xs.storage -
                       ys.storage; // max: 3(2^31-1) + 2^32-1 - 0 = 2^33 + 2^31-4 = 2^32(2) + (2^31-4)
        return from_number(((uint32_t)(tmp >> 32) << 1) + (uint32_t)(tmp)); // max: 2(2)+(2^31-4) = 2^31
      }
      template <unsigned MODULUS_MULTIPLE = 1>
      static constexpr HOST_DEVICE_INLINE Wide neg(const Wide& xs)
      {
        if (xs.storage == 0) return xs;
        uint64_t tmp = CONFIG::modulus_3 - xs.storage;                      // max: 3(2^31-1) - 0 = 2^32(1) + (2^31 - 3)
        return from_number(((uint32_t)(tmp >> 32) << 1) + (uint32_t)(tmp)); // max: 2(1)+(2^31-3) = 2^31 - 1
      }
      friend HOST_DEVICE_INLINE Wide operator*(Wide xs, const Wide& ys)
      {
        // TODO: here done
        //  uint64_t t1 = (uint64_t)xs.storage * ys.storage; // max: 2^64 - 2^33+1 = 2^32(2^32 - 2) + 1
        //  t1 = ((t1 >> 32) << 1) + (uint32_t)(t1);         // max: 2(2^32 - 2) + 1 = 2^32(1) + (2^32 - 3)
        //  return from_number((((uint32_t)(t1 >> 32)) << 1) + (uint32_t)(t1)); // max: 2(1) - (2^32 - 3) = 2^32 - 1
        return from_number(reduce_stwo((uint64_t)xs.storage * (uint64_t)ys.storage).get_limb());
      }

      friend std::ostream& operator<<(std::ostream& os, const Wide& xs)
      {
        os << xs.storage;
        return os;
      }
    };

    static constexpr HOST_DEVICE_INLINE MersenneField div2(const MersenneField& xs, const uint32_t& power = 1)
    {
      uint32_t t = xs.get_limb();
      return MersenneField{{((t >> power) | (t << (31 - power))) & MersenneField::get_modulus().limbs[0]}};
    }

    static constexpr HOST_DEVICE_INLINE MersenneField neg(const MersenneField& xs)
    {
      uint32_t t = xs.get_limb();
      return MersenneField{{t == 0 ? t : MersenneField::get_modulus().limbs[0] - t}};
    }

    template <unsigned MODULUS_MULTIPLE = 1>
    static constexpr HOST_DEVICE_INLINE MersenneField reduce(Wide xs)
    {
      const uint32_t modulus = MersenneField::get_modulus().limbs[0];
      uint32_t tmp = (xs.storage >> 31) + (xs.storage & modulus); // max: 1 + 2^31-1 = 2^31
      tmp = (tmp >> 31) + (tmp & modulus);                        // max: 1 + 0 = 1
      return MersenneField{{tmp == modulus ? 0 : tmp}};
    }

    /// @brief stwo mult
    static constexpr uint32_t MODULUS_BITS = 31;
    static constexpr uint32_t P = 2147483647; // 2 ** 31 - 1

    static constexpr HOST_DEVICE_INLINE MersenneField reduce_stwo(uint64_t val)
    {
      uint32_t res =
        static_cast<uint32_t>(((((val >> MODULUS_BITS) + val + 1) >> MODULUS_BITS) + val) & static_cast<uint64_t>(P));
      return MersenneField(res);
    }

    static constexpr HOST_DEVICE_INLINE MersenneField inverse(const MersenneField& x)
    {
      uint32_t xs = x.limbs_storage.limbs[0];
      if (xs <= 1) return xs;
      uint32_t a = 1, b = 0, y = xs, z = MersenneField::get_modulus().limbs[0], e, m = z;
      while (1) {
#ifdef __CUDA_ARCH__
        e = __ffs(y) - 1;
#else
        e = __builtin_ctz(y);
#endif
        y >>= e;
        if (a >= m) {
          a = (a & m) + (a >> 31);
          if (a == m) a = 0;
        }
        a = ((a >> e) | (a << (31 - e))) & m;
        if (y == 1) return a;
        e = a + b;
        b = a;
        a = e;
        e = y + z;
        z = y;
        y = e;
      }
    }

    friend HOST_DEVICE_INLINE MersenneField operator+(MersenneField xs, const MersenneField& ys)
    {
      uint32_t m = MersenneField::get_modulus().limbs[0];
      uint32_t t = xs.get_limb() + ys.get_limb();
      if (t > m) t = (t & m) + (t >> 31);
      if (t == m) t = 0;
      return MersenneField{{t}};
    }

    friend HOST_DEVICE_INLINE MersenneField operator-(MersenneField xs, const MersenneField& ys)
    {
      return xs + neg(ys);
    }

    friend HOST_DEVICE_INLINE MersenneField operator*(MersenneField xs, const MersenneField& ys)
    {
      // TODO: here done

      // uint64_t x = (uint64_t)(xs.get_limb()) * ys.get_limb();
      // uint32_t t = ((x >> 31) + (x & MersenneField::get_modulus().limbs[0]));
      // uint32_t m = MersenneField::get_modulus().limbs[0];
      // if (t > m) t = (t & m) + (t >> 31);
      // if (t > m) t = (t & m) + (t >> 31);
      // if (t == m) t = 0;
      // return MersenneField{{t}};

      return MersenneField::reduce_stwo(static_cast<uint64_t>(xs.get_limb()) * static_cast<uint64_t>(ys.get_limb()));
    }

    // Alternatively, conversion operator to uint32_t[1]
    HOST_DEVICE_INLINE operator uint32_t*()
    {
      return this->limbs_storage.limbs; // Assuming real, im1, im2, im3 are contiguous in memory
    }

    static constexpr HOST_DEVICE_INLINE Wide mul_wide(const MersenneField& xs, const MersenneField& ys)
    {
      // return Wide::from_field(xs) * Wide::from_field(ys);
      return Wide::from_field(xs * ys);
    }

    template <unsigned MODULUS_MULTIPLE = 1>
    static constexpr HOST_DEVICE_INLINE Wide sqr_wide(const MersenneField& xs)
    {
      return mul_wide(xs, xs);
    }

    static constexpr HOST_DEVICE_INLINE MersenneField sqr(const MersenneField& xs) { return xs * xs; }

    static constexpr HOST_DEVICE_INLINE MersenneField to_montgomery(const MersenneField& xs) { return xs; }

    static constexpr HOST_DEVICE_INLINE MersenneField from_montgomery(const MersenneField& xs) { return xs; }

    static constexpr HOST_DEVICE_INLINE MersenneField pow(MersenneField base, int exp)
    {
      MersenneField res = one();
      while (exp > 0) {
        if (exp & 1) res = res * base;
        base = base * base;
        exp >>= 1;
      }
      return res;
    }

    static HOST_DEVICE_INLINE MersenneField inv_log_size(uint32_t logn)
    {
      if (logn == 0) { return MersenneField{CONFIG::one}; }
#ifndef __CUDA_ARCH__
      if (logn > CONFIG::ext_omegas_count) THROW_ICICLE_ERR(IcicleError_t::InvalidArgument, "Field: Invalid inv index");
#else
      if (logn > CONFIG::ext_omegas_count) {
        printf(
          "CUDA ERROR: field.cuh: error on inv_log_size(logn): logn(=%u) > omegas_count (=%u)", logn,
          CONFIG::ext_omegas_count);
        assert(false);
      }
#endif // __CUDA_ARCH__
      return MersenneField::inverse(MersenneField{1U << logn});
    }
  };

  struct fp_config {
    static constexpr unsigned limbs_count = 1;
    static constexpr unsigned omegas_count = 1;
    static constexpr unsigned ext_omegas_count = 30;
    static constexpr unsigned modulus_bit_count = 31;
    static constexpr unsigned num_of_reductions = 1;

    static constexpr storage<limbs_count> modulus = {0x7fffffff};
    static constexpr storage<limbs_count> modulus_2 = {0xfffffffe};
    static constexpr uint64_t modulus_3 = 0x17ffffffd;
    static constexpr storage<limbs_count> modulus_4 = {0xfffffffc};
    static constexpr storage<limbs_count> neg_modulus = {0x87ffffff};
    static constexpr storage<2 * limbs_count> modulus_wide = {0x7fffffff, 0x00000000};
    static constexpr storage<2 * limbs_count> modulus_squared = {0x00000001, 0x3fffffff};
    static constexpr storage<2 * limbs_count> modulus_squared_2 = {0x00000002, 0x7ffffffe};
    static constexpr storage<2 * limbs_count> modulus_squared_4 = {0x00000004, 0xfffffffc};

    static constexpr storage<limbs_count> m = {0x80000001};
    static constexpr storage<limbs_count> one = {0x00000001};
    static constexpr storage<limbs_count> zero = {0x00000000};
    static constexpr storage<limbs_count> montgomery_r = {0x00000001};
    static constexpr storage<limbs_count> montgomery_r_inv = {0x00000001};
    static constexpr storage<limbs_count> rou = {0x00000001};

    static constexpr storage_array<omegas_count, limbs_count> omega = {{{0x7ffffffe}}};

    static constexpr storage_array<omegas_count, limbs_count> omega_inv = {{{0x7ffffffe}}};

    static constexpr storage_array<omegas_count, limbs_count> inv = {{{0x40000000}}};

    // nonresidue to generate the extension field
    static constexpr uint32_t nonresidue = 1;
    // true if nonresidue is negative.
    static constexpr bool nonresidue_is_negative = true;

    static constexpr storage<limbs_count> circle_point_generator_x = {2};
    static constexpr storage<limbs_count> circle_point_generator_y = {1268011823};
  };

  /**
   * Scalar field. Is always a prime field.
   */
  typedef MersenneField<fp_config> scalar_t;

  /**
   * Quartic extension field of `scalar_t` enabled if `-DEXT_FIELD` env variable is.
   */
  typedef ComplexExtensionField<fp_config, scalar_t> c_extension_t;

  const c_extension_t ROU = {{2}, {1268011823}};

  static HOST_INLINE c_extension_t get_ext_omega(uint32_t logn)
  {
    if (logn == 0) { return c_extension_t::one(); }

    if (logn > fp_config::ext_omegas_count) {
      THROW_ICICLE_ERR(IcicleError_t::InvalidArgument, "Field: Invalid ext omega index");
    }

    c_extension_t omega = ROU;
    for (int i = 0; i < fp_config::ext_omegas_count - logn; i++) {
      omega = c_extension_t::sqr(omega);
    }
    return omega;
  }

  /**
   * Extension field of `scalar_t` enabled if `-DEXT_FIELD` env variable is.
   */
  typedef QuarticExtensionField<fp_config, scalar_t> q_extension_t;
  typedef ComplexExtensionField<fp_config, scalar_t> extension_t;

  typedef circle_math::CirclePoint<fp_config, scalar_t> point_t;
  typedef circle_math::CirclePoint<fp_config, q_extension_t> secure_point_t;

  typedef circle_math::CircleCoset<fp_config, scalar_t> coset_t;

} // namespace m31

template <typename CONFIG>
struct std::hash<m31::MersenneField<CONFIG>> {
  std::size_t operator()(const m31::MersenneField<CONFIG>& key) const
  {
    std::size_t hash = 0;
    // boost hashing, see
    // https://stackoverflow.com/questions/35985960/c-why-is-boosthash-combine-the-best-way-to-combine-hash-values/35991300#35991300
    for (int i = 0; i < CONFIG::limbs_count; i++)
      hash ^= std::hash<uint32_t>()(key.limbs_storage.limbs[i]) + 0x9e3779b9 + (hash << 6) + (hash >> 2);
    return hash;
  }
};

template <class CONFIG>
struct SharedMemory<m31::MersenneField<CONFIG>> {
  __device__ m31::MersenneField<CONFIG>* getPointer()
  {
    extern __shared__ m31::MersenneField<CONFIG> s_scalar_[];
    return s_scalar_;
  }
};
