#include <cuda_runtime.h>
#include "../../../include/types.h"
#include <stdbool.h>

#ifndef _BW6_761_G2MSM_H
#define _BW6_761_G2MSM_H

#ifdef __cplusplus
extern "C" {
#endif

cudaError_t bw6_761G2MSMCuda(const scalar_t* scalars,const  g2_affine_t* points, int count, MSMConfig* config, g2_projective_t* out);
cudaError_t bw6_761G2PrecomputeMSMBases(g2_affine_t* points, int count, int precompute_factor, int _c, bool bases_on_device, DeviceContext* ctx, g2_affine_t* out);

#ifdef __cplusplus
}
#endif

#endif
