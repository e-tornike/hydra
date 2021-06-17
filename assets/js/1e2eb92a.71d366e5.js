(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var a,r=t(3),i=t(8),o=(t(0),t(346)),c=t(353),s={id:"ax_sweeper",title:"Ax Sweeper plugin",sidebar_label:"Ax Sweeper plugin"},l={unversionedId:"plugins/ax_sweeper",id:"plugins/ax_sweeper",isDocsHomePage:!1,title:"Ax Sweeper plugin",description:"PyPI",source:"@site/docs/plugins/ax_sweeper.md",slug:"/plugins/ax_sweeper",permalink:"/docs/next/plugins/ax_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/ax_sweeper.md",version:"current",lastUpdatedBy:"Eli Simhayev",lastUpdatedAt:1623889091,formattedLastUpdatedAt:"6/17/2021",sidebar_label:"Ax Sweeper plugin",sidebar:"docs",previous:{title:"Submitit Launcher plugin",permalink:"/docs/next/plugins/submitit_launcher"},next:{title:"Nevergrad Sweeper plugin",permalink:"/docs/next/plugins/nevergrad_sweeper"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],u=(a="GithubLink",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={toc:p};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://img.shields.io/pypi/v/hydra-ax-sweeper"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-ax-sweeper",alt:"PyPI"})),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-ax-sweeper",alt:"PyPI - License"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-ax-sweeper",alt:"PyPI - Python Version"}),"\n",Object(o.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-ax-sweeper"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-ax-sweeper.svg",alt:"PyPI - Downloads"})),Object(o.b)(c.a,{text:"Example application",to:"plugins/hydra_ax_sweeper/example",mdxType:"ExampleGithubLink"}),Object(o.b)(c.a,{text:"Plugin source",to:"plugins/hydra_ax_sweeper",mdxType:"ExampleGithubLink"})),Object(o.b)("p",null,"This plugin provides a mechanism for Hydra applications to use the ",Object(o.b)("a",{parentName:"p",href:"https://ax.dev/"},"Adaptive Experimentation Platform, aka Ax"),". Ax can optimize any experiment - machine learning experiments, A/B tests, and simulations."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-ax-sweeper --upgrade\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Once installed, add ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/sweeper=ax")," to your command line. Alternatively, override ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/sweeper: ax\n")),Object(o.b)("p",null,"We include an example of how to use this plugin. The file ",Object(o.b)(u,{to:"plugins/hydra_ax_sweeper/example/banana.py",mdxType:"GithubLink"},"example/banana.py"),"\nimplements the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rosenbrock_function"},"Rosenbrock function (aka Banana function)"),".\nThe return value of the function should be the value that we want to optimize."),Object(o.b)("p",null,"To compute the best parameters for the Banana function, clone the code and run the following command in the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins/hydra_ax_sweeper")," directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"python example/banana.py -m 'banana.x=int(interval(-5, 5))' 'banana.y=interval(-5, 10.1)'\n")),Object(o.b)("p",null,"The output of a run looks like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[HYDRA] AxSweeper is optimizing the following parameters:\nbanana.x: range=[-5, 5]\nbanana.y: range=[-5.0, 10.1]\nax.modelbridge.dispatch_utils: Using Bayesian Optimization generation strategy: GenerationStrategy(name='Sobol+GPEI', steps=[Sobol for 5 trials, GPEI for subsequent trials]). Iterations after 5 will take longer to generate due to model-fitting.\n[HYDRA] AxSweeper is launching 5 jobs\n[HYDRA] Launching 5 jobs locally\n[HYDRA]        #0 : banana.x=2 banana.y=-0.988\n[__main__][INFO] - Banana_Function(x=2, y=-0.988)=2488.883\n[HYDRA]        #1 : banana.x=-1 banana.y=7.701\n[__main__][INFO] - Banana_Function(x=-1, y=7.701)=4493.987\n[HYDRA]        #2 : banana.x=-1 banana.y=-3.901\n[__main__][INFO] - Banana_Function(x=-1, y=-3.901)=2406.259\n[HYDRA]        #3 : banana.x=-1 banana.y=0.209\n[__main__][INFO] - Banana_Function(x=-1, y=0.209)=66.639\n[HYDRA]        #4 : banana.x=4 banana.y=-4.557\n[__main__][INFO] - Banana_Function(x=4, y=-4.557)=42270.006\n[HYDRA] New best value: 66.639, best parameters: {'banana.x': -1, 'banana.y': 0.209}\n")),Object(o.b)("p",null,"In this example, we set the range of ",Object(o.b)("inlineCode",{parentName:"p"},"x")," parameter as an integer in the interval ",Object(o.b)("inlineCode",{parentName:"p"},"[-5, 5]")," and the range of ",Object(o.b)("inlineCode",{parentName:"p"},"y")," parameter as a float in the interval ",Object(o.b)("inlineCode",{parentName:"p"},"[-5, 10.1]"),". Note that in the case of ",Object(o.b)("inlineCode",{parentName:"p"},"x"),", we used ",Object(o.b)("inlineCode",{parentName:"p"},"int(interval(...))")," and hence only integers are sampled. In the case of ",Object(o.b)("inlineCode",{parentName:"p"},"y"),", we used ",Object(o.b)("inlineCode",{parentName:"p"},"interval(...)")," which refers to a floating-point interval. Other supported formats are fixed parameters (e.g.",Object(o.b)("inlineCode",{parentName:"p"}," banana.x=5.0"),"), choice parameters (eg ",Object(o.b)("inlineCode",{parentName:"p"},"banana.x=choice(1,2,3)"),") and range (eg ",Object(o.b)("inlineCode",{parentName:"p"},"banana.x=range(1, 10)"),"). Note that ",Object(o.b)("inlineCode",{parentName:"p"},"interval"),", ",Object(o.b)("inlineCode",{parentName:"p"},"choice")," etc. are functions provided by Hydra, and you can read more about them ",Object(o.b)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/"},"here"),". An important thing to remember is, use ",Object(o.b)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/#interval-sweep"},Object(o.b)("inlineCode",{parentName:"a"},"interval"))," when we want Ax to sample values from an interval. ",Object(o.b)("a",{parentName:"p",href:"https://ax.dev/api/ax.html#ax.RangeParameter"},Object(o.b)("inlineCode",{parentName:"a"},"RangeParameter"))," in Ax is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"interval")," in Hydra. Remember to use ",Object(o.b)("inlineCode",{parentName:"p"},"int(interval(...))")," if you want to sample only integer points from the interval. ",Object(o.b)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/#range-sweep"},Object(o.b)("inlineCode",{parentName:"a"},"range"))," can be used as an alternate way of specifying choice parameters. For example ",Object(o.b)("inlineCode",{parentName:"p"},"python example/banana.py -m banana.x=choice(1, 2, 3, 4)")," is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"python example/banana.py -m banana.x=range(1, 5)"),"."),Object(o.b)("p",null,"The values of the ",Object(o.b)("inlineCode",{parentName:"p"},"x")," and ",Object(o.b)("inlineCode",{parentName:"p"},"y")," parameters can also be set using the config file ",Object(o.b)("inlineCode",{parentName:"p"},"plugins/hydra_ax_sweeper/example/conf/config.yaml"),". For instance, the configuration corresponding to the commandline arguments is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"banana.x:\n type: range\n bounds: [-5, 5]\n\nbanana.y:\n type: range\n bounds: [-5, 10.1]\n")),Object(o.b)("p",null,"In general, the plugin supports setting all the Ax supported ",Object(o.b)("a",{parentName:"p",href:"https://ax.dev/api/core.html?highlight=range#module-ax.core.parameter"},"Parameters")," in the config. According to the ",Object(o.b)("a",{parentName:"p",href:"https://ax.dev/api/service.html#ax.service.ax_client.AxClient.create_experiment"},"Ax documentation"),", the required elements in the config are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," - Name of the parameter. It is of type string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"type")," - Type of the parameter. It can take the following values: ",Object(o.b)("inlineCode",{parentName:"li"},"range"),", ",Object(o.b)("inlineCode",{parentName:"li"},"fixed"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"choice"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"bounds")," - Required only for the ",Object(o.b)("inlineCode",{parentName:"li"},"range")," parameters. It should be a list of two values, with the lower bound first."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"values")," - Required only for the ",Object(o.b)("inlineCode",{parentName:"li"},"choice")," parameters. It should be a list of values."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value")," - Required only for the ",Object(o.b)("inlineCode",{parentName:"li"},"fixed")," parameters. It should be a single value.")),Object(o.b)("p",null,"Note that if you want to sample integers in the range ",Object(o.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(o.b)("inlineCode",{parentName:"p"},"5"),", you need to specify the range as ",Object(o.b)("inlineCode",{parentName:"p"},"int(interval(-5, 5))")," (in the command line) or ",Object(o.b)("inlineCode",{parentName:"p"},"[-5, 5]")," (in config). If you want to sample floats in range ",Object(o.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(o.b)("inlineCode",{parentName:"p"},"5"),", you need to specify the range as ",Object(o.b)("inlineCode",{parentName:"p"},"interval(-5, 5)")," (in the command line) or ",Object(o.b)("inlineCode",{parentName:"p"},"[-5.0, 5.0]")," (in config)."),Object(o.b)("p",null,"The Ax Sweeper assumes the optimized function is a noisy function with unknown measurement uncertainty.\nThis can be changed by overriding the ",Object(o.b)("inlineCode",{parentName:"p"},"is_noisy")," parameter to False, which specifies that each measurement is exact, i.e., each measurement has a measurement uncertainty of zero."),Object(o.b)("p",null,"If measurement uncertainty is known or can be estimated (e.g., via a heuristic or via the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Standard_error"},"standard error of the mean")," of repeated measurements), the measurement function can return the tuple ",Object(o.b)("inlineCode",{parentName:"p"},"(measurement_value, measurement_uncertainty)")," instead of a scalar value."),Object(o.b)("p",null,"The parameters for the optimization process can also be set in the config file. Specifying the Ax config is optional. You can discover the Ax Sweeper parameters with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/sweeper=ax --cfg hydra -p hydra.sweeper"',title:'"$',python:!0,"your_app.py":!0,"hydra/sweeper":"ax","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_ax_sweeper.ax_sweeper.AxSweeper\nmax_batch_size: null\nax_config:\n  max_trials: 10\n  early_stop:\n    minimize: true\n    max_epochs_without_improvement: 10\n    epsilon: 1.0e-05\n  experiment:\n    name: null\n    objective_name: objective\n    minimize: true\n    parameter_constraints: null\n    outcome_constraints: null\n    status_quo: null\n  client:\n    verbose_logging: false\n    random_seed: null\n  is_noisy: true\n  params: {}\n")),Object(o.b)("p",null,"There are several standard approaches for configuring plugins. Check ",Object(o.b)("a",{parentName:"p",href:"/docs/next/patterns/configuring_plugins"},"this page")," for more information."))}d.isMDXComponent=!0},346:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},347:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},348:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(11),o=t(347),c=t(7),s=Object(a.createContext)({collectLink:function(){}}),l=t(349),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};n.a=function(e){var n,t,u,b=e.isNavLink,d=e.to,m=e.href,f=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,O=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(l.b)().withBaseUrl,x=Object(a.useContext)(s),w=d||m,N=Object(o.a)(w),_=null==w?void 0:w.replace("pathname://",""),C=void 0!==_?(t=_,y&&function(e){return e.startsWith("/")}(t)?j(t):t):void 0,A=Object(a.useRef)(!1),D=b?i.e:i.c,P=c.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!P&&N&&window.docusaurus.prefetch(C),function(){P&&u&&u.disconnect()}}),[C,P,N]);var k=null!==(n=null==C?void 0:C.startsWith("#"))&&void 0!==n&&n,E=!C||!N||k;return C&&N&&!k&&!g&&x.collectLink(C),E?r.a.createElement("a",Object.assign({href:C},w&&!N&&{target:"_blank",rel:"noopener noreferrer"},O)):r.a.createElement(D,Object.assign({},O,{onMouseEnter:function(){A.current||(window.docusaurus.preload(C),A.current=!0)},innerRef:function(e){var n,t;P&&e&&N&&(n=e,t=function(){window.docusaurus.prefetch(C)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(n),u.disconnect(),t())}))}))).observe(n))},to:C||""},b&&{isActive:h,activeClassName:f}))}},349:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var a=t(10),r=t(347);function i(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(c)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+p:p}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},350:function(e,n,t){try{e.exports=t(351)}catch(r){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},351:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var a=t(23),r=t(38),i=t(352);n.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},n.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},n.useActivePlugin=function(e){void 0===e&&(e={});var t=n.useAllDocsData(),r=a.useLocation().pathname;return i.getActivePlugin(t,r,e)},n.useActivePluginAndVersion=function(e){void 0===e&&(e={});var t=n.useActivePlugin(e),r=a.useLocation().pathname;if(t)return{activePlugin:t,activeVersion:i.getActiveVersion(t.pluginData,r)}},n.useVersions=function(e){return n.useDocsData(e).versions},n.useLatestVersion=function(e){var t=n.useDocsData(e);return i.getLatestVersion(t)},n.useActiveVersion=function(e){var t=n.useDocsData(e),r=a.useLocation().pathname;return i.getActiveVersion(t,r)},n.useActiveDocContext=function(e){var t=n.useDocsData(e),r=a.useLocation().pathname;return i.getActiveDocContext(t,r)},n.useDocVersionSuggestions=function(e){var t=n.useDocsData(e),r=a.useLocation().pathname;return i.getDocVersionSuggestions(t,r)}},352:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var a=t(23);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var r=Object.entries(e).find((function(e){e[0];var t=e[1];return!!a.matchPath(n,{path:t.path,exact:!1,strict:!1})})),i=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!i&&t.failfast)throw new Error("Can't find active docs plugin for pathname="+n+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},n.getActiveVersion=function(e,t){var r=n.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(t,{path:e.path,exact:!1,strict:!1})}))},n.getActiveDocContext=function(e,t){var r,i,o=n.getActiveVersion(e,t),c=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(r=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===r&&(i[e.name]=n)}))})),i):{}}},n.getDocVersionSuggestions=function(e,t){var a=n.getLatestVersion(e),r=n.getActiveDocContext(e,t),i=r.activeVersion!==a;return{latestDocSuggestion:i?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:i?a:void 0}}},353:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return p}));var a=t(3),r=t(0),i=t.n(r),o=t(348),c=t(10),s=t(350);function l(e){return i.a.createElement(o.a,Object(a.a)({},e,{to:(n=e.to,r=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(t=null==r?void 0:r.name)&&void 0!==t?t:"current"]+n),target:"_blank"}));var n,t,r}function p(e){var n,t=null!==(n=e.text)&&void 0!==n?n:"Example";return i.a.createElement(l,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}}}]);