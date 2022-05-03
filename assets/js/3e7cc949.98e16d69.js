"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[755],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return l},MDXProvider:function(){return m},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return c}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=i,f=c["".concat(a,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93899:function(e,t,r){r.d(t,{Z:function(){return s},T:function(){return l}});var n=r(87462),i=r(67294),o=r(39960),a=r(52263),u=r(80907);function s(e){return i.createElement(o.default,(0,n.Z)({},e,{to:(t=e.to,s=(0,u.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==s?void 0:s.name)?r:"current"]+t),target:"_blank"}));var t,r,s}function l(e){var t,r=null!=(t=e.text)?t:"Example (Click Here)";return i.createElement(s,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},54370:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=r(93899),u=["components"],s={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},l=void 0,c={unversionedId:"tutorials/structured_config/intro",id:"version-1.0/tutorials/structured_config/intro",title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the Basic Tutorial.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/0_intro.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/intro",permalink:"/docs/1.0/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/0_intro.md",tags:[],version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1651618746,formattedLastUpdatedAt:"5/3/2022",sidebarPosition:0,frontMatter:{id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},sidebar:"version-1.0/docs",previous:{title:"Tab completion",permalink:"/docs/1.0/tutorials/basic/running_your_app/tab_completion"},next:{title:"Minimal example",permalink:"/docs/1.0/tutorials/structured_config/minimal_example"}},d=[{value:"Structured Configs supports:",id:"structured-configs-supports",children:[],level:4},{value:"Structured Configs Limitations:",id:"structured-configs-limitations",children:[],level:4},{value:"There are two primary patterns for using Structured configs",id:"there-are-two-primary-patterns-for-using-structured-configs",children:[],level:4}],m={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/your_first_app/simple_cli"},"Basic Tutorial"),".\nThe examples in this tutorial are available ",(0,o.mdx)(a.Z,{to:"examples/tutorials/structured_configs",mdxType:"GithubLink"},"here"),"."),(0,o.mdx)("p",null,"Structured Configs use Python ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.python.org/3.7/library/dataclasses.html"},"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),(0,o.mdx)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Primitive types (",(0,o.mdx)("inlineCode",{parentName:"li"},"int"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"bool"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"float"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"str"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"Enums"),") "),(0,o.mdx)("li",{parentName:"ul"},"Nesting of Structured Configs"),(0,o.mdx)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),(0,o.mdx)("li",{parentName:"ul"},"Optional fields")),(0,o.mdx)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",(0,o.mdx)("inlineCode",{parentName:"li"},"Optional"),")"),(0,o.mdx)("li",{parentName:"ul"},"User methods are not supported")),(0,o.mdx)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"As a ",(0,o.mdx)("a",{parentName:"li",href:"/docs/1.0/tutorials/structured_config/minimal_example"},"config"),", in place of configuration files (often a starting place)"),(0,o.mdx)("li",{parentName:"ul"},"As a ",(0,o.mdx)("a",{parentName:"li",href:"/docs/1.0/tutorials/structured_config/schema"},"config schema")," validating configuration files (better for complex use cases)")),(0,o.mdx)("p",null,"With both patterns, you still get everything Hydra has to offer (config composition, Command line overrides etc).\nThis tutorial covers both. ","*",(0,o.mdx)("strong",{parentName:"p"},"Read it in order"),"*","."),(0,o.mdx)("p",null,"Hydra supports OmegaConf's Structured Configs via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConfigStore")," API.\nThis tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",(0,o.mdx)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."),(0,o.mdx)("div",{class:"alert alert--info",role:"alert"},"1. The ConfigStore API is new and subject to change.",(0,o.mdx)("br",null),"2. OmegaConf's Structured Configs are new.",(0,o.mdx)("br",null),"Please report any issues.",(0,o.mdx)("br",null)),(0,o.mdx)("br",null))}p.isMDXComponent=!0}}]);