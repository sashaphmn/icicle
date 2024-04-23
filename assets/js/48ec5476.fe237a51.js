"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[503],{5680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>N});var n=t(6540);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,m=e.mdxType,s=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),g=l(t),y=m,N=g["".concat(i,".").concat(y)]||g[y]||c[y]||s;return t?n.createElement(N,r(r({ref:a},o),{},{components:t})):n.createElement(N,r({ref:a},o))}));function N(e,a){var t=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var s=t.length,r=new Array(s);r[0]=y;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[g]="string"==typeof e?e:m,r[1]=p;for(var l=2;l<s;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1449:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=t(8168),m=(t(6540),t(5680));t(1873);const s={},r="MSM Pre computation",p={unversionedId:"icicle/rust-bindings/msm-pre-computation",id:"icicle/rust-bindings/msm-pre-computation",title:"MSM Pre computation",description:"To understand the theory behind MSM pre computation technique refer to Niall Emmart's talk.",source:"@site/docs/icicle/rust-bindings/msm-pre-computation.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/msm-pre-computation",permalink:"/icicle/rust-bindings/msm-pre-computation",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/msm-pre-computation.md",tags:[],version:"current",lastUpdatedBy:"ChickenLover",lastUpdatedAt:1713839200,formattedLastUpdatedAt:"4/23/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"MSM",permalink:"/icicle/rust-bindings/msm"},next:{title:"NTT",permalink:"/icicle/rust-bindings/ntt"}},i={},l=[{value:"Supported curves",id:"supported-curves",level:3},{value:"<code>precompute_bases</code>",id:"precompute_bases",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Description",id:"description",level:4},{value:"Example Usage",id:"example-usage",level:4},{value:"Benchmarks",id:"benchmarks",level:3}],o={toc:l},g="wrapper";function c(e){let{components:a,...t}=e;return(0,m.yg)(g,(0,n.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,m.yg)("h1",{id:"msm-pre-computation"},"MSM Pre computation"),(0,m.yg)("p",null,"To understand the theory behind MSM pre computation technique refer to Niall Emmart's ",(0,m.yg)("a",{parentName:"p",href:"https://youtu.be/KAWlySN7Hm8?feature=shared&t=1734"},"talk"),"."),(0,m.yg)("h3",{id:"supported-curves"},"Supported curves"),(0,m.yg)("p",null,(0,m.yg)("inlineCode",{parentName:"p"},"bls12-377"),", ",(0,m.yg)("inlineCode",{parentName:"p"},"bls12-381"),", ",(0,m.yg)("inlineCode",{parentName:"p"},"bn254"),", ",(0,m.yg)("inlineCode",{parentName:"p"},"bw6-761"),", ",(0,m.yg)("inlineCode",{parentName:"p"},"Grumpkin")),(0,m.yg)("h3",{id:"precompute_bases"},(0,m.yg)("inlineCode",{parentName:"h3"},"precompute_bases")),(0,m.yg)("p",null,"Precomputes bases for the multi-scalar multiplication (MSM) by extending each base point with its multiples, facilitating more efficient MSM calculations."),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn precompute_bases<C: Curve + MSM<C>>(\n    points: &HostOrDeviceSlice<Affine<C>>,\n    precompute_factor: i32,\n    _c: i32,\n    ctx: &DeviceContext,\n    output_bases: &mut HostOrDeviceSlice<Affine<C>>,\n) -> IcicleResult<()>\n")),(0,m.yg)("h4",{id:"parameters"},"Parameters"),(0,m.yg)("ul",null,(0,m.yg)("li",{parentName:"ul"},(0,m.yg)("strong",{parentName:"li"},(0,m.yg)("inlineCode",{parentName:"strong"},"points")),": The original set of affine points (","(","P_1, P_2, ..., P_n",")",") to be used in the MSM. For batch MSM operations, this should include all unique points concatenated together."),(0,m.yg)("li",{parentName:"ul"},(0,m.yg)("strong",{parentName:"li"},(0,m.yg)("inlineCode",{parentName:"strong"},"precompute_factor")),": Specifies the total number of points to precompute for each base, including the base point itself. This parameter directly influences the memory requirements and the potential speedup of the MSM operation."),(0,m.yg)("li",{parentName:"ul"},(0,m.yg)("strong",{parentName:"li"},(0,m.yg)("inlineCode",{parentName:"strong"},"_c")),": Currently unused. Intended for future use to align with the ",(0,m.yg)("inlineCode",{parentName:"li"},"c")," parameter in ",(0,m.yg)("inlineCode",{parentName:"li"},"MSMConfig"),", ensuring the precomputation is compatible with the bucket method's window size used in MSM."),(0,m.yg)("li",{parentName:"ul"},(0,m.yg)("strong",{parentName:"li"},(0,m.yg)("inlineCode",{parentName:"strong"},"ctx")),": The device context specifying the device ID and stream for execution. This context determines where the precomputation is performed (e.g., on a specific GPU)."),(0,m.yg)("li",{parentName:"ul"},(0,m.yg)("strong",{parentName:"li"},(0,m.yg)("inlineCode",{parentName:"strong"},"output_bases")),": The output buffer for the extended bases. Its size must be ",(0,m.yg)("inlineCode",{parentName:"li"},"points.len() * precompute_factor"),". This buffer should be allocated on the device for GPU computations.")),(0,m.yg)("h4",{id:"returns"},"Returns"),(0,m.yg)("p",null,(0,m.yg)("inlineCode",{parentName:"p"},"Ok(())")," if the operation is successful, or an ",(0,m.yg)("inlineCode",{parentName:"p"},"IcicleResult")," error otherwise."),(0,m.yg)("h4",{id:"description"},"Description"),(0,m.yg)("p",null,"This function extends each provided base point ",(0,m.yg)("span",{parentName:"p",className:"math math-inline"},(0,m.yg)("span",{parentName:"span",className:"katex"},(0,m.yg)("span",{parentName:"span",className:"katex-mathml"},(0,m.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.yg)("semantics",{parentName:"math"},(0,m.yg)("mrow",{parentName:"semantics"},(0,m.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.yg)("mi",{parentName:"mrow"},"P"),(0,m.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(P)")))),(0,m.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.yg)("span",{parentName:"span",className:"mopen"},"("),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.yg)("span",{parentName:"span",className:"mclose"},")")))))," with its multiples ",(0,m.yg)("span",{parentName:"p",className:"math math-inline"},(0,m.yg)("span",{parentName:"span",className:"katex"},(0,m.yg)("span",{parentName:"span",className:"katex-mathml"},(0,m.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.yg)("semantics",{parentName:"math"},(0,m.yg)("mrow",{parentName:"semantics"},(0,m.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"2"),(0,m.yg)("mi",{parentName:"msup"},"l")),(0,m.yg)("mi",{parentName:"mrow"},"P"),(0,m.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"2"),(0,m.yg)("mrow",{parentName:"msup"},(0,m.yg)("mn",{parentName:"mrow"},"2"),(0,m.yg)("mi",{parentName:"mrow"},"l"))),(0,m.yg)("mi",{parentName:"mrow"},"P"),(0,m.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,m.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,m.yg)("msup",{parentName:"mrow"},(0,m.yg)("mn",{parentName:"msup"},"2"),(0,m.yg)("mrow",{parentName:"msup"},(0,m.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.yg)("mi",{parentName:"mrow"},"p"),(0,m.yg)("mi",{parentName:"mrow"},"r"),(0,m.yg)("mi",{parentName:"mrow"},"e"),(0,m.yg)("mi",{parentName:"mrow"},"c"),(0,m.yg)("mi",{parentName:"mrow"},"o"),(0,m.yg)("mi",{parentName:"mrow"},"m"),(0,m.yg)("mi",{parentName:"mrow"},"p"),(0,m.yg)("mi",{parentName:"mrow"},"u"),(0,m.yg)("mi",{parentName:"mrow"},"t"),(0,m.yg)("msub",{parentName:"mrow"},(0,m.yg)("mi",{parentName:"msub"},"e"),(0,m.yg)("mi",{parentName:"msub"},"f")),(0,m.yg)("mi",{parentName:"mrow"},"a"),(0,m.yg)("mi",{parentName:"mrow"},"c"),(0,m.yg)("mi",{parentName:"mrow"},"t"),(0,m.yg)("mi",{parentName:"mrow"},"o"),(0,m.yg)("mi",{parentName:"mrow"},"r"),(0,m.yg)("mo",{parentName:"mrow"},"\u2212"),(0,m.yg)("mn",{parentName:"mrow"},"1"),(0,m.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.yg)("mo",{parentName:"mrow"},"\u22c5"),(0,m.yg)("mi",{parentName:"mrow"},"l"))),(0,m.yg)("mi",{parentName:"mrow"},"P"),(0,m.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(2^lP, 2^{2l}P, ..., 2^{(precompute_factor - 1) \\cdot l}P)")))),(0,m.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"1.138em",verticalAlign:"-0.25em"}}),(0,m.yg)("span",{parentName:"span",className:"mopen"},"("),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"2"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l")))))))),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.yg)("span",{parentName:"span",className:"mpunct"},","),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"2"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"2"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"))))))))),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.yg)("span",{parentName:"span",className:"mpunct"},","),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},"..."),(0,m.yg)("span",{parentName:"span",className:"mpunct"},","),(0,m.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.yg)("span",{parentName:"span",className:"mord"},(0,m.yg)("span",{parentName:"span",className:"mord"},"2"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mtight"},(0,m.yg)("span",{parentName:"span",className:"mopen mtight"},"("),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"reco"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"m"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,m.yg)("span",{parentName:"span",className:"mord mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,m.yg)("span",{parentName:"span",className:"msupsub"},(0,m.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,m.yg)("span",{parentName:"span",style:{top:"-2.3488em",marginLeft:"0em",marginRight:"0.0714em"}},(0,m.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,m.yg)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"f")))),(0,m.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.yg)("span",{parentName:"span",className:"vlist-r"},(0,m.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.2901em"}},(0,m.yg)("span",{parentName:"span"})))))),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"c"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"or"),(0,m.yg)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,m.yg)("span",{parentName:"span",className:"mord mtight"},"1"),(0,m.yg)("span",{parentName:"span",className:"mclose mtight"},")"),(0,m.yg)("span",{parentName:"span",className:"mbin mtight"},"\u22c5"),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l"))))))))),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.yg)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,m.yg)("span",{parentName:"p",className:"math math-inline"},(0,m.yg)("span",{parentName:"span",className:"katex"},(0,m.yg)("span",{parentName:"span",className:"katex-mathml"},(0,m.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.yg)("semantics",{parentName:"math"},(0,m.yg)("mrow",{parentName:"semantics"},(0,m.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.yg)("mi",{parentName:"mrow"},"l"),(0,m.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(l)")))),(0,m.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.yg)("span",{parentName:"span",className:"base"},(0,m.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.yg)("span",{parentName:"span",className:"mopen"},"("),(0,m.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.yg)("span",{parentName:"span",className:"mclose"},")")))))," is a level of precomputation determined by the ",(0,m.yg)("inlineCode",{parentName:"p"},"precompute_factor"),". The extended set of points facilitates faster MSM computations by allowing the MSM algorithm to leverage precomputed multiples of base points, reducing the number of point additions required during the computation."),(0,m.yg)("p",null,"The precomputation process is crucial for optimizing MSM operations, especially when dealing with large sets of points and scalars. By precomputing and storing multiples of the base points, the MSM function can more efficiently compute the scalar-point multiplications."),(0,m.yg)("h4",{id:"example-usage"},"Example Usage"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-rust"},'let device_context = DeviceContext::default_for_device(0); // Use the default device\nlet precompute_factor = 4; // Number of points to precompute\nlet mut extended_bases = HostOrDeviceSlice::cuda_malloc(expected_size).expect("Failed to allocate memory for extended bases");\n\n// Precompute the bases using the specified factor\nprecompute_bases(&points, precompute_factor, 0, &device_context, &mut extended_bases)\n    .expect("Failed to precompute bases");\n')),(0,m.yg)("h3",{id:"benchmarks"},"Benchmarks"),(0,m.yg)("p",null,"Benchmarks where performed on a Nvidia RTX 3090Ti."),(0,m.yg)("table",null,(0,m.yg)("thead",{parentName:"table"},(0,m.yg)("tr",{parentName:"thead"},(0,m.yg)("th",{parentName:"tr",align:null},"Pre-computation factor"),(0,m.yg)("th",{parentName:"tr",align:null},"bn254 size ",(0,m.yg)("inlineCode",{parentName:"th"},"2^20")," MSM, ms."),(0,m.yg)("th",{parentName:"tr",align:null},"bn254 size ",(0,m.yg)("inlineCode",{parentName:"th"},"2^12")," MSM, size ",(0,m.yg)("inlineCode",{parentName:"th"},"2^10")," batch, ms."),(0,m.yg)("th",{parentName:"tr",align:null},"bls12-381 size ",(0,m.yg)("inlineCode",{parentName:"th"},"2^20")," MSM, ms."),(0,m.yg)("th",{parentName:"tr",align:null},"bls12-381 size ",(0,m.yg)("inlineCode",{parentName:"th"},"2^12")," MSM, size ",(0,m.yg)("inlineCode",{parentName:"th"},"2^10")," batch, ms."))),(0,m.yg)("tbody",{parentName:"table"},(0,m.yg)("tr",{parentName:"tbody"},(0,m.yg)("td",{parentName:"tr",align:null},"1"),(0,m.yg)("td",{parentName:"tr",align:null},"14.1"),(0,m.yg)("td",{parentName:"tr",align:null},"82.8"),(0,m.yg)("td",{parentName:"tr",align:null},"25.5"),(0,m.yg)("td",{parentName:"tr",align:null},"136.7")),(0,m.yg)("tr",{parentName:"tbody"},(0,m.yg)("td",{parentName:"tr",align:null},"2"),(0,m.yg)("td",{parentName:"tr",align:null},"11.8"),(0,m.yg)("td",{parentName:"tr",align:null},"76.6"),(0,m.yg)("td",{parentName:"tr",align:null},"20.3"),(0,m.yg)("td",{parentName:"tr",align:null},"123.8")),(0,m.yg)("tr",{parentName:"tbody"},(0,m.yg)("td",{parentName:"tr",align:null},"4"),(0,m.yg)("td",{parentName:"tr",align:null},"10.9"),(0,m.yg)("td",{parentName:"tr",align:null},"73.8"),(0,m.yg)("td",{parentName:"tr",align:null},"18.1"),(0,m.yg)("td",{parentName:"tr",align:null},"117.8")),(0,m.yg)("tr",{parentName:"tbody"},(0,m.yg)("td",{parentName:"tr",align:null},"8"),(0,m.yg)("td",{parentName:"tr",align:null},"10.6"),(0,m.yg)("td",{parentName:"tr",align:null},"73.7"),(0,m.yg)("td",{parentName:"tr",align:null},"17.2"),(0,m.yg)("td",{parentName:"tr",align:null},"116.0")))))}c.isMDXComponent=!0},1873:(e,a,t)=>{t(6540)}}]);