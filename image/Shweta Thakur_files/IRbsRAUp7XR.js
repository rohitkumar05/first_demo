if (self.CavalryLogger) { CavalryLogger.start_js(["HosSM"]); }

__d("TextWithEntitiesRelay_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"Fragment",name:"TextWithEntitiesRelay_textWithEntities",type:"TextWithEntities",metadata:null,argumentDefinitions:[{kind:"LocalArgument",name:"is_work_user",type:"Boolean!",defaultValue:!1}],selections:[{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null},{kind:"Condition",passingValue:!0,condition:"is_work_user",selections:[{kind:"InlineFragment",type:"Group",selections:[{kind:"ScalarField",alias:null,name:"allows_external_members",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_multi_company_group",args:null,storageKey:null},a]},{kind:"InlineFragment",type:"User",selections:[{kind:"ScalarField",alias:null,name:"is_viewer_coworker",args:null,storageKey:null},a]}]}]}]}]}}();e.exports=a}),null);
__d("TextWithEntitiesRelay.react",["React","RelayModern","TextWithEntities.react","TextWithEntitiesRelay_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";a=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;c=function(a){var c=a.textWithEntities;return!c?null:b("React").createElement(b("TextWithEntities.react"),babelHelpers["extends"]({text:c.text,ranges:c.ranges},a))};e.exports=a(c,{textWithEntities:function(){return b("TextWithEntitiesRelay_textWithEntities.graphql")}})}),null);
__d("BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",name:"BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments$normalization",metadata:{derivedFrom:"BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments"},selections:[{kind:"ScalarField",alias:null,name:"buyer_comments",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:"__module_operation",name:"js",args:[{kind:"Literal",name:"module",value:"BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments$normalization.graphql"}],storageKey:"__module_operation"}]};e.exports=a}),null);
__d("BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments",type:"MarketplaceCannedComments",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"buyer_comments",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]};e.exports=a}),null);
__d("MarketplaceFeedStoryInterceptor",["csx","Arbiter","Bootloader","CSS","DOM","Event","FBLogger","Parent","qex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){__p&&__p();var d=b("DOM").scry(a,"._l52")[0],e=b("DOM").scry(a,"._2lc5")[0];if(d==null||e==null)return!1;d=d.dataset;var f=d.imp,g=d.spi,h=d.fsii;f||h&&b("qex")._("844335")?b("Bootloader").loadModules(["MarketplacePermalinkRender","MarketplaceSnowliftRoute"],function(d,f){b("Arbiter").inform("GroupCommerceProductDetail.OPEN",{for_sale_item_id:h,feedStoryRoot:a});var g=0;c.parentElement!=null&&c.parentElement.childNodes!=null&&(g=Array.prototype.indexOf.call(c.parentElement.childNodes,c));d.renderPermalinkModal(h,e,new f(),g)},"MarketplaceFeedStoryInterceptor"):b("Bootloader").loadModules(["GroupCommerceProductDetail.react"],function(d){b("Arbiter").inform("GroupCommerceProductDetail.OPEN",{for_sale_item_id:h,feedStoryRoot:a}),d.showDialog(g,{},c,a.id)},"MarketplaceFeedStoryInterceptor");return!0}var i=new Map();b("Arbiter").subscribe("pre_page_transition",function(){i.forEach(function(a,b,c){a!=null&&typeof a.remove==="function"&&(b==null?void 0:b.isConnected)!==!0&&(a.remove(),c["delete"](b))})});e.exports={register:function(a){__p&&__p();var c=b("Parent").bySelector(a,"._5pat");if(c==null||i.has(c))return!1;var d=b("Event").listen(c,"click",function(a){__p&&__p();var d=null;if(a.button>=2)return;else a.target instanceof HTMLElement?d=a.target:a.srcElement instanceof HTMLElement&&(d=a.srcElement);if(d==null)return;d=b("Parent").byTag(d,"A");if(d instanceof HTMLAnchorElement&&(b("CSS").matchesSelector(d,"._xcx")||b("CSS").matchesSelector(d,"._4-eo"))){d=h(c,d);d?(a.preventDefault(),a.stopPropagation()):b("FBLogger")("marketplace").warn("handleSalePost not handled!")}});i.set(a,d)}}}),null);
__d("BsgCannedCommentsUFI2ComposerPlugin.react",["cx","ContentState","EditorState","React","RelayModern","ShimButton.react","qex","BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useEffect,i=b("React").useState;c=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;function j(a,c){a.inputProps.onComposerStateChange(function(a){var d=a.inputState;switch(d.__type){case"editor-state-based":d=babelHelpers["extends"]({},d,{editorState:b("EditorState").createWithContent(b("ContentState").createFromText(c))});return babelHelpers["extends"]({},a,{inputState:d});case"plain-text":return babelHelpers["extends"]({},a,{inputState:{__type:"plain-text",selectionOffsets:null,text:c}})}})}function a(a){__p&&__p();var c=i(!1),d=c[0],e=c[1];c=i(!1);var f=c[0],g=c[1];c=i(!1);var k=c[0],l=c[1];h(function(){a.focused&&!k&&l(!0)},[a.focused,k]);h(function(){d&&a.inputProps.composerState.inputState.__type==="editor-state-based"&&(a.inputProps.onCommit(),e(!1),g(!0))},[a.inputProps.composerState.inputState,d,a.inputProps]);function m(b){j(a,b),e(!0)}function n(c){var d;d=((d=a.marketplaceCannedComments)==null?void 0:d.buyer_comments)||[];return b("React").createElement("div",{className:"_7s21"+(k?" _7v8m":"")},d.map(function(a){return b("React").createElement(b("ShimButton.react"),{key:a,onClick:function(){return m(a.toString())}},b("React").createElement("div",{className:"_7s22"+(c==="after"?" _7s23":"")+(c==="before"?" _7s24":"")},a))}))}return b("React").createElement(b("React").Fragment,null,f?null:n(b("qex")._("872574")==="before"?"before":"after"))}e.exports=c(a,{marketplaceCannedComments:function(){return b("BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments.graphql")}})}),null);