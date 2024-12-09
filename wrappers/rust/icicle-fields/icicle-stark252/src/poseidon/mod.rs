use crate::field::ScalarField;
use icicle_core::impl_poseidon;

impl_poseidon!("stark252", stark252, ScalarField);

#[cfg(test)]
pub(crate) mod tests {
    use crate::field::ScalarField;
    use icicle_core::impl_poseidon_tests;
    use icicle_core::poseidon::tests::*;

    impl_poseidon_tests!(ScalarField);
}
