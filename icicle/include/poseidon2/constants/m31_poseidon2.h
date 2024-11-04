#pragma once
#ifndef M31_POSEIDON2_H
#define M31_POSEIDON2_H

namespace poseidon2_constants_m31 {

  namespace t2 {
    int internal_rounds = 25;

    int alpha = 5;

    unsigned char mat_diag_m_1[] = {
      0x01, 0x00, 0x00, 0x00,
      0x02, 0x00, 0x00, 0x00,
    };

    unsigned char round_constants[] = {
      0xb4, 0x5a, 0x7e, 0x4c,
      0x13, 0xa1, 0x81, 0x59,
      0x0f, 0xae, 0x6a, 0x77,
      0x47, 0xb6, 0xf3, 0x23,
      0xa3, 0x99, 0x3f, 0x33,
      0x09, 0xb9, 0xe2, 0x78,
      0xd4, 0x7f, 0x45, 0x72,
      0x8a, 0xe1, 0xfe, 0x67,
      0x5d, 0x1e, 0x9c, 0x74,
      0xa5, 0x3d, 0x15, 0x20,
      0x9c, 0x36, 0x8a, 0x28,
      0x1a, 0x48, 0xbb, 0x39,
      0x33, 0x90, 0x4d, 0x58,
      0x89, 0x86, 0xb3, 0x4f,
      0xc8, 0xda, 0x69, 0x27,
      0xc0, 0xc5, 0x50, 0x13,
      0x89, 0xe6, 0xbd, 0x31,
      0x82, 0x9c, 0x39, 0x4d,
      0xba, 0xe4, 0x51, 0x31,
      0x21, 0x7c, 0xc6, 0x56,
      0x36, 0xae, 0xae, 0x12,
      0x90, 0x08, 0x7b, 0x7e,
      0x2c, 0x52, 0xfc, 0x28,
      0x76, 0x6e, 0x76, 0x74,
      0x30, 0x83, 0xd5, 0x57,
      0x35, 0xea, 0x14, 0x34,
      0x41, 0xc4, 0xe5, 0x38,
      0x12, 0x97, 0x36, 0x1e,
      0xf3, 0xd9, 0xb6, 0x15,
      0x0a, 0x49, 0x08, 0x48,
      0x06, 0xf3, 0xd3, 0x0a,
      0x9e, 0x4d, 0xdd, 0x70,
      0x0f, 0xa8, 0xf5, 0x47,
      0x7d, 0x0a, 0x0f, 0x67,
      0xf5, 0x15, 0x95, 0x06,
      0x6b, 0xc7, 0xe1, 0x33,
      0xeb, 0xa4, 0x88, 0x13,
      0xb2, 0x2d, 0x4f, 0x37,
      0x9a, 0xf7, 0x48, 0x06,
      0x69, 0xc1, 0x18, 0x34,
      0x81, 0x51, 0x73, 0x60,
      0x19, 0x5d, 0x03, 0x71,
      0xaf, 0x79, 0x18, 0x56,
      0x93, 0x61, 0x9d, 0x64,
      0xa3, 0xb0, 0xfd, 0x26,
      0x1d, 0x81, 0x50, 0x0a,
      0x13, 0xc9, 0x91, 0x1e,
      0xd9, 0xcd, 0x3b, 0x29,
      0x10, 0xdb, 0xdc, 0x01,
    };
  }


  namespace t3 {
    int internal_rounds = 19;

    int alpha = 5;

    unsigned char mat_diag_m_1[] = {
      0x01, 0x00, 0x00, 0x00,
      0x01, 0x00, 0x00, 0x00,
      0x02, 0x00, 0x00, 0x00,
    };

    unsigned char round_constants[] = {
      0x0a, 0x42, 0x30, 0x66,
      0xb5, 0xb6, 0x77, 0x6e,
      0xf3, 0xad, 0x5b, 0x08,
      0x3c, 0x7b, 0xd1, 0x06,
      0xbb, 0xa8, 0x2c, 0x2d,
      0x13, 0x5d, 0x58, 0x3e,
      0x9c, 0xd2, 0x96, 0x7f,
      0x89, 0x0c, 0xc6, 0x02,
      0x5d, 0xc7, 0x73, 0x3d,
      0x92, 0x53, 0x68, 0x44,
      0xb7, 0xb9, 0x45, 0x75,
      0xe4, 0xb4, 0xab, 0x14,
      0x37, 0x85, 0xbc, 0x18,
      0xc1, 0x93, 0x4f, 0x20,
      0x64, 0xb3, 0x81, 0x40,
      0x9b, 0x9f, 0xbe, 0x5c,
      0xa1, 0x90, 0x9f, 0x7f,
      0xc2, 0x7b, 0xbf, 0x3c,
      0xab, 0x6e, 0x8a, 0x26,
      0x11, 0x34, 0x24, 0x6f,
      0xf8, 0x54, 0x75, 0x2c,
      0x61, 0x2c, 0xab, 0x5f,
      0xae, 0x76, 0x13, 0x11,
      0xbe, 0x0e, 0xfe, 0x2c,
      0x29, 0xe7, 0xb2, 0x36,
      0xd3, 0x9a, 0x90, 0x29,
      0xd6, 0x20, 0xb8, 0x28,
      0x5d, 0x3e, 0x32, 0x54,
      0x2e, 0x4d, 0x6e, 0x78,
      0xd3, 0x30, 0x4f, 0x32,
      0x17, 0x3d, 0xf9, 0x65,
      0xb2, 0x73, 0x8c, 0x4f,
      0x34, 0xfe, 0xd9, 0x23,
      0xd1, 0x9b, 0x90, 0x17,
      0x54, 0x4a, 0x86, 0x74,
      0x84, 0xda, 0x20, 0x71,
      0x76, 0x83, 0x23, 0x4c,
      0x1e, 0x79, 0xd0, 0x28,
      0xb1, 0x4a, 0x4f, 0x15,
      0x7e, 0x49, 0xcd, 0x27,
      0x16, 0x8f, 0xd4, 0x32,
      0xb6, 0x68, 0x5e, 0x00,
      0x9b, 0x83, 0x6a, 0x68,
      0xfb, 0xc8, 0x24, 0x3c,
      0xd5, 0x22, 0x07, 0x53,
      0x9a, 0x79, 0xfe, 0x23,
      0x5f, 0xc0, 0x5d, 0x23,
      0x00, 0xa5, 0x12, 0x19,
      0xb0, 0xc2, 0xb5, 0x5b,
      0xd7, 0xd7, 0x42, 0x57,
      0x06, 0x76, 0x47, 0x37,
      0x71, 0x04, 0x60, 0x1d,
      0x2c, 0x8b, 0x7a, 0x42,
      0xcd, 0xec, 0x89, 0x7d,
      0x19, 0x10, 0x8e, 0x37,
    };
  }


  namespace t4 {
    int internal_rounds = 22;

    int alpha = 5;

    unsigned char mat_diag_m_1[] = {
      0x7c, 0x10, 0x15, 0x0f,
      0x64, 0xfa, 0x28, 0x46,
      0xb8, 0x12, 0x41, 0x25,
      0xcb, 0x04, 0xa0, 0x08,
    };

