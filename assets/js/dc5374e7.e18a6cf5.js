"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9022],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(r,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"specializing_config",title:"Specializing configuration"},d=void 0,s={unversionedId:"patterns/specializing_config",id:"version-1.0/patterns/specializing_config",title:"Specializing configuration",description:"Example application",source:"@site/versioned_docs/version-1.0/patterns/specializing_config.md",sourceDirName:"patterns",slug:"/patterns/specializing_config",permalink:"/docs/1.0/patterns/specializing_config",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/patterns/specializing_config.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1670019664,formattedLastUpdatedAt:"12/2/2022",frontMatter:{id:"specializing_config",title:"Specializing configuration"},sidebar:"version-1.0/docs",previous:{title:"Structured Configs example",permalink:"/docs/1.0/patterns/instantiate_objects/structured_config"},next:{title:"Read-only config",permalink:"/docs/1.0/patterns/write_protect_config_node"}},c=[{value:"initial config.yaml",id:"initial-configyaml",children:[],level:3},{value:"modified config.yaml",id:"modified-configyaml",children:[{value:"dataset_model",id:"dataset_model",children:[],level:4},{value:"${defaults.0.dataset}_${defaults.1.model}",id:"defaults0dataset_defaults1model",children:[],level:4},{value:"optional: true",id:"optional-true",children:[],level:4}],level:3},{value:"dataset_model/cifar10_alexnet.yaml",id:"dataset_modelcifar10_alexnetyaml",children:[],level:3}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/patterns/specializing_config"},(0,o.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,o.mdx)("p",null,"In some cases the desired configuration should depend on other configuration choices.\nFor example, You may want to use only 5 layers in your Alexnet model if the dataset of choice is cifar10, and the default 7 otherwise."),(0,o.mdx)("p",null,"We can start with a config that looks like this:"),(0,o.mdx)("h3",{id:"initial-configyaml"},"initial config.yaml"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - dataset: imagenet\n  - model: alexnet\n")),(0,o.mdx)("p",null,"We want to specialize the config based on the choice of the selected dataset and model:\nFurthermore, we only want to do it for cifar10 and alexnet and not for 3 other combinations."),(0,o.mdx)("p",null,"OmegaConf supports value interpolation, we can construct a value that would - at runtime - be a function of other values.\nThe idea is that we can add another element to the defaults list that would load a file name that depends on those two values:"),(0,o.mdx)("h3",{id:"modified-configyaml"},"modified config.yaml"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - dataset: imagenet\n  - model: alexnet\n  - dataset_model: ${defaults.0.dataset}_${defaults.1.model}\n    optional: true\n")),(0,o.mdx)("p",null,"Let's break this down:"),(0,o.mdx)("h4",{id:"dataset_model"},"dataset_model"),(0,o.mdx)("p",null,"The key ",(0,o.mdx)("inlineCode",{parentName:"p"},"dataset_model")," is an arbitrary directory, it can be anything unique that makes sense, including nested directory like ",(0,o.mdx)("inlineCode",{parentName:"p"},"dataset/model"),"."),(0,o.mdx)("h4",{id:"defaults0dataset_defaults1model"},"${defaults.0.dataset}_${defaults.1.model}"),(0,o.mdx)("p",null,"the value ",(0,o.mdx)("inlineCode",{parentName:"p"},"${defaults.0.dataset}_${defaults.1.model}")," is using OmegaConf's ",(0,o.mdx)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#variable-interpolation"},"variable interpolation"),".\nAt runtime, that value would resolve to ",(0,o.mdx)("em",{parentName:"p"},"imagenet_alexnet"),", or ",(0,o.mdx)("em",{parentName:"p"},"cifar_resnet")," - depending on the values of defaults.dataset and defaults.model.\nThis a bit clunky because defaults contains a list (I hope to improve this in the future)"),(0,o.mdx)("h4",{id:"optional-true"},"optional: true"),(0,o.mdx)("p",null,"By default, Hydra would fail with an error if a config specified in the defaults does not exist.\nIn this case we only want to specialize cifar10 + alexnet, not all 4 combinations.\nindication optional: true here tells Hydra to just continue if it can't find this file."),(0,o.mdx)("p",null,"When specializing config, you usually want to only specify what's different, and not the whole thing.\nWe want the model for alexnet, when trained on cifar - to have 5 layers."),(0,o.mdx)("h3",{id:"dataset_modelcifar10_alexnetyaml"},"dataset_model/cifar10_alexnet.yaml"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"model:\n  num_layers: 5\n")),(0,o.mdx)("p",null,"Let's check. Running with the default uses imagenet, so we don't get the specialized version of:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python example.py \ndataset:\n  name: imagenet\n  path: /datasets/imagenet\nmodel:\n  num_layers: 7\n  type: alexnet\n")),(0,o.mdx)("p",null,"Running with cifar10 dataset, we do get 5 for num_layers:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python example.py dataset=cifar10\ndataset:\n  name: cifar10\n  path: /datasets/cifar10\nmodel:\n  num_layers: 5\n  type: alexnet\n")))}m.isMDXComponent=!0}}]);