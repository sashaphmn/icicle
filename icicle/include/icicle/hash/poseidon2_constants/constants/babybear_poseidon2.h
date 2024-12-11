#pragma once
#ifndef BABYBEAR_POSEIDON2_H
#define BABYBEAR_POSEIDON2_H

#include <string>

namespace poseidon2_constants_babybear {

  /**
   * This inner namespace contains constants for running Poseidon2.
   * The number in the name corresponds to the arity of hash function
   */

int full_rounds_2 =         12;
int half_full_rounds_2 =    6;
int partial_rounds_2 =      24;
int alpha_2 =               7;

static const std::string rounds_constants_2[] = {
  "0x496e51f7",
  "0x3b852d97",
  "0x65ba8e68",
  "0x2343a6e6",
  "0x676c3489",
  "0x541ef7dd",
  "0x212ef216",
  "0x162baeaf",
  "0x4a4bd455",
  "0x11e9d456",
  "0x1fed11a4",
  "0x5d6b800f",
  "0x28ae336a",
  "0xc47274b",
  "0x1470aec",
  "0x151e4376",
  "0x4da62b63",
  "0xe0954d8",
  "0x3dcd4061",
  "0x30886148",
  "0x68785d3b",
  "0x335ab08f",
  "0x6c7fd1b5",
  "0x39fb5f79",
  "0xb838c9b",
  "0x274ef903",
  "0x31e0c277",
  "0x6faa6ba7",
  "0x5e9c5053",
  "0x3f164fd4",
  "0x3491d3c3",
  "0x98e7f05",
  "0xdcab970",
  "0x24a953a7",
  "0x6548a9e6",
  "0x1f208622",
  "0x45d3f963",
  "0x457524d",
  "0xb98477",
  "0x72ad1b94",
  "0x240c67d6",
  "0x44abde5",
  "0x45b04867",
  "0xdb23d07",
  "0x69a97a62",
  "0x539c81ff",
  "0x1813c6d6",
  "0x7cb2342"
};

static const std::string mds_matrix_2[] = {
 "0xffffffe", "0x7ffffff",
 "0x7ffffff", "0xffffffe"
};

static const std::string partial_matrix_diagonal_2[] = {
 "0xffffffe", "0x17fffffd"
};


int full_rounds_3 =         12;
int half_full_rounds_3 =    6;
int partial_rounds_3 =      17;
int alpha_3 =               7;

static const std::string rounds_constants_3[] = {
  "0xd4814b5",
  "0x69deda63",
  "0x4f226d6f",
  "0x19441d8c",
  "0x2c14d16b",
  "0x18dfac7",
  "0x58dc30e0",
  "0x45a6ea1c",
  "0x613b0b96",
  "0x8d6424d",
  "0x173ab933",
  "0x59965877",
  "0x1074b09f",
  "0x25170689",
  "0x65155d9a",
  "0x19c7d746",
  "0x21f7f5de",
  "0x1b1c6a8a",
  "0x27107756",
  "0x2b3e6f83",
  "0x4c87326",
  "0x362ab098",
  "0x7425bd01",
  "0x2cbfab69",
  "0x682fca5a",
  "0x4787d0e7",
  "0x2a734b17",
  "0x4c01a7ac",
  "0x2f137475",
  "0x266fb11b",
  "0x57d713b7",
  "0x507b1954",
  "0x16e13c43",
  "0x2d1a62cd",
  "0x6101cb41",
  "0x23e1b5ea",
  "0x26f4e7ba",
  "0x5166c7e8",
  "0x6aabb1ff",
  "0x17c7f248",
  "0x5e539ef4",
  "0x30499a4f",
  "0x5ffff22c",
  "0x34cc47e5",
  "0x75e87289",
  "0x30f2852b",
  "0xe68769b",
  "0x6607ba00",
  "0x11a03cd0",
  "0x2503985a",
  "0x4e4cbfaf",
  "0xd86f0b3",
  "0x29e16ad6"
};

static const std::string mds_matrix_3[] = {
 "0xffffffe", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0xffffffe", "0x7ffffff",
 "0x7ffffff", "0x7ffffff", "0xffffffe"
};

static const std::string partial_matrix_diagonal_3[] = {
 "0xffffffe", "0xffffffe", "0x17fffffd"
};


int full_rounds_4 =         8;
int half_full_rounds_4 =    4;
int partial_rounds_4 =      21;
int alpha_4 =               7;

static const std::string rounds_constants_4[] = {
  "0x231d3818",
  "0x549c1e4",
  "0x4b2a9a32",
  "0x505c4e03",
  "0x2a4bb828",
  "0x1ec8d500",
  "0x68381501",
  "0x6393aa37",
  "0x6e85e4ec",
  "0x2be33fd",
  "0x4fc27ed4",
  "0x75cc9277",
  "0x87205ee",
  "0x3107a749",
  "0x3548632c",
  "0x488627bd",
  "0x72e43dc4",
  "0x44ef63c8",
  "0x28d9f4f7",
  "0x4f30a38d",
  "0x2b8f68cd",
  "0x14bc4649",
  "0x59d96ce4",
  "0x53f56473",
  "0x3b53d43d",
  "0x483ffff1",
  "0x7620f827",
  "0x44b4c98e",
  "0xde7d1bf",
  "0x5b8f0b34",
  "0x4f468962",
  "0x2eea20c2",
  "0x7239cbb0",
  "0x2b1585a9",
  "0x35d223dd",
  "0x61c8bb5b",
  "0x4c188d2c",
  "0x620b1a8",
  "0x4e7b8ec2",
  "0x72ea25d",
  "0x1909aebb",
  "0xa8a9c8f",
  "0x1edb26d1",
  "0x6eb9fbb",
  "0x2f2fa249",
  "0x5db72881",
  "0x42b1865",
  "0x20f3c4d0",
  "0x2fe5b0e7",
  "0x1c39acee",
  "0x5984234b",
  "0x39c53f94",
  "0x16423423"
};

static const std::string mds_matrix_4[] = {
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa"
};

static const std::string partial_matrix_diagonal_4[] = {
 "0x76ab450a", "0x1774e7df", "0x51a1c9ed", "0x14f249e6"
};


int full_rounds_8 =         8;
int half_full_rounds_8 =    4;
int partial_rounds_8 =      12;
int alpha_8 =               7;

static const std::string rounds_constants_8[] = {
  "0x153c368b",
  "0x4759f47c",
  "0x66a6822",
  "0x4c72ead8",
  "0x6c89156e",
  "0x6757cd8a",
  "0xe7387b2",
  "0x349d93b2",
  "0x629c8308",
  "0x55d7a1b3",
  "0x1a097200",
  "0x15d25f70",
  "0x5af421b0",
  "0x46c04d8f",
  "0x4eb81c25",
  "0x253a662f",
  "0x433b95a6",
  "0x77ec55ef",
  "0x57bcbdbb",
  "0xa2e1808",
  "0x5aac99bf",
  "0x6e899d98",
  "0x18cbb092",
  "0xac93f5b",
  "0x6c5a5dba",
  "0x748b1397",
  "0x6a88a0f5",
  "0x5096fdab",
  "0x134925f4",
  "0x5845f68f",
  "0x5217ca9e",
  "0x1c7a6aa9",
  "0xe7e2936",
  "0x5354bccc",
  "0x247200ec",
  "0x5df6d291",
  "0x4f7a15c0",
  "0x317b1aa",
  "0x3c459cb7",
  "0x373b088b",
  "0x1a754739",
  "0x208ec4f7",
  "0x3d1cd649",
  "0x45752166",
  "0x37e9a548",
  "0x36420f",
  "0x2bd07867",
  "0x5a7bd451",
  "0x2fa93747",
  "0x6115a44a",
  "0x27245197",
  "0x1957b37c",
  "0x6602e3b8",
  "0x2ea0bb6c",
  "0x2bfc5ee3",
  "0x59acc709",
  "0x327ffe04",
  "0x23838954",
  "0xd58c14",
  "0x477a3061",
  "0x317d7bef",
  "0x94ab60d",
  "0x50cec3d0",
  "0x6c9ea48c",
  "0x19bb558e",
  "0x35fc3d94",
  "0x59aae9ff",
  "0x6dd1875",
  "0x4994dbee",
  "0x1b7ee587",
  "0x188f77a6",
  "0x390d88c8",
  "0xfbce9af",
  "0x72c6fa67",
  "0x2767df5e",
  "0x1e0b023f"
};

static const std::string mds_matrix_8[] = {
 "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4"
};

static const std::string partial_matrix_diagonal_8[] = {
 "0x6c9297c", "0x772908f", "0x566b5241", "0x4a0a2766", "0x914c606", "0x4962057", "0x583a9a4a", "0x74c3f8c8"
};


int full_rounds_12 =         8;
int half_full_rounds_12 =    4;
int partial_rounds_12 =      10;
int alpha_12 =               7;

static const std::string rounds_constants_12[] = {
  "0x3e959e5f",
  "0x30cb6e1a",
  "0x3130ca47",
  "0x6a32ca18",
  "0x408f618a",
  "0x13450dad",
  "0x1fcea71a",
  "0x4ea0772b",
  "0x3314ee9a",
  "0x26459d7f",
  "0x1218fbcd",
  "0x13e02ae",
  "0x6ec0bd28",
  "0x67a7f357",
  "0x61bc0376",
  "0x2c36cf9b",
  "0x1f2bdf32",
  "0x41d7d463",
  "0x6b28cf6c",
  "0x35020827",
  "0x304af3ac",
  "0x6a128b25",
  "0x5045ad17",
  "0x277449ac",
  "0x2c407d4",
  "0x62bf8150",
  "0x944385",
  "0x30b517c7",
  "0x35db714d",
  "0x39022f3a",
  "0xdd040e4",
  "0xb8487f5",
  "0x5296b7c",
  "0x6dfda9e1",
  "0xf36d1db",
  "0x184fa118",
  "0x2de5e27b",
  "0x736c2498",
  "0x1f51d1d3",
  "0x6b6f1298",
  "0x2d4ab60b",
  "0x1098733c",
  "0x35005ddd",
  "0x6d5d8a79",
  "0x49065f9c",
  "0x1d6893e6",
  "0x5f7602c6",
  "0x4e223b11",
  "0x5053c4ed",
  "0x5b503b15",
  "0x4181f3bf",
  "0xe4006c8",
  "0x39632663",
  "0x91d94da",
  "0x1707d98f",
  "0x6a0b9d68",
  "0x3b33a8cf",
  "0x1444b261",
  "0x3945ae23",
  "0x59fdab7e",
  "0x525a5f97",
  "0x5829916",
  "0x5a81dedf",
  "0x1235a704",
  "0xdf6cbc4",
  "0x354e7336",
  "0x5bb3b865",
  "0x629401c2",
  "0x5ca537c6",
  "0x16d221ef",
  "0x25da952",
  "0x134f7b18",
  "0x17b6948e",
  "0x3011bc30",
  "0x6e3ccb8",
  "0x67f189f2",
  "0x32379101",
  "0x6827af73",
  "0x2dc6e153",
  "0x3edb57c0",
  "0x3bd959aa",
  "0x2798d578",
  "0x9bda854",
  "0x701aac1b",
  "0x5859e3d1",
  "0x34ddfd1d",
  "0x4f273574",
  "0x2fa9f707",
  "0x95be3f9",
  "0x3b8d9fd5",
  "0x46e35bb1",
  "0x67bceafb",
  "0x49b3af0f",
  "0x1c457189",
  "0x772232f",
  "0x1ebd6b95",
  "0x620166f4",
  "0x602ef282",
  "0x292717b8",
  "0x7463c896",
  "0x15c32ab7",
  "0x6854697c",
  "0x46d776a5",
  "0x5273b1d8",
  "0x34a83245",
  "0x6eabc1f5"
};

static const std::string mds_matrix_12[] = {
 "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4"
};

static const std::string partial_matrix_diagonal_12[] = {
 "0xce7a912", "0x5b05543d", "0x4a698615", "0x5898f5a4", "0x6c0ce274", "0x1632c276", "0x4cea262c", "0x60de8ee3", "0x77ddd936", "0x6534087b", "0x1918cb9b", "0x1db85c3f"
};


int full_rounds_16 =         8;
int half_full_rounds_16 =    4;
int partial_rounds_16 =      13;
int alpha_16 =               7;

static const std::string rounds_constants_16[] = {
  "0x2f26b49c",
  "0x749c2ef8",
  "0x30eede9d",
  "0xdca08c0",
  "0x62906bbf",
  "0x6523c014",
  "0x75972be2",
  "0x8731889",
  "0x5a4cdf14",
  "0x110c2bd",
  "0x61df4d5c",
  "0x5562309a",
  "0x17b1663b",
  "0x1bb41133",
  "0x4b9b8a72",
  "0x6b80eebf",
  "0x1ab3c283",
  "0x33ed0692",
  "0x1b598045",
  "0x2d33b2e6",
  "0x5ee0345f",
  "0x176a5cf6",
  "0x4e49c96a",
  "0xa852b8e",
  "0x143aa4f5",
  "0x1df6d8dc",
  "0x32cf0247",
  "0x23011eb8",
  "0x4b2ad497",
  "0x4bce2948",
  "0x278d6b10",
  "0x2a3fd440",
  "0x2260cd9b",
  "0x1161788d",
  "0x47db3b39",
  "0x2aeeef5a",
  "0x498c53f7",
  "0x5334207",
  "0x411e6a05",
  "0x3b8f2aa4",
  "0x29d55d49",
  "0x35dff038",
  "0xd6be289",
  "0x677a7dfd",
  "0x17749f56",
  "0x1fb3de0a",
  "0x3b379fb3",
  "0xe5aaaae",
  "0x24b5a42b",
  "0x63729145",
  "0x431a8b14",
  "0x77f97d16",
  "0x1e8bb666",
  "0x5d081d6c",
  "0x62452dd5",
  "0x12167f0b",
  "0x1e711729",
  "0x15703085",
  "0x4fa8e406",
  "0x52ef7edc",
  "0x1801bcb7",
  "0x4da63bf6",
  "0x703c40fc",
  "0x4fc56c82",
  "0x7771e23",
  "0xfc01b80",
  "0x2be5d6f3",
  "0x1d1e9a39",
  "0x7434335f",
  "0x5c9ed03a",
  "0x4065479b",
  "0x4fcb295e",
  "0xbe300ed",
  "0x46054251",
  "0x6c8999be",
  "0x1a7b710b",
  "0x117cdc59",
  "0x1dcc198d",
  "0x912da80",
  "0x1078c392",
  "0x496e8f57",
  "0x13e45d70",
  "0x33c0849c",
  "0x639202f1",
  "0x5e5e8820",
  "0x5456bda4",
  "0x20128c1d",
  "0x75110348",
  "0x6dbb5973",
  "0x28b28c25",
  "0x1d1408e8",
  "0x1ebeadce",
  "0x65862b4f",
  "0x2e556d0e",
  "0x5a83313f",
  "0x2ffe3736",
  "0xa5d14fc",
  "0x74e8e0f5",
  "0x5207dc7c",
  "0x48c5b2f1",
  "0x12de7f83",
  "0x3fa13e1b",
  "0x2cd8891",
  "0x64cf5031",
  "0x2540d29b",
  "0x3f67cd55",
  "0xf596502",
  "0x1763e56",
  "0x767b639a",
  "0x29275fef",
  "0x736ece85",
  "0x3dedb591",
  "0x4a737e",
  "0x6e1f689e",
  "0x512f5c15",
  "0x5a67bac3",
  "0x2a25389b",
  "0x69a48948",
  "0x3d13deab",
  "0x51445ed7",
  "0x3eae268c",
  "0x37c11625",
  "0xbcd21f9",
  "0x5d760c4b",
  "0x7079ec18",
  "0x186e7a91",
  "0x40355b9",
  "0x704eb1ee",
  "0x8ca1fc",
  "0x6eb84e67",
  "0x711e2b71",
  "0x2c38f6ca",
  "0x58af23df",
  "0x375c4ae2",
  "0x42a115ed",
  "0x3de25b3d",
  "0xf5ab6ef",
  "0x642f33db",
  "0x1d02908f",
  "0x2f6ae082",
  "0x51093af9"
};

static const std::string mds_matrix_16[] = {
 "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4"
};

static const std::string partial_matrix_diagonal_16[] = {
 "0xceb8b1d", "0x3af93c0a", "0x73379d36", "0x3a7c8b28", "0x211d8665", "0x75da9905", "0x3348eb38", "0x67f3018e", "0x4cca00d4", "0x27b217ad", "0x4b964db8", "0xbfc0eca", "0x2ff66172", "0x2e09f24a", "0x4dee8c41", "0x40536eed"
};


int full_rounds_20 =         8;
int half_full_rounds_20 =    4;
int partial_rounds_20 =      18;
int alpha_20 =               7;

static const std::string rounds_constants_20[] = {
  "0x3f1d8f9",
  "0x6144cf66",
  "0x59d2b2d",
  "0x1c4fecd7",
  "0x46610dcd",
  "0x76219df9",
  "0x2a8726e",
  "0x6e5cbe4f",
  "0x40bc933a",
  "0x14df392b",
  "0x1bbee171",
  "0x5377bd17",
  "0x344194f0",
  "0x1db250db",
  "0x6c8c6939",
  "0x55d54f43",
  "0x51be03bb",
  "0x67df0bc3",
  "0xc583cb3",
  "0x743af148",
  "0x4bebafd3",
  "0x2b80eaac",
  "0x22997a65",
  "0x5213bef",
  "0x74611cbb",
  "0x4a11e1b9",
  "0x1efc6855",
  "0x7d1ba63",
  "0x74be7c1d",
  "0x14501b4b",
  "0x549b7991",
  "0x3a3daabd",
  "0xd742a30",
  "0x6d808ed4",
  "0x3a088b07",
  "0x9df75b",
  "0x57814aae",
  "0x58f1c1c9",
  "0x5a605c88",
  "0x3b71cd9c",
  "0x29e71b86",
  "0x254d75f0",
  "0x274a0c43",
  "0x5ebf3446",
  "0x263f775c",
  "0x637c9c64",
  "0xe7aa078",
  "0x11b04b99",
  "0x6af995b5",
  "0x4bd45c46",
  "0xad1beae",
  "0x54867fd8",
  "0x1483c336",
  "0x4e77b32f",
  "0xcf49ab3",
  "0x5bd9f217",
  "0x49d389f4",
  "0xfa353cb",
  "0x11447bd5",
  "0x5491082f",
  "0x63612d14",
  "0x744f390f",
  "0x7340e416",
  "0x4ef5de5e",
  "0x4f6a4dcd",
  "0x52c3bd4c",
  "0x41b5544e",
  "0x44350e46",
  "0x59497972",
  "0x3caf3ae1",
  "0xde7fbd9",
  "0x6f7354b9",
  "0x64c96401",
  "0x332be8",
  "0x3bd6797e",
  "0x5ea3c617",
  "0x4632d858",
  "0x2b842460",
  "0x1766e1d5",
  "0x28c59acc",
  "0x25122b6a",
  "0xa32210a",
  "0x212dd087",
  "0x1c056ada",
  "0x6c856259",
  "0x3aa9224d",
  "0x1f334fe3",
  "0x12b32d28",
  "0x3c76df00",
  "0x698d51b0",
  "0x4a20bbc3",
  "0x521a1af2",
  "0x4683ed45",
  "0x6115bff7",
  "0x6a931cc9",
  "0x1976b37e",
  "0x168df531",
  "0x55fa71c1",
  "0x4d66d4a1",
  "0x2379865b",
  "0x6ccf9d05",
  "0x4603b9ee",
  "0x461f7a69",
  "0x65bc652e",
  "0x1976093d",
  "0x595387d9",
  "0x50084bbc",
  "0x65fb9c7a",
  "0x28018c97",
  "0x4c5325d6",
  "0x4ffcfbaf",
  "0x2102a0ac",
  "0x407f3c9b",
  "0x1155990d",
  "0xdf0e40d",
  "0x33b65067",
  "0x38d0cde0",
  "0x38093b70",
  "0x605c6575",
  "0x5bcb14d6",
  "0x3ebb879e",
  "0x52db3a77",
  "0x551cbdf8",
  "0x7323b878",
  "0x6eca40e4",
  "0x453f3672",
  "0x5564b353",
  "0x3ae9c86f",
  "0x393197d9",
  "0x482cf7ca",
  "0x58af030c",
  "0x267e1f7e",
  "0x2e8d8988",
  "0x40b7193d",
  "0x688eec2c",
  "0x16cc41f8",
  "0x5a94f758",
  "0x402a0960",
  "0x282929b",
  "0x1a1cb8d4",
  "0xd91d968",
  "0x58a21673",
  "0x42ec7af6",
  "0x3b7f716a",
  "0x74ae58d0",
  "0x290ab8e6",
  "0x764b82ad",
  "0x17a13ebb",
  "0x29c55f44",
  "0x28e7f815",
  "0x1f0cfc36",
  "0x777c58c5",
  "0x3967b345",
  "0x10644f84",
  "0x5658c0",
  "0x24737938",
  "0x54a428b4",
  "0x4addf4d6",
  "0x71627c50",
  "0x771116cb",
  "0x6861b3d8",
  "0x41c4553d",
  "0x33256b13",
  "0x67e3ee9",
  "0x2f17a890",
  "0x1b271a07",
  "0x6430d488",
  "0x74d59e4c",
  "0x109c9d5d",
  "0x5317e5a1",
  "0x4cddc40",
  "0x48f49c9a",
  "0x2812fa55",
  "0x3f3f364f",
  "0x685d83cf",
  "0x37411572",
  "0x373c0704",
  "0x6d21dd52"
};

static const std::string mds_matrix_20[] = {
 "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4"
};

static const std::string partial_matrix_diagonal_20[] = {
 "0x7140f175", "0x516da79f", "0x578823e8", "0x6043ede7", "0x18625f14", "0x162fc72b", "0x358a8b3", "0x34a843b6", "0x578f78fd", "0x6023d18", "0x366d881a", "0x276a0ec4", "0x33b7a972", "0x19441302", "0x63f4cb40", "0x3dff75a8", "0x2d987f8f", "0x74737b8f", "0x324b162f", "0x257c2aeb"
};


int full_rounds_24 =         8;
int half_full_rounds_24 =    4;
int partial_rounds_24 =      21;
int alpha_24 =               7;

static const std::string rounds_constants_24[] = {
  "0xf53262c",
  "0x67e8d182",
  "0x2bf98d38",
  "0x859c3ad",
  "0x3dfb2d07",
  "0x107eb63d",
  "0x313f0bc",
  "0x6c22058c",
  "0x182a33e5",
  "0x4f44d0e8",
  "0x5c2e6f9c",
  "0x6d3e8793",
  "0x4cf5458d",
  "0x1adef771",
  "0x5e694c57",
  "0x5faddfb9",
  "0x222b8dc9",
  "0x74e00d67",
  "0x5f6bf19f",
  "0x56979d81",
  "0x731fa522",
  "0x309fad5c",
  "0x159f31a2",
  "0x31d5ee9",
  "0x63c28b7e",
  "0x4aa8df68",
  "0x3d9f7d74",
  "0xb352d14",
  "0x610cd60",
  "0x3d9c8d6f",
  "0x317be7ca",
  "0xf708992",
  "0x3ad176ee",
  "0x86a631a",
  "0x6c54eccd",
  "0x71903fc4",
  "0x6e7a38f8",
  "0x76f7fb0a",
  "0x1a6bcc77",
  "0x41008ac8",
  "0x16d8d5da",
  "0x2ba371a1",
  "0x5e15e435",
  "0x2ed3b171",
  "0x5cb82567",
  "0x4020c16c",
  "0x28a87c09",
  "0x391c1eb1",
  "0x170ae214",
  "0x36467079",
  "0x4807aa3d",
  "0x2ef722a9",
  "0x23356be",
  "0x162b0c60",
  "0x119f7dc7",
  "0x2abc6361",
  "0x43d2b6f0",
  "0xcdc483a",
  "0x15721392",
  "0x5c9cddb",
  "0x61b63a57",
  "0x75aaf8c0",
  "0x70632e9d",
  "0x55836569",
  "0x2eaa895b",
  "0x18dae9a0",
  "0x365a6f7",
  "0x734a3285",
  "0x321c8451",
  "0x5689dfa6",
  "0x4b8b8f63",
  "0x4129fb31",
  "0x67d4deb2",
  "0x4b0c889a",
  "0x3951a214",
  "0x45fb722d",
  "0x2a33a198",
  "0x385aa19",
  "0x5cce3b61",
  "0x42bb87ba",
  "0x32913e05",
  "0x4303f6c6",
  "0x3b85781d",
  "0x5157fdf8",
  "0x4ae0053c",
  "0x6f49ab88",
  "0x44a14107",
  "0x6f3e7105",
  "0x34852987",
  "0x2d068609",
  "0x2cbdc09a",
  "0x3a5ac10f",
  "0x312e0680",
  "0x4697c6a5",
  "0x76b46af3",
  "0x75dec4a7",
  "0x185e56a9",
  "0x2d498fdb",
  "0x51c5897",
  "0x460743cb",
  "0x3532e182",
  "0x392ebe5e",
  "0x2a3a623d",
  "0x401a79c",
  "0x37bd201a",
  "0x6bbc8d9c",
  "0x9547596",
  "0x24619e59",
  "0x735d6d74",
  "0x4122e08e",
  "0x6bc3e7e9",
  "0x4495c5be",
  "0x455a287b",
  "0x50077b57",
  "0x4b9694cc",
  "0xb05c125",
  "0x4e2a6d1",
  "0x2ca0b16a",
  "0x6207cd6e",
  "0x74735906",
  "0x27bec592",
  "0x22ed7e8a",
  "0x283adacc",
  "0x3715d3b9",
  "0x522d7360",
  "0x3a1d607a",
  "0x18692e00",
  "0x764b3bdd",
  "0x5d3d9ff7",
  "0x5d77b918",
  "0xceca4ee",
  "0x59f1a46d",
  "0x4a804dc3",
  "0x2850cd74",
  "0x1c3d1e8d",
  "0x1466ec2a",
  "0x1095087f",
  "0x414a203d",
  "0x4a7c747b",
  "0x360a00bb",
  "0x15d10215",
  "0x131f9874",
  "0x28b525a",
  "0x1f2ecdb9",
  "0x72d5fd18",
  "0x45ba1b41",
  "0x288ae83a",
  "0x1f0f3bcb",
  "0x18d678a5",
  "0x3fdcbb79",
  "0x2afcb40a",
  "0x1d305d65",
  "0x32fa8c64",
  "0x1f3e879f",
  "0x271949ee",
  "0x5414d10e",
  "0x80679d7",
  "0x68d44611",
  "0x44deaff0",
  "0x2eeced5f",
  "0x6914ed0b",
  "0x5dc03838",
  "0x12eadfe0",
  "0x17f45377",
  "0xe71958d",
  "0x14555ff1",
  "0x1e3f312f",
  "0x2bfebc0b",
  "0x77bba0e2",
  "0x4bc9a955",
  "0x334d3211",
  "0x2af6e1cf",
  "0x37665bd2",
  "0x5e9dc6e",
  "0x66d2d498",
  "0x2437699b",
  "0x1bd10d43",
  "0x448cb57",
  "0x1edbe0e3",
  "0xdbbcd84",
  "0x1b1e7cec",
  "0x41fe9bec",
  "0x48d09f49",
  "0x12ebcb4a",
  "0x5ae6dc96",
  "0x7ac5349",
  "0x45b1d67f",
  "0x68256e07",
  "0x3ce5ca1",
  "0xb43c945",
  "0x377034ba",
  "0x702e3c1a",
  "0x912c929",
  "0x4088756f",
  "0x17e13d6d",
  "0x74449a4b",
  "0x31789558",
  "0x537772f7",
  "0x56561a9f",
  "0x52c3d792",
  "0x6b23d111",
  "0x7597e647",
  "0x215a02f3",
  "0x12a65d05",
  "0x57343b30",
  "0x1f648d01",
  "0x2523e581",
  "0x3c8869b2",
  "0x75ab0b40",
  "0x67be8d99",
  "0x45aee2fa",
  "0x41b59edb",
  "0x703f0697"
};

static const std::string mds_matrix_24[] = {
 "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa",
 "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x4ffffff6", "0x6ffffff2", "0xffffffe", "0x2ffffffa",
 "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x3ffffff8", "0x5ffffff4", "0xffffffe", "0xffffffe",
 "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0x7ffffff", "0x17fffffd", "0x27fffffb", "0x37fffff9", "0xffffffe", "0x2ffffffa", "0x4ffffff6", "0x6ffffff2",
 "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0x7ffffff", "0x7ffffff", "0x1ffffffc", "0x2ffffffa", "0xffffffe", "0xffffffe", "0x3ffffff8", "0x5ffffff4"
};

static const std::string partial_matrix_diagonal_24[] = {
 "0x6320d9ab", "0x1019f6cb", "0x68e7b382", "0x3140f98b", "0x26276476", "0x14b3d0ad", "0x255c044c", "0x3c78d299", "0x4cf0086a", "0xeb1ec3e", "0x6c6bcee9", "0x6935e282", "0x3fa302bd", "0x29bee8aa", "0x385a5a41", "0x66062a65", "0x2d0aaf04", "0x102cb00", "0x2b1c167f", "0x53cdce55", "0x52703c56", "0x116bde89", "0x37214a59", "0x1598a6e6"
};


}   // namespace poseidon2_constants_babybear {
#endif
