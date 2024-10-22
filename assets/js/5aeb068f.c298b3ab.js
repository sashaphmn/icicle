"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1544],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,d=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(d,o(o({ref:n},g),{},{components:t})):r.createElement(d,o({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));t(1873);const i={},o="MSM",l={unversionedId:"icicle/golang-bindings/msm",id:"icicle/golang-bindings/msm",title:"MSM",description:"MSM Example",source:"@site/docs/icicle/golang-bindings/msm.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/msm",permalink:"/icicle/golang-bindings/msm",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/msm.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1729608438,formattedLastUpdatedAt:"10/22/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Golang bindings",permalink:"/icicle/golang-bindings"},next:{title:"MSM Pre computation",permalink:"/icicle/golang-bindings/msm-pre-computation"}},s={},c=[{value:"MSM Example",id:"msm-example",level:2},{value:"MSM Method",id:"msm-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"MSMConfig",id:"msmconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Batched msm",id:"batched-msm",level:2},{value:"How do I toggle between MSM modes?",id:"how-do-i-toggle-between-msm-modes",level:2},{value:"Parameters for optimal performance",id:"parameters-for-optimal-performance",level:2},{value:"Support for G2 group",id:"support-for-g2-group",level:2}],g={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"msm"},"MSM"),(0,a.yg)("h2",{id:"msm-example"},"MSM Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/msm"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n    // Load backend using env path\n    runtime.LoadBackendFromEnvOrDefault()\n    // Set Cuda device to perform\n    device := runtime.CreateDevice("CUDA", 0)\n    runtime.SetDevice(&device)\n\n    // Obtain the default MSM configuration.\n    cfg := core.GetDefaultMSMConfig()\n\n    // Define the size of the problem, here 2^18.\n    size := 1 << 18\n\n    // Generate scalars and points for the MSM operation.\n    scalars := bn254.GenerateScalars(size)\n    points := bn254.GenerateAffinePoints(size)\n\n    // Create a CUDA stream for asynchronous operations.\n    stream, _ := runtime.CreateStream()\n    var p bn254.Projective\n\n    // Allocate memory on the device for the result of the MSM operation.\n    var out core.DeviceSlice\n    _, e := out.MallocAsync(p.Size(), 1, stream)\n\n    if e != runtime.Success {\n        panic(e)\n    }\n\n    // Set the CUDA stream in the MSM configuration.\n    cfg.StreamHandle = stream\n    cfg.IsAsync = true\n\n    // Perform the MSM operation.\n    e = msm.Msm(scalars, points, &cfg, out)\n\n    if e != runtime.Success {\n        panic(e)\n    }\n\n    // Allocate host memory for the results and copy the results from the device.\n    outHost := make(core.HostSlice[bn254.Projective], 1)\n    runtime.SynchronizeStream(stream)\n    runtime.DestroyStream(stream)\n    outHost.CopyFromDevice(&out)\n\n    // Free the device memory allocated for the results.\n    out.Free()\n}\n')),(0,a.yg)("h2",{id:"msm-method"},"MSM Method"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func Msm(scalars core.HostOrDeviceSlice, points core.HostOrDeviceSlice, cfg *core.MSMConfig, results core.HostOrDeviceSlice) runtime.EIcicleError\n")),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"scalars")),": A slice containing the scalars for multiplication. It can reside either in host memory or device memory."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"points")),": A slice containing the points to be multiplied with scalars. Like scalars, these can also be in host or device memory."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"cfg")),": A pointer to an ",(0,a.yg)("inlineCode",{parentName:"li"},"MSMConfig")," object, which contains various configuration options for the MSM operation."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"results")),": A slice where the results of the MSM operation will be stored. This slice can be in host or device memory.")),(0,a.yg)("h3",{id:"return-value"},"Return Value"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"EIcicleError")),": A ",(0,a.yg)("inlineCode",{parentName:"li"},"runtime.EIcicleError")," value, which will be ",(0,a.yg)("inlineCode",{parentName:"li"},"runtime.Success")," if the operation was successful, or an error if something went wrong.")),(0,a.yg)("h2",{id:"msmconfig"},"MSMConfig"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"MSMConfig")," structure holds configuration parameters for the MSM operation, allowing customization of its behavior to optimize performance based on the specifics of the operation or the underlying hardware."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type MSMConfig struct {\n    StreamHandle             runtime.Stream\n    PrecomputeFactor         int32\n    C                        int32\n    Bitsize                  int32\n    BatchSize                int32\n    ArePointsSharedInBatch   bool\n    areScalarsOnDevice       bool\n    AreScalarsMontgomeryForm bool\n    areBasesOnDevice         bool\n    AreBasesMontgomeryForm   bool\n    areResultsOnDevice       bool\n    IsAsync                  bool\n    Ext                      config_extension.ConfigExtensionHandler\n}\n")),(0,a.yg)("h3",{id:"fields"},"Fields"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"StreamHandle")),": Specifies the stream (queue) to use for async execution."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"PrecomputeFactor")),": Controls the number of extra points to pre-compute."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"C")),': Window bitsize, a key parameter in the "bucket method" for MSM.'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"Bitsize")),": Number of bits of the largest scalar."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"BatchSize")),": Number of results to compute in one batch."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"ArePointsSharedInBatch")),": Bases are shared for batch. Set to true if all MSMs use the same bases. Otherwise, the number of bases and number of scalars are expected to be equal."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"areScalarsOnDevice")),": Indicates if scalars are located on the device."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"AreScalarsMontgomeryForm")),": True if scalars are in Montgomery form."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"areBasesOnDevice")),": Indicates if bases are located on the device."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"AreBasesMontgomeryForm")),": True if point coordinates are in Montgomery form."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"areResultsOnDevice")),": Indicates if results are stored on the device."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"IsAsync")),": If true, runs MSM asynchronously."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"Ext")),": Extended configuration for backend.")),(0,a.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"GetDefaultMSMConfig")," to obtain a default configuration, which can then be customized as needed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func GetDefaultMSMConfig() MSMConfig\n")),(0,a.yg)("h2",{id:"batched-msm"},"Batched msm"),(0,a.yg)("p",null,"For batch msm, simply allocate the results array with size corresponding to batch size and set the ",(0,a.yg)("inlineCode",{parentName:"p"},"ArePointsSharedInBatch")," flag in config struct."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"...\n\n// Obtain the default MSM configuration.\ncfg := GetDefaultMSMConfig()\n\ncfg.Ctx.IsBigTriangle = true\n\n...\n")),(0,a.yg)("h2",{id:"how-do-i-toggle-between-msm-modes"},"How do I toggle between MSM modes?"),(0,a.yg)("p",null,"Toggling between MSM modes occurs automatically based on the number of results you are expecting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"MSM")," function."),(0,a.yg)("p",null,"The number of results is interpreted from the size of ",(0,a.yg)("inlineCode",{parentName:"p"},"var out core.DeviceSlice"),". Thus its important when allocating memory for ",(0,a.yg)("inlineCode",{parentName:"p"},"var out core.DeviceSlice")," to make sure that you are allocating ",(0,a.yg)("inlineCode",{parentName:"p"},"<number of results> X <size of a single point>"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"... \n\nbatchSize := 3\nvar p G2Projective\nvar out core.DeviceSlice\nout.Malloc(p.Size(), batchSize)\n\n...\n")),(0,a.yg)("h2",{id:"parameters-for-optimal-performance"},"Parameters for optimal performance"),(0,a.yg)("p",null,"Please refer to the ",(0,a.yg)("a",{parentName:"p",href:"../primitives/msm#choosing-optimal-parameters"},"primitive description")),(0,a.yg)("h2",{id:"support-for-g2-group"},"Support for G2 group"),(0,a.yg)("p",null,"To activate G2 support first you must make sure you are building the static libraries with G2 feature enabled as described in the ",(0,a.yg)("a",{parentName:"p",href:"/icicle/golang-bindings#using-icicle-golang-bindings-in-your-project"},"Golang building instructions"),"."),(0,a.yg)("p",null,"Now you may import ",(0,a.yg)("inlineCode",{parentName:"p"},"g2")," package of the specified curve."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/g2"\n)\n')),(0,a.yg)("p",null,"This package include ",(0,a.yg)("inlineCode",{parentName:"p"},"G2Projective")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"G2Affine")," points as well as a ",(0,a.yg)("inlineCode",{parentName:"p"},"G2Msm")," method."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/msm"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n    cfg := core.GetDefaultMSMConfig()\n    points := bn254.GenerateAffinePoints(1024)\n    var precomputeFactor int32 = 8\n    var precomputeOut core.DeviceSlice\n    precomputeOut.Malloc(points[0].Size(), points.Len()*int(precomputeFactor))\n\n    err := msm.PrecomputeBases(points, &cfg, precomputeOut)\n    if err != runtime.Success {\n        log.Fatalf("PrecomputeBases failed: %v", err)\n    }\n}\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"G2Msm")," works the same way as normal MSM, the difference is that it uses G2 Points."))}p.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);