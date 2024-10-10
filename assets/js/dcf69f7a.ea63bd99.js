"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3453],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=i,d=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(8168),i=(t(6540),t(5680));t(1873);const a={},o="MSM",s={unversionedId:"icicle/rust-bindings/msm",id:"icicle/rust-bindings/msm",title:"MSM",description:"MSM API Overview",source:"@site/docs/icicle/rust-bindings/msm.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/msm",permalink:"/icicle/rust-bindings/msm",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/msm.md",tags:[],version:"current",lastUpdatedBy:"yshekel",lastUpdatedAt:1728555218,formattedLastUpdatedAt:"10/10/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Rust bindings",permalink:"/icicle/rust-bindings"},next:{title:"NTT",permalink:"/icicle/rust-bindings/ntt"}},l={},p=[{value:"MSM API Overview",id:"msm-api-overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"MSM Config",id:"msm-config",level:3},{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2},{value:"Batched msm",id:"batched-msm",level:2},{value:"Precomputationg",id:"precomputationg",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns",level:4},{value:"Parameters for optimal performance",id:"parameters-for-optimal-performance",level:2}],m={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"msm"},"MSM"),(0,i.yg)("h2",{id:"msm-api-overview"},"MSM API Overview"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn msm<C: Curve + MSM<C>>(\n    scalars: &(impl HostOrDeviceSlice<C::ScalarField> + ?Sized),\n    bases: &(impl HostOrDeviceSlice<Affine<C>> + ?Sized),\n    cfg: &MSMConfig,\n    results: &mut (impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n) -> Result<(), eIcicleError>;\n")),(0,i.yg)("h3",{id:"parameters"},"Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"scalars")),": A buffer containing the scalar values to be multiplied with corresponding points."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"points")),": A buffer containing the points to be multiplied by the scalars."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"cfg")),": MSM configuration specifying additional parameters for the operation."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"results")),": A buffer where the results of the MSM operations will be stored.")),(0,i.yg)("h3",{id:"msm-config"},"MSM Config"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct MSMConfig {\n    pub stream_handle: IcicleStreamHandle,    \n    pub precompute_factor: i32,\n    pub c: i32,\n    pub bitsize: i32,    \n    batch_size: i32,\n    are_points_shared_in_batch: bool,\n    are_scalars_on_device: bool,\n    pub are_scalars_montgomery_form: bool,\n    are_points_on_device: bool,\n    pub are_points_montgomery_form: bool,\n    are_results_on_device: bool,    \n    pub is_async: bool,\n    pub ext: ConfigExtension,\n}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"stream_handle: IcicleStreamHandle")),": Specifies a stream for asynchronous execution."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"precompute_factor: i32")),": Determines the number of extra points to pre-compute for each point, affecting memory footprint and performance."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"c: i32")),': The "window bitsize," a parameter controlling the computational complexity and memory footprint of the MSM operation.'),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"bitsize: i32")),": The number of bits of the largest scalar, typically equal to the bit size of the scalar field."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"batch_size: i32")),": The number of MSMs to compute in a single batch, for leveraging parallelism."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"are_scalars_montgomery_form")),": Set to ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," if scalars are in montgomery form."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"are_points_montgomery_form")),": Set to ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," if points are in montgomery form."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"are_scalars_on_device: bool")),", ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"are_points_on_device: bool")),", ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"are_results_on_device: bool")),": Indicate whether the corresponding buffers are on the device memory."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"is_async: bool")),": Whether to perform the MSM operation asynchronously."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"ext: ConfigExtension")),": extended configuration for backend.")),(0,i.yg)("h3",{id:"usage"},"Usage"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"msm")," function is designed to compute the sum of multiple scalar-point multiplications efficiently. It supports both single MSM operations and batched operations for increased performance. The configuration allows for detailed control over the execution environment and performance characteristics of the MSM operation."),(0,i.yg)("p",null,"When performing MSM operations, it's crucial to match the size of the ",(0,i.yg)("inlineCode",{parentName:"p"},"scalars")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"points")," arrays correctly and ensure that the ",(0,i.yg)("inlineCode",{parentName:"p"},"results")," buffer is appropriately sized to hold the output. The ",(0,i.yg)("inlineCode",{parentName:"p"},"MSMConfig")," should be set up to reflect the specifics of the operation, including whether the operation should be asynchronous and any device-specific settings."),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},'// Using bls12-377 curve\nuse icicle_bls12_377::curve::{CurveCfg, G1Projective, ScalarCfg};\nuse icicle_core::{curve::Curve, msm, msm::MSMConfig, traits::GenerateRandom};\nuse icicle_runtime::{device::Device, memory::HostSlice};\n\nfn main() {\n    // Load backend and set device ...\n\n    // Randomize inputs\n    let size = 1024;\n    let points = CurveCfg::generate_random_affine_points(size);\n    let scalars = ScalarCfg::generate_random(size);\n\n    let mut msm_results = vec![G1Projective::zero(); 1];\n    msm::msm(\n        HostSlice::from_slice(&scalars),\n        HostSlice::from_slice(&points),\n        &MSMConfig::default(),\n        HostSlice::from_mut_slice(&mut msm_results[..]),\n    )\n    .unwrap();\n    println!("MSM result = {:?}", msm_results);\n}\n\n')),(0,i.yg)("h2",{id:"batched-msm"},"Batched msm"),(0,i.yg)("p",null,"For batch msm, simply allocate the results array with size corresponding to batch size and set the ",(0,i.yg)("inlineCode",{parentName:"p"},"are_points_shared_in_batch")," flag in config struct."),(0,i.yg)("h2",{id:"precomputationg"},"Precomputationg"),(0,i.yg)("p",null,"Precomputes bases for the multi-scalar multiplication (MSM) by extending each base point with its multiples, facilitating more efficient MSM calculations."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"/// Returns `Ok(())` if no errors occurred or a `eIcicleError` otherwise.\npub fn precompute_bases<C: Curve + MSM<C>>(\n    points: &(impl HostOrDeviceSlice<Affine<C>> + ?Sized),\n    config: &MSMConfig,\n    output_bases: &mut DeviceSlice<Affine<C>>,\n) -> Result<(), eIcicleError>;\n")),(0,i.yg)("h3",{id:"parameters-1"},"Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"points")),": The original set of affine points (","(","P_1, P_2, ..., P_n",")",") to be used in the MSM. For batch MSM operations, this should include all unique points concatenated together."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"msm_size")),": The size of a single msm in order to determine optimal parameters."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"cfg")),": The MSM configuration parameters."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"output_bases")),": The output buffer for the extended bases. Its size must be ",(0,i.yg)("inlineCode",{parentName:"li"},"points.len() * precompute_factor"),". This buffer should be allocated on the device for GPU computations.")),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Ok(())")," if the operation is successful, or an ",(0,i.yg)("inlineCode",{parentName:"p"},"eIcicleError")," error otherwise."),(0,i.yg)("h2",{id:"parameters-for-optimal-performance"},"Parameters for optimal performance"),(0,i.yg)("p",null,"Please refer to the ",(0,i.yg)("a",{parentName:"p",href:"../primitives/msm#choosing-optimal-parameters"},"primitive description")))}u.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);