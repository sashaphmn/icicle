"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9478],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>u});var t=n(6540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(n),m=i,u=g["".concat(s,".").concat(m)]||g[m]||p[m]||l;return n?t.createElement(u,r(r({ref:a},c),{},{components:n})):t.createElement(u,r({ref:a},c))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},791:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=n(8168),i=(n(6540),n(5680));n(1873);const l={},r="Build ICICLE from source",o={unversionedId:"icicle/build_from_source",id:"icicle/build_from_source",title:"Build ICICLE from source",description:"This guide will help you get started with building, testing, and installing ICICLE, whether you're using C++, Rust, or Go. It also covers installation of the CUDA backend and important build options.",source:"@site/docs/icicle/build_from_source.md",sourceDirName:"icicle",slug:"/icicle/build_from_source",permalink:"/icicle/build_from_source",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/build_from_source.md",tags:[],version:"current",lastUpdatedBy:"yshekel",lastUpdatedAt:1728555218,formattedLastUpdatedAt:"10/10/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Getting started Guide",permalink:"/icicle/getting_started"},next:{title:"Icicle Programmer's Guide",permalink:"/icicle/programmers_guide/general"}},s={},d=[{value:"Building and Testing ICICLE frontend",id:"building-and-testing-icicle-frontend",level:2},{value:"C++: Build, Test, and Install (Frontend)",id:"c-build-test-and-install-frontend",level:3},{value:"Build Commands",id:"build-commands",level:4},{value:"Build Flags",id:"build-flags",level:4},{value:"Features",id:"features",level:4},{value:"Rust: Build, Test, and Install",id:"rust-build-test-and-install",level:3},{value:"Use as cargo dependency",id:"use-as-cargo-dependency",level:4},{value:"Go: Build, Test, and Install (TODO)",id:"go-build-test-and-install-todo",level:3}],c={toc:d},g="wrapper";function p(e){let{components:a,...n}=e;return(0,i.yg)(g,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"build-icicle-from-source"},"Build ICICLE from source"),(0,i.yg)("p",null,"This guide will help you get started with building, testing, and installing ICICLE, whether you're using C++, Rust, or Go. It also covers installation of the CUDA backend and important build options."),(0,i.yg)("h2",{id:"building-and-testing-icicle-frontend"},"Building and Testing ICICLE frontend"),(0,i.yg)("h3",{id:"c-build-test-and-install-frontend"},"C++: Build, Test, and Install (Frontend)"),(0,i.yg)("p",null,"ICICLE can be built and tested in C++ using CMake. The build process is straightforward, but there are several flags you can use to customize the build for your needs."),(0,i.yg)("h4",{id:"build-commands"},"Build Commands"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Clone the ICICLE repository:")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ingonyama-zk/icicle.git\ncd icicle\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Configure the build:")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir -p build && rm -rf build/*\ncmake -S icicle -B build -DFIELD=babybear\n")))),(0,i.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"To specify the field, use the flag -DFIELD=field, where field can be one of the following: babybear, stark252, m31."),(0,i.yg)("p",{parentName:"div"},"To specify a curve, use the flag -DCURVE=curve, where curve can be one of the following: bn254, bls12_377, bls12_381, bw6_761, grumpkin."))),(0,i.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"If you have access to cuda backend repo, it can be built along ICICLE frontend by adding the following to the cmake command"),(0,i.yg)("ul",{parentName:"div"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-DCUDA_BACKEND=local")," # if you have it locally"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-DCUDA_BACKEND=<commit|branch>")," # to pull CUDA backend, given you have access")))),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Build the project:")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cmake --build build -j\n")),(0,i.yg)("p",{parentName:"li"},"This is building the ",(0,i.yg)("a",{parentName:"p",href:"/icicle/libraries#icicle-device"},"libicicle_device")," and the ",(0,i.yg)("a",{parentName:"p",href:"/icicle/libraries#icicle-core"},"libicicle_field_babybear")," frontend lib that correspond to the field or curve.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Link:"),"\nLink you application (or library) to ICICLE:"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cmake"},"target_link_libraries(yourApp PRIVATE icicle_field_babybear icicle_device)\n")),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Installation (optional):"),"\nTo install the libs, specify the install prefix in the ",(0,i.yg)("a",{parentName:"li",href:"/icicle/build_from_source#build-commands"},"cmake command"),(0,i.yg)("inlineCode",{parentName:"li"},"-DCMAKE_INSTALL_PREFIX=/install/dir/"),". Default install path on linux is ",(0,i.yg)("inlineCode",{parentName:"li"},"/usr/local")," if not specified. For other systems it may differ. The cmake command will print it to the log")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- CMAKE_INSTALL_PREFIX=/install/dir/for/cmake/install\n")),(0,i.yg)("p",null,"Then after building, use cmake to install the libraries:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"cmake -S icicle -B build -DFIELD=babybear -DCMAKE_INSTALL_PREFIX=/path/to/install/dir/\ncmake --build build -j # build\ncmake --install build # install icicle to /path/to/install/dir/\n")),(0,i.yg)("ol",{start:6},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Run tests (optional):"),"\nAdd ",(0,i.yg)("inlineCode",{parentName:"li"},"-DBUILD_TESTS=ON")," to the ",(0,i.yg)("a",{parentName:"li",href:"/icicle/build_from_source#build-commands"},"cmake command")," and build.\nExecute all tests")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cmake -S icicle -B build -DFIELD=babybear -DBUILD_TESTS=ON\ncmake --build build -j\ncd build/tests\nctest\n")),(0,i.yg)("p",null,"or choose the test-suite"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'./build/tests/test_field_api # or another test suite\n# can specify tests using regex. For example for tests with ntt in the name:\n./build/tests/test_field_api --gtest_filter="*ntt*"\n')),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Most tests assume a cuda backend exists and will fail otherwise if cannot find a CUDA device."))),(0,i.yg)("h4",{id:"build-flags"},"Build Flags"),(0,i.yg)("p",null,"You can customize your ICICLE build with the following flags:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-DCPU_BACKEND=ON/OFF"),": Enable or disable built-in CPU backend. ",(0,i.yg)("inlineCode",{parentName:"li"},"default=ON"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-DCMAKE_INSTALL_PREFIX=/install/dir"),": Specify install directory. ",(0,i.yg)("inlineCode",{parentName:"li"},"default=/usr/local"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-DBUILD_TESTS=ON/OFF"),": Enable or disable tests. ",(0,i.yg)("inlineCode",{parentName:"li"},"default=OFF"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-DBUILD_BENCHMARKS=ON/OFF"),": Enable or disable benchmarks. ",(0,i.yg)("inlineCode",{parentName:"li"},"default=OFF"),".")),(0,i.yg)("h4",{id:"features"},"Features"),(0,i.yg)("p",null,"By default, all ",(0,i.yg)("a",{parentName:"p",href:"/icicle/libraries#supported-curves-and-operations"},"features")," are enabled.\nThis is since installed backends may implement and register all APIs. Missing APIs in the frontend would cause linkage to fail due to missing symbols. Therefore by default we include them in the frontend part too."),(0,i.yg)("p",null,"To disable features, add the following to the cmake command."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ntt: ",(0,i.yg)("inlineCode",{parentName:"li"},"-DNTT=OFF")),(0,i.yg)("li",{parentName:"ul"},"msm: ",(0,i.yg)("inlineCode",{parentName:"li"},"-DMSM=OFF")),(0,i.yg)("li",{parentName:"ul"},"g2 msm: ",(0,i.yg)("inlineCode",{parentName:"li"},"-DG2=OFF")),(0,i.yg)("li",{parentName:"ul"},"ecntt: ",(0,i.yg)("inlineCode",{parentName:"li"},"-DECNTT=OFF")),(0,i.yg)("li",{parentName:"ul"},"extension field: ",(0,i.yg)("inlineCode",{parentName:"li"},"-DEXT_FIELD=OFF"))),(0,i.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Disabling features is useful when developing with a backend that is slow to compile (e.g. CUDA backend);"))),(0,i.yg)("h3",{id:"rust-build-test-and-install"},"Rust: Build, Test, and Install"),(0,i.yg)("p",null,"To build and test ICICLE in Rust, follow these steps:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Navigate to the Rust bindings directory:"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd wrappers/rust # or go to a specific field/curve 'cd wrappers/rust/icicle-fields/icicle-babybear'\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Build the Rust project:"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,i.yg)("p",null,"By default, all ",(0,i.yg)("a",{parentName:"p",href:"#features"},"supported features are enabled"),".\nCargo features are used to disable features, rather than enable them, for the reason explained ",(0,i.yg)("a",{parentName:"p",href:"#features"},"here"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"no_g2")," to disable G2 MSM"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"no_ecntt")," to disable ECNTT")),(0,i.yg)("p",null,"They can be disabled as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cargo build --release --features=no_ecntt,no_g2\n")),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"If you have access to cuda backend repo, it can be built along ICICLE frontend by using the following cargo features:"),(0,i.yg)("ul",{parentName:"div"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cuda_backend")," : if the cuda backend resides in ",(0,i.yg)("inlineCode",{parentName:"li"},"icicle/backend/cuda")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"pull_cuda_backend")," : to pull main branch and build it")))),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Run tests:"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cargo test # optional: --features=no_ecntt,no_g2,cuda_backend\n")),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Most tests assume a CUDA backend is installed and fail otherwise."))),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Install the library:"))),(0,i.yg)("p",null,"By default, the libraries are installed to the ",(0,i.yg)("inlineCode",{parentName:"p"},"target/<buildmode>/deps/icicle")," dir. If you want them installed elsewhere, define the env variable:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"export ICICLE_INSTALL_DIR=/path/to/install/dir\n")),(0,i.yg)("h4",{id:"use-as-cargo-dependency"},"Use as cargo dependency"),(0,i.yg)("p",null,"In cargo.toml, specify the ICICLE libs to use:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'[dependencies]\nicicle-runtime = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\nicicle-babybear = { git = "https://github.com/ingonyama-zk/icicle.git", branch="main" }\n# add other ICICLE crates here if need additional fields/curves\n')),(0,i.yg)("p",null,"Can specify ",(0,i.yg)("inlineCode",{parentName:"p"},"branch = <branch-name>")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"tag = <tag-name>")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"rev = <commit-id>"),"."),(0,i.yg)("p",null,"To disable features:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'icicle-bls12-377 = { git = "https://github.com/ingonyama-zk/icicle.git", features = ["no_g2"] }\n')),(0,i.yg)("p",null,"As explained above, the libs will be built and installed to ",(0,i.yg)("inlineCode",{parentName:"p"},"target/<buildmode>/deps/icicle")," so you can easily link to them. Alternatively you can set ",(0,i.yg)("inlineCode",{parentName:"p"},"ICICLE_INSTALL_DIR")," env variable for a custom install directory."),(0,i.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Make sure to install icicle libs when installing a library/application that depends on icicle such that it is located at runtime."))),(0,i.yg)("h3",{id:"go-build-test-and-install-todo"},"Go: Build, Test, and Install (TODO)"),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"To install CUDA backend and license click ",(0,i.yg)("a",{parentName:"strong",href:"/icicle/install_cuda_backend#installation"},"here"))))}p.isMDXComponent=!0},1873:(e,a,n)=>{n(6540)}}]);