(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)i=s[u],a[i]&&h.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a={app:0},r=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4c9a1c2f"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"f8767ef7"}[t]+".css",a=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],u=l.getAttribute("data-href");if(u===o||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[t],d.parentNode.removeChild(d),n(r)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){i[t]=0}));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise(function(e,n){o=a[t]=[e,n]});e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,n[1](r)}a[t]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("1356"),i=n.n(o);i.a},1356:function(t,e,n){},"1bd7":function(t,e,n){"use strict";var o=n("672b"),i=n.n(o);i.a},"258c":function(t,e,n){"use strict";var o=n("6b7b"),i=n.n(o);i.a},"30e4":function(t,e,n){},"31f2":function(t,e,n){"use strict";var o=n("e39b"),i=n.n(o);i.a},3658:function(t,e,n){"use strict";var o=n("bd89"),i=n.n(o);i.a},4742:function(t,e,n){"use strict";var o=n("cf35"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=n("bb71");n("da64"),n("5363");o["a"].use(i["a"],{iconfont:"mdi",theme:{primary:"#46a0f5",accent:"#525252"},breakpoint:{thresholds:{xs:200,sm:450},scrollbarWidth:10}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("stylizer"),n("identity"),n("menus"),n("version"),n("toolbar"),n("v-content",{style:t.getContentStyle()},[n("router-view")],1)],1)},r=[],s=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")}),c=[],l=(n("ac6a"),n("7514"),n("4917"),n("3b2b"),n("a481"),{name:"identity",data:function(){return{isMounted:!1}},computed:{app:function(){return this.$root.$children[0]},root:function(){return this.isMounted?decodeURI(window.__adobe_cep__.getSystemPath("extension")).replace(/file\:\/{1,}/,""):null},localhost:function(){if(this.isMounted){var t=window.cep.fs.readFile("".concat(this.root,"/.debug")),e=new RegExp('\\<Host\\sName\\=\\"'.concat(this.appName,'\\"\\sPort\\=\\"(\\d*)'));return"http://localhost:".concat(t.data.match(e)[1])}},isDev:function(){return this.isMounted?/localhost/.test(document.location.href):null},extVersion:function(){if(this.isMounted){var t=window.cep.fs.readFile("".concat(this.activeExt.basePath,"/CSXS/manifest.xml")),e=/ExtensionBundleVersion\=\"(\d|\.)*(?=\")/,n=t.data.match(e);return n&&n.length?n[0].replace(/\w*\=\"/,""):"unknown"}},appName:function(){return this.isMounted?JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName:null},appLocale:function(){return this.isMounted?JSON.parse(window.__adobe_cep__.getHostEnvironment()).appLocale:null},appVersion:function(){return this.isMounted?JSON.parse(window.__adobe_cep__.getHostEnvironment()).appVersion:null},userAgent:function(){return this.isMounted},cepVersion:function(){return this.isMounted?"".concat(JSON.parse(window.__adobe_cep__.getCurrentApiVersion()).major,".").concat(JSON.parse(window.__adobe_cep__.getCurrentApiVersion()).minor,".").concat(JSON.parse(window.__adobe_cep__.getCurrentApiVersion()).micro):null},hostCapabilities:function(){return this.isMounted?JSON.parse(window.__adobe_cep__.getHostCapabilities()):null},userId:function(){return this.isMounted?window.__adobe_cep__.getCurrentImsUserId():null},extID:function(){return this.isMounted?window.__adobe_cep__.getExtensionId():null},exts:function(){return this.isMounted?JSON.parse(window.__adobe_cep__.getExtensions()):null},activeExt:function(){var t=this;return this.isMounted?this.exts.find(function(e){return e.id==t.extID}):null},extName:function(){return this.activeExt?this.activeExt.name:null}},mounted:function(){this.OS=navigator.platform.indexOf("Win")>-1?"Windows":navigator.platform.indexOf("Mac")>-1?"Mac":"Unknown",this.app.identity=this,this.init()},methods:{init:function(){this.isMounted=!0},checkHost:function(){var t=this;this.exts.forEach(function(e){t.getExtData(e.id)})},getExtData:function(t){var e=this.exts.find(function(e){return e.id==t}),n=this.getVersion(e);console.log("".concat(e.windowType,": ").concat(e.name," v").concat(n))},getAllData:function(){return{mode:this.isDev?"Developer":"Production",root:this.root,cep:this.cepVersion,production:!this.isDev,extension:{name:this.extName,version:this.extVersion,height:{value:this.activeExt.height,minmax:[this.activeExt.minHeight,this.activeExt.maxHeight],min:this.activeExt.minHeight,max:this.activeExt.maxHeight},width:{value:this.activeExt.width,minmax:[this.activeExt.minWidth,this.activeExt.maxWidth],min:this.activeExt.minWidth,max:this.activeExt.maxWidth},id:this.activeExt.id,windowType:this.activeExt.windowType},OS:this.OS,user:{id:this.userId,env:"".concat(this.appName," ").concat(this.appVersion)},userAgent:this.userAgent,localhost:this.localhost,app:{name:this.appName,locale:this.appLocale,version:this.appVersion}}},getVersion:function(t){if(this.isMounted){var e=window.cep.fs.readFile("".concat(t.basePath,"/CSXS/manifest.xml")),n=/ExtensionBundleVersion\=\"(\d|\.)*(?=\")/,o=e.data.match(n);return o&&o.length?o[0].replace(/\w*\=\"/,""):"unknown"}}}}),u=l,h=n("2877"),d=Object(h["a"])(u,s,c,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-toolbar",{staticClass:"darkToolbar",attrs:{app:"",card:"",dark:""}},[n("appicon"),n("v-spacer"),n("v-toolbar-title",{staticClass:"toolbar-title font-weight-light"},[t._v(t._s(t.theme?t.theme:""))])],1)],1)])},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"appicon"},[n("svg",{attrs:{id:"ICONS",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 33 31"}},[t.isILST?n("g",[n("rect",{staticClass:"boxILST",attrs:{x:"1",y:"1",width:"31",height:"29"}}),n("g",[n("path",{staticClass:"textILST",attrs:{d:"M12.67,7.45h2.16l5.11,15.09h-2l-2.63-8.43c-.54-1.69-1-3.34-1.51-5.09h-.09c-.47,1.75-.95,3.4-1.49,5.09L9.52,22.54h-2Zm-2.43,9h7v1.53h-7Z"}}),n("path",{staticClass:"textILST",attrs:{d:"M21.69,7.84a1.31,1.31,0,0,1,2.61,0,1.31,1.31,0,0,1-2.61,0ZM22,11.36h1.89V22.54H22Z"}})])]):t._e(),t.isAEFT?n("g",[n("rect",{staticClass:"boxAEFT",attrs:{x:"1",y:"1",width:"31",height:"29"}}),n("g",[n("path",{staticClass:"textAEFT",attrs:{d:"M9.79,7.45H12l5.1,15.09H15L12.4,14.11c-.55-1.69-1-3.34-1.51-5.09h-.1c-.46,1.75-.95,3.4-1.49,5.09L6.64,22.54H4.69Zm-2.42,9h7v1.53H7.37Z"}}),n("path",{staticClass:"textAEFT",attrs:{d:"M18.33,17c0-3.63,2.45-5.88,5-5.88,2.86,0,4.47,2.05,4.47,5.25a6.29,6.29,0,0,1-.09,1.07H20.2c.14,2.37,1.58,3.91,3.71,3.91a4.88,4.88,0,0,0,2.79-.9l.67,1.25a6.57,6.57,0,0,1-3.69,1.15C20.7,22.81,18.33,20.64,18.33,17Zm7.81-.91c0-2.24-1-3.46-2.75-3.46-1.57,0-3,1.26-3.21,3.46Z"}})])]):t._e(),t.isPPRO?n("g",[n("rect",{staticClass:"boxPPRO",attrs:{x:"1",y:"1",width:"31",height:"29"}}),n("path",{staticClass:"textPPRO",attrs:{d:"M8.22,7.45h4.31c3.38,0,5.66,1.13,5.66,4.44s-2.27,4.66-5.57,4.66H10.14v6H8.22ZM12.38,15c2.64,0,3.9-1,3.9-3.1S14.94,9,12.29,9H10.14v6Zm8.68-3.63h1.56l.16,2h.06A3.86,3.86,0,0,1,26,11.08a2.73,2.73,0,0,1,1.2.23L26.86,13a3.1,3.1,0,0,0-1.08-.18c-1,0-2.07.68-2.83,2.57v7.18H21.06Z"}})]):t._e(),t.isPHXS?n("g",[n("rect",{staticClass:"boxPHXS",attrs:{x:"1",y:"1",width:"31",height:"29"}}),n("path",{staticClass:"textPHXS",attrs:{d:"M7.5,7.45h4.31c3.39,0,5.67,1.13,5.67,4.44s-2.27,4.66-5.57,4.66H9.42v6H7.5ZM11.66,15c2.64,0,3.9-1,3.9-3.1S14.22,9,11.57,9H9.42v6Zm7.22,6.27L19.81,20a5,5,0,0,0,3.3,1.32c1.47,0,2.2-.78,2.2-1.73,0-1.15-1.32-1.66-2.56-2.12-1.57-.58-3.33-1.35-3.33-3.23s1.43-3.18,3.85-3.18a5.67,5.67,0,0,1,3.48,1.26l-.91,1.21a4.2,4.2,0,0,0-2.55-1c-1.41,0-2.06.75-2.06,1.6,0,1.06,1.22,1.47,2.49,1.94,1.61.61,3.4,1.26,3.4,3.39,0,1.81-1.44,3.32-4.07,3.32A6.7,6.7,0,0,1,18.88,21.26Z"}})]):t._e(),t.isFLPR?n("g",[n("rect",{staticClass:"boxFLPR",attrs:{x:"1",y:"1",width:"31",height:"29"}}),n("g",[n("path",{staticClass:"textFLPR",attrs:{d:"M9.2,7.45h2.17l5.11,15.09h-2l-2.63-8.43c-.54-1.69-1-3.34-1.51-5.09h-.09c-.47,1.75-1,3.4-1.5,5.09L6.05,22.54H4.1Zm-2.42,9h7v1.53H6.78Z"}}),n("path",{staticClass:"textFLPR",attrs:{d:"M18.57,11.36h1.57L20.3,13h.06a5.31,5.31,0,0,1,3.75-1.89c2.35,0,3.41,1.52,3.41,4.38v7.08H25.63V15.7c0-2.08-.63-3-2.11-3-1.14,0-1.93.58-3.05,1.71v8.1h-1.9Z"}})])]):t._e()])])},b=[],g={name:"appicon",computed:{app:function(){return this.$root.$children[0]},appName:function(){return this.app.identity?this.app.identity.appName:null},isILST:function(){return/ILST/.test(this.appName)},isAEFT:function(){return/AEFT/.test(this.appName)},isPPRO:function(){return/PPRO/.test(this.appName)},isPHXS:function(){return/PHXS/.test(this.appName)},isFLPR:function(){return/FLPR/.test(this.appName)}}},_=g,x=(n("4742"),Object(h["a"])(_,v,b,!1,null,null,null)),y=x.exports,w={name:"navbar",components:{appicon:y},data:function(){return{buttons:[{icon:"mdi-vuetify",link:"https://vuetifyjs.com/en/components/toolbars#toolbar"}]}},computed:{app:function(){return this.$root.$children[0]},theme:function(){return this.app.stylizer?this.app.stylizer.theme:null}},mounted:function(){var t=document.querySelector(".v-toolbar__content");t.style.height="40px"},methods:{goToLink:function(t){cep.util.openURLInDefaultBrowser(t)}}},S=w,C=(n("3658"),n("6544")),k=n.n(C),E=n("9910"),M=n("71d9"),L=n("2a7f"),H=Object(h["a"])(S,f,m,!1,null,null,null),N=H.exports;k()(H,{VSpacer:E["a"],VToolbar:M["a"],VToolbarTitle:L["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},T=[],I=(n("6b54"),{name:"stylizer",data:function(){return{theme:null,hostStyle:{ILST:[{name:"color-bg",lightest:"#f0f0f0",light:"#b8b8b8",dark:"#535353",darkest:"#323232"},{name:"color-icon",lightest:"#535353",light:"#404040",dark:"#c2c2c2",darkest:"#b7b7b7"},{name:"color-border",lightest:"#dcdcdc",light:"#5f5f5f",dark:"#5f5f5f",darkest:"#5f5f5f"},{name:"color-button-hover",lightest:"#f9f9f9",light:"#dcdcdc",dark:"#4a4a4a",darkest:"#292929"},{name:"color-button-active",lightest:"#bdbdbd",light:"#969696",dark:"#404040",darkest:"#1f1f1f"},{name:"color-button-disabled",lightest:"#e6e6e6",light:"#b0b0b0",dark:"#5a5a5a",darkest:"#393939"},{name:"color-text-active",lightest:"#484848",light:"#101010",dark:"#d8d8d8",darkest:"#1b1b1b"},{name:"color-text-default",lightest:"#484848",light:"#101010",dark:"#d5d5d5",darkest:"#a1a1a1"},{name:"color-text-disabled",lightest:"#c6c6c6",light:"#989898",dark:"#737373",darkest:"#525252"},{name:"color-input-focus",lightest:"#ffffff",light:"#e3e3e3",dark:"#ffffff",darkest:"#fcfcfc"},{name:"color-input-idle",lightest:"#ffffff",light:"#e3e3e3",dark:"#474747",darkest:"#262626"},{name:"color-scrollbar",lightest:"#fbfbfb",light:"#c4c4c4",dark:"#4b4b4b",darkest:"#2a2a2a"},{name:"color-scrollbar-thumb",lightest:"#dcdcdc",light:"#a8a8a8",dark:"#606060",darkest:"#383838"},{name:"color-scrollbar-thumb-hover",lightest:"#a6a6a6",light:"#7b7b7b",dark:"#747474",darkest:"#525252"},{name:"width-scrollbar-thumb",lightest:"20px",light:"20px",dark:"20px",darkest:"20px"},{name:"radius-scrollbar-thumb",lightest:"20px",light:"10px",dark:"10px",darkest:"10px"}]}}},computed:{app:function(){return this.$root.$children[0]},appName:function(){return JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName}},mounted:function(){this.init()},methods:{init:function(){window.__adobe_cep__.addEventListener("com.adobe.csxs.events.ThemeColorChanged",this.appThemeChanged),this.appThemeChanged(),this.app.stylizer=this},appThemeChanged:function(){var t=window.__adobe_cep__.getHostEnvironment();this.findTheme(JSON.parse(t).appSkinInfo),this.$emit("appThemeChange",this.getCurrentSkin())},getCurrentSkin:function(){var t=this,e={};return this.hostStyle.ILST.forEach(function(n){e[n.name]=n[t.theme]}),e},findTheme:function(t){var e=t.panelBackgroundColor.color;"ILST"==JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName?(e.red>230?this.theme="lightest":e.red>170?this.theme="light":e.red>80?this.theme="dark":this.theme="darkest",this.setILST()):"AEFT"==JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName?(this.theme="gradient",this.setAEFT(t)):console.log("Style wasn't recognized")},setILST:function(){var t=this;console.log("".concat(this.appName," theme is ").concat(this.theme)),this.hostStyle.ILST.forEach(function(e){console.log("apo-".concat(e.name," == ").concat(e[t.theme])),t.setCSS("apo-".concat(e.name),e[t.theme])})},setAEFT:function(t){var e=t.panelBackgroundColor.color;this.app.setCSS("apo-color-bg",this.toHex(e)),this.app.setCSS("apo-color-dark",this.toHex(e,-15)),this.app.setCSS("apo-color-input-idle",this.toHex(e,-12)),this.app.setCSS("apo-color-icon",this.toHex(e,30)),this.app.setCSS("apo-color-button-disabled",this.toHex(e,20)),this.app.setCSS("apo-color-scrollbar",this.toHex(e,-5)),this.app.setCSS("apo-color-scrollbar-thumb",this.toHex(e,18)),this.app.setCSS("apo-color-scrollbar-thumb-hover",this.toHex(e,35)),this.app.setCSS("input-border-radius","5px")},getCSS:function(t){return window.getComputedStyle(document.documentElement).getPropertyValue("".concat(/^\-\-/.test(t)?t:"--"+t))},setCSS:function(t,e){document.documentElement.style.setProperty("".concat(/^\-\-/.test(t)?t:"--"+t),e)},toHex:function(t,e){function n(t,e){var n=isNaN(e)?t:t+e;return n<0?n=0:n>255&&(n=255),n=Math.round(n).toString(16),1==n.length?"0"+n:n}var o="";return t&&(o=n(t.red,e)+n(t.green,e)+n(t.blue,e)),"#"+o}}}),P=I,V=(n("1bd7"),Object(h["a"])(P,O,T,!1,null,null,null)),$=V.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},F=[],j={name:"adobe-menus",data:function(){return{context:{menu:[{id:"refresh",label:"Refresh panel",enabled:!0,checkable:!1,checked:!1},{label:"---"},{id:"localhost",label:"Launch debug",enabled:!0,checkable:!1,checked:!1}]},flyout:{menu:[{id:"refresh",label:"Refresh panel",enabled:!0,checkable:!1,checked:!1}]}}},computed:{app:function(){return this.$root.$children[0]},contextMenu:function(){return this.context.menu},flyoutMenu:function(){var t="<Menu>";return this.flyout.menu.forEach(function(e){e.id?t+='<MenuItem Id="'.concat(e.id,'" Label="').concat(e.label,'" Enabled="').concat(e.enabled,'" Checked="').concat(e.checked,'" />'):t+='<MenuItem Label="---" />'}),t+="</Menu>"},localhost:function(){var t=window.cep.fs.readFile("".concat(decodeURI(window.__adobe_cep__.getSystemPath("extension")).replace(/file\:\/{1,}/,""),"/.debug")),e=new RegExp('\\<Host\\sName\\=\\"'.concat(JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName,'\\"\\sPort\\=\\"(\\d*)'));return"http://localhost:".concat(t.data.match(e)[1])}},watch:{contextMenu:function(t){this.setContextMenu()},flyoutMenu:function(t){this.setFlyoutMenu()}},mounted:function(){this.init()},methods:{contextMenuClicked:function(t){"refresh"==t?location.reload():"localhost"==t&&(console.log(this.localhost),cep.util.openURLInDefaultBrowser(this.localhost))},flyoutMenuClicked:function(t){var e=t.data.menuId;"refresh"==e&&location.reload()},setContextMenu:function(){window.__adobe_cep__.invokeAsync("setContextMenuByJSON",JSON.stringify(this.context),this.contextMenuClicked)},setFlyoutMenu:function(){window.__adobe_cep__.invokeSync("setPanelFlyoutMenu",this.flyoutMenu),window.__adobe_cep__.addEventListener("com.adobe.csxs.events.flyoutMenuClicked",this.flyoutMenuClicked)},init:function(){this.setContextMenu(),this.setFlyoutMenu(),this.app.menus=this}}},D=j,B=(n("587b"),Object(h["a"])(D,A,F,!1,null,null,null)),R=B.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"versionFoot"},[t._v(t._s(t.version))])},Z=[],U={name:"version",data:function(){return{isMounted:!0}},mounted:function(){this.isMounted=!0},computed:{app:function(){return this.$root.$children[0]},isDev:function(){return!!this.app.identity&&this.app.identity.isDev},version:function(){return this.app.identity?this.app.identity.extVersion:null}}},W=U,z=(n("dbeb"),Object(h["a"])(W,J,Z,!1,null,null,null)),X=z.exports,q={name:"App",components:{toolbar:N,identity:p,stylizer:$,menus:R,version:X},computed:{storage:function(){return window.localStorage}},data:function(){return{csInterface:null,identity:null,stylizer:null,menus:null,main:null,isMounted:!1}},mounted:function(){console.clear(),this.csInterface=new CSInterface,this.csInterface.addEventListener("console",this.consoler),console.log("".concat(this.identity.extName," ").concat(this.identity.extVersion," : ").concat(this.identity.isDev?"DEV":"BUILD")),this.isMounted=!0,this.loadUniversalScripts(),this.$router.push({name:"home"})},methods:{getContentStyle:function(){return"\n        overflow: auto;\n        margin-top: ".concat("home"==this.$route.name?"40":"0","px;\n        padding: 0px 0px 0px 0px;\n        max-height: calc(100vh - 40px);\n      ")},dispatchEvent:function(t,e){var n=new CSEvent(t,"APPLICATION");n.data=e,this.csInterface.dispatchEvent(n)},loadScript:function(t){this.csInterface.evalScript("$.evalFile('".concat(t,"')"))},loadUniversalScripts:function(){this.loadScript("".concat(this.identity.root,"/src/host/universal/json2.jsx")),this.loadScript("".concat(this.identity.root,"/src/host/universal/Console.jsx")),this.loadScript("".concat(this.identity.root,"/src/host/").concat(this.identity.appName,"/host.jsx"))},consoler:function(t){console.log("".concat(this.identity.appName,": ").concat(t.data))},getCSS:function(t){return window.getComputedStyle(document.documentElement).getPropertyValue("".concat(/^\-\-/.test(t)?t:"--"+t))},setCSS:function(t,e){document.documentElement.style.setProperty("".concat(/^\-\-/.test(t)?t:"--"+t),e)}}},G=q,K=(n("034f"),n("7496")),Q=n("549c"),Y=Object(h["a"])(G,a,r,!1,null,null,null),tt=Y.exports;k()(Y,{VApp:K["a"],VContent:Q["a"]});var et=n("8c4f"),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},ot=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{staticStyle:{height:"76px"},attrs:{xs12:""}},[n("v-form",{ref:"nameform"},[n("v-text-field",{ref:"namefield",attrs:{label:"apo-color name",rules:[t.rules.hasName]},on:{blur:function(e){return t.handleBlur()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitColor()}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),n("v-flex",{attrs:{xs8:""}},[n("v-form",{ref:"hexform"},[t.isHexColor?n("v-text-field",{attrs:{label:"Comparator",rules:[t.rules.validHex,t.rules.mustBeFullHex,t.rules.counter],"prepend-icon":"mdi-pound",color:t.isComplete?"success":"primary",hint:t.getHintLabel,maxlength:"6",spellcheck:"false",counter:""},on:{input:function(e){return t.checkColor()},focus:function(e){return t.checkColor()},blur:function(e){return t.handleBlur()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitColor()}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}):t._e()],1)],1),n("v-flex",{staticClass:"input-arrow",attrs:{xs2:""}},[n("v-icon",[t._v("mdi-arrow-right")])],1),n("v-flex",{attrs:{xs2:""}},[n("v-text-field",{attrs:{"persistent-hint":"",hint:"Offset",loading:t.isCalc},model:{value:t.output,callback:function(e){t.output=e},expression:"output"}})],1)],1),n("apo-sheet",{attrs:{list:t.apoColors}})],1)},at=[],rt=(n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-3"},[n("v-divider"),t.list.length?n("v-list",{attrs:{"two-line":""}},[t._l(t.displayList,function(e,o){return[n("v-list-tile",{key:o,class:e.locked?"list-item-locked":"list-item"},[n("v-list-tile-action",[n("span",{style:t.getPreviewStyle(e)})]),n("v-list-tile-content",[n("v-list-tile-title",{style:e.locked?"color: var(--apo-color-scrollbar-thumb-hover)":""},[t._v(t._s(e.title))]),n("v-list-tile-sub-title",{staticClass:"text--uppercase",style:e.locked?"color: var(--apo-color-scrollbar-thumb-hover)":""},[n("span",[t._v(t._s(t.getItemColor(e)))]),n("span",{staticClass:"pl-2"},[t._v(t._s(e.delta))])])],1),n("v-list-tile-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.lockItem(e)}}},[n("v-icon",[t._v("mdi-lock")])],1)],1),n("v-list-tile-action",[n("v-btn",{attrs:{disabled:e.locked,icon:""},on:{click:function(e){return t.deleteItem(o)}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1)]})],2):t._e()],1)}),st=[];function ct(){return t(JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color);function t(t){return[t.red,t.green,t.blue]}}function lt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t instanceof Array||(t.r||t.red,t.g||t.green,t.b||t.blue);while(t.length>3)t.pop();return t=/aeft/i.test(JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName)&&t.reduce(function(t,e){return t+e},0)<=3?t.map(function(t){return 255*t}):t,"#"+t.map(function(t){return t=t+ +e<255?Math.abs(t+ +e).toString(16):0,t.length<2?"0".concat(t):t}).join("")}function ut(t,e){return lt(t.map(function(t){return+t+ +e}))}var ht={name:"aposheet",props:{list:Array},data:function(){return{displayList:[]}},computed:{app:function(){return this.$root.$children[0]},masterList:function(){return this.app.main.apoColors}},watch:{list:function(t){this.displayList=this.constructDisplayList(t)}},mounted:function(){console.log("Aposheet mounted"),this.displayList=this.constructDisplayList(this.list)},methods:{lockItem:function(t){console.log("Locking ".concat(t.title)),t.locked=!t.locked,console.log(t.locked)},deleteItem:function(t){this.masterList.splice(t,1)},constructDisplayList:function(t){return t.map(function(t){return{title:t.title,delta:t.delta,locked:!1}})},getItemColor:function(t){return ut(ct(),t.delta)},getPreviewStyle:function(t){return"\n        width: 20px;\n        height: 20px;\n        border: 1px solid grey;\n        background-color: ".concat(this.getItemColor(t),";\n      ")}}},dt=ht,pt=(n("258c"),n("8336")),ft=n("ce7e"),mt=n("132d"),vt=n("8860"),bt=n("ba95"),gt=n("40fe"),_t=n("5d23"),xt=Object(h["a"])(dt,rt,st,!1,null,null,null),yt=xt.exports;function wt(t){return t.match(/\w\w/g).map(function(t){return parseInt(t,16)})}k()(xt,{VBtn:pt["a"],VDivider:ft["a"],VIcon:mt["a"],VList:vt["a"],VListTile:bt["a"],VListTileAction:gt["a"],VListTileContent:_t["a"],VListTileSubTitle:_t["b"],VListTileTitle:_t["c"]});var St={components:{"apo-sheet":yt},data:function(){return{title:"",input:"",output:"",apoColors:[{title:"apo-color-icon-main",delta:"+130"}],isCalc:!1,rules:{required:function(t){return!!t||"Required."},counter:function(t){return t.length<=7||"Max 6 characters"},hasName:function(t){return t.length>0||"Must have name"},mustBeFullHex:function(t){return 6==t.length||"Must be 6 characters"},validHex:function(t){var e=/^[a-fA-F0-9]{0,6}$/;return e.test(t)||"Invalid hex color"}}}},mounted:function(){this.app.main=this},computed:{app:function(){return this.$root.$children[0]},isHexColor:function(){return!0},isComplete:function(){return 6==this.input.length},hasName:function(){return this.title.length},getHintLabel:function(){JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return"Delta from ".concat(lt(ct()))}},methods:{submitAll:function(){this.apoColors.push({title:"".concat(/apo\-color\-/.test(this.title)?"":"apo-color-").concat(this.title.split(" ").join("-")),delta:this.output})},handleBlur:function(){this.isCalc=!1,this.$refs.hexform.resetValidation(),this.$refs.nameform.resetValidation()},compareRGBsForDelta:function(t,e){var n=t.map(function(t,n){return-1*(t-e[n])}),o=0;return n.forEach(function(t){o+=t}),o>0?"+".concat(Math.floor(o/t.length)):Math.floor(o/t.length)},submitColor:function(){this.$refs.nameform.validate(),this.$refs.hexform.validate(),this.hasName&&this.isComplete&&(this.submitAll(),this.clear(),this.$refs.namefield.focus())},clear:function(){this.output="",this.input="",this.title="",this.$refs.hexform.resetValidation(),this.$refs.nameform.resetValidation(),this.isCalc=!1},checkColor:function(){if(!this.isComplete)return this.isCalc=!0,this.output="",null;console.log(this.input.length),this.isCalc=!1,this.output=this.compareRGBsForDelta(ct(),wt(this.input))}}},Ct=St,kt=(n("31f2"),n("a523")),Et=n("0e8f"),Mt=n("4bd4"),Lt=n("a722"),Ht=n("2677"),Nt=Object(h["a"])(Ct,it,at,!1,null,null,null),Ot=Nt.exports;k()(Nt,{VContainer:kt["a"],VFlex:Et["a"],VForm:Mt["a"],VIcon:mt["a"],VLayout:Lt["a"],VTextField:Ht["a"]});var Tt={components:{HelloWorld:Ot}},It=Tt,Pt=Object(h["a"])(It,nt,ot,!1,null,null,null),Vt=Pt.exports;o["a"].use(et["a"]);var $t=new et["a"]({routes:[{path:"/",name:"home",component:Vt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});o["a"].config.productionTip=!1,o["a"].config.devtools=!1,new o["a"]({router:$t,render:function(t){return t(tt)}}).$mount("#app")},"587b":function(t,e,n){"use strict";var o=n("ff85"),i=n.n(o);i.a},"672b":function(t,e,n){},"6b7b":function(t,e,n){},bd89:function(t,e,n){},cf35:function(t,e,n){},dbeb:function(t,e,n){"use strict";var o=n("30e4"),i=n.n(o);i.a},e39b:function(t,e,n){},ff85:function(t,e,n){}});
//# sourceMappingURL=app.c208fd4b.js.map