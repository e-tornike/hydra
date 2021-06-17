(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(346)),i={id:"defaults_list_override",title:"Defaults List Overrides"},s={unversionedId:"upgrades/1.0_to_1.1/defaults_list_override",id:"version-1.1/upgrades/1.0_to_1.1/defaults_list_override",isDocsHomePage:!1,title:"Defaults List Overrides",description:"Hydra versions prior to 1.1 supported overriding of Hydra config groups via the Defaults List in this manner:",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/defaults_list_override.md",slug:"/upgrades/1.0_to_1.1/defaults_list_override",permalink:"/docs/upgrades/1.0_to_1.1/defaults_list_override",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/defaults_list_override.md",version:"1.1",lastUpdatedBy:"Eli Simhayev",lastUpdatedAt:1623889091,formattedLastUpdatedAt:"6/17/2021",sidebar:"version-1.1/docs",previous:{title:"Changes to default composition order",permalink:"/docs/upgrades/1.0_to_1.1/default_composition_order"},next:{title:"Defaults List interpolation",permalink:"/docs/upgrades/1.0_to_1.1/defaults_list_interpolation"}},d=[],c={toc:d};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra versions prior to 1.1 supported overriding of Hydra config groups via the Defaults List in this manner:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"defaults:\n - model: resnet50\n - hydra/launcher: submitit\n")),Object(o.b)("p",null,"As of Hydra 1.1, Config group overrides must be marked explicitly with the ",Object(o.b)("inlineCode",{parentName:"p"},"override")," keyword:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"defaults:\n - model: resnet50\n - override hydra/launcher: submitit\n")),Object(o.b)("p",null,"The Defaults List is described ",Object(o.b)("a",{parentName:"p",href:"/docs/advanced/defaults_list"},"here"),"."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Omitting the ",Object(o.b)("inlineCode",{parentName:"p"},"override")," keyword when overriding Hydra's config groups will result in an error in Hydra 1.2"))))}l.isMDXComponent=!0},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);