    unsigned char round_constants[] = {
      0x22, 0x2c, 0xaf, 0x16,
      0x6b, 0xcd, 0x04, 0x78,
      0x4a, 0x23, 0x6e, 0x24,
      0x12, 0xcd, 0xd3, 0x5d,
      0x5c, 0xfb, 0x1b, 0x32,
      0x8b, 0x35, 0x50, 0x59,
      0x46, 0xa4, 0x64, 0x72,
      0x5e, 0x32, 0xa0, 0x78,
      0xc1, 0x02, 0xc5, 0x56,
      0xdf, 0x26, 0x9d, 0x45,
      0xe9, 0x80, 0xa8, 0x73,
      0xfe, 0x4b, 0xec, 0x41,
      0x2f, 0x74, 0x43, 0x55,
      0x75, 0x82, 0xf6, 0x72,
      0xb1, 0x08, 0xed, 0x19,
      0x79, 0xda, 0x7c, 0x14,
      0xca, 0xe4, 0x7e, 0x63,
      0xb6, 0x81, 0xd1, 0x0a,
      0xe5, 0xa3, 0xcb, 0x06,
      0x1a, 0x58, 0x19, 0x6d,
      0x18, 0xe5, 0x0c, 0x6e,
      0xba, 0xfc, 0xec, 0x67,
      0x3a, 0x16, 0x38, 0x13,
      0xed, 0x88, 0x73, 0x1b,
      0x46, 0x5b, 0x96, 0x33,
      0x53, 0xa5, 0x8f, 0x4e,
      0xf4, 0x11, 0x54, 0x30,
      0xe7, 0x4c, 0x75, 0x58,
      0x3d, 0x54, 0x80, 0x43,
      0xec, 0x78, 0x3f, 0x4f,
      0xa9, 0xaf, 0x2b, 0x7e,
      0x27, 0x6f, 0xe9, 0x60,
      0x74, 0x8e, 0x15, 0x30,
      0xc0, 0xac, 0xdb, 0x64,
      0xdd, 0xee, 0x16, 0x35,
      0xcc, 0x43, 0x06, 0x20,
      0x35, 0x34, 0x4c, 0x71,
      0x39, 0xae, 0xa7, 0x35,
      0x80, 0xd3, 0xa8, 0x22,
      0xb5, 0xc7, 0xb1, 0x17,
      0x89, 0x85, 0x58, 0x14,
      0x1f, 0x32, 0x25, 0x63,
      0x4f, 0x2d, 0xa1, 0x18,
      0x68, 0x2c, 0xd6, 0x1c,
      0xfc, 0xba, 0xf5, 0x1e,
      0x12, 0x30, 0x3f, 0x08,
      0xc0, 0x4d, 0x33, 0x6e,
      0x4d, 0x57, 0x0d, 0x59,
      0x07, 0x3a, 0x21, 0x14,
      0xc4, 0xe1, 0xc3, 0x74,
      0xbd, 0xc4, 0x7f, 0x4b,
      0x3d, 0x25, 0x29, 0x3a,
      0x30, 0x82, 0x4b, 0x01,
      0x33, 0x80, 0x22, 0x13,
    };
  }


  namespace t8 {
    int internal_rounds = 13;

    int alpha = 5;

    unsigned char mat_diag_m_1[] = {
      0x56, 0x8b, 0x12, 0x03,
      0xfe, 0x3a, 0x7d, 0x4d,
      0xaa, 0x42, 0x09, 0x35,
      0xed, 0xc3, 0xa8, 0x2e,
      0x48, 0x0b, 0xe8, 0x5c,
      0x80, 0xfd, 0x5a, 0x76,
      0xfb, 0x06, 0x8f, 0x19,
      0x16, 0x2a, 0x1b, 0x7c,
    };

    unsigned char round_constants[] = {
      0x54, 0x07, 0x91, 0x12,
      0xbe, 0x49, 0xed, 0x36,
      0x97, 0x74, 0xc9, 0x07,
      0xed, 0x1f, 0xd7, 0x40,
      0x3c, 0x31, 0xee, 0x2d,
      0x70, 0x44, 0xde, 0x26,
      0xe2, 0x5a, 0x7a, 0x5d,
      0xff, 0x33, 0x1e, 0x1f,
      0x61, 0x0c, 0xc0, 0x13,
      0xf6, 0xe3, 0xc4, 0x0c,
      0xa0, 0x2b, 0xc3, 0x54,
      0x4a, 0xe5, 0x77, 0x4c,
      0x04, 0xcd, 0x51, 0x79,
      0xa2, 0xfa, 0x05, 0x4c,
      0xa0, 0x9d, 0x47, 0x6e,
      0x30, 0x77, 0x11, 0x38,
      0xce, 0xc4, 0x74, 0x73,
      0xea, 0x1a, 0x28, 0x50,
      0x55, 0x2e, 0x23, 0x48,
      0x1e, 0x9d, 0x53, 0x36,
      0xc1, 0x4a, 0x5a, 0x5e,
      0x08, 0x44, 0xea, 0x77,
      0x67, 0xa0, 0xef, 0x1c,
      0xef, 0x05, 0xce, 0x09,
      0x81, 0x4c, 0xd2, 0x26,
      0x15, 0x3b, 0x87, 0x4c,
      0x65, 0xea, 0xd2, 0x77,
      0xb3, 0x8b, 0xb2, 0x56,
      0x8c, 0x9f, 0x2b, 0x2b,
      0xf9, 0xe3, 0x57, 0x4a,
      0xa7, 0x45, 0xc4, 0x32,
      0xc7, 0x41, 0x2f, 0x78,
      0x91, 0x58, 0x20, 0x6c,
      0x5e, 0x3f, 0x50, 0x67,
      0x3f, 0x59, 0x6c, 0x75,
      0x9a, 0x47, 0x62, 0x04,
      0xca, 0xc9, 0x71, 0x42,
      0xce, 0xf3, 0x1a, 0x4d,
      0x99, 0x99, 0x0e, 0x18,
      0xdb, 0x28, 0x53, 0x02,
      0x99, 0x8c, 0x8b, 0x39,
      0x5c, 0x75, 0xf4, 0x03,
      0x5f, 0x4b, 0xc7, 0x68,
      0x81, 0x8c, 0x54, 0x5f,
      0x7f, 0x62, 0x7a, 0x73,
      0x3d, 0xee, 0x77, 0x61,
      0xc7, 0x67, 0x75, 0x48,
      0xf4, 0x94, 0x7f, 0x06,
      0x7d, 0x08, 0xd1, 0x2c,
      0x54, 0x90, 0x4d, 0x30,
      0xab, 0x2b, 0x0e, 0x49,
      0x18, 0x9e, 0x65, 0x5c,
      0xe3, 0xcc, 0x47, 0x7c,
      0xb5, 0x87, 0xa3, 0x61,
      0xf0, 0xde, 0x57, 0x38,
      0x7f, 0x46, 0x24, 0x26,
      0xc8, 0x3c, 0xf5, 0x7e,
      0x58, 0xd3, 0x2a, 0x1d,
      0xf2, 0xaf, 0x6c, 0x79,
      0xfd, 0xc4, 0xea, 0x10,
      0xa5, 0x54, 0x4b, 0x7f,
      0x00, 0x6d, 0x08, 0x35,
      0x5f, 0x00, 0xb5, 0x41,
      0x3e, 0x9f, 0xab, 0x49,
      0xfe, 0xf6, 0x0c, 0x7d,
      0x39, 0x48, 0x90, 0x13,
      0xcd, 0x28, 0xdc, 0x67,
      0x3b, 0x2a, 0x32, 0x28,
      0x95, 0x6b, 0x1d, 0x29,
      0x04, 0x63, 0x5e, 0x4b,
      0x3f, 0x79, 0x4b, 0x5e,
      0xd4, 0xe5, 0x3d, 0x1c,
      0x0e, 0x15, 0xcd, 0x52,
      0x5b, 0x05, 0x52, 0x78,
      0x2b, 0x12, 0x71, 0x3f,
      0x08, 0xa0, 0x8b, 0x40,
      0xd9, 0xde, 0xd7, 0x76,
    };
  }


