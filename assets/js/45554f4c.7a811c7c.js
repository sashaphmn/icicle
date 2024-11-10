"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4597],{5680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>d});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,d=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return r?t.createElement(d,l(l({ref:n},g),{},{components:r})):t.createElement(d,l({ref:n},g))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},436:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=r(8168),a=(r(6540),r(5680));r(1873);const i={},l="Merkle Tree API Documentation (Rust)",o={unversionedId:"icicle/rust-bindings/merkle",id:"icicle/rust-bindings/merkle",title:"Merkle Tree API Documentation (Rust)",description:"This is the Rust version of the Merkle Tree API Documentation (C++ documentation). It mirrors the structure and functionality of the C++ version, providing equivalent APIs in Rust.",source:"@site/docs/icicle/rust-bindings/merkle.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/merkle",permalink:"/icicle/rust-bindings/merkle",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/merkle.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1731255581,formattedLastUpdatedAt:"11/10/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ICICLE Hashing in Rust",permalink:"/icicle/rust-bindings/hash"},next:{title:"Migration from ICICLE v2 to v3",permalink:"/icicle/migrate_from_v2"}},s={},p=[{value:"Tree Structure and Configuration in Rust",id:"tree-structure-and-configuration-in-rust",level:2},{value:"Defining a Merkle Tree",id:"defining-a-merkle-tree",level:3},{value:"Building the Tree",id:"building-the-tree",level:3},{value:"Tree Examples in Rust",id:"tree-examples-in-rust",level:2},{value:"Example A: Binary Tree",id:"example-a-binary-tree",level:3},{value:"Example B: Tree with Arity 4",id:"example-b-tree-with-arity-4",level:3},{value:"Padding",id:"padding",level:2},{value:"Root as Commitment",id:"root-as-commitment",level:2},{value:"Generating Merkle Proofs",id:"generating-merkle-proofs",level:2},{value:"Example: Generating a Proof",id:"example-generating-a-proof",level:3},{value:"Verifying Merkle Proofs",id:"verifying-merkle-proofs",level:2},{value:"Example: Verifying a Proof",id:"example-verifying-a-proof",level:3},{value:"Pruned vs. Full Merkle-paths",id:"pruned-vs-full-merkle-paths",level:2},{value:"Handling Partial Tree Storage",id:"handling-partial-tree-storage",level:2}],g={toc:p},m="wrapper";function c(e){let{components:n,...i}=e;return(0,a.yg)(m,(0,t.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"merkle-tree-api-documentation-rust"},"Merkle Tree API Documentation (Rust)"),(0,a.yg)("p",null,"This is the Rust version of the ",(0,a.yg)("strong",{parentName:"p"},"Merkle Tree API Documentation")," (",(0,a.yg)("a",{parentName:"p",href:"/icicle/primitives/merkle"},"C++ documentation"),"). It mirrors the structure and functionality of the C++ version, providing equivalent APIs in Rust.\nFor more detailed explanations, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/icicle/primitives/merkle"},"C++ documentation"),"."),(0,a.yg)("p",null,"To see a complete implementation, visit the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/examples/rust/hash-and-merkle"},"Hash and Merkle example")," for a full example."),(0,a.yg)("h2",{id:"tree-structure-and-configuration-in-rust"},"Tree Structure and Configuration in Rust"),(0,a.yg)("h3",{id:"defining-a-merkle-tree"},"Defining a Merkle Tree"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"struct MerkleTree{\n    /// * `layer_hashers` - A vector of hash objects representing the hashers of each layer.\n    /// * `leaf_element_size` - Size of each leaf element.\n    /// * `output_store_min_layer` - Minimum layer at which the output is stored.\n    ///\n    /// # Returns a new `MerkleTree` instance or eIcicleError.\n    pub fn new(\n        layer_hashers: &[&Hasher],\n        leaf_element_size: u64,\n        output_store_min_layer: u64,\n    ) -> Result<Self, eIcicleError>;\n}\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"output_store_min_layer")," parameter defines the lowest layer that will be stored in memory. Layers below this value will not be stored, saving memory at the cost of additional computation when proofs are generated."),(0,a.yg)("h3",{id:"building-the-tree"},"Building the Tree"),(0,a.yg)("p",null,"The Merkle tree can be constructed from input data of any type, allowing flexibility in its usage. The size of the input must align with the tree structure defined by the hash layers and leaf size. If the input size does not match the expected size, padding may be applied."),(0,a.yg)("p",null,"Refer to the ",(0,a.yg)("a",{parentName:"p",href:"#padding"},"Padding Section")," for more details on how mismatched input sizes are handled."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"struct MerkleTree{\n    /// * `leaves` - A slice of leaves (input data).\n    /// * `config` - Configuration for the Merkle tree.\n    ///\n    /// # Returns a result indicating success or failure.\n    pub fn build<T>(\n        &self,\n        leaves: &(impl HostOrDeviceSlice<T> + ?Sized),\n        cfg: &MerkleTreeConfig,\n    ) -> Result<(), eIcicleError>;\n}\n")),(0,a.yg)("h2",{id:"tree-examples-in-rust"},"Tree Examples in Rust"),(0,a.yg)("h3",{id:"example-a-binary-tree"},"Example A: Binary Tree"),(0,a.yg)("p",null,"A binary tree with ",(0,a.yg)("strong",{parentName:"p"},"5 layers"),", using ",(0,a.yg)("strong",{parentName:"p"},"Keccak-256"),":"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Merkle Tree Diagram",src:r(2626).A,width:"1539",height:"968"})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"use icicle_core::{\n    hash::{HashConfig, Hasher},\n    merkle::{MerkleTree, MerkleTreeConfig},\n};\nuse icicle_hash::keccak::Keccak256;\nuse icicle_runtime::memory::HostSlice;\n\nlet leaf_size = 1024_u64;\nlet max_input_size = leaf_size as usize * 16;\nlet input: Vec<u8> = vec![0; max_input_size];\n\n// define layer hashers\n// we want one hash layer to hash every 1KB to 32B then compress every 64B so 4 more binary layers\nlet hash = Keccak256::new(leaf_size).unwrap();\nlet compress = Keccak256::new(2 * hash.output_size()).unwrap();\nlet _layer_hashers = vec![&hash, &compress, &compress, &compress, &compress];\n// or like that\nlet layer_hashers: Vec<&Hasher> = std::iter::once(&hash)\n    .chain(std::iter::repeat(&compress).take(4))\n    .collect();\n\nlet merkle_tree = MerkleTree::new(&layer_hashers, leaf_size, 0 /*min layer to store */).unwrap();\n\n// compute the tree\nmerkle_tree\n    .build(HostSlice::from_slice(&input), &MerkleTreeConfig::default())\n    .unwrap();\n")),(0,a.yg)("h3",{id:"example-b-tree-with-arity-4"},"Example B: Tree with Arity 4"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Merkle Tree Diagram",src:r(7161).A,width:"1532",height:"621"})),(0,a.yg)("p",null,"This example uses ",(0,a.yg)("strong",{parentName:"p"},"Blake2s")," in upper layers:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"use icicle_hash::blake2s::Blake2s;\n\n// define layer hashers\n// we want one hash layer to hash every 1KB to 32B then compress every 128B so only 2 more layers\nlet hash = Keccak256::new(leaf_size).unwrap();\nlet compress = Blake2s::new(4 * hash.output_size()).unwrap();\nlet layer_hashers = vec![&hash, &compress, &compress];\n\nlet merkle_tree = MerkleTree::new(&layer_hashers, leaf_size, 0 /*min layer to store */).unwrap();\n\nmerkle_tree\n    .build(HostSlice::from_slice(&input), &MerkleTreeConfig::default())\n    .unwrap();\n")),(0,a.yg)("h2",{id:"padding"},"Padding"),(0,a.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"Padding feature is not yet supported in ",(0,a.yg)("strong",{parentName:"p"},"v3.1")," and is planned for ",(0,a.yg)("strong",{parentName:"p"},"v3.2"),"."))),(0,a.yg)("p",null,"When the input for ",(0,a.yg)("strong",{parentName:"p"},"layer 0")," is smaller than expected, ICICLE can apply ",(0,a.yg)("strong",{parentName:"p"},"padding")," to align the data."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Padding Schemes:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Zero padding:")," Adds zeroes to the remaining space."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Repeat last leaf:")," The final leaf element is repeated to fill the remaining space.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"// pub enum PaddingPolicy {\n//     None,        // No padding, assume input is correctly sized.\n//     ZeroPadding, // Pad the input with zeroes to fit the expected input size.\n//     LastValue,   // Pad the input by repeating the last value.\n// }\n\nuse icicle_core::merkle::PaddingPolicy;\nlet mut config = MerkleTreeConfig::default();\nconfig.padding_policy = PaddingPolicy::ZeroPadding;\nmerkle_tree\n    .build(HostSlice::from_slice(&input), &config)\n    .unwrap();\n")),(0,a.yg)("h2",{id:"root-as-commitment"},"Root as Commitment"),(0,a.yg)("p",null,"Retrieve the Merkle-root and serialize."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'struct MerkleTree{\n    /// Retrieve the root of the Merkle tree.\n    ///\n    /// # Returns\n    /// A reference to the root hash.\n    pub fn get_root<T>(&self) -> Result<&[T], eIcicleError>;\n}\n\nlet commitment: &[u8] = merkle_tree\n        .get_root()\n        .unwrap();\nprintln!("Commitment: {:?}", commitment);****\n')),(0,a.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"The commitment can be serialized to the proof. This is not handled by ICICLE."))),(0,a.yg)("h2",{id:"generating-merkle-proofs"},"Generating Merkle Proofs"),(0,a.yg)("p",null,"Merkle proofs are used to ",(0,a.yg)("strong",{parentName:"p"},"prove the integrity of opened leaves")," in a Merkle tree. A proof ensures that a specific leaf belongs to the committed data by enabling the verifier to reconstruct the ",(0,a.yg)("strong",{parentName:"p"},"root hash (commitment)"),"."),(0,a.yg)("p",null,"A Merkle proof contains:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Leaf"),": The data being verified."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Index")," (leaf_idx): The position of the leaf in the original dataset."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Path"),": A sequence of sibling hashes (tree nodes) needed to recompute the path from the leaf to the root.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Merkle Pruned Phat Diagram",src:r(9434).A,width:"1523",height:"723"})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"struct MerkleTree{\n    /// * `leaves` - A slice of leaves (input data).\n    /// * `leaf_idx` - Index of the leaf to generate a proof for.\n    /// * `pruned_path` - Whether the proof should be pruned.\n    /// * `config` - Configuration for the Merkle tree.\n    ///\n    /// # Returns a `MerkleProof` object or eIcicleError\n    pub fn get_proof<T>(\n        &self,\n        leaves: &(impl HostOrDeviceSlice<T> + ?Sized),\n        leaf_idx: u64,\n        pruned_path: bool,\n        config: &MerkleTreeConfig,\n    ) -> Result<MerkleProof, eIcicleError>;\n}\n")),(0,a.yg)("h3",{id:"example-generating-a-proof"},"Example: Generating a Proof"),(0,a.yg)("p",null,"Generating a proof for leaf idx 5:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let merkle_proof = merkle_tree\n    .get_proof(\n        HostSlice::from_slice(&input),\n        5,    /*=leaf-idx*/\n        true, /*pruned*/\n        &MerkleTreeConfig::default(),\n    )\n    .unwrap();\n")),(0,a.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"The Merkle-path can be serialized to the proof along with the leaf. This is not handled by ICICLE."))),(0,a.yg)("h2",{id:"verifying-merkle-proofs"},"Verifying Merkle Proofs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"struct MerkleTree{\n    /// * `proof` - The Merkle proof to verify.\n    ///\n    /// # Returns a result indicating whether the proof is valid.\n    pub fn verify(&self, proof: &MerkleProof) -> Result<bool, eIcicleError>;\n}\n")),(0,a.yg)("h3",{id:"example-verifying-a-proof"},"Example: Verifying a Proof"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let valid = merkle_tree\n    .verify(&merkle_proof)\n    .unwrap();\nassert!(valid);\n")),(0,a.yg)("h2",{id:"pruned-vs-full-merkle-paths"},"Pruned vs. Full Merkle-paths"),(0,a.yg)("p",null,"A ",(0,a.yg)("strong",{parentName:"p"},"Merkle path")," is a collection of ",(0,a.yg)("strong",{parentName:"p"},"sibling hashes")," that allows the verifier to ",(0,a.yg)("strong",{parentName:"p"},"reconstruct the root hash")," from a specific leaf.\nThis enables anyone with the ",(0,a.yg)("strong",{parentName:"p"},"path and root")," to verify that the ",(0,a.yg)("strong",{parentName:"p"},"leaf")," belongs to the committed dataset.\nThere are two types of paths that can be computed:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#generating-merkle-proofs"},(0,a.yg)("strong",{parentName:"a"},"Pruned Path:"))," Contains only necessary sibling hashes."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Full Path:")," Contains all sibling nodes and intermediate hashes.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Merkle Full Path Diagram",src:r(6744).A,width:"1523",height:"723"})),(0,a.yg)("p",null,"To compute a full path, specify ",(0,a.yg)("inlineCode",{parentName:"p"},"pruned=false"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let merkle_proof = merkle_tree\n    .get_proof(\n        HostSlice::from_slice(&input),\n        5,    /*=leaf-idx*/\n        false, /*non-pruned is a full path --\x3e note the pruned flag here*/\n        &MerkleTreeConfig::default(),\n    )\n    .unwrap();\n")),(0,a.yg)("h2",{id:"handling-partial-tree-storage"},"Handling Partial Tree Storage"),(0,a.yg)("p",null,"In cases where the ",(0,a.yg)("strong",{parentName:"p"},"Merkle tree is large"),", only the ",(0,a.yg)("strong",{parentName:"p"},"top layers")," may be stored to conserve memory.\nWhen opening leaves, the ",(0,a.yg)("strong",{parentName:"p"},"first layers")," (closest to the leaves) are ",(0,a.yg)("strong",{parentName:"p"},"recomputed dynamically"),"."),(0,a.yg)("p",null,"For example to avoid storing first layer we can define a tree as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let mut merkle_tree = MerkleTree::new(&layer_hashers, leaf_size, 1 /*min layer to store*/);\n")))}c.isMDXComponent=!0},2626:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/diagram1-c14b789ecbb50149820704c41d936c61.png"},9434:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/diagram1_path-0865d68074ab3dc62654c62d92c00450.png"},6744:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/diagram1_path_full-f27fb5d5f5ff39d38926712860b1da40.png"},7161:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/diagram2-9ea2e302cb54350811182ac3d38527cb.png"},1873:(e,n,r)=>{r(6540)}}]);