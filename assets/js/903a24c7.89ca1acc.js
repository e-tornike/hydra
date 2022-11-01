"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2344],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),p=o,f=c["".concat(a,".").concat(p)]||c[p]||d[p]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return l},T:function(){return u}});var r=n(87462),o=n(67294),i=n(39960),a=n(52263),s=n(80907);function l(e){return o.createElement(i.default,(0,r.Z)({},e,{to:(t=e.to,l=(0,s.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function u(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return o.createElement(l,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},84613:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(93899),s=["components"],l={id:"composition",title:"Putting it all together"},u=void 0,c={unversionedId:"tutorials/basic/your_first_app/composition",id:"version-1.0/tutorials/basic/your_first_app/composition",title:"Putting it all together",description:"As software gets more complex, we resort to modularity and composition to keep it manageable.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/6_composition.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/composition",permalink:"/docs/1.0/tutorials/basic/your_first_app/composition",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/6_composition.md",tags:[],version:"1.0",lastUpdatedBy:"Max Ehrlich",lastUpdatedAt:1667274084,formattedLastUpdatedAt:"11/1/2022",sidebarPosition:6,frontMatter:{id:"composition",title:"Putting it all together"},sidebar:"version-1.0/docs",previous:{title:"Selecting defaults for config groups",permalink:"/docs/1.0/tutorials/basic/your_first_app/defaults"},next:{title:"Multi-run",permalink:"/docs/1.0/tutorials/basic/running_your_app/multi-run"}},m=[{value:"Summary",id:"summary",children:[],level:3}],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(a.T,{to:"examples/tutorials/basic/your_first_hydra_app/6_composition",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"As software gets more complex, we resort to modularity and composition to keep it manageable.\nWe can do the same with configs: suppose we want our working example to support multiple databases, with\nmultiple schemas per database, and different UIs. We wouldn't write a separate class\nfor each permutation of db, schema and UI, so we shouldn't write separate configs either. We use\nthe same solution in configuration as in writing the underlying software: composition. "),(0,i.mdx)("p",null,"To do this in Hydra, we first add a ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema")," and a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ui")," config group:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 postgresql.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 schema\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 school.yaml\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 support.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 warehouse.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 ui\n\u2502\xa0\xa0     \u251c\u2500\u2500 full.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 view.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,i.mdx)("p",null,"With these configs, we already have 12 possible combinations. Without composition we would need 12 separate configs,\nand a single change (such as renaming ",(0,i.mdx)("inlineCode",{parentName:"p"},"db.user")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"db.username"),") would need to be done separately in every one of them. "),(0,i.mdx)("p",null,"This is a maintainability nightmare -- but composition can come to the rescue."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n  - ui: full\n  - schema: school\n")),(0,i.mdx)("p",null,"The resulting configuration would be a composition of ",(0,i.mdx)("inlineCode",{parentName:"p"},"mysql"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"full")," ui and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"school")," database schema (which we are seeing for the first time here):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\nui:\n  windows:\n    create_db: true\n    view: true\nschema:\n  database: school\n  tables:\n  - name: students\n    fields:\n    - name: string\n    - class: int\n  - name: exams\n    fields:\n    - profession: string\n    - time: data\n    - class: int\n")),(0,i.mdx)("h3",{id:"summary"},"Summary"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The addition of each new db, schema, or ui only requires a single file"),(0,i.mdx)("li",{parentName:"ul"},"Each config group can have a default specified in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"defaults")," list"),(0,i.mdx)("li",{parentName:"ul"},"Any combination can be composed by selecting the desired option from each config group in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"defaults")," list or the command line.")),(0,i.mdx)("p",null,"Stay tuned to see how to run all of the combinations automatically (",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/multi-run"},"Multi-run"),")."))}d.isMDXComponent=!0}}]);