package config

func init() {
	var grumpkin = CurveData{
		PackageName:         "grumpkin",
		Curve:               "grumpkin",
		GnarkImport:         "",
		SupportsNTT:         false,
		SupportsECNTT:       false,
		SupportsG2:          false,
		SupportsPoseidon:    true,
		SupportsPoseidon2:   true,
		ScalarFieldNumLimbs: 8,
		BaseFieldNumLimbs:   8,
		G2FieldNumLimbs:     0,
	}

	addCurve(grumpkin)
}
