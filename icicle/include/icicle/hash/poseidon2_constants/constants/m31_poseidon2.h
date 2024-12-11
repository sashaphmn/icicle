#pragma once
#ifndef M31_POSEIDON2_H
#define M31_POSEIDON2_H

#include <string>

namespace poseidon2_constants_m31 {

  /**
   * This inner namespace contains constants for running Poseidon2.
   * The number in the name corresponds to the arity of hash function
   */

int full_rounds_2 =         12;
int half_full_rounds_2 =    6;
int partial_rounds_2 =      25;
int alpha_2 =               5;

static const std::string rounds_constants_2[] = {
  "0x4c7e5ab4",
  "0x5981a113",
  "0x776aae0f",
  "0x23f3b647",
  "0x333f99a3",
  "0x78e2b909",
  "0x72457fd4",
  "0x67fee18a",
  "0x749c1e5d",
  "0x20153da5",
  "0x288a369c",
  "0x39bb481a",
  "0x584d9033",
  "0x4fb38689",
  "0x2769dac8",
  "0x1350c5c0",
  "0x31bde689",
  "0x4d399c82",
  "0x3151e4ba",
  "0x56c67c21",
  "0x12aeae36",
  "0x7e7b0890",
  "0x28fc522c",
  "0x74766e76",
  "0x57d58330",
  "0x3414ea35",
  "0x38e5c441",
  "0x1e369712",
  "0x15b6d9f3",
  "0x4808490a",
  "0xad3f306",
  "0x70dd4d9e",
  "0x47f5a80f",
  "0x670f0a7d",
  "0x69515f5",
  "0x33e1c76b",
  "0x1388a4eb",
  "0x374f2db2",
  "0x648f79a",
  "0x3418c169",
  "0x60735181",
  "0x71035d19",
  "0x561879af",
  "0x649d6193",
  "0x26fdb0a3",
  "0xa50811d",
  "0x1e91c913",
  "0x293bcdd9",
  "0x1dcdb10"
};

static const std::string mds_matrix_2[] = {
 "0x2", "0x1",
 "0x1", "0x2"
};

static const std::string partial_matrix_diagonal_2[] = {
 "0x2", "0x3"
};


int full_rounds_3 =         12;
int half_full_rounds_3 =    6;
int partial_rounds_3 =      19;
int alpha_3 =               5;

static const std::string rounds_constants_3[] = {
  "0x6630420a",
  "0x6e77b6b5",
  "0x85badf3",
  "0x6d17b3c",
  "0x2d2ca8bb",
  "0x3e585d13",
  "0x7f96d29c",
  "0x2c60c89",
  "0x3d73c75d",
  "0x44685392",
  "0x7545b9b7",
  "0x14abb4e4",
  "0x18bc8537",
  "0x204f93c1",
  "0x4081b364",
  "0x5cbe9f9b",
  "0x7f9f90a1",
  "0x3cbf7bc2",
  "0x268a6eab",
  "0x6f243411",
  "0x2c7554f8",
  "0x5fab2c61",
  "0x111376ae",
  "0x2cfe0ebe",
  "0x36b2e729",
  "0x29909ad3",
  "0x28b820d6",
  "0x54323e5d",
  "0x786e4d2e",
  "0x324f30d3",
  "0x65f93d17",
  "0x4f8c73b2",
  "0x23d9fe34",
  "0x17909bd1",
  "0x74864a54",
  "0x7120da84",
  "0x4c238376",
  "0x28d0791e",
  "0x154f4ab1",
  "0x27cd497e",
  "0x32d48f16",
  "0x5e68b6",
  "0x686a839b",
  "0x3c24c8fb",
  "0x530722d5",
  "0x23fe799a",
  "0x235dc05f",
  "0x1912a500",
  "0x5bb5c2b0",
  "0x5742d7d7",
  "0x37477606",
  "0x1d600471",
  "0x427a8b2c",
  "0x7d89eccd",
  "0x378e1019"
};

static const std::string mds_matrix_3[] = {
 "0x2", "0x1", "0x1",
 "0x1", "0x2", "0x1",
 "0x1", "0x1", "0x2"
};

static const std::string partial_matrix_diagonal_3[] = {
 "0x2", "0x2", "0x3"
};


int full_rounds_4 =         8;
int half_full_rounds_4 =    4;
int partial_rounds_4 =      22;
int alpha_4 =               5;

static const std::string rounds_constants_4[] = {
  "0x16af2c22",
  "0x7804cd6b",
  "0x246e234a",
  "0x5dd3cd12",
  "0x321bfb5c",
  "0x5950358b",
  "0x7264a446",
  "0x78a0325e",
  "0x56c502c1",
  "0x459d26df",
  "0x73a880e9",
  "0x41ec4bfe",
  "0x5543742f",
  "0x72f68275",
  "0x19ed08b1",
  "0x147cda79",
  "0x637ee4ca",
  "0xad181b6",
  "0x6cba3e5",
  "0x6d19581a",
  "0x6e0ce518",
  "0x67ecfcba",
  "0x1338163a",
  "0x1b7388ed",
  "0x33965b46",
  "0x4e8fa553",
  "0x305411f4",
  "0x58754ce7",
  "0x4380543d",
  "0x4f3f78ec",
  "0x7e2bafa9",
  "0x60e96f27",
  "0x30158e74",
  "0x64dbacc0",
  "0x3516eedd",
  "0x200643cc",
  "0x714c3435",
  "0x35a7ae39",
  "0x22a8d380",
  "0x17b1c7b5",
  "0x14588589",
  "0x6325321f",
  "0x18a12d4f",
  "0x1cd62c68",
  "0x1ef5bafc",
  "0x83f3012",
  "0x6e334dc0",
  "0x590d574d",
  "0x14213a07",
  "0x74c3e1c4",
  "0x4b7fc4bd",
  "0x3a29253d",
  "0x14b8230",
  "0x13228033"
};

static const std::string mds_matrix_4[] = {
 "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6"
};

static const std::string partial_matrix_diagonal_4[] = {
 "0xf15107d", "0x4628fa65", "0x254112b9", "0x8a004cc"
};


int full_rounds_8 =         8;
int half_full_rounds_8 =    4;
int partial_rounds_8 =      13;
int alpha_8 =               5;

static const std::string rounds_constants_8[] = {
  "0x12910754",
  "0x36ed49be",
  "0x7c97497",
  "0x40d71fed",
  "0x2dee313c",
  "0x26de4470",
  "0x5d7a5ae2",
  "0x1f1e33ff",
  "0x13c00c61",
  "0xcc4e3f6",
  "0x54c32ba0",
  "0x4c77e54a",
  "0x7951cd04",
  "0x4c05faa2",
  "0x6e479da0",
  "0x38117730",
  "0x7374c4ce",
  "0x50281aea",
  "0x48232e55",
  "0x36539d1e",
  "0x5e5a4ac1",
  "0x77ea4408",
  "0x1cefa067",
  "0x9ce05ef",
  "0x26d24c81",
  "0x4c873b15",
  "0x77d2ea65",
  "0x56b28bb3",
  "0x2b2b9f8c",
  "0x4a57e3f9",
  "0x32c445a7",
  "0x782f41c7",
  "0x6c205891",
  "0x67503f5e",
  "0x756c593f",
  "0x462479a",
  "0x4271c9ca",
  "0x4d1af3ce",
  "0x180e9999",
  "0x25328db",
  "0x398b8c99",
  "0x3f4755c",
  "0x68c74b5f",
  "0x5f548c81",
  "0x737a627f",
  "0x6177ee3d",
  "0x487567c7",
  "0x67f94f4",
  "0x2cd1087d",
  "0x304d9054",
  "0x490e2bab",
  "0x5c659e18",
  "0x7c47cce3",
  "0x61a387b5",
  "0x3857def0",
  "0x2624467f",
  "0x7ef53cc8",
  "0x1d2ad358",
  "0x796caff2",
  "0x10eac4fd",
  "0x7f4b54a5",
  "0x35086d00",
  "0x41b5005f",
  "0x49ab9f3e",
  "0x7d0cf6fe",
  "0x13904839",
  "0x67dc28cd",
  "0x28322a3b",
  "0x291d6b95",
  "0x4b5e6304",
  "0x5e4b793f",
  "0x1c3de5d4",
  "0x52cd150e",
  "0x7852055b",
  "0x3f71122b",
  "0x408ba008",
  "0x76d7ded9"
};

static const std::string mds_matrix_8[] = {
 "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3",
 "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
 "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
 "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6",
 "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
 "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
 "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"
};

static const std::string partial_matrix_diagonal_8[] = {
 "0x3128b57", "0x4d7d3aff", "0x350942ab", "0x2ea8c3ee", "0x5ce80b49", "0x765afd81", "0x198f06fc", "0x7c1b2a17"
};


int full_rounds_12 =         8;
int half_full_rounds_12 =    4;
int partial_rounds_12 =      12;
int alpha_12 =               5;

static const std::string rounds_constants_12[] = {
  "0x68b6c0e0",
  "0x4ec257b5",
  "0x50d9f348",
  "0x2234cb53",
  "0x4e4b9ee",
  "0x305981fe",
  "0x3352aef9",
  "0x1c3c33a2",
  "0x7aacf58a",
  "0x6cba897",
  "0x7af46fc0",
  "0x51e5eb08",
  "0x94c6e20",
  "0x61460e39",
  "0x693211b7",
  "0x18cab2e2",
  "0x5ab3d0e",
  "0x61c0b778",
  "0x7ff68d71",
  "0x7eedb35c",
  "0x61ba0c6",
  "0x26634770",
  "0x3f0102a4",
  "0x4aaee298",
  "0x38e7a9e8",
  "0x6f98c0f",
  "0x75516ec1",
  "0x692857c5",
  "0x1d912c5c",
  "0x56d84ff",
  "0x2f2d7061",
  "0x2da16acf",
  "0x92aa6f8",
  "0x1ae7576c",
  "0x3ba868b1",
  "0x17199a1b",
  "0x3cad0e76",
  "0x42f237e3",
  "0x7d0453bc",
  "0x88dc5ca",
  "0x7288cf9",
  "0x5f1b1828",
  "0x4428bef1",
  "0x29cedc7d",
  "0x49e66341",
  "0x2072a1d1",
  "0x6803953e",
  "0x53bc35d3",
  "0x2b3dd9bd",
  "0x7aef95e6",
  "0xe5b46d0",
  "0x7d822e91",
  "0x74a3ffcd",
  "0x2d1340e1",
  "0x59f279a",
  "0x54907d93",
  "0x3b46dbce",
  "0x77aaf554",
  "0x6cf5ea09",
  "0x5f1deed7",
  "0x3c462ae5",
  "0x14bdbb1f",
  "0x369dd818",
  "0xd82f8a6",
  "0x1bff0de0",
  "0x5de6e94a",
  "0x3d48d65a",
  "0x6cf6d84",
  "0x7b48cc6a",
  "0x447b57d3",
  "0x76d578c5",
  "0x5be6b1f7",
  "0x539e1fa4",
  "0x3bd278c3",
  "0x9bc1c1c",
  "0x54b09520",
  "0x6dd578fb",
  "0x7817c3a1",
  "0x121990ef",
  "0x48460fa9",
  "0x10f7a489",
  "0x2dc1eb30",
  "0x6baed45f",
  "0x1f88aceb",
  "0x776749f5",
  "0x29f0e0a0",
  "0x39af070f",
  "0x3ba0ada6",
  "0x1c9d037c",
  "0x67ec538e",
  "0x47269542",
  "0x31903718",
  "0x3f7c997c",
  "0x1edaeedc",
  "0x6e6588c8",
  "0x13dc160e",
  "0x7a6589b3",
  "0xba42ae7",
  "0x405c7385",
  "0x3fa52e7f",
  "0x20cb72d1",
  "0x65935cca",
  "0x6cb5cea0",
  "0x37fcdd04",
  "0x56bb831d",
  "0x17e6dd1f",
  "0x2a948729",
  "0x68ae5b61"
};

static const std::string mds_matrix_12[] = {
 "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"
};

static const std::string partial_matrix_diagonal_12[] = {
 "0x4aa20d67", "0x3767088d", "0x5e82bd8b", "0x2833018f", "0x59423010", "0x461b8a6d", "0x3c643b86", "0x4c08c05d", "0x569f76cf", "0x4728dbb2", "0x758d80ec", "0x33fa823d"
};


int full_rounds_16 =         8;
int half_full_rounds_16 =    4;
int partial_rounds_16 =      14;
int alpha_16 =               5;

static const std::string rounds_constants_16[] = {
  "0x768bab52",
  "0x70e0ab7d",
  "0x3d266c8a",
  "0x6da42045",
  "0x600fef22",
  "0x41dace6b",
  "0x64f9bdd4",
  "0x5d42d4fe",
  "0x76b1516d",
  "0x6fc9a717",
  "0x70ac4fb6",
  "0x194ef6",
  "0x22b644e2",
  "0x1f7916d5",
  "0x47581be2",
  "0x2710a123",
  "0x6284e867",
  "0x18d3afe",
  "0x5df99ef3",
  "0x4c1e467b",
  "0x566f6abc",
  "0x2994e427",
  "0x538a6d42",
  "0x5d7bf2cf",
  "0x7fda2dab",
  "0xfd854c4",
  "0x46922fca",
  "0x3d7763a1",
  "0x19fd05ca",
  "0xa4bbb43",
  "0x15075851",
  "0x3d903d76",
  "0x2d290ff7",
  "0x40809fa0",
  "0x59dac6ec",
  "0x127927a2",
  "0x6bbf0ea0",
  "0x294140f",
  "0x24742976",
  "0x6e84c081",
  "0x22484f4a",
  "0x354cae59",
  "0x453ffe1",
  "0x3f47a3cc",
  "0x88204e",
  "0x6066e109",
  "0x3b7c4b80",
  "0x6b55665d",
  "0x3bc4b897",
  "0x735bf378",
  "0x508daf42",
  "0x1884fc2b",
  "0x7214f24c",
  "0x7498be0a",
  "0x1a60e640",
  "0x3303f928",
  "0x29b46376",
  "0x5c96bb68",
  "0x65d097a5",
  "0x1d358e9f",
  "0x4a9a9017",
  "0x4724cf76",
  "0x347af70f",
  "0x1e77e59a",
  "0x7f7ec4bf",
  "0x421926f",
  "0x5198e669",
  "0x34db3148",
  "0x4368bafd",
  "0x66685c7f",
  "0x78d3249a",
  "0x60187881",
  "0x76dad67a",
  "0x690b437",
  "0x1ea95311",
  "0x40e5369a",
  "0x38f103fc",
  "0x1d226a21",
  "0x57090613",
  "0x1fa42108",
  "0x17bbef50",
  "0x1ff7e11c",
  "0x47b24ca",
  "0x4e140275",
  "0x4fa086f5",
  "0x79b309c",
  "0x1159bd47",
  "0x6d37e4e5",
  "0x75d8dce",
  "0x12121ca0",
  "0x7f6a7c40",
  "0x68e182ba",
  "0x5493201b",
  "0x444a80e",
  "0x64f4c6",
  "0x6467abe6",
  "0x66975762",
  "0x2af68f9b",
  "0x345b33be",
  "0x1b70d47f",
  "0x53db717",
  "0x381189cb",
  "0x43b915f8",
  "0x20df3694",
  "0xf459d26",
  "0x77a0e97b",
  "0x2f73e739",
  "0x1876c2f9",
  "0x65a0e29a",
  "0x4cabefbe",
  "0x5abd1268",
  "0x4d34a760",
  "0x12771799",
  "0x69a0c9ac",
  "0x39091e55",
  "0x7f611cd0",
  "0x3af055da",
  "0x7ac0bbdf",
  "0x6e0f3a24",
  "0x41e3b6f7",
  "0x49b3756d",
  "0x568bc538",
  "0x20c079d8",
  "0x1701c72c",
  "0x7670dc6c",
  "0x5a439035",
  "0x7c93e00e",
  "0x561fbb4d",
  "0x1178907b",
  "0x2737406",
  "0x32fb24f1",
  "0x6323b60a",
  "0x6ab12418",
  "0x42c99cea",
  "0x155a0b97",
  "0x53d1c6aa",
  "0x2bd20347",
  "0x279b3d73",
  "0x4f5f3c70",
  "0x245af6c",
  "0x238359d3",
  "0x49966a59"
};

static const std::string mds_matrix_16[] = {
 "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"
};

static const std::string partial_matrix_diagonal_16[] = {
 "0x7b80ac5", "0x6bd9cb34", "0x48ee3fa0", "0x4f63dd1a", "0x18c546b4", "0x5af89e8c", "0x4ff23de9", "0x4f78aaf7", "0x53bdc6d5", "0x5c59823f", "0x2a471c73", "0x4c975e7a", "0x58dc64d5", "0x6e9315e", "0x2cf32287", "0x2fb6755e"
};


int full_rounds_20 =         8;
int half_full_rounds_20 =    4;
int partial_rounds_20 =      18;
int alpha_20 =               5;

static const std::string rounds_constants_20[] = {
  "0x30cd4497",
  "0x67cf7d92",
  "0x113ca786",
  "0x28f511f7",
  "0x4c850311",
  "0x3dc07be8",
  "0xc8214b9",
  "0x18090d97",
  "0x684f35fb",
  "0x7f4e478e",
  "0x11eeba68",
  "0x567d0ca7",
  "0x6d3fbebc",
  "0x47028460",
  "0x9a8d433",
  "0x46bc5d5c",
  "0x110805b2",
  "0x50dddc82",
  "0x1ee4fa",
  "0x55ed4719",
  "0x4708bdce",
  "0x1a530b2b",
  "0x6d372400",
  "0x32101d42",
  "0x2b0d7d0",
  "0x3064f512",
  "0x670f3c64",
  "0x35735e31",
  "0x5a2b6144",
  "0x210d6ba6",
  "0x1274e66a",
  "0x212e3e09",
  "0x57e62ff0",
  "0x6b631874",
  "0x6b577a1b",
  "0xd17fdaa",
  "0x24ebe81b",
  "0x34f6c9fe",
  "0x591d5a55",
  "0x5f45a942",
  "0x5e454f3f",
  "0x23b75633",
  "0x55076170",
  "0x3caa9482",
  "0x6a2cbf00",
  "0x7224801b",
  "0x74bb2d64",
  "0x2e6d0990",
  "0x78317bf5",
  "0x23eab921",
  "0x663603a8",
  "0x3e8e97f",
  "0x4db5d3d",
  "0x64c1e827",
  "0x37c478fe",
  "0x35efc805",
  "0x555aaef9",
  "0x6563ad0c",
  "0x14c9aeac",
  "0x16d6e172",
  "0x424fcbe9",
  "0x30380855",
  "0x74d4e5bf",
  "0x1275ba83",
  "0x56f32a2d",
  "0x3cf97f89",
  "0x440c5711",
  "0x48687e8a",
  "0x496600f8",
  "0xb0e429f",
  "0x154b1e26",
  "0x379bb8ce",
  "0x277683e5",
  "0x4403e094",
  "0x12033240",
  "0x3bd006d7",
  "0x4ee6ee1b",
  "0x62c6764c",
  "0x7230552f",
  "0x4f341de7",
  "0x3c8f8c49",
  "0x6fc6bee2",
  "0xa3ef74d",
  "0x23710107",
  "0x24650c82",
  "0x12baebd4",
  "0x46c2f3ce",
  "0x57816fd9",
  "0x443fe51c",
  "0x2a7805ab",
  "0x3f508ef1",
  "0x150b836c",
  "0x1c014ffa",
  "0x1c0786be",
  "0x10645190",
  "0x607b9c0a",
  "0x48961505",
  "0x6f20b7bb",
  "0x5b5aea23",
  "0x1fe5355c",
  "0x27ef98aa",
  "0x43e120b",
  "0x647d5ccd",
  "0x455c81b2",
  "0x6ac27d3f",
  "0x279f6126",
  "0x76a15758",
  "0x58c1b0a6",
  "0x4af83901",
  "0x45641d4f",
  "0x1dfe8c33",
  "0x3720c88",
  "0x3482d40d",
  "0x770d8960",
  "0x6108b730",
  "0x63fc084",
  "0x96e2a34",
  "0x130514a0",
  "0x42bc3eff",
  "0x43775848",
  "0x702960e4",
  "0x6cf19c79",
  "0x4c3030dd",
  "0x6dd27932",
  "0x64350de9",
  "0x480e8311",
  "0x6a22632c",
  "0x2814bcf6",
  "0x117197e3",
  "0x4844d419",
  "0x76e181a6",
  "0x6155d7b4",
  "0x42dbed26",
  "0x78c7db7c",
  "0x62e9c27b",
  "0x105b4f11",
  "0x51d45858",
  "0x33fa0298",
  "0x26a08228",
  "0x5f14581f",
  "0x3bd89737",
  "0x2325968f",
  "0x418512ba",
  "0x7e416920",
  "0x2f47442f",
  "0xe680af5",
  "0xc424cba",
  "0x6d3885ae",
  "0xa9c8cbe",
  "0x2485f2a9",
  "0x1f99357f",
  "0xf58d531",
  "0x32d6f6b1",
  "0x2c26876d",
  "0x2de3d38e",
  "0x5a7b6cc9",
  "0x1caec7f0",
  "0x4aa1f575",
  "0x77af0ccd",
  "0x19d3be5c",
  "0xaa619d8",
  "0x4cfea78",
  "0xdb3ab76",
  "0x2ddffaa3",
  "0x52246767",
  "0x78632df8",
  "0x7bd54641",
  "0x50d7f018",
  "0x318ceb9f",
  "0x2e69a506",
  "0x4bd9d1fa",
  "0x2a0b579a",
  "0x561238c2",
  "0x2877bb9a",
  "0x6ed2c79",
  "0x229998ba",
  "0x737f0185",
  "0x609aad31"
};

static const std::string mds_matrix_20[] = {
 "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"
};

static const std::string partial_matrix_diagonal_20[] = {
 "0x1dae800", "0x7ff6f82b", "0x34a931ad", "0x5615364c", "0x7a21d143", "0x5c54896d", "0x2d0b6849", "0x3bcadb4", "0x4a99a481", "0x3d1d9670", "0x1f312fd0", "0x2fd5a426", "0x5077536f", "0x6e6534bf", "0x281e1388", "0x23d4b043", "0x17196fb8", "0x5e92eace", "0x28a23c09", "0x2e8a998d"
};


int full_rounds_24 =         8;
int half_full_rounds_24 =    4;
int partial_rounds_24 =      22;
int alpha_24 =               5;

static const std::string rounds_constants_24[] = {
  "0x1feaba61",
  "0x53224454",
  "0x6bceb9e2",
  "0x5019f9b4",
  "0x48726592",
  "0x2b22d0a8",
  "0x6151bbf9",
  "0x2f474b21",
  "0x2eb5f337",
  "0x3b645d87",
  "0x942cef0",
  "0x65228c52",
  "0x78ffb30f",
  "0x4d2837c8",
  "0xe17ac4f",
  "0x5546686",
  "0x46c06cc",
  "0xb51c3b6",
  "0x568db763",
  "0x38b334e4",
  "0x57f5acf0",
  "0x19d32611",
  "0x77d02f4b",
  "0x6c82e9b8",
  "0x7148c1b6",
  "0x8067c75",
  "0x46d1e8c9",
  "0x30973b07",
  "0x20614f3b",
  "0x5c3ff851",
  "0x30503329",
  "0x4972e7cc",
  "0x2d1d8bc",
  "0x9d5bfa6",
  "0x97104c0",
  "0x7ba49a34",
  "0x4a07c2fc",
  "0x24c1ee69",
  "0x28a6ab41",
  "0x5d9108a0",
  "0x3a7851c7",
  "0x1dd495f9",
  "0x12b49ff4",
  "0x7bad5760",
  "0x5fed64c2",
  "0x66f5c96c",
  "0x7eafbd02",
  "0x39b3593b",
  "0x4a653b49",
  "0x75091dc1",
  "0x56e488e0",
  "0x1704a355",
  "0x745e4ff3",
  "0x392ef16e",
  "0x31e33fdf",
  "0x2c28c66",
  "0x36c3083a",
  "0x3104d1fa",
  "0x5b03cda3",
  "0x6641e1af",
  "0x37754b56",
  "0x396f5af9",
  "0x1a1a461a",
  "0x688e26f2",
  "0x6f829784",
  "0x1bb91d69",
  "0x5b788016",
  "0x704aa5c5",
  "0x181869c",
  "0x41211e56",
  "0xce803a0",
  "0x23bff3a0",
  "0x17fb7064",
  "0x47317220",
  "0x76914b53",
  "0x219c1905",
  "0x16655528",
  "0x4df35544",
  "0x60808465",
  "0x3350f833",
  "0x3bccdc7",
  "0xa87180a",
  "0x17a99f5",
  "0x6e945726",
  "0x15445504",
  "0x780533b1",
  "0x3b91bf38",
  "0x3fc77eb1",
  "0x4b4d960e",
  "0x3cd93d2e",
  "0xea4e976",
  "0x1d5306cc",
  "0x3a7ac284",
  "0xec22934",
  "0x4d979713",
  "0x51a41c65",
  "0x22776a11",
  "0x5fa34268",
  "0x1415528d",
  "0x563fbd14",
  "0x34f45244",
  "0x120ea1b6",
  "0x261368a5",
  "0x27665ec1",
  "0x36be2805",
  "0x345c4784",
  "0x17efdcc1",
  "0x393e6530",
  "0x6da0b4b8",
  "0x31e5ded3",
  "0x675b27ac",
  "0xae88c30",
  "0x577841cc",
  "0x5fe06dec",
  "0x56b0691a",
  "0x7242de1f",
  "0x3c377529",
  "0x339b7523",
  "0x1c662299",
  "0x57c955a",
  "0x7ab6c0f2",
  "0x25a6ad0a",
  "0x75850b58",
  "0x48fd3793",
  "0xb4366b1",
  "0xfdd0d49",
  "0x7db419f9",
  "0x49b9cc0f",
  "0x48949716",
  "0x29c35890",
  "0x76445485",
  "0x1c27d30c",
  "0x10aa7a3b",
  "0x30f34fb6",
  "0x6fe06435",
  "0x2135ecd",
  "0x6caaba96",
  "0x3eb290d0",
  "0x22fd8d3b",
  "0x768b1525",
  "0x5be95814",
  "0x523d7fe9",
  "0x55e94cec",
  "0x47c42e1f",
  "0x1aa53b5e",
  "0x2fd1fe7e",
  "0x59230e91",
  "0x7472da66",
  "0x6443f2df",
  "0x2d9de19d",
  "0x6f7f6a84",
  "0x77800430",
  "0xf014bc8",
  "0x7bf3d095",
  "0x26afd318",
  "0x582561f7",
  "0x5ee3198c",
  "0x6acc0000",
  "0x2f315e26",
  "0x27cac040",
  "0x2595081e",
  "0x5963b7da",
  "0x7e073565",
  "0x6cf3f5f1",
  "0x9f8a3a4",
  "0xda8ccfe",
  "0x60be2365",
  "0x7ed742f5",
  "0x668b8031",
  "0x4bb03494",
  "0x59019333",
  "0x700e2878",
  "0x1cc45856",
  "0x1d1617f7",
  "0x7b988da6",
  "0x4eb4936c",
  "0x78c9f87e",
  "0x63ce3e94",
  "0x7178341b",
  "0x45bc2f86",
  "0x5b775bc",
  "0x704b0244",
  "0x29eed278",
  "0x47f43032",
  "0x2127b2e5",
  "0x1997903f",
  "0x24b3ce03",
  "0xc32298c",
  "0x7d2b6f3a",
  "0x17fcaa81",
  "0x72f37fef",
  "0x3028e7a9",
  "0x5edd4d96",
  "0x1f96583b",
  "0x4cd6918a",
  "0x14880f0e",
  "0x69170359",
  "0x173cbd33",
  "0x969e7f4",
  "0x6e7f23ab",
  "0x6182ea87",
  "0x4dcb1f5c",
  "0x585fa113",
  "0x729cb3b6",
  "0x1b3a27a",
  "0x1ba173e7",
  "0x4b33bcea",
  "0x63d93bbb",
  "0x6b3fbf99",
  "0x6f17e9d1",
  "0xc3dd8ba",
  "0xbc1f9a8",
  "0x64d3f370",
  "0x465a6a18"
};

static const std::string mds_matrix_24[] = {
 "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
 "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6",
 "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
 "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
 "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"
};

static const std::string partial_matrix_diagonal_24[] = {
 "0xcd7eceb", "0x74a071f", "0x66aaaeff", "0x1c334b66", "0x4d094cb1", "0x2f8579aa", "0x2709471a", "0x710093ce", "0x53d435ad", "0x7306a110", "0x57568906", "0x4967d8e0", "0x7f74627f", "0x682145a", "0x478d7525", "0x1eacc229", "0x651f1141", "0x42f397f0", "0x24e49ad7", "0x5ca35700", "0x42f300ea", "0x2fd01085", "0x28a86484", "0x104402b5"
};


}   // namespace poseidon2_constants_m31 {
#endif
