use crate::curve::{Bls12377Curve, ScalarField};
use icicle_core::ecntt::Projective;
use icicle_core::impl_ecntt;

impl_ecntt!("bls12_377", bls12_377, ScalarField, Bls12377Curve);

#[cfg(test)]
pub(crate) mod tests {
    use crate::curve::{Bls12377Curve, ScalarField};

    use icicle_core::ecntt::tests::*;
    use icicle_core::impl_ecntt_tests;

    impl_ecntt_tests!(ScalarField, Bls12377Curve);
}
