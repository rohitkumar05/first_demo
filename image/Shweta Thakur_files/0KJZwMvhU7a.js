if (self.CavalryLogger) { CavalryLogger.start_js(["cEhJs"]); }

__d("legacy:EditSubscriptions",["SubscriptionLevels","EditSubscriptions"],(function(a,b,c,d,e,f){a.SubscriptionLevels=b("SubscriptionLevels"),a.EditSubscriptions=b("EditSubscriptions")}),3);
__d("DynamicFriendListEducation",["Arbiter","AsyncRequest","Dialog","Event","PageTransitionsRegistrar","createArrayFromMixed","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j,k,l;function m(){i&&i.hide(),j&&j.hide()}function n(a){b("removeFromArray")(h,a),m(),k({accept_tag_education:!0})}function o(){m(),k({nux_cancel:!0})}a={init:function(a,c){g=a,h=b("createArrayFromMixed")(c).map(String),b("PageTransitionsRegistrar").registerHandler(function(){m(),g=!1,k=void 0,h=[]})},showDialog:function(a,c,d){g&&h.includes(a)?(m(),b("Arbiter").inform("DynamicFriendListEducation/dialogOpen",{uid:c,flid:a}),k=d,i=new(b("Dialog"))().setAsync(new(b("AsyncRequest"))("/ajax/friends/lists/smart_list_education.php").setMethod("GET").setData({flid:a,uid:c}).setReadOnly(!0)).setHandler(n.bind(this,a)).setCloseHandler(function(){b("Arbiter").inform("DynamicFriendListEducation/dialogClosed",{uid:c,flid:a})}).setCancelHandler(function(){b("Arbiter").inform("DynamicFriendListEducation/dialogCancel",{uid:c,flid:a})}).show()):d()},showContextualDialog:function(a,c,d,e){g&&h.includes(a)?(m(),l=d,k=e,new(b("AsyncRequest"))("/ajax/friends/lists/smart_list_contextual_education.php").setMethod("GET").setData({flid:a,uid:c}).setReadOnly(!0).send()):e()},setContextualDialog:function(a,c,d,e){j=a,j.setContext(l),j.show(),b("Event").listen(c,"click",n.bind(this,e)),b("Event").listen(d,"click",o)}};e.exports=a}),null);
__d("FriendStatus",["Arbiter","AsyncRequest","SubscribeButton","createArrayFromMixed","forEachObject"],(function(a,b,c,d,e,f){__p&&__p();var g=function(){"use strict";__p&&__p();function a(a,b){this.lists=null,this.id=a,this.update(b)}var c=a.prototype;c.update=function(a,c){a&&(this.status=a),c&&(this.lists=b("createArrayFromMixed")(c).map(String),this.$1())};c.isComplete=function(){return!!this.lists};c.addToList=function(a){this.lists&&!this.lists.includes(a)&&this.lists.push(a),this.$1()};c.removeFromList=function(a){if(this.lists){a=this.lists.indexOf(a);a!==-1&&this.lists&&this.lists.splice(a,1)}this.$1()};c.updateList=function(a,b){b?this.addToList(a):this.removeFromList(a)};c.$1=function(){b("Arbiter").inform("FriendListMembershipChange",{uid:this.id,lists:this.lists})};a.getFriend=function(c,d){h[c]&&h[c].isComplete()?d(h[c]):i[c]?i[c].push(d):(i[c]=[d],new(b("AsyncRequest"))().setURI("/ajax/friends/status.php").setData({friend:c}).setHandler(function(b){b=b.getPayload();window.setTimeout(a.initFriend.bind(a,c,b.status,b.lists),0)}).send())};a.initFriend=function(b,c,d){var e=h[b]||new a(b);e.update(e.status||c,e.lists||d);h[b]=e;i[b]&&i[b].forEach(function(a){a(e)});i[b]=null};a.setSpecialLists=function(c){var d=a.CLOSE_FRIENDS===null;a.CLOSE_FRIENDS=c.close+"";a.ACQUAINTANCES=c.acq+"";d&&b("forEachObject")(h,function(a,b){a.$1()})};return a}();g.ARE_FRIENDS=1;g.INCOMING_REQUEST=2;g.OUTGOING_REQUEST=3;g.CAN_REQUEST=4;g.CLOSE_FRIENDS=null;g.ACQUAINTANCES=null;var h={},i={};function a(a,c,d){!h[d.uid]?h[d.uid]=new g(d.uid,a):h[d.uid].update(a),b("Arbiter").inform("FriendRequest/change",{uid:d.uid,status:a})}b("Arbiter").subscribe(["FriendRequest/cancel","FriendRequest/unfriend"],function(a,c){c.profile_id=c.uid,c.connected=!1,b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED,c)});b("Arbiter").subscribe(["FriendRequest/cancel","FriendRequest/unfriend","FriendRequest/sendFail"],a.bind(null,g.CAN_REQUEST));b("Arbiter").subscribe(["FriendRequest/confirmFail"],a.bind(null,g.INCOMING_REQUEST));b("Arbiter").subscribe(["FriendRequest/cancelFail","FriendRequest/sent","FriendRequest/sending"],a.bind(null,g.OUTGOING_REQUEST));b("Arbiter").subscribe(["FriendRequest/confirm","FriendRequest/confirming"],a.bind(null,g.ARE_FRIENDS));e.exports=g}),null);
__d("FriendEditLists",["Arbiter","AsyncRequest","CSS","DOMQuery","DynamicFriendListEducation","EditSubscriptions","FriendStatus","MenuDeprecated","Parent","ScrollableArea","URI","$","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=5,h={},i="/ajax/profile/removefriendconfirm.php",j="/ajax/friends/requests/cancel.php",k="/profile.php",l,m,n,o,p={profile_browser:43,fbx_top_bar:1,hovercard:5};function q(a,c,d){__p&&__p();var e=h[a.id],f=function(f){var g={action:d?"add_list":"del_list",to_friend:e.id,friendlists:[c],source:l};f&&Object.assign(g,f);e.updateList(c,d);d&&c==b("FriendStatus").CLOSE_FRIENDS?(f=t(a,b("FriendStatus").ACQUAINTANCES),b("MenuDeprecated").isItemChecked(f)&&(b("MenuDeprecated").toggleItem(f),q(a,b("FriendStatus").ACQUAINTANCES,!1))):d&&c==b("FriendStatus").ACQUAINTANCES&&(f=t(a,b("FriendStatus").CLOSE_FRIENDS),b("MenuDeprecated").isItemChecked(f)&&(b("MenuDeprecated").toggleItem(f),q(a,b("FriendStatus").CLOSE_FRIENDS,!1)));f={flid:c,uid:e.id};var h=d?"FriendListHovercard/add":"FriendListHovercard/remove";b("Arbiter").inform(h,f);new(b("AsyncRequest"))().setURI("/ajax/add_friend/action.php").setData(g).send()};d?b("DynamicFriendListEducation").showDialog(c,e.id,f):f()}function r(a){a=b("DOMQuery").scry(a,"input")[0];return a&&a.value}function s(a,c,d){if(b("CSS").hasClass(d,"async_saving"))return;var e={uid:c.id};new(b("AsyncRequest"))().setURI(j).setMethod("POST").setData({friend:c.id,cancel_ref:n,floc:o}).setHandler(function(){return b("Arbiter").inform("FriendRequest/cancel",e)}).setErrorHandler(function(){return b("Arbiter").inform("FriendRequest/cancelFail",e)}).setStatusElement(d).send()}function t(a,c){a=b("MenuDeprecated").getItems(a);for(var d=0;d<a.length;d++)if(r(a[d])==c)return a[d];return null}function u(a,c){a=b("MenuDeprecated").getItems(a);a.forEach(function(a){var d=r(a);d=c.lists.includes(d);b("MenuDeprecated").isItemChecked(a)!==d&&b("MenuDeprecated").toggleItem(a)})}function v(a){__p&&__p();var c=b("MenuDeprecated").getItems(a),d=!b("CSS").hasClass(a,"followButtonFlyout")&&!b("CSS").hasClass(a,"likeButtonFlyout"),e=[],f=[],h=0,i=0;c.forEach(function(a){b("CSS").hasClass(a,"neverHide")?(b("CSS").removeClass(a,"underShowMore"),h++):b("MenuDeprecated").isItemChecked(a)?e.push(a):b("CSS").hasClass(a,"neverShow")||b("CSS").hasClass(a,"FriendListCreateTrigger")||!d&&b("CSS").hasClass(a,"friendOptionsOnly")?(b("CSS").addClass(a,"underShowMore"),i++):f.push(a)});var j=g-h;c=e.concat(f);var k=i;c.forEach(function(a){if(b("CSS").hasClass(a,"ShowMoreItem")){j--;return}j?(b("CSS").removeClass(a,"underShowMore"),j--):(b("CSS").addClass(a,"underShowMore"),k=!0)});b("CSS").conditionClass(a,"hasMoreFriendListItems",k);c=b("DOMQuery").scry(a,".FriendListMenuShowMore");c.forEach(function(a){b("CSS").removeClass(a,"FriendListMenuShowMore")})}function w(a,c){b("CSS").conditionClass(a,"FriendListMemorializedUser",c)}function x(a,c){var d=b("DOMQuery").scry(a,".FriendListUnfriend")[0],e=b("DOMQuery").scry(a,".FriendListCancel")[0],f=b("DOMQuery").scry(a,".FriendListFriendship")[0];e&&b("CSS").conditionShow(e,c.status==b("FriendStatus").OUTGOING_REQUEST);if(d){b("CSS").conditionShow(d,c.id!==void 0&&c.status===b("FriendStatus").ARE_FRIENDS);d=b("DOMQuery").find(d,"a");d.setAttribute("ajaxify",new(b("URI"))(i).addQueryData({uid:c.id,unref:m,floc:o}).toString())}else b("CSS").conditionClass(a,"NoFriendListActionSeparator",!e||c.status!=b("FriendStatus").OUTGOING_REQUEST);f&&(b("CSS").conditionShow(f,c.status==b("FriendStatus").ARE_FRIENDS),b("DOMQuery").find(f,"a").setAttribute("href",new(b("URI"))(k).addQueryData({and:c.id}).toString()))}function y(a,c,d){var e=b("DOMQuery").scry(a,"div.FriendListSubscriptionsMenu");e.length!==0&&b("EditSubscriptions").init(a,c,d)}b("Arbiter").subscribe("FriendRequest/change",function(a,c){for(var d in h){a=b("ge")(d);var e=h[d];a&&e&&e.id==c.uid&&(u(a,e),x(a,e),v(a))}});b("MenuDeprecated").subscribe("select",function(a,c){b("CSS").hasClass(c.item,"ShowMoreItem")&&b("CSS").hasClass(c.menu,"FriendListMenu")&&(b("CSS").addClass(c.menu,"FriendListMenuShowMore"),b("ScrollableArea").poke(c.item))});c={init:function(a,c,d,e,f,g,i){__p&&__p();a=b("$")(a);l=d;m=f;n=g;o=i;var j=p[d]||45;h[a.id]||b("MenuDeprecated").subscribe("select",function(c,d){if(b("DOMQuery").contains(a,d.item))if(b("Parent").byClass(d.item,"FriendListItem")){b("MenuDeprecated").toggleItem(d.item);c=r(d.item);q(a,c,b("MenuDeprecated").isItemChecked(d.item))}else b("Parent").byClass(d.item,"FriendListCancel")?s(a,h[a.id],d.item):b("Parent").byClass(d.item,"FriendListUnfriend")&&b("Arbiter").inform("FriendEditLists/unfriend")});b("CSS").addClass(a,"async_saving");b("FriendStatus").getFriend(c,function(d){w(a,e),u(a,d),x(a,d),h[a.id]=d,v(a),y(a,c,j),b("CSS").removeClass(a,"async_saving")}.bind(this))}};e.exports=a.FriendEditLists||c}),null);
__d("XFriendListFlyoutContentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/friends/lists/flyout_content/",{})}),null);
__d("FriendListFlyoutController",["csx","cx","Arbiter","AsyncRequest","Button","ContextualLayer","CSS","DataStore","DOM","DOMQuery","Event","FriendEditLists","FriendStatus","Keys","Layer","LayerHideOnEscape","LayerTabIsolation","MenuDeprecated","Parent","ScrollableArea","Style","TabbableElements","UserAgent_DEPRECATED","XFriendListFlyoutContentController","emptyFunction","getActiveElement","ifRequired"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j,k,l=null,m=null,n,o,p,q,r,s,t=1500,u,v=!1,w=["uiButtonConfirm","uiButtonSpecial","_42gz","_42g-","_4jy2","_51tl","_4jy1"],x={init:function(a,c){__p&&__p();x.init=b("emptyFunction");i=a;i.subscribe("mouseenter",G);i.subscribe("mouseleave",function(){v||V()});i.subscribe("hide",I);i.enableBehavior(b("LayerTabIsolation"));i.enableBehavior(b("LayerHideOnEscape"));u=c;l&&b("DOM").setContent(i.getContent(),[l,m]);a=function(a){a=b("Parent").byClass(a.getTarget(),"enableFriendListFlyout");a?(v=!0,n!==a&&(k&&X(),U(a))):v&&X()};c=function(a){a=b("Parent").byClass(a.getTarget(),"enableFriendListFlyout");a&&(n===a?window.clearTimeout(q):(k&&X(),U(a)))};b("Event").listen(document.documentElement,{click:a,mouseover:c,keydown:function(a){__p&&__p();var c=a.getTarget();if(a.getModifiers().any)return;if(!k||b("DOMQuery").isNodeOfType(c,["input","textarea"]))return;var d=b("Event").getKeyCode(a),e;switch(d){case b("Keys").UP:case b("Keys").DOWN:var f=F();e=D(f);B(f[e+(d===b("Keys").UP?-1:1)]);return!1;case b("Keys").SPACE:f=C(c);f&&(y(f),a.prevent());break;default:c=String.fromCharCode(d).toLowerCase();f=F();e=D(f);a=e;d=f.length;while(e>=0&&(a=++a%d)!==e){var g=b("MenuDeprecated").getItemLabel(f[a]);if(g&&g.charAt(0).toLowerCase()===c){B(f[a]);return!1}}}}});b("Arbiter").subscribe("FriendEditLists/unfriend",X);b("Arbiter").subscribe("FriendRequest/cancel",X);b("Arbiter").subscribe("DynamicFriendListEducation/dialogOpen",function(){s=!0});b("Arbiter").subscribe("DynamicFriendListEducation/dialogClosed",function(){s=!1,V()})},initContent:function(a){b("DOM").appendContent(document.body,a),J(a),window.setTimeout(function(){!l?(l=a,i&&b("DOM").setContent(i.getContent(),[l,m]),b("CSS").show(l),b("Event").listen(l,"click",Y),k&&R(n)):(b("DOM").remove(a),a=null)},0)},initNux:function(a){if(m)return;m=a;i&&b("DOM").setContent(i.getContent(),[l,m])},show:function(a){S(a)},hide:function(a){a===!1?X():V()},setActiveNode:function(a){k&&X(),n=a,o=b("Event").listen(a,"mouseleave",function(){n=null,o&&o.remove()})},setCloseListener:function(a,c){b("DataStore").set(a,"flfcloselistener",c),n!=a&&b("DataStore").set(a,"flfcloselistenertimeout",window.setTimeout(Z.bind(null,a),t))},setCloseListenerTimeout:function(a){t=a}};function y(a){b("UserAgent_DEPRECATED").firefox()&&A(a).blur(),b("MenuDeprecated").inform("select",{menu:z(a),item:a})}function z(a){return b("CSS").hasClass(a,"uiMenuContainer")?a:b("Parent").byClass(a,"uiMenu")}function A(a){return b("DOMQuery").find(a,"a.itemAnchor")}function B(a){a&&E(a)&&(b("MenuDeprecated").$removeSelected(i.getContent()),b("CSS").addClass(a,"selected"),A(a).focus())}function C(a){return b("Parent").byClass(a,"uiMenuItem")}function D(a){var c=b("getActiveElement")();if(c){c=C(c);return a.indexOf(c)}return-1}function E(a){return!b("CSS").hasClass(a,"disabled")&&b("Style").get(a,"display")!=="none"&&b("Style").get(b("Parent").byClass(a,"uiMenu"),"display")!=="none"}function F(){return b("MenuDeprecated").getItems(i.getContent()).filter(E)}function G(){window.clearTimeout(q)}function H(a){for(var c=0;c<w.length;c++)if(b("CSS").hasClass(a,w[c]))return!1;return!0}function I(){__p&&__p();if(n){H(n)&&(b("CSS").removeClass(n,"_52nd"),(b("CSS").hasClass(n,"uiButton")||b("CSS").matchesSelector(n,"._42fu"))&&b("CSS").removeClass(n,"selected"));if(b("DataStore").get(n,"flfcloselistener")){var a=n;b("DataStore").set(n,"flfcloselistenertimeout",window.setTimeout(Z.bind(null,a),t))}}k=!1;Q();n=null}function J(a){a=b("DOMQuery").scry(a,'[tabindex="0"]');a.forEach(function(a){a.tabIndex="-1"});a[0]&&(a[0].tabIndex="0")}function K(a){b("DOMQuery").isNodeOfType(a,"label")&&b("CSS").hasClass(a,"uiButton")&&(a=b("Button").getInputElement(a));return a}function L(a){return b("DataStore").get(K(a),"profileid")}function M(a){return b("DataStore").get(K(a),"memorialized")==="true"}function N(a){return b("DataStore").get(K(a),"unref")}function O(a){return b("DataStore").get(K(a),"cancelref")}function P(a){return b("DataStore").get(K(a),"floc")}function Q(){o&&o.remove(),o=null,r&&b("Layer").unsubscribe(r),r=null,q&&window.clearTimeout(q),q=null}function R(a){var c=L(a),d=M(a),e=b("DataStore").get(a,"flloc"),f=N(a),g=O(a),h=P(a);b("FriendEditLists").init(l,c,e,d,f,g,h);b("CSS").conditionClass(l,"followButtonFlyout",b("CSS").hasClass(a,"profileFollowButton"));b("CSS").conditionClass(l,"friendButtonFlyout",b("CSS").hasClass(a,"FriendRequestFriends")||b("CSS").hasClass(a,"FriendRequestIncoming")||b("CSS").hasClass(a,"FriendRequestOutgoing"));b("CSS").conditionClass(l,"likeButtonFlyout",b("CSS").hasClass(a,"profileLikeButton"));c=b("DOMQuery").scry(l,"div.uiScrollableArea")[0];c&&b("ScrollableArea").poke(c);e=b("TabbableElements").find(l)[0];e&&e.focus()}function S(a){__p&&__p();if(!i||k)return;i.setContext(a);i.setCausalElement(a);a.setAttribute("aria-expanded","true");H(a)&&(b("CSS").addClass(a,"_52nd"),(b("CSS").hasClass(a,"uiButton")||b("CSS").matchesSelector(a,"._42fu"))&&b("CSS").addClass(a,"selected"));i.show();n=a;k=!0;var c=null;if(l)c="show",R(a);else{c="init_show";var d=parseInt(L(a),10);if(d){d=b("XFriendListFlyoutContentController").getURIBuilder().getURI();new(b("AsyncRequest"))(d).setStatusElement(i.getContent()).send()}}Q();o=b("Event").listen(a,"mouseleave",V);r=b("Layer").subscribe("show",T);b("DataStore").get(a,"flfcloselistener")&&window.clearTimeout(b("DataStore").remove(a,"flfcloselistenertimeout"));d=L(a);b("FriendStatus").getFriend(d,function(d){d.status==b("FriendStatus").ARE_FRIENDS&&new(b("AsyncRequest"))().setURI("/ajax/friends/lists/flyout_log.php").setData({target_id:L(a),unref:N(a),action:c}).send();if(!m)return;d.status==b("FriendStatus").OUTGOING_REQUEST?(b("CSS").show(m),b("AsyncRequest").bootstrap("/ajax/friends/lists/nux_flyout.php",null,!0)):b("CSS").hide(m)});(!j||a.id!==j.id)&&(b("Arbiter").inform("listeditor/close_editor"),b("Arbiter").inform("friend-list/close_editor"));j=a}function T(a,c){(!(c instanceof b("ContextualLayer"))||!b("DOMQuery").contains(n,c.getContext()))&&V()}function U(a){n=a,p=window.setTimeout(S.bind(null,a),u),o=b("Event").listen(a,"mouseleave",function(){window.clearTimeout(p),n=null,o&&o.remove()})}function V(){q=window.setTimeout(X,150)}function W(){var a=b("ifRequired")("Dialog",function(a){return a});if(a){a=a.getCurrent();return a&&b("DOMQuery").scry(a,".friendListDialogTourCarousel")[0]}}function X(){if(s||W())return;v=!1;if(i){i.hide();var a=i.getCausalElement();a&&a.setAttribute("aria-expanded","false")}}function Y(a){a=b("Parent").byTag(a.getTarget(),"a");a&&b("CSS").hasClass(a,"FriendListActionItem")&&V()}function Z(a){a=b("DataStore").remove(a,"flfcloselistener");a&&a()}e.exports=a.FriendListFlyoutController||x}),null);
__d("ProfilePromptEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click",DISMISS:"dismiss",GENERATED:"generated",IMPRESSION:"impression",SOFT_DISMISS:"soft_dismiss"})}),null);
__d("ProfileViewAsElementID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ESCAPE_HATCH:"profileEscapeHatchID",ESCAPE_HATCH_CONTENT:"profileEscapeHatchContentID"})}),null);
__d("XProfileViewAsFriendRequestPromptController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/show_friend_request_viewas_prompt/",{})}),null);
__d("AddFriendButton",["Arbiter","AsyncRequest","AsyncResponse","Banzai","CSS","DOMQuery","Event","FriendListFlyoutController","FriendStatus","ProfilePromptEvent","ProfileViewAsElementID","Style","SubscribeButton","URI","XProfileViewAsFriendRequestPromptController","XPubcontentChainedSuggestionsController","collectDataAttributes","ge","getVendorPrefixedName","goURI"],(function(a,b,c,d,e,f){__p&&__p();var g={ERROR_ALREADY_ADDED:1431005,init:function(a,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r){__p&&__p();var s=a.id,t=null,u=b("DOMQuery").scry(a,".addButton")[0],v=b("DOMQuery").scry(a,".addFriendText")[0],w=b("DOMQuery").scry(a,".outgoingButton")[0],x=b("DOMQuery").scry(a,".incomingButton")[0],y=b("DOMQuery").scry(a,".friendButton")[0],z=b("DOMQuery").scry(a.parentNode.parentNode.parentNode,".friend_status_confirmed")[0],A=b("DOMQuery").scry(a.parentNode,".suggestFriendsButton")[0];function B(d,g,l){var q=new(b("URI"))(u.getAttribute("ajaxify")),s=b("collectDataAttributes")(a,["ft","gt"]);new(b("AsyncRequest"))().setURI(h).setData({to_friend:c,action:d,how_found:e,ref_param:f,link_data:s,outgoing_id:w.id,xids:q.getQueryData().xids,logging_location:i,no_flyout_on_click:j,ego_log_data:k,http_referer:m,floc:o,frefs:p}).setErrorHandler(g).setServerDialogCancelHandler(l).setRelativeTo(w).send();if(n&&d==="add_friend"){s=b("XPubcontentChainedSuggestionsController").getURIBuilder().setInt("friendid",c).getURI();new(b("AsyncRequest"))().setURI(s).send()}r&&H();b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:c.toString(),connected:!0,chaining:!1})}function C(c,d){__p&&__p();v?b("CSS").hide(v):u&&(q&&b("CSS").hide(q),b("CSS").hide(u));w&&b("CSS").hide(w);x&&b("CSS").hide(x);y&&b("CSS").hide(y);c&&(b("CSS").show(c),q&&"Requestable"===d&&b("CSS").show(q));if("Outgoing"==d&&t!=d&&l){var e=b("getVendorPrefixedName")("transition"),f=b("Style").get(c,e),g={backgroundColor:"transparent",borderColor:b("Style").get(c,"borderLeftColor")};g[e]="2s";var h=b("Event").listen(c,b("getVendorPrefixedName")("transitionend"),function(){b("Style").apply(c,{transition_prop:f}),h.remove()});b("Style").apply(c,g)}"Requestable"==d&&t!=d&&(A&&b("CSS").hide(A));t&&b("CSS").removeClass(a,"fStatus"+t);t=d;b("CSS").addClass(a,"fStatus"+d)}function D(a){b("CSS").hasClass(a,"enableFriendListFlyout")?b("FriendListFlyoutController").show(a):b("FriendListFlyoutController").hide()}var E=b("Arbiter").subscribe("FriendRequest/change",function(a,d){I();if(d.uid!=c)return;switch(d.status){case b("FriendStatus").ARE_FRIENDS:return C(y,"Friends");case b("FriendStatus").INCOMING_REQUEST:return C(x,"Incoming");case b("FriendStatus").OUTGOING_REQUEST:return C(w,"Outgoing");case b("FriendStatus").CAN_REQUEST:z&&b("CSS").hide(z);return C(v?v:u,"Requestable")}}),F=b("Arbiter").subscribe("FriendRequest/unfriend",function(a,d){I(),d.uid===c&&d.shouldHideButton===!0&&b("CSS").hide(u)}),G;d&&(G=b("Arbiter").subscribe("FriendRequest/confirm",function(a,e){I(),e.uid==c&&b("goURI")(d)}));u&&b("Event").listen(u,"click",function(){b("Arbiter").inform("FriendRequest/sending",{uid:c}),j?b("FriendListFlyoutController").setActiveNode(w):D(w),B("add_friend",function(a){var d=a.error==g.ERROR_ALREADY_ADDED?"FriendRequest/sent":"FriendRequest/sendFail";b("Arbiter").inform(d,{uid:c});b("FriendListFlyoutController").hide();b("AsyncResponse").defaultErrorHandler(a)},function(a){b("Arbiter").inform("FriendRequest/sendFail",{uid:c}),b("FriendListFlyoutController").hide()})});function H(){if(b("ge")(b("ProfileViewAsElementID").ESCAPE_HATCH_CONTENT)){var a=b("XProfileViewAsFriendRequestPromptController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).send();b("Banzai").post("view_as_friend_request_prompt",{event:b("ProfilePromptEvent").IMPRESSION})}}function I(){if(b("ge")(s))return;E&&E.unsubscribe();G&&G.unsubscribe();F&&F.unsubscribe();E=null;G=null;F=null}}};e.exports=g}),null);
__d("FriendButtonIcon",["Arbiter","Button","FriendStatus"],(function(a,b,c,d,e,f){e.exports={register:function(a,c,d){b("Arbiter").subscribe("FriendListMembershipChange",function(e,f){if(f.uid==d){e=f.lists.includes(b("FriendStatus").CLOSE_FRIENDS);f=f.lists.includes(b("FriendStatus").ACQUAINTANCES);e&&!f?b("Button").setIcon(a,c.close):f&&!e?b("Button").setIcon(a,c.acquaintance):b("Button").setIcon(a,c.friend)}})}}}),null);
__d("FriendListMenu",["Arbiter","AsyncRequest","CSS","DOM","Event","Focus","HTML","Input","Keys","MenuDeprecated","Parent"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a){__p&&__p();b("MenuDeprecated").register(a,!1);var c=b("DOM").find(a,".FriendListCreateTrigger"),d=b("DOM").find(a,".CreateListInputItem"),e=b("DOM").find(d,".createListInput");b("MenuDeprecated").subscribe("select",function(d,f){f.item==c&&(b("CSS").addClass(a,"FriendListMenuCreate"),b("Focus").set(e))});b("Event").listen(e,"blur",function(c){b("Input").isEmpty(e)&&b("CSS").removeClass(a,"FriendListMenuCreate")});b("Event").listen(e,"keydown",function(c){b("Event").getKeyCode(c)==b("Keys").RETURN&&/[^\s]/.test(e.value)&&new(b("AsyncRequest"))().setURI("/ajax/friends/lists/create.php").setData({name:e.value,id:a.id}).setHandler(function(){b("Input").reset(e),b("CSS").removeClass(a,"FriendListMenuCreate")}).send()});b("Arbiter").subscribe("friend-list/new",function(d,e){d=b("HTML")(e.new_li).getRootNode();b("DOM").insertBefore(c,d);e.id===a.id?(b("MenuDeprecated").focusItem(d),b("MenuDeprecated").inform("select",{menu:b("Parent").byClass(d,"uiMenu"),item:d})):b("MenuDeprecated").toggleItem(d)});b("Arbiter").subscribe("friend-list/close_editor",function(){var c=b("Parent").byClass(a,"FlyoutFriendMenu");b("CSS").removeClass(c,"addToListsOpen");b("CSS").addClass(c,"addToListsClosed")})},addToAnotherList:function(a,c){b("Event").listen(a,"click",function(c){c=b("Parent").byClass(a,"FlyoutFriendMenu");b("CSS").removeClass(c,"addToListsClosed");b("CSS").addClass(c,"addToListsOpen")})},goBack:function(a,c){b("Event").listen(a,"click",function(c){c=b("Parent").byClass(a,"FlyoutFriendMenu");b("CSS").removeClass(c,"addToListsOpen");b("CSS").addClass(c,"addToListsClosed")})}};e.exports=a}),null);
__d("RestrictedFriendListEducation",["Arbiter","AsyncRequest"],(function(a,b,c,d,e,f){__p&&__p();var g,h;function i(a,c){if(c.flid==g)if(a=="FriendListHovercard/add"){if(h)return;h=!0;new(b("AsyncRequest"))().setURI("/ajax/friends/lists/restricted_edu.php").setData({target:c.uid,flid:c.flid}).send()}else a=="RestrictedListNUX/okay"&&new(b("AsyncRequest"))().setURI("/ajax/friends/lists/nux_log.php").setData(c).send();return!0}a={init:function(a){g=a,b("Arbiter").subscribe(["FriendListHovercard/add","RestrictedListNUX/okay"],i)}};e.exports=a}),null);
__d("XEgoHideLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ego/feed/logging/xout/",{ego_id:{type:"Int",required:!0},qid:{type:"Int",required:!0},mf_story_key:{type:"Int",required:!0},service_id:{type:"String",required:!0}})}),null);
__d("PymkXout",["Arbiter","AsyncSignal","CSS","DOM","DOMQuery","Event","PymkFunnelLogger","XEgoHideLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a,c,d){b("Event").listen(c,"click",function(c){this._logForEgo(a);(d==="pymk_jewel"||d==="pymk_jewel_first_page"||d==="friends_center")&&this._logForPymkFunnel(a,d);d==="pymk_jewel"||d==="pymk_jewel_first_page"?b("CSS").hide(a):b("DOM").remove(a);b("Arbiter").inform("pymk-x-out",{location:d});c=c.getTarget().getAttribute("data-pymk-id");c&&b("Arbiter").inform("x-out-ego-suggestions",{id:c})}.bind(this))},_logForEgo:function(a){a=a.getAttribute("data-ft");a=a==null?null:JSON.parse(a);if(a&&a.ego_id){a=b("XEgoHideLoggingController").getURIBuilder().setInt("ego_id",a.ego_id).setInt("qid",a.qid).setInt("mf_story_key",a.mf_story_key).setString("service_id","PYMK").getURI();new(b("AsyncSignal"))(a,{}).send()}},_logForPymkFunnel:function(a,c){var d=b("DOMQuery").find(a,"input.friendBrowserID");d=parseInt(d.value,10);a=parseInt(a.getAttribute("data-signature"),10);b("PymkFunnelLogger").logXOut(d,a,c)}};e.exports=a}),null);