  namespace t12 {
    int internal_rounds = 12;

    int alpha = 5;

    unsigned char mat_diag_m_1[] = {
      0x66, 0x0d, 0xa2, 0x4a,
      0x8c, 0x08, 0x67, 0x37,
      0x8a, 0xbd, 0x82, 0x5e,
      0x8e, 0x01, 0x33, 0x28,
      0x0f, 0x30, 0x42, 0x59,
      0x6c, 0x8a, 0x1b, 0x46,
      0x85, 0x3b, 0x64, 0x3c,
      0x5c, 0xc0, 0x08, 0x4c,
      0xce, 0x76, 0x9f, 0x56,
      0xb1, 0xdb, 0x28, 0x47,
      0xeb, 0x80, 0x8d, 0x75,
      0x3c, 0x82, 0xfa, 0x33,
    };

    unsigned char round_constants[] = {
      0xe0, 0xc0, 0xb6, 0x68,
      0xb5, 0x57, 0xc2, 0x4e,
      0x48, 0xf3, 0xd9, 0x50,
      0x53, 0xcb, 0x34, 0x22,
      0xee, 0xb9, 0xe4, 0x04,
      0xfe, 0x81, 0x59, 0x30,
      0xf9, 0xae, 0x52, 0x33,
      0xa2, 0x33, 0x3c, 0x1c,
      0x8a, 0xf5, 0xac, 0x7a,
      0x97, 0xa8, 0xcb, 0x06,
      0xc0, 0x6f, 0xf4, 0x7a,
      0x08, 0xeb, 0xe5, 0x51,
      0x20, 0x6e, 0x4c, 0x09,
      0x39, 0x0e, 0x46, 0x61,
      0xb7, 0x11, 0x32, 0x69,
      0xe2, 0xb2, 0xca, 0x18,
      0x0e, 0x3d, 0xab, 0x05,
      0x78, 0xb7, 0xc0, 0x61,
      0x71, 0x8d, 0xf6, 0x7f,
      0x5c, 0xb3, 0xed, 0x7e,
      0xc6, 0xa0, 0x1b, 0x06,
      0x70, 0x47, 0x63, 0x26,
      0xa4, 0x02, 0x01, 0x3f,
      0x98, 0xe2, 0xae, 0x4a,
      0xe8, 0xa9, 0xe7, 0x38,
      0x0f, 0x8c, 0xf9, 0x06,
      0xc1, 0x6e, 0x51, 0x75,
      0xc5, 0x57, 0x28, 0x69,
      0x5c, 0x2c, 0x91, 0x1d,
      0xff, 0x84, 0x6d, 0x05,
      0x61, 0x70, 0x2d, 0x2f,
      0xcf, 0x6a, 0xa1, 0x2d,
      0xf8, 0xa6, 0x2a, 0x09,
      0x6c, 0x57, 0xe7, 0x1a,
      0xb1, 0x68, 0xa8, 0x3b,
      0x1b, 0x9a, 0x19, 0x17,
      0x76, 0x0e, 0xad, 0x3c,
      0xe3, 0x37, 0xf2, 0x42,
      0xbc, 0x53, 0x04, 0x7d,
      0xca, 0xc5, 0x8d, 0x08,
      0xf9, 0x8c, 0x28, 0x07,
      0x28, 0x18, 0x1b, 0x5f,
      0xf1, 0xbe, 0x28, 0x44,
      0x7d, 0xdc, 0xce, 0x29,
      0x41, 0x63, 0xe6, 0x49,
      0xd1, 0xa1, 0x72, 0x20,
      0x3e, 0x95, 0x03, 0x68,
      0xd3, 0x35, 0xbc, 0x53,
      0xbd, 0xd9, 0x3d, 0x2b,
      0xe6, 0x95, 0xef, 0x7a,
      0xd0, 0x46, 0x5b, 0x0e,
      0x91, 0x2e, 0x82, 0x7d,
      0xcd, 0xff, 0xa3, 0x74,
      0xe1, 0x40, 0x13, 0x2d,
      0x9a, 0x27, 0x9f, 0x05,
      0x93, 0x7d, 0x90, 0x54,
      0xce, 0xdb, 0x46, 0x3b,
      0x54, 0xf5, 0xaa, 0x77,
      0x09, 0xea, 0xf5, 0x6c,
      0xd7, 0xee, 0x1d, 0x5f,
      0xe5, 0x2a, 0x46, 0x3c,
      0x1f, 0xbb, 0xbd, 0x14,
      0x18, 0xd8, 0x9d, 0x36,
      0xa6, 0xf8, 0x82, 0x0d,
      0xe0, 0x0d, 0xff, 0x1b,
      0x4a, 0xe9, 0xe6, 0x5d,
      0x5a, 0xd6, 0x48, 0x3d,
      0x84, 0x6d, 0xcf, 0x06,
      0x6a, 0xcc, 0x48, 0x7b,
      0xd3, 0x57, 0x7b, 0x44,
      0xc5, 0x78, 0xd5, 0x76,
      0xf7, 0xb1, 0xe6, 0x5b,
      0xa4, 0x1f, 0x9e, 0x53,
      0xc3, 0x78, 0xd2, 0x3b,
      0x1c, 0x1c, 0xbc, 0x09,
      0x20, 0x95, 0xb0, 0x54,
      0xfb, 0x78, 0xd5, 0x6d,
      0xa1, 0xc3, 0x17, 0x78,
      0xef, 0x90, 0x19, 0x12,
      0xa9, 0x0f, 0x46, 0x48,
      0x89, 0xa4, 0xf7, 0x10,
      0x30, 0xeb, 0xc1, 0x2d,
      0x5f, 0xd4, 0xae, 0x6b,
      0xeb, 0xac, 0x88, 0x1f,
      0xf5, 0x49, 0x67, 0x77,
      0xa0, 0xe0, 0xf0, 0x29,
      0x0f, 0x07, 0xaf, 0x39,
      0xa6, 0xad, 0xa0, 0x3b,
      0x7c, 0x03, 0x9d, 0x1c,
      0x8e, 0x53, 0xec, 0x67,
      0x42, 0x95, 0x26, 0x47,
      0x18, 0x37, 0x90, 0x31,
      0x7c, 0x99, 0x7c, 0x3f,
      0xdc, 0xee, 0xda, 0x1e,
      0xc8, 0x88, 0x65, 0x6e,
      0x0e, 0x16, 0xdc, 0x13,
      0xb3, 0x89, 0x65, 0x7a,
      0xe7, 0x2a, 0xa4, 0x0b,
      0x85, 0x73, 0x5c, 0x40,
      0x7f, 0x2e, 0xa5, 0x3f,
      0xd1, 0x72, 0xcb, 0x20,
      0xca, 0x5c, 0x93, 0x65,
      0xa0, 0xce, 0xb5, 0x6c,
      0x04, 0xdd, 0xfc, 0x37,
      0x1d, 0x83, 0xbb, 0x56,
      0x1f, 0xdd, 0xe6, 0x17,
      0x29, 0x87, 0x94, 0x2a,
      0x61, 0x5b, 0xae, 0x68,
    };
  }


