(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{303:function(a,t,e){"use strict";e.r(t);var v=e(14),s=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"内置指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置指令"}},[a._v("#")]),a._v(" 内置指令")]),a._v(" "),t("p",[a._v("严格来讲，所有指令都有插件提供。在 "),t("code",[a._v("Adachi-BOT")]),a._v(" 中，内置了三个插件："),t("code",[a._v("@help")]),a._v("、"),t("code",[a._v("@management")]),a._v("。\n它们分别用于提供"),t("strong",[a._v("使用帮助")]),a._v("、"),t("strong",[a._v("bot 管理")]),a._v("的功能。")]),a._v(" "),t("p",[a._v("下面将分别对两个内置插件的指令做出说明（均以默认指令起始符 "),t("code",[a._v("#")]),a._v(" 和默认指令名为例）")]),a._v(" "),t("h2",{attrs:{id:"help-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#help-插件"}},[a._v("#")]),a._v(" @help 插件")]),a._v(" "),t("h3",{attrs:{id:"帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帮助"}},[a._v("#")]),a._v(" 帮助")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#help\n#help -k\n")])])]),t("p",[a._v("列举当前用户权限允许使用的全部指令，可通过修改 "),t("code",[a._v("config/directive.yml => helpMessageStyle")]),a._v(" 来修改展示效果，\n共有"),t("strong",[a._v("文本")]),a._v("、"),t("strong",[a._v("转发消息")]),a._v("和"),t("strong",[a._v("图片")]),a._v("三种展示形式。")]),a._v(" "),t("p",[a._v("拥有可选参数 "),t("code",[a._v("-k")]),a._v("，可以查看所有指令的 "),t("code",[a._v("cmdKey")]),a._v(" 值，供后续指令使用。")]),a._v(" "),t("h3",{attrs:{id:"详情"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#详情"}},[a._v("#")]),a._v(" 详情")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#detail 1\n")])])]),t("p",[a._v("查看指令的详细信息，这些详细信息由插件开发者提供，若未提供则提示 “该指令暂无更多信息”")]),a._v(" "),t("p",[a._v("拥有参数 "),t("code",[a._v("指令序号")]),a._v("，填写 "),t("code",[a._v("help")]),a._v(" 指令中提供的指令序号。")]),a._v(" "),t("h3",{attrs:{id:"联系bot持有者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系bot持有者"}},[a._v("#")]),a._v(" 联系bot持有者")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#call bot出问题啦\n")])])]),t("p",[a._v("通常由用户使用，可以通过此指令向 bot 主人 qq 发送反馈消息。例如")]),a._v(" "),t("p",[a._v("默认情况下，每人每天可以使用 "),t("code",[a._v("3")]),a._v(" 次，通过 "),t("code",[a._v("config/directive.yml => callTimes")]),a._v(" 修改次数。")]),a._v(" "),t("h2",{attrs:{id:"management-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#management-插件"}},[a._v("#")]),a._v(" @management 插件")]),a._v(" "),t("h3",{attrs:{id:"管理设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理设置"}},[a._v("#")]),a._v(" 管理设置")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#manager 114514191\n#unmanaged 114514191\n")])])]),t("p",[a._v("设置/取消 bot 管理员， 管理员是仅次于 "),t("code",[a._v("master（bot主人）")]),a._v(" 的权限身份。")]),a._v(" "),t("p",[a._v("默认情况下基本所有的管理命令均会对管理员开放，可通过 "),t("code",[a._v("commands.yml => 各指令的 auth 属性")]),a._v(" 来修改这一默认行为。")]),a._v(" "),t("h3",{attrs:{id:"封禁用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#封禁用户"}},[a._v("#")]),a._v(" 封禁用户")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#ban u114514191\n#ban g114514191\n#unban u114514191\n#unban g114514191\n")])])]),t("p",[a._v("封禁或解禁用户/群组。被封今后的用户或群组无法再触发任何 bot 指令。")]),a._v(" "),t("p",[a._v("参数为用户 qq 或群号，当为用户 qq 号时，需要携带标识符 "),t("code",[a._v("u")]),a._v("，反之为 "),t("code",[a._v("g")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"指令权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令权限"}},[a._v("#")]),a._v(" 指令权限")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#limit u114514191 adachi.call on\n#limit u114514191 adachi.call off\n#limit g114514191 adachi.call on\n#limit g114514191 adachi.call off\n")])])]),t("p",[a._v("放行或禁用用户/群组某一指令的使用权限。")]),a._v(" "),t("p",[a._v("具有三个参数：")]),a._v(" "),t("ul",[t("li",[a._v("目标用户 qq 或群号，同理使用 "),t("code",[a._v("u")]),a._v(" 或 "),t("code",[a._v("g")]),a._v(" 标识符区分")]),a._v(" "),t("li",[a._v("指令的 "),t("code",[a._v("cmdKey")]),a._v("，使用上面的帮助质量 "),t("code",[a._v("#help -k")]),a._v(" 查看")]),a._v(" "),t("li",[a._v("开启或关闭键，on 为放行，off 为禁用")])]),a._v(" "),t("h3",{attrs:{id:"操作冷却"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作冷却"}},[a._v("#")]),a._v(" 操作冷却")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#int u114514191 3000\n#int g114514191 3000\n")])])]),t("p",[a._v("设置目标用户/群组的指令响应间隔时间，在响应间隔时间内尝试触发指令则不会得到响应。")]),a._v(" "),t("p",[a._v("默认情况下，私聊的响应间隔时间为 2000ms，群聊为 1500ms。\n通过配置项 "),t("code",[a._v("directive.yml => groupIntervalTime")]),a._v(" 与 "),t("code",[a._v("directive.yml => privateIntervalTime")]),a._v(" 可以分别设置私聊与群组的响应间隔时间。")]),a._v(" "),t("p",[a._v("而此指令可以单独针对具体用户/群组具体处理，其优先级高于群组与私聊的响应间隔时间。")]),a._v(" "),t("p",[a._v("具有两个参数：")]),a._v(" "),t("ul",[t("li",[a._v("目标用户 qq 或群号，同理使用 "),t("code",[a._v("u")]),a._v(" 或 "),t("code",[a._v("g")]),a._v(" 标识符区分")]),a._v(" "),t("li",[a._v("响应间隔时间，单位毫秒")])]),a._v(" "),t("h3",{attrs:{id:"刷新配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刷新配置"}},[a._v("#")]),a._v(" 刷新配置")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#refresh\n")])])]),t("p",[a._v("热重载配置项，无需重启项目即可使对配置项的修改生效。")]),a._v(" "),t("h3",{attrs:{id:"更新bot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新bot"}},[a._v("#")]),a._v(" 更新bot")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#upgrade\n#upgrede -f\n")])])]),t("p",[a._v("热更新 bot 源码，代替用户执行 "),t("code",[a._v("git pull")]),a._v(" 操作。")]),a._v(" "),t("p",[a._v("具有可选参数 "),t("code",[a._v("-f")]),a._v("，默认情况下遇到代码冲突问题时，更新将会失败。携带 "),t("code",[a._v("-f")]),a._v(" 则会强制覆盖更新，慎重使用。")]),a._v(" "),t("blockquote",[t("p",[a._v("该指令仅支持 pm2 与 docker 模式启动的 bot，"),t("code",[a._v("pnpm start")]),a._v(" 方式启动的 bot 执行将会报错。")])]),a._v(" "),t("h3",{attrs:{id:"重启bot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启bot"}},[a._v("#")]),a._v(" 重启bot")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#restart\n")])])]),t("p",[a._v("重启 bot。")]),a._v(" "),t("blockquote",[t("p",[a._v("该指令仅支持 pm2 与 docker 模式启动的 bot，"),t("code",[a._v("pnpm start")]),a._v(" 方式启动的 bot 执行将会报错。")])]),a._v(" "),t("h3",{attrs:{id:"重载插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载插件"}},[a._v("#")]),a._v(" 重载插件")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#reload\n#reload music\n")])])]),t("p",[a._v("重载插件源码。默认情况下对全部插件进行重载。")]),a._v(" "),t("p",[a._v("具有可选参数，用于指定具体重载的插件名称，携带参数后不再重载全部插件。")]),a._v(" "),t("h3",{attrs:{id:"更新插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新插件"}},[a._v("#")]),a._v(" 更新插件")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#upgrade_plugins\n#upgrade_plugins music\n#upgrade_plugins -f music\n#upgrade_plugins -s music\n#upgrade_plugins -f -s music\n")])])]),t("p",[a._v("检查并热更新插件源码。默认情况下对全部插件进行热更新，并重载更新成功的插件。")]),a._v(" "),t("p",[a._v("具有三个参数：")]),a._v(" "),t("ul",[t("li",[a._v("-f，可选，覆盖本地修改强制更新")]),a._v(" "),t("li",[a._v("-s，可选，不会自动重载更新成功的插件")]),a._v(" "),t("li",[a._v("指定具体更新的插件名称，携带参数后不再尝试更新全部插件。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);