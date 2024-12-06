"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[5367],{7045:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"icicle/supporting-additional-curves","title":"Supporting Additional Curves","description":"We understand the need for ZK developers to use different curves, some common some more exotic. For this reason we designed ICICLE to allow developers to add any curve they desire.","source":"@site/versioned_docs/version-1.10.1/icicle/supporting-additional-curves.md","sourceDirName":"icicle","slug":"/icicle/supporting-additional-curves","permalink":"/1.10.1/icicle/supporting-additional-curves","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/supporting-additional-curves.md","tags":[],"version":"1.10.1","lastUpdatedBy":"Yuval Shekel","lastUpdatedAt":1733500172000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Multi GPU Support","permalink":"/1.10.1/icicle/multi-gpu"},"next":{"title":"Google Colab Instructions","permalink":"/1.10.1/icicle/colab-instructions"}}');var r=n(4848),o=n(8453);const t={},c="Supporting Additional Curves",l={},d=[{value:"ICICLE Core",id:"icicle-core",level:2},{value:"Adding curve_name_params.cuh",id:"adding-curve_name_paramscuh",level:3},{value:"Adding Poseidon support",id:"adding-poseidon-support",level:3},{value:"Bindings",id:"bindings",level:2},{value:"Rust",id:"rust",level:3},{value:"Limbs",id:"limbs",level:4},{value:"Primitives",id:"primitives",level:4},{value:"G2",id:"g2",level:4},{value:"Golang",id:"golang",level:3}];function a(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"supporting-additional-curves",children:"Supporting Additional Curves"})}),"\n",(0,r.jsx)(i.p,{children:"We understand the need for ZK developers to use different curves, some common some more exotic. For this reason we designed ICICLE to allow developers to add any curve they desire."}),"\n",(0,r.jsx)(i.h2,{id:"icicle-core",children:"ICICLE Core"}),"\n",(0,r.jsxs)(i.p,{children:["ICICLE core is very generic by design so all algorithms and primitives are designed to work based of configuration files ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/curves/curve_config.cuh",children:"selected during compile"})," time. This is why we compile ICICLE Core per curve."]}),"\n",(0,r.jsxs)(i.p,{children:["To add support for a new curve you must create a new file under ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/curves",children:(0,r.jsx)(i.code,{children:"icicle/curves"})}),". The file should be named ",(0,r.jsx)(i.code,{children:"<curve_name>_params.cuh"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"adding-curve_name_paramscuh",children:"Adding curve_name_params.cuh"}),"\n",(0,r.jsxs)(i.p,{children:["Start by copying ",(0,r.jsx)(i.code,{children:"bn254_params.cuh"})," contents in your params file. Params should include:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"fq_config"})," - parameters of the Base field.","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"limbs_count"})," - ",(0,r.jsx)(i.code,{children:"ceil(field_byte_size / 4)"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"modulus_bit_count"})," - bit-size of the modulus."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"num_of_reductions"})," - the number of times to reduce in reduce function. Use 2 if not sure."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"modulus"})," - modulus of the field."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"modulus_2"})," - modulus * 2."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"modulus_4"})," - modulus * 4."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"neg_modulus"})," - negated modulus."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"modulus_wide"})," - modulus represented as a double-sized integer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"modulus_squared"})," - modulus**2 represented as a double-sized integer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"modulus_squared_2"})," - 2 * modulus**2 represented as a double-sized integer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"modulus_squared_4"})," - 4 * modulus**2 represented as a double-sized integer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"m"})," - value used in multiplication. Can be computed as ",(0,r.jsx)(i.code,{children:"2**(2*modulus_bit_count) // modulus"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"one"})," - multiplicative identity."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"zero"})," - additive identity."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"montgomery_r"})," - ",(0,r.jsx)(i.code,{children:"2 ** M % modulus"})," where M is a closest (larger than) bitsize multiple of 32. E.g. 384 or 768 for bls and bw curves respectively"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"montgomery_r_inv"})," - ",(0,r.jsx)(i.code,{children:"2 ** (-M) % modulus"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"fp_config"})," - parameters of the Scalar field.\nSame as fq_config, but with additional arguments:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"omegas_count"})," - ",(0,r.jsx)(i.a,{href:"https://cryptologie.net/article/559/whats-two-adicity/",children:"two-adicity"})," of the field. And thus the maximum size of NTT."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"omegas"})," - an array of omegas for NTTs. An array of size ",(0,r.jsx)(i.code,{children:"omegas_count"}),". The ith element is equal to ",(0,r.jsx)(i.code,{children:"1.nth_root(2**(2**(omegas_count-i)))"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"inv"})," - an array of inverses of powers of two in a field. Ith element is equal to ",(0,r.jsx)(i.code,{children:"(2 ** (i+1)) ** -1"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"G1 generators points"})," - affine coordinates of the generator point."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"G2 generators points"})," - affine coordinates of the extension generator. Remove these if ",(0,r.jsx)(i.code,{children:"G2"})," is not supported."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Weierstrass b value"})," - base field element equal to value of ",(0,r.jsx)(i.code,{children:"b"})," in the curve equation."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Weierstrass b value G2"})," - base field element equal to value of ",(0,r.jsx)(i.code,{children:"b"})," for the extension. Remove this if ",(0,r.jsx)(i.code,{children:"G2"})," is not supported."]}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"All the params are not in Montgomery form."})}),"\n",(0,r.jsxs)(i.admonition,{type:"note",children:[(0,r.jsxs)(i.p,{children:["To convert number values into ",(0,r.jsx)(i.code,{children:"storage"})," type you can use the following python function"]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"import struct\n\ndef unpack(x, field_size):\n   return ', '.join([\"0x\" + format(x, '08x') for x in struct.unpack('I' * (field_size) // 4, int(x).to_bytes(field_size, 'little'))])\n"})})]}),"\n",(0,r.jsxs)(i.p,{children:["We also require some changes to ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/curves/curve_config.cuh#L16-L29",children:(0,r.jsx)(i.code,{children:"curve_config.cuh"})}),", we need to add a new curve id."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"...\n\n#define BN254     1\n#define BLS12_381 2\n#define BLS12_377 3\n#define BW6_761   4\n#define GRUMPKIN  5\n#define <curve_name> 6\n\n...\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Make sure to modify the ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/4beda3a900eda961f39af3a496f8184c52bf3b41/icicle/curves/curve_config.cuh#L16-L29",children:"rest of the file"})," accordingly."]}),"\n",(0,r.jsxs)(i.p,{children:["Finally we must modify the ",(0,r.jsxs)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/CMakeLists.txt#L64",children:[(0,r.jsx)(i.code,{children:"make"})," file"]})," to make sure we can compile our new curve."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"set(SUPPORTED_CURVES bn254;bls12_381;bls12_377;bw6_761;grumpkin;<curve_name>)\n"})}),"\n",(0,r.jsx)(i.h3,{id:"adding-poseidon-support",children:"Adding Poseidon support"}),"\n",(0,r.jsxs)(i.p,{children:["If you want your curve to implement a Poseidon hash function or a tree builder, you will need to pre-calculate its optimized parameters.",(0,r.jsx)(i.br,{}),"\n","Copy ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/appUtils/poseidon/constants/constants_template.h",children:"constants_template.h"})," into ",(0,r.jsx)(i.code,{children:"icicle/appUtils/poseidon/constants/<CURVE>_poseidon.h"}),". Run the ",(0,r.jsx)(i.a,{href:"https://dev.ingonyama.com/icicle/primitives/poseidon#constants",children:"constants generation script"}),". The script will print the number of partial rounds and generate a ",(0,r.jsx)(i.code,{children:"constants.bin"})," file. Use ",(0,r.jsx)(i.code,{children:"xxd -i constants.bin"})," to parse the file into C declarations. Copy the ",(0,r.jsx)(i.code,{children:"unsigned char constants_bin[]"})," contents inside your new file. Repeat this process for arities 2, 4, 8 and 11."]}),"\n",(0,r.jsxs)(i.p,{children:["After you've generated the constants, add your curve in this ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/CMakeLists.txt#L72",children:"SUPPORTED_CURVES_WITH_POSEIDON"})," in the ",(0,r.jsx)(i.code,{children:"CMakeLists.txt"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsx)(i.p,{children:"In order to support a new curve in the binding libraries you first must support it in ICICLE core."}),"\n",(0,r.jsx)(i.h3,{id:"rust",children:"Rust"}),"\n",(0,r.jsxs)(i.p,{children:["Go to ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/icicle-curves",children:"rust curves folder"})," and copy ",(0,r.jsx)(i.code,{children:"icicle-curve-template"})," to a new folder named ",(0,r.jsx)(i.code,{children:"icicle-<curve_name>"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Find all the occurrences of ",(0,r.jsx)(i.code,{children:"<CURVE>"})," placeholder inside the crate. (You can use ",(0,r.jsx)(i.code,{children:"Ctrl+Shift+F"})," in VS Code or ",(0,r.jsx)(i.code,{children:'grep -nr "<CURVE>"'})," in bash). You will then need to replace each occurrence with your new curve name."]}),"\n",(0,r.jsx)(i.h4,{id:"limbs",children:"Limbs"}),"\n",(0,r.jsxs)(i.p,{children:["Go to your curve's ",(0,r.jsx)(i.code,{children:"curve.rs"})," file and set ",(0,r.jsx)(i.code,{children:"SCALAR_LIMBS"}),", ",(0,r.jsx)(i.code,{children:"BASE_LIMBS"})," and ",(0,r.jsx)(i.code,{children:"G2_BASE_LIMBS"})," (if G2 is needed) to a minimum number of ",(0,r.jsx)(i.code,{children:"u64"})," required to store a single scalar field / base field element respectively.",(0,r.jsx)(i.br,{}),"\n","e.g. for bn254, scalar field is 254 bit so ",(0,r.jsx)(i.code,{children:"SCALAR_LIMBS"})," is set to 4."]}),"\n",(0,r.jsx)(i.h4,{id:"primitives",children:"Primitives"}),"\n",(0,r.jsxs)(i.p,{children:["If your curve doesn't support some of the primitives (ntt/msm/poseidon/merkle tree/), or you simply don't want to include it, just remove a corresponding module from ",(0,r.jsx)(i.code,{children:"src"})," and then from ",(0,r.jsx)(i.code,{children:"lib.rs"})]}),"\n",(0,r.jsx)(i.h4,{id:"g2",children:"G2"}),"\n",(0,r.jsxs)(i.p,{children:["If your curve doesn't support G2 - remove all the code under ",(0,r.jsx)(i.code,{children:'#[cfg(feature = "g2")]'})," and remove the feature from ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/Cargo.toml#L29",children:"Cargo.toml"})," and ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs#L15",children:"build.rs"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["After this is done, add your new crate in the ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/Cargo.toml",children:"global Cargo.toml"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"golang",children:"Golang"}),"\n",(0,r.jsxs)(i.p,{children:["Golang is WIP in v1, coming soon. Please checkout a previous ",(0,r.jsx)(i.a,{href:"https://github.com/ingonyama-zk/icicle/releases/tag/v0.1.0",children:"release v0.1.0"})," for golang bindings."]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>c});var s=n(6540);const r={},o=s.createContext(r);function t(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);