  namespace t16 {
    int internal_rounds = 14;

    int alpha = 5;

    unsigned char mat_diag_m_1[] = {
      0xc4, 0x0a, 0xb8, 0x07,
      0x33, 0xcb, 0xd9, 0x6b,
      0x9f, 0x3f, 0xee, 0x48,
      0x19, 0xdd, 0x63, 0x4f,
      0xb3, 0x46, 0xc5, 0x18,
      0x8b, 0x9e, 0xf8, 0x5a,
      0xe8, 0x3d, 0xf2, 0x4f,
      0xf6, 0xaa, 0x78, 0x4f,
      0xd4, 0xc6, 0xbd, 0x53,
      0x3e, 0x82, 0x59, 0x5c,
      0x72, 0x1c, 0x47, 0x2a,
      0x79, 0x5e, 0x97, 0x4c,
      0xd4, 0x64, 0xdc, 0x58,
      0x5d, 0x31, 0xe9, 0x06,
      0x86, 0x22, 0xf3, 0x2c,
      0x5d, 0x75, 0xb6, 0x2f,
    };

    unsigned char round_constants[] = {
      0x52, 0xab, 0x8b, 0x76,
      0x7d, 0xab, 0xe0, 0x70,
      0x8a, 0x6c, 0x26, 0x3d,
      0x45, 0x20, 0xa4, 0x6d,
      0x22, 0xef, 0x0f, 0x60,
      0x6b, 0xce, 0xda, 0x41,
      0xd4, 0xbd, 0xf9, 0x64,
      0xfe, 0xd4, 0x42, 0x5d,
      0x6d, 0x51, 0xb1, 0x76,
      0x17, 0xa7, 0xc9, 0x6f,
      0xb6, 0x4f, 0xac, 0x70,
      0xf6, 0x4e, 0x19, 0x00,
      0xe2, 0x44, 0xb6, 0x22,
      0xd5, 0x16, 0x79, 0x1f,
      0xe2, 0x1b, 0x58, 0x47,
      0x23, 0xa1, 0x10, 0x27,
      0x67, 0xe8, 0x84, 0x62,
      0xfe, 0x3a, 0x8d, 0x01,
      0xf3, 0x9e, 0xf9, 0x5d,
      0x7b, 0x46, 0x1e, 0x4c,
      0xbc, 0x6a, 0x6f, 0x56,
      0x27, 0xe4, 0x94, 0x29,
      0x42, 0x6d, 0x8a, 0x53,
      0xcf, 0xf2, 0x7b, 0x5d,
      0xab, 0x2d, 0xda, 0x7f,
      0xc4, 0x54, 0xd8, 0x0f,
      0xca, 0x2f, 0x92, 0x46,
      0xa1, 0x63, 0x77, 0x3d,
      0xca, 0x05, 0xfd, 0x19,
      0x43, 0xbb, 0x4b, 0x0a,
      0x51, 0x58, 0x07, 0x15,
      0x76, 0x3d, 0x90, 0x3d,
      0xf7, 0x0f, 0x29, 0x2d,
      0xa0, 0x9f, 0x80, 0x40,
      0xec, 0xc6, 0xda, 0x59,
      0xa2, 0x27, 0x79, 0x12,
      0xa0, 0x0e, 0xbf, 0x6b,
      0x0f, 0x14, 0x94, 0x02,
      0x76, 0x29, 0x74, 0x24,
      0x81, 0xc0, 0x84, 0x6e,
      0x4a, 0x4f, 0x48, 0x22,
      0x59, 0xae, 0x4c, 0x35,
      0xe1, 0xff, 0x53, 0x04,
      0xcc, 0xa3, 0x47, 0x3f,
      0x4e, 0x20, 0x88, 0x00,
      0x09, 0xe1, 0x66, 0x60,
      0x80, 0x4b, 0x7c, 0x3b,
      0x5d, 0x66, 0x55, 0x6b,
      0x97, 0xb8, 0xc4, 0x3b,
      0x78, 0xf3, 0x5b, 0x73,
      0x42, 0xaf, 0x8d, 0x50,
      0x2b, 0xfc, 0x84, 0x18,
      0x4c, 0xf2, 0x14, 0x72,
      0x0a, 0xbe, 0x98, 0x74,
      0x40, 0xe6, 0x60, 0x1a,
      0x28, 0xf9, 0x03, 0x33,
      0x76, 0x63, 0xb4, 0x29,
      0x68, 0xbb, 0x96, 0x5c,
      0xa5, 0x97, 0xd0, 0x65,
      0x9f, 0x8e, 0x35, 0x1d,
      0x17, 0x90, 0x9a, 0x4a,
      0x76, 0xcf, 0x24, 0x47,
      0x0f, 0xf7, 0x7a, 0x34,
      0x9a, 0xe5, 0x77, 0x1e,
      0xbf, 0xc4, 0x7e, 0x7f,
      0x6f, 0x92, 0x21, 0x04,
      0x69, 0xe6, 0x98, 0x51,
      0x48, 0x31, 0xdb, 0x34,
      0xfd, 0xba, 0x68, 0x43,
      0x7f, 0x5c, 0x68, 0x66,
      0x9a, 0x24, 0xd3, 0x78,
      0x81, 0x78, 0x18, 0x60,
      0x7a, 0xd6, 0xda, 0x76,
      0x37, 0xb4, 0x90, 0x06,
      0x11, 0x53, 0xa9, 0x1e,
      0x9a, 0x36, 0xe5, 0x40,
      0xfc, 0x03, 0xf1, 0x38,
      0x21, 0x6a, 0x22, 0x1d,
      0x13, 0x06, 0x09, 0x57,
      0x08, 0x21, 0xa4, 0x1f,
      0x50, 0xef, 0xbb, 0x17,
      0x1c, 0xe1, 0xf7, 0x1f,
      0xca, 0x24, 0x7b, 0x04,
      0x75, 0x02, 0x14, 0x4e,
      0xf5, 0x86, 0xa0, 0x4f,
      0x9c, 0x30, 0x9b, 0x07,
      0x47, 0xbd, 0x59, 0x11,
      0xe5, 0xe4, 0x37, 0x6d,
      0xce, 0x8d, 0x5d, 0x07,
      0xa0, 0x1c, 0x12, 0x12,
      0x40, 0x7c, 0x6a, 0x7f,
      0xba, 0x82, 0xe1, 0x68,
      0x1b, 0x20, 0x93, 0x54,
      0x0e, 0xa8, 0x44, 0x04,
      0xc6, 0xf4, 0x64, 0x00,
      0xe6, 0xab, 0x67, 0x64,
      0x62, 0x57, 0x97, 0x66,
      0x9b, 0x8f, 0xf6, 0x2a,
      0xbe, 0x33, 0x5b, 0x34,
      0x7f, 0xd4, 0x70, 0x1b,
      0x17, 0xb7, 0x3d, 0x05,
      0xcb, 0x89, 0x11, 0x38,
      0xf8, 0x15, 0xb9, 0x43,
      0x94, 0x36, 0xdf, 0x20,
      0x26, 0x9d, 0x45, 0x0f,
      0x7b, 0xe9, 0xa0, 0x77,
      0x39, 0xe7, 0x73, 0x2f,
      0xf9, 0xc2, 0x76, 0x18,
      0x9a, 0xe2, 0xa0, 0x65,
      0xbe, 0xef, 0xab, 0x4c,
      0x68, 0x12, 0xbd, 0x5a,
      0x60, 0xa7, 0x34, 0x4d,
      0x99, 0x17, 0x77, 0x12,
      0xac, 0xc9, 0xa0, 0x69,
      0x55, 0x1e, 0x09, 0x39,
      0xd0, 0x1c, 0x61, 0x7f,
      0xda, 0x55, 0xf0, 0x3a,
      0xdf, 0xbb, 0xc0, 0x7a,
      0x24, 0x3a, 0x0f, 0x6e,
      0xf7, 0xb6, 0xe3, 0x41,
      0x6d, 0x75, 0xb3, 0x49,
      0x38, 0xc5, 0x8b, 0x56,
      0xd8, 0x79, 0xc0, 0x20,
      0x2c, 0xc7, 0x01, 0x17,
      0x6c, 0xdc, 0x70, 0x76,
      0x35, 0x90, 0x43, 0x5a,
      0x0e, 0xe0, 0x93, 0x7c,
      0x4d, 0xbb, 0x1f, 0x56,
      0x7b, 0x90, 0x78, 0x11,
      0x06, 0x74, 0x73, 0x02,
      0xf1, 0x24, 0xfb, 0x32,
      0x0a, 0xb6, 0x23, 0x63,
      0x18, 0x24, 0xb1, 0x6a,
      0xea, 0x9c, 0xc9, 0x42,
      0x97, 0x0b, 0x5a, 0x15,
      0xaa, 0xc6, 0xd1, 0x53,
      0x47, 0x03, 0xd2, 0x2b,
      0x73, 0x3d, 0x9b, 0x27,
      0x70, 0x3c, 0x5f, 0x4f,
      0x6c, 0xaf, 0x45, 0x02,
      0xd3, 0x59, 0x83, 0x23,
      0x59, 0x6a, 0x96, 0x49,
    };
  }


