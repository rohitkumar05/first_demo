if (self.CavalryLogger) { CavalryLogger.start_js(["sjwCY"]); }

__d("CreateLivingRoomActionLinkImpressionFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){}a.log=function(a){b("FalcoLoggerInternal").log("create_living_room_action_link_impression",a())};a.logImmediately=function(a){b("FalcoLoggerInternal").log("create_living_room_action_link_impression",a(),!0)};return a}();e.exports=a}),null);
__d("CreateLivingRoomActionLinkStore",["undux"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("undux").connect;c=b("undux").createStore;d={ctas:{}};var g=c(d);f=function(a,b){var c,d=g.get("ctas");if(((c=d[a])==null?void 0:c.isActivated)===!0)return;d=babelHelpers["extends"]({},d,(c={},c[a]={isActivated:!0,creationSource:b},c));g.set("ctas")(d)};e.exports={withStore:a(g),activateLivingRoomCTAForVideo:f}}),null);
__d("CreateLivingRoomActionLinkTrigger",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALWAYS_SHOW:"always_show"})}),null);
__d("CreateLivingRoomCTAStyle",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CREATE:"create",JOIN:"join"})}),null);
__d("LivingRoomCreationSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({GROUP_COMPOSER:"group_composer",USER_TIMELINE_COMPOSER:"user_timeline_composer",NEWSFEED_COMPOSER:"newsfeed_composer",PAGE_COMPOSER:"page_composer",PAGE_COMPOSER_PREMIERE:"page_composer_premiere",PAGE_COMPOSER_DIALOG:"page_composer_dialog",VIDEO_PLAYER_PLUGIN:"video_player_plugin",VIDEO_PLAYER_PLUGIN_DIALOG:"video_player_plugin_dialog",LIVING_ROOM_ENDSCREEN_CTA:"living_room_endscreen_cta",MESSENGER:"messenger",MESSENGER_COMPOSER:"messenger_composer",MESSENGER_RTC_CALL:"messenger_rtc_call",MESSENGER_VIDEO_ATTACHMENT:"messenger_video_attachment",MESSENGER_SOLO_PLAYER:"messenger_solo_player",MESSENGER_SOLO_PLAYER_FULL_SCREEN:"messenger_solo_player_full_screen",MESSENGER_CTA:"messenger_cta",ENDED_LIVING_ROOM_STORY_CTA:"ended_living_room_story_cta",UFI_SHARE:"ufi_share",LIVE_VIDEO_SHARE_SHEET:"live_video_share_sheet",LIVE_VIDEO_PROMPT:"live_video_prompt",NT_CVC_BOTTOM_SHEET:"nt_cvc_bottomsheet",NT_WATCHING_TOGETHER:"nt_watching_together",CHANNEL_FEED_CTA:"channel_feed_cta",FEED_CTA_ON_ALWAYS_SHOW:"feed_cta_on_always_show",FEED_CTA_ON_REACT:"feed_cta_on_react",FEED_CTA_ON_COMMENT:"feed_cta_on_comment",FEED_CTA_ON_VIDEO_PRESS:"feed_cta_on_video_press",FEED_CTA_ON_SHARE:"feed_cta_on_share",FEED_CTA_ON_UNKNOWN:"feed_cta_on_unknown",USER_TIMELINE_VIDEO_CTA:"user_timeline_video_cta",PAGE_TIMELINE_VIDEO_CTA:"page_timeline_video_cta",UNKNOWN_TIMELINE_VIDEO_CTA:"unknown_timeline_video_cta",GROUP_MALL_VIDEO_CTA:"group_mall_video_cta",FEED_CTA_ON_NEWSFEED:"feed_cta_on_newsfeed",VIDEO_INSIGHTS_DIALOG:"video_insights_dialog",PAGE_FEED_OPTION:"page_feed_option",PAGE_VIDEO_LIBRARY_MEGAPHONE:"page_video_library_megaphone",PAGE_VIDEO_LIBRARY_BUTTON:"page_video_library_button",PAGE_ADMIN_QP:"page_admin_qp",GROUP_FEED_QP:"group_feed_qp",END_SCREEN_CTA:"end_screen_cta",LIVE_VIDEO_GODZILLA_NUX:"live_video_godzilla_nux",GROUP_ACTIVE_LIVING_ROOMS_CTA:"group_active_living_room_cta",GOODWILL_THROWBACK_CTA:"goodwill_throwback_cta",UNKNOWN_COMPOSER:"unknown_composer",UNKNOWN:"unknown",TEST:"test"})}),null);
__d("LivingRoomEntrySource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({WATCH_TAB:"WATCH_TAB",TAHOE:"TAHOE",TAHOE_TO_FEED:"TAHOE_TO_FEED",SOCIAL_PLAYER:"SOCIAL_PLAYER",CHANNEL_PLAYER:"CHANNEL_PLAYER",FEED:"FEED",PAGE_TIMELINE:"PAGE_TIMELINE",USER_TIMELINE:"USER_TIMELINE",GROUP_FEED:"GROUP_FEED",PAGE_FEED_OPTION:"PAGE_FEED_OPTION",NOTIFICATIONS:"NOTIFICATIONS",PERMALINK:"PERMALINK",DEEPLINK:"DEEPLINK",COMPOSER:"COMPOSER",STORY_ATTACHMENT:"STORY_ATTACHMENT",PUSH_NOTIFICATIONS:"PUSH_NOTIFICATIONS",CTA_CREATION_DIALOG:"CTA_CREATION_DIALOG",MESSENGER_RTC_CALL:"MESSENGER_RTC_CALL",MESSENGER_COMPOSER:"MESSENGER_COMPOSER",MESSENGER_INBOX:"MESSENGER_INBOX",MESSENGER_THREAD_BANNER:"MESSENGER_THREAD_BANNER",MESSENGER_VIDEO_ATTACHMENT:"MESSENGER_VIDEO_ATTACHMENT",MESSENGER_XMA:"MESSENGER_XMA",MESSENGER_SOLO_PLAYER:"MESSENGER_SOLO_PLAYER",MESSENGER_SOLO_PLAYER_FULL_SCREEN:"MESSENGER_SOLO_PLAYER_FULL_SCREEN",END_SCREEN_CHAINING:"END_SCREEN_CHAINING",SCHEDULED_STORY_ATTACHMENT:"SCHEDULED_STORY_ATTACHMENT",SEARCH_RESULTS:"SEARCH_RESULTS",SEARCH_VIDEO_TAB:"SEARCH_VIDEO_TAB",SEARCH_VIDEO_HOME:"SEARCH_VIDEO_HOME",FEED_JOIN_CTA:"FEED_JOIN_CTA",GOODWILL_THROWBACK_CTA:"GOODWILL_THROWBACK_CTA",GROUP_FEED_QP:"GROUP_FEED_QP"})}),null);
__d("XLivingRoomVideoShareDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/living_room/share_dialog/",{creation_source:{type:"Enum",required:!0,enumType:1},entry_source:{type:"Enum",required:!0,enumType:1},video_id:{type:"FBID"},default_to_page:{type:"Bool",defaultValue:!1},group_id:{type:"FBID"},living_room_id:{type:"FBID"}})}),null);
__d("CreateLivingRoomActionLink.react",["ix","cx","fbt","CreateLivingRoomActionLinkImpressionFalcoEvent","CreateLivingRoomActionLinkStore","CreateLivingRoomActionLinkTrigger","CreateLivingRoomCTAStyle","Image.react","LivingRoomCreationSource","LivingRoomEntrySource","React","XLivingRoomVideoShareDialogController","XUIButton.react","XUIGrayText.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("CreateLivingRoomActionLinkStore").activateLivingRoomCTAForVideo;a=b("CreateLivingRoomActionLinkStore").withStore;var k=a(function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this.props.triggers;if(a==null)return;j(this.props.videoID,this.props.creationSource||b("LivingRoomCreationSource").UNKNOWN_TIMELINE_VIDEO_CTA)};d.componentDidUpdate=function(a){var c=this.props,d=c.videoID,e=c.creationSource;!this.$1&&!((c=a.store.get("ctas")[d])==null?void 0:c.isActivated)&&((a=this.props.store.get("ctas")[d])==null?void 0:a.isActivated)&&(b("CreateLivingRoomActionLinkImpressionFalcoEvent").log(function(){return{video_id:d,creation_source:e!=null?e:b("LivingRoomCreationSource").FEED_CTA_ON_UNKNOWN,cta_style:b("CreateLivingRoomCTAStyle").CREATE}}),this.$1=!0)};d.render=function(){var a=this.props,c=a.videoID,d=a.title,e=a.linkTitle,f=a.groupID;a=a.creationSource;var h=this.props.store.get("ctas")[c];if(h==null)return null;h=h.isActivated;return!h?null:b("React").createElement("div",{className:"_1kyo"},b("React").createElement("div",{className:"_6z3v"},b("React").createElement(b("Image.react"),{className:"_6z2v",src:g("657321")})),b("React").createElement("div",{className:"_1kyp _6z2w"},b("React").createElement(b("XUIGrayText.react"),{shade:"light"},d!=null?d:i._("Watch this video with your friends"))),b("React").createElement("div",{className:"_1kyq"},b("React").createElement(b("XUIButton.react"),{display:"inline-block",label:e!=null?e:i._("Start Watch Party"),href:"#",ajaxify:b("XLivingRoomVideoShareDialogController").getURIBuilder().setFBID("video_id",c).setEnum("creation_source",a).setEnum("entry_source",b("LivingRoomEntrySource").CTA_CREATION_DIALOG).setFBID("group_id",f).getURI(),rel:"dialog-post"})))};return c}(b("React").Component));c=function(a){return b("React").createElement(k,a)};e.exports=c}),null);