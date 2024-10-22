"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3509],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var i=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(8168),o=(n(6540),n(5680));n(1873);const r={},s="Poseidon2",a={unversionedId:"icicle/primitives/poseidon2",id:"icicle/primitives/poseidon2",title:"Poseidon2",description:"TODO update for V3",source:"@site/docs/icicle/primitives/poseidon2.md",sourceDirName:"icicle/primitives",slug:"/icicle/primitives/poseidon2",permalink:"/icicle/primitives/poseidon2",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/primitives/poseidon2.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1729608438,formattedLastUpdatedAt:"10/22/2024",frontMatter:{}},l={},c=[{value:"Using Poseidon2",id:"using-poseidon2",level:2},{value:"Supported Bindings",id:"supported-bindings",level:3},{value:"Constants",id:"constants",level:3},{value:"Rust API",id:"rust-api",level:3},{value:"The Tree Builder",id:"the-tree-builder",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"poseidon2"},"Poseidon2"),(0,o.yg)("p",null,"TODO update for V3"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://eprint.iacr.org/2023/323"},"Poseidon2")," is a recently released optimized version of Poseidon1. The two versions differ in two crucial points. First, Poseidon is a sponge hash function, while Poseidon2 can be either a sponge or a compression function depending on the use case. Secondly, Poseidon2 is instantiated by new and more efficient linear layers with respect to Poseidon. These changes decrease the number of multiplications in the linear layer by up to 90% and the number of constraints in Plonk circuits by up to 70%. This makes Poseidon2 currently the fastest arithmetization-oriented hash function without lookups."),(0,o.yg)("h2",{id:"using-poseidon2"},"Using Poseidon2"),(0,o.yg)("p",null,"ICICLE Poseidon2 is implemented for GPU and parallelization is performed for each state.\nWe calculate multiple hash-sums over multiple pre-images in parallel, rather than going block by block over the input vector."),(0,o.yg)("p",null,"For example, for Poseidon2 of width 16, input rate 8, output elements 8 and input of size 1024 ",(0,o.yg)("em",{parentName:"p"}," 8, we would expect 1024 ")," 8 elements of output. Which means each input block would be of size 8, resulting in 1024 Poseidon2 hashes being performed."),(0,o.yg)("h3",{id:"supported-bindings"},"Supported Bindings"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/icicle-core/src/poseidon2"},(0,o.yg)("inlineCode",{parentName:"a"},"Rust"))),(0,o.yg)("h3",{id:"constants"},"Constants"),(0,o.yg)("p",null,"Poseidon2 is also extremely customizable and using different constants will produce different hashes, security levels and performance results."),(0,o.yg)("p",null,"We support pre-calculated constants for each of the ",(0,o.yg)("a",{parentName:"p",href:"../libraries#supported-curves-and-operations"},"supported curves"),". The constants can be found ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/include/poseidon2/constants"},"here")," and are labeled clearly per curve ",(0,o.yg)("inlineCode",{parentName:"p"},"<curve_name>_poseidon2.h"),"."),(0,o.yg)("p",null,"You can also use your own set of constants as shown ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-fields/icicle-babybear/src/poseidon2/mod.rs#L290"},"here")),(0,o.yg)("h3",{id:"rust-api"},"Rust API"),(0,o.yg)("p",null,"This is the most basic way to use the Poseidon2 API."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"let test_size = 1 << 10;\nlet width = 16;\nlet rate = 8;\nlet ctx = get_default_device_context();\nlet poseidon = Poseidon2::load(width, rate, MdsType::Default, DiffusionStrategy::Default, &ctx).unwrap();\nlet config = HashConfig::default();\n\nlet inputs = vec![F::one(); test_size * rate as usize];\nlet outputs = vec![F::zero(); test_size];\nlet mut input_slice = HostOrDeviceSlice::on_host(inputs);\nlet mut output_slice = HostOrDeviceSlice::on_host(outputs);\n\nposeidon.hash_many::<F>(\n    &mut input_slice,\n    &mut output_slice,\n    test_size as u32,\n    rate as u32,\n    8, // Output length\n    &config,\n)\n.unwrap();\n")),(0,o.yg)("p",null,"In the example above ",(0,o.yg)("inlineCode",{parentName:"p"},"Poseidon2::load(width, rate, MdsType::Default, DiffusionStrategy::Default, &ctx).unwrap();")," is used to load the correct constants based on width and curve. Here, the default MDS matrices and diffusion are used. If you want to get a Plonky3 compliant version, set them to ",(0,o.yg)("inlineCode",{parentName:"p"},"MdsType::Plonky")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"DiffusionStrategy::Montgomery")," respectively."),(0,o.yg)("h2",{id:"the-tree-builder"},"The Tree Builder"),(0,o.yg)("p",null,"Similar to Poseidon1, you can use Poseidon2 in a tree builder."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"use icicle_bn254::tree::Bn254TreeBuilder;\nuse icicle_bn254::poseidon2::Poseidon2;\n\nlet mut config = TreeBuilderConfig::default();\nlet arity = 2;\nconfig.arity = arity as u32;\nlet input_block_len = arity;\nlet leaves = vec![F::one(); (1 << height) * arity];\nlet mut digests = vec![F::zero(); merkle_tree_digests_len((height + 1) as u32, arity as u32, 1)];\n\nlet leaves_slice = HostSlice::from_slice(&leaves);\nlet digests_slice = HostSlice::from_mut_slice(&mut digests);\n\nlet ctx = device_context::DeviceContext::default();\nlet hash = Poseidon2::load(arity, arity, MdsType::Default, DiffusionStrategy::Default, &ctx).unwrap();\n\nlet mut config = TreeBuilderConfig::default();\nconfig.keep_rows = 5;\nBn254TreeBuilder::build_merkle_tree(\n    leaves_slice,\n    digests_slice,\n    height,\n    input_block_len,\n    &hash,\n    &hash,\n    &config,\n)\n.unwrap();\n")))}d.isMDXComponent=!0},1873:(e,t,n)=>{n(6540)}}]);