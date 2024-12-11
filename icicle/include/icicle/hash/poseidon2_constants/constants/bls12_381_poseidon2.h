#pragma once
#ifndef BLS12_381_POSEIDON2_H
#define BLS12_381_POSEIDON2_H

#include <string>

namespace poseidon2_constants_bls12_381 {

  /**
   * This inner namespace contains constants for running Poseidon2.
   * The number in the name corresponds to the arity of hash function
   */

int full_rounds_2 =         8;
int half_full_rounds_2 =    4;
int partial_rounds_2 =      56;
int alpha_2 =               5;

static const std::string rounds_constants_2[] = {
  "0x715f0382563ca6b715c8726b7e3ff77e5f648e40318422744fa900f3616d90fe",
  "0x4519d87de1854d248d7e56eac2ec5d448581b74a008200dd665eded9a152beed",
  "0x689d9ba29c9684aa157e459055d99081e87bfa6cab5a5eff6f5922834454e4f9",
  "0x5f151182e74111a7ac2c93cb722ffdbf03fb0f8d79a17de539ee7dbea285d883",
  "0x3ea46c565d7a61d89516d61b38b883a8a051a0e8b975cf4ba324c311afce44ca",
  "0x43982ffaf38707def26586d21346697d3f293e134c4a699435c828fc19c54d85",
  "0x57a57a951762887ee10a3e9cbde0d1b17bd8ea7634fe79dc4ec93a5e3e7b576e",
  "0x5ec05df0c6055942c2daf32f107eee862ccd0105715fa19d885d315b47726694",
  "0x6da17dd48d05254a2367320c5ae2b31410514461752c2be4061f278db1f88d56",
  "0x6a599ec68c16bcfd39f6971fcd28be0848b1f19305412b95668f3c4603025797",
  "0x5e43e0d0f01b06b70795ad03108710079d0a11586c66ebe2d32ebd0169cf5309",
  "0x4ca3367ca868d99ffdfb48f8cf2659ae54408e267eecf8151dd5bad211a8940b",
  "0x152bc0864708a5b98802008278343e7ddd95bfa09a9842b21d97b2e6cb72f4d0",
  "0x22316d7e820d02df70e58634b34342f24a8b41b6efbd8fab565500ea50c272d3",
  "0x9a961f64b4025f11859549230caa177c8f190640aa1a6409afbd6fc8b5160c",
  "0x4e034f7a56c2f4fd670970ab78be8d613a424ae1db504c8df253ce3706327cfc",
  "0x728adb9dea2b683b77150e5d146cf74d65a9f42ee1b200c38337231aa7359bad",
  "0x877a2bebaf5080205dd5c8adf705b540bc53d5f60688b83011e11f9759fdcb3",
  "0x6198647676cced466899dd878f412bf1315b72bfd7e8934f993b44fcfd74b56",
  "0x27da3fe7e09e51e00154290a873d10c8c432cad6ed842b3b81c374bf3b63ac7a",
  "0xe57fd1cb06f623fe4fe1f09e0b6894c18784416f80fd259365a1eb1ecee74dc",
  "0x2e30d12869f7ce6c7ed44ca291df12a0c54a865b43228f0f054231bfc514ea1d",
  "0x50de86245e33b1eaf8ab178effee1ed0dce5e22e39966ab2eb2b1ce9b5b6f7fb",
  "0x43d8dceb42a2144edd750a9405b7b666a13bfca1d2b6ee0e96e115e2ccd3f5a7",
  "0x369c56a148835b78f7c1f83f23d6fe293e310b92336adf80388c1c10bd1075e2",
  "0x43298285e52627484f0cf90acb52cbfdbc02274e44836ab521c59956512cd02e",
  "0x14b371a3713eb1fbb94ed5c97e0edf11f4eb284fb59042f1e7b1fce47040c996",
  "0x495e5d6d644bd76abe3f76a37d129cdf4bf5737fb09d6cb7cde31813666b521e",
  "0x5e1a1a4206645a9d85e7c58d96b322002ede033e4cda14b53b6d87c934d267b5",
  "0x35f2e4deb8ea915527dd6ce9287bb875eec805360ba1fe9185fd6a3757bc06b7",
  "0x42677d4c2fd7dbf2b6786315075524390270d712a7035a82596c5675fb399edb",
  "0x3fcff69c410e58cd43ea1d61e92ce4d7ba44db1cdcb95d8912fef8ade19209f6",
  "0x129f4c41b9f094098ff8f522019d29356ad7c51ae490ce0cbebeb661cd938c20",
  "0x527ab7a20df6691f3faff2a8dd4f4ea7640608c52c2b7a936122c1a72f847161",
  "0x52baf8d742289181ddd03d912da8fcc754f908e995bc635426c0446cb951a7ee",
  "0x22f0b63bf49bb8cce6b711f716329b8ebdde8ef643d49e94d54e43f4df74d4f8",
  "0x576f917a25969bce2842aafaf37388e9431af66e7099df59e7b46a8ba2a35c16",
  "0x509c9a3a57114666f3f1ac5f2456b5ef5d689ff2e393f52372cdb9b4844fc85b",
  "0x6718deb4dabc424af6734f3f6820dd6952dabde274c3e11719699e1575fa6d7c",
  "0x4715afd7776b3c53b01c483f83409c1575e9526bbb47d68e1887c9d88ccd6deb",
  "0x3a28c7816b66cd2ee557cfb562e40e78a62e5498f9048a6e2c183a961fd050c3",
  "0x436f6c62ef83210eb7063c01e7717bb59671c3309a8d445f4f4ce094e781b297",
  "0x36869c13976d4fdfecfa44aa22a27c5e4996c1bc8e0b96ce5bd96f6f1dded094",
  "0x6c7dd61f2a137804b6b518c2ea6fc5c79a6459a62c5d1b094c9388b12d1801ff",
  "0xb44a855b8ab291d7896ff677cae9c7162c390b80360e4a830af0a7facc3057f",
  "0x5910ef99c06ac25dc2d0ad292c48fb1b65c986af84e9ccf56cafb7dab24d63c0",
  "0x6dbacaddd59f21d235a7ca201322070cc30424b58c20ea3ee2ae19994d51c2c7",
  "0x3087eae5200a728d53f847d4f9d6c084775bd345ef79b29948f62481a6491658",
  "0x3e9a4ba71b5e4f0b7d093a70cf621d3d72b8022323d15a584fb8b7316a3ffad",
  "0x4324abcb509281661545a1b0bf907df13bb687488532e5b89f51d9f8fa9124eb",
  "0x3452c98ba9c7a2fd41ea36bc68942fcf93fce86a393e604777c551de8ce87f70",
  "0x45cc350c187d6b3b08fa5f4f904ee88e119add022524ad5ecea49044efaa0a79",
  "0x404911964e4503bbd5314cc60a9b44e32a58e368ae24045989d622a64d51cab9",
  "0x24e2ae64f7897705f2e61e5fb706d3ea506099e05b432fef03edf2ffb8e39d3e",
  "0x2296ff17497d91733b3570deeb1b0fa132bbcc7735736d709fad45303674472d",
  "0x40ad1756f02347a722326f2445c839addd774c1ce5fec087aaab90f381ed0caf",
  "0x4f4422cebdae9ddfe7f3ffbc96c3a0a5d9dc21238052427c07514bcfde07db87",
  "0x15fcbaf05ae16e9f34cce731b75fc3ee606b3a9e52e467cb3c0f0bc3b37b275",
  "0xe6b900bc59fb7bb9044af64ca41ec003b514e9d6cab9b75a32c41083bf06313",
  "0x55d08bbd29cd7ca9b676887e97b2e5d5b5c7898d33c35b4ea9d584528d6a0ddb",
  "0x4df422702f1883816cd574ab55a8727d7ec5688e491996c9ce0df5edf078a489",
  "0x304e204da2c140ff2f6e48a9bc52cf12fb0882dcebc64d8969613dfb7d8d315f",
  "0x2960c64b1fe6e564c587f90647adea1912f7b1608c6fee14fe9adf972f0071d2",
  "0x37fb9a151778ece17ecd72ac4415d827b8ab20132e9fcc22d1de3aa4ba8be07e",
  "0x55914ba0b4829332934bff86608348f45c004992ce305c70c03f68ea469820a7",
  "0x2fb818f9862d211afe6cbc80e5e90196c3f54261a4b65e1cb3f8371e7ce858ce",
  "0x506a167e59fe24c00e182b9d7da8f073bc793dd16a25c86739e9e0c6265c5514",
  "0x6fcca97e752a279cf27b8ee9400c6467add76ec53b2602a656e200d60c7024e7",
  "0x4e99a6f58a3a0c66aefeb397b4920476f5706df96655ce4c2f80e6081cdf349f",
  "0x46510d640c5920c753dd2501311a21483720a2c07278faabb53c5694332ff6bf",
  "0x6f3c46b350205876aa221af749c84ced2521d31e5df469113d1bb175947f68a1",
  "0x3e8821b8993acd49aeefc6f78150f918497f959aa7b9c7a77bbc4462b7bec45d"
};

static const std::string mds_matrix_2[] = {
 "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff",
 "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe"
};

static const std::string partial_matrix_diagonal_2[] = {
 "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x24370a0683278827665277e7e31a77f004c713f70004ec0300000002fffffffd"
};


int full_rounds_3 =         8;
int half_full_rounds_3 =    4;
int partial_rounds_3 =      56;
int alpha_3 =               5;

static const std::string rounds_constants_3[] = {
  "0x3c60ddfe849bb8ae12d18fb8f33857dca05825238fd9d4fd923a4b89b973bacd",
  "0x5aa2b1ad6e856224adb2ea865a78489b69d5d55768c4c2911d863688fd31c514",
  "0x6b89e5d66f4f45b6e9d18ed2b5e4e4419585d02c73ef3cf60c8cffda676a4436",
  "0x47eaf6a6deadf10b5fee218837f2d57ea766fc39af830dd5e85a1d5d2b83265b",
  "0x2aed06206e95a0b6c4c1f3782349328fe338075716848d902f55a182d9b3d626",
  "0x6ea4c2bf0f6d43de3ad35b4605f8f3b9f489083ebc31e4a903d343b374c7971a",
  "0x661ab3707cbbe1f35e867c1331fe81cb218e466f1d82b0a8146bffc92385560c",
  "0x2282f4348b139b010caa46bc3175ec3985f170183828e2f640a07b187b41df76",
  "0x1e2d819cbdf6fd8e229c4821beff97ec7a1b9f75def80e334866775c11b75af2",
  "0x735f0821f3c2498d4c120cd2a0599b29eda5708f24a3013e5e4a92477daad087",
  "0x4e3468499b48d25d47117a4bcf6a2442faf5435ecd68f59d9b2a18b2f65f7874",
  "0x6ae1cdb077a9703e6cd0c05d5f441aa3e7df486c52a2af00ffdbe4d876f7c143",
  "0x51141232562c0445991829c8085ca587b33838e5c21288eb935808982e632f99",
  "0x36d37db4f8ab61a4c652c65b04d8d0e3a0ae904fd943ea95336deff0833fdb9c",
  "0x507ef692a19267f4e0232655a9f04c8d3e7fb02e3abfdde583e00921417f649b",
  "0x19b2775fa12bbf42042089d0cbb1e734c9d3597c1a01e7fbd88d157f82b9bab9",
  "0xa067e63a2402c3da23d471e36a4567ca68e6ad7db39dab610fe200963534d4b",
  "0x50c6bc3682f00da8d59b3619d6d85f623c7546d915380b0c5e1b14cdb5710666",
  "0xbe6696e7cb31afff8f2c317dedf063eb1643242be3b451b793c418c93ec3f09",
  "0x42ca25651e670866ed8302544713e2527d12badd22857d3b441ea3f9c3451a9a",
  "0x2a16255b854599c1d353788c8a986208723283baf26d5e536f6dbd8f307de09",
  "0x5f4abb8205e6fe75e83e303ad601164cdcd27b8e5144eec7f07ba7f3ffee20d3",
  "0x34ec914bc018eeb45b6c3f45b8750bcea32611d0beb446a8fdf5b760e1eac92e",
  "0x52abfa94c7485661857da17144522f71184ddfe8066858f9fb6401f466a8dd37",
  "0x4b183c4e8985089f7be784af07b18ba02a896cc39d6c08a197be1e10cb61f49",
  "0x5a423018b6375ea732365f5591de18df3ab90bc9ba8b5e6282d68e6deb35d027",
  "0x40cb069d0bc6f3d0b1157f1f1092bcf866ff7568cbfa386b2f434f73bd16c0e3",
  "0x10803ab3d7a7f64d2468e23da63754607ffc8aa0a9d08d25fa7a3d7c8756e122",
  "0x6a02fd24d0162319edd6011fae35fa0158539378f83490dc3dffe6c2fc7b23bd",
  "0x21e99fcbd7430d166ede715b2ec05031b2dc5f1890e21b844e3e0aa496b81fa5",
  "0x4eecdd99ddcc150e8caf59a22c458ecbc9ecf44d98f174d641064416dd5d7416",
  "0x34d901d937d0294236bbf41f0fc7d0852608ef6691eae94fba2c511a99779ee5",
  "0x2e0b0436326cf3262344a4ebc96e5b52076a0bbb4a9e9974f05ecd7e4941489a",
  "0x642e928f2eab4a42092e5b7aca17c623bdea3bbb69aee8b262a1f4c104f4d14",
  "0x63cfbec777020cf65c4f8923d2ac95b485fb811dd5a46f589e74daae1871ae6b",
  "0x67d331dcc5935cb9f552c15608ac795dcdc540ceb7e2ed93fd3276681950dffa",
  "0x30b7bf713c666bc0408aecab1284ee4286c24d8224e1a216c4a5c157e09f794d",
  "0x37c322df899a40e858829bb89dd8736d7db43bad07f9155f11b7ee8e32c80e74",
  "0x73221225f6189cf206e86077adeb3d61e7ba75cc571dd2c3e8b819a25994629",
  "0x11ee5d9aef78aa6157d571c6111476fb51fe7d920f36920bbbcae9653d42d18f",
  "0x2ada539dd7aa07f5621aea83ed0bc168f77f999bdcc7b1fb4ca673ce14c18e65",
  "0x10afac5dece001f9826d12f5576076c080ee57200ee095f0d191649985ad39e9",
  "0x5ed0df067db65a0d7f1e42758b55bbf16855724d3d3ade17e6bf382f39a7eb9c",
  "0x2de9161edcc92ddaf0925f1f15fa91d588bcacbac2cd33d49ed8439b5c1a3856",
  "0x395796c10bda9e24f377a8cb7152cd96c60ba94625483c0d6dc6473b7614f61b",
  "0x37a0d7c83bef4b3da41b6eef24999192e61d6b1fb3d098d3452df28f5d7e1697",
  "0x148600ea168e069c4cccb9623d5ed392fd6e843317ebec59eb883b13bf61948a",
  "0x49c2f2c0fe392bb6cae45f5e4e84e8114f6b0c0b4da0147b002b8e4964837d85",
  "0x5a2ae633f0931f4a3323e73f0c0444b18a31301c1ded3888561570b03fdd9a46",
  "0x36b8a69ad88009e59d04eb07247a9919fca6b6da461d7ca013139c4d5a430940",
  "0x197501b2312d20541a56768501be0cbe2def0b49b47c5d03f63aa665374fa5b7",
  "0xb0f1daac452550ef48eb8be4011b47dbaac5df5291df99f565dc89c1d67ae34",
  "0x145891040ab593dbaa1fefb3c90d26400f3f390162fe03966d13bcd472a28fa3",
  "0x16a6cb76c5c39c5861b923081b154bbfb5502f181034b6e49a4da3c66b8cd816",
  "0x5e8be8871f576bc8248d05a4eb028990d8144a6f38677b229a0a74749a2cfa0e",
  "0x2258d701d0886e25cca18608c61173b7752abbe89de33f7f66704d4aad594f8e",
  "0x4320da5c59e826281f4c6223a7779c2850eca01654790c3c0f90cec977db2706",
  "0x555e7076ae914e616d958d0060e822abb182769f5137c305b9e68075f4c9e654",
  "0x308be86a0c665bb373b6c7ce9add66f57d16c6ce21e8daccaae2b7c8589e5ac1",
  "0x28dccc9e231a1ce29b0e747f915fb894f787cb6fb6cfccedcb769eef4b13a395",
  "0x37a6a2f4c30178cbd8a13600de2f1eb4abd4141f0118c549086844fc32602098",
  "0x5869a40c93289b38791d9f4bcf4e9a12fa663543096f11bfd2fd6331dd72fa63",
  "0x5a4eee732e5ee8614b99dfc4e44b429fec363b7dd0782203a6de4e9e35fa03c6",
  "0x2dbec6a1e15ae581459dd6e55e8e1aaab1e9e5d8283bcc4efe6ed7fd68e17a8b",
  "0xc5eab12f73b840efaf40289cd21706f3f02e00e0d662f413907c2696b88a550",
  "0x6da576d94bc6d78daa25b65b37f733b7bfd0d11f70a42a2f71c3174ca3f2cfd8",
  "0x69daac00a9fa50fc36bee5e5402ad4146439eacac9d0cf28e813b4dcc47f3695",
  "0x361883d68dd996c2019fde9bb4b08495737f28f82af42868f71e0ad1d7b0aab",
  "0x6b765970caca889870cebeb6c0b0b71638d1935ec01ee2ae2902b1a6e096e692",
  "0x413eb940350f9aa9210654f8e6c8f5f3b101e13c4dfc35f12aec8b6eb2373f97",
  "0x38b90925e114782e3388037554cfb69d7693de667ea5a4f766da887bcf6254aa",
  "0x2e17224c79970a1d14626e2f87cdc936dddeaab781089f8c34bf3ac86232859",
  "0x54a5cb233b53fac73bbf627b45f4d6a2b38581b6e4cf8c80098328047df3f881",
  "0x58bec3ee8bdfb33fe4a253edcf43ffbaac51d49285384caf229b985bc74093e",
  "0x3dd4c1e1728bcd5834c4bfb522e462dcdada1706b49bf947c50a8c75718e65d5",
  "0x425336cc06a888397f93a3f70c7580fbb297f1b7c6f721905629f49c4e845b7",
  "0x2540fb39809b2c3ef8298779a93c276ca73b850fd6d6168b54ff159b0c599f77",
  "0x52d1c572c19168dcb8fc48ffcc5602e005213548f46e3c9efef7dbada360c4f5",
  "0x3c680d4e15bc10c878f559cd9e3aab74fecdf7d55b1167e6ccf8bc5adbde182d",
  "0x57d80bf47d3acd9990b6f52bc509d197769168405fbe4987a48948cc89ff5510"
};

static const std::string mds_matrix_3[] = {
 "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff",
 "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff",
 "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe"
};

static const std::string partial_matrix_diagonal_3[] = {
 "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x24370a0683278827665277e7e31a77f004c713f70004ec0300000002fffffffd"
};


int full_rounds_4 =         8;
int half_full_rounds_4 =    4;
int partial_rounds_4 =      56;
int alpha_4 =               5;

static const std::string rounds_constants_4[] = {
  "0x6828c75269f361bd131361fc11a531a5aa06e039f2a66dc450230dea8747d23",
  "0x59bbcf17856e2dbcfab7b91d15f0af783d0032b4e142199f10483c4fa999c9f6",
  "0x6cddadf411dbd9936e5263366a37f27d4b72d1adbcc359c55bf4a0f28f8a6fd3",
  "0x711799af3e51f52bb87ffa8fce3fa7628d1eb63204d478bb594ad8a12bf9c9bd",
  "0x6841e7c79e3ab5dd4d2c2fd70faa063fb8e12a2d95c2abb7b8ab644502dac7cd",
  "0x39bcdbcbeba60f5d3c1632ec5d87e0dcbf0ba42dd73468cd9f1299ab390187a",
  "0x28d6378f2cb3ee3094859364e660deb810c46c9d0c6912da7875798ce7875807",
  "0x53edd8b853b62b011e6c7bee3a814dc7995f9477cc199cd1868b069dfe4f19c1",
  "0x13a22d0e936ab2515c063324c79f2c62758de501d0bd2f04b6762f03c1b42141",
  "0x2880f2d8a289153f6f65fd38780ae8df29df29b7992d658ee5920d1de6d4ecd4",
  "0x832047747753014d72d79ea192c3b5972e46929617070ea1c5d3c64fce50a1e",
  "0x63f20711efd10c84e3d788820cf24c22806d97da1303ca41393048fe7cb29439",
  "0xed873620186d16033055027f78f601e8eb9022472642985f30664e81a233a38",
  "0x8becf5826cec1343583f2f5b7fdb5b6cea0b44c7649ad31b211d663d75f33db",
  "0x2f449d84bb22abb402e19acc42eb973383f8c4145f6b1352d2aaee14efe4320",
  "0x70356fd068d5afab70af95c2844491579696923beb6074afd33871d278acacb3",
  "0x72f2e689cb5fd13f7bda98b15e4e3da81a9382f81d12f2267a46fada52cf7cdd",
  "0x1d8e18f62c2a3c3f8ffa0e2ba5ee5633c8ae05a0931d3ca1cc565c492f3ba20",
  "0x534af4c40d6fb0540fa2fba06260d7c9422b61b44d8281f825e4458d4d7e56ff",
  "0xb2babc9751ce5a6c6274d62ee1009f466115f5a4e74c7267c0f1173cb548e9d",
  "0x5037fb5b51b0814e1c527e1586379f6495937320bea412aedb27e5d1f2188f60",
  "0x38a6a205288851d4ae3a220024fefa7c1dfd9dbb46a37a581ba9bb9c379d8595",
  "0x296a5c9789457c7180b26f87ccd9416eb20a5e897e3df6221cadac113247de2a",
  "0x408179d38112eee6677054131757995e00ba6f918e81c61a2fcf92f2c4d3bd74",
  "0x1521565b5172bfca94970afb787f01a93500a9c7cde9a744a3ea3fb209bfa102",
  "0x439fc4888740c84a311428a6c38ee7d99493adb6e354a51c6dc8369e29573dd",
  "0x1fe8c0af3e11eea0bacc5d55b14cc455462c1daec9f56ab4d4aeebcc963f9809",
  "0x56a54a7770c0e76c2ff7753b5f02cf32523382074f54ca2367ba8be184309065",
  "0x33d79bb36dd3e831afdcd7e9ba195dbc98b6d588fa45f040ee1376100a8fc416",
  "0x14687a8d4a8e4aca2c08ea62e4b7148d8cd1962eb2f8e57d164c2c5e6d2df26f",
  "0x4328381aad81184303749b81cdfe00ab68da967a1b22f1be44b257a2ad1a8f24",
  "0x69eed8969a93de9d736bf93f00fab1943cc5cc452e857cf98f92875610ef48d8",
  "0x6b62ba91c8d9546e5404fc811a0f601735f02716b5af66ccd0e64980455ad6d",
  "0x1801439530c92b72db3dc3b9e4b81378d26598fceb6da9a1214a890e95e8744c",
  "0x353dd7d95055e05620827de44de000f490897a1648c7912a101587ed88e63ee8",
  "0x18f8e850eea578ea707e161d697058094df742aae743c542972f5f2e3e585b7f",
  "0x2d00f3443a8ec8b28a5c6f500210baaf77db6fe8e5b3913cfa60c3587813916b",
  "0x85f00cbedc42717805b8831e15d7c52ac711d67be66ece633bcdcdbbeda45a5",
  "0x6ef1eb35e2bb64df2a7ee8ac9fa1767d02e878e02b37193af40b88899cec8e73",
  "0x3f0236ba2b7ad21b5d4717902288e629a0c3b0f27a01e9a6a14992591e2a5d5b",
  "0x5bb5ab9dcd34ab910d6a965b04d94cc86fd920f91bba54ea6227351f3a41ee6",
  "0x494c0abcb89bb60262dd1e9430df4ce7192b874e9d88b92b145826bbe806b46a",
  "0x67266ca58cd09eaa47c8b0389cc3476625637ad80874361a26339160d0fb8900",
  "0x17e486461ef1215aef30524ca5de08cba584d5d6f9f5bb2acc18911d96b37f7b",
  "0x13fd0f417f847c1d23510d924c5ff7bac8b27ad7cd5902b5b9a149b027e9f312",
  "0x6711583231151c9cd9b5f266ceb3d6557dd197e7d746d79686cceab1c59c59e3",
  "0x6b73f0ac429985aa4afa6811776e79f73feb5a2f0ef4410b9a2e983f897301e6",
  "0x40248ef064340e8de829c21046f1da4e7c758c3299a12aad8e8e9123b027eeab",
  "0x55a6390d1fa741c4f22d83bd9722a055044f7401de499f72131b94963b2944cd",
  "0x20e91727640e13341316a7698d05c5c82129af1b8d1134488ef18feb31884d8d",
  "0x10a1657433058b173f971a7c7128bb2cf7ec5b5ff0927d62392c4f9bbff9478",
  "0x212e1c5965d0fb2ca4a78c503e332732994618d8feb7bd8747b7633c838a4a6a",
  "0x6909f322590e793501cb29b01e374579e01e8fca504561600f04a2e02c88f7ad",
  "0x10145bd7dc4816f5a688f3212cb3d5770dcca4dba426aae334a0de00db4fd354",
  "0x171b2d14a25327bae7d8aae3cd08952ae665d8c9f9fd46e53693f8882c865ac3",
  "0x1fafd577daebfe80d7a96a8b9ba64bd086ef863125c4cf80e47235881e34f4c2",
  "0x57d76ad29bb6a65ac22952bd52d79de350f10283aef23128f07d0c2d121c2ca6",
  "0x32f8252c26012e17888627c9f65a1f542683530f2f98b6c7c58ec8b3468edd4a",
  "0x3d9a53e8e33f1b70dc832fef4cff32a0f2103552847891aaca9dfd6bbe3baf57",
  "0x14ebff485f441ec7b7a290296f429073d01b22dee6384eb170a5e8d0b155dcf0",
  "0x388573860269783be65570f4811603a39199751f0b50321f8fb98979715b4192",
  "0x6fe14d07d528c622f0618157a0d88e4189c3387bab98e4912f922c4c3a01a16a",
  "0x2665a845c424cec1624894468f4bb4397628506ea2e5459e305757d1c1b1707b",
  "0x4e984d2d7d2504ebd249fa106371fc40c843b26c6911b3b955b63effc1f25881",
  "0x6847f7699ec3d5e45a2ccbcb538297c7b6920c4b32aa6c2d846f7489aa793a61",
  "0x705eb993b54d0ac79e40daddec3bc9496108991adc9b0973a040a9e8274bdc0",
  "0x17dd30117a74ba3dd0fe9af28a57dcdc2355d754060138f3187378ee95a8b063",
  "0xa3dafeb0bc0f08fae704f13779f2c0d5793c4b069042f16790576307e728513",
  "0x68367db80df7e77e2cfb239f4381acbcc3ff596a904bbfe98780ce81577083bd",
  "0x3fe1a78a73624799bd870bd0112110f6a2cc6c20c90d8007c22a74db6a11f09",
  "0x5bf919c6a21a2fb4214ba8abfa12275b93a479efa2a702b29093dfd54b07faa",
  "0x5f8fd162106b637984b88ada43f84d2eb94ed76086937d500371a75d649cd434",
  "0x1667a3861748df53cb0ca77722764c6a099f646c85c606f64c8ceab76387e32f",
  "0x1831bce8be74711cf1a4160c216588b3faff0f5c6d05bd0c7eac694bf9d969c0",
  "0x4c4cb92cbef8bddea785743eca3298bb585105d5112593beff4fba92fd7bed1a",
  "0x4b2deda08b7e7f95287dd76fb62aed3ad5622ab2b43dee875eab90b91fea2e87",
  "0x3520b2b6587a595fb8334111942bb19cea63e9f85bf96dbba8a338c33445cf41",
  "0x2a5a5c461243cc94f85f1845a8ae8c177e12a679c545bc0ee707b60a49cbf6e3",
  "0x261f5bec7508e5bf1ed0867e5c44886a80b76be9346260b6366f8d8ba3bfa915",
  "0x382a28c54a62acf9b843e7332a3ed4c42250b9af7268445d9551cc890afeb21f",
  "0x4c5496a3f326c5755dc2a5db6ae6d028ae5dfa1fbe4644f01283bf7eea6b8b3c",
  "0xed2db0b92fafa256a844ae043b30eecbe14477ab500c592d9580e85ad0aa3",
  "0x551f1fab1cbed0ee0bea39363da5ac4660447bc85cc5b06bb1efba2069dc5bb6",
  "0xb6710fd061ac48bafa7f6ce4ea4ea79e15af84f3fc77b387445f16a9b000660",
  "0x189427b4b84fb298982dbe3df86868465b87f29b486dd03cd90155e09d4b708d",
  "0x72ce52884fbb4674865ee59beffe8318a32a68c44b3006648e8bc61e1e6937cd",
  "0x62157bd11d5acd369043ca530219f57b24385ebd20a1aa794beef2935e213c20",
  "0x73aadf8e104953c1b24700e436e722a24e286fdf5305dfb28f9f6d0488f88f4f"
};

static const std::string mds_matrix_4[] = {
 "0x3c5bbb602fec8d96ffdec7d7cfd6c7e55d4bcbf10008340500000004fffffffb", "0x54806cb9dcb19306996b17c7bc9317dab5d083eb000b7c0700000006fffffff9", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x24370a0683278827665277e7e31a77f004c713f70004ec0300000002fffffffd",
 "0x304962b3598a0adf33189fdfd9789feab1096ff40006900400000003fffffffc", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff",
 "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x24370a0683278827665277e7e31a77f004c713f70004ec0300000002fffffffd", "0x3c5bbb602fec8d96ffdec7d7cfd6c7e55d4bcbf10008340500000004fffffffb", "0x54806cb9dcb19306996b17c7bc9317dab5d083eb000b7c0700000006fffffff9",
 "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x304962b3598a0adf33189fdfd9789feab1096ff40006900400000003fffffffc", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa"
};

static const std::string partial_matrix_diagonal_4[] = {
 "0x54a08f7bd25ca481c4045932e0c9a66f2cf18484285a4ea251d0180d50e8dd43", "0x5f75759f1c6e997d7a57ab6de32e2a71fc383dc1edbb2a0c27da3197a695f197", "0x4d0a51d5147b02542676c5df940ce386efbb1cc5609459fdd6bc86c537c82e48", "0x4430c8f2069b79f87102441529591ac452c249fbde7211548a970a6c8694ac37"
};


int full_rounds_8 =         8;
int half_full_rounds_8 =    4;
int partial_rounds_8 =      57;
int alpha_8 =               5;

static const std::string rounds_constants_8[] = {
  "0x2a4d136165ee65a0baa117569e768d0d66d9359e9e1a73273fa3f4a480edf139",
  "0x718295136c5d6c0e789424862339ed9c07ed6fc036ac6bcd58d45e90a5e9ad8f",
  "0x460ba4aa2c1615b22f5116f6b3eaf693fb14a9af4516cd463cdc1efd0dfe57c5",
  "0x650c6753e881657e059abeb958d46b799d67d9f6bd0e460f79c884cf55c1350a",
  "0x3c9c0ee25983ff77be38d3c0f5c6a942ba5c6143de896415caa1f0dc689444dd",
  "0x638b639f21df4ed0349fafe92d42e1c39ca53b7bacb79a27f43f92381d7a1810",
  "0x35e0336204972bb75fc36e857a9c2e4f2b0ae2daae4b08856840b5972e1019ae",
  "0x387f47d864348c2d93305eac96048f32a54ac106b5bdfb50e40c4827855130db",
  "0x4637cd12d4417823c7100612e12e52331a0bae2b1cfff722202515af54387990",
  "0x40d7e4b09b3231374b32afaedf494085cd6dd86415ad54ebe590fa8e8f0706c5",
  "0x6cb4c8d66d9d3a366dc1534c84f0477d3f995cd349d5a76e29c8b58fd7cfac3a",
  "0x179d8de35d47817f950495ef70a82fc1214ec5dcbfadcbdd4f043c2fc2d6dbe",
  "0x25fc0110f8c9fc2d95adf9b3a5e1ab871f5ac14a90d6f9e4278619b56a155d5a",
  "0x16459962a443e2ab813c79d260f3d0d0f08fdb55bb1dbd9332c1cb3b348870c4",
  "0x2a2010991085aa472455cc0aa0a1bd6ef1c41c5071f047512b2555bbcbfde2b1",
  "0x4d28bdb3cf054bc1904918c6e51ffafe0610b29282ed6651b9e4705355a65d14",
  "0x57a2f4e8459f05a9347c0295bafd21ccb983e74197241312315b2b3d4829f275",
  "0x32b16b1266b3e0bb9bd35a9f76f2ec57d776239530a6ee1fe7702395e313f23c",
  "0x6d61d8b2598477cba75d2304e71bcc347319d55e9c1be0f6dea0fb83db6e5cf3",
  "0x1e14aee597fa8b8fed387499664228b1837d473c63b5953141be7b09ca51e09c",
  "0x5482215f910e3519c84a27847bad6158fa22cb84d90ef47c47f1a7abc0247120",
  "0x6c4b0a8f7f4692380d1e684bb37dbcfe7bdd5f300e8b28ad2edf101d62f5c066",
  "0x345dae323a3818e3c8c84500b45e7cfb85d9ebe1537296f1298267ed7bc61a71",
  "0x5316d5c9bdbfa22508fdd72a4f8742beada0c0819431581cd069c71cd364620a",
  "0x5d1586f5c7f3683a3c8dd439baf43ffd4c0454034c29af22ac8c09cbab6f4908",
  "0x2f86b9af13a36383bf24f0e747fe288d70629eb707ad24d712345e1c7f743f70",
  "0x5cee917156827f3aeaf5f4e3f0db67768105b8707eb6b16bf385349f19acd8c4",
  "0x63bb77264854318a088eeed3778f638cd5d2c4cd2f05c272cd271684bfd9f679",
  "0x70145f28c495394e929004bc6e07929fbb73036c7946d66537a82e8613e4acd0",
  "0x28924a5356af3d9790f625b8dd25f9c6fc6f51246ea7a6d17aaf52560f5c9111",
  "0x540de6d96013ad1c4e1bbb2f798599265f4b84827fd26b871d1713f801179296",
  "0x4233358d44308e21e42cac7f638a87bf604a405e8bc74e37547d5ffd7a86e67",
  "0x125ca2f323ae44f5150cbd04bbe23448f333eb892c45c2236e1282a8bc54c922",
  "0x46fd588c869c0f3b8feef095c5afa509c5b3746ce106cbe16cebed65aa9cc168",
  "0x723c19bbdaa3f870de40d0172d1599399abd8d8484089fed0d529e8a32fe8736",
  "0x14a94e7438ee80819a6a13747fabdc5d6f0c4fe8ce282e5f28b10192a7fab08c",
  "0x5b1452ec89aa1a2e0c76974ffb9cc124313502f270abcb8eef06e62aa1a2611d",
  "0x1cf351c5746abaa736d3e44c54ea0e2f2a7c3d522056564f7270b06f48004d0a",
  "0x16942cdfc9abc0de484d61024ab57b5fd7036331b046ecc21e341d4d6205e460",
  "0x51e7cbfa3f1f08722febdd01fdfdcdfbea3a7973330b5fe14faad7032d4ff983",
  "0x1435122c0e36bdfac8c1aaddc69f16861db1e000876ad2943ad74aa62875ecbe",
  "0x44b94a70e38ed73e2c386fefb1ab4e58b9805da9a4621f90517ef95d83bb1a53",
  "0x980cc4da66dd48249c79796d2ae1034a344beb012033fca0b8458ac0285c6d6",
  "0xb456ba54702fa9125d78f3582718f65958071e42dc5d3396aacec10d4818bf0",
  "0x1a734cf8d6cfb4d7291074f47425e87b775566f20e710d1c16be0fee43557467",
  "0x37635070f2986f07988bd5b62cc9201c6c146250905083c792c13dd54fe7f2f5",
  "0x3f0b84a427276427cb6ef48b9f99b56dde5e4073d0af8e8ed9ab632a5d3faf1c",
  "0x40028efffeb99080b80d881d86144205aa926f15635a56b0e72517baf85cedce",
  "0x42b98721b827f50a711428bbb6a7801c6150aabae9dffa396cfa1ca32cc8502e",
  "0xb93eb1db6351c4bf2d3489e633dc8d62b3f860fab0eea014dac24197fad314d",
  "0x588e2fd949c7d1d4561dc00319c1f6945ea10cd12274b1b24906752a1c975e60",
  "0xa43172d6486d4239750907b6efc4c2c2440257c1a7b386ab6770b9f799894ed",
  "0x3958de92583bfadc573bc624e512ccd50be3877c68e29ff63bfbe63feb1c99c6",
  "0xd1866b8faa62cf18b63a67f45c17308c5b9d3af9c7ea844ac0f7361980991cf",
  "0x3a6057b42159af16d9b1db0d83bf48d94457eb9b831bf7eb62556d2bd2af2686",
  "0x271756b452b02b72fdd4287525ffc9a7a57deddedb7006a254b3d9df21afe726",
  "0xf02b07ddde0e45125274a6218d0e38eeb5421a55bab44c67d8ab7764b490ba8",
  "0x32fcfd6e27e13bd455b9b01f0a0915da694a083425b1f01f3fecc914faec7e82",
  "0x200ac0db3f1a9a524534ac99ff681be7518a218a6e583ce8a01983148293014d",
  "0x15cfcdd434a6e05c5241ecd07691303f8b8cc6688f071d9fb4ecc0c2d9b78fc",
  "0x1e61ef8c615b67cff39e7f322228411b05fa58703a7e12d497460a977e3bbca2",
  "0x14b331c0821e05109e1afba13e70a60f0426a64f66e50f116fee359624aede62",
  "0x2a7e73896fbf780dd4774235b0485af06a72b20381dbd6238c630fb1f5abd4e8",
  "0xa845f036e891c2d70343e05728ae6a9856764e123c7bd3fc384757ffaa61ef6",
  "0x2c51c789acb0997c38412e9c75fb43ce77d7ea3357cb26580e7fa85c582c6a6a",
  "0x57dd41659bdc02f8d1bfdf45d101abd4f7b8418d40f3b35239ed78dd0b860e0b",
  "0x9def38354237d0116d7297e3285c44f8803859d25f9b8837eadb152ca447456",
  "0x12dc29e57d910ae8c83d2a671dea0be88efe73bbb0f464dc6a63d6ce9ad8e322",
  "0x2f3c87ede1b1a18708ff3510e0a327d461ac1046015333ae1a046a1376168b1a",
  "0x3fc07ee185079afa982236117c31bf31b1f4a423df099ec5a1b7ac837cb343f9",
  "0x7362025b2571e7efe2ba1cad21367f41fdae764fdf552f9a6dddc8edfb421e82",
  "0xf29d75edc6ea6fb456af77b8b467b2143d3217186dacb6904e9abd3ff475bf9",
  "0x888f114f18bfc726b44f6c1f47cc12d65906560dab1aa2c419013117176814e",
  "0x5e05a28a5b7d1812732e772b59efcb71d47f694f1e7e1e33db6d12c79ac48c58",
  "0x68d657c5d918747ac940fc9e4a2d6aee080bb51abfebd20d915df62c41dd8d3c",
  "0x4ae8a234e24a9b43ed97824824f4952b73f6fab21643fd8281de516a30a9a0ab",
  "0x8295720f073b430c19e9fd7de6f820a1ec7922c4d8db8bfa9af15c076a19c71",
  "0x2dbc5c1b7527e9e57a14b25a5b43d8d119e6d28312260220b89c384072c05868",
  "0x3a0c8f567020a4e2aa47cd066345f52b96e5c64647157c33a151e37b49c30209",
  "0x6f08d3c55da0a711b44fc5fa12a1b36ece9cf83f9c505bfc7b265dcff94d993a",
  "0x6cb9de947dddce257af218e0d690dbe2039aa2a18dece09743fa0095496917b2",
  "0x169a1f628671c1e934a5bc8df1f670de4fbccbe830fbc470915c884346a5dc84",
  "0xc86a5ef990389c9ce83c844f8607e3525ee20091c531675ad0e750c01685dc7",
  "0x580b18984cccacbe1aff47b6fe23fbd5057a1bedc7e4f0699b95e27e28ff66f3",
  "0x2c765660d35fb419fc64a2f2caa38a51c6a9fcb22c5e14db3e4109cbaaabdb15",
  "0x219b2853459ef143516ac5b4373d1069b3673698e0a8b5a440c678a3543ebb0",
  "0x6bca3c39d9c68380de7288070ea3fca94c56860cb1cf1f37b3727c929329af3",
  "0x6657d7280914245f81db422e02e89efe62c32a2fabdc05dc1af5002bec752a92",
  "0x5335aa3b62af3ce434f08a92284a1b9257812848f1ce29fa9c99129e566b24f5",
  "0x4d9f091d7c4afc510433b7d3a5f09a3792b4f57e113bc0f74a314f37e3dd324a",
  "0x2198468a71dd637f6f16c7cc598eedbbe46c6c0b2b42884f695ab2054a549e8",
  "0x2142163a50fbe085aaff91893d912170e760d0abbadf27ea3afa678facadeb11",
  "0x1f014ecfc59aa626bfbe9ee440d36241a5a829d9244e5c330d7e02052c204da",
  "0x2ef652a5065bcf6761a211bd3254eaf86fbfa27f40b2c5da2e635c6abed2ca3b",
  "0x174fcfb46d5ee5e5d205f4906893165eb0a41ff15c3176be44cb7592e46087e3",
  "0x2d80dc1f45e18378d6e90c2bb7fad3b7c2d57d8d90eff85777495331344a7f34",
  "0x5ec066c09f82a1286b62092506b1550c5c895c7079050d5f3934682fc4ec8cf9",
  "0x736ebc1cf5d6059b2afcb1362b305983d11bb8d8de5a5a0df56a38e424890677",
  "0x51627b25f3d35cd54344e823b7b5c296f41af6fcdf32511b4e74d1954e20a16c",
  "0x17bfe80f3ed23d16b6f80aebac599d72c04a18eb69d582543fa05d15e3f2863f",
  "0x287cc711e5deb5d854e23b299814cbc89e722c22ea3371a63629a3c5d63e1bab",
  "0x474103b19297acd3f1ac2e11a04bd6b7e1926a4e70ecdb90092cc29776f8b4ab",
  "0x6eed7827633ddd4200927fc72db6bea2f025de2525c04a0ecd1cf50a3c65024f",
  "0x19e8f3a1eae343de50ca47ae815b418cb0a12fb71389be472d3e98aea84c40",
  "0x6b6b42bcf03a06607b249adb0e0c76f6fe1c6a6b96524a54ef5a0caacc222632",
  "0x31b51e1ed213b6aaa0e59ff0e88e0a89ee20d06110dd679964fa50723d15c9a7",
  "0x69d54d5d3398e93d4a661668817a67a2c554445fbd7442c82457324232e8389f",
  "0x4aa9cbadc35e6141c988c1498caa948d5a74283bf69909ac299cfeb8835bfa1f",
  "0x183e67b528486ad2a4d017768f03a66dcb325911d0fc461fd88140e282db28bf",
  "0x384d6ff785b913475e4659ef70981fc56a626baea2e0faa64d3a2f57dbd0ba70",
  "0x3436d0aba8b03fb1cb01a52af5daf330e63ac40f883f6ed8a98eb74f7c8c7b6c",
  "0x254f75720e27fe8f8c17ddf68dca7b7db213ab90280a6c7c9c6f5a04bb27b441",
  "0x4967d2be062064b51037326811284f0b0f28d4a4c5754860b1c34a6195334dd7",
  "0x242358d42940f5abb4d6a5b9f22f6ce026925b1aa8a1313dd08c1169a576259f",
  "0x6d4e4c9aaa8665a51dc664cd1260ea5d0c44bf63f0456594a97ba1480b3d311b",
  "0x64966ad62f4cf739fd129e1c5808ae2e2df5b2e570a20de7f511ae6eb25aebbd",
  "0x2abdef8a9705c76705226d98a9c65c45bb2fddc21a25bab2ba3e93fc6c9821cc",
  "0x24a631d4359502b685351e4d7632e26d5da397bcf201bdc1ce54def7746e30e5",
  "0x57aef5d30228d237b691f5f6af3afd27e8bdb56a6bcd067f685a4b356633a264",
  "0x4d8f3ca8935856c63c992ef42244975d411a0b4eee4db79b4bf55c31eb8d3991",
  "0x4eb89667d482f8d96fe7e3a237fa6fea266739b504d47c9347904cb8472359e"
};

static const std::string mds_matrix_8[] = {
 "0x4c9cf6d363b9de5cc83b7a7960bb7c566d9f3df00120c0b0000000afffffff5", "0x351332208fc5a8c4ff9c57876f8457b017e363d300189c0f0000000efffffff1", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa", "0x3c5bbb602fec8d96ffdec7d7cfd6c7e55d4bcbf10008340500000004fffffffb", "0x54806cb9dcb19306996b17c7bc9317dab5d083eb000b7c0700000006fffffff9", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x24370a0683278827665277e7e31a77f004c713f70004ec0300000002fffffffd",
 "0x6092c566b31415be66313fbfb2f13fd56212dfe8000d200800000007fffffff8", "0x1cee80c6e300a3556610079782c807babf5eabd90015540d0000000cfffffff3", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x304962b3598a0adf33189fdfd9789feab1096ff40006900400000003fffffffc", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff",
 "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa", "0x4c9cf6d363b9de5cc83b7a7960bb7c566d9f3df00120c0b0000000afffffff5", "0x351332208fc5a8c4ff9c57876f8457b017e363d300189c0f0000000efffffff1", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x24370a0683278827665277e7e31a77f004c713f70004ec0300000002fffffffd", "0x3c5bbb602fec8d96ffdec7d7cfd6c7e55d4bcbf10008340500000004fffffffb", "0x54806cb9dcb19306996b17c7bc9317dab5d083eb000b7c0700000006fffffff9",
 "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x6092c566b31415be66313fbfb2f13fd56212dfe8000d200800000007fffffff8", "0x1cee80c6e300a3556610079782c807babf5eabd90015540d0000000cfffffff3", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x304962b3598a0adf33189fdfd9789feab1096ff40006900400000003fffffffc", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa",
 "0x3c5bbb602fec8d96ffdec7d7cfd6c7e55d4bcbf10008340500000004fffffffb", "0x54806cb9dcb19306996b17c7bc9317dab5d083eb000b7c0700000006fffffff9", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x24370a0683278827665277e7e31a77f004c713f70004ec0300000002fffffffd", "0x4c9cf6d363b9de5cc83b7a7960bb7c566d9f3df00120c0b0000000afffffff5", "0x351332208fc5a8c4ff9c57876f8457b017e363d300189c0f0000000efffffff1", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa",
 "0x304962b3598a0adf33189fdfd9789feab1096ff40006900400000003fffffffc", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x6092c566b31415be66313fbfb2f13fd56212dfe8000d200800000007fffffff8", "0x1cee80c6e300a3556610079782c807babf5eabd90015540d0000000cfffffff3", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe",
 "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x24370a0683278827665277e7e31a77f004c713f70004ec0300000002fffffffd", "0x3c5bbb602fec8d96ffdec7d7cfd6c7e55d4bcbf10008340500000004fffffffb", "0x54806cb9dcb19306996b17c7bc9317dab5d083eb000b7c0700000006fffffff9", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa", "0x4c9cf6d363b9de5cc83b7a7960bb7c566d9f3df00120c0b0000000afffffff5", "0x351332208fc5a8c4ff9c57876f8457b017e363d300189c0f0000000efffffff1",
 "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0xc1258acd66282b7ccc627f7f65e27faac425bfd0001a40100000000ffffffff", "0x304962b3598a0adf33189fdfd9789feab1096ff40006900400000003fffffffc", "0x486e140d064f104ecca4efcfc634efe0098e27ee0009d80600000005fffffffa", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x1824b159acc5056f998c4fefecbc4ff55884b7fa0003480200000001fffffffe", "0x6092c566b31415be66313fbfb2f13fd56212dfe8000d200800000007fffffff8", "0x1cee80c6e300a3556610079782c807babf5eabd90015540d0000000cfffffff3"
};

static const std::string partial_matrix_diagonal_8[] = {
 "0x48ddceaa6d982d4b03f97047ea0d861468074657bf1fff872d8f242e3b422dc9", "0x551b45decf49035e1ccee5edae7dfbef4e0861e3e021f512802010ea359f282f", "0x1dabaf8a09c6a01622ca4ab19e8645ccae350536f0e18acd71b3bca35d540dac", "0x67e56c2d2f204a320edc13bbdd49cbd65da55d6528516d284646e221388e0a7d", "0x4079e7e367dc7ca570e60c4c41bd91a89876ddeaaf863c42aabe5ac57e20a7a2", "0x34e2ec255f101195bee8504a2c9f80e8c56566ad93478dd1e168e7ef1f87d9e0", "0x5a573b584d2986960e52bf96974ad9d2b2776dbf1544ca5e3785774f5e429f37", "0x1bf81281e6716e45904701690f3617cf8d3ad71284e0728885a2bafa958d9fb5"
};


int full_rounds_12 =         0;
int half_full_rounds_12 =    0;
int partial_rounds_12 =      0;
int alpha_12 =               0;
static const std::string rounds_constants_12[] = {};
static const std::string mds_matrix_12[]      = {};
static const std::string partial_matrix_diagonal_12[]  = {};

static const std::string partial_matrix_diagonal_m1_12[]  = {};


int full_rounds_16 =         0;
int half_full_rounds_16 =    0;
int partial_rounds_16 =      0;
int alpha_16 =               0;
static const std::string rounds_constants_16[] = {};
static const std::string mds_matrix_16[]      = {};
static const std::string partial_matrix_diagonal_16[]  = {};

static const std::string partial_matrix_diagonal_m1_16[]  = {};


int full_rounds_20 =         0;
int half_full_rounds_20 =    0;
int partial_rounds_20 =      0;
int alpha_20 =               0;
static const std::string rounds_constants_20[] = {};
static const std::string mds_matrix_20[]      = {};
static const std::string partial_matrix_diagonal_20[]  = {};

static const std::string partial_matrix_diagonal_m1_20[]  = {};


int full_rounds_24 =         0;
int half_full_rounds_24 =    0;
int partial_rounds_24 =      0;
int alpha_24 =               0;
static const std::string rounds_constants_24[] = {};
static const std::string mds_matrix_24[]      = {};
static const std::string partial_matrix_diagonal_24[]  = {};

static const std::string partial_matrix_diagonal_m1_24[]  = {};


}   // namespace poseidon2_constants_bls12_381 {
#endif
