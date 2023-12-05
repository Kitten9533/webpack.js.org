"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1417],{1417:function(e,a,n){n.r(a),n(7378);var t=n(2682),s=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function p(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,s);return(0,t.kt)("wrapper",o({components:a},n),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"DefinePlugin")," 允许在 ",(0,t.kt)("strong",{parentName:"p"},"编译时")," 将你代码中的变量替换为其他值或表达式。这在需要根据开发模式与生产模式进行不同的操作时，非常有用。例如，如果想在开发构建中进行日志记录，而不在生产构建中进行，就可以定义一个全局常量去判断是否记录日志。这就是 ",(0,t.kt)("inlineCode",{parentName:"p"},"DefinePlugin")," 的发光之处，设置好它，就可以忘掉开发环境和生产环境的构建规则。"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"DefinePlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// 定义..."),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"usage",parentName:"h2"}),"Usage",(0,t.kt)("a",{href:"#usage","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"传递给 ",(0,t.kt)("inlineCode",{parentName:"p"},"DefinePlugin")," 的每个键都是一个标识符或多个以 ",(0,t.kt)("inlineCode",{parentName:"p"},".")," 连接的标识符。"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"如果该值为字符串，它将被作为代码片段来使用。"),(0,t.kt)("li",{parentName:"ul"},"如果该值不是字符串，则将被转换成字符串（包括函数方法）。"),(0,t.kt)("li",{parentName:"ul"},"如果值是一个对象，则它所有的键将使用相同方法定义。"),(0,t.kt)("li",{parentName:"ul"},"如果键添加 ",(0,t.kt)("inlineCode",{parentName:"li"},"typeof")," 作为前缀，它会被定义为 typeof 调用。")),(0,t.kt)("p",null,"这些值将内联到代码中，从而允许通过代码压缩来删除冗余的条件判断。"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"DefinePlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"PRODUCTION"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"JSON"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"stringify"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"VERSION"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"JSON"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"stringify"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'5fa3b9'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"BROWSER_SUPPORTS_HTML5"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"TWO"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'1+1'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'typeof window'"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"JSON"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"stringify"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'object'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'process.env.NODE_ENV'"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"JSON"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"stringify"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"process",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"env",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token constant",parentName:"code"},"NODE_ENV"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'Running App version '")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"+")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"VERSION"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token operator",parentName:"code"},"!"),(0,t.kt)("span",{className:"token constant",parentName:"code"},"BROWSER_SUPPORTS_HTML5"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'html5shiv'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("aside",{className:"warning"},(0,t.kt)("h6",{className:"warning__prefix",parentName:"aside"},"警告"),(0,t.kt)("p",{parentName:"aside"},"在为 ",(0,t.kt)("inlineCode",{parentName:"p"},"process")," 定义值时，",(0,t.kt)("inlineCode",{parentName:"p"},"'process.env.NODE_ENV': JSON.stringify('production')")," 会比 ",(0,t.kt)("inlineCode",{parentName:"p"},"process: { env: { NODE_ENV: JSON.stringify('production') } }")," 更好，后者会覆盖 ",(0,t.kt)("inlineCode",{parentName:"p"},"process")," 对象，这可能会破坏与某些模块的兼容性，因为这些模块会在 process 对象上定义其他值。")),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"提示"),(0,t.kt)("p",{parentName:"aside"},"请注意，由于本插件会直接替换文本，因此提供的值必须在字符串本身中再包含一个 ",(0,t.kt)("strong",{parentName:"p"},"实际的引号")," 。通常，可以使用类似 ",(0,t.kt)("inlineCode",{parentName:"p"},"'\"production\"'")," 这样的替换引号，或者直接用 ",(0,t.kt)("inlineCode",{parentName:"p"},"JSON.stringify('production')"),"。")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token operator",parentName:"code"},"!"),(0,t.kt)("span",{className:"token constant",parentName:"code"},"PRODUCTION"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'Debug info'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token constant",parentName:"code"},"PRODUCTION"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'Production log'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,t.kt)("p",null,"未经 webpack 压缩过的代码："),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token operator",parentName:"code"},"!"),(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'Debug info'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'Production log'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,t.kt)("p",null,"经过压缩后："),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'Production log'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"feature-flags",parentName:"h2"}),"Feature Flags",(0,t.kt)("a",{href:"#feature-flags","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"使用 ",(0,t.kt)("a",{href:"https://en.wikipedia.org/wiki/Feature_toggle",parentName:"p"},"feature flags")," 在生产/开发构建中可以启用/禁用项目的不同特性。"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"DefinePlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"NICE_FEATURE"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"JSON"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"stringify"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"EXPERIMENTAL_FEATURE"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"JSON"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"stringify"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"service-urls",parentName:"h2"}),"Service URL",(0,t.kt)("a",{href:"#service-urls","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"在生产或开发构建中使用不同的服务 URL："),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"DefinePlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"SERVICE_URL"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"JSON"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"stringify"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'https://dev.example.com'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"runtime-values-via-runtimevalue",parentName:"h2"}),"Runtime values via ",(0,t.kt)("inlineCode",{parentName:"h2"},"runtimeValue"),(0,t.kt)("a",{href:"#runtime-values-via-runtimevalue","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"function (getterFunction, [string] | true | object) => getterFunction()")),(0,t.kt)("p",null,"It is possible to define variables with values that rely on files and will be re-evaluated when such files change in the file system. This means webpack will rebuild when such watched files change."),(0,t.kt)("p",null,"There're two arguments for ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack.DefinePlugin.runtimeValue")," function:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"The first argument is a ",(0,t.kt)("inlineCode",{parentName:"p"},"function(module, key, version)")," that should return the value to be assigned to the definition.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"The second argument could either be an array of file paths to watch for or a ",(0,t.kt)("inlineCode",{parentName:"p"},"true")," to flag the module as uncacheable. Since 5.26.0, it can also take an object argument with the following properties:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"fileDependencies?: string[]")," A list of files the function depends on."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"contextDependencies?: string[]")," A list of directories the function depends on."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"missingDependencies?: string[]")," A list of not existing files the function depends on."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"buildDependencies?: string[]")," A list of build dependencies the function depends on."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"version?: string | () => string")," A version of the function.")))),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," fileDep ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," path",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'sample.txt'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"DefinePlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"BUILT_AT"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"DefinePlugin",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"runtimeValue"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"Date",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"now",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    fileDependencies",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"fileDep",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"The value of ",(0,t.kt)("inlineCode",{parentName:"p"},"BUILT_AT")," would be the time at which the ",(0,t.kt)("inlineCode",{parentName:"p"},"'sample.txt'")," was last updated in the file system, e.g. ",(0,t.kt)("inlineCode",{parentName:"p"},"1597953013291"),"."))}p.isMDXComponent=!0,a.default=p}}]);