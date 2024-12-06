"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[8540],{1426:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"icicle/rust-bindings/msm-pre-computation","title":"MSM Pre computation","description":"To understand the theory behind MSM pre computation technique refer to Niall Emmart\'s talk.","source":"@site/versioned_docs/version-2.8.0/icicle/rust-bindings/msm-pre-computation.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/msm-pre-computation","permalink":"/2.8.0/icicle/rust-bindings/msm-pre-computation","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/rust-bindings/msm-pre-computation.md","tags":[],"version":"2.8.0","lastUpdatedBy":"Yuval Shekel","lastUpdatedAt":1733500172000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"MSM","permalink":"/2.8.0/icicle/rust-bindings/msm"},"next":{"title":"NTT","permalink":"/2.8.0/icicle/rust-bindings/ntt"}}');var a=n(4848),t=n(8453);const l={},r="MSM Pre computation",c={},m=[{value:"<code>precompute_points</code>",id:"precompute_points",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:4},{value:"Description",id:"description",level:4},{value:"Example Usage",id:"example-usage",level:4}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"msm-pre-computation",children:"MSM Pre computation"})}),"\n",(0,a.jsxs)(e.p,{children:["To understand the theory behind MSM pre computation technique refer to Niall Emmart's ",(0,a.jsx)(e.a,{href:"https://youtu.be/KAWlySN7Hm8?feature=shared&t=1734",children:"talk"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"precompute_points",children:(0,a.jsx)(e.code,{children:"precompute_points"})}),"\n",(0,a.jsx)(e.p,{children:"Precomputes bases for the multi-scalar multiplication (MSM) by extending each base point with its multiples, facilitating more efficient MSM calculations."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:"pub fn precompute_points<C: Curve + MSM<C>>(\n    points: &(impl HostOrDeviceSlice<Affine<C>> + ?Sized),\n    msm_size: i32,\n    cfg: &MSMConfig,\n    output_bases: &mut DeviceSlice<Affine<C>>,\n) -> IcicleResult<()>\n"})}),"\n",(0,a.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"points"})}),": The original set of affine points ((P_1, P_2, ..., P_n)) to be used in the MSM. For batch MSM operations, this should include all unique points concatenated together."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"msm_size"})}),": The size of a single msm in order to determine optimal parameters."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"cfg"})}),": The MSM configuration parameters."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"output_bases"})}),": The output buffer for the extended bases. Its size must be ",(0,a.jsx)(e.code,{children:"points.len() * precompute_factor"}),". This buffer should be allocated on the device for GPU computations."]}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Ok(())"})," if the operation is successful, or an ",(0,a.jsx)(e.code,{children:"IcicleResult"})," error otherwise."]}),"\n",(0,a.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:["This function extends each provided base point ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"P"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"(P)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," with its multiples ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mi,{children:"l"})]}),(0,a.jsx)(e.mi,{children:"P"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mi,{children:"l"})]})]}),(0,a.jsx)(e.mi,{children:"P"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"p"}),(0,a.jsx)(e.mi,{children:"r"}),(0,a.jsx)(e.mi,{children:"e"}),(0,a.jsx)(e.mi,{children:"c"}),(0,a.jsx)(e.mi,{children:"o"}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mi,{children:"p"}),(0,a.jsx)(e.mi,{children:"u"}),(0,a.jsx)(e.mi,{children:"t"}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"e"}),(0,a.jsx)(e.mi,{children:"f"})]}),(0,a.jsx)(e.mi,{children:"a"}),(0,a.jsx)(e.mi,{children:"c"}),(0,a.jsx)(e.mi,{children:"t"}),(0,a.jsx)(e.mi,{children:"o"}),(0,a.jsx)(e.mi,{children:"r"}),(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"}),(0,a.jsx)(e.mo,{children:"\u22c5"}),(0,a.jsx)(e.mi,{children:"l"})]})]}),(0,a.jsx)(e.mi,{children:"P"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"(2^lP, 2^{2l}P, ..., 2^{(precompute_factor - 1) \\cdot l}P)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.138em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mtight",children:"2"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord",children:"..."}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.888em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"reco"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3448em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.3488em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"f"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.2901em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"c"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"or"}),(0,a.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mord mtight",children:"1"}),(0,a.jsx)(e.span,{className:"mclose mtight",children:")"}),(0,a.jsx)(e.span,{className:"mbin mtight",children:"\u22c5"}),(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", where ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"l"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"(l)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," is a level of precomputation determined by the ",(0,a.jsx)(e.code,{children:"precompute_factor"}),". The extended set of points facilitates faster MSM computations by allowing the MSM algorithm to leverage precomputed multiples of base points, reducing the number of point additions required during the computation."]}),"\n",(0,a.jsx)(e.p,{children:"The precomputation process is crucial for optimizing MSM operations, especially when dealing with large sets of points and scalars. By precomputing and storing multiples of the base points, the MSM function can more efficiently compute the scalar-point multiplications."}),"\n",(0,a.jsx)(e.h4,{id:"example-usage",children:"Example Usage"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'let cfg = MSMConfig::default();\nlet precompute_factor = 4; // Number of points to precompute\nlet mut extended_bases = HostOrDeviceSlice::cuda_malloc(expected_size).expect("Failed to allocate memory for extended bases");\n\n// Precompute the bases using the specified factor\nprecompute_points(&points, msm_size, &cfg, &mut extended_bases)\n    .expect("Failed to precompute bases");\n'})})]})}function d(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>l,x:()=>r});var i=n(6540);const a={},t=i.createContext(a);function l(s){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:l(s.components),i.createElement(t.Provider,{value:e},s.children)}}}]);