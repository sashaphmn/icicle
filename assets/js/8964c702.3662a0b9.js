"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7260],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(8168),i=(n(6540),n(5680));n(1873);const a={},o="Architecture Overview",c={unversionedId:"icicle/arch_overview",id:"icicle/arch_overview",title:"Architecture Overview",description:"ICICLE v3 is designed with flexibility and extensibility in mind, offering a robust framework that supports multiple compute backends and accommodates various cryptographic needs. This section provides an overview of ICICLE's architecture, highlighting its open and closed components, multi-device support, and extensibility.",source:"@site/docs/icicle/arch_overview.md",sourceDirName:"icicle",slug:"/icicle/arch_overview",permalink:"/icicle/arch_overview",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/arch_overview.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1731255581,formattedLastUpdatedAt:"11/10/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ICICLE Golang Usage Guide",permalink:"/icicle/programmers_guide/go"},next:{title:"CUDA Backend",permalink:"/icicle/install_cuda_backend"}},l={},s=[{value:"Frontend and CPU Backend",id:"frontend-and-cpu-backend",level:3},{value:"CUDA Backend",id:"cuda-backend",level:2},{value:"Multi-Device Support",id:"multi-device-support",level:2},{value:"Build Your Own Backend",id:"build-your-own-backend",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"architecture-overview"},"Architecture Overview"),(0,i.yg)("p",null,"ICICLE v3 is designed with flexibility and extensibility in mind, offering a robust framework that supports multiple compute backends and accommodates various cryptographic needs. This section provides an overview of ICICLE's architecture, highlighting its open and closed components, multi-device support, and extensibility."),(0,i.yg)("h3",{id:"frontend-and-cpu-backend"},"Frontend and CPU Backend"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Frontend (FE):")," The ICICLE frontend is open-source and designed to provide a unified API across different programming languages, including C++, Rust, and Go. This frontend abstracts the complexity of working with different backends, allowing developers to write backend-agnostic code that can be deployed across various platforms."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"CPU Backend:")," ICICLE includes an open-source CPU backend that allows for development and testing on standard hardware. This backend is ideal for prototyping and for environments where specialized hardware is not available.")),(0,i.yg)("h2",{id:"cuda-backend"},"CUDA Backend"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"CUDA Backend:")," ICICLE also includes a high-performance CUDA backend that is closed-source. This backend is optimized for NVIDIA GPUs and provides significant acceleration for cryptographic operations. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Installation and Licensing:")," The CUDA backend needs to be downloaded and installed. Refer to the ",(0,i.yg)("a",{parentName:"li",href:"/icicle/install_cuda_backend"},"installation guide")," for detailed instructions.")),(0,i.yg)("h2",{id:"multi-device-support"},"Multi-Device Support"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Scalability:")," ICICLE supports multi-device configurations, enabling the distribution of workloads across multiple GPUs or other hardware accelerators. This feature allows for scaling ZK proofs and other cryptographic operations across larger data centers or high-performance computing environments.")),(0,i.yg)("h2",{id:"build-your-own-backend"},"Build Your Own Backend"),(0,i.yg)("p",null,"ICICLE is designed to be extensible, allowing developers to integrate new backends or customize existing ones to suit their specific needs. The architecture supports:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Custom Backends:")," Developers can create their own backends to leverage different hardware or optimize for specific use cases. The process of building and integrating a custom backend is documented in the ",(0,i.yg)("a",{parentName:"li",href:"/icicle/build_your_own_backend"},"Build Your Own Backend")," section."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Pluggable Components:")," ICICLE's architecture allows for easy integration of additional cryptographic primitives or enhancements, ensuring that the framework can evolve with the latest advancements in cryptography and hardware acceleration.")))}p.isMDXComponent=!0},1873:(e,t,n)=>{n(6540)}}]);