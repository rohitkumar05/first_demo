if (self.CavalryLogger) { CavalryLogger.start_js(["2c6wA"]); }

__d("FeedImageLoadPerfLogger",["DOMQuery","Event","FeedQuickLogModule","QuickPerformanceLogger","Run","crc32"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FeedQuickLogModule").IMAGE_LOAD_WWW;function h(a){if(!a||!a.target||!a.target.src)return;a=a.target;var c=a.src;a.complete&&b("QuickPerformanceLogger").markerEnd(g,"SUCCESS",b("crc32")(c));j(a)}function i(a){if(!a||!a.target||!a.target.src)return;a=a.target;var c=a.src;if(!c)return;b("QuickPerformanceLogger").markerEnd(g,"FAIL",b("crc32")(c));j(a)}function j(a){if(!a)return;a.removeEventListener("load",h,!0);a.removeEventListener("error",i,!0)}function k(a){__p&&__p();if(!a||!a.src)return;b("QuickPerformanceLogger").markerStart(g,b("crc32")(a.src));if(a.complete){b("QuickPerformanceLogger").markerEnd(g,"SUCCESS",b("crc32")(a.src));return}a.addEventListener("load",h,!0);a.addEventListener("error",i,!0);b("Run").onLeave(function(){l(a)})}function l(a){if(!a||!a.src)return;if(a.complete)return;b("QuickPerformanceLogger").markerEnd(g,"CANCEL",b("crc32")(a.src));j(a)}a={startMarkers:function(a){if(!a)return;a=b("DOMQuery").scry(a,"img");a.forEach(function(a){k(a)})},cancelMarkers:function(a){if(!a)return;a=b("DOMQuery").scry(a,"img");a.forEach(function(a){l(a)})}};e.exports=a}),null);
__d("collectSubtreeData",[],(function(a,b,c,d,e,f){__p&&__p();function g(a,b,c,d,e){__p&&__p();if(a.offsetWidth===0&&a.offsetHeight===0)return e;var f={};if(a.getAttribute)for(j=0;j<b.length;j++){k=b[j];var h=a.getAttribute(c[k]);if(h){f[k]={};h=JSON.parse(h);for(var i in d)h[i]!==void 0&&(f[k][i]=!0,e[k]===void 0&&(e[k]={}),e[k][i]===void 0&&(e[k][i]=[]),d[i].length>0&&e[k][i].push(d[i]),e[k][i].push("("+h[i]))}}for(var j=0;j<a.childNodes.length;j++){h=a.childNodes[j];g(h,b,c,d,e)}for(var k in f)for(var l in f[k]){h=e[k][l][e[k][l].length-1];h.length>0&&h.charAt(0)=="("?e[k][l][e[k][l].length-1]=h.substr(1):e[k][l].push(")")}return e}function a(a,b){__p&&__p();var c={};for(var d=0;d<b.length;++d)c[b[d]]="data-"+b[d];d={tn:"","tn-debug":","};var e={};g(a,b,c,d,e);for(var f in e)for(var h in e[f])e[f][h]=e[f][h].join("");return e}e.exports=a}),null);
__d("recordTNTreeData",["collectSubtreeData"],(function(a,b,c,d,e,f){function a(a,c){var d={},e=b("collectSubtreeData")(a,["ft"]);for(var f in e.ft)d[f+"_tree"]=e.ft[f],f==="tn-debug"&&a.setAttribute("tn-debug_subtree",e.ft[f]);d.evt_value=a.offsetHeight;c&&(d.offset=Math.max(0,a.offsetTop-c.offsetTop));return d}e.exports=a}),null);
__d("StreamViewportTracking",["DataAttributeUtils","DOM","DOMDimensions","FeedImageLoadPerfLogger","ViewportTracking","ge","gkx","recordTNTreeData","viewportTrackingBuilder"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=51;function h(a,c,d,e){__p&&__p();e===void 0&&(e=g);return{_stream:null,getDataFromConfig:function(a,b){b.isTimetrackingEnabled=!0},getAllStories:function(){var a=b("DOM").scry(this.getStream(),d);return a.filter(function(a){return b("DataAttributeUtils").getDataFt(a)})},getStream:function(){if(c)return c;this._stream||(this._stream=b("ge")("home_stream"));return this._stream},getStoryID:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a&&a.mf_story_key},getDataToLog:function(a){__p&&__p();var c=this.getStream();c=b("recordTNTreeData")(a,c);var d=a.getAttribute("data-insertion-position");d!==null&&(c.inspos=d);c.evt=e;c.vpv_time=Math.round(Date.now()/1e3);d=b("DOM").scry(a,".fbStoryAttachmentImage")[0];if(d){a=b("DOMDimensions").getElementDimensions(d);c.story_image_height=a.height;c.story_image_width=a.width}return{ft:c}},afterStoryEntersViewport:b("gkx")("678827")?function(a){b("FeedImageLoadPerfLogger").startMarkers(a)}:function(a){},afterStoryExitsViewport:b("gkx")("678827")?function(a){b("FeedImageLoadPerfLogger").cancelMarkers(a)}:function(a){}}}var i=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getQueryID=function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a.qid};d.getFBFeedLocations=function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a.fbfeed_location};d.getFBFeedInsertionPosition=function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a.insertion_position};d.getTimetrackingDataToLog=function(a){__p&&__p();var d=c.prototype.getTimetrackingDataToLog.call(this,a);if(this.ctaLoggingEnabled){a=b("DOM").scry(a.story,"[data-is-cta]").map(function(a){a=b("DataAttributeUtils").getDataFt(a);a=a&&JSON.parse(a);return a&&a.cta_types}).filter(function(a){return!!a});a.length>0&&(d.ft.cta_types=a)}return d};d.cleanup=function(){j.clearSingleton(),c.prototype.cleanup.call(this)};return a}(b("ViewportTracking")),j=b("viewportTrackingBuilder")(function(a,b){b=new i(h(a,b,".uiStreamStory"));b.init(a);return b});i.factory=j.factory.bind(j);i.singleton=j.singleton.bind(j);i.clearSingleton=j.clearSingleton.bind(j);i.getBehavior=h;e.exports=i}),null);
__d("getEditorStateFromUFI2ComposerState",["CompositeDraftDecorator","ContentState","EditorState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.inputState;switch(c.__type){case"plain-text":var d=c.selectionOffsets,e=c.text;e=b("ContentState").createFromText(e.replace(/\n\n$/,"\n"));var f=b("EditorState").createWithContent(e);if(d){var g,h,i,j=e.getFirstBlock(),k=0;while(j){var l=j.getKey(),m=j.getLength(),n=k;k+=m;k>=d.start&&d.start-n>=0&&(g={key:l,offset:d.start-n});k>=d.end&&d.end-n>=0&&(h={key:l,offset:d.end-n});i==null&&(h&&!g?i=!0:g&&!h?i=!1:h&&g&&(i=g.offset>h.offset));j=e.getBlockAfter(l)}if(g&&h){m=f.getSelection().merge({anchorKey:g.key,anchorOffset:g.offset,focusKey:h.key,focusOffset:h.offset,isBackward:!!i});f=b("EditorState").forceSelection(f,m)}}return f;case"editor-state-based":default:return a.inputDecorators.length>0?b("EditorState").set(c.editorState,{decorator:new(b("CompositeDraftDecorator"))(a.inputDecorators)}):c.editorState}}e.exports=a}),null);
__d("UFI2RichComposerInput.react",["cx","DraftEditor.react","Keys","React","getDefaultKeyBinding","getEditorStateFromUFI2ComposerState","isSoftNewlineEvent","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("Keys").RETURN;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){d.props.onComposerStateChange(function(b){return babelHelpers["extends"]({},b,{inputState:b.inputState.__type==="editor-state-based"?babelHelpers["extends"]({},b.inputState,{editorState:a}):{__type:"editor-state-based",editorState:a}})})},d.$2=function(a,b){return d.props.handleBeforeInput?d.props.handleBeforeInput(a,b):"not-handled"},d.$3=function(a,b){if(d.props.handleKeyCommand&&d.props.handleKeyCommand(a,b)==="handled")return"handled";if(a==="ufi-commit"){d.props.onCommit();return"handled"}return"not-handled"},d.$4=function(a){if(d.props.keyBindingFn){var c=d.props.keyBindingFn(a);if(c!=null)return c}return a.keyCode===h&&!b("isSoftNewlineEvent")(a)?"ufi-commit":b("getDefaultKeyBinding")(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.execCommand=function(a){this.props.handleCommand&&this.props.handleCommand(a)};d.render=function(){return b("React").createElement("div",{className:b("joinClasses")((this.props.composerState.isLocked?"_3d2p":"")+" _3d2q",this.props.className),onClick:this.props.onClick},b("React").createElement(b("DraftEditor.react"),{editorState:b("getEditorStateFromUFI2ComposerState")(this.props.composerState),handleBeforeInput:this.$2,handleKeyCommand:this.$3,handlePastedFiles:this.props.handlePastedFiles,keyBindingFn:this.$4,onBlur:this.props.onBlur,onChange:this.$1,onFocus:this.props.onFocus,placeholder:String(this.props.placeholder),readOnly:this.props.composerState.isLocked,ref:this.props.onInputRefUpdated,spellCheck:!0,stripPastedStyles:!0,webDriverTestID:this.props.webDriverTestID}))};return c}(b("React").Component);e.exports=a}),null);
__d("installUFI2ComposerInputDecorators",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return babelHelpers["extends"]({},a,{inputDecorators:[].concat(a.inputDecorators,c)})}e.exports=a}),null);
__d("removeEmojiFromEditorState",["keyCommandBackspaceEmoji","keyCommandDeleteEmoji"],(function(a,b,c,d,e,f){"use strict";function a(a,c){switch(a){case"backspace":return b("keyCommandBackspaceEmoji")(c)||c;case"delete":return b("keyCommandDeleteEmoji")(c)||c;default:return c}}e.exports=a}),null);
__d("getUpgradedUFI2EmojiComposerPlugin",["EmojiRenderer","EmojiSpan.react","installUFI2ComposerInputDecorators","removeEmojiFromEditorState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c={component:b("EmojiSpan.react"),props:a,strategy:function(a,c){b("EmojiRenderer").parse(a.getText()).forEach(function(a){var b=a.length;a=a.offset;c(a,a+b)})}};return{handleKeyCommand:function(a,c,d){__p&&__p();var e=a.composerState.inputState;if(e.__type==="editor-state-based"){var f;switch(c){case"backspace":f="backspace";break;case"delete":f="delete";break}if(f){var g=b("removeEmojiFromEditorState")(f,d);if(e.editorState!==g){a.onComposerStateChange(function(a){return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},e,{editorState:g})})});return"handled"}}}return a.handleKeyCommand?a.handleKeyCommand(c,d):"not-handled"},installEmojiInputDecorator:function(a){return b("installUFI2ComposerInputDecorators")(a,c)}}}e.exports=a}),null);
__d("replaceEmoticonsWithEntitiesInEditorState",["invariant","CharacterMetadata","DraftEntity","EditorState","EmoticonsList","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("immutable").List;function a(a){__p&&__p();var c=a.getSelection();if(!c.isCollapsed())return a;var d=c.getAnchorKey(),e=a.getCurrentContent(),f=e.getBlockMap().reduce(function(a,e){__p&&__p();var f=e.getText(),i=f.split(b("EmoticonsList").regexp);if(i.length===1)return a;var j=i.splice(0,1).join(""),k=[];while(i.length){var l=i.splice(0,2);if(i.length<2&&l[0].length+(l[1]?l[1].length:0)===0)continue;l.length===2||g(0,5882,l.join(", "));k.push(l)}var m=e.getKey()===d,n=j.length,o=e.getCharacterList(),p=f;k.forEach(function(d,f){__p&&__p();var g=d[0],i=d[1];if(!b("EmoticonsList").emotes[i]||e===a.getLastBlock()&&f===k.length-1||m&&c.anchorOffset>=n+g.length&&c.anchorOffset<=n+g.length+i.length||function(){for(var a=0;a<i.length;a++)if(e.getEntityAt(n+g.length+a)!=null)return!0;return!1}())n+=d[0].length+d[1].length;else{f=b("DraftEntity").create("EMOTICON","IMMUTABLE",{originalEmoticon:i,type:b("EmoticonsList").emotes[i]});d=n+g.length;p=p.slice(0,d)+"\u3000"+p.slice(d+i.length);o=o.slice(0,d).concat(h.of(b("CharacterMetadata").applyEntity(o.get(d),f)),o.slice(d+i.length));n=d+1}});if(f!==p){l=e.merge({characterList:o,text:p});var q;if(m){i=c.getAnchorOffset()-(e.getLength()-l.getLength());q={selectionAfter:c.merge({anchorOffset:i,focusOffset:i}),selectionBefore:c}}return a.merge(babelHelpers["extends"]({blockMap:a.getBlockMap().set(e.getKey(),l)},q))}return a},e);if(f===e)return a;else return b("EditorState").push(a,f,"insert-characters")}e.exports=a}),null);
__d("getUpgradedUFI2EmoticonsComposerPlugin",["DraftEntity","EmoticonSpan.react","React","getEntityMatcher","installUFI2ComposerInputDecorators","replaceEmoticonsWithEntitiesInEditorState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){a.inputProps.onComposerStateChange(function(a){a=babelHelpers["extends"]({},a,c(a));var d=a.inputState;switch(d.__type){case"editor-state-based":var e=b("replaceEmoticonsWithEntitiesInEditorState")(d.editorState);if(e!==d.editorState)return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},d,{editorState:e})});else return a;default:return a}})}function a(a){__p&&__p();var c={component:b("EmoticonSpan.react"),props:a,strategy:b("getEntityMatcher")(function(a){return a.getType()==="EMOTICON"})};return{installPlugin:function(a){__p&&__p();a.onInstallContentBlockToTextWithEntitiesInputMessageMappers(function(a,c,d){__p&&__p();d=a.getEntityAt(c);if(d==null)return null;a=b("DraftEntity").get(d);if(a.getType()==="EMOTICON"){c=a.getData();d=c.originalEmoticon;return{message:{text:d}}}return null})},render:function(a,d){a.subscriptionsHandler;var e=babelHelpers.objectWithoutPropertiesLoose(a,["subscriptionsHandler"]);return b("React").createElement(d,babelHelpers["extends"]({},e,{inputProps:babelHelpers["extends"]({},e.inputProps,{composerState:b("installUFI2ComposerInputDecorators")(e.inputProps.composerState,c),onComposerStateChange:function(b){return g(a,b)}})}))}}}e.exports=a}),null);
__d("getUpgradedUFI2HashtagComposerPlugin",["HashtagSpan.react","getHashtagMatches","installUFI2ComposerInputDecorators"],(function(a,b,c,d,e,f){"use strict";function a(){var a={component:b("HashtagSpan.react"),props:{},strategy:b("getHashtagMatches")};return{installHashtagInputDecorator:function(c){return b("installUFI2ComposerInputDecorators")(c,a)}}}e.exports=a}),null);
__d("getUpgradedUFI2PrefillMentionComposerPlugin",["ContentState","EditorState","FBLogger","SelectionState","createMentionEntityForContentState","getPlainTextFromUFI2InputState","replaceSelectionWithMention"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){__p&&__p();var d=a.inputState;switch(d.__type){case"editor-state-based":var e=b("getPlainTextFromUFI2InputState")(d),f=d.editorState;if(e.trim()===""){e===""&&(f=b("EditorState").moveSelectionToEnd(b("EditorState").createWithContent(b("ContentState").createFromText(" "))));e=f.getSelection();f=b("replaceSelectionWithMention")(c,f,b("SelectionState").createEmpty(f.getCurrentContent().getFirstBlock().getKey()),b("createMentionEntityForContentState"));c=e.getStartOffset()+c.getTitle().length;f=b("EditorState").forceSelection(f,e.merge({anchorOffset:c,focusOffset:c}));return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},d,{editorState:f})})}else return null;case"plain-text":d.text.trim()===""&&b("FBLogger")("ufi2").warn("Someone called for the composer to be prefilled with a mention but the composer state was of the `plain-text` type. Adding mentions to a plain-text composer is not yet implemented (T29402486).");return null;default:return d.__type}}function a(){return{handleCommand:function(a,b){a.__type==="PrefillMention"&&b.onComposerStateChange(function(b){return g(b,a.mentionableEntity)}),b.handleCommand&&b.handleCommand(a)}}}e.exports=a}),null);