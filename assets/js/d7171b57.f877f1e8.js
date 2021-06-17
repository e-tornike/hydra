(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(346)),i={id:"config_groups",title:"Config groups",sidebar_label:"Config groups"},c={unversionedId:"tutorial/config_groups",id:"version-0.11/tutorial/config_groups",isDocsHomePage:!1,title:"Config groups",description:"This is the most important concept in Hydra.",source:"@site/versioned_docs/version-0.11/tutorial/3_config_groups.md",slug:"/tutorial/config_groups",permalink:"/docs/0.11/tutorial/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/3_config_groups.md",version:"0.11",lastUpdatedBy:"Eli Simhayev",lastUpdatedAt:1623889091,formattedLastUpdatedAt:"6/17/2021",sidebar_label:"Config groups",sidebar:"version-0.11/docs",previous:{title:"Configuration file",permalink:"/docs/0.11/tutorial/config_file"},next:{title:"Defaults",permalink:"/docs/0.11/tutorial/defaults"}},p=[],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is the most important concept in Hydra."),Object(a.b)("p",null,"Suppose you want to benchmark PostgreSQL and MySQL for your application.\nWhen running of the application, you will need either MySQL or PostgreSQL - but not both."),Object(a.b)("p",null,"The way to do this with Hydra is with a ",Object(a.b)("strong",{parentName:"p"},"Config group"),".\nA config group is a mutually exclusive set of configuration files."),Object(a.b)("p",null,"To create a config group, create a directory - ",Object(a.b)("inlineCode",{parentName:"p"},"db")," - that will hold\na file for each database configuration alternative.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration\nfiles into a ",Object(a.b)("inlineCode",{parentName:"p"},"conf")," directory."),Object(a.b)("p",null,"Python file: ",Object(a.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf")\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"config_path")," can specify your config file as in the ",Object(a.b)("a",{parentName:"p",href:"/docs/0.11/tutorial/simple_cli"},"previous command line example"),", or the root directory for your configuration files.\nIf a config file is specified, its directory is the root directory."),Object(a.b)("p",null,"The directory structure of our application now looks like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 db\n\u2502\xa0\xa0     \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(a.b)("p",null,"If you run it, it prints an empty config because no configuration was specified."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\n{}\n")),Object(a.b)("p",null,"You can now choose which database configuration to use from the command line:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),Object(a.b)("p",null,"Like before, you can still override individual values in the resulting config:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),Object(a.b)("p",null,"This simple example demonstrated a very powerful feature of Hydra:\nYou can compose your configuration object from multiple configuration files."))}s.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);