"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[94795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),g=i,d=m["".concat(p,".").concat(g)]||m[g]||s[g]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42573:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c"},l=void 0,o={unversionedId:"developer/custom-sign-algorithm",id:"developer/custom-sign-algorithm",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/custom-sign-algorithm.md",sourceDirName:"developer",slug:"/developer/custom-sign-algorithm",permalink:"/zh/docs/next/developer/custom-sign-algorithm",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/developer/custom-sign-algorithm.md",version:"current",frontMatter:{title:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c\u7b97\u6cd5",description:"\u81ea\u5b9a\u4e49sign\u63d2\u4ef6\u68c0\u9a8c"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8fd4\u56de\u7ed3\u679c",permalink:"/zh/docs/next/developer/custom-result"},next:{title:"\u591a\u8bed\u8a00Http\u5ba2\u6237\u7aef",permalink:"/zh/docs/next/developer/developer-shenyu-client"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u6269\u5c55",id:"\u6269\u5c55",children:[]},{value:"\u5176\u4ed6\u6269\u5c55",id:"\u5176\u4ed6\u6269\u5c55",children:[]}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7b7e\u540d\u8ba4\u8bc1\u7b97\u6cd5\u6765\u5b9e\u73b0\u9a8c\u8bc1\u3002")),(0,i.kt)("h2",{id:"\u6269\u5c55"},"\u6269\u5c55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684\u5b9e\u73b0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sign.service.DefaultSignService"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomSignService")," \u5b9e\u73b0  ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.sign.api.SignService"),"\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"}," public interface SignService {\n \n     /**\n      * Sign verify pair.\n      *\n      * @param exchange   the exchange\n      * @return the pair\n      */\n     Pair<Boolean, String> signVerify(ServerWebExchange exchange);\n }\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Pair"),"\u4e2d\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8868\u793a\u9a8c\u8bc1\u901a\u8fc7\uff0c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u7684\u65f6\u5019\uff0c\u4f1a\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"\u4e2d\u7684\u4fe1\u606f\u8f93\u51fa\u5230\u524d\u7aef\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u628a\u65b0\u589e\u7684\u5b9e\u73b0\u7c7b\u6ce8\u518c\u6210\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Spring"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"bean"),"\uff0c\u5982\u4e0b"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SignService customSignService() {\n    return new CustomSignService();\n}\n")),(0,i.kt)("h2",{id:"\u5176\u4ed6\u6269\u5c55"},"\u5176\u4ed6\u6269\u5c55"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f53\u4f60\u53ea\u5e0c\u671b\u4fee\u6539\u7b7e\u540d\u7b97\u6cd5\u65f6\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b7e\u540d\u7b97\u6cd5\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.common.utils.SignUtils#generateSign"),"\uff0c\u8fd8\u53ef\u4ee5\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,i.kt)("inlineCode",{parentName:"li"},"CustomSignProvider")," \u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.sign.api.SignProvider"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * The Sign plugin sign provider.\n */\npublic interface SignProvider {\n\n    /**\n     * acquired sign.\n     *\n     * @param signKey sign key\n     * @param params  params\n     * @return sign\n     */\n    String generateSign(String signKey, Map<String, String> params);\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u628a\u65b0\u589e\u7684\u5b9e\u73b0\u7c7b ",(0,i.kt)("inlineCode",{parentName:"li"},"CustomSignProvider")," \u6ce8\u5165\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"Spring IoC"),"\u5373\u53ef\uff0c\u5982\u4e0b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SignProvider customSignProvider() {\n    return new CustomSignProvider();\n}\n")))}c.isMDXComponent=!0}}]);