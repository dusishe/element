(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1407:function(e,t,n){"use strict";n.r(t),n.d(t,"rageshakePromise",(function(){return Z})),n.d(t,"preparePlatform",(function(){return ee})),n.d(t,"setupLogStorage",(function(){return te})),n.d(t,"loadConfig",(function(){return ne})),n.d(t,"loadOlm",(function(){return ae})),n.d(t,"loadLanguage",(function(){return ie})),n.d(t,"loadTheme",(function(){return oe})),n.d(t,"loadApp",(function(){return re})),n.d(t,"showError",(function(){return se})),n.d(t,"showIncompatibleBrowser",(function(){return ce})),n.d(t,"loadModules",(function(){return le})),n.d(t,"_t",(function(){return de}));var a=n(1544),i=n(1545),o=n.n(i),r=n(105),s=n(0),c=n.n(s),l=n(2),d=n(5),h=n(76),u=n(29),p=n(349),g=n(3),w=n(662),f=n(1),m=n.n(f),b=n(1415),y=n(8),v=n(677),x=n(10),C=n(131),O=n(42),S=n(95),k=n(13),I=n(1473),E=n(232),P=n(1546),j=n(1425),U=n(56),D=n(166),N=n(1547),A=n(408),R=n(1548);class L extends b.e{constructor(...e){super(...e),m()(this,"_favicon",void 0)}async getConfig(){return Object(A.a)()}getHumanReadableName(){return"Vector Base Platform"}get favicon(){return this._favicon||(this._favicon=new R.a),this._favicon}updateFavicon(){let e="#d00",t=this.notificationCount;this.errorDidOccur&&(t=t||"×",e="#f00"),this.favicon.badge(t,{bgColor:e})}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),this.updateFavicon())}setErrorStatus(e){this.errorDidOccur!==e&&(super.setErrorStatus(e),this.updateFavicon())}startUpdater(){}getDefaultDeviceDisplayName(){return Object(l.b)("Unknown device")}}var T=n(1549),B=n(6);class M{constructor(e="ipcCall",t="ipcReply"){if(this.sendChannel=e,this.recvChannel=t,m()(this,"pendingIpcCalls",{}),m()(this,"nextIpcCallId",0),m()(this,"onIpcReply",((e,t)=>{if(void 0===t.id)return void g.a.warn("Ignoring IPC reply with no ID");if(void 0===this.pendingIpcCalls[t.id])return void g.a.warn("Unknown IPC payload ID: "+t.id);const n=this.pendingIpcCalls[t.id];delete this.pendingIpcCalls[t.id],t.error?n.reject(t.error):n.resolve(t.reply)})),!window.electron)throw new Error("Cannot instantiate ElectronPlatform, window.electron is not set");window.electron.on(this.recvChannel,this.onIpcReply)}async call(e,...t){const n=++this.nextIpcCallId,a=Object(B.m)();return this.pendingIpcCalls[n]=a,window.electron.send(this.sendChannel,{id:n,name:e,args:t}),a.promise}}class F extends T.a{constructor(...e){super(...e),m()(this,"ipc",new M("seshat","seshatReply"))}async supportsEventIndexing(){return this.ipc.call("supportsEventIndexing")}async initEventIndex(e,t){return this.ipc.call("initEventIndex",e,t)}async addEventToIndex(e,t){return this.ipc.call("addEventToIndex",e,t)}async deleteEvent(e){return this.ipc.call("deleteEvent",e)}async isEventIndexEmpty(){return this.ipc.call("isEventIndexEmpty")}async isRoomIndexed(e){return this.ipc.call("isRoomIndexed",e)}async commitLiveEvents(){return this.ipc.call("commitLiveEvents")}async searchEventIndex(e){return this.ipc.call("searchEventIndex",e)}async addHistoricEvents(e,t,n){return this.ipc.call("addHistoricEvents",e,t,n)}async addCrawlerCheckpoint(e){return this.ipc.call("addCrawlerCheckpoint",e)}async removeCrawlerCheckpoint(e){return this.ipc.call("removeCrawlerCheckpoint",e)}async loadFileEvents(e){return this.ipc.call("loadFileEvents",e)}async loadCheckpoints(){return this.ipc.call("loadCheckpoints")}async closeEventIndex(){return this.ipc.call("closeEventIndex")}async getStats(){return this.ipc.call("getStats")}async getUserVersion(){return this.ipc.call("getUserVersion")}async setUserVersion(e){return this.ipc.call("setUserVersion",e)}async deleteEventIndex(){return this.ipc.call("deleteEventIndex")}}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const V=navigator.platform.toUpperCase().includes("MAC");function W(e){["call_state"].includes(e.action)&&window.electron.send("app_onAction",e)}class $ extends L{constructor(){if(super(),m()(this,"ipc",new M("ipcCall","ipcReply")),m()(this,"eventIndexManager",new F),m()(this,"ssoID",Object(S.b)(32)),m()(this,"onBreadcrumbsUpdate",(()=>{const e=j.a.instance.rooms.slice(0,7).map((e=>({roomId:e.roomId,avatarUrl:Object(D.b)(e,Math.floor(60*window.devicePixelRatio),Math.floor(60*window.devicePixelRatio),"crop"),initial:Object(D.e)(e.name)})));this.ipc.call("breadcrumbs",e)})),m()(this,"onUpdateDownloaded",(async(e,{releaseNotes:t,releaseName:n})=>{y.a.dispatch({action:k.a.CheckUpdates,status:b.d.Ready}),this.shouldShowUpdate(n)&&Object(I.b)(await this.getAppVersion(),n,t)})),!window.electron)throw new Error("Cannot instantiate ElectronPlatform, window.electron is not set");y.a.register(W),window.electron.on("check_updates",((e,t)=>{y.a.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:k.a.CheckUpdates},function(e){return!0===e?{status:b.d.Downloading}:!1===e?{status:b.d.NotAvailable}:{status:b.d.Error,detail:e}}(t)))})),window.electron.on("before-quit",(function(){g.a.log("element-desktop closing"),v.b()})),window.electron.on("update-downloaded",this.onUpdateDownloaded),window.electron.on("preferences",(()=>{y.a.fire(k.a.ViewUserSettings)})),window.electron.on("userDownloadCompleted",((e,{id:t,name:n})=>{const a=`DOWNLOAD_TOAST_${t}`;E.a.sharedInstance().addOrReplaceToast({key:a,title:Object(l.b)("Download Completed"),props:{description:n,acceptLabel:Object(l.b)("Open"),onAccept:()=>{window.electron.send("userDownloadAction",{id:t,open:!0}),E.a.sharedInstance().dismissToast(a)},dismissLabel:Object(l.b)("Dismiss"),onDismiss:()=>{window.electron.send("userDownloadAction",{id:t})},numSeconds:10},component:P.a,priority:99})})),window.electron.on("openDesktopCapturerSourcePicker",(()=>{const{finished:e}=x.b.createDialog(N.a);e.then((([e])=>{e&&this.ipc.call("callDisplayMediaCallback",e)}))})),this.ipc.call("startSSOFlow",this.ssoID),j.a.instance.on(U.b,this.onBreadcrumbsUpdate)}async getConfig(){return this.ipc.call("getConfig")}getHumanReadableName(){return"Electron Platform"}supportsSpellCheckSettings(){return!0}allowOverridingNativeContextMenus(){return!0}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),window.electron.send("setBadgeCount",e))}supportsNotifications(){return!0}maySendNotifications(){return!0}displayNotification(e,t,n,a,i){navigator.userAgent.includes("Linux")&&(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const o=super.displayNotification(e,t,n,a,i),r=o.onclick;return o.onclick=()=>{null==r||r(),this.ipc.call("focusWindow")},o}loudNotification(e,t){window.electron.send("loudNotification")}needsUrlTooltips(){return!0}async getAppVersion(){return this.ipc.call("getAppVersion")}supportsSetting(e){switch(e){case"Electron.showTrayIcon":case"Electron.alwaysShowMenuBar":return!V;default:return!0}}getSettingValue(e){return this.ipc.call("getSettingValue",e)}setSettingValue(e,t){return this.ipc.call("setSettingValue",e,t)}async canSelfUpdate(){const e=await this.ipc.call("getUpdateFeedUrl");return Boolean(e)}startUpdateCheck(){super.startUpdateCheck(),window.electron.send("check_updates")}installUpdate(){window.electron.send("install_update")}getDefaultDeviceDisplayName(){const e=u.b.get().brand;return Object(l.b)("%(brand)s Desktop: %(platformName)s",{brand:e,platformName:navigator.userAgent.includes("Macintosh")?"macOS":navigator.userAgent.includes("FreeBSD")?"FreeBSD":navigator.userAgent.includes("OpenBSD")?"OpenBSD":navigator.userAgent.includes("SunOS")?"SunOS":navigator.userAgent.includes("Windows")?"Windows":navigator.userAgent.includes("Linux")?"Linux":"Unknown"})}requestNotificationPermission(){return Promise.resolve("granted")}reload(){window.location.reload()}getEventIndexingManager(){return this.eventIndexManager}async setLanguage(e){return this.ipc.call("setLanguage",e)}setSpellCheckEnabled(e){this.ipc.call("setSpellCheckEnabled",e).catch((e=>{g.a.log("Failed to send setSpellCheckEnabled IPC to Electron"),g.a.error(e)}))}async getSpellCheckEnabled(){return this.ipc.call("getSpellCheckEnabled")}setSpellCheckLanguages(e){this.ipc.call("setSpellCheckLanguages",e).catch((e=>{g.a.log("Failed to send setSpellCheckLanguages IPC to Electron"),g.a.error(e)}))}async getSpellCheckLanguages(){return this.ipc.call("getSpellCheckLanguages")}async getDesktopCapturerSources(e){return this.ipc.call("getDesktopCapturerSources",e)}supportsDesktopCapturer(){return!0}supportsJitsiScreensharing(){return!1}async getAvailableSpellCheckLanguages(){return this.ipc.call("getAvailableSpellCheckLanguages")}getSSOCallbackUrl(e){const t=super.getSSOCallbackUrl(e);return t.protocol="element",t.searchParams.set("element-desktop-ssoid",this.ssoID),t}startSingleSignOn(e,t,n,a){super.startSingleSignOn(e,t,n,a),x.b.createDialog(C.a,{title:Object(l.b)("Go to your browser to complete Sign In"),description:c.a.createElement(O.a,null)})}navigateForwardBack(e){this.ipc.call(e?"navigateBack":"navigateForward")}overrideBrowserShortcuts(){return!0}async getPickleKey(e,t){try{return await this.ipc.call("getPickleKey",e,t)}catch(e){return null}}async createPickleKey(e,t){try{return await this.ipc.call("createPickleKey",e,t)}catch(e){return null}}async destroyPickleKey(e,t){try{await this.ipc.call("destroyPickleKey",e,t)}catch(e){}}async clearStorage(){try{await super.clearStorage(),await this.ipc.call("clearStorage")}catch(e){}}}var q=n(1475),K=n.n(q),H=n(670);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){return/^v\d+.\d+.\d+(-.+)?$/.test(e)?e.substring(1):e}class z extends L{constructor(){super(),m()(this,"pollForUpdate",((e,t)=>this.getMostRecentVersion().then((n=>{const a=J(z.VERSION);return a!==n?(this.shouldShowUpdate(n)?(console.log("Update available to "+n+", will notify user"),e(a,n)):console.log("Update available to "+n+" but won't be shown"),{status:b.d.Ready}):(console.log("No update available, already on "+n),null==t||t(),{status:b.d.NotAvailable})}),(e=>(g.a.error("Failed to poll for update",e),{status:b.d.Error,detail:e.message||(e.status?e.status.toString():"Unknown Error")}))))),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js")}getHumanReadableName(){return"Web Platform"}supportsNotifications(){return Boolean(window.Notification)}maySendNotifications(){return"granted"===window.Notification.permission}requestNotificationPermission(){return new Promise((function(e){window.Notification.requestPermission((t=>{e(t)}))}))}async getMostRecentVersion(){const e=await fetch("version",{method:"GET",cache:"no-cache"});if(e.ok){return J((await e.text()).trim())}return Promise.reject({status:e.status})}getAppVersion(){return Promise.resolve(J(z.VERSION))}startUpdater(){console.log("startUpdater, current version is "+J(z.VERSION)),this.pollForUpdate(((e,t)=>{if(Object(H.a)(location).updated)return console.log("Update reloaded but still on an old version, stopping"),void Object(I.b)(e,t);const n=new URL(window.location.href);n.searchParams.set("updated",t),console.log("Update reloading to "+n.toString()),window.location.href=n.toString()})),setInterval((()=>this.pollForUpdate(I.b,I.a)),6e5)}async canSelfUpdate(){return!0}startUpdateCheck(){super.startUpdateCheck(),this.pollForUpdate(I.b,I.a).then((e=>{y.a.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:k.a.CheckUpdates},e))}))}installUpdate(){window.location.reload()}getDefaultDeviceDisplayName(){const e=new URL(window.location.href),t=[e.host,e.pathname.replace(/\/$/,"")].join(""),n=new K.a,a=n.getBrowser().name||"unknown browser";let i=n.getOS().name||"unknown OS";return"Mac OS"===i&&(i="macOS"),Object(l.b)("%(appName)s: %(browserName)s on %(osName)s",{appName:t,browserName:a,osName:i})}reload(){window.location.reload()}}m()(z,"VERSION","v1.11.38");class Q extends z{setNotificationCount(e){if(!navigator.setAppBadge)return super.setNotificationCount(e);this.notificationCount!==e&&(this.notificationCount=e,navigator.setAppBadge(e).catch((e=>{g.a.error("Failed to update PWA app badge",e)})))}}var X=n(399);window.mxSendRageshake=function(e,t){const n=u.b.get().bug_report_endpoint_url;n?(void 0===t&&(t=!0),e&&e.trim()?Object(X.a)(n,{userText:e,sendLogs:t,progressCallback:g.a.log.bind(console)}).then((()=>{g.a.log("Bug report sent!")}),(e=>{g.a.error(e)})):g.a.error("Cannot send a rageshake without a message - please tell us what went wrong")):g.a.error("Cannot send a rageshake - no bug_report_endpoint_url configured")};const Y=[],Z=function(){const e=v.d(!1);return e.then((()=>{g.a.log("Initialised rageshake."),g.a.log("To fix line numbers in Chrome: Meatball menu → Settings → Ignore list → Add /rageshake\\.ts & /logger\\.ts$"),window.addEventListener("beforeunload",(()=>{g.a.log("element-web closing"),v.b()})),v.a()}),(e=>{g.a.error("Failed to initialise rageshake: "+e)})),e}();function ee(){window.electron?(g.a.log("Using Electron platform"),h.a.set(new $)):window.matchMedia("(display-mode: standalone)").matches?(g.a.log("Using PWA platform"),h.a.set(new Q)):(g.a.log("Using Web platform"),h.a.set(new z))}function te(){return u.b.get().bug_report_endpoint_url?v.e():(g.a.warn("No bug report endpoint set - logs will not be persisted"),Promise.resolve())}async function ne(){var e;const t=await(null===(e=h.a.get())||void 0===e?void 0:e.getConfig());t?u.b.put(t):u.b.reset()}function ae(){return o.a.init({locateFile:()=>a.a}).then((()=>{g.a.log("Using WebAssembly Olm")})).catch((e=>(g.a.log("Failed to load Olm: trying legacy version",e),new Promise(((e,t)=>{const n=document.createElement("script");n.src="olm_legacy.js",n.onload=e,n.onerror=t,document.body.appendChild(n)})).then((()=>window.Olm.init())).then((()=>{g.a.log("Using legacy Olm")})).catch((e=>{g.a.log("Both WebAssembly and asm.js Olm failed!",e)})))))}async function ie(){const e=d.b.getValue("language",null,!0);let t=[];e?t=[e]:l.g().forEach((e=>{t.push(...l.h(e))}));try{await l.l(t),document.documentElement.setAttribute("lang",l.f())}catch(e){g.a.error("Unable to set language",e)}}async function oe(){Object(p.h)()}async function re(e){const t=await Promise.all([n.e(10),n.e(20),n.e(29),n.e(15)]).then(n.bind(null,1694));window.matrixChat=r.render(await t.loadApp(e),document.getElementById("matrixchat"))}async function se(e,t){const a=(await n.e(16).then(n.bind(null,1688))).default;window.matrixChat=r.render(s.createElement(a,{title:e,messages:t}),document.getElementById("matrixchat"))}async function ce(e){const t=(await n.e(14).then(n.bind(null,1689))).default;window.matrixChat=r.render(s.createElement(t,{onAccept:e}),document.getElementById("matrixchat"))}async function le(){for(const e of Y)w.a.instance.registerModule((t=>new e(t)))}const de=l.b},1548:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var a=n(1),i=n.n(a);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const s={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontWeight:"bold",isUp:!1,isLeft:!1};class c{constructor(e={}){i()(this,"browser",{ff:void 0!==window.InstallTrigger,opera:!!window.opera||navigator.userAgent.includes("Opera")}),i()(this,"params",void 0),i()(this,"canvas",void 0),i()(this,"baseImage",void 0),i()(this,"context",void 0),i()(this,"icons",void 0),i()(this,"isReady",!1),i()(this,"readyCb",void 0),this.params=r(r({},s),e),this.icons=c.getIcons(),this.canvas=document.createElement("canvas"),this.baseImage=document.createElement("img");const t=this.icons[this.icons.length-1];t.hasAttribute("href")?(this.baseImage.setAttribute("crossOrigin","anonymous"),this.baseImage.onload=()=>{this.canvas.height=this.baseImage.height>0?this.baseImage.height:32,this.canvas.width=this.baseImage.width>0?this.baseImage.width:32,this.context=this.canvas.getContext("2d"),this.ready()},this.baseImage.setAttribute("src",t.getAttribute("href"))):(this.canvas.height=this.baseImage.height=32,this.canvas.width=this.baseImage.width=32,this.context=this.canvas.getContext("2d"),this.ready())}reset(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height)}options(e,t){const n={n:"number"==typeof e?Math.abs(e):e,len:(""+e).length,x:.4,y:.4,w:.6,h:.6};return t.isUp&&(n.y<.6?n.y=n.y-.4:n.y=n.y-2*n.y+(1-n.w)),t.isLeft&&(n.x<.6?n.x=n.x-.4:n.x=n.x-2*n.x+(1-n.h)),n.x=this.canvas.width*n.x,n.y=this.canvas.height*n.y,n.w=this.canvas.width*n.w,n.h=this.canvas.height*n.h,n}circle(e,t){const n=r(r({},this.params),t),a=this.options(e,n);let i=!1;2===a.len?(a.x=a.x-.4*a.w,a.w=1.4*a.w,i=!0):a.len>=3&&(a.x=a.x-.65*a.w,a.w=1.65*a.w,i=!0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height),this.context.beginPath();const o=Math.floor(a.h*("number"==typeof a.n&&a.n>99?.85:1))+"px";if(this.context.font=`${n.fontWeight} ${o} ${n.fontFamily}`,this.context.textAlign="center",i?(this.context.moveTo(a.x+a.w/2,a.y),this.context.lineTo(a.x+a.w-a.h/2,a.y),this.context.quadraticCurveTo(a.x+a.w,a.y,a.x+a.w,a.y+a.h/2),this.context.lineTo(a.x+a.w,a.y+a.h-a.h/2),this.context.quadraticCurveTo(a.x+a.w,a.y+a.h,a.x+a.w-a.h/2,a.y+a.h),this.context.lineTo(a.x+a.h/2,a.y+a.h),this.context.quadraticCurveTo(a.x,a.y+a.h,a.x,a.y+a.h-a.h/2),this.context.lineTo(a.x,a.y+a.h/2),this.context.quadraticCurveTo(a.x,a.y,a.x+a.h/2,a.y)):this.context.arc(a.x+a.w/2,a.y+a.h/2,a.h/2,0,2*Math.PI),this.context.fillStyle=n.bgColor,this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.stroke(),this.context.fillStyle=n.textColor,"number"==typeof a.n&&a.n>999){const e=(a.n>9999?9:Math.floor(a.n/1e3))+"k+";this.context.fillText(e,Math.floor(a.x+a.w/2),Math.floor(a.y+a.h-.2*a.h))}else this.context.fillText(""+a.n,Math.floor(a.x+a.w/2),Math.floor(a.y+a.h-.15*a.h));this.context.closePath()}ready(){var e;this.isReady||(this.isReady=!0,null===(e=this.readyCb)||void 0===e||e.call(this))}setIcon(t){e((()=>{this.setIconSrc(t.toDataURL("image/png"))}))}setIconSrc(e){if(this.browser.ff||this.browser.opera){var t;const n=this.icons[this.icons.length-1],a=window.document.createElement("link");this.icons=[a],a.setAttribute("rel","icon"),a.setAttribute("type","image/png"),window.document.getElementsByTagName("head")[0].appendChild(a),a.setAttribute("href",e),null===(t=n.parentNode)||void 0===t||t.removeChild(n)}else this.icons.forEach((t=>{t.setAttribute("href",e)}))}badge(e,t){this.isReady?("string"==typeof e||e>0?this.circle(e,t):this.reset(),this.setIcon(this.canvas)):this.readyCb=()=>{this.badge(e,t)}}static getLinks(){const e=[],t=window.document.getElementsByTagName("head")[0].getElementsByTagName("link");for(const n of t)n.hasAttribute("rel")&&/(^|\s)icon(\s|$)/i.test(n.getAttribute("rel"))&&e.push(n);return e}static getIcons(){let e=c.getLinks();return 0===e.length&&(e=[window.document.createElement("link")],e[0].setAttribute("rel","icon"),window.document.getElementsByTagName("head")[0].appendChild(e[0])),e.forEach((e=>{e.setAttribute("type","image/png")})),e}}}).call(this,n(273).setImmediate)},408:function(e,t,n){"use strict";async function a(e=""){""===e||e.endsWith("/")||(e+="/");let t=window.location.hostname.trimEnd();"."===t[t.length-1]&&(t=t.slice(0,-1));const n=i(`${e}config.${t}.json`),a=i(e+"config.json");try{const e=await n;if(!e||0===Object.keys(e).length)throw new Error;return e}catch(e){return a}}async function i(e){const t=new URL(e,window.location.href);t.searchParams.set("cachebuster",Date.now().toString());const n=await fetch(t,{cache:"no-cache",method:"GET"});return 404===n.status||0===n.status?{}:n.ok?n.json():void 0}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=init.js.map