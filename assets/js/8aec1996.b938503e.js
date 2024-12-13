"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[7877],{7364:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"icicle/core","title":"ICICLE Core","description":"ICICLE Core is a library written in C++/CUDA. All the ICICLE primitives are implemented within ICICLE Core.","source":"@site/versioned_docs/version-2.8.0/icicle/core.md","sourceDirName":"icicle","slug":"/icicle/core","permalink":"/2.8.0/icicle/core","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/core.md","tags":[],"version":"2.8.0","lastUpdatedBy":"Karthik Inbasekar","lastUpdatedAt":1734082449000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Getting started","permalink":"/2.8.0/icicle/introduction"},"next":{"title":"ICICLE Primitives","permalink":"/2.8.0/icicle/primitives/overview"}}');var l=n(4848),s=n(8453);const r={},d="ICICLE Core",c={},o=[{value:"Supported curves, fields and operations",id:"supported-curves-fields-and-operations",level:2},{value:"Supported curves and operations",id:"supported-curves-and-operations",level:3},{value:"Supported fields and operations",id:"supported-fields-and-operations",level:3},{value:"Supported hashes",id:"supported-hashes",level:3},{value:"Compilation strategies",id:"compilation-strategies",level:2},{value:"Compiling for a field",id:"compiling-for-a-field",level:3},{value:"Compiling for a curve",id:"compiling-for-a-curve",level:3},{value:"Compilation options",id:"compilation-options",level:3},{value:"EXT_FIELD",id:"ext_field",level:4},{value:"G2",id:"g2",level:4},{value:"ECNTT",id:"ecntt",level:4},{value:"MSM",id:"msm",level:4},{value:"BUILD_HASH",id:"build_hash",level:4},{value:"BUILD_TESTS",id:"build_tests",level:4},{value:"BUILD_BENCHMARKS",id:"build_benchmarks",level:4},{value:"DEVMODE",id:"devmode",level:4},{value:"Linking",id:"linking",level:2},{value:"Writing new bindings for ICICLE",id:"writing-new-bindings-for-icicle",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"icicle-core",children:"ICICLE Core"})}),"\n",(0,l.jsx)(i.p,{children:"ICICLE Core is a library written in C++/CUDA. All the ICICLE primitives are implemented within ICICLE Core."}),"\n",(0,l.jsxs)(i.p,{children:["The Core is split into logical modules that can be compiled into static libraries using different ",(0,l.jsx)(i.a,{href:"#compilation-strategies",children:"strategies"}),". You can then ",(0,l.jsx)(i.a,{href:"#linking",children:"link"})," these libraries with your C++ project or write your own ",(0,l.jsx)(i.a,{href:"#writing-new-bindings-for-icicle",children:"bindings"})," for other programming languages. If you want to use ICICLE with existing bindings please refer to the ",(0,l.jsx)(i.a,{href:"/icicle/rust-bindings",children:"Rust"})," or ",(0,l.jsx)(i.a,{href:"/icicle/golang-bindings",children:"Golang"})," bindings documentation."]}),"\n",(0,l.jsx)(i.h2,{id:"supported-curves-fields-and-operations",children:"Supported curves, fields and operations"}),"\n",(0,l.jsx)(i.h3,{id:"supported-curves-and-operations",children:"Supported curves and operations"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Operation\\Curve"}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.a,{href:"https://neuromancer.sk/std/bn/bn254",children:"bn254"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.a,{href:"https://neuromancer.sk/std/bls/BLS12-377",children:"bls12-377"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.a,{href:"https://neuromancer.sk/std/bls/BLS12-381",children:"bls12-381"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.a,{href:"https://eprint.iacr.org/2020/351",children:"bw6-761"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:"grumpkin"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"primitives/msm",children:"MSM"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"G2"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"primitives/ntt",children:"NTT"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"ECNTT"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/include/vec_ops/vec_ops.cuh",children:"VecOps"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"polynomials/overview",children:"Polynomials"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"primitives/poseidon",children:"Poseidon"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"primitives/poseidon#the-tree-builder",children:"Merkle Tree"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"supported-fields-and-operations",children:"Supported fields and operations"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Operation\\Field"}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.a,{href:"https://eprint.iacr.org/2023/824.pdf",children:"babybear"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.a,{href:"https://docs.starknet.io/documentation/architecture_and_concepts/Cryptography/p-value/",children:"Stark252"})})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/include/vec_ops/vec_ops.cuh",children:"VecOps"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"polynomials/overview",children:"Polynomials"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.a,{href:"primitives/ntt",children:"NTT"})}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Extension Field"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u2705"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"supported-hashes",children:"Supported hashes"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Hash"}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:"Sizes"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Keccak"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:"256, 512"})]})})]}),"\n",(0,l.jsx)(i.h2,{id:"compilation-strategies",children:"Compilation strategies"}),"\n",(0,l.jsx)(i.p,{children:"Most of the codebase is curve/field agnostic, which means it can be compiled for different curves and fields. When you build ICICLE Core you choose a single curve or field. If you need multiple curves or fields, you compile ICICLE once per curve or field that is needed. It's that simple. Currently, the following choices are supported:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"#compiling-for-a-field",children:"Field mode"})," - used for STARK fields like BabyBear / Mersenne / Goldilocks. Includes field arithmetic, NTT, Poseidon, Extension fields and other primitives."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"#compiling-for-a-curve",children:"Curve mode"})," - used for SNARK curves like BN254 / BLS curves / Grumpkin / etc. Curve mode is built upon field mode, so it includes everything that field does It also includes curve operations / MSM / ECNTT / G2 and other curve-related primitives."]}),"\n"]}),"\n",(0,l.jsx)(i.admonition,{type:"info",children:(0,l.jsxs)(i.p,{children:["If you only want to use a curve's scalar or base field, you still need to use curve mode. You can disable MSM with ",(0,l.jsx)(i.a,{href:"#compilation-options",children:"options"})]})}),"\n",(0,l.jsx)(i.h3,{id:"compiling-for-a-field",children:"Compiling for a field"}),"\n",(0,l.jsx)(i.p,{children:"You can compile ICICLE for a field using this command:"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sh",children:"cd icicle\nmkdir -p build\ncmake -DFIELD=<FIELD> -S . -B build\ncmake --build build -j\n"})}),"\n",(0,l.jsxs)(i.p,{children:["This command will output ",(0,l.jsx)(i.code,{children:"libingo_field_<FIELD>.a"})," into ",(0,l.jsx)(i.code,{children:"build/lib"}),"."]}),"\n",(0,l.jsx)(i.h3,{id:"compiling-for-a-curve",children:"Compiling for a curve"}),"\n",(0,l.jsx)(i.admonition,{type:"note",children:(0,l.jsx)(i.p,{children:"Field related primitives will be compiled for the scalar field of the curve"})}),"\n",(0,l.jsx)(i.p,{children:"You can compile ICICLE for a SNARK curve using this command:"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sh",children:"cd icicle\nmkdir -p build\ncmake -DCURVE=<CURVE> -S . -B build\ncmake --build build -j\n"})}),"\n",(0,l.jsxs)(i.p,{children:["Where ",(0,l.jsx)(i.code,{children:"<CURVE>"})," can be one of ",(0,l.jsx)(i.code,{children:"bn254"}),"/",(0,l.jsx)(i.code,{children:"bls12_377"}),"/",(0,l.jsx)(i.code,{children:"bls12_381"}),"/",(0,l.jsx)(i.code,{children:"bw6_761"}),"/",(0,l.jsx)(i.code,{children:"grumpkin"}),"."]}),"\n",(0,l.jsxs)(i.p,{children:["This command will output both ",(0,l.jsx)(i.code,{children:"libingo_curve_<CURVE>.a"})," and ",(0,l.jsx)(i.code,{children:"libingo_field_<CURVE>.a"})," into ",(0,l.jsx)(i.code,{children:"build/lib"}),"."]}),"\n",(0,l.jsx)(i.h3,{id:"compilation-options",children:"Compilation options"}),"\n",(0,l.jsx)(i.p,{children:"There exist multiple options that allow you to customize your build or enable additional functionality."}),"\n",(0,l.jsx)(i.h4,{id:"ext_field",children:"EXT_FIELD"}),"\n",(0,l.jsxs)(i.p,{children:["Used only in ",(0,l.jsx)(i.a,{href:"#compiling-for-a-field",children:"field mode"})," to add an Extension field. Adds all supported field operations for the extension field."]}),"\n",(0,l.jsxs)(i.p,{children:["Default: ",(0,l.jsx)(i.code,{children:"OFF"})]}),"\n",(0,l.jsxs)(i.p,{children:["Usage: ",(0,l.jsx)(i.code,{children:"-DEXT_FIELD=ON"})]}),"\n",(0,l.jsx)(i.h4,{id:"g2",children:"G2"}),"\n",(0,l.jsxs)(i.p,{children:["Used only in ",(0,l.jsx)(i.a,{href:"#compiling-for-a-curve",children:"curve mode"})," to add G2 definitions. Also adds G2 MSM."]}),"\n",(0,l.jsxs)(i.p,{children:["Default: ",(0,l.jsx)(i.code,{children:"OFF"})]}),"\n",(0,l.jsxs)(i.p,{children:["Usage: ",(0,l.jsx)(i.code,{children:"-DG2=ON"})]}),"\n",(0,l.jsx)(i.h4,{id:"ecntt",children:"ECNTT"}),"\n",(0,l.jsxs)(i.p,{children:["Used only in ",(0,l.jsx)(i.a,{href:"#compiling-for-a-curve",children:"curve mode"})," to add ECNTT function."]}),"\n",(0,l.jsxs)(i.p,{children:["Default: ",(0,l.jsx)(i.code,{children:"OFF"})]}),"\n",(0,l.jsxs)(i.p,{children:["Usage: ",(0,l.jsx)(i.code,{children:"-DECNTT=ON"})]}),"\n",(0,l.jsx)(i.h4,{id:"msm",children:"MSM"}),"\n",(0,l.jsxs)(i.p,{children:["Used only in ",(0,l.jsx)(i.a,{href:"#compiling-for-a-curve",children:"curve mode"})," to add MSM function. As MSM takes a lot of time to build, you can disable it with this option to reduce compilation time."]}),"\n",(0,l.jsxs)(i.p,{children:["Default: ",(0,l.jsx)(i.code,{children:"ON"})]}),"\n",(0,l.jsxs)(i.p,{children:["Usage: ",(0,l.jsx)(i.code,{children:"-DMSM=OFF"})]}),"\n",(0,l.jsx)(i.h4,{id:"build_hash",children:"BUILD_HASH"}),"\n",(0,l.jsx)(i.p,{children:"Can be used in any mode to build a hash library. Currently it only includes Keccak hash function, but more are coming."}),"\n",(0,l.jsxs)(i.p,{children:["Default: ",(0,l.jsx)(i.code,{children:"OFF"})]}),"\n",(0,l.jsxs)(i.p,{children:["Usage: ",(0,l.jsx)(i.code,{children:"-DBUILD_HASH=ON"})]}),"\n",(0,l.jsx)(i.h4,{id:"build_tests",children:"BUILD_TESTS"}),"\n",(0,l.jsx)(i.p,{children:"Can be used in any mode to include tests runner binary."}),"\n",(0,l.jsxs)(i.p,{children:["Default: ",(0,l.jsx)(i.code,{children:"OFF"})]}),"\n",(0,l.jsxs)(i.p,{children:["USAGE: ",(0,l.jsx)(i.code,{children:"-DBUILD_TESTS=ON"})]}),"\n",(0,l.jsx)(i.h4,{id:"build_benchmarks",children:"BUILD_BENCHMARKS"}),"\n",(0,l.jsx)(i.p,{children:"Can be used in any mode to include benchmarks runner binary."}),"\n",(0,l.jsxs)(i.p,{children:["Default: ",(0,l.jsx)(i.code,{children:"OFF"})]}),"\n",(0,l.jsxs)(i.p,{children:["USAGE: ",(0,l.jsx)(i.code,{children:"-DBUILD_BENCHMARKS=ON"})]}),"\n",(0,l.jsx)(i.h4,{id:"devmode",children:"DEVMODE"}),"\n",(0,l.jsx)(i.p,{children:"Can be used in any mode to include debug symbols in the build."}),"\n",(0,l.jsxs)(i.p,{children:["Default: ",(0,l.jsx)(i.code,{children:"OFF"})]}),"\n",(0,l.jsxs)(i.p,{children:["USAGE: ",(0,l.jsx)(i.code,{children:"-DEVMODE=ON"})]}),"\n",(0,l.jsx)(i.h2,{id:"linking",children:"Linking"}),"\n",(0,l.jsxs)(i.p,{children:["To link ICICLE with your project you first need to compile ICICLE with options of your choice. After that you can use CMake ",(0,l.jsx)(i.code,{children:"target_link_libraries"})," to link with the generated static libraries and ",(0,l.jsx)(i.code,{children:"target_include_directories"})," to include ICICLE headers (located in ",(0,l.jsx)(i.code,{children:"icicle/include"}),")."]}),"\n",(0,l.jsxs)(i.p,{children:["Refer to our ",(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/examples/c%2B%2B",children:"c++ examples"})," for more info. Take a look at this ",(0,l.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/examples/c%2B%2B/msm/CMakeLists.txt#L22",children:"CMakeLists.txt"})]}),"\n",(0,l.jsx)(i.h2,{id:"writing-new-bindings-for-icicle",children:"Writing new bindings for ICICLE"}),"\n",(0,l.jsx)(i.p,{children:"Since ICICLE Core is written in CUDA / C++ its really simple to generate static libraries. These static libraries can be installed on any system and called by higher level languages such as Golang."}),"\n",(0,l.jsx)(i.p,{children:"Static libraries can be loaded into memory once and used by multiple programs, reducing memory usage and potentially improving performance. They also allow you to separate functionality into distinct modules so your static library may need to compile only specific features that you want to use."}),"\n",(0,l.jsxs)(i.p,{children:["Let's review the ",(0,l.jsx)(i.a,{href:"/2.8.0/icicle/golang-bindings",children:"Golang bindings"})," since its a pretty verbose example (compared to rust which hides it pretty well) of using static libraries. Golang has a library named ",(0,l.jsx)(i.code,{children:"CGO"})," which can be used to link static libraries. Here's a basic example on how you can use cgo to link these libraries:"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-go",children:'/*\n#cgo LDFLAGS: -L/path/to/shared/libs -lbn254 -lbls12_381 -lbls12_377 -lbw6_671\n#include "icicle.h" // make sure you use the correct header file(s)\n*/\nimport "C"\n\nfunc main() {\n  // Now you can call the C functions from the ICICLE libraries.\n  // Note that C function calls are prefixed with \'C.\' in Go code.\n\n  out := (*C.BN254_projective_t)(unsafe.Pointer(p))\n  in := (*C.BN254_affine_t)(unsafe.Pointer(affine))\n\n  C.projective_from_affine_bn254(out, in)\n}\n'})}),"\n",(0,l.jsxs)(i.p,{children:["The comments on the first line tell ",(0,l.jsx)(i.code,{children:"CGO"})," which libraries to import as well as which header files to include. You can then call methods which are part of the static library and defined in the header file, ",(0,l.jsx)(i.code,{children:"C.projective_from_affine_bn254"})," is an example."]}),"\n",(0,l.jsx)(i.p,{children:"If you wish to create your own bindings for a language of your choice we suggest you start by investigating how you can call static libraries."})]})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>d});var t=n(6540);const l={},s=t.createContext(l);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);