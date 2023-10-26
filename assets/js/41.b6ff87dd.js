(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{316:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")]),t._v(" "),a("p",[t._v("Client 工具类负责与 "),a("a",{attrs:{href:"https://docs.go-cqhttp.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-cqhttp"),a("OutboundLink")],1),t._v(" 直接对接，基本所有涉及对 bot 账号相关的操作都需要通过此类来实现。")]),t._v(" "),a("p",[t._v("可以通过翻阅 "),a("RouterLink",{attrs:{to:"/api/global/client.html"}},[t._v("工具类 Client API")]),t._v(" 来查看工具类所包含的所有方法。")],1),t._v(" "),a("p",[t._v("下面对部分功能实现方式做出说明。")]),t._v(" "),a("h2",{attrs:{id:"获取账号相关内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取账号相关内容"}},[t._v("#")]),t._v(" 获取账号相关内容")]),t._v(" "),a("ul",[a("li",[t._v("uin: 当前登录的账号 QQ 号")]),t._v(" "),a("li",[t._v("fl: 好友列表，"),a("code",[t._v("Map<number, FriendInfo>")]),t._v(" 类型")]),t._v(" "),a("li",[t._v("gl: 群聊列表，"),a("code",[t._v("Map<number, GroupInfo>")]),t._v(" 类型")])]),t._v(" "),a("h2",{attrs:{id:"调用-go-cqhttp-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用-go-cqhttp-api"}},[t._v("#")]),t._v(" 调用 go-cqhttp api")]),t._v(" "),a("p",[t._v("我们对 "),a("a",{attrs:{href:"https://docs.go-cqhttp.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-cqhttp"),a("OutboundLink")],1),t._v(" 所提供的绝大多数 api 进行了适配，并在 "),a("code",[t._v("client")]),t._v(" 工具类中给出了方法来供开发者调用。 可以通过翻阅 [] 来查看所支持的所有方法。")]),t._v(" "),a("p",[t._v("这里给出调用获取陌生人信息 api 示例：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStrangerInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("114514191")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 得到结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"自定调用-go-cqhttp-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定调用-go-cqhttp-api"}},[t._v("#")]),t._v(" 自定调用 go-cqhttp api")]),t._v(" "),a("p",[t._v("尽管我们尽可能对所有 "),a("a",{attrs:{href:"https://docs.go-cqhttp.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-cqhttp"),a("OutboundLink")],1),t._v(" 的 api 提供了支持，但难免有存在更新不及时的情况。\n你可以通过 "),a("code",[t._v("client.fetchGocq()")]),t._v(" 方法来自行调用 api，该方法接受两个参数，分别为 "),a("a",{attrs:{href:"https://docs.go-cqhttp.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-cqhttp"),a("OutboundLink")],1),t._v(" 对应 api 的"),a("strong",[t._v("终结点名称")]),t._v("与"),a("strong",[t._v("所需参数")]),t._v("。")]),t._v(" "),a("p",[t._v("同样还是调用获取陌生人信息 api 示例，该 api 的官网文档："),a("a",{attrs:{href:"https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E9%99%8C%E7%94%9F%E4%BA%BA%E4%BF%A1%E6%81%AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("获取陌生人信息"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchGoCq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get_stranger_info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" user_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("114514191")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 得到结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"监听-go-cqhttp-上报事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听-go-cqhttp-上报事件"}},[t._v("#")]),t._v(" 监听 go-cqhttp 上报事件")]),t._v(" "),a("p",[t._v("你可以通过 "),a("code",[t._v("client.on()")]),t._v(" 来监听 "),a("a",{attrs:{href:"https://docs.go-cqhttp.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-cqhttp"),a("OutboundLink")],1),t._v(" 所发送的特定事件。你可以在 "),a("code",[t._v("src/module/lib/types/map/event.ts")]),t._v(" 下查看所支持的全部事件类型。")]),t._v(" "),a("p",[t._v("下面是监听 群聊撤回 事件的示例：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notice.group.recall"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件上报数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("可以使用 "),a("code",[t._v("client.once()")]),t._v(" 来进行一次性事件触发监听，使用方式与 "),a("code",[t._v("client.on()")]),t._v(" 完全相同。")]),t._v(" "),a("p",[t._v("你同样可以通过 "),a("code",[t._v("client.off()")]),t._v(" 来注销事件监听，但需要提供与注册事件完全相同的回调函数。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GroupRecallNoticeEvent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notice.group.recall"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("off")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notice.group.recall"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);