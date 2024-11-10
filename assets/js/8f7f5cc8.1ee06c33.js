"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7983],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>h});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),g=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=g(a),d=t,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(h,l(l({ref:n},p),{},{components:a})):r.createElement(h,l({ref:n},p))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:t,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6208:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var r=a(8168),t=(a(6540),a(5680));a(1873);const i={},l="Merkle Tree API Documentation (Golang)",o={unversionedId:"icicle/golang-bindings/merkle",id:"icicle/golang-bindings/merkle",title:"Merkle Tree API Documentation (Golang)",description:"This is the Golang version of the Merkle Tree API Documentation (C++ documentation). It mirrors the structure and functionality of the C++ version, providing equivalent APIs in Golang.",source:"@site/docs/icicle/golang-bindings/merkle.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/merkle",permalink:"/icicle/golang-bindings/merkle",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/merkle.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1731255581,formattedLastUpdatedAt:"11/10/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ICICLE Hashing in Golang",permalink:"/icicle/golang-bindings/hash"},next:{title:"Rust bindings",permalink:"/icicle/rust-bindings"}},s={},g=[{value:"Tree Structure and Configuration in Golang",id:"tree-structure-and-configuration-in-golang",level:2},{value:"Defining a Merkle Tree",id:"defining-a-merkle-tree",level:3},{value:"Building the Tree",id:"building-the-tree",level:3},{value:"Tree Examples in Golang",id:"tree-examples-in-golang",level:2},{value:"Example A: Binary Tree",id:"example-a-binary-tree",level:3},{value:"Example B: Tree with Arity 4",id:"example-b-tree-with-arity-4",level:3},{value:"Padding",id:"padding",level:2},{value:"Root as Commitment",id:"root-as-commitment",level:2},{value:"Generating Merkle Proofs",id:"generating-merkle-proofs",level:2},{value:"Example: Generating a Proof",id:"example-generating-a-proof",level:3},{value:"Verifying Merkle Proofs",id:"verifying-merkle-proofs",level:2},{value:"Example: Verifying a Proof",id:"example-verifying-a-proof",level:3},{value:"Pruned vs. Full Merkle-paths",id:"pruned-vs-full-merkle-paths",level:2},{value:"Handling Partial Tree Storage",id:"handling-partial-tree-storage",level:2}],p={toc:g},m="wrapper";function c(e){let{components:n,...i}=e;return(0,t.yg)(m,(0,r.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"merkle-tree-api-documentation-golang"},"Merkle Tree API Documentation (Golang)"),(0,t.yg)("p",null,"This is the Golang version of the ",(0,t.yg)("strong",{parentName:"p"},"Merkle Tree API Documentation")," (",(0,t.yg)("a",{parentName:"p",href:"/icicle/primitives/merkle"},"C++ documentation"),"). It mirrors the structure and functionality of the C++ version, providing equivalent APIs in Golang.\nFor more detailed explanations, refer to the ",(0,t.yg)("a",{parentName:"p",href:"/icicle/primitives/merkle"},"C++ documentation"),"."),(0,t.yg)("p",null,"To see a complete implementation, visit the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/examples/rust/hash-and-merkle"},"Hash and Merkle example")," for a full example."),(0,t.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"Using the Hash package requires ",(0,t.yg)("inlineCode",{parentName:"p"},"go")," version 1.22"))),(0,t.yg)("h2",{id:"tree-structure-and-configuration-in-golang"},"Tree Structure and Configuration in Golang"),(0,t.yg)("h3",{id:"defining-a-merkle-tree"},"Defining a Merkle Tree"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"/// * `layerHashers` - A vector of hash objects representing the hashers of each layer.\n/// * `leafElementSize` - Size of each leaf element.\n/// * `outputStoreMinLayer` - Minimum layer at which the output is stored.\n///\n/// # Returns a new `MerkleTree` instance or EIcicleError.\nfunc CreateMerkleTree(\n  layerHashers []hash.Hasher,\n  leafElementSize,\n  outputStoreMinLayer uint64,\n) (MerkleTree, runtime.EIcicleError)\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"outputStoreMinLayer")," parameter defines the lowest layer that will be stored in memory. Layers below this value will not be stored, saving memory at the cost of additional computation when proofs are generated."),(0,t.yg)("h3",{id:"building-the-tree"},"Building the Tree"),(0,t.yg)("p",null,"The Merkle tree can be constructed from input data of any type, allowing flexibility in its usage. The size of the input must align with the tree structure defined by the hash layers and leaf size. If the input size does not match the expected size, padding may be applied."),(0,t.yg)("p",null,"Refer to the ",(0,t.yg)("a",{parentName:"p",href:"#padding"},"Padding Section")," for more details on how mismatched input sizes are handled."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"/// * `mt` - The merkle tree object to build\n/// * `leaves` - A slice of leaves (input data).\n/// * `config` - Configuration for the Merkle tree.\n///\n/// # Returns a result indicating success or failure.\nfunc BuildMerkleTree[T any](\n  mt *MerkleTree,\n  leaves core.HostOrDeviceSlice,\n  cfg core.MerkleTreeConfig,\n) runtime.EIcicleError\n")),(0,t.yg)("h2",{id:"tree-examples-in-golang"},"Tree Examples in Golang"),(0,t.yg)("h3",{id:"example-a-binary-tree"},"Example A: Binary Tree"),(0,t.yg)("p",null,"A binary tree with ",(0,t.yg)("strong",{parentName:"p"},"5 layers"),", using ",(0,t.yg)("strong",{parentName:"p"},"Keccak-256"),":"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Merkle Tree Diagram",src:a(2626).A,width:"1539",height:"968"})),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/hash"\n  merkletree "github.com/ingonyama-zk/icicle/v3/wrappers/golang/merkle-tree"\n)\n\nleafSize := 1024\nmaxInputSize := leafSize * 16\ninput := make([]byte, maxInputSize)\n\nhasher, _ := hash.NewKeccak256Hasher(uint64(leafSize))\ncompress, _ := hash.NewKeccak256Hasher(2 * hasher.OutputSize())\nlayerHashers := []hash.Hasher{hasher, compress, compress, compress, compress}\n\nmt, _ := merkletree.CreateMerkleTree(layerHashers, uint64(leafSize), 0 /* min layer to store */)\n\nmerkletree.BuildMerkleTree[byte](&mt, core.HostSliceFromElements(input), core.GetDefaultMerkleTreeConfig())\n')),(0,t.yg)("h3",{id:"example-b-tree-with-arity-4"},"Example B: Tree with Arity 4"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Merkle Tree Diagram",src:a(7161).A,width:"1532",height:"621"})),(0,t.yg)("p",null,"This example uses ",(0,t.yg)("strong",{parentName:"p"},"Blake2s")," in upper layers:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"// define layer hashers\n// we want one hash layer to hash every 1KB to 32B then compress every 128B so only 2 more layers\nhasher, _ := hash.NewKeccak256Hasher(uint64(leafSize))\ncompress, _ := hash.NewBlake2sHasher(2 * hasher.OutputSize())\nlayerHashers := []hash.Hasher{hasher, compress, compress,}\n\nmt, _ := merkletree.CreateMerkleTree(layerHashers, uint64(leafSize), 0 /* min layer to store */)\n\nmerkletree.BuildMerkleTree[byte](&mt, core.HostSliceFromElements(input), core.GetDefaultMerkleTreeConfig())\n")),(0,t.yg)("h2",{id:"padding"},"Padding"),(0,t.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"Padding feature is not yet supported in ",(0,t.yg)("strong",{parentName:"p"},"v3.1")," and is planned for ",(0,t.yg)("strong",{parentName:"p"},"v3.2"),"."))),(0,t.yg)("p",null,"When the input for ",(0,t.yg)("strong",{parentName:"p"},"layer 0")," is smaller than expected, ICICLE can apply ",(0,t.yg)("strong",{parentName:"p"},"padding")," to align the data."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Padding Schemes:")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"Zero padding:")," Adds zeroes to the remaining space."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"Repeat last leaf:")," The final leaf element is repeated to fill the remaining space.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// type PaddingPolicy = int\n\n// const (\n//  NoPadding        PaddingPolicy = iota // No padding, assume input is correctly sized.\n//  ZeroPadding                           // Pad the input with zeroes to fit the expected input size.\n//  LastValuePadding                      // Pad the input by repeating the last value.\n// )\n\nimport (\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n)\n\nconfig := core.GetDefaultMerkleTreeConfig();\nconfig.PaddingPolicy = core.ZeroPadding;\nmerkletree.BuildMerkleTree[byte](&mt, core.HostSliceFromElements(input), core.GetDefaultMerkleTreeConfig())\n')),(0,t.yg)("h2",{id:"root-as-commitment"},"Root as Commitment"),(0,t.yg)("p",null,"Retrieve the Merkle-root and serialize."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'/// Retrieve the root of the Merkle tree.\n///\n/// # Returns\n/// A reference to the root hash.\nfunc GetMerkleTreeRoot[T any](mt *MerkleTree) ([]T, runtime.EIcicleError)\n\ncommitment := merkletree.GetMerkleTreeRoot[byte](&mt)\nfmt.Println!("Commitment:", commitment)\n')),(0,t.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"The commitment can be serialized to the proof. This is not handled by ICICLE."))),(0,t.yg)("h2",{id:"generating-merkle-proofs"},"Generating Merkle Proofs"),(0,t.yg)("p",null,"Merkle proofs are used to ",(0,t.yg)("strong",{parentName:"p"},"prove the integrity of opened leaves")," in a Merkle tree. A proof ensures that a specific leaf belongs to the committed data by enabling the verifier to reconstruct the ",(0,t.yg)("strong",{parentName:"p"},"root hash (commitment)"),"."),(0,t.yg)("p",null,"A Merkle proof contains:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Leaf"),": The data being verified."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Index")," (leaf_idx): The position of the leaf in the original dataset."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Path"),": A sequence of sibling hashes (tree nodes) needed to recompute the path from the leaf to the root.")),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Merkle Pruned Phat Diagram",src:a(9434).A,width:"1523",height:"723"})),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"/// * `leaves` - A slice of leaves (input data).\n/// * `leaf_idx` - Index of the leaf to generate a proof for.\n/// * `pruned_path` - Whether the proof should be pruned.\n/// * `config` - Configuration for the Merkle tree.\n///\n/// # Returns a `MerkleProof` object or eIcicleError\nfunc GetMerkleTreeProof[T any](\n  mt *MerkleTree,\n  leaves core.HostOrDeviceSlice,\n  leafIndex uint64,\n  prunedPath bool,\n  cfg core.MerkleTreeConfig,\n) (MerkleProof, runtime.EIcicleError)\n")),(0,t.yg)("h3",{id:"example-generating-a-proof"},"Example: Generating a Proof"),(0,t.yg)("p",null,"Generating a proof for leaf idx 5:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"mp, _ := merkletree.GetMerkleTreeProof[byte](\n  &mt,\n  core.HostSliceFromElements(input),\n  5,     /* leafIndex */\n  true, /* prunedPath */\n  core.GetDefaultMerkleTreeConfig(),\n)\n")),(0,t.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"The Merkle-path can be serialized to the proof along with the leaf. This is not handled by ICICLE."))),(0,t.yg)("h2",{id:"verifying-merkle-proofs"},"Verifying Merkle Proofs"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"/// * `proof` - The Merkle proof to verify.\n///\n/// # Returns a result indicating whether the proof is valid.\nfunc (mt *MerkleTree) Verify(mp *MerkleProof) (bool, runtime.EIcicleError)\n")),(0,t.yg)("h3",{id:"example-verifying-a-proof"},"Example: Verifying a Proof"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"isVerified, err := mt.Verify(&mp)\nassert.True(isVerified)\n")),(0,t.yg)("h2",{id:"pruned-vs-full-merkle-paths"},"Pruned vs. Full Merkle-paths"),(0,t.yg)("p",null,"A ",(0,t.yg)("strong",{parentName:"p"},"Merkle path")," is a collection of ",(0,t.yg)("strong",{parentName:"p"},"sibling hashes")," that allows the verifier to ",(0,t.yg)("strong",{parentName:"p"},"reconstruct the root hash")," from a specific leaf.\nThis enables anyone with the ",(0,t.yg)("strong",{parentName:"p"},"path and root")," to verify that the ",(0,t.yg)("strong",{parentName:"p"},"leaf")," belongs to the committed dataset.\nThere are two types of paths that can be computed:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#generating-merkle-proofs"},(0,t.yg)("strong",{parentName:"a"},"Pruned Path:"))," Contains only necessary sibling hashes."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Full Path:")," Contains all sibling nodes and intermediate hashes.")),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Merkle Full Path Diagram",src:a(6744).A,width:"1523",height:"723"})),(0,t.yg)("p",null,"To compute a full path, specify ",(0,t.yg)("inlineCode",{parentName:"p"},"pruned=false"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"mp, _ := merkletree.GetMerkleTreeProof[byte](\n  &mt,\n  core.HostSliceFromElements(input),\n  5,     /* leafIndex */\n  false, /*non-pruned is a full path --\x3e note the pruned flag here*/\n  core.GetDefaultMerkleTreeConfig(),\n)\n")),(0,t.yg)("h2",{id:"handling-partial-tree-storage"},"Handling Partial Tree Storage"),(0,t.yg)("p",null,"In cases where the ",(0,t.yg)("strong",{parentName:"p"},"Merkle tree is large"),", only the ",(0,t.yg)("strong",{parentName:"p"},"top layers")," may be stored to conserve memory.\nWhen opening leaves, the ",(0,t.yg)("strong",{parentName:"p"},"first layers")," (closest to the leaves) are ",(0,t.yg)("strong",{parentName:"p"},"recomputed dynamically"),"."),(0,t.yg)("p",null,"For example to avoid storing first layer we can define a tree as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"mt, err := merkletree.CreateMerkleTree(layerHashers, leafSize, 1 /*min layer to store*/);\n")))}c.isMDXComponent=!0},2626:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/diagram1-c14b789ecbb50149820704c41d936c61.png"},9434:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/diagram1_path-0865d68074ab3dc62654c62d92c00450.png"},6744:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/diagram1_path_full-f27fb5d5f5ff39d38926712860b1da40.png"},7161:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/diagram2-9ea2e302cb54350811182ac3d38527cb.png"},1873:(e,n,a)=>{a(6540)}}]);