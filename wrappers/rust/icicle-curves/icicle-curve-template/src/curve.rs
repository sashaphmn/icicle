#[cfg(feature = "arkworks")]
use ark_<CURVE>::{g1::Config as ArkG1Config, Fq, Fr};
#[cfg(all(feature = "arkworks", feature = "g2"))]
use ark_<CURVE>::{g2::Config as ArkG2Config, Fq2};
use icicle_core::curve::{Affine, Curve, Projective};
use icicle_core::field::{Field, MontgomeryConvertibleField};
use icicle_core::traits::{FieldConfig, FieldImpl, GenerateRandom};
use icicle_core::{impl_curve, impl_field, impl_scalar_field};
use icicle_cuda_runtime::device_context::DeviceContext;
use icicle_cuda_runtime::error::CudaError;
use icicle_cuda_runtime::memory::HostOrDeviceSlice;

pub(crate) const SCALAR_LIMBS: usize = ;
pub(crate) const BASE_LIMBS: usize = ;
#[cfg(feature = "g2")]
pub(crate) const G2_BASE_LIMBS: usize = ;

impl_scalar_field!("<CURVE>", <CURVE>_sf, SCALAR_LIMBS, ScalarField, ScalarCfg, Fr);
impl_field!(BASE_LIMBS, BaseField, BaseCfg, Fq);
#[cfg(feature = "g2")]
impl_field!(G2_BASE_LIMBS, G2BaseField, G2BaseCfg, Fq2);
impl_curve!(
    "<CURVE>",
    <CURVE>,
    CurveCfg,
    ScalarField,
    BaseField,
    ArkG1Config,
    G1Affine,
    G1Projective
);
#[cfg(feature = "g2")]
impl_curve!(
    "<CURVE>G2",
    <CURVE>_g2,
    G2CurveCfg,
    ScalarField,
    G2BaseField,
    ArkG2Config,
    G2Affine,
    G2Projective
);

#[cfg(test)]
mod tests {
    use super::{CurveCfg, ScalarField, BASE_LIMBS};
    #[cfg(feature = "g2")]
    use super::{G2CurveCfg, G2_BASE_LIMBS};
    use icicle_core::curve::Curve;
    use icicle_core::tests::*;
    use icicle_core::traits::FieldImpl;
    use icicle_core::{impl_curve_tests, impl_field_tests};

    impl_field_tests!(ScalarField);
    impl_curve_tests!(BASE_LIMBS, CurveCfg);
    #[cfg(feature = "g2")]
    mod g2 {
        use super::*;
        impl_curve_tests!(G2_BASE_LIMBS, G2CurveCfg);
    }
}
