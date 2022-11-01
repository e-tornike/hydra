"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[228],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return c},T:function(){return l}});var r=t(87462),o=t(67294),i=t(39960),a=t(52263),s=t(80907);function c(e){return o.createElement(i.default,(0,r.Z)({},e,{to:(n=e.to,c=(0,s.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function l(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(c,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},55225:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=t(93899),s=["components"],c={id:"config_groups",title:"Config Groups"},l=void 0,u={unversionedId:"tutorials/structured_config/config_groups",id:"version-1.0/tutorials/structured_config/config_groups",title:"Config Groups",description:"Structured Configs can be used to implement config groups. Special care needs to be taken when specifying a",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/3_config_groups.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/config_groups",permalink:"/docs/1.0/tutorials/structured_config/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/3_config_groups.md",tags:[],version:"1.0",lastUpdatedBy:"Max Ehrlich",lastUpdatedAt:1667274084,formattedLastUpdatedAt:"11/1/2022",sidebarPosition:3,frontMatter:{id:"config_groups",title:"Config Groups"},sidebar:"version-1.0/docs",previous:{title:"A hierarchical static configuration",permalink:"/docs/1.0/tutorials/structured_config/hierarchical_static_config"},next:{title:"Defaults List",permalink:"/docs/1.0/tutorials/structured_config/defaults"}},p=[{value:"Config inheritance",id:"config-inheritance",children:[],level:3}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(a.T,{to:"examples/tutorials/structured_configs/3_config_groups",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Structured Configs can be used to implement config groups. Special care needs to be taken when specifying a\ndefault value for fields populated by a config group. We will look at why below."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Defining a config group for database" {16-17,22-23}',title:'"Defining',a:!0,config:!0,group:!0,for:!0,'database"':!0,"{16-17,22-23}":!0},'@dataclass\nclass MySQLConfig:\n    driver: str = "mysql"\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass PostGreSQLConfig:\n    driver: str = "postgresql"\n    host: str = "localhost"\n    port: int = 5432\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # Keep db omegaconf.MISSING. We will populate it using composition.\n    db: Any = MISSING\n\n# Create config group `db` with options \'mysql\' and \'postgreqsl\'\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The ",(0,i.mdx)("em",{parentName:"p"},"Config")," class is ",(0,i.mdx)("strong",{parentName:"p"},"NOT")," the Defaults list. We will see the Defaults list in the next page."))),(0,i.mdx)("p",null,"You can select the database from the command line:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  host: localhost\n  password: drowssap\n  port: 5432\n  timeout: 10\n  user: postgres_user\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"+")," above is required because there is no default choice for the config group ",(0,i.mdx)("inlineCode",{parentName:"p"},"db"),".\nThe next page will reintroduce the Defaults List, eliminating the need for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"+"),"."),(0,i.mdx)("h3",{id:"config-inheritance"},"Config inheritance"),(0,i.mdx)("p",null,"Standard Python inheritance can be used to get improved type safety, and to move common fields to the parent class."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Defining a config group for database using inheritance"',title:'"Defining',a:!0,config:!0,group:!0,for:!0,database:!0,using:!0,'inheritance"':!0},'@dataclass\nclass DBConfig:\n    host: str = "localhost"\n    port: int = MISSING\n    driver: str = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    port: int = 5432\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # We can now annotate db as DBConfig which\n    # improves both static and dynamic type safety.\n    db: DBConfig = MISSING\n')))}f.isMDXComponent=!0}}]);