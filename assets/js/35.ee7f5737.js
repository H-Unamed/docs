(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{310:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("p",[t._v("指令是 "),a("code",[t._v("Adachi-BOT")]),t._v(" 设计中的「第一公民」，它以"),a("strong",[t._v("对象")]),t._v("的形式在插件配置项 "),a("code",[t._v("cfgList")]),t._v(" 中声明：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /src/plugins/example/init.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" definePlugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/modules/plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("definePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pluginName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cfgList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令对象 1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令对象 2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("指令目前存在以下三种："),a("code",[t._v("命令式(Order)")]),t._v(" 、 "),a("code",[t._v("开关式(Switch)")]),t._v(" 和 "),a("code",[t._v("问答式(Enquire)")]),t._v("，三种指令共享部分相同的配置属性，又各自存在自己独特的配置项。")]),t._v(" "),a("h2",{attrs:{id:"通用配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用配置项"}},[t._v("#")]),t._v(" 通用配置项")]),t._v(" "),a("p",[t._v("位于 "),a("code",[t._v("src/modules/command/main.ts")]),t._v(" 的 "),a("code",[t._v("CommandCfg")]),t._v(" 表示了所有类型指令的公用配置属性，它的定义如下：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandCfg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cmdKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    desc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    main"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CommandEntry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    detail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    auth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AuthLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MessageScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    display"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ignoreCase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("下面将对每个属性进行逐一解释。")]),t._v(" "),a("blockquote",[a("p",[t._v("允许用户配置的属性将会被输出到 "),a("code",[t._v("command.yml")]),t._v("，你在此处的配置将会被视为初始值。")])]),t._v(" "),a("h3",{attrs:{id:"cmdkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmdkey"}},[t._v("#")]),t._v(" cmdKey")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("否")])])]),t._v(" "),a("p",[t._v("必填项，表示指令的 "),a("code",[t._v("key")]),t._v("值，唯一指定，用于区分不同的指令。该值应简记为 "),a("code",[t._v("开发者.指令功能")]),t._v(" 或 "),a("code",[t._v("插件名.指令功能")]),t._v(" ，点号两侧均应使用 "),a("code",[t._v("kebab-case")]),t._v(" ，如："),a("code",[t._v("silvery-star.uid-query")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"desc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desc"}},[t._v("#")]),t._v(" desc")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("[string, string]"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("否")])])]),t._v(" "),a("p",[t._v("必填项，对指令的基本描述。"),a("code",[t._v("desc[0]")]),t._v(" 为对指令作用的简短描述，四字以内最佳；"),a("code",[t._v("desc[1]")]),t._v(" 为指令的参数列表，视指令类型不同存在以下不同的形式：")]),t._v(" "),a("ul",[a("li",[t._v("order: 必填参数用 "),a("code",[t._v("[]")]),t._v(" 包裹，选填参数用 "),a("code",[t._v("()")]),t._v(" 包裹，如 "),a("code",[t._v('"r(次数)d[面数]k(前k大)"')])]),t._v(" "),a("li",[t._v("switch: 除 order 格式外，还可以使用 "),a("code",[t._v("#{OPT}")]),t._v(" 来标识开/关关键词的位置。同样，该标识在 "),a("code",[t._v("divided")]),t._v(" 模式中不生效")]),t._v(" "),a("li",[t._v("enquire: 置空 "),a("code",[t._v('""')]),t._v("，因为 "),a("code",[t._v("enquire")]),t._v(" 指令不存在指令参数")])]),t._v(" "),a("h3",{attrs:{id:"main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main"}},[t._v("#")]),t._v(" main")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"#commandfunc"}},[t._v("CommandEntry")])]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v("index")])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("否")])])]),t._v(" "),a("p",[t._v("指令入口，为 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1),t._v(" 类型时，视为文件路径地址，将会查找此路径相对于"),a("strong",[t._v("插件目录")]),t._v("的目标文件，并将文件中默认导出的方法视为指令入口函数。")]),t._v(" "),a("p",[t._v("为 "),a("a",{attrs:{href:"#commandfunc"}},[t._v("CommandEntry")]),t._v(" 类型时，直接作为入口函数加载。")]),t._v(" "),a("p",[t._v("这是指令中最重要的属性，当用户发送的消息与对应指令的正则相匹配时，就会触发对应指令的入口函数，来运行指令所实现的功能。")]),t._v(" "),a("blockquote",[a("p",[t._v("通常情况下，建议使用入口文件的类型（即在此处配置文件路径）编写指令入口函数。这是为了代码直观程度考虑，除非你的指令实现的功能所占用代码篇幅非常小。")])]),t._v(" "),a("h3",{attrs:{id:"detail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detail"}},[t._v("#")]),t._v(" detail")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v('"该指令暂无更多信息"')])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("否")])])]),t._v(" "),a("p",[t._v("表示指令详细内容，当用户使用 "),a("code",[t._v("adachi.detail")]),t._v(" 指令时将返回此字段。")]),t._v(" "),a("h3",{attrs:{id:"auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" auth")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"#authlevel"}},[t._v("AuthLevel")])]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v("AuthLevel.User")])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("是")])])]),t._v(" "),a("p",[t._v("选填字段，"),a("a",{attrs:{href:"#authlevel"}},[t._v("AuthLevel")]),t._v(" 类型，缺省值为 "),a("code",[t._v("AuthLevel.User")]),t._v(" 。表示允许使用该指令的最低权限。设置为 "),a("code",[t._v("AuthLevel.Banned")]),t._v(" 时无效，被封禁用户无法使用任何指令。")]),t._v(" "),a("h3",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" scope")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"#messagescope"}},[t._v("MessageScope")])]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v("MessageScope.Both")])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("是")])])]),t._v(" "),a("p",[t._v("允许使用该指令的位置（仅群聊 / 仅私聊 / 无限制）。")]),t._v(" "),a("h3",{attrs:{id:"display"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[t._v("#")]),t._v(" display")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("是")])])]),t._v(" "),a("p",[t._v("表示是否在 "),a("code",[t._v("adachi.help")]),t._v(" 返回内容中显示此指令。")]),t._v(" "),a("h3",{attrs:{id:"priority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priority"}},[t._v("#")]),t._v(" priority")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t._v("number"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v("0")])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("是")])])]),t._v(" "),a("p",[t._v("表示指令的优先级大小，当两个指令因为配置重复等原因同时触发时，会根据此属性值的大小来决定触发对象。在编写原生框架指令的增强版本时该属性尤为有效，可用来覆盖原生框架指令。")]),t._v(" "),a("h3",{attrs:{id:"ignorecase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignorecase"}},[t._v("#")]),t._v(" ignoreCase")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("否")])])]),t._v(" "),a("p",[t._v("表示正则匹配是否忽略大小写。")]),t._v(" "),a("blockquote",[a("p",[t._v("需要注意的是，开启此选项后指令所接收到的用户输入内容将全部被转为小写内容，可能会导致内容的误识别。")])]),t._v(" "),a("h3",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" start")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("否")])])]),t._v(" "),a("p",[t._v("生成的正则表达式是否在头部携带 "),a("code",[t._v("^")]),t._v("，即必须以此内容起始。")]),t._v(" "),a("h3",{attrs:{id:"end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" end")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("缺省值: "),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("允许用户配置: "),a("code",[t._v("否")])])]),t._v(" "),a("p",[t._v("生成的正则表达式是否在尾部携带 "),a("code",[t._v("$")]),t._v("，即必须以此内容结束。")]),t._v(" "),a("h2",{attrs:{id:"指令入口函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令入口函数"}},[t._v("#")]),t._v(" 指令入口函数")]),t._v(" "),a("p",[t._v("即指令配置项 "),a("code",[t._v("main")]),t._v(" 中所配置的内容，根据 "),a("code",[t._v("main")]),t._v(" 配置项的类型，入口函数有内联和外联两种编写方式：")]),t._v(" "),a("p",[t._v("内联方式：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令配置对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" echo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口函数内容")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("外联方式；")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令配置对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" echo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  main"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"achieves/echo"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件根目录/achieves/echo.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口函数内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("不论哪种方式，入口函数均接受一个 "),a("code",[t._v("InputParameter")]),t._v(" 类型的入参对象，负责提供实现指令时可能需要使用到的工具和数据，详情可以查看 "),a("a",{attrs:{href:"#InputParameter"}},[t._v("InputParameter")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"typescript-类型支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-类型支持"}},[t._v("#")]),t._v(" typescript 类型支持")]),t._v(" "),a("p",[t._v("开发者可以通过 "),a("code",[t._v("defineDirective")]),t._v(" 宏函数对指令入口函数进行一层包装，来获取完善的 Typescript 类型支持。\n该宏函数接受两个参数：指令类型（"),a("code",[t._v('"order" | "switch" | "enquire"')]),t._v("）与指令入口函数。")]),t._v(" "),a("p",[t._v("内联方式：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineDirective "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/modules/command/main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令配置对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" echo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  main"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineDirective")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口函数内容")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("外联方式；")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令配置对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" echo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  main"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"achieves/echo"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件根目录/achieves/echo.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineDirective "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/modules/command/main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineDirective")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口函数内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("在后面文档中将统一使用 "),a("strong",[t._v("外联 + Typescript")]),t._v(" 方式进行说明。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);