  namespace t20 {
    int internal_rounds = 18;

    int alpha = 5;

    unsigned char mat_diag_m_1[] = {
      0xff, 0xe7, 0xda, 0x01,
      0x2a, 0xf8, 0xf6, 0x7f,
      0xac, 0x31, 0xa9, 0x34,
      0x4b, 0x36, 0x15, 0x56,
      0x42, 0xd1, 0x21, 0x7a,
      0x6c, 0x89, 0x54, 0x5c,
      0x48, 0x68, 0x0b, 0x2d,
      0xb3, 0xad, 0xbc, 0x03,
      0x80, 0xa4, 0x99, 0x4a,
      0x6f, 0x96, 0x1d, 0x3d,
      0xcf, 0x2f, 0x31, 0x1f,
      0x25, 0xa4, 0xd5, 0x2f,
      0x6e, 0x53, 0x77, 0x50,
      0xbe, 0x34, 0x65, 0x6e,
      0x87, 0x13, 0x1e, 0x28,
      0x42, 0xb0, 0xd4, 0x23,
      0xb7, 0x6f, 0x19, 0x17,
      0xcd, 0xea, 0x92, 0x5e,
      0x08, 0x3c, 0xa2, 0x28,
      0x8c, 0x99, 0x8a, 0x2e,
    };

