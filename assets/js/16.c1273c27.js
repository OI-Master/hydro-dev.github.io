(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{199:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自动安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动安装"}},[t._v("#")]),t._v(" 自动安装")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("自动安装脚本将会在您的机器上安装 MongoDB、MinIO、NodeJS。如果您的机器上已经安装过上述软件，无法保证脚本一定能成功运行。此时建议采用 "),a("RouterLink",{attrs:{to:"/install/common.html"}},[t._v("常规安装")]),t._v("。"),a("br"),t._v("\n若您希望在另外位置运行 MongoDB、S3 服务，您也应该使用 "),a("RouterLink",{attrs:{to:"/install/common.html"}},[t._v("常规安装")]),t._v("。"),a("br"),t._v("\n部分情况下脚本安装后可能会出现 "),a("code",[t._v("node: command not found")]),t._v(" 的问题，可通过向 "),a("code",[t._v("~/.bashrc")]),t._v(" 文件末尾添加以下内容并重启bash来解决：")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${XDG_CONFIG_HOME-}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" %s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v('/.nvm"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("printf")]),t._v(" %s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${XDG_CONFIG_HOME}")]),t._v('/nvm"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v("\n")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("CentOS的内核版本过于老旧，可能会导致沙箱安全性问题。")])]),t._v(" "),a("h2",{attrs:{id:"运行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行脚本"}},[t._v("#")]),t._v(" 运行脚本")]),t._v(" "),a("p",[t._v("请选择适合您的服务器系统的自动安装脚本。"),a("strong",[t._v("您不应该在中途关闭脚本或是多次运行脚本")]),t._v("，这可能会带来不可预料的后果。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1604.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ubuntu 16.04")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1804.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ubuntu 18.04")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-2004.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ubuntu 20.04")]),t._v("\n")])])]),a("p",[t._v("如果您需要更改数据目录等设置，可以将自动安装脚本下载到本地并编辑后再运行。")]),t._v(" "),a("p",[t._v("默认的数据目录在 "),a("code",[t._v("/data/db")]),t._v(" 与 "),a("code",[t._v("/data/file")]),t._v(" 下，Hydro将会监听 8888 端口，将会使用 pm2 管理进程。")]),t._v(" "),a("h2",{attrs:{id:"使用-pm2-守护程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-pm2-守护程序"}},[t._v("#")]),t._v(" 使用 pm2 守护程序")]),t._v(" "),a("ul",[a("li",[t._v("重启Hydro： "),a("code",[t._v("pm2 restart hydrooj")])]),t._v(" "),a("li",[t._v("重启数据库："),a("code",[t._v("pm2 restart mongodb")])]),t._v(" "),a("li",[t._v("重启沙箱："),a("code",[t._v("pm2 restart sandbox")])]),t._v(" "),a("li",[t._v("设置开机自启："),a("code",[t._v("pm2 save && pm2 startup")])])]),t._v(" "),a("p",[t._v("完成后请前往 "),a("RouterLink",{attrs:{to:"/install/init.html"}},[t._v("初始化")]),t._v("。")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);