if (self.CavalryLogger) { CavalryLogger.start_js(["q3\/Pe"]); }

__d("LiveVideoEndScreenTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LiveVideoEndScreenLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LiveVideoEndScreenLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LiveVideoEndScreenLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event:!0,time:!0,vc:!0,video_id:!0,weight:!0};e.exports=a}),null);
__d("AsyncFormRequestUtils",["Arbiter"],(function(a,b,c,d,e,f){a={subscribe:function(a,c,d){b("Arbiter").subscribe("AsyncRequest/"+c,function(b,c){b=c.request.relativeTo;b&&b===a&&d(c)})}};e.exports=a}),null);
__d("VideoHomeWelcomeNux",["AsyncRequest","OnVisible","XBasicFBNuxViewController"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();a.init=function(b,c){return new a(b,c)};function a(a,c){var d=this;this.$4=function(){window.setTimeout(function(){var a=b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id",d.$2).getURI();new(b("AsyncRequest"))().setURI(a).send()},5e3)};this.$1=a;this.$2=c;this.$3=new(b("OnVisible"))(a,this.$4)}return a}();e.exports=a}),null);
__d("getApproximateScreenRefreshRate",["UserAgent","requestAnimationFrame"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=null,i=100,j=300,k=function a(c,d,e,f,g){d=c-d;e=Math.min(d,e);f===i?g(e):b("requestAnimationFrame")(function(b){return a(b,c,e,f+1,g)})},l=function a(c,d,e,f){e===j?f((c-d)/j):b("requestAnimationFrame")(function(b){return a(b,d,e+1,f)})};a=function(a){__p&&__p();if(g)a(g);else if(h)h.push(a);else{h=[a];var c=function(a){g=Math.round(1e3/a),h&&h.forEach(function(a){return a(g)}),h=null};b("UserAgent").isBrowser("Chrome")?b("requestAnimationFrame")(function(a){b("requestAnimationFrame")(function(b){return k(b,a,Number.MAX_SAFE_INTEGER,0,c)})}):b("requestAnimationFrame")(function(a){return l(a,a,0,c)})}};e.exports=a}),null);
__d("VideoHomeScrollPerfTracker",["EventListener","Run","TimeSliceInteraction","getApproximateScreenRefreshRate","performanceNow","requestAnimationFrame"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e3,h=null,i=function(){__p&&__p();var a=this;this.$7=function(){if(a.$5){var c=a.$5,d=b("performanceNow")();a.$3++;a.$2||(a.$2=d);d-a.$2>=g?(b("getApproximateScreenRefreshRate")(function(b){c.trace().addStringAnnotation("scroll_duration_ms",""+Math.round(a.$2-a.$1)).addStringAnnotation("refresh_rate",""+b).addStringAnnotation("frame_count",""+(a.$4+1)),c.finish()}),a.$5=null):b("requestAnimationFrame")(a.$7)}};this.$6=function(){a.$5?(a.$4=a.$3,a.$2=0):(a.$1=b("performanceNow")(),a.$2=0,a.$3=0,a.$4=0,a.$5=b("TimeSliceInteraction").create("watch_discover_scroll"),b("requestAnimationFrame")(a.$7))};this.$1=0;this.$2=0;this.$5=null;this.$3=0;this.$4=0;var c=b("EventListener").listen(window,"scroll",this.$6);b("Run").onLeave(function(){c.remove(),h=null})};e.exports={init:function(){h||(h=new i())}}}),null);
__d("XLiveViewerAsyncDismissNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/viewer/nux/dismiss/",{video_id:{type:"String"},source:{type:"String"}})}),null);
__d("XLiveWatchingAsyncNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/watching/",{video_id:{type:"String"},source:{type:"String"},unmuted:{type:"Bool",defaultValue:!0}})}),null);
__d("LiveVideoIndicatorOverlay",["csx","cx","invariant","AsyncRequest","CSS","DOM","Event","Run","SubscriptionsHandler","VideoPlayerLoggerSource","XLiveViewerAsyncDismissNuxController","XLiveWatchingAsyncNuxController"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=!1;a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,h,k){__p&&__p();var l=this;this.$3=a;this.$1=c;this.$4=e;this.$5=a.getVideoID();this.$6=f;this.$7=!1;this.$2=new(b("SubscriptionsHandler"))();this.$2.addSubscriptions(a.addListener("streamInterrupted",this.$8.bind(this)),a.addListener("streamResumed",this.$9.bind(this)),a.addListener("finishPlayback",this.$10.bind(this)),a.addListener("beginPlayback",this.$11.bind(this)),a.addListener("VideoChannelController/enterChannel",this.$12.bind(this)),a.addListener("VideoChannelController/exitChannel",this.$13.bind(this)),a.addListener("TahoeController/enterTahoe",this.$14.bind(this)),a.addListener("TahoeController/exitTahoe",this.$15.bind(this)));if(this.$4!=null){this.$4!=null||i(0,3775);d=b("DOM").scry(this.$4.getContentRoot(),"._36gl")[0];if(!d)return;var m=b("Event").listen(d,"click",function(){m&&(m.remove(),m=null),new(b("AsyncRequest"))().setAllowCrossPageTransition().setURI(b("XLiveViewerAsyncDismissNuxController").getURIBuilder().getURI()).setData({video_id:l.$5,source:l.$3.getSource()}).setHandler(function(){j=!0}).send()})}g==="tahoe"&&this.$14();b("Run").onLeave(function(){return l.$2.release()})}var c=a.prototype;c.$16=function(){var a=this.$3.getSource();return a==b("VideoPlayerLoggerSource").CHANNEL||a==b("VideoPlayerLoggerSource").SNOWLIFT||a==b("VideoPlayerLoggerSource").PERMALINK?!0:!1};c.$11=function(){var b=this;(this.$6||this.$16())&&setTimeout(function(){return b.$17()},a.DELAY_TO_SHOW_WATCHING_NUX*1e3);this.$18()};c.$14=function(){this.$7=!0;this.$6=!0;this.$19();var a=this.$4;a&&(a.setOffsetX(65),a.setOffsetY(80))};c.$15=function(){this.$7=!1,this.$6=!1,this.$20(),this.$18()};c.$12=function(){this.$6=!0};c.$13=function(){this.$6=!1,this.$20()};c.$17=function(){this.$4&&!j&&this.$4.show(),new(b("AsyncRequest"))().setAllowCrossPageTransition().setURI(b("XLiveWatchingAsyncNuxController").getURIBuilder().getURI()).setData({video_id:this.$5,source:this.$3.getSource(),unmuted:!this.$3.isMuted()}).send()};c.$8=function(){this.$19()};c.$9=function(){this.$18()};c.$19=function(){b("CSS").removeClass(this.$1,"_3rno")};c.$18=function(){if(this.$3.isState("finished")||this.$7)return;b("CSS").addClass(this.$1,"_3rno")};c.$10=function(){this.$19(),this.$20()};c.$20=function(){this.$4&&this.$4.isShown()&&this.$4.hide()};return a}();a.DELAY_TO_SHOW_WATCHING_NUX=8;e.exports=a}),null);
__d("VideoBroadcastSubscriptionAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SUBSCRIBE:"subscribe",SUBSCRIBE_SUGGESTED:"subscribe_suggested",UNSUBSCRIBE:"unsubscribe"})}),null);
__d("VideoRightButtonBase",["csx","cx","AsyncFormRequestUtils","CSS","DOM","Event","FormSubmit","LayerRefocusOnHide","Run","SubscriptionsHandler","throttle"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,h,i){__p&&__p();var j=this;this.$1=[];this.$2=c;this.$3=g;this.$4=f;this.$5=a;this.$6=h.hiddenAfterFinish;this.$7=h.hiddenWhilePaused;this.$8=h.allowHide;this.$9=new(b("SubscriptionsHandler"))();this.$10=!1;this.$11=!1;this.$12=!1;this.$13=i;this.$14=!1;if(this.$13){this.$13.disableBehavior(b("LayerRefocusOnHide"));d=b("DOM").scry(this.$13.getContentRoot(),"._36gl")[0];d&&b("Event").listen(d,"click",function(){j.$14=!1,j.$13=null,j.nuxViewClicked()});this.$13.subscribe("hide",function(){j.$14&&j.nuxViewHidden(),j.$14=!1,j.$13=null})}}var c=a.prototype;c.setupAllHandlers=function(){__p&&__p();var a=this;this.$9=new(b("SubscriptionsHandler"))();var c=this.$5.getRootNode();b("Run").onLeave(function(){a.$9.release()});this.$9.addSubscriptions(b("Event").listen(c,"mousemove",b("throttle")(function(){return a.$15()},200)),b("Event").listen(c,"mouseenter",function(){if(a.$6&&a.$11||a.$7&&a.$12)return;a.$16=!0;a.$15();a.$13&&(a.$13.show(),a.$14=!0)}),b("Event").listen(c,"mouseleave",function(){a.$17(),a.$16=!1}),this.$5.addListener("beginPlayback",function(){a.$11=!1,a.$12=!1}),this.$5.addListener("finishPlayback",function(){a.$17(),a.$11=!0}),this.$5.addListener("pausePlayback",function(){a.$17(),a.$12=!0}));b("Event").listen(this.$2,"click",function(){a.$18&&clearTimeout(a.$18),a.$1.length===0&&(a.$3.setAttribute("value",a.nextActionOnToggle(a.$10)),b("FormSubmit").send(a.$4)),a.$10?(a.toggleSwitchOffAnimation(a.$2),a.$1.push(!1),a.$10=!1):(a.toggleSwitchOnAnimation(a.$2),a.$1.push(!0),a.$10=!0)});c=function(c){c=a.$3.getAttribute("value")===a.nextActionOnToggle(!0);if(a.$1.length>1){var d=a.$1[a.$1.length-1];d=d;(c&&!d||!c&&d)&&(a.$3.setAttribute("value",a.nextActionOnToggle(d)),b("FormSubmit").send(a.$4))}a.$1=[]};b("AsyncFormRequestUtils").subscribe(this.$4,"response",c)};c.$17=function(){!this.$14&&this.$8&&b("CSS").addClass(this.$2,"_55c1")};c.$15=function(){var a=this;this.$16&&(b("CSS").removeClass(this.$2,"_55c1"),clearTimeout(this.$19),this.$19=setTimeout(function(){return a.$17()},3e3))};c.toggleSwitchOnAnimation=function(){throw new Error("This should be overwritten by children")};c.toggleSwitchOffAnimation=function(){throw new Error("This should be overwritten by children")};c.nextActionOnToggle=function(a){throw new Error("This should be overwritten by children")};c.nuxViewClicked=function(){throw new Error("This should be overwritten by children")};c.nuxViewHidden=function(){throw new Error("This should be overwritten by children")};return a}();e.exports=a}),null);
__d("XLiveSubscribeAsyncNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/subscribe/nux/",{action:{type:"String"},video_id:{type:"String"}})}),null);
__d("VideoLiveFollowButton",["cx","fbt","AsyncRequest","CSS","DOM","VideoBroadcastSubscriptionAction","VideoRightButtonBase","XLiveSubscribeAsyncNuxController"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,g,h,i,j,k,l){__p&&__p();h=a.call(this,c,d,e,g,h,i,j,l)||this;h.$VideoLiveFollowButton1=e;h.$VideoLiveFollowButton2=g;h.$VideoLiveFollowButton3=f;h.$VideoLiveFollowButton4=i.getAttribute("value")===b("VideoBroadcastSubscriptionAction").UNSUBSCRIBE;h.$VideoLiveFollowButton4?h.setSwitchOnState(d):h.setSwitchOffState(d);h.$VideoLiveFollowButton5=c.getVideoID();h.setupAllHandlers();h.$VideoLiveFollowButton6=k;return h}var d=c.prototype;d.nuxViewClicked=function(){this.sendNuxSeenRequest("dismiss")};d.sendNuxSeenRequest=function(a){new(b("AsyncRequest"))().setURI(b("XLiveSubscribeAsyncNuxController").getURIBuilder().getURI()).setData({action:a,video_id:this.$VideoLiveFollowButton5}).send()};d.nuxViewHidden=function(){this.sendNuxSeenRequest("hide")};d.setSwitchOffState=function(a){var c=h._("Live Notifications");b("CSS").removeClass(a,"_-kc");b("CSS").show(this.$VideoLiveFollowButton3);b("CSS").removeClass(this.$VideoLiveFollowButton1,"_knu");b("DOM").setContent(this.$VideoLiveFollowButton2,c)};d.setSwitchOnState=function(a){var c=h._("Live Notifications");b("CSS").addClass(a,"_-kc");b("CSS").hide(this.$VideoLiveFollowButton3);b("CSS").addClass(this.$VideoLiveFollowButton1,"_knu");b("DOM").setContent(this.$VideoLiveFollowButton2,c)};d.nextActionOnToggle=function(a){if(a)return b("VideoBroadcastSubscriptionAction").UNSUBSCRIBE;else return b("VideoBroadcastSubscriptionAction").SUBSCRIBE};d.toggleSwitchOnAnimation=function(a){this.setSwitchOnState(a)};d.toggleSwitchOffAnimation=function(a){this.setSwitchOffState(a)};return c}(b("VideoRightButtonBase"));e.exports=a}),null);
__d("LiveVideoEndScreenCTAs.react",["cx","ProfileTile.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=130;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){return b("React").createElement("div",{className:"_2219"},b("React").createElement("div",{className:"_221a"},b("React").createElement(b("ProfileTile.react"),{id:this.props.ownerID,imageProps:{className:"_2240"},size:h})),b("React").createElement("div",{className:"_2241"},this.props.ownerName))};d.render=function(){return!this.props.shouldShow?null:this.$1()};return c}(b("React").Component);e.exports=a}),null);
__d("LiveVideoEndScreenConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTIONS:{SET_THUMBNAILS:"SET_THUMBNAILS"}};e.exports=a}),null);
__d("LiveVideoEndScreenDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("XLiveVideoTopBroadcastThumbnailController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video_broadcast/top_broadcast_thumbnails/",{video_id:{type:"FBID"},thumbnail_count:{type:"Int",defaultValue:2}})}),null);
__d("LiveVideoEndScreenThumbnails.react",["AsyncRequest","DOMContainer.react","React","VideoPlayerLoggerSource","XLiveVideoTopBroadcastThumbnailController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){c=a.call(this,c)||this;var d=b("XLiveVideoTopBroadcastThumbnailController").getURIBuilder().setFBID("video_id",c.props.videoController.getVideoID()).setInt("thumbnail_count",3).getURI();new(b("AsyncRequest"))(d).send();return c}var d=c.prototype;d.$1=function(){__p&&__p();if(!this.props.thumbnails)return null;var a=[];for(var c=this.props.thumbnails,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;a.push(b("React").createElement(b("DOMContainer.react"),{key:f.href},f))}return a};d.render=function(){return this.props.videoController.getIsInChannel()||this.props.videoController.getSource()===b("VideoPlayerLoggerSource").WATCH_SCROLL?null:b("React").createElement("div",null,this.$1())};return c}(b("React").Component);e.exports=a}),null);
__d("LiveVideoEndScreenUIStore",["FluxMapStore","LiveVideoEndScreenConstants","LiveVideoEndScreenDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("LiveVideoEndScreenConstants").ACTIONS;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return b("immutable").Map({thumbnails:null})};d.reduce=function(a,b){switch(b.type){case g.SET_THUMBNAILS:a=a.set("thumbnails",b.value);break;default:break}return a};return c}(b("FluxMapStore"));a.__moduleID=e.id;e.exports=new a(b("LiveVideoEndScreenDispatcher"))}),null);
__d("LiveVideoEndScreenThumbnailsContainer.react",["FluxContainer","LiveVideoEndScreenDispatcher","LiveVideoEndScreenThumbnails.react","LiveVideoEndScreenUIStore","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);c.getStores=function(){return[b("LiveVideoEndScreenUIStore")]};c.calculateState=function(a,c){a=b("LiveVideoEndScreenUIStore").getState().toObject();c=a.thumbnails;return{thumbnails:c}};function c(c){c=a.call(this,c)||this;b("LiveVideoEndScreenDispatcher").explicitlyRegisterStores([b("LiveVideoEndScreenUIStore")]);return c}var d=c.prototype;d.render=function(){return b("React").createElement(b("LiveVideoEndScreenThumbnails.react"),{thumbnails:this.state.thumbnails,videoController:this.props.videoController})};return c}(b("React").Component);e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
__d("LiveVideoEndScreenEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SCREEN_SHOWN:"screen_shown"})}),null);
__d("VideoLiveEndscreen",["cx","CSS","LiveMapEntryPointsLoggerController","LiveVideoEndScreenCTAs.react","LiveVideoEndScreenEvent","LiveVideoEndScreenThumbnailsContainer.react","LiveVideoEndScreenTypedLogger","React","ReactDOM","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,h,i,j,k){this.$4=!1,this.$3=a,this.$1=c,this.$4=d,this.$5=e,this.$6=f,this.$7=g,this.$8=h,this.$9=i,this.$10=j,this.$11=k,this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(a.addListener("beginPlayback",this.$12.bind(this)),a.addListener("finishPlayback",this.$13.bind(this)),a.addListener("playRequested",this.$14.bind(this)),a.addListener("VideoChannelController/exitChannel",this.$15.bind(this)),a.addListener("enterWatchAndScroll",this.$16.bind(this)),a.addListener("exitWatchAndScroll",this.$17.bind(this)),a.addListener("blockVideo",this.$18.bind(this))),a.registerOption("VideoLiveEndscreen","enabled",function(){return!0})}var c=a.prototype;c.$12=function(){b("CSS").hide(this.$1)};c.$13=function(){this.$4&&b("LiveMapEntryPointsLoggerController").logEndscreenImpression(),new(b("LiveVideoEndScreenTypedLogger"))().setEvent(b("LiveVideoEndScreenEvent").SCREEN_SHOWN).setVideoID(this.$3.getVideoID()).log(),b("CSS").show(this.$1),this.$5&&b("ReactDOM").render(b("React").createElement(b("LiveVideoEndScreenThumbnailsContainer.react"),{videoController:this.$3}),this.$5),this.$8&&b("ReactDOM").render(b("React").createElement(b("LiveVideoEndScreenCTAs.react"),{ownerID:this.$6,ownerName:this.$7,shouldShow:this.$3.getIsInChannel()}),this.$8)};c.$14=function(){b("CSS").hide(this.$1)};c.$16=function(){this.$9&&b("CSS").addClass(this.$9,"_6qhs")};c.$17=function(){this.$9&&b("CSS").removeClass(this.$9,"_6qhs")};c.$15=function(){this.$8&&b("ReactDOM").unmountComponentAtNode(this.$8)};c.$18=function(){b("CSS").show(this.$1),this.$11&&b("CSS").show(this.$11),this.$10&&b("CSS").hide(this.$10)};return a}();e.exports=a}),null);
__d("VideoLiveInterruptedScreen",["CSS","SubscriptionsHandler","VideoPlayerHTML5Experiments","clearTimeout","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("VideoPlayerHTML5Experiments").displayInterruptedScreenDelay;a=function(){__p&&__p();function a(a,c){this.$4=null,this.$3=a,this.$1=c,this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(a.addListener("streamInterrupted",this.$5.bind(this)),a.addListener("streamResumed",this.$6.bind(this)))}var c=a.prototype;c.$5=function(){var a=this;g?(b("clearTimeout")(this.$4),this.$4=b("setTimeout")(function(){b("CSS").show(a.$1)},g)):b("CSS").show(this.$1)};c.$6=function(){g&&b("clearTimeout")(this.$4),b("CSS").hide(this.$1)};return a}();e.exports=a}),null);