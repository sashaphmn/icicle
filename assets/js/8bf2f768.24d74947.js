"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9370],{8043:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"icicle/rust-bindings/vec-ops","title":"Vector Operations API","description":"Our vector operations API which is part of icicle-cuda-runtime package, includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory.","source":"@site/versioned_docs/version-1.10.1/icicle/rust-bindings/vec-ops.md","sourceDirName":"icicle/rust-bindings","slug":"/icicle/rust-bindings/vec-ops","permalink":"/1.10.1/icicle/rust-bindings/vec-ops","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-1.10.1/icicle/rust-bindings/vec-ops.md","tags":[],"version":"1.10.1","lastUpdatedBy":"Yuval Shekel","lastUpdatedAt":1733500172000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"NTT","permalink":"/1.10.1/icicle/rust-bindings/ntt"},"next":{"title":"Multi GPU Support","permalink":"/1.10.1/icicle/rust-bindings/multi-gpu"}}');var c=n(4848),t=n(8453);const o={},r="Vector Operations API",l={},a=[{value:"Supported curves",id:"supported-curves",level:2},{value:"Examples",id:"examples",level:2},{value:"Addition of Scalars",id:"addition-of-scalars",level:3},{value:"Subtraction of Scalars",id:"subtraction-of-scalars",level:3},{value:"Multiplication of Scalars",id:"multiplication-of-scalars",level:3},{value:"Vector Operations Configuration",id:"vector-operations-configuration",level:2},{value:"<code>VecOpsConfig</code>",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Vector Operations",id:"vector-operations",level:2},{value:"<code>VecOps</code> Trait",id:"vecops-trait",level:3},{value:"Methods",id:"methods",level:4}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"vector-operations-api",children:"Vector Operations API"})}),"\n",(0,c.jsxs)(i.p,{children:["Our vector operations API which is part of ",(0,c.jsx)(i.code,{children:"icicle-cuda-runtime"})," package, includes fundamental methods for addition, subtraction, and multiplication of vectors, with support for both host and device memory."]}),"\n",(0,c.jsx)(i.h2,{id:"supported-curves",children:"Supported curves"}),"\n",(0,c.jsx)(i.p,{children:"Vector operations are supported on the following curves:"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"bls12-377"}),", ",(0,c.jsx)(i.code,{children:"bls12-381"}),", ",(0,c.jsx)(i.code,{children:"bn-254"}),", ",(0,c.jsx)(i.code,{children:"bw6-761"}),", ",(0,c.jsx)(i.code,{children:"grumpkin"})]}),"\n",(0,c.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(i.h3,{id:"addition-of-scalars",children:"Addition of Scalars"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{add_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet b: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nadd_scalars(&a, &b, &mut result, &cfg).unwrap();\n"})}),"\n",(0,c.jsx)(i.h3,{id:"subtraction-of-scalars",children:"Subtraction of Scalars"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{sub_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet b: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nsub_scalars(&a, &b, &mut result, &cfg).unwrap();\n"})}),"\n",(0,c.jsx)(i.h3,{id:"multiplication-of-scalars",children:"Multiplication of Scalars"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:"use icicle_bn254::curve::{ScalarCfg, ScalarField};\nuse icicle_core::vec_ops::{mul_scalars};\n\nlet test_size = 1 << 18;\n\nlet a: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(F::Config::generate_random(test_size));\nlet ones: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::one(); test_size]);\nlet mut result: HostOrDeviceSlice<'_, ScalarField> = HostOrDeviceSlice::on_host(vec![F::zero(); test_size]);\n\nlet cfg = VecOpsConfig::default();\nmul_scalars(&a, &ones, &mut result, &cfg).unwrap();\n"})}),"\n",(0,c.jsx)(i.h2,{id:"vector-operations-configuration",children:"Vector Operations Configuration"}),"\n",(0,c.jsxs)(i.p,{children:["The ",(0,c.jsx)(i.code,{children:"VecOpsConfig"})," struct encapsulates the settings for vector operations, including device context and operation modes."]}),"\n",(0,c.jsx)(i.h3,{id:"vecopsconfig",children:(0,c.jsx)(i.code,{children:"VecOpsConfig"})}),"\n",(0,c.jsx)(i.p,{children:"Defines configuration parameters for vector operations."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:"pub struct VecOpsConfig<'a> {\n    pub ctx: DeviceContext<'a>,\n    is_a_on_device: bool,\n    is_b_on_device: bool,\n    is_result_on_device: bool,\n    is_result_montgomery_form: bool,\n    pub is_async: bool,\n}\n"})}),"\n",(0,c.jsx)(i.h4,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"ctx: DeviceContext<'a>"})}),": Specifies the device context for the operation, including the device ID and memory pool."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"is_a_on_device"})}),": Indicates if the first operand vector resides in device memory."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"is_b_on_device"})}),": Indicates if the second operand vector resides in device memory."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"is_result_on_device"})}),": Specifies if the result vector should be stored in device memory."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"is_result_montgomery_form"})}),": Determines if the result should be in Montgomery form."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"is_async"})}),": Enables asynchronous operation. If ",(0,c.jsx)(i.code,{children:"true"}),", operations are non-blocking; otherwise, they block the current thread."]}),"\n"]}),"\n",(0,c.jsx)(i.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"VecOpsConfig"})," can be initialized with default settings tailored for a specific device:"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{children:"let cfg = VecOpsConfig::default();\n"})}),"\n",(0,c.jsx)(i.p,{children:"These are the default settings."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:"impl<'a> Default for VecOpsConfig<'a> {\n    fn default() -> Self {\n        Self::default_for_device(DEFAULT_DEVICE_ID)\n    }\n}\n\nimpl<'a> VecOpsConfig<'a> {\n    pub fn default_for_device(device_id: usize) -> Self {\n        VecOpsConfig {\n            ctx: DeviceContext::default_for_device(device_id),\n            is_a_on_device: false,\n            is_b_on_device: false,\n            is_result_on_device: false,\n            is_result_montgomery_form: false,\n            is_async: false,\n        }\n    }\n}\n"})}),"\n",(0,c.jsx)(i.h2,{id:"vector-operations",children:"Vector Operations"}),"\n",(0,c.jsxs)(i.p,{children:["Vector operations are implemented through the ",(0,c.jsx)(i.code,{children:"VecOps"})," trait, these traits are implemented for all ",(0,c.jsx)(i.a,{href:"#supported-curves",children:"supported curves"})," providing methods for addition, subtraction, and multiplication of vectors."]}),"\n",(0,c.jsxs)(i.h3,{id:"vecops-trait",children:[(0,c.jsx)(i.code,{children:"VecOps"})," Trait"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-rust",children:"pub trait VecOps<F> {\n    fn add(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n\n    fn sub(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n\n    fn mul(\n        a: &HostOrDeviceSlice<F>,\n        b: &HostOrDeviceSlice<F>,\n        result: &mut HostOrDeviceSlice<F>,\n        cfg: &VecOpsConfig,\n    ) -> IcicleResult<()>;\n}\n"})}),"\n",(0,c.jsx)(i.h4,{id:"methods",children:"Methods"}),"\n",(0,c.jsxs)(i.p,{children:["All operations are element-wise operations, and the results placed into the ",(0,c.jsx)(i.code,{children:"result"})," param. These operations are not in place."]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"add"})}),": Computes the element-wise sum of two vectors."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"sub"})}),": Computes the element-wise difference between two vectors."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:(0,c.jsx)(i.code,{children:"mul"})}),": Performs element-wise multiplication of two vectors."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var s=n(6540);const c={},t=s.createContext(c);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);