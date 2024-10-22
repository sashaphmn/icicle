"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5411],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(8168),r=(t(6540),t(5680));t(1873);const o={},a="Vector Operations API",l={unversionedId:"icicle/rust-bindings/vec-ops",id:"icicle/rust-bindings/vec-ops",title:"Vector Operations API",description:"Our vector operations API includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory.",source:"@site/docs/icicle/rust-bindings/vec-ops.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/vec-ops",permalink:"/icicle/rust-bindings/vec-ops",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/vec-ops.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1729608438,formattedLastUpdatedAt:"10/22/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ECNTT",permalink:"/icicle/rust-bindings/ecntt"},next:{title:"Rust FFI Bindings for Univariate Polynomial",permalink:"/icicle/rust-bindings/polynomials"}},s={},c=[{value:"Vector Operations Configuration",id:"vector-operations-configuration",level:2},{value:"<code>VecOpsConfig</code>",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Vector Operations",id:"vector-operations",level:2},{value:"Methods",id:"methods",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"vector-operations-api"},"Vector Operations API"),(0,r.yg)("p",null,"Our vector operations API includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory."),(0,r.yg)("h2",{id:"vector-operations-configuration"},"Vector Operations Configuration"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"VecOpsConfig")," struct encapsulates the settings for vector operations, including device context and operation modes."),(0,r.yg)("h3",{id:"vecopsconfig"},(0,r.yg)("inlineCode",{parentName:"h3"},"VecOpsConfig")),(0,r.yg)("p",null,"Defines configuration parameters for vector operations."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct VecOpsConfig {\n    pub stream_handle: IcicleStreamHandle,\n    pub is_a_on_device: bool,\n    pub is_b_on_device: bool,\n    pub is_result_on_device: bool,\n    pub is_async: bool,\n    pub ext: ConfigExtension,\n}\n")),(0,r.yg)("h4",{id:"fields"},"Fields"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"stream_handle: IcicleStreamHandle")),": Specifies the stream (queue) to use for async execution"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_a_on_device: bool")),": Indicates whether the input data a has been preloaded on the device memory. If ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," inputs will be copied from host to device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_b_on_device: bool")),": Indicates whether the input b data has been preloaded on the device memory. If ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," inputs will be copied from host to device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_result_on_device: bool")),": Indicates whether the output data is preloaded in device memory. If ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," outputs will be copied from host to device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"is_async: bool")),": Specifies whether the NTT operation should be performed asynchronously."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"ext: ConfigExtension")),": extended configuration for backend.")),(0,r.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VecOpsConfig")," can be initialized with default settings tailored for a specific device:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"let cfg = VecOpsConfig::default();\n")),(0,r.yg)("h2",{id:"vector-operations"},"Vector Operations"),(0,r.yg)("p",null,"Vector operations are implemented through the ",(0,r.yg)("inlineCode",{parentName:"p"},"VecOps")," trait, providing methods for addition, subtraction, and multiplication of vectors."),(0,r.yg)("h3",{id:"methods"},"Methods"),(0,r.yg)("p",null,"All operations are element-wise operations, and the results placed into the ",(0,r.yg)("inlineCode",{parentName:"p"},"result")," param. These operations are not in place."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"add")),": Computes the element-wise sum of two vectors."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"accumulate")),": Sum input b to a inplace."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"sub")),": Computes the element-wise difference between two vectors."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"mul")),": Performs element-wise multiplication of two vectors."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"transpose")),": Performs matrix transpose."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"bit_reverse/bit_reverse_inplace")),": Reverse order of elements based on bit-reverse.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn add_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn accumulate_scalars<F>(\n    a: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn sub_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn mul_scalars<F>(\n    a: &(impl HostOrDeviceSlice<F> + ?Sized),\n    b: &(impl HostOrDeviceSlice<F> + ?Sized),\n    result: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn transpose_matrix<F>(\n    input: &(impl HostOrDeviceSlice<F> + ?Sized),\n    nof_rows: u32,\n    nof_cols: u32,\n    output: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n\npub fn bit_reverse<F>(\n    input: &(impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n    output: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n) -> Result<(), eIcicleError>;\n\npub fn bit_reverse_inplace<F>(\n    input: &mut (impl HostOrDeviceSlice<F> + ?Sized),\n    cfg: &VecOpsConfig,\n) -> Result<(), eIcicleError>;\n")))}d.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);