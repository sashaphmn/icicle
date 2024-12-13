"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[3676],{484:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"icicle/golang-bindings/msm","title":"MSM","description":"MSM Example","source":"@site/versioned_docs/version-3.1.0/icicle/golang-bindings/msm.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/msm","permalink":"/3.1.0/icicle/golang-bindings/msm","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.1.0/icicle/golang-bindings/msm.md","tags":[],"version":"3.1.0","lastUpdatedBy":"Karthik Inbasekar","lastUpdatedAt":1734082449000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"Golang bindings","permalink":"/3.1.0/icicle/golang-bindings"},"next":{"title":"MSM pre computation","permalink":"/3.1.0/icicle/golang-bindings/msm-pre-computation"}}');var t=i(4848),s=i(8453);const o={},c="MSM",a={},l=[{value:"MSM Example",id:"msm-example",level:2},{value:"MSM Method",id:"msm-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"MSMConfig",id:"msmconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Batched msm",id:"batched-msm",level:2},{value:"How do I toggle between MSM modes?",id:"how-do-i-toggle-between-msm-modes",level:2},{value:"Parameters for optimal performance",id:"parameters-for-optimal-performance",level:2},{value:"Support for G2 group",id:"support-for-g2-group",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"msm",children:"MSM"})}),"\n",(0,t.jsx)(n.h2,{id:"msm-example",children:"MSM Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/msm"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n\t// Load backend using env path\n\truntime.LoadBackendFromEnvOrDefault()\n\t// Set Cuda device to perform\n\tdevice := runtime.CreateDevice("CUDA", 0)\n\truntime.SetDevice(&device)\n\n\t// Obtain the default MSM configuration.\n\tcfg := core.GetDefaultMSMConfig()\n\n\t// Define the size of the problem, here 2^18.\n\tsize := 1 << 18\n\n\t// Generate scalars and points for the MSM operation.\n\tscalars := bn254.GenerateScalars(size)\n\tpoints := bn254.GenerateAffinePoints(size)\n\n\t// Create a CUDA stream for asynchronous operations.\n\tstream, _ := runtime.CreateStream()\n\tvar p bn254.Projective\n\n\t// Allocate memory on the device for the result of the MSM operation.\n\tvar out core.DeviceSlice\n\t_, e := out.MallocAsync(p.Size(), 1, stream)\n\n\tif e != runtime.Success {\n\t\tpanic(e)\n\t}\n\n\t// Set the CUDA stream in the MSM configuration.\n\tcfg.StreamHandle = stream\n\tcfg.IsAsync = true\n\n\t// Perform the MSM operation.\n\te = msm.Msm(scalars, points, &cfg, out)\n\n\tif e != runtime.Success {\n\t\tpanic(e)\n\t}\n\n\t// Allocate host memory for the results and copy the results from the device.\n\toutHost := make(core.HostSlice[bn254.Projective], 1)\n\truntime.SynchronizeStream(stream)\n\truntime.DestroyStream(stream)\n\toutHost.CopyFromDevice(&out)\n\n\t// Free the device memory allocated for the results.\n\tout.Free()\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"msm-method",children:"MSM Method"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func Msm(scalars core.HostOrDeviceSlice, points core.HostOrDeviceSlice, cfg *core.MSMConfig, results core.HostOrDeviceSlice) runtime.EIcicleError\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"scalars"})}),": A slice containing the scalars for multiplication. It can reside either in host memory or device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"points"})}),": A slice containing the points to be multiplied with scalars. Like scalars, these can also be in host or device memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"cfg"})}),": A pointer to an ",(0,t.jsx)(n.code,{children:"MSMConfig"})," object, which contains various configuration options for the MSM operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"results"})}),": A slice where the results of the MSM operation will be stored. This slice can be in host or device memory."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"EIcicleError"})}),": A ",(0,t.jsx)(n.code,{children:"runtime.EIcicleError"})," value, which will be ",(0,t.jsx)(n.code,{children:"runtime.Success"})," if the operation was successful, or an error if something went wrong."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"msmconfig",children:"MSMConfig"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"MSMConfig"})," structure holds configuration parameters for the MSM operation, allowing customization of its behavior to optimize performance based on the specifics of the operation or the underlying hardware."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MSMConfig struct {\n\tStreamHandle             runtime.Stream\n\tPrecomputeFactor         int32\n\tC                        int32\n\tBitsize                  int32\n\tBatchSize                int32\n\tArePointsSharedInBatch   bool\n\tareScalarsOnDevice       bool\n\tAreScalarsMontgomeryForm bool\n\tareBasesOnDevice         bool\n\tAreBasesMontgomeryForm   bool\n\tareResultsOnDevice       bool\n\tIsAsync                  bool\n\tExt                      config_extension.ConfigExtensionHandler\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"StreamHandle"})}),": Specifies the stream (queue) to use for async execution."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"PrecomputeFactor"})}),": Controls the number of extra points to pre-compute."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"C"})}),': Window bitsize, a key parameter in the "bucket method" for MSM.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Bitsize"})}),": Number of bits of the largest scalar."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"BatchSize"})}),": Number of results to compute in one batch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ArePointsSharedInBatch"})}),": Bases are shared for batch. Set to true if all MSMs use the same bases. Otherwise, the number of bases and number of scalars are expected to be equal."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"areScalarsOnDevice"})}),": Indicates if scalars are located on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"AreScalarsMontgomeryForm"})}),": True if scalars are in Montgomery form."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"areBasesOnDevice"})}),": Indicates if bases are located on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"AreBasesMontgomeryForm"})}),": True if point coordinates are in Montgomery form."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"areResultsOnDevice"})}),": Indicates if results are stored on the device."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IsAsync"})}),": If true, runs MSM asynchronously."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Ext"})}),": Extended configuration for backend."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"GetDefaultMSMConfig"})," to obtain a default configuration, which can then be customized as needed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func GetDefaultMSMConfig() MSMConfig\n"})}),"\n",(0,t.jsx)(n.h2,{id:"batched-msm",children:"Batched msm"}),"\n",(0,t.jsxs)(n.p,{children:["For batch msm, simply allocate the results array with size corresponding to batch size and set the ",(0,t.jsx)(n.code,{children:"ArePointsSharedInBatch"})," flag in config struct."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"...\n\n// Obtain the default MSM configuration.\ncfg := GetDefaultMSMConfig()\n\ncfg.Ctx.IsBigTriangle = true\n\n...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-toggle-between-msm-modes",children:"How do I toggle between MSM modes?"}),"\n",(0,t.jsxs)(n.p,{children:["Toggling between MSM modes occurs automatically based on the number of results you are expecting from the ",(0,t.jsx)(n.code,{children:"MSM"})," function."]}),"\n",(0,t.jsxs)(n.p,{children:["The number of results is interpreted from the size of ",(0,t.jsx)(n.code,{children:"var out core.DeviceSlice"}),". Thus its important when allocating memory for ",(0,t.jsx)(n.code,{children:"var out core.DeviceSlice"})," to make sure that you are allocating ",(0,t.jsx)(n.code,{children:"<number of results> X <size of a single point>"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"... \n\nbatchSize := 3\nvar p G2Projective\nvar out core.DeviceSlice\nout.Malloc(p.Size(), batchSize)\n\n...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters-for-optimal-performance",children:"Parameters for optimal performance"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"../primitives/msm#choosing-optimal-parameters",children:"primitive description"})]}),"\n",(0,t.jsx)(n.h2,{id:"support-for-g2-group",children:"Support for G2 group"}),"\n",(0,t.jsxs)(n.p,{children:["To activate G2 support first you must make sure you are building the static libraries with G2 feature enabled as described in the ",(0,t.jsx)(n.a,{href:"/3.1.0/icicle/golang-bindings#using-icicle-golang-bindings-in-your-project",children:"Golang building instructions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Now you may import ",(0,t.jsx)(n.code,{children:"g2"})," package of the specified curve."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/g2"\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This package include ",(0,t.jsx)(n.code,{children:"G2Projective"})," and ",(0,t.jsx)(n.code,{children:"G2Affine"})," points as well as a ",(0,t.jsx)(n.code,{children:"G2Msm"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/msm"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n\tcfg := core.GetDefaultMSMConfig()\n\tpoints := bn254.GenerateAffinePoints(1024)\n\tvar precomputeFactor int32 = 8\n\tvar precomputeOut core.DeviceSlice\n\tprecomputeOut.Malloc(points[0].Size(), points.Len()*int(precomputeFactor))\n\n\terr := msm.PrecomputeBases(points, &cfg, precomputeOut)\n\tif err != runtime.Success {\n\t\tlog.Fatalf("PrecomputeBases failed: %v", err)\n\t}\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"G2Msm"})," works the same way as normal MSM, the difference is that it uses G2 Points."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var r=i(6540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);