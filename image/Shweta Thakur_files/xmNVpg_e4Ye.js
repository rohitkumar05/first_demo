if (self.CavalryLogger) { CavalryLogger.start_js(["tcYUa"]); }

__d("MessengerGameDialogErrorMessage.react",["ix","cx","Image.react","React","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(a){return b("React").createElement("div",{className:"_1e1n"},b("React").createElement(b("Image.react"),{src:g("141787")}),b("React").createElement("span",{className:"_3-99"},a.error))};e.exports=a}),null);
__d("MessengerGameDialogSendingSpinner.react",["cx","fbt","MessengerSpinner.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(){return b("React").createElement("div",null,b("React").createElement(b("MessengerSpinner.react"),null),b("React").createElement("span",{className:"_1e1n _3-99"},h._("Sending")))};e.exports=a}),null);
__d("MessengerGameShareMutationWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1096845470442042"};b.getQueryID=function(){return"1395239747186826"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("MessengerGameShareDialog.react",["cx","fbt","AsyncRequest","CurrentUser","LayerFadeOnHide","MessengerComposeViewHeader.react","MessengerDialog.react","MessengerDialogBodyReact.bs","MessengerDialogButton.react","MessengerDialogFooter.react","MessengerDialogHeaderReact.re","MessengerDialogs.bs","MessengerDialogTitleReact.re","MessengerGameDialogErrorMessage.react","MessengerGameDialogSendingSpinner.react","MessengerGameShareMutationWebGraphQLMutation","React","emptyFunction","immutable"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("MessengerDialogBodyReact.bs").jsComponent,j=b("MessengerDialogHeaderReact.re").component,k=b("MessengerDialogTitleReact.re").component;a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={recipients:b("immutable").List(),sendError:null,sending:!1},d.$2=function(a){d.setState({recipients:d.state.recipients.push(a)})},d.$3=function(a){var b=d.state.recipients;d.setState({recipients:b["delete"](b.indexOf(a))})},d.$1=function(){d.setState({recipients:b("immutable").List()})},d.$4=function(){var a=d.state.recipients.map(function(a){return a.getUniqueID()}).toArray();new(b("AsyncRequest"))(b("MessengerGameShareMutationWebGraphQLMutation").getURI({thread_id:a,game_id:d.props.gameID})).setHandler(d.$5).send();d.setState({sending:!0,sendError:null})},d.$5=function(a){if(!a.error){d.setState({recipients:b("immutable").List(),sending:!1},function(){return b("MessengerDialogs.bs").removeDialog()});return}d.setState({sending:!1,sendError:a.error})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=h._("Send"),c;this.state.sending?c=b("React").createElement(b("MessengerGameDialogSendingSpinner.react"),null):this.state.sendError&&(c=b("React").createElement(b("MessengerGameDialogErrorMessage.react"),{error:this.state.sendError}));return b("React").createElement(b("MessengerDialog.react"),{shown:this.props.shown,behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},hideOnEscape:!0},b("React").createElement(j,null,b("React").createElement(k,null,this.props.title)),b("React").createElement(i,null,b("React").createElement(b("MessengerComposeViewHeader.react"),{className:"_1e1o",forceHideClearButton:!1,onClear:this.$1,onAddRecipient:this.$2,onRemoveRecipient:this.$3,onResize:b("emptyFunction"),recipients:this.state.recipients,viewer:b("CurrentUser").getID()})),b("React").createElement(b("MessengerDialogFooter.react"),{leftContent:c},b("React").createElement(b("MessengerDialogButton.react"),{action:"cancel",label:h._("Cancel"),onClick:b("MessengerDialogs.bs").removeDialog,type:"secondary",use:"default"}),b("React").createElement(b("MessengerDialogButton.react"),{action:"confirm",disabled:!this.state.recipients.size||this.state.sending,label:a,onClick:this.$4,type:"primary",use:"default"})))};return c}(b("React").Component);c.propTypes={gameID:a.string.isRequired,shown:a.bool.isRequired,title:a.node.isRequired};e.exports=c}),null);