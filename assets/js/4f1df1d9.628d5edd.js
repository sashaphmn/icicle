"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[712],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(8168),i=(r(6540),r(5680));r(1873);const a={},o="ECNTT",c={unversionedId:"icicle/rust-bindings/ecntt",id:"icicle/rust-bindings/ecntt",title:"ECNTT",description:"ECNTT Method",source:"@site/docs/icicle/rust-bindings/ecntt.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/ecntt",permalink:"/icicle/rust-bindings/ecntt",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/ecntt.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1729608438,formattedLastUpdatedAt:"10/22/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"NTT",permalink:"/icicle/rust-bindings/ntt"},next:{title:"Vector Operations API",permalink:"/icicle/rust-bindings/vec-ops"}},l={},s=[{value:"ECNTT Method",id:"ecntt-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ecntt"},"ECNTT"),(0,i.yg)("h2",{id:"ecntt-method"},"ECNTT Method"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ecntt")," function computes the Elliptic Curve Number Theoretic Transform (EC-NTT) or its inverse on a batch of points of a curve."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn ecntt<C: Curve>(\n    input: &(impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n    dir: NTTDir,\n    cfg: &NTTConfig<C::ScalarField>,\n    output: &mut (impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n) -> Result<(), eIcicleError>\n")),(0,i.yg)("h2",{id:"parameters"},"Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"input")),": The input data as a slice of ",(0,i.yg)("inlineCode",{parentName:"li"},"Projective<C>"),". This represents points on a specific elliptic curve ",(0,i.yg)("inlineCode",{parentName:"li"},"C"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"dir")),": The direction of the NTT. It can be ",(0,i.yg)("inlineCode",{parentName:"li"},"NTTDir::kForward")," for forward NTT or ",(0,i.yg)("inlineCode",{parentName:"li"},"NTTDir::kInverse")," for inverse NTT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"cfg")),": The NTT configuration object of type ",(0,i.yg)("inlineCode",{parentName:"li"},"NTTConfig<C::ScalarField>"),". This object specifies parameters for the NTT computation, such as the batch size and algorithm to use."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"output")),": The output buffer to write the results into. This should be a slice of ",(0,i.yg)("inlineCode",{parentName:"li"},"Projective<C>")," with the same size as the input.")),(0,i.yg)("h2",{id:"return-value"},"Return Value"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"Result<(), eIcicleError>")),": This function returns an ",(0,i.yg)("inlineCode",{parentName:"li"},"eIcicleError")," which is a wrapper type that indicates success or failure of the NTT computation. On success, it contains ",(0,i.yg)("inlineCode",{parentName:"li"},"Ok(())"),".")))}d.isMDXComponent=!0},1873:(e,t,r)=>{r(6540)}}]);