"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4002],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return s}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),s=function(e){return function(n){var a=d(n.components);return t.createElement(e,i({},n,{components:a}))}},d=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,h=s["".concat(o,".").concat(u)]||s[u]||c[u]||i;return a?t.createElement(h,l(l({ref:n},m),{},{components:a})):t.createElement(h,l({ref:n},m))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},93899:function(e,n,a){a.d(n,{Z:function(){return p},T:function(){return m}});var t=a(87462),r=a(67294),i=a(39960),o=a(52263),l=a(80907);function p(e){return r.createElement(i.default,(0,t.Z)({},e,{to:(n=e.to,p=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(a=null==p?void 0:p.name)?a:"current"]+n),target:"_blank"}));var n,a,p}function m(e){var n,a=null!=(n=e.text)?n:"Example (Click Here)";return r.createElement(p,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+a+"-informational",alt:"Example (Click Here)"}))}},77464:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(93899),l=["components"],p={id:"optuna_sweeper",title:"Optuna Sweeper plugin",sidebar_label:"Optuna Sweeper plugin"},m=void 0,s={unversionedId:"plugins/optuna_sweeper",id:"plugins/optuna_sweeper",title:"Optuna Sweeper plugin",description:"PyPI",source:"@site/docs/plugins/optuna_sweeper.md",sourceDirName:"plugins",slug:"/plugins/optuna_sweeper",permalink:"/docs/next/plugins/optuna_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/plugins/optuna_sweeper.md",tags:[],version:"current",lastUpdatedBy:"Jasha",lastUpdatedAt:1650557179,formattedLastUpdatedAt:"4/21/2022",frontMatter:{id:"optuna_sweeper",title:"Optuna Sweeper plugin",sidebar_label:"Optuna Sweeper plugin"},sidebar:"docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/next/plugins/nevergrad_sweeper"},next:{title:"Terminology",permalink:"/docs/next/advanced/terminology"}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Example 1: Single-Objective Optimization",id:"example-1-single-objective-optimization",children:[],level:2},{value:"Sampler configuration",id:"sampler-configuration",children:[],level:2},{value:"Search space configuration",id:"search-space-configuration",children:[{value:"Configuring through commandline override",id:"configuring-through-commandline-override",children:[{value:"Interval override",id:"interval-override",children:[],level:4},{value:"Range override",id:"range-override",children:[],level:4},{value:"Choice override",id:"choice-override",children:[],level:4}],level:3},{value:"Configuring through config file",id:"configuring-through-config-file",children:[],level:3}],level:2},{value:"Example 2:  Multi-Objective Optimization",id:"example-2--multi-objective-optimization",children:[],level:2},{value:"EXPERIMENTAL:  Custom-Search-Space Optimization",id:"experimental--custom-search-space-optimization",children:[{value:"Order of trial configuration",id:"order-of-trial-configuration",children:[],level:3}],level:2}],u={toc:d};function c(e){var n=e.components,p=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,t.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-optuna-sweeper/"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-optuna-sweeper",alt:"PyPI"})),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-optuna-sweeper",alt:"PyPI - License"}),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-optuna-sweeper",alt:"PyPI - Python Version"}),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-optuna-sweeper"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-optuna-sweeper.svg",alt:"PyPI - Downloads"})),(0,i.mdx)(o.T,{text:"Example application",to:"plugins/hydra_optuna_sweeper/example",mdxType:"ExampleGithubLink"}),(0,i.mdx)(o.T,{text:"Plugin source",to:"plugins/hydra_optuna_sweeper",mdxType:"ExampleGithubLink"})),(0,i.mdx)("p",null,"This plugin enables Hydra applications to utilize ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.org"},"Optuna")," for the optimization of the parameters of experiments."),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("p",null,"This plugin requires ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra-core>=1.1.0"),". Please install it with the following command:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-core --upgrade\n")),(0,i.mdx)("p",null,"You can install the plugin via pip:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-optuna-sweeper --upgrade\n")),(0,i.mdx)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/patterns/configuring_plugins"},"this page")," for more information."),(0,i.mdx)("h2",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"Please set ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/sweeper")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"optuna")," in your config file."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/sweeper: optuna\n")),(0,i.mdx)("p",null,"Alternatively, add ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/sweeper=optuna")," option to your command line."),(0,i.mdx)("p",null,"The default configuration is ",(0,i.mdx)(o.Z,{to:"plugins/hydra_optuna_sweeper/hydra_plugins/hydra_optuna_sweeper/config.py",mdxType:"GithubLink"},"here"),"."),(0,i.mdx)("h2",{id:"example-1-single-objective-optimization"},"Example 1: Single-Objective Optimization"),(0,i.mdx)("p",null,"We include an example in ",(0,i.mdx)(o.Z,{to:"plugins/hydra_optuna_sweeper/example",mdxType:"GithubLink"},"this directory"),". ",(0,i.mdx)("inlineCode",{parentName:"p"},"example/sphere.py")," implements a simple benchmark function to be minimized."),(0,i.mdx)("p",null,"You can discover the Optuna sweeper parameters with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="python example/sphere.py hydra/sweeper=optuna --cfg hydra -p hydra.sweeper"',title:'"python',"example/sphere.py":!0,"hydra/sweeper":"optuna","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\nsampler:\n  _target_: optuna.samplers.TPESampler\n  seed: 123\n  consider_prior: true\n  prior_weight: 1.0\n  consider_magic_clip: true\n  consider_endpoints: false\n  n_startup_trials: 10\n  n_ei_candidates: 24\n  multivariate: false\n  warn_independent_sampling: true\n_target_: hydra_plugins.hydra_optuna_sweeper.optuna_sweeper.OptunaSweeper\ndirection: minimize\nstorage: null\nstudy_name: sphere\nn_trials: 20\nn_jobs: 1\nparams:\n  x: range(-5.5,5.5,step=0.5)\n  y: choice(-5,0,5)\n")),(0,i.mdx)("p",null,"The function decorated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"x: 0\ny: 0\n")),(0,i.mdx)("p",null,"To run optimization, clone the code and run the following command in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"plugins/hydra_optuna_sweeper")," directory:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun\n")),(0,i.mdx)("p",null,"You can also override the search space parametrization:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=interval(-5.0, 5.0)' 'y=interval(0, 10)'\n")),(0,i.mdx)("p",null,"You might find the ",(0,i.mdx)("inlineCode",{parentName:"p"},"optimization_results.yaml")," file (i.e. best params and best value) under ",(0,i.mdx)("inlineCode",{parentName:"p"},"multirun")," logs folder:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"name: optuna\nbest_params:\n  x: 0.0\n  'y': 0\nbest_value: 0.0\n")),(0,i.mdx)("h2",{id:"sampler-configuration"},"Sampler configuration"),(0,i.mdx)("p",null,"This plugin supports Optuna's ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/samplers.html"},"samplers"),".\nYou can change the sampler by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/sweeper/sampler")," or change sampler settings within ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweeper.sampler"),"."),(0,i.mdx)("h2",{id:"search-space-configuration"},"Search space configuration"),(0,i.mdx)("p",null,"This plugin supports Optuna's ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/distributions.html"},"distributions")," to configure search spaces. They can be defined either through commandline override or config file."),(0,i.mdx)("h3",{id:"configuring-through-commandline-override"},"Configuring through commandline override"),(0,i.mdx)("p",null,"Hydra provides a override parser that support rich syntax. Please refer to ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/basic"},"OverrideGrammer/Basic")," and ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/extended"},"OverrideGrammer/Extended")," for details."),(0,i.mdx)("h4",{id:"interval-override"},"Interval override"),(0,i.mdx)("p",null,"By default, ",(0,i.mdx)("inlineCode",{parentName:"p"},"interval")," is converted to ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"UniformDistribution")),". You can use ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"IntUniformDistribution")),", ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"LogUniformDistribution"))," or ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"IntLogUniformDistribution"))," by casting the interval to ",(0,i.mdx)("inlineCode",{parentName:"p"},"int")," and tagging it with ",(0,i.mdx)("inlineCode",{parentName:"p"},"log"),"."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Example for interval override"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=int(interval(-5.0, 5.0))' 'y=tag(log, interval(1, 10))'\n")),(0,i.mdx)("p",null,"The output is as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=-3 y=1.6859762540733367\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=1 y=5.237816870668193\n...\n[HYDRA] Best parameters: {'x': 0, 'y': 1.0929184723430116}\n[HYDRA] Best value: 1.1944707871885822\n"))),(0,i.mdx)("h4",{id:"range-override"},"Range override"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"range")," is converted to ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". If you apply ",(0,i.mdx)("inlineCode",{parentName:"p"},"shuffle")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"range"),", ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"CategoricalDistribution"))," is used instead.\nIf any of ",(0,i.mdx)("inlineCode",{parentName:"p"},"range"),"'s start, stop or step is of type float, it will be converted to ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.DiscreteUniformDistribution.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"DiscreteUniformDistribution"))),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Example for range override"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=range(-5.0, 5.0)' 'y=shuffle(range(-5, 5))'\n")),(0,i.mdx)("p",null,"The output is as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=-3 y=-4\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=1 y=-1\n...\n[HYDRA] Best parameters: {'x': 0, 'y': -1}\n[HYDRA] Best value: 1.0\n"))),(0,i.mdx)("h4",{id:"choice-override"},"Choice override"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"choice")," is converted to ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Example for choice override"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=choice(-5.0, 0.0, 5.0)' 'y=choice(0, 1, 2, 3, 4, 5)'\n")),(0,i.mdx)("p",null,"The output is as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=5.0 y=5\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=5.0 y=2\n...\n[HYDRA] Best parameters: {'x': 0.0, 'y': 0}\n[HYDRA] Best value: 0.0\n"))),(0,i.mdx)("h3",{id:"configuring-through-config-file"},"Configuring through config file"),(0,i.mdx)("p",null,"The syntax in config file is consistent with the above commandline override. For example, a commandline override\n",(0,i.mdx)("inlineCode",{parentName:"p"},"x=range(1,4)")," can be expressed in config file as ",(0,i.mdx)("inlineCode",{parentName:"p"},"x: range(1,4)")," under the ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweeper.params")," node."),(0,i.mdx)("h2",{id:"example-2--multi-objective-optimization"},"Example 2:  Multi-Objective Optimization"),(0,i.mdx)("p",null,"In the same directory, ",(0,i.mdx)("inlineCode",{parentName:"p"},"example/multi-objective.py")," implements a simple benchmark function, which has two objective values. We want to minimize two objectives simultaneously."),(0,i.mdx)("p",null,"You can discover the Optuna sweeper parameters with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/multi-objective.py hydra/sweeper=optuna --cfg hydra -p hydra.sweeper\n")),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Configuration of the multi-objective optimization example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"# @package hydra.sweeper\nsampler:\n  _target_: optuna.samplers.NSGAIISampler\n  seed: 123\n  population_size: 50\n  mutation_prob: null\n  crossover_prob: 0.9\n  swapping_prob: 0.5\n  constraints_func: null\n_target_: hydra_plugins.hydra_optuna_sweeper.optuna_sweeper.OptunaSweeper\ndirection:\n- minimize\n- minimize\nstorage: null\nstudy_name: multi-objective\nn_trials: 20\nn_jobs: 1\nparams:\n  x: range(0, 5, step=0.5)\n  y: range(0, 3, step=0.5)\n"))),(0,i.mdx)("p",null,"To run the optimization, use the following command in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"plugins/hydra_optuna_sweeper")," directory:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/multi-objective.py --multirun\n")),(0,i.mdx)("p",null,"For problems with trade-offs between two different objectives, there may be no single solution that simultaneously minimizes both objectives. Instead, we obtained a set of solutions, namely ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pareto_efficiency"},"Pareto optimal solutions"),", that show the best trade-offs possible between the objectives. In the following figure, the blue dots show the Pareto optimal solutions in the optimization results."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Pareto-optimal solutions",src:a(70353).Z})),(0,i.mdx)("h2",{id:"experimental--custom-search-space-optimization"},"EXPERIMENTAL:  Custom-Search-Space Optimization"),(0,i.mdx)("p",null,"Hydra's Optuna Sweeper allows users to provide a hook for custom search space configuration.\nThis means you can work directly with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"optuna.trial.Trial")," object to suggest parameters.\nTo use this feature, define a python function with signature ",(0,i.mdx)("inlineCode",{parentName:"p"},"Callable[[DictConfig, optuna.trial.Trial], None]"),"\nand set the ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweeper.custom_search_space")," key in your config to target that function."),(0,i.mdx)("p",null,"You can find a full example in the same directory as before, where ",(0,i.mdx)("inlineCode",{parentName:"p"},"example/custom-search-space-objective.py")," implements a benchmark function to be minimized.\nThe example shows the use of Optuna's ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/tutorial/10_key_features/002_configurations.html"},"pythonic search spaces")," in combination with Hydra.\nPart of the search space configuration is defined in config files, and part of it is written in Python."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Example: Custom search space configuration"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/sweeper: optuna\n\nhydra:\n  sweeper:\n    sampler:\n      seed: 123\n    direction: minimize\n    study_name: custom-search-space\n    storage: null\n    n_trials: 20\n    n_jobs: 1\n\n    params:\n      x: range(-5.5, 5.5, 0.5)\n      y: choice(-5, 0, 5)\n    # `custom_search_space` should be a dotpath pointing to a\n    # callable that provides search-space configuration logic:\n    custom_search_space: .custom-search-space-objective.configure\n\nx: 1\ny: 1\nz: 100\nmax_z_difference_from_x: 0.5\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'# example/custom-search-space-objective.py\n\n...\n\ndef configure(cfg: DictConfig, trial: Trial) -> None:\n    x_value = trial.params["x"]\n    trial.suggest_float(\n        "z",\n        x_value - cfg.max_z_difference_from_x,\n        x_value + cfg.max_z_difference_from_x,\n    )\n    trial.suggest_float("+w", 0.0, 1.0)  # note +w here, not w as w is a new parameter\n\n...\n'))),(0,i.mdx)("p",null,"The method that ",(0,i.mdx)("inlineCode",{parentName:"p"},"custom_search_space")," points to must accepts both a DictConfig with already set options and a trial object which needs further configuration. In this example we limit ",(0,i.mdx)("inlineCode",{parentName:"p"},"z")," the difference between ",(0,i.mdx)("inlineCode",{parentName:"p"},"x")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"z")," to be no more than 0.5.\nNote that this ",(0,i.mdx)("inlineCode",{parentName:"p"},"custom_search_space")," API should be considered experimental and is subject to change."),(0,i.mdx)("h3",{id:"order-of-trial-configuration"},"Order of trial configuration"),(0,i.mdx)("p",null,"Configuring a trial object is done in the following sequence:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"search space parameters are set from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.sweeper.params")," key in the config"),(0,i.mdx)("li",{parentName:"ul"},"Command line overrides are set"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"custom_search_space")," parameters are set")),(0,i.mdx)("p",null,"It is not allowed to set search space parameters in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"custom_search_space")," method for parameters which have a fixed value from command line overrides. ",(0,i.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.trial.Trial.html#optuna.trial.Trial.user_attrs"},"Trial.user_attrs")," can be inspected to find any of such fixed parameters."))}c.isMDXComponent=!0},70353:function(e,n,a){n.Z=a.p+"assets/images/multi_objective_result-398b4421a2661ec72d7c323762472ad5.png"}}]);