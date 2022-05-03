"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1931],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return x},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,g=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return t?r.createElement(g,m(m({ref:n},p),{},{components:t})):r.createElement(g,m({ref:n},p))}));function x(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var m={};for(var o in n)hasOwnProperty.call(n,o)&&(m[o]=n[o]);m.originalType=e,m.mdxType="string"==typeof e?e:a,l[1]=m;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return o},T:function(){return p}});var r=t(87462),a=t(67294),i=t(39960),l=t(52263),m=t(80907);function o(e){return a.createElement(i.default,(0,r.Z)({},e,{to:(n=e.to,o=(0,m.useActiveVersion)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==o?void 0:o.name)?t:"current"]+n),target:"_blank"}));var n,t,o}function p(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(o,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},60999:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=t(93899),m=["components"],o={id:"configuring_experiments",title:"Configuring Experiments"},p=void 0,s={unversionedId:"patterns/configuring_experiments",id:"version-1.1/patterns/configuring_experiments",title:"Configuring Experiments",description:"Problem",source:"@site/versioned_docs/version-1.1/patterns/configuring_experiments.md",sourceDirName:"patterns",slug:"/patterns/configuring_experiments",permalink:"/docs/patterns/configuring_experiments",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/patterns/configuring_experiments.md",tags:[],version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1651618746,formattedLastUpdatedAt:"5/3/2022",frontMatter:{id:"configuring_experiments",title:"Configuring Experiments"},sidebar:"version-1.1/docs",previous:{title:"Extending Configs",permalink:"/docs/patterns/extending_configs"},next:{title:"Configuring Plugins",permalink:"/docs/patterns/configuring_plugins"}},c=[{value:"Problem",id:"problem",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"Sweeping over experiments",id:"sweeping-over-experiments",children:[],level:3}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,m);return(0,i.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(l.T,{text:"Example application",to:"examples/patterns/configuring_experiments",mdxType:"ExampleGithubLink"}),(0,i.mdx)("h3",{id:"problem"},"Problem"),(0,i.mdx)("p",null,"A common problem is maintaining multiple configurations of an application.  This can get especially\ntedious when the configuration differences span multiple dimensions.\nThis pattern shows how to cleanly support multiple configurations, with each configuration file only specifying\nthe changes to the master (default) configuration."),(0,i.mdx)("h3",{id:"solution"},"Solution"),(0,i.mdx)("p",null,"Create a config file specifying the overrides to the default configuration, and then call it via the command line.\ne.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"$ python my_app.py +experiment=fast_mode"),"."),(0,i.mdx)("p",null,"To avoid clutter, we place the experiment config files in dedicated config group called ",(0,i.mdx)("em",{parentName:"p"},"experiment"),"."),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("p",null,"In this example, we will create configurations for each of the server and database pairings that we want to benchmark."),(0,i.mdx)("p",null,"The default configuration is:"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n  - server: apache\n\n\n\n\n\n"))),(0,i.mdx)("div",{className:"col col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"name: mysql\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml"',title:'"server/apache.yaml"'},"name: apache\nport: 80\n"))),(0,i.mdx)("div",{className:"col col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/sqlite.yaml"',title:'"db/sqlite.yaml"'},"name: sqlite\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/nginx.yaml"',title:'"server/nginx.yaml"'},"name: nginx\nport: 80\n")))),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory structure"',title:'"Directory','structure"':!0},"\u251c\u2500\u2500 config.yaml\n\u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2514\u2500\u2500 sqlite.yaml\n\u2514\u2500\u2500 server\n    \u251c\u2500\u2500 apache.yaml\n    \u2514\u2500\u2500 nginx.yaml\n"))),(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"db:\n  name: mysql\nserver:\n  name: apache\n  port: 80\n\n\n")))),(0,i.mdx)("p",null,"The benchmark config files specify the deltas from the default configuration:"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="experiment/aplite.yaml"',title:'"experiment/aplite.yaml"'},"# @package _global_\ndefaults:\n  - override /db: sqlite\n  \n  \nserver:\n  port: 8080\n"))),(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="experiment/nglite.yaml"',title:'"experiment/nglite.yaml"'},"# @package _global_\ndefaults:\n  - override /db: sqlite\n  - override /server: nginx\n  \nserver:\n  port: 8080\n")))),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py +experiment=aplite"',title:'"$',python:!0,"my_app.py":!0,"+experiment":'aplite"'},"db:\n  name: sqlite\nserver:\n  name: apache\n  port: 8080\n"))),(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py +experiment=nglite"',title:'"$',python:!0,"my_app.py":!0,"+experiment":'nglite"'},"db:\n  name: sqlite\nserver:\n  name: nginx\n  port: 8080\n")))),(0,i.mdx)("p",null,"Key concepts:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"#"," @package ","_","global","_"),(0,i.mdx)("br",{parentName:"li"}),"Changes specified in this config should be interpreted as relative to the ","_","global","_"," package.",(0,i.mdx)("br",{parentName:"li"}),"We could instead place ",(0,i.mdx)("em",{parentName:"li"},"nglite.yaml")," and ",(0,i.mdx)("em",{parentName:"li"},"aplite.yaml")," next to ",(0,i.mdx)("em",{parentName:"li"},"config.yaml")," and omit this line."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"The overrides of /db and /server are absolute paths."),(0,i.mdx)("br",{parentName:"li"}),"This is necessary because they are outside of the experiment directory. ")),(0,i.mdx)("p",null,"Running the experiments from the command line requires prefixing the experiment choice with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"+"),".\nThe experiment config group is an addition, not an override."),(0,i.mdx)("h3",{id:"sweeping-over-experiments"},"Sweeping over experiments"),(0,i.mdx)("p",null,"This approach also enables sweeping over those experiments to easily compare their results:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py --multirun +experiment=aplite,nglite"',title:'"$',python:!0,"my_app.py":!0,"--multirun":!0,"+experiment":'aplite,nglite"'},"[HYDRA] Launching 2 jobs locally\n[HYDRA]        #0 : +experiment=aplite\ndb:\n  name: sqlite\nserver:\n  name: apache\n  port: 8080\n\n[HYDRA]        #1 : +experiment=nglite\ndb:\n  name: sqlite\nserver:\n  name: nginx\n  port: 8080\n")),(0,i.mdx)("p",null,"To run all the experiments, use the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/advanced/override_grammar/extended#glob-choice-sweep"},"glob")," syntax:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:"title=\"$ python my_app.py --multirun '+experiment=glob(*)'\"",title:'"$',python:!0,"my_app.py":!0,"--multirun":!0,"'+experiment":"glob(*)'\""},"[HYDRA]        #0 : +experiment=aplite\n...\n[HYDRA]        #1 : +experiment=nglite\n...\n")))}u.isMDXComponent=!0}}]);