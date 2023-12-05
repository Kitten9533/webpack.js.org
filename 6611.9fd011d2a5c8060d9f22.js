"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6611],{6611:function(a,e,n){n.r(e),n(7378);var t=n(2682),p=["components"];function s(){return s=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a},s.apply(this,arguments)}function o(a){var e=a.components,n=function(a,e){if(null==a)return{};var n,t,p=function(a,e){if(null==a)return{};var n,t,p={},s=Object.keys(a);for(t=0;t<s.length;t++)n=s[t],e.indexOf(n)>=0||(p[n]=a[n]);return p}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(t=0;t<s.length;t++)n=s[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(p[n]=a[n])}return p}(a,p);return(0,t.kt)("wrapper",s({components:e},n),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"插件")," 是 webpack 的 ",(0,t.kt)("a",{href:"https://github.com/webpack/tapable",parentName:"p"},"支柱")," 功能。Webpack 自身也是构建于你在 webpack 配置中用到的 ",(0,t.kt)("strong",{parentName:"p"},"相同的插件系统")," 之上！"),(0,t.kt)("p",null,"插件目的在于解决 ",(0,t.kt)("a",{href:"/concepts/loaders",parentName:"p"},"loader")," 无法实现的",(0,t.kt)("strong",{parentName:"p"},"其他事"),"。Webpack 提供很多开箱即用的 ",(0,t.kt)("a",{href:"/plugins/",parentName:"p"},"插件"),"。"),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"提示"),(0,t.kt)("p",{parentName:"aside"},"如果在插件中使用了 ",(0,t.kt)("a",{href:"https://github.com/webpack/webpack-sources",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"webpack-sources"))," 的 package，请使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"require('webpack').sources")," 替代 ",(0,t.kt)("inlineCode",{parentName:"p"},"require('webpack-sources')"),"，以避免持久缓存的版本冲突。")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"anatomy",parentName:"h2"}),"剖析",(0,t.kt)("a",{href:"#anatomy","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"webpack ",(0,t.kt)("strong",{parentName:"p"},"插件"),"是一个具有 ",(0,t.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"apply"))," 方法的 JavaScript 对象。",(0,t.kt)("inlineCode",{parentName:"p"},"apply")," 方法会被 webpack compiler 调用，并且在 ",(0,t.kt)("strong",{parentName:"p"},"整个")," 编译生命周期都可以访问 compiler 对象。"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"ConsoleLogOnBuildWebpackPlugin.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," pluginName ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'ConsoleLogOnBuildWebpackPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"class")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"ConsoleLogOnBuildWebpackPlugin")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token function",parentName:"code"},"apply"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"compiler"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"run",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"pluginName",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"compilation"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'webpack 构建正在启动！'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ConsoleLogOnBuildWebpackPlugin",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"compiler hook 的 tap 方法的第一个参数，应该是驼峰式命名的插件名称。建议为此使用一个常量，以便它可以在所有 hook 中重复使用。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"usage",parentName:"h2"}),"用法",(0,t.kt)("a",{href:"#usage","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"由于",(0,t.kt)("strong",{parentName:"p"},"插件"),"可以携带参数/选项，你必须在 webpack 配置中，向 ",(0,t.kt)("inlineCode",{parentName:"p"},"plugins")," 属性传入一个 ",(0,t.kt)("inlineCode",{parentName:"p"},"new")," 实例。"),(0,t.kt)("p",null,"取决于你的 webpack 用法，对应有多种使用插件的方式。"),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"configuration",parentName:"h3"}),"配置方式",(0,t.kt)("a",{href:"#configuration","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," HtmlWebpackPlugin ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'html-webpack-plugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," webpack ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";")," ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// 访问内置的插件"),"\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," path ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'path'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'./path/to/my/entry/file.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  output",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'my-first-webpack.bundle.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    path",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," path",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'dist'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  module",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    rules",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        test",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/\\.(js|jsx)$/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n        use",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'babel-loader'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  plugins",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n    ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"ProgressPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"HtmlWebpackPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{")," template",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'./src/index.html'")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ProgressPlugin")," 用于自定义编译过程中的进度报告，",(0,t.kt)("inlineCode",{parentName:"p"},"HtmlWebpackPlugin")," 将生成一个 HTML 文件，并在其中使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"script")," 引入一个名为 ",(0,t.kt)("inlineCode",{parentName:"p"},"my-first-webpack.bundle.js")," 的 JS 文件。"),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"node-api",parentName:"h3"}),"Node API 方式",(0,t.kt)("a",{href:"#node-api","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"在使用 Node API 时，还可以通过配置中的 ",(0,t.kt)("inlineCode",{parentName:"p"},"plugins")," 属性传入插件。"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"some-node-script.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," webpack ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";")," ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// 访问 webpack 运行时(runtime)"),"\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," configuration ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'./webpack.config.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"let")," compiler ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"webpack"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"configuration",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"ProgressPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"apply"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\ncompiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"run"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"err",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," stats"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// ..."),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"提示"),(0,t.kt)("p",{parentName:"aside"},"你知道吗：以上看到的示例和 ",(0,t.kt)("a",{href:"https://github.com/webpack/webpack/blob/e7087ffeda7fa37dfe2ca70b5593c6e899629a2c/bin/webpack.js#L290-L292",parentName:"p"},"webpack 运行时(runtime)本身")," 极其类似。",(0,t.kt)("a",{href:"https://github.com/webpack/webpack",parentName:"p"},"webpack 源码")," 中隐藏有大量使用示例，你可以将其应用在自己的配置和脚本中。")))}o.isMDXComponent=!0,e.default=o}}]);