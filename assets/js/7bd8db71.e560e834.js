(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5223],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(9756),a=n(7294),i=n(3727),o=n(2263),l=n(3919),u=n(412),s=(0,a.createContext)({collectLink:function(){}}),c=n(4996),p=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,f=e.to,h=e.href,y=e.activeClassName,g=e.isActive,k=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,v=void 0===b||b,N=(0,r.Z)(e,d),w=(0,o.default)().siteConfig.trailingSlash,O=(0,c.C)().withBaseUrl,_=(0,a.useContext)(s),C=f||h,j=(0,l.Z)(C),x=null==C?void 0:C.replace("pathname://",""),T=void 0!==x?(n=x,v&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0;T&&j&&(T=(0,p.applyTrailingSlash)(T,w));var H,P=(0,a.useRef)(!1),q=m?i.OL:i.rU,D=u.default.canUseIntersectionObserver;(0,a.useEffect)((function(){return!D&&j&&null!=T&&window.docusaurus.prefetch(T),function(){D&&H&&H.disconnect()}}),[T,D,j]);var A=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,R=!T||!j||A;return T&&j&&!A&&!k&&_.collectLink(T),R?a.createElement("a",Object.assign({href:T},C&&!j&&{target:"_blank",rel:"noopener noreferrer"},N)):a.createElement(q,Object.assign({},N,{onMouseEnter:function(){P.current||null==T||(window.docusaurus.preload(T),P.current=!0)},innerRef:function(e){var t,n;D&&e&&j&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(H=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(H.unobserve(t),H.disconnect(),n())}))}))).observe(t))},to:T||""},m&&{isActive:g,activeClassName:y}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,r=e.split(/[#?]/)[0],a="/"===r?"/":t?(n=r).endsWith("/")?n:n+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);return e.replace(r,a)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},4318:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(4996),n(6742),["components"]),l={id:"intro",title:"Getting started",sidebar_label:"Getting started"},u=void 0,s={unversionedId:"intro",id:"version-1.0/intro",isDocsHomePage:!1,title:"Getting started",description:"Introduction",source:"@site/versioned_docs/version-1.0/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/1.0/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/intro.md",version:"1.0",lastUpdatedBy:"Marten Lienen",lastUpdatedAt:1630340647,formattedLastUpdatedAt:"8/30/2021",frontMatter:{id:"intro",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-1.0/docs",next:{title:"Terminology",permalink:"/docs/1.0/terminology"}},c=[{value:"Introduction",id:"introduction",children:[{value:"Key features:",id:"key-features",children:[]}]},{value:"Versions",id:"versions",children:[]},{value:"Quick start guide",id:"quick-start-guide",children:[{value:"Installation",id:"installation",children:[]},{value:"Basic example",id:"basic-example",children:[]},{value:"Composition example",id:"composition-example",children:[]},{value:"Multirun",id:"multirun",children:[]}]},{value:"Other stuff",id:"other-stuff",children:[{value:"Community",id:"community",children:[]},{value:"Citing Hydra",id:"citing-hydra",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Hydra is an open-source Python framework that simplifies the development of research and other complex applications.\nThe key feature is the ability to dynamically create a hierarchical configuration by composition and override it through config files and the command line.\nThe name Hydra comes from its ability to run multiple similar jobs - much like a Hydra with multiple heads."),(0,i.kt)("h3",{id:"key-features"},"Key features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hierarchical configuration composable from multiple sources"),(0,i.kt)("li",{parentName:"ul"},"Configuration can be specified or overridden from the command line"),(0,i.kt)("li",{parentName:"ul"},"Dynamic command line tab completion"),(0,i.kt)("li",{parentName:"ul"},"Run your application locally or launch it to run remotely"),(0,i.kt)("li",{parentName:"ul"},"Run multiple jobs with different arguments with a single command")),(0,i.kt)("h2",{id:"versions"},"Versions"),(0,i.kt)("p",null,"Hydra supports Linux, Mac and Windows.",(0,i.kt)("br",{parentName:"p"}),"\n","Use the version switcher in the top bar to switch between documentation versions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Release notes"),(0,i.kt)("th",{parentName:"tr",align:null},"Python Versions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1.1 (Stable)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/facebookresearch/hydra/releases/tag/v1.1.0"},"Release notes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"3.6 - 3.9"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u25ba"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/facebookresearch/hydra/releases/tag/v1.0.0rc1"},"Release notes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"3.6 - 3.8"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"0.11"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/facebookresearch/hydra/releases/tag/0.11.0"},"Release notes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2.7, 3.5 - 3.8"))))),(0,i.kt)("h2",{id:"quick-start-guide"},"Quick start guide"),(0,i.kt)("p",null,"This guide will show you some of the most important features of Hydra.\nRead the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/your_first_app/simple_cli"},"tutorial")," to gain a deeper understanding."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-core --upgrade\n")),(0,i.kt)("h3",{id:"basic-example"},"Basic example"),(0,i.kt)("p",null,"Config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),(0,i.kt)("p",null,"Application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'{4-6} title="my_app.py"',"{4-6}":!0,title:'"my_app.py"'},'import hydra\nfrom omegaconf import DictConfig, OmegaConf\n\n@hydra.main(config_name="config")\ndef my_app(cfg : DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,i.kt)("p",null,"You can learn more about OmegaConf ",(0,i.kt)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation"},"here")," later."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,i.kt)("p",null,"You can override values in the loaded config from the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5}","{4-5}":!0},"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),(0,i.kt)("h3",{id:"composition-example"},"Composition example"),(0,i.kt)("p",null,"You may want to alternate between two different databases. To support this create a ",(0,i.kt)("inlineCode",{parentName:"p"},"config group")," named db,\nand place one config file for each alternative inside:\nThe directory structure of our application now looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2514\u2500\u2500 postgresql.yaml\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,i.kt)("p",null,"Here is the new config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"defaults")," is a special directive telling Hydra to use db/mysql.yaml when composing the configuration object.\nThe resulting cfg object is a composition of configs from defaults with configs specified in your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml"),"."),(0,i.kt)("p",null,"You can now choose which database configuration to use from the and override values from the command line: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\nwebsite:\n  domain: example.com\n")),(0,i.kt)("p",null,"You can have as many config groups as you need."),(0,i.kt)("h3",{id:"multirun"},"Multirun"),(0,i.kt)("p",null,"You can run your function multiple times with different configuration easily with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--multirun|-m")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ python my_app.py --multirun db=mysql,postgresql\n[HYDRA] Sweep output dir : multirun/2020-01-09/01-16-29\n[HYDRA] Launching 2 jobs locally\n[HYDRA]        #0 : db=mysql\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nwebsite:\n    domain: example.com\n\n[HYDRA]        #1 : db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\nwebsite:\n    domain: example.com\n")),(0,i.kt)("p",null,"There is a whole lot more to Hydra. Read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/your_first_app/simple_cli"},"tutorial")," to learn more."),(0,i.kt)("h2",{id:"other-stuff"},"Other stuff"),(0,i.kt)("h3",{id:"community"},"Community"),(0,i.kt)("p",null,"Ask questions in the chat or StackOverflow (Use the tag #fb-hydra):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hydra-framework.zulipchat.com"},"Zulip Chat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/fb-hydra"},"StackOverflow"))),(0,i.kt)("p",null,"Follow Hydra on Twitter and Facebook:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/Hydra-Framework-109364473802509/"},"Facebook page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/Hydra_Framework"},"Twitter"))),(0,i.kt)("h3",{id:"citing-hydra"},"Citing Hydra"),(0,i.kt)("p",null,"If you use Hydra in your research please use the following BibTeX entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"@Misc{Yadan2019Hydra,\n  author =       {Omry Yadan},\n  title =        {Hydra - A framework for elegantly configuring complex applications},\n  howpublished = {Github},\n  year =         {2019},\n  url =          {https://github.com/facebookresearch/hydra}\n}\n")))}d.isMDXComponent=!0}}]);