    unsigned char round_constants[] = {
      0x97, 0x44, 0xcd, 0x30,
      0x92, 0x7d, 0xcf, 0x67,
      0x86, 0xa7, 0x3c, 0x11,
      0xf7, 0x11, 0xf5, 0x28,
      0x11, 0x03, 0x85, 0x4c,
      0xe8, 0x7b, 0xc0, 0x3d,
      0xb9, 0x14, 0x82, 0x0c,
      0x97, 0x0d, 0x09, 0x18,
      0xfb, 0x35, 0x4f, 0x68,
      0x8e, 0x47, 0x4e, 0x7f,
      0x68, 0xba, 0xee, 0x11,
      0xa7, 0x0c, 0x7d, 0x56,
      0xbc, 0xbe, 0x3f, 0x6d,
      0x60, 0x84, 0x02, 0x47,
      0x33, 0xd4, 0xa8, 0x09,
      0x5c, 0x5d, 0xbc, 0x46,
      0xb2, 0x05, 0x08, 0x11,
      0x82, 0xdc, 0xdd, 0x50,
      0xfa, 0xe4, 0x1e, 0x00,
      0x19, 0x47, 0xed, 0x55,
      0xce, 0xbd, 0x08, 0x47,
      0x2b, 0x0b, 0x53, 0x1a,
      0x00, 0x24, 0x37, 0x6d,
      0x42, 0x1d, 0x10, 0x32,
      0xd0, 0xd7, 0xb0, 0x02,
      0x12, 0xf5, 0x64, 0x30,
      0x64, 0x3c, 0x0f, 0x67,
      0x31, 0x5e, 0x73, 0x35,
      0x44, 0x61, 0x2b, 0x5a,
      0xa6, 0x6b, 0x0d, 0x21,
      0x6a, 0xe6, 0x74, 0x12,
      0x09, 0x3e, 0x2e, 0x21,
      0xf0, 0x2f, 0xe6, 0x57,
      0x74, 0x18, 0x63, 0x6b,
      0x1b, 0x7a, 0x57, 0x6b,
      0xaa, 0xfd, 0x17, 0x0d,
      0x1b, 0xe8, 0xeb, 0x24,
      0xfe, 0xc9, 0xf6, 0x34,
      0x55, 0x5a, 0x1d, 0x59,
      0x42, 0xa9, 0x45, 0x5f,
      0x3f, 0x4f, 0x45, 0x5e,
      0x33, 0x56, 0xb7, 0x23,
      0x70, 0x61, 0x07, 0x55,
      0x82, 0x94, 0xaa, 0x3c,
      0x00, 0xbf, 0x2c, 0x6a,
      0x1b, 0x80, 0x24, 0x72,
      0x64, 0x2d, 0xbb, 0x74,
      0x90, 0x09, 0x6d, 0x2e,
      0xf5, 0x7b, 0x31, 0x78,
      0x21, 0xb9, 0xea, 0x23,
      0xa8, 0x03, 0x36, 0x66,
      0x7f, 0xe9, 0xe8, 0x03,
      0x3d, 0x5d, 0xdb, 0x04,
      0x27, 0xe8, 0xc1, 0x64,
      0xfe, 0x78, 0xc4, 0x37,
      0x05, 0xc8, 0xef, 0x35,
      0xf9, 0xae, 0x5a, 0x55,
      0x0c, 0xad, 0x63, 0x65,
      0xac, 0xae, 0xc9, 0x14,
      0x72, 0xe1, 0xd6, 0x16,
      0xe9, 0xcb, 0x4f, 0x42,
      0x55, 0x08, 0x38, 0x30,
      0xbf, 0xe5, 0xd4, 0x74,
      0x83, 0xba, 0x75, 0x12,
      0x2d, 0x2a, 0xf3, 0x56,
      0x89, 0x7f, 0xf9, 0x3c,
      0x11, 0x57, 0x0c, 0x44,
      0x8a, 0x7e, 0x68, 0x48,
      0xf8, 0x00, 0x66, 0x49,
      0x9f, 0x42, 0x0e, 0x0b,
      0x26, 0x1e, 0x4b, 0x15,
      0xce, 0xb8, 0x9b, 0x37,
      0xe5, 0x83, 0x76, 0x27,
      0x94, 0xe0, 0x03, 0x44,
      0x40, 0x32, 0x03, 0x12,
      0xd7, 0x06, 0xd0, 0x3b,
      0x1b, 0xee, 0xe6, 0x4e,
      0x4c, 0x76, 0xc6, 0x62,
      0x2f, 0x55, 0x30, 0x72,
      0xe7, 0x1d, 0x34, 0x4f,
      0x49, 0x8c, 0x8f, 0x3c,
      0xe2, 0xbe, 0xc6, 0x6f,
      0x4d, 0xf7, 0x3e, 0x0a,
      0x07, 0x01, 0x71, 0x23,
      0x82, 0x0c, 0x65, 0x24,
      0xd4, 0xeb, 0xba, 0x12,
      0xce, 0xf3, 0xc2, 0x46,
      0xd9, 0x6f, 0x81, 0x57,
      0x1c, 0xe5, 0x3f, 0x44,
      0xab, 0x05, 0x78, 0x2a,
      0xf1, 0x8e, 0x50, 0x3f,
      0x6c, 0x83, 0x0b, 0x15,
      0xfa, 0x4f, 0x01, 0x1c,
      0xbe, 0x86, 0x07, 0x1c,
      0x90, 0x51, 0x64, 0x10,
      0x0a, 0x9c, 0x7b, 0x60,
      0x05, 0x15, 0x96, 0x48,
      0xbb, 0xb7, 0x20, 0x6f,
      0x23, 0xea, 0x5a, 0x5b,
      0x5c, 0x35, 0xe5, 0x1f,
      0xaa, 0x98, 0xef, 0x27,
      0x0b, 0x12, 0x3e, 0x04,
      0xcd, 0x5c, 0x7d, 0x64,
      0xb2, 0x81, 0x5c, 0x45,
      0x3f, 0x7d, 0xc2, 0x6a,
      0x26, 0x61, 0x9f, 0x27,
      0x58, 0x57, 0xa1, 0x76,
      0xa6, 0xb0, 0xc1, 0x58,
      0x01, 0x39, 0xf8, 0x4a,
      0x4f, 0x1d, 0x64, 0x45,
      0x33, 0x8c, 0xfe, 0x1d,
      0x88, 0x0c, 0x72, 0x03,
      0x0d, 0xd4, 0x82, 0x34,
      0x60, 0x89, 0x0d, 0x77,
      0x30, 0xb7, 0x08, 0x61,
      0x84, 0xc0, 0x3f, 0x06,
      0x34, 0x2a, 0x6e, 0x09,
      0xa0, 0x14, 0x05, 0x13,
      0xff, 0x3e, 0xbc, 0x42,
      0x48, 0x58, 0x77, 0x43,
      0xe4, 0x60, 0x29, 0x70,
      0x79, 0x9c, 0xf1, 0x6c,
      0xdd, 0x30, 0x30, 0x4c,
      0x32, 0x79, 0xd2, 0x6d,
      0xe9, 0x0d, 0x35, 0x64,
      0x11, 0x83, 0x0e, 0x48,
      0x2c, 0x63, 0x22, 0x6a,
      0xf6, 0xbc, 0x14, 0x28,
      0xe3, 0x97, 0x71, 0x11,
      0x19, 0xd4, 0x44, 0x48,
      0xa6, 0x81, 0xe1, 0x76,
      0xb4, 0xd7, 0x55, 0x61,
      0x26, 0xed, 0xdb, 0x42,
      0x7c, 0xdb, 0xc7, 0x78,
      0x7b, 0xc2, 0xe9, 0x62,
      0x11, 0x4f, 0x5b, 0x10,
      0x58, 0x58, 0xd4, 0x51,
      0x98, 0x02, 0xfa, 0x33,
      0x28, 0x82, 0xa0, 0x26,
      0x1f, 0x58, 0x14, 0x5f,
      0x37, 0x97, 0xd8, 0x3b,
      0x8f, 0x96, 0x25, 0x23,
      0xba, 0x12, 0x85, 0x41,
      0x20, 0x69, 0x41, 0x7e,
      0x2f, 0x44, 0x47, 0x2f,
      0xf5, 0x0a, 0x68, 0x0e,
      0xba, 0x4c, 0x42, 0x0c,
      0xae, 0x85, 0x38, 0x6d,
      0xbe, 0x8c, 0x9c, 0x0a,
      0xa9, 0xf2, 0x85, 0x24,
      0x7f, 0x35, 0x99, 0x1f,
      0x31, 0xd5, 0x58, 0x0f,
      0xb1, 0xf6, 0xd6, 0x32,
      0x6d, 0x87, 0x26, 0x2c,
      0x8e, 0xd3, 0xe3, 0x2d,
      0xc9, 0x6c, 0x7b, 0x5a,
      0xf0, 0xc7, 0xae, 0x1c,
      0x75, 0xf5, 0xa1, 0x4a,
      0xcd, 0x0c, 0xaf, 0x77,
      0x5c, 0xbe, 0xd3, 0x19,
      0xd8, 0x19, 0xa6, 0x0a,
      0x78, 0xea, 0xcf, 0x04,
      0x76, 0xab, 0xb3, 0x0d,
      0xa3, 0xfa, 0xdf, 0x2d,
      0x67, 0x67, 0x24, 0x52,
      0xf8, 0x2d, 0x63, 0x78,
      0x41, 0x46, 0xd5, 0x7b,
      0x18, 0xf0, 0xd7, 0x50,
      0x9f, 0xeb, 0x8c, 0x31,
      0x06, 0xa5, 0x69, 0x2e,
      0xfa, 0xd1, 0xd9, 0x4b,
      0x9a, 0x57, 0x0b, 0x2a,
      0xc2, 0x38, 0x12, 0x56,
      0x9a, 0xbb, 0x77, 0x28,
      0x79, 0x2c, 0xed, 0x06,
      0xba, 0x98, 0x99, 0x22,
      0x85, 0x01, 0x7f, 0x73,
      0x31, 0xad, 0x9a, 0x60,
    };
  }


