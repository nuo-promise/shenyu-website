"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25914:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Hystrix Plugin",keywords:["Hystrix"],description:"hystrix plugin"},l=void 0,o={unversionedId:"plugin-center/fault-tolerance/hystrix-plugin",id:"version-2.4.1/plugin-center/fault-tolerance/hystrix-plugin",isDocsHomePage:!1,title:"Hystrix Plugin",description:"hystrix plugin",source:"@site/versioned_docs/version-2.4.1/plugin-center/fault-tolerance/hystrix-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/hystrix-plugin",permalink:"/docs/2.4.1/plugin-center/fault-tolerance/hystrix-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/plugin-center/fault-tolerance/hystrix-plugin.md",version:"2.4.1",frontMatter:{title:"Hystrix Plugin",keywords:["Hystrix"],description:"hystrix plugin"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Websocket Plugin",permalink:"/docs/2.4.1/plugin-center/proxy/websocket-plugin"},next:{title:"RateLimiter Plugin",permalink:"/docs/2.4.1/plugin-center/fault-tolerance/rate-limiter-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Add hystrix plugin dependency",id:"add-hystrix-plugin-dependency",children:[]},{value:"Hystrix Config",id:"hystrix-config",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hystrix plugin is the core implementation used by gateway to fuse traffic."),(0,i.kt)("li",{parentName:"ul"},"Support ",(0,i.kt)("inlineCode",{parentName:"li"},"thread")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"semaphore")," .")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("p",null,"Select a mode to start shenyu-admin. For details, see  deployment. For example, with ",(0,i.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," starts the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," background management system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In BasicConfig --\x3e Plugin --\x3e hystrix, set to enable."),(0,i.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,i.kt)("img",{src:"/img/shenyu/plugin/hystrix/hystrix_open_en.png",width:"80%",height:"80%"}),(0,i.kt)("h2",{id:"add-hystrix-plugin-dependency"},"Add hystrix plugin dependency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"hystrix")," dependency in the ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu hystrix plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-hystrix</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu hystrix plugin end--\x3e\n")),(0,i.kt)("h2",{id:"hystrix-config"},"Hystrix Config"),(0,i.kt)("p",null,"For more information on selectors and rules configuration, see ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,i.kt)("h4",{id:"selector-config"},"Selector Config"),(0,i.kt)("p",null,"It is used to filter traffic for the first time and does not require handle fields."),(0,i.kt)("img",{src:"/img/shenyu/plugin/hystrix/selector_en.png",width:"80%",height:"80%"}),(0,i.kt)("h4",{id:"rule-config"},"Rule Config"),(0,i.kt)("p",null,"For the final filtering of traffic, there is a rule handler logic, isolation mode supports ",(0,i.kt)("inlineCode",{parentName:"p"},"thread")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"semaphore"),"."),(0,i.kt)("img",{src:"/img/shenyu/plugin/hystrix/rule_en.png",width:"80%",height:"80%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hystrix handler details:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Trip minimum request quantity: the minimum request quantity, which must be reached at least before the fuse is triggered")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Error half-score threshold: the percentage of exceptions in this period of time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Maximum concurrency: the maximum concurrency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Trip sleep time (ms): the recovery time after fusing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grouping Key: generally set as: contextPath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command Key: generally set to specific path interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CallBackUrl: default url: /fallback/hystrix.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MinimumRequests: the minimum number of requests required to trigger a circuit breaker.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ErrorThresholdPercentage: percentage of exception occurring during that time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MaxConcurrentRequests: max concurrent requests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sleep",(0,i.kt)("inlineCode",{parentName:"p"},"(ms)"),": The recovery time after the circuit breaker.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GroupKey: It is generally set to: ",(0,i.kt)("inlineCode",{parentName:"p"},"contextPath"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CallBackUrl: default url ",(0,i.kt)("inlineCode",{parentName:"p"},"/fallback/hystrix"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CommandKey: generally, it is set to a specific path interface."))))))}s.isMDXComponent=!0}}]);