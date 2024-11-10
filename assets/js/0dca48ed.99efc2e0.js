"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3128],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,h=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));t(1873);const i={},o="ICICLE integrated provers",l={unversionedId:"icicle/integrations",id:"icicle/integrations",title:"ICICLE integrated provers",description:"ICICLE has been used by companies and projects such as Celer Network, Consensys Gnark, EZKL, ZKWASM and others to accelerate their ZK proving pipeline.",source:"@site/docs/icicle/integrations.md",sourceDirName:"icicle",slug:"/icicle/integrations",permalink:"/icicle/integrations",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/integrations.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1731255581,formattedLastUpdatedAt:"11/10/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Run ICICLE on Google Colab",permalink:"/icicle/colab-instructions"},next:{title:"Ingonyama Grant programs",permalink:"/grants"}},s={},c=[{value:"A primer to building your own integrations",id:"a-primer-to-building-your-own-integrations",level:2},{value:"Using ICICLE integrated provers",id:"using-icicle-integrated-provers",level:2},{value:"Gnark",id:"gnark",level:3},{value:"Halo2",id:"halo2",level:3}],p={toc:c},g="wrapper";function u(e){let{components:n,...i}=e;return(0,a.yg)(g,(0,r.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"icicle-integrated-provers"},"ICICLE integrated provers"),(0,a.yg)("p",null,"ICICLE has been used by companies and projects such as ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/celer-network"},"Celer Network"),", ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Consensys/gnark"},"Consensys Gnark"),", ",(0,a.yg)("a",{parentName:"p",href:"https://blog.ezkl.xyz/post/acceleration/"},"EZKL"),", ",(0,a.yg)("a",{parentName:"p",href:"https://twitter.com/DelphinusLab/status/1762604988797513915"},"ZKWASM")," and others to accelerate their ZK proving pipeline."),(0,a.yg)("p",null,"Many of these integrations have been a collaboration between Ingonyama and the integrating company. We have learned a lot about designing GPU based ZK provers."),(0,a.yg)("p",null,"If you're interested in understanding these integrations better or learning how you can use ICICLE to accelerate your existing ZK proving pipeline this is the place for you."),(0,a.yg)("h2",{id:"a-primer-to-building-your-own-integrations"},"A primer to building your own integrations"),(0,a.yg)("p",null,"Lets illustrate an ICICLE integration, so you can understand the core API and design overview of ICICLE."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"ICICLE architecture",src:t(7861).A,width:"906",height:"878"})),(0,a.yg)("p",null,"Engineers usually use a cryptographic library to implement their ZK protocols. These libraries implement efficient primitives which are used as building blocks for the protocol; ICICLE is such a library. The difference is that ICICLE is designed from the start to run on GPUs; the Rust and Golang APIs abstract away all low level CUDA details. Our goal was to allow developers with no GPU experience to quickly get started with ICICLE."),(0,a.yg)("p",null,"A developer may use ICICLE with two main approaches in mind."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Drop-in replacement approach."),(0,a.yg)("li",{parentName:"ol"},"End-to-End GPU replacement approach.")),(0,a.yg)("p",null,"The first approach for GPU-accelerating your Prover with ICICLE is quick to implement, but it has limitations, such as reduced memory optimization and limited protocol tuning for GPUs. It's a solid starting point, but those committed to fully leveraging GPU acceleration should consider a more comprehensive approach."),(0,a.yg)("p",null,"A End-to-End GPU replacement means performing the entire ZK proof on the GPU. This approach will reduce latency to a minimum and requires you to change the way you implement the protocol to be more GPU friendly. This approach will take full advantage of GPU acceleration. Redesigning your prover this way may take more engineering effort but we promise you that its worth it!"),(0,a.yg)("h2",{id:"using-icicle-integrated-provers"},"Using ICICLE integrated provers"),(0,a.yg)("p",null,"Here we cover how a developer can run existing circuits on ICICLE integrated provers."),(0,a.yg)("h3",{id:"gnark"},"Gnark"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/Consensys/gnark"},"Gnark")," officially supports GPU proving with ICICLE. Currently only Groth16 on curve ",(0,a.yg)("inlineCode",{parentName:"p"},"BN254")," is supported. This means that if you are currently using Gnark to write your circuits you can enjoy GPU acceleration without making many changes."),(0,a.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"Currently ICICLE has been merged to Gnark ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Consensys/gnark"},"master branch"),", however the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Consensys/gnark/releases/tag/v0.9.1"},"latest release")," is from October 2023."))),(0,a.yg)("p",null,"Make sure your golang circuit project has ",(0,a.yg)("inlineCode",{parentName:"p"},"gnark")," as a dependency and that you are using the master branch for now."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"go get  github.com/consensys/gnark@master\n")),(0,a.yg)("p",null,"You should see two indirect dependencies added."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"...\n    github.com/ingonyama-zk/icicle v0.1.0 // indirect\n    github.com/ingonyama-zk/iciclegnark v0.1.1 // indirect\n...\n")),(0,a.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"As you may notice we are using ICICLE v0.1 here since golang bindings are only support in ICICLE v0.1 for the time being."))),(0,a.yg)("p",null,"To switch over to ICICLE proving, make sure to change the backend you are using, below is an example of how this should be done."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// toggle on\nproofIci, err := groth16.Prove(ccs, pk, secretWitness, backend.WithIcicleAcceleration())\n\n// toggle off\nproof, err := groth16.Prove(ccs, pk, secretWitness)\n")),(0,a.yg)("p",null,"Now that you have enabled ",(0,a.yg)("inlineCode",{parentName:"p"},"WithIcicleAcceleration")," backend simple change the way your run your circuits to:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"go run -tags=icicle main.go\n")),(0,a.yg)("p",null,"Your logs should look something like this if everything went as expected."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"13:12:05 INF compiling circuit\n13:12:05 INF parsed circuit inputs nbPublic=1 nbSecret=1\n13:12:05 INF building constraint builder nbConstraints=3\n13:12:05 DBG precomputing proving key in GPU acceleration=icicle backend=groth16 curve=bn254 nbConstraints=3\n13:12:05 DBG constraint system solver done nbConstraints=3 took=0.070259\n13:12:05 DBG prover done acceleration=icicle backend=groth16 curve=bn254 nbConstraints=3 took=80.356684\n13:12:05 DBG verifier done backend=groth16 curve=bn254 took=1.843888\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"acceleration=icicle")," indicates that the prover is running in acceleration mode with ICICLE."),(0,a.yg)("p",null,"You can reference the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Consensys/gnark?tab=readme-ov-file#gpu-support"},"Gnark docs")," for further information."),(0,a.yg)("h3",{id:"halo2"},"Halo2"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/zkonduit/halo2"},"Halo2")," fork integrated with ICICLE for GPU acceleration. This means that you can run your existing Halo2 circuits with GPU acceleration just by activating a feature flag."),(0,a.yg)("p",null,"To enable GPU acceleration just enable ",(0,a.yg)("inlineCode",{parentName:"p"},"icicle_gpu")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/zkonduit/halo2/blob/3d7b5e61b3052680ccb279e05bdcc21dd8a8fedf/halo2_proofs/Cargo.toml#L102"},"feature flag"),"."),(0,a.yg)("p",null,"This feature flag will seamlessly toggle on GPU acceleration for you."))}u.isMDXComponent=!0},7861:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/architecture-high-level-3c1ae0f257c7921b77378aa3daaab41c.png"},1873:(e,n,t)=>{t(6540)}}]);