  namespace t24 {
    int internal_rounds = 22;

    int alpha = 5;

    unsigned char mat_diag_m_1[] = {
      0xea, 0xec, 0xd7, 0x0c,
      0x1e, 0x07, 0x4a, 0x07,
      0xfe, 0xae, 0xaa, 0x66,
      0x65, 0x4b, 0x33, 0x1c,
      0xb0, 0x4c, 0x09, 0x4d,
      0xa9, 0x79, 0x85, 0x2f,
      0x19, 0x47, 0x09, 0x27,
      0xcd, 0x93, 0x00, 0x71,
      0xac, 0x35, 0xd4, 0x53,
      0x0f, 0xa1, 0x06, 0x73,
      0x05, 0x89, 0x56, 0x57,
      0xdf, 0xd8, 0x67, 0x49,
      0x7e, 0x62, 0x74, 0x7f,
      0x59, 0x14, 0x82, 0x06,
      0x24, 0x75, 0x8d, 0x47,
      0x28, 0xc2, 0xac, 0x1e,
      0x40, 0x11, 0x1f, 0x65,
      0xef, 0x97, 0xf3, 0x42,
      0xd6, 0x9a, 0xe4, 0x24,
      0xff, 0x56, 0xa3, 0x5c,
      0xe9, 0x00, 0xf3, 0x42,
      0x84, 0x10, 0xd0, 0x2f,
      0x83, 0x64, 0xa8, 0x28,
      0xb4, 0x02, 0x44, 0x10,
    };

