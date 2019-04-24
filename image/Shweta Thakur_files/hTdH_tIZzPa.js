if (self.CavalryLogger) { CavalryLogger.start_js(["AcZEd"]); }

__d("InstantGameContainerHelper",["AsyncRequest","XGamesQuicksilverSpotlightPlayerController"],(function(a,b,c,d,e,f){"use strict";a={launchGameOnPageLoad:function(a,c,d,e,f){a=b("XGamesQuicksilverSpotlightPlayerController").getURIBuilder().setString("app_id",a).setString("source",c).setString("context_source_id",d).setString("entry_point_data",f).setEnum("context_type",e).getURI();new(b("AsyncRequest"))().setURI(a).send()}};e.exports=a}),null);
__d("GamingDestinationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAttachedStoryAttachmentType=function(a){this.$1.attached_story_attachment_type=a;return this};c.setAttachedStoryType=function(a){this.$1.attached_story_type=a;return this};c.setBadgeCount=function(a){this.$1.badge_count=a;return this};c.setBadgeDelayTime=function(a){this.$1.badge_delay_time=a;return this};c.setClientUserID=function(a){this.$1.client_userid=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setContentCount=function(a){this.$1.content_count=a;return this};c.setDeviceid=function(a){this.$1.deviceid=a;return this};c.setEncodedSectionID=function(a){this.$1.encoded_section_id=a;return this};c.setEntAttachmentType=function(a){this.$1.ent_attachment_type=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setException=function(a){this.$1.exception=a;return this};c.setExternalEntrypoint=function(a){this.$1.external_entrypoint=a;return this};c.setFeedUnitType=function(a){this.$1.feed_unit_type=a;return this};c.setGameCount=function(a){this.$1.game_count=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setGameID=function(a){this.$1.game_id=a;return this};c.setGroupID=function(a){this.$1.group_id=a;return this};c.setHasGamesApp=function(a){this.$1.has_games_app=a;return this};c.setHasGamesTab=function(a){this.$1.has_games_tab=a;return this};c.setIgAppID=function(a){this.$1.ig_app_id=a;return this};c.setIndex=function(a){this.$1.index=a;return this};c.setIsAsyncJob=function(a){this.$1.is_async_job=a;return this};c.setLoadTimeMs=function(a){this.$1.load_time_ms=a;return this};c.setName=function(a){this.$1.name=a;return this};c.setNavPillID=function(a){this.$1.nav_pill_id=a;return this};c.setNotifID=function(a){this.$1.notif_id=a;return this};c.setNotifType=function(a){this.$1.notif_type=a;return this};c.setNtSection=function(a){this.$1.nt_section=a;return this};c.setObjectID=function(a){this.$1.object_id=a;return this};c.setOptimizedLoadStorySource=function(a){this.$1.optimized_load_story_source=a;return this};c.setOrigin=function(a){this.$1.origin=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setPageIndex=function(a){this.$1.page_index=a;return this};c.setPigeonSessionID=function(a){this.$1.pigeon_session_id=a;return this};c.setPreviousSurface=function(a){this.$1.previous_surface=a;return this};c.setQueryID=function(a){this.$1.query_id=a;return this};c.setSectionID=function(a){this.$1.section_id=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setStarsAmount=function(a){this.$1.stars_amount=a;return this};c.setStoryType=function(a){this.$1.story_type=a;return this};c.setSubOrigin=function(a){this.$1.sub_origin=a;return this};c.setSubSurface=function(a){this.$1.sub_surface=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimeSpent=function(a){this.$1.time_spent=a;return this};c.setTopUnitTypes=function(a){this.$1.top_unit_types=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setTrackingData=function(a){this.$1.tracking_data=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoFeatureJoinKey=function(a){this.$1.video_feature_join_key=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setVisitationID=function(a){this.$1.visitation_id=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={attached_story_attachment_type:!0,attached_story_type:!0,badge_count:!0,badge_delay_time:!0,client_userid:!0,clienttime:!0,content_count:!0,deviceid:!0,encoded_section_id:!0,ent_attachment_type:!0,event:!0,exception:!0,external_entrypoint:!0,feed_unit_type:!0,game_count:!0,game_id:!0,group_id:!0,has_games_app:!0,has_games_tab:!0,ig_app_id:!0,index:!0,is_async_job:!0,load_time_ms:!0,name:!0,nav_pill_id:!0,notif_id:!0,notif_type:!0,nt_section:!0,object_id:!0,optimized_load_story_source:!0,origin:!0,page_id:!0,page_index:!0,pigeon_session_id:!0,previous_surface:!0,query_id:!0,section_id:!0,sessionid:!0,stars_amount:!0,story_type:!0,sub_origin:!0,sub_surface:!0,surface:!0,time:!0,time_spent:!0,top_unit_types:!0,tracking_data:!0,vc:!0,video_feature_join_key:!0,video_id:!0,visitation_id:!0,weight:!0};e.exports=a}),null);
__d("Time.react",["React","SubscriptionList","timeString"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;var g=3e4,h,i;function j(){h.fireCallbacks(Date.now())}h=new(b("SubscriptionList"))(function(){return i=setInterval(j,g)},function(){return clearInterval(i)});c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this,c,d)||this;e.updateTimestamp=function(a){e.setState({timeString:b("timeString")(e.props.timestamp*1e3,a)})};e.state={timeString:b("timeString")(c.timestamp*1e3,Date.now())};return e}var d=c.prototype;d.componentDidMount=function(){this.listener=h.add(this.updateTimestamp)};d.componentWillUnmount=function(){this.listener.remove()};d.render=function(){return b("React").createElement("span",null,this.state.timeString)};return c}(b("React").Component);c.propTypes={timestamp:a.number.isRequired};e.exports=c}),null);
__d("GamingDestinationEntrypoints",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EXAMPLE:"example",CANVAS_RHC:"canvas_rhc",GAMES_VIDEO_BOOKMARK:"games_video_bookmark",GAME_SEARCH_UNIT:"game_search_unit",GAMEROOM_LHC:"gameroom_lhc",GAMEROOM_FOLLOWED_GAME_LHC:"gameroom_followed_game_lhc",GAMEROOM_RHC:"gameroom_rhc",GAMES_APP:"games_app",GROUP_RHC:"group_rhc",GROUP_HOVERCARD:"group_hovercard",GROUP_METALINE:"group_metaline",NEWSFEED_RHC:"newsfeed_rhc",INSTANT_GAMES_RHC:"instant_games_rhc",VIDEO_ATTRIBUTION_NEWSFEED:"video_newsfeed",VIDEO_ATTRIBUTION_PAGE:"video_page",VIDEO_ATTRIBUTION_OTHER:"video_other",LIVE_NOTIFICATION:"live_notification",NONFOLLOWER_NOTIFICATION:"nonfollower_notification",GAME_FOLLOWER_NOTIFICATION:"game_follower_notification",FRIEND_OF_FOLLOWER_NOTIFICATION:"friend_of_follower_notification",GAME_FEED_NOTIFICATION:"game_feed_notification",GAME_DESTINATION_NOTIFICATION:"game_destination_notification",GAME_BOOKMARK:"game_bookmark",GAME_SHORTCUT:"game_shortcut",GAMES_VIDEO_QP:"games_video_qp",GAME_PAGES:"game_pages",VIDEO_HOME:"video_home",NEWS_FEED_ON_VIDEO_CLICK:"news_feed_on_video_click",NEWS_FEED_AFTER_VIDEO_PLAY:"news_feed_after_video_play",GAMES_VIDEO_SOCIAL_PLUGIN:"games_video_social_plugin",ANDROID_GAMING_SHORTCUT:"android_gaming_shortcut",ANDROID_INSTANT_GAME_SHORTCUT:"android_instant_game_shortcut",ANDROID_INSTANT_GAMES_HUB_SHORTCUT:"android_instant_games_hub_shortcut",INSTANT_GAMEHUB_CROSS_SELL:"instant_gamehub_cross_sell",DEEPLINK:"deeplink",UNKNOWN:"unknown",FEED_NAVIGATION_PILLS:"feed_navigation_pills",FEED_STORY_TITLE:"feed_story_title",PUSH_NOTIFICATION:"push_notification",RAIDING:"raiding",FBLITE_BOOKMARK:"fblite_bookmark",FBLITE_MESSENGER_TAB:"fblite_messenger_tab",GAMES_TAB:"games_tab",GAMES_TAB_NOTIFICATION:"games_tab_notification",VIDEO_ACTION_LINK:"video_action_link",FB_OTHER_GAMES_NOTIF:"fb_other_games_notif",STREAMER_EVENT_NOTIFICATION:"streamer_event_notification",STREAMER_SCHEDULE:"streamer_schedule",IG_REDIRECTION:"ig_redirection",GV_NOTIFICATION_REDIRECTION:"gv_notification_redirection",TOP_STREAMERS_UNIT:"top_streamers_unit"})}),null);
__d("GamingDestinationEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SURFACE_ENTER:"surface_enter",SURFACE_EXIT:"surface_exit",TAB_ENTER:"tab_enter",BOOKMARK_ENTER:"bookmark_enter",CLICK:"click",IMPRESSION:"impression",CONTENT_LOAD:"content_load",COMBINED_FEED_PAGE_LOAD:"combined_feed_page_load",SECTION_LOAD:"section_load",SECTION_DATA_GENERATED:"section_data_generated",FOLLOW_GAME:"follow_game",UNFOLLOW_GAME:"unfollow_game",UPVOTE_GAME:"upvote_game",DOWNVOTE_GAME:"downvote_game",FOLLOW_STREAMER:"follow_streamer",UNFOLLOW_STREAMER:"unfollow_streamer",LOAD_ERROR:"load_error",PUMA_ERROR:"puma_error",NON_FATAL_ERROR:"non_fatal_error",REDIRECT_ENTER:"redirect_enter",FUSS_FILTERED_VIDEO:"fuss_filtered_video",FLAGGED_FILTERED_VIDEO:"flagged_filtered_video",FUSS_ERROR:"fuss_error",QUERY_SOURCE:"query_source",FEED_INDEX_QUERY:"feed_index_query",REACHED_FEED_END:"reached_feed_end",DISMISS:"instant_gamehub_cross_sell_dismiss",LOGIN_SUCCESS:"login_success",LOGIN_FAILED:"login_failed",SEARCH:"search",LAUNCH_APP:"launch_app",TOGGLE_ON:"toggle_on",TOGGLE_OFF:"toggle_off",FEED_ATTACHMENT_RENDER_ERROR:"feed_attachment_render_error",CANCEL:"cancel",GAMES_FEED_LOAD_SUCCESS:"games_feed_load_success",GAMES_FEED_LOAD_FAILURE:"games_feed_load_failure",GAMES_FEED_GO_TO_TOP:"games_feed_go_to_top",GO_LIVE:"go_live",GAMES_TAB_BADGED:"games_tab_badged",HARD_FOLLOW_STREAMER:"hard_follow_streamer",HARD_UNFOLLOW_STREAMER:"hard_unfollow_streamer",SHARE:"share",WRONG_HAS_TAB_VALUE:"wrong_has_tab_value",REFRESH_TOP_UNIT:"refresh_top_unit",STREAMER_EVENT_SHARE:"streamer_event_share",STREAMER_EVENT_WATCHED:"streamer_event_watched",STREAMER_EVENT_JOINED:"streamer_event_joined",STREAMER_EVENT_UNWATCHED:"streamer_event_unwatched",STREAMER_EVENT_WATCH_NOW:"streamer_event_watch_now",THREAD_CREATED:"thread_created",MESSAGE_SEND:"message_send",FEED_SCROLLED:"feed_scrolled",TAB_BADGE_DELAYED:"tab_badge_delayed",RANKED_GAMES:"ranked_games",PLAY_STORE_CALLBACK:"play_store_callback",FREE_STARS_CLAIMED:"free_stars_claimed",FREE_STARS_CLAIM_FAILED:"free_stars_claim_failed",FREE_STARS_ITEM_CREATED:"free_stars_item_created",MEMORY_WARNING:"memory_warning"})}),null);
__d("XGamesQuicksilverPlayController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instantgames/play/{game_or_link}/",{context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},game_or_link:{type:"String",required:!0},source:{type:"Enum",enumType:1},upsell_logging_info:{type:"TypeAssert"},payload:{type:"String"}})}),null);