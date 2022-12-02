"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4042],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,h=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return c},T:function(){return u}});var r=t(87462),a=t(67294),i=t(39960),o=t(52263),l=t(80907);function c(e){return a.createElement(i.default,(0,r.Z)({},e,{to:(n=e.to,c=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function u(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(c,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},91251:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(93899),l=["components"],c={id:"overview",title:"Plugins Overview",sidebar_label:"Plugins Overview"},u=void 0,s={unversionedId:"advanced/plugins/overview",id:"version-1.2/advanced/plugins/overview",title:"Plugins Overview",description:"Hydra can be extended via plugins.",source:"@site/versioned_docs/version-1.2/advanced/plugins/intro.md",sourceDirName:"advanced/plugins",slug:"/advanced/plugins/overview",permalink:"/docs/1.2/advanced/plugins/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/advanced/plugins/intro.md",tags:[],version:"1.2",lastUpdatedBy:"Jasha10",lastUpdatedAt:1670019664,formattedLastUpdatedAt:"12/2/2022",frontMatter:{id:"overview",title:"Plugins Overview",sidebar_label:"Plugins Overview"},sidebar:"docs",previous:{title:"Config Search Path",permalink:"/docs/1.2/advanced/search_path"},next:{title:"Plugin development",permalink:"/docs/1.2/advanced/plugins/develop"}},p=[{value:"Plugin types",id:"plugin-types",children:[{value:"Sweeper",id:"sweeper",children:[],level:3},{value:"Launcher",id:"launcher",children:[],level:3},{value:"SearchPathPlugin",id:"searchpathplugin",children:[],level:3},{value:"ConfigSource",id:"configsource",children:[],level:3}],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra can be extended via plugins.\nThe example plugins ",(0,i.mdx)(o.Z,{to:"examples/plugins",mdxType:"GithubLink"},"here")," can help you get started with plugin development."),(0,i.mdx)("h2",{id:"plugin-types"},"Plugin types"),(0,i.mdx)("p",null,"Hydra has several plugin types:"),(0,i.mdx)("h3",{id:"sweeper"},"Sweeper"),(0,i.mdx)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),(0,i.mdx)("p",null,"And creates 4 jobs with the following parameters:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),(0,i.mdx)("h3",{id:"launcher"},"Launcher"),(0,i.mdx)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher takes a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),(0,i.mdx)("h3",{id:"searchpathplugin"},"SearchPathPlugin"),(0,i.mdx)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),(0,i.mdx)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),(0,i.mdx)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed. "),(0,i.mdx)("h3",{id:"configsource"},"ConfigSource"),(0,i.mdx)("p",null,"ConfigSource plugins can be used to allow Hydra to access configuration in non-standard locations when composing the config.\nThis can be used to enable access to an in-house private config store, or as a way to access configs from public sources like GitHub or S3."))}m.isMDXComponent=!0}}]);