    unsigned char round_constants[] = {
      0x61, 0xba, 0xea, 0x1f,
      0x54, 0x44, 0x22, 0x53,
      0xe2, 0xb9, 0xce, 0x6b,
      0xb4, 0xf9, 0x19, 0x50,
      0x92, 0x65, 0x72, 0x48,
      0xa8, 0xd0, 0x22, 0x2b,
      0xf9, 0xbb, 0x51, 0x61,
      0x21, 0x4b, 0x47, 0x2f,
      0x37, 0xf3, 0xb5, 0x2e,
      0x87, 0x5d, 0x64, 0x3b,
      0xf0, 0xce, 0x42, 0x09,
      0x52, 0x8c, 0x22, 0x65,
      0x0f, 0xb3, 0xff, 0x78,
      0xc8, 0x37, 0x28, 0x4d,
      0x4f, 0xac, 0x17, 0x0e,
      0x86, 0x66, 0x54, 0x05,
      0xcc, 0x06, 0x6c, 0x04,
      0xb6, 0xc3, 0x51, 0x0b,
      0x63, 0xb7, 0x8d, 0x56,
      0xe4, 0x34, 0xb3, 0x38,
      0xf0, 0xac, 0xf5, 0x57,
      0x11, 0x26, 0xd3, 0x19,
      0x4b, 0x2f, 0xd0, 0x77,
      0xb8, 0xe9, 0x82, 0x6c,
      0xb6, 0xc1, 0x48, 0x71,
      0x75, 0x7c, 0x06, 0x08,
      0xc9, 0xe8, 0xd1, 0x46,
      0x07, 0x3b, 0x97, 0x30,
      0x3b, 0x4f, 0x61, 0x20,
      0x51, 0xf8, 0x3f, 0x5c,
      0x29, 0x33, 0x50, 0x30,
      0xcc, 0xe7, 0x72, 0x49,
      0xbc, 0xd8, 0xd1, 0x02,
      0xa6, 0xbf, 0xd5, 0x09,
      0xc0, 0x04, 0x71, 0x09,
      0x34, 0x9a, 0xa4, 0x7b,
      0xfc, 0xc2, 0x07, 0x4a,
      0x69, 0xee, 0xc1, 0x24,
      0x41, 0xab, 0xa6, 0x28,
      0xa0, 0x08, 0x91, 0x5d,
      0xc7, 0x51, 0x78, 0x3a,
      0xf9, 0x95, 0xd4, 0x1d,
      0xf4, 0x9f, 0xb4, 0x12,
      0x60, 0x57, 0xad, 0x7b,
      0xc2, 0x64, 0xed, 0x5f,
      0x6c, 0xc9, 0xf5, 0x66,
      0x02, 0xbd, 0xaf, 0x7e,
      0x3b, 0x59, 0xb3, 0x39,
      0x49, 0x3b, 0x65, 0x4a,
      0xc1, 0x1d, 0x09, 0x75,
      0xe0, 0x88, 0xe4, 0x56,
      0x55, 0xa3, 0x04, 0x17,
      0xf3, 0x4f, 0x5e, 0x74,
      0x6e, 0xf1, 0x2e, 0x39,
      0xdf, 0x3f, 0xe3, 0x31,
      0x66, 0x8c, 0xc2, 0x02,
      0x3a, 0x08, 0xc3, 0x36,
      0xfa, 0xd1, 0x04, 0x31,
      0xa3, 0xcd, 0x03, 0x5b,
      0xaf, 0xe1, 0x41, 0x66,
      0x56, 0x4b, 0x75, 0x37,
      0xf9, 0x5a, 0x6f, 0x39,
      0x1a, 0x46, 0x1a, 0x1a,
      0xf2, 0x26, 0x8e, 0x68,
      0x84, 0x97, 0x82, 0x6f,
      0x69, 0x1d, 0xb9, 0x1b,
      0x16, 0x80, 0x78, 0x5b,
      0xc5, 0xa5, 0x4a, 0x70,
      0x9c, 0x86, 0x81, 0x01,
      0x56, 0x1e, 0x21, 0x41,
      0xa0, 0x03, 0xe8, 0x0c,
      0xa0, 0xf3, 0xbf, 0x23,
      0x64, 0x70, 0xfb, 0x17,
      0x20, 0x72, 0x31, 0x47,
      0x53, 0x4b, 0x91, 0x76,
      0x05, 0x19, 0x9c, 0x21,
      0x28, 0x55, 0x65, 0x16,
      0x44, 0x55, 0xf3, 0x4d,
      0x65, 0x84, 0x80, 0x60,
      0x33, 0xf8, 0x50, 0x33,
      0xc7, 0xcd, 0xbc, 0x03,
      0x0a, 0x18, 0x87, 0x0a,
      0xf5, 0x99, 0x7a, 0x01,
      0x26, 0x57, 0x94, 0x6e,
      0x04, 0x55, 0x44, 0x15,
      0xb1, 0x33, 0x05, 0x78,
      0x38, 0xbf, 0x91, 0x3b,
      0xb1, 0x7e, 0xc7, 0x3f,
      0x0e, 0x96, 0x4d, 0x4b,
      0x2e, 0x3d, 0xd9, 0x3c,
      0x76, 0xe9, 0xa4, 0x0e,
      0xcc, 0x06, 0x53, 0x1d,
      0x84, 0xc2, 0x7a, 0x3a,
      0x34, 0x29, 0xc2, 0x0e,
      0x13, 0x97, 0x97, 0x4d,
      0x65, 0x1c, 0xa4, 0x51,
      0x11, 0x6a, 0x77, 0x22,
      0x68, 0x42, 0xa3, 0x5f,
      0x8d, 0x52, 0x15, 0x14,
      0x14, 0xbd, 0x3f, 0x56,
      0x44, 0x52, 0xf4, 0x34,
      0xb6, 0xa1, 0x0e, 0x12,
      0xa5, 0x68, 0x13, 0x26,
      0xc1, 0x5e, 0x66, 0x27,
      0x05, 0x28, 0xbe, 0x36,
      0x84, 0x47, 0x5c, 0x34,
      0xc1, 0xdc, 0xef, 0x17,
      0x30, 0x65, 0x3e, 0x39,
      0xb8, 0xb4, 0xa0, 0x6d,
      0xd3, 0xde, 0xe5, 0x31,
      0xac, 0x27, 0x5b, 0x67,
      0x30, 0x8c, 0xe8, 0x0a,
      0xcc, 0x41, 0x78, 0x57,
      0xec, 0x6d, 0xe0, 0x5f,
      0x1a, 0x69, 0xb0, 0x56,
      0x1f, 0xde, 0x42, 0x72,
      0x29, 0x75, 0x37, 0x3c,
      0x23, 0x75, 0x9b, 0x33,
      0x99, 0x22, 0x66, 0x1c,
      0x5a, 0x95, 0x7c, 0x05,
      0xf2, 0xc0, 0xb6, 0x7a,
      0x0a, 0xad, 0xa6, 0x25,
      0x58, 0x0b, 0x85, 0x75,
      0x93, 0x37, 0xfd, 0x48,
      0xb1, 0x66, 0x43, 0x0b,
      0x49, 0x0d, 0xdd, 0x0f,
      0xf9, 0x19, 0xb4, 0x7d,
      0x0f, 0xcc, 0xb9, 0x49,
      0x16, 0x97, 0x94, 0x48,
      0x90, 0x58, 0xc3, 0x29,
      0x85, 0x54, 0x44, 0x76,
      0x0c, 0xd3, 0x27, 0x1c,
      0x3b, 0x7a, 0xaa, 0x10,
      0xb6, 0x4f, 0xf3, 0x30,
      0x35, 0x64, 0xe0, 0x6f,
      0xcd, 0x5e, 0x13, 0x02,
      0x96, 0xba, 0xaa, 0x6c,
      0xd0, 0x90, 0xb2, 0x3e,
      0x3b, 0x8d, 0xfd, 0x22,
      0x25, 0x15, 0x8b, 0x76,
      0x14, 0x58, 0xe9, 0x5b,
      0xe9, 0x7f, 0x3d, 0x52,
      0xec, 0x4c, 0xe9, 0x55,
      0x1f, 0x2e, 0xc4, 0x47,
      0x5e, 0x3b, 0xa5, 0x1a,
      0x7e, 0xfe, 0xd1, 0x2f,
      0x91, 0x0e, 0x23, 0x59,
      0x66, 0xda, 0x72, 0x74,
      0xdf, 0xf2, 0x43, 0x64,
      0x9d, 0xe1, 0x9d, 0x2d,
      0x84, 0x6a, 0x7f, 0x6f,
      0x30, 0x04, 0x80, 0x77,
      0xc8, 0x4b, 0x01, 0x0f,
      0x95, 0xd0, 0xf3, 0x7b,
      0x18, 0xd3, 0xaf, 0x26,
      0xf7, 0x61, 0x25, 0x58,
      0x8c, 0x19, 0xe3, 0x5e,
      0x00, 0x00, 0xcc, 0x6a,
      0x26, 0x5e, 0x31, 0x2f,
      0x40, 0xc0, 0xca, 0x27,
      0x1e, 0x08, 0x95, 0x25,
      0xda, 0xb7, 0x63, 0x59,
      0x65, 0x35, 0x07, 0x7e,
      0xf1, 0xf5, 0xf3, 0x6c,
      0xa4, 0xa3, 0xf8, 0x09,
      0xfe, 0xcc, 0xa8, 0x0d,
      0x65, 0x23, 0xbe, 0x60,
      0xf5, 0x42, 0xd7, 0x7e,
      0x31, 0x80, 0x8b, 0x66,
      0x94, 0x34, 0xb0, 0x4b,
      0x33, 0x93, 0x01, 0x59,
      0x78, 0x28, 0x0e, 0x70,
      0x56, 0x58, 0xc4, 0x1c,
      0xf7, 0x17, 0x16, 0x1d,
      0xa6, 0x8d, 0x98, 0x7b,
      0x6c, 0x93, 0xb4, 0x4e,
      0x7e, 0xf8, 0xc9, 0x78,
      0x94, 0x3e, 0xce, 0x63,
      0x1b, 0x34, 0x78, 0x71,
      0x86, 0x2f, 0xbc, 0x45,
      0xbc, 0x75, 0xb7, 0x05,
      0x44, 0x02, 0x4b, 0x70,
      0x78, 0xd2, 0xee, 0x29,
      0x32, 0x30, 0xf4, 0x47,
      0xe5, 0xb2, 0x27, 0x21,
      0x3f, 0x90, 0x97, 0x19,
      0x03, 0xce, 0xb3, 0x24,
      0x8c, 0x29, 0x32, 0x0c,
      0x3a, 0x6f, 0x2b, 0x7d,
      0x81, 0xaa, 0xfc, 0x17,
      0xef, 0x7f, 0xf3, 0x72,
      0xa9, 0xe7, 0x28, 0x30,
      0x96, 0x4d, 0xdd, 0x5e,
      0x3b, 0x58, 0x96, 0x1f,
      0x8a, 0x91, 0xd6, 0x4c,
      0x0e, 0x0f, 0x88, 0x14,
      0x59, 0x03, 0x17, 0x69,
      0x33, 0xbd, 0x3c, 0x17,
      0xf4, 0xe7, 0x69, 0x09,
      0xab, 0x23, 0x7f, 0x6e,
      0x87, 0xea, 0x82, 0x61,
      0x5c, 0x1f, 0xcb, 0x4d,
      0x13, 0xa1, 0x5f, 0x58,
      0xb6, 0xb3, 0x9c, 0x72,
      0x7a, 0xa2, 0xb3, 0x01,
      0xe7, 0x73, 0xa1, 0x1b,
      0xea, 0xbc, 0x33, 0x4b,
      0xbb, 0x3b, 0xd9, 0x63,
      0x99, 0xbf, 0x3f, 0x6b,
      0xd1, 0xe9, 0x17, 0x6f,
      0xba, 0xd8, 0x3d, 0x0c,
      0xa8, 0xf9, 0xc1, 0x0b,
      0x70, 0xf3, 0xd3, 0x64,
      0x18, 0x6a, 0x5a, 0x46,
    };
  }

}
#endif
