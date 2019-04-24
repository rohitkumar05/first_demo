if (self.CavalryLogger) { CavalryLogger.start_js(["i7VMx"]); }

__d("BlueCompatBroker",["Env","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=new Map(),i=!1,j=function(a){return new(b("URI"))(a).getRegisteredDomain()==="facebook.com"},k={dispatch:function(a){var b=k.getMessageEventString(a,"compatAction");if(b!=null){b=h.get(b);b&&b(a)}},getMessageEventString:function(a,b){a=a.data;if(typeof a==="object"){a=a==null?void 0:a[b];if(typeof a==="string")return a}return""},init:function(){__p&&__p();if(!i){var a=document.referrer.indexOf("/",8);a=document.referrer.substring(0,a);if(j(a)){var c=new MessageChannel(),d=b("Env").iframeKey;g=c.port1;g.onmessage=k.dispatch;window.parent.postMessage({compatAction:"CompatSetup",iframeKey:d},a+"/",[c.port2])}i=!0}},register:function(a,b){h.set(a,b)},sendMessage:function(a){g&&g.postMessage(babelHelpers["extends"]({},a))}};e.exports=k}),null);
__d("MessengerEnvironment",["CurrentEnvironment"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("CurrentEnvironment"),{messengerui:!1,setMessengerUI:function(a){this.messengerui=a}});e.exports=a}),null);
__d("BlueCompatRouter",["BlueCompatBroker","Env","MessengerEnvironment","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={convertUri:function(a){if(a==null||a==="")return new(b("URI"))();a=new(b("URI"))(a);var c=a.getRegisteredDomain();if(a.getSubdomain()==="apps"&&c!=null&&c!==""){c=a.getDomain().replace(/apps/i,"www");return a.setDomain(c).setPath("/apps"+a.getPath())}else return a},go:function(a){__p&&__p();if(b("Env").isCQuick){b("BlueCompatBroker").init();var c=new(b("URI"))(a);a=g.convertUri(a);var d=a.getQualifiedURI();a=function(){if(b("MessengerEnvironment").messengerui&&d.getPath().startsWith("/messages"))return[!1,"/messages"];return c.getPath().startsWith("/settings")&&d.getPath().startsWith("/settings")?[!1,"/settings"]:[!0,""]}();var e=a[0];a=a[1];b("BlueCompatBroker").sendMessage({compatAction:"route",maintainKey:a,uri:String(d)});return e}return!1},startChat:function(a){if(b("Env").isCQuick){b("BlueCompatBroker").init();b("BlueCompatBroker").sendMessage({compatAction:"startchat",tabId:a});return!0}return!1}};e.exports=g}),null);
__d("Dock",["csx","Arbiter","ArbiterMixin","BlueBar","ChatQuietLinks","CSS","DataStore","DOM","Event","Parent","Scroll","Style","Toggler","Vector","emptyFunction","gkx","isKeyActivation","shield"],(function(a,b,c,d,e,f,g){__p&&__p();function c(){}Object.assign(c,b("ArbiterMixin"),{MIN_HEIGHT:140,INITIAL_FLYOUT_HEIGHT_OFFSET:10,init:function(a){__p&&__p();this.init=b("emptyFunction");this.rootEl=a;this.calculateViewportDimensions();b("ChatQuietLinks").removeEmptyHrefs(this.rootEl);b("Event").listen(a,"click",this._onClick.bind(this));var c=a.querySelector(".fbNubButton");c&&b("Event").listen(c,"keypress",this._onKeyPress.bind(this));b("Event").listen(window,"resize",this._onWindowResize.bind(this));b("Toggler").subscribe(["show","hide"],function(c,d){d=d.getActive();if(!b("DOM").contains(a,d))return;if(b("CSS").hasClass(d,"fbNub"))this.notifyNub(d,c),c==="show"&&this._resizeNubFlyout(d);else{d=b("Parent").byClass(d,"fbNubFlyout");d&&b("CSS").conditionClass(d,"menuOpened",c==="show")}}.bind(this));this.inform("init",{},"persistent")},calculateViewportDimensions:function(){return this.viewportDimensions=b("Vector").getViewportDimensions()},getFlyoutHeightOffset:function(){if(this.flyoutHeightOffset)return this.flyoutHeightOffset;this.flyoutHeightOffset=this.INITIAL_FLYOUT_HEIGHT_OFFSET+b("Vector").getElementDimensions(this.rootEl).y;var a=b("BlueBar").getBar();if(a){var c=b("Style").isFixed(a)?"viewport":"document";this.flyoutHeightOffset+=b("Vector").getElementPosition(a,c).y+b("Vector").getElementDimensions(a).y}return this.flyoutHeightOffset},toggle:function(a){var c=this._findFlyout(a);if(!c)return;this.subscribe("init",function(){b("Toggler").toggle(a)})},show:function(a){this.subscribe("init",function(){b("Toggler").show(a)})},showNub:function(a){b("CSS").show(a)},hide:function(a){this.subscribe("init",function(){var c=b("Toggler").getInstance(a);b("DOM").contains(a,c.getActive())&&c.hide()})},hideNub:function(a){b("CSS").hide(a),this.hide(a)},setUseMaxHeight:function(a,c){b("CSS").conditionClass(a,"maxHeight",c!==!1),this._resizeNubFlyout(a)},_resizeNubFlyout:function(a){__p&&__p();var c=this._findFlyout(a);if(!c||b("CSS").hasClass(a,"placeholder")||!(b("CSS").hasClass(a,"openToggler")||b("CSS").hasClass(a,"opened")))return;var d=b("DOM").find(c,"div.fbNubFlyoutOuter"),e=b("DOM").find(d,"div.fbNubFlyoutInner"),f=b("DOM").find(e,"div.fbNubFlyoutBody"),g=b("CSS").hasClass(a,"canBeCompactTab"),h=b("Scroll").getTop(f),i=f.offsetHeight;b("Style").set(f,"height","auto");var j=b("Vector").getElementDimensions(c),k=b("Vector").getElementDimensions(f),l=this.getMaxFlyoutHeight(a);b("Style").set(c,"max-height",l+"px");b("Style").set(d,"max-height",l+"px");j=b("Vector").getElementDimensions(c);d=b("Vector").getElementDimensions(e);l=d.y-k.y;e=j.y-l;d=parseInt(f.style.height||f.clientHeight,10);d=e!==d;j.y>l&&d&&!g&&b("Style").set(f,"height",e+"px");b("CSS").removeClass(c,"swapDirection");var m=b("Vector").getElementPosition(c).x;b("CSS").conditionClass(c,"swapDirection",function(){if(m<0)return!0;return!j||!this.viewportDimensions?!1:m+j.x>this.viewportDimensions.x}.bind(this)());d&&h+i>=k.y?b("Scroll").setTop(f,f.scrollHeight):b("Scroll").setTop(f,h);this.notifyNub(a,"resize")},getMaxFlyoutHeight:function(a){a=this._findFlyout(a);var c=b("Vector").getElementPosition(a,"viewport");a=b("Vector").getElementDimensions(a);if(!this.viewportDimensions||!c)return 0;c=Math.max(this.MIN_HEIGHT,this.viewportDimensions.y-this.getFlyoutHeightOffset())-(this.viewportDimensions.y-c.y-a.y);return Math.max(c,0)},resizeAllFlyouts:function(){var a=this._getAllNubs(),b=a.length;while(b--)this._resizeNubFlyout(a[b])},_getAllNubs:function(){if(!this.rootEl)return[];var a=b("DOM").scry(this.rootEl,"div._50-v.openToggler:not(._s0f)");return a.concat(b("DOM").scry(this.rootEl,"div._50-v.opened:not(._s0f)"))},_onKeyPress:function(a){var c=a.getTarget();c=b("Parent").byClass(c,"fbNub");b("isKeyActivation")(a)&&c&&this.toggle(c)},_onClick:function(a){__p&&__p();a=a.getTarget();var c=b("Parent").byClass(a,"fbNub");if(c){if(b("Parent").byClass(a,"fbNubFlyoutTitlebar")&&!b("gkx")("836108")){var d=b("Parent").byTag(a,"a");a=a.nodeName=="INPUT"&&a.getAttribute("type")=="submit";if(!d&&!a){this.hide(c);return!1}}this.notifyNub(c,"click")}},_onWindowResize:function(a){this.calculateViewportDimensions(),this.resizeAllFlyouts()},_findFlyout:function(a){return b("CSS").hasClass(a,"fbNubFlyout")?a:b("DOM").scry(a,"div.fbNubFlyout")[0]||null},registerNubController:function(a,c){b("DataStore").set(a,"dock:nub:controller",c),c.subscribe("nub/button/content-changed",b("shield")(this.inform,this,"resize",a)),c.subscribe("nub/flyout/content-changed",b("shield")(this._resizeNubFlyout,this,a))},unregisterNubController:function(a){b("DataStore").remove(a,"dock:nub:controller")},notifyNub:function(a,c,d){a=b("DataStore").get(a,"dock:nub:controller");a&&a.inform(c,d)}});e.exports=a.Dock||c}),null);
__d("PrivacyLiteFlyoutBootloader",["regeneratorRuntime","Promise","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!1));case 2:case"end":return a.stop()}},null,this)},loadFlyoutAsChild:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!0));case 2:case"end":return a.stop()}},null,this)},_loadFlyout:function(a){__p&&__p();var c,d,e,f,h,i,j,k,l,m;return b("regeneratorRuntime").async(function(n){__p&&__p();while(1)switch(n.prev=n.next){case 0:if(!g){n.next=2;break}return n.abrupt("return");case 2:g=!0;n.next=5;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:c=n.sent,d=c[0],e=c[1],f=e.flyout,h=e.flyoutRoot,i=c[2],j=i.footer,k=i.event,l=i.settingsExitPoint,m=i.basicsExitPoint,d.setIsChild(!!a),d.registerFlyoutToggler(f,h),d.registerSettingsAndBasicsLinkLogging(j,k,l,m),d.loadBody();case 19:case"end":return n.stop()}},null,this)},setChildFlyoutVisible:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:if(!(!g&&!a)){h.next=2;break}return h.abrupt("return");case 2:h.next=4;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise()]));case 4:c=h.sent;d=c[0];e=c[1];f=e.flyout;e._flyoutRoot;if(!(a===d.isFlyoutVisible())){h.next=11;break}return h.abrupt("return");case 11:d.setChildFlyoutVisible(a),d.onToggle(f,a?"show":"hide");case 13:case"end":return h.stop()}},null,this)},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})},_getDeferredFooterElements:function(){i==null&&(i=new(b("Deferred"))());return i},registerFooterElements:function(a,b,c,d){this._getDeferredFooterElements().resolve({footer:a,event:b,settingsExitPoint:c,basicsExitPoint:d})}};e.exports=j}),null);
__d("HelpLiteFlyout",["AsyncRequest","CSS","DOM","Event","HelpLiteFlyoutBootloader","PrivacyLiteFlyoutBootloader","Toggler","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={loadBody:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType()}).send()},refreshHelp:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType(),is_refresh:!0}).send()},resetHelp:function(a){var c=b("ge")("fbContextualHelpContent");c&&b("DOM").replace(c,a);h.isFlyoutVisible()&&h.refreshHelp()},showHelp:function(){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1),b("CSS").show(b("ge")("fbHelpLiteFlyout"))},openPrivacy:function(){b("CSS").hide(b("ge")("fbHelpLiteFlyout")),b("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild(),b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!0)},registerPrivacyBackLink:function(a){b("Event").listen(a,"click",h.showHelp)},registerFlyoutToggler:function(a,c){g=c;a=b("Toggler").createInstance(a);a.setSticky(!1);b("Toggler").listen("hide",c,function(a){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1)});b("Toggler").listen("show",c,function(a){h.showHelp()})},isFlyoutVisible:function(){return g&&b("Toggler").getActive()===g},setFlyoutVisible:function(a){a&&b("HelpLiteFlyoutBootloader").loadFlyout(),a?b("Toggler").show(g):b("Toggler").hide(g)}};e.exports=h}),null);
__d("FlipDirection",["DOM","Input","Style"],(function(a,b,c,d,e,f){__p&&__p();a={setDirection:function(a,c,d){__p&&__p();c===void 0&&(c=5);d===void 0&&(d=!1);var e=b("DOM").isNodeOfType(a,"input")&&a.type=="text",f=b("DOM").isNodeOfType(a,"textarea");if(!(e||f)||a.getAttribute("data-prevent-auto-flip"))return;e=b("Input").getValue(a);f=a.style&&a.style.direction;if(!f||d){f=0;d=!0;for(var g=0;g<e.length;g++){var h=e.charCodeAt(g);if(h>=48){d&&(d=!1,f++);if(h>=1470&&h<=1920){b("Style").set(a,"direction","rtl");a.setAttribute("dir","rtl");return}if(f==c){b("Style").set(a,"direction","ltr");a.setAttribute("dir","ltr");return}}else d=!0}}else e.length===0&&(b("Style").set(a,"direction",""),a.removeAttribute("dir"))}};e.exports=a}),null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f){a=function(a){a=a.getTarget();b("FlipDirection").setDirection(a)};b("Event").listen(document.documentElement,{keyup:a,input:a})}),null);
__d("FBEngagementWhiteopsFraudSensorTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setInstanceID=function(a){this.$1.instance_id=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setPostID=function(a){this.$1.post_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTqBotDetectionProductEnum=function(a){this.$1.tq_bot_detection_product_enum=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={instance_id:!0,page_id:!0,post_id:!0,time:!0,tq_bot_detection_product_enum:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("FantaHider",["ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={hide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.hide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.hide()})})},unhide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.unhide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.unhide()})})}}}),null);
__d("XReferer",["Base64","Cookie","FBJSON","URI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g={update:function(a,c,d){__p&&__p();if(!d){b("Cookie").set("x-referer","");return}a!=null&&(a=g.truncatePath(a));c!=null&&(c=g.truncatePath(c));var e=window.location.pathname+window.location.search;d=b("URI").getRequestURI();var f=d.getSubdomain();c!=null&&g._setCookie(c,e,f);a!=null&&b("setTimeoutAcrossTransitions")(function(){a!=null&&g._setCookie(a,e,f)},0)},_setCookie:function(a,c,d){a={r:a,h:c,s:d};c=b("Base64").encode(b("FBJSON").stringify(a));b("Cookie").set("x-referer",c)},truncatePath:function(a){var b=1024;a&&a.length>b&&(a=a.substring(0,b)+"...");return a}};e.exports=g}),null);
__d("HistoryManager",["SessionName","Env","Event","SprinkleConfig","URI","UserAgent_DEPRECATED","XReferer","emptyFunction","gkx","goOrReplace","isInIframe","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();b("SessionName").getName();var g={history:null,current:0,fragment:null,isInitialized:function(){return!!g._initialized},init:function(){__p&&__p();if(!b("Env").ALLOW_TRANSITION_IN_IFRAME&&b("isInIframe")())return;if(g._initialized)return g;var a=new(b("URI"))(window.location.href),c=a.getFragment()||"";c.charAt(0)==="!"&&(c=c.substr(1),a.setFragment(c));Object.assign(g,{_initialized:!0,fragment:c,orig_fragment:c,history:[a],callbacks:[],lastChanged:Date.now(),canonical:new(b("URI"))("#"),user:0,enabled:!0,debug:b("emptyFunction")});if(window.history&&history.pushState){this.lastURI=document.URL;if(b("gkx")("678676")){c=new(b("URI"))(this.lastURI);a=c.getQueryData();a.__md__=void 0;a.__xts__=void 0;a.fb_dtsg_ag=void 0;a[b("SprinkleConfig").param_name]=void 0;this.lastURI=c.setQueryData(a).toString()}try{b("gkx")("819236")?window.history.replaceState(history.state,null,this.lastURI):window.history.replaceState(this.lastURI,null,this.lastURI)}catch(a){if(!(a.number===-2147467259))throw a}b("Event").listen(window,"popstate",function(a){var c=a&&a.state&&typeof a.state==="string";c&&g.lastURI!=a.state&&(g.lastURI=a.state,g.lastChanged=Date.now(),g.notify(new(b("URI"))(a.state).getUnqualifiedURI().toString()))}.bind(g));(b("UserAgent_DEPRECATED").webkit()<534||b("UserAgent_DEPRECATED").chrome()<=13)&&(b("setIntervalAcrossTransitions")(g.checkURI,42),g._updateRefererURI(this.lastURI));return g}g._updateRefererURI(b("URI").getRequestURI(!1));if(b("UserAgent_DEPRECATED").webkit()<500||b("UserAgent_DEPRECATED").firefox()<2){g.enabled=!1;return g}"onhashchange"in window?b("Event").listen(window,"hashchange",function(){window.setTimeout(g.checkURI.bind(g),0)}):b("setIntervalAcrossTransitions")(g.checkURI,42);return g},registerURIHandler:function(a){g.callbacks.push(a);return g},setCanonicalLocation:function(a){g.canonical=new(b("URI"))(a);return g},notify:function(a){a==g.orig_fragment&&(a=g.canonical.getFragment());for(var b=0;b<g.callbacks.length;b++)try{if(g.callbacks[b](a))return!0}catch(a){}return!1},checkURI:function(){__p&&__p();if(Date.now()-g.lastChanged<400)return;if(window.history&&history.pushState){var a=new(b("URI"))(document.URL).removeQueryData("ref").toString(),c=new(b("URI"))(g.lastURI).removeQueryData("ref").toString();a!=c&&(g.lastChanged=Date.now(),g.lastURI=a,b("UserAgent_DEPRECATED").webkit()<534&&g._updateRefererURI(a),g.notify(new(b("URI"))(a).getUnqualifiedURI().toString()));return}if(b("UserAgent_DEPRECATED").webkit()&&window.history.length==200){g.warned||(g.warned=!0);return}c=new(b("URI"))(window.location.href).getFragment();c.charAt(0)=="!"&&(c=c.substr(1));c=c.replace(/%23/g,"#");if(c!=g.fragment.replace(/%23/g,"#")){g.debug([c," vs ",g.fragment,"whl: ",window.history.length,"QHL: ",g.history.length].join(" "));for(var a=g.history.length-1;a>=0;--a)if(g.history[a].getFragment().replace(/%23/g,"#")==c)break;++g.user;a>=0?g.go(a-g.current):g.go("#"+c);--g.user}},_updateRefererURI:function(a){a instanceof b("URI")&&(a=a.toString()),b("XReferer").update(a,null,!0)},go:function(a,c,d){__p&&__p();if(window.history&&history.pushState){c||typeof a==="number";var e=new(b("URI"))(a).removeQueryData(["ref","messaging_source","ajaxpipe_fetch_stream","fb_dtsg_ag",b("SprinkleConfig").param_name]).toString();g.lastChanged=Date.now();this.lastURI=e;d?window.history.replaceState(a,null,e):window.history.pushState(a,null,e);b("UserAgent_DEPRECATED").webkit()<534&&g._updateRefererURI(a);return!1}g.debug("go: "+a);c===void 0&&(c=!0);if(!g.enabled&&!c)return!1;if(typeof a==="number"){if(!a)return!1;e=a+g.current;var f=Math.max(0,Math.min(g.history.length-1,e));g.current=f;e=g.history[f].getFragment()||g.orig_fragment;e=new(b("URI"))(e).removeQueryData("ref").getUnqualifiedURI().toString();g.fragment=e;g.lastChanged=Date.now();g.user||b("goOrReplace")(window.location,window.location.href.split("#")[0]+"#!"+e,d);c&&g.notify(e);g._updateRefererURI(e);return!1}a=new(b("URI"))(a);a.getDomain()==new(b("URI"))(window.location.href).getDomain()&&(a=new(b("URI"))("#"+a.getUnqualifiedURI()));f=g.history[g.current].getFragment();e=a.getFragment();if(e==f||f==g.orig_fragment&&e==g.canonical.getFragment()){c&&g.notify(e);g._updateRefererURI(e);return!1}d&&g.current--;f=g.history.length-g.current-1;g.history.splice(g.current+1,f);g.history.push(new(b("URI"))(a));return g.go(1,c,d)},getCurrentFragment:function(){var a=b("URI").getRequestURI(!1).getFragment();return a==g.orig_fragment?g.canonical.getFragment():a}};e.exports=g}),null);
__d("KeyboardShortcutToken",["KeyEventController"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c){this.$1=!0,this.key=a,this.handler=b,this.filter=c.filter,this.persistOnTransition=c.persistOnTransition,this.shortcutInfo=c.shortcutInfo,this.register()}var c=a.prototype;c.register=function(){var a=this;if(!this.$1)return;this.token=b("KeyEventController").registerKey(this.key,this.handler,this.filter,!1,function(){return a.persistOnTransition})};c.remove=function(){this.token.remove(),this.$1=!1};c.unregister=function(){this.token.remove()};c.isActive=function(){return this.$1};c.getKey=function(){return this.key};c.getShortcutInfo=function(){return this.shortcutInfo};return a}();e.exports=a}),null);
__d("escapeJSQuotes",[],(function(a,b,c,d,e,f){function a(a){return typeof a==="undefined"||a==null||!a.valueOf()?"":a.toString().replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\"/g,"\\x22").replace(/\'/g,"\\'").replace(/</g,"\\x3c").replace(/>/g,"\\x3e").replace(/&/g,"\\x26")}e.exports=a}),null);
__d("PageTransitions",["fbt","invariant","Arbiter","BlueCompatBroker","BlueCompatRouter","Bootloader","CurrentUser","DOMQuery","DOMScroll","Env","ErrorUtils","Event","HistoryManager","JSLogger","LayerHideOnEscape","PageHooks","PageNavigationStageLogger","PageTransitionsConfig","PageTransitionsRegistrar","React","ScriptPath","URI","Vector","areEqual","clickRefAction","escapeJSQuotes","ge","goOrReplace","isFacebookURI","isInIframe","qex","setTimeout"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=["cquick","ctarget","mh_","killabyte","tfc_","tfi_"],j={};function k(a,b){a&&(j[a.getUnqualifiedURI().toString()]=b)}function l(a){return j[a.getUnqualifiedURI().toString()]}function m(a){delete j[a.getUnqualifiedURI().toString()]}function n(){var a={};window.location.search.slice(1).split("&").forEach(function(b){b=b.split("=");var c=b[0];b=b[1];b=b===void 0?null:b;i.some(function(a){return c.startsWith(a)})&&(a[c]=b)});return a}var o=null,p=!1,q=new(b("URI"))(""),r=null,s=new(b("URI"))(),t=null,u=!1,v=!1,w=!1,x={isInitialized:function(){return p},init:function(){x._init()},_init:function(){__p&&__p();if(b("isInIframe")())return!1;if(p)return!0;var a=b("PageTransitionsRegistrar").getMostRecentURI();o=a;q=a;r=null;s=a;var c=b("ErrorUtils").applyWithGuard(function(a){return new(b("URI"))(a)},null,[document.referrer]);t=document.referrer&&c&&b("isFacebookURI")(c)?c:null;p=!0;c=b("URI").getRequestURI(!1);c.getFragment().startsWith("/")?c=c.getFragment():c=a.toString();b("HistoryManager").init().setCanonicalLocation("#"+c).registerURIHandler(x._historyManagerHandler);b("Event").listen(window,"scroll",function(){u||k(o,b("Vector").getScrollPosition())});return!0},registerHandler:b("PageTransitionsRegistrar").registerHandler,removeHandler:b("PageTransitionsRegistrar").removeHandler,getCurrentURI:function(a){a===void 0&&(a=!1);this._init();return!o&&!a?new(b("URI"))(q):new(b("URI"))(o)},isTransitioning:function(){this._init();return!o},getNextURI:function(){this._init();return s},getNextReferrerURI:function(){this._init();return r},getReferrerURI:function(){this._init();return t},getMostRecentURI:function(){this._init();return new(b("URI"))(q)},go:function(a,c){c===void 0&&(c=!1);if(b("BlueCompatRouter").go(a))return;this.goBase(a,c)},goBase:function(a,c){c===void 0&&(c=!1);this._init();var d=n(),e=new(b("URI"))(a).removeQueryData("quickling").addQueryData(d).getQualifiedURI();b("JSLogger").create("pagetransition").debug("go",{uri:e.toString()});m(e);c||b("clickRefAction")("uri",{href:e.toString()},null,"INDIRECT");x._loadPage(e,function(a){a?b("HistoryManager").go(e.toString(),!1,c):(b("PageNavigationStageLogger").setNote("pt_not_handled"),b("PageNavigationStageLogger").updateCookie(),b("goOrReplace")(window.location,e,c))})},_historyManagerHandler:function(a){if(a.charAt(0)!="/")return!1;b("clickRefAction")("h",{href:a});b("ScriptPath").getClickPointInfo()||b("ScriptPath").setClickPointInfo({click:"back"});x._loadPage(new(b("URI"))(a),function(c){c||(b("PageNavigationStageLogger").setNote("hist_manager_fallback"),b("goOrReplace")(window.location,a,!0))});return!0},_loadPage:function(a,c){__p&&__p();if(new(b("URI"))(a).getFragment()&&b("areEqual")(new(b("URI"))(a).setFragment(null).getQualifiedURI(),new(b("URI"))(o).setFragment(null).getQualifiedURI())){b("Arbiter").inform("pre_page_fragment_transition",{from:new(b("URI"))(o).getFragment(),to:new(b("URI"))(a).getFragment()});if(x.restoreScrollPosition(a)){o=q=a;b("Arbiter").inform("page_fragment_transition",{fragment:new(b("URI"))(a).getFragment()});return}}b("PageNavigationStageLogger").setCookieForNavigation(a);var d;o&&(d=l(o));var e=function(){d&&o&&k(o,d);r=x.getMostRecentURI();o=null;s=a;d&&b("DOMScroll").scrollTo(d,!1);u=!0;var e=x._handleTransition(a);c&&(e===b("PageTransitionsRegistrar").DELAY_HISTORY?b("setTimeout")(function(){return c&&c(e)},0):c(e))},f=s;s=a;var g=b("PageHooks").runHooks("onbeforeleavehooks");s=f;g?x._warnBeforeLeaving(g,e):e()},_handleTransition:function(c){__p&&__p();window.onbeforeleavehooks=void 0;if(v||!c.isSameOrigin()){b("PageNavigationStageLogger").setNote("pt_disabled");return!1}var d=b("PageTransitionsConfig").reloadOnBootloadError&&this._hasBootloadErrors();if(d){b("PageNavigationStageLogger").setNote("bl_err");return!1}var e;d=a.AsyncRequest;d&&(e=d.getLastID());b("Arbiter").inform("pre_page_transition",{from:x.getMostRecentURI(),to:c});d=b("PageTransitionsRegistrar")._getTransitionHandlers();for(var f=d.length-1;f>=0;--f){var g=d[f];if(!g)continue;for(var h=g.length-1;h>=0;--h){var i=g[h](c);if(i===!0||i===b("PageTransitionsRegistrar").DELAY_HISTORY){var j={sender:this,uri:c,id:e};try{b("Arbiter").inform("page_transition",j)}catch(a){}return i}else g.splice(h,1)}}return!1},disableTransitions:function(){v=!0},disableScrollAnimation:function(){w=!0},_hasBootloadErrors:function(){return b("Bootloader").getErrorUrls().length>0},unifyURI:function(){this._init(),o=q=s,t=r},transitionComplete:function(a){a===void 0&&(a=!1);this._init();u=!1;x._executeCompletionCallbacks();x.unifyURI();a||o&&x.restoreScrollPosition(o);try{document.activeElement&&document.activeElement.nodeName==="A"&&document.activeElement.blur()}catch(a){}},_executeCompletionCallbacks:function(){var a=b("PageTransitionsRegistrar")._getCompletionCallbacks();a.length>0&&(b("PageTransitionsRegistrar")._resetCompletionCallbacks(),a.forEach(function(a){return a()}))},registerCompletionCallback:b("PageTransitionsRegistrar").registerCompletionCallback,rewriteCurrentURI:function(a,c){__p&&__p();this._init();var d=b("PageTransitionsRegistrar")._getTransitionHandlers(),e=d.length||1,f=!1;b("PageTransitionsRegistrar").registerHandler(function(){if(a&&a.toString()==x.getMostRecentURI().getUnqualifiedURI().toString()){x.transitionComplete();return!0}f=!0},e);x.go(c,!0);d.length===e+1&&d[e].length===(f?0:1)||h(0,1302);d.length=e},_warnBeforeLeaving:function(a,c){b("Bootloader").loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(d,e,f,h,i,j){var k=b("CurrentUser").isWorkUser();e=k?b("React").createElement(e,{showCloseButton:!0},g._("Finish your post?")):b("React").createElement(e,{showCloseButton:!1},g._("Leave page?"));k=k?[b("React").createElement(h,{key:"confirm",action:"confirm",label:g._("Discard Post")}),b("React").createElement(h,{key:"cancel",action:"cancel",use:"confirm",label:g._("Go to Post")})]:[b("React").createElement(h,{key:"cancel",action:"cancel",label:g._("Stay on This Page")}),b("React").createElement(h,{key:"confirm",action:"confirm",use:"confirm",label:g._("Leave this Page")})];var l=new d({width:450,addedBehaviors:[b("LayerHideOnEscape")]},b("React").createElement("div",null,e,b("React").createElement(f,null,b("React").createElement(j,{shade:"medium",size:"medium"},a)),b("React").createElement(i,null,k)));l.subscribe("confirm",function(){l.hide(),c()});l.show()},"PageTransitions")},restoreScrollPosition:function(a){__p&&__p();var c=l(a);if(c){b("DOMScroll").scrollTo(c,!1);return!0}function d(a){if(!a)return null;var c="a[name='"+b("escapeJSQuotes")(a)+"']";return b("DOMQuery").scry(document.body,c)[0]||b("ge")(a)}c=d(new(b("URI"))(a).getFragment());if(c){d=!w;b("DOMScroll").scrollTo(c,d);return!0}return!1}};b("Env").isCQuick&&(b("BlueCompatBroker").init(),b("BlueCompatBroker").register("transitionpage",function(a){a=b("BlueCompatBroker").getMessageEventString(a,"uri");if(window.location.href===a)return;x.goBase(a,!1)}));e.exports=x;a.PageTransitions=x}),null);
__d("translateKey",["fbt","invariant"],(function(a,b,c,d,e,f,g,h){var i={alt:g._("alt"),enter:g._("enter"),"delete":g._("delete"),shift:g._("shift"),opt:g._("opt"),ctrl:g._("ctrl"),cmd:g._("cmd"),esc:g._("esc"),tab:g._("tab"),up:g._("up"),down:g._("down"),right:g._("right"),left:g._("left"),page_up:g._("page up"),page_down:g._("page down"),home:g._("home"),end:g._("end")};function a(a){if(Object.prototype.hasOwnProperty.call(i,a))return i[a];a.length===1||h(0,2507);return a}e.exports=a}),null);
__d("KeyboardShortcuts",["csx","cx","fbt","Arbiter","BasicFBNux","CSS","Dock","KeyboardShortcutToken","KeyEventController","Layer","ModalLayer","NavigationMessage","PageTransitions","Run","emptyFunction","translateKey"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a={_arbiter:null,_hasTriggeredShortcut:!1,_flyoutNub:null,_nubNux:null,_nubNuxID:null,_tokenLayers:[],showInfo:b("emptyFunction"),register:function(a,c,d){__p&&__p();var e=this,f=d?d:{};d=function(a,b){c.call(e,a,b),f.allowDefault||a.prevent(),e._hasTriggeredShortcut||e._handleFirstShortcutTriggered()};var g=f.baseFilters||[b("KeyEventController").defaultFilter],h=function(a,b){__p&&__p();for(var c=g,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(d){if(e>=c.length)break;h=c[e++]}else{e=c.next();if(e.done)break;h=e.value}h=h;if(!h(a,b))return!1}return!f.filter||f.filter(a,b)};a=new(b("KeyboardShortcutToken"))(a,d,{filter:h,persistOnTransition:f.persistOnTransition,shortcutInfo:f.shortcutInfo});this._tokenLayers.length||this._tokenLayers.push([]);this._tokenLayers[this._tokenLayers.length-1].push(a);this.inform("token_added");return a},init:function(){__p&&__p();var a=this;this._cleanup=this._cleanup.bind(this);b("Run").onLeave(this._cleanup);b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this._cleanup);b("Layer").subscribe("show",function(c,d){d.hasBehavior(b("ModalLayer"))&&a.pushLayer()});b("Layer").subscribe("hide",function(c,d){d.hasBehavior(b("ModalLayer"))&&a.popLayer()});this.register("SLASH",function(){var c=a._getFlyoutNub();c&&b("Dock").toggle(c)},{filter:function(a,b){return a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("?")],description:i._("Show this help dialogue")}})},_cleanup:function(){__p&&__p();var a=this,c=[];this._tokenLayers.forEach(function(a){var b=[];a.forEach(function(a){a.isActive()&&b.push(a)});b.length&&c.push(b)});this._tokenLayers=c;this.inform("cleanup");b("PageTransitions").registerCompletionCallback(function(){b("Run").onLeave(a._cleanup),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,a._cleanup)})},pushLayer:function(){var a=this._getTopLayer();a&&a.forEach(function(a){a.unregister()});this._tokenLayers.push([])},popLayer:function(){if(this._tokenLayers.length===0)return;var a=this._tokenLayers.pop();a.forEach(function(a){a.remove()});a=this._getTopLayer();a&&a.forEach(function(a){a.register()})},_getTopLayer:function(){return!this._tokenLayers.length?null:this._tokenLayers[this._tokenLayers.length-1]},_getBaseLayer:function(){return!this._tokenLayers.length?null:this._tokenLayers[0]},getShortcutInfos:function(){var a=[],b=this._getBaseLayer();b&&b.forEach(function(b){var c=b.getShortcutInfo();b.isActive()&&c!=null&&a.push(c)});return a},_getArbiterInstance:function(){this._arbiter||(this._arbiter=new(b("Arbiter"))());return this._arbiter},inform:function(a,b,c){return this._getArbiterInstance().inform(a,b,c)},subscribe:function(a,b,c){return this._getArbiterInstance().subscribe(a,b,c)},unsubscribe:function(a){this._getArbiterInstance().unsubscribe(a)},_handleFirstShortcutTriggered:function(){this._hasTriggeredShortcut=!0;var a=this._getFlyoutNub();a&&(b("CSS").removeClass(a,"_ur5"),this._nubNux&&this._nubNuxID&&(this._nubNux.show(),b("BasicFBNux").onView(this._nubNuxID),this._nubNux.subscribe("hide",b("BasicFBNux").onDismiss.bind(this,this._nubNuxID))))},_getFlyoutNub:function(){this._flyoutNub||(this._flyoutNub=document.querySelector("#pagelet_dock ._rz3"));return this._flyoutNub},showShortcutFlyout:function(){this._hasTriggeredShortcut||this._handleFirstShortcutTriggered();var a=this._getFlyoutNub();a&&b("Dock").show(a)},hasFlyoutToShow:function(){return this._getFlyoutNub()!=null&&this.getShortcutInfos().length>0},initNUXEvent:function(a,b){this._nubNux=a,this._nubNuxID=b}};a.init();e.exports=a}),null);
__d("FBSiteWhiteOps",["ControlledReferer","FBEngagementWhiteopsFraudSensorTypedLogger","Style","URI","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={appendToWindow:function(a,c,d,e,f){__p&&__p();e===void 0&&(e=null);f===void 0&&(f=null);var g=window.document.body;try{var h="fbsbx-sig-iframe-detection";if(g.getElementsByClassName(h).length!==0)return;var i=window.document.createElement("iframe");b("Style").apply(i,{height:"1px",width:"1px",opacity:"0",position:"relative",zIndex:"-9999999"});i.id="fbsbx-sig-iframe-"+a;i.className=h;i.referrerPolicy="no-referrer";b("ControlledReferer").useFacebookReferer(i,function(){__p&&__p();i.sandbox="allow-scripts allow-same-origin";var g="https://s.update.fbsbx.com/2/843748/utils.html?ti="+a+"&di=facebook.com&bt="+c+"&dt=8437481520966594402012";d&&(g+="&sn="+d);e!=null&&e!==""&&(g+="&c1="+e);f!=null&&f!==""&&(g+="&c3="+f);g=new(b("URI"))(g);var h=i.contentWindow.document,j="fbsbx-sig-iframe-form-"+a,k=g.toString();g=g.getQueryData();if(b("UserAgent").isBrowser("IE")||b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("IE Mobile")){var l="";for(var m in g)Object.prototype.hasOwnProperty.call(g,m)&&(l+="<input "+('name="'+m+'" ')+'type="hidden" autocomplete="off" '+('value="'+g[m]+'" />'));h.body.innerHTML='<form method="GET" id='+j+">"+l+"</form>";l=h.getElementById(j);l.action=k}else{h.body.innerHTML='<form method="GET" id='+j+"></form>";l=h.getElementById(j);l.action=k;for(var n in g)if(Object.prototype.hasOwnProperty.call(g,n)){k=h.createElement("input");k.name=n;k.value=g[n];k.autocomplete="off";k.type="hidden";l.appendChild(k)}}h.body.innerHTML+='<iframe height="100%" width="100%" onload=\'document.getElementById("'+j+"\").submit()'/>;"});g.appendChild(i)}catch(a){}},log:function(a,c,d){new(b("FBEngagementWhiteopsFraudSensorTypedLogger"))().setInstanceID(a).setTqBotDetectionProductEnum(c).log()}};e.exports=a}),null);
__d("BrowseQueryParams",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BQF_PARAM:"bqf",SEARCH_TYPE_PARAM:"searchtype",QUERY_PARAM:"q",FULL_QUERY_PARAM:"query",PAGE_PARAM:"page",REF_PARAM:"ref",FILTERS:"filters",ENTRY_POINT_ACTION_PARAM:"epa",ENCRYPTED_BQF_PARAM:"f"})}),null);