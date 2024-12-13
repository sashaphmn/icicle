"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[432],{277:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"icicle/golang-bindings/vec-ops","title":"Vector Operations","description":"Overview","source":"@site/versioned_docs/version-3.1.0/icicle/golang-bindings/vec-ops.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/vec-ops","permalink":"/3.1.0/icicle/golang-bindings/vec-ops","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/golang-bindings/vec-ops.md","tags":[],"version":"3.1.0","lastUpdatedBy":"Karthik Inbasekar","lastUpdatedAt":1734082449000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"EC-NTT","permalink":"/3.1.0/icicle/golang-bindings/ecntt"},"next":{"title":"Multi GPU Support","permalink":"/3.1.0/icicle/golang-bindings/multi-gpu"}}');var t=i(4848),c=i(8453);const o={},s="Vector Operations",a={},l=[{value:"Overview",id:"overview",level:2},{value:"VecOps API Documentation",id:"vecops-api-documentation",level:2},{value:"Example",id:"example",level:3},{value:"Vector addition",id:"vector-addition",level:4},{value:"Vector Subtraction",id:"vector-subtraction",level:4},{value:"Vector Multiplication",id:"vector-multiplication",level:4},{value:"VecOps Method",id:"vecops-method",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Value",id:"return-value",level:4},{value:"VecOpsConfig",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:4},{value:"MatrixTranspose API Documentation",id:"matrixtranspose-api-documentation",level:2},{value:"Function",id:"function",level:3},{value:"Parameters",id:"parameters-1",level:2},{value:"Return Value",id:"return-value-1",level:2},{value:"Example Usage",id:"example-usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"vector-operations",children:"Vector Operations"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Icicle exposes a number of vector operations which a user can use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The VecOps API provides efficient vector operations such as addition, subtraction, and multiplication, supporting both single and batched operations."}),"\n",(0,t.jsx)(n.li,{children:"MatrixTranspose API allows a user to perform a transpose on a vector representation of a matrix, with support for batched transpositions."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"vecops-api-documentation",children:"VecOps API Documentation"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.h4,{id:"vector-addition",children:"Vector addition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/vecOps"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n\ttestSize := 1 << 12\n\ta := bn254.GenerateScalars(testSize)\n\tb := bn254.GenerateScalars(testSize)\n\tout := make(core.HostSlice[bn254.ScalarField], testSize)\n\tcfg := core.DefaultVecOpsConfig()\n\n\t// Perform vector multiplication\n\terr := vecOps.VecOp(a, b, out, cfg, core.Add)\n\tif err != runtime.Success {\n\t\tpanic("Vector addition failed")\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"vector-subtraction",children:"Vector Subtraction"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/vecOps"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n\ttestSize := 1 << 12\n\ta := bn254.GenerateScalars(testSize)\n\tb := bn254.GenerateScalars(testSize)\n\tout := make(core.HostSlice[bn254.ScalarField], testSize)\n\tcfg := core.DefaultVecOpsConfig()\n\n\t// Perform vector multiplication\n\terr := vecOps.VecOp(a, b, out, cfg, core.Sub)\n\tif err != runtime.Success {\n\t\tpanic("Vector subtraction failed")\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"vector-multiplication",children:"Vector Multiplication"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/vecOps"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n\ttestSize := 1 << 12\n\ta := bn254.GenerateScalars(testSize)\n\tb := bn254.GenerateScalars(testSize)\n\tout := make(core.HostSlice[bn254.ScalarField], testSize)\n\tcfg := core.DefaultVecOpsConfig()\n\n\t// Perform vector multiplication\n\terr := vecOps.VecOp(a, b, out, cfg, core.Mul)\n\tif err != runtime.Success {\n\t\tpanic("Vector multiplication failed")\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"vecops-method",children:"VecOps Method"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func VecOp(a, b, out core.HostOrDeviceSlice, config core.VecOpsConfig, op core.VecOps) (ret runtime.EIcicleError)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"a"})}),": The first input vector."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"b"})}),": The second input vector."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"out"})}),": The output vector where the result of the operation will be stored."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"config"})}),": A ",(0,t.jsx)(n.code,{children:"VecOpsConfig"})," object containing various configuration options for the vector operations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"op"})}),": The operation to perform, specified as one of the constants (",(0,t.jsx)(n.code,{children:"Sub"}),", ",(0,t.jsx)(n.code,{children:"Add"}),", ",(0,t.jsx)(n.code,{children:"Mul"}),") from the ",(0,t.jsx)(n.code,{children:"VecOps"})," type."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"EIcicleError"})}),": A ",(0,t.jsx)(n.code,{children:"runtime.EIcicleError"})," value, which will be ",(0,t.jsx)(n.code,{children:"runtime.Success"})," if the operation was successful, or an error if something went wrong."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vecopsconfig",children:"VecOpsConfig"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VecOpsConfig"})," structure holds configuration parameters for the vector operations, allowing customization of its behavior."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type VecOpsConfig struct {\n\tStreamHandle     runtime.Stream\n\tisAOnDevice      bool\n\tisBOnDevice      bool\n\tisResultOnDevice bool\n\tIsAsync          bool\n\tbatch_size       int\n\tcolumns_batch    bool\n\tExt              config_extension.ConfigExtensionHandler\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"StreamHandle"})}),": Specifies the stream (queue) to use for async execution."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"isAOnDevice"})}),": Indicates if vector ",(0,t.jsx)(n.code,{children:"a"})," is located on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"isBOnDevice"})}),": Indicates if vector ",(0,t.jsx)(n.code,{children:"b"})," is located on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"isResultOnDevice"})}),": Specifies where the result vector should be stored (device or host memory)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IsAsync"})}),": Controls whether the vector operation runs asynchronously."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"batch_size"})}),": Number of vectors (or operations) to process in a batch. Each vector operation will be performed independently on each batch element."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"columns_batch"})}),": true if the batched vectors are stored as columns in a 2D array (i.e., the vectors are strided in memory as columns of a matrix). If false, the batched vectors are stored contiguously in memory (e.g., as rows or in a flat array)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Ext"})}),": Extended configuration for backend."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"DefaultVecOpsConfig"})," to obtain a default configuration, customizable as needed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func DefaultVecOpsConfig() VecOpsConfig\n"})}),"\n",(0,t.jsx)(n.h2,{id:"matrixtranspose-api-documentation",children:"MatrixTranspose API Documentation"}),"\n",(0,t.jsxs)(n.p,{children:["This section describes the functionality of the ",(0,t.jsx)(n.code,{children:"TransposeMatrix"})," function used for matrix transposition."]}),"\n",(0,t.jsx)(n.p,{children:"The function takes a matrix represented as a 1D slice and transposes it, storing the result in another 1D slice."}),"\n",(0,t.jsx)(n.p,{children:"If VecOpsConfig specifies a batch_size greater than one, the transposition is performed on multiple matrices simultaneously, producing corresponding transposed matrices. The storage arrangement of batched matrices is determined by the columns_batch field in the VecOpsConfig."}),"\n",(0,t.jsx)(n.h3,{id:"function",children:"Function"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func TransposeMatrix(in, out core.HostOrDeviceSlice, columnSize, rowSize int, config core.VecOpsConfig) runtime.EIcicleError\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"in"})}),": The input matrix is a ",(0,t.jsx)(n.code,{children:"core.HostOrDeviceSlice"}),", stored as a 1D slice."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"out"})}),": The output matrix is a ",(0,t.jsx)(n.code,{children:"core.HostOrDeviceSlice"}),", which will be the transpose of the input matrix, stored as a 1D slice."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"columnSize"})}),": The number of columns in the input matrix."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"rowSize"})}),": The number of rows in the input matrix."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"config"})}),": A ",(0,t.jsx)(n.code,{children:"VecOpsConfig"})," object containing various configuration options for the vector operations."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value-1",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"EIcicleError"})}),": A ",(0,t.jsx)(n.code,{children:"runtime.EIcicleError"})," value, which will be ",(0,t.jsx)(n.code,{children:"runtime.Success"})," if the operation was successful, or an error if something went wrong."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"var input = make(core.HostSlice[ScalarField], 20)\nvar output = make(core.HostSlice[ScalarField], 20)\n\n// Populate the input matrix\n// ...\n\n// Get device context\ncfg, _ := runtime.GetDefaultDeviceContext()\n\n// Transpose the matrix\nerr := TransposeMatrix(input, output, 5, 4, cfg)\nif err != runtime.Success {\n    // Handle the error\n}\n\n// Use the transposed matrix\n// ...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"TransposeMatrix"})," function is used to transpose a 5x4 matrix stored in a 1D slice. The input and output slices are stored on the host (CPU), and the operation is executed synchronously."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var r=i(6540);const t={},c=r.createContext(t);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);