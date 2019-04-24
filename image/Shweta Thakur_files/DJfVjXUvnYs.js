if (self.CavalryLogger) { CavalryLogger.start_js(["5rpun"]); }

__d("useKeyboardFocus",["KeyStatus","React","RTLKeys","VirtualCursorStatus"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("KeyStatus").isKeyDown,h=b("React").useCallback,i=b("React").useState,j=b("VirtualCursorStatus").isVirtualCursorTriggered;function a(a){__p&&__p();var c=i(!1),d=c[0],e=c[1];c=h(function(b){(j()||g())&&e(!0);if(a&&a.onFocus)return a.onFocus(b)},[a==null?void 0:a.onFocus]);var f=h(function(b){e(!1);if(a&&a.onBlur)return a.onBlur(b)},[a==null?void 0:a.onBlur]),k=h(function(c){(c.keyCode===b("RTLKeys").RETURN||c.keyCode===b("RTLKeys").SPACE)&&e(!0);if(a&&a.onKeyDown)return a.onKeyDown(c)},[a==null?void 0:a.onKeyDown]);return{isKeyboardFocused:d,onFocus:c,onBlur:f,onKeyDown:k}}e.exports=a}),null);
__d("KeyboardFocus.react",["React","useKeyboardFocus"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return c(b("useKeyboardFocus")(a))}e.exports=a}),null);
__d("autoFlipStyleProps",["Locale"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){if(!a||!b("Locale").isRTL())return a;var c={};Object.keys(a).forEach(function(b){c[g(b)]=h(a[b])});return c}function g(a){switch(a){case"left":return"right";case"marginLeft":return"marginRight";case"paddingLeft":return"paddingRight";case"right":return"left";case"marginRight":return"marginLeft";case"paddingRight":return"paddingLeft";default:return a}}function h(a){switch(a){case"left":return"right";case"right":return"left";default:return a}}e.exports=a}),null);
__d("FDSPrivateThemeAtomsType",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({FDS_GEODESIC:"FDS_GEODESIC",FDS_CLASSIC:"FDS_CLASSIC"});e.exports=a}),null);
__d("FDSPrivateThemeAtomsClassic",["cssVar","FDSPrivateThemeAtomsType","FDSSystemFonts"],(function(a,b,c,d,e,f,g){"use strict";a={"default":"rgba(53, 120, 229, 0.2)"};c={id:b("FDSPrivateThemeAtomsType").FDS_CLASSIC,type:{fontFamily:b("FDSSystemFonts").FONT_FAMILY,letterSpacing:b("FDSSystemFonts").LETTER_SPACING,size:12,lineHeight:"16px",base:14,scale:{display:[2.857,1.2],header1:[1.714,1.166],header2:[1.428,1.2],header3:[1.142,1.25],header4:[1,1.286],body1:[1,1.286],body2:[.928,1.308],body3:[.857,1.333]}},colors:{text:{"default":"#444950",primary:"#1C1E21",secondary:"#606770",header:"#444950",blueLink:"#385898",negative:"#FA383E",positive:"#00A400"},layers:{background:"#FFFFFF",border:"#CCD0D5"},active:"#ECF3FF",hover:"#F5F6F7"},baseUnit:1,gutters:{text:0,icon:0,iconInline:0},elevation:{depth0:"0 1px 2px 0 rgba(0, 0, 0, 0.1),\n              0 0 0 1px rgba(0, 0, 0, 0.1)",depth2:"0 4px 8px 1px rgba(0, 0, 0, 0.1),\n              0 0 0 1px rgba(0, 0, 0, 0.1)"},ratios:{square:1,circle:1,landscape:1.5,portrait:1.25},visualAlignment:"strict",borderRadius:{small:2,medium:2,large:4},dropdown:{offsetY:4},list:{paddingVert:0,paddingHoriz:0,item:{marginVert:4,marginHoriz:4,paddingVert:4,paddingHoriz:4}},binaryControls:{slider:{checked:{marginLeft:13,size:{medium:12,large:16}},disabled:{backgroundColor:"#BEC3C9"},margin:null,size:{medium:10,large:12}},checked:{active:{backgroundColor:"#FFFFFF",opacity:1},disabled:{backgroundColor:"#EBEDF0",opacity:1},hover:{backgroundColor:a["default"],opacity:1},normal:{backgroundColor:a["default"],opacity:1}},unchecked:{active:{backgroundColor:"#FFFFFF",border:"1px solid #3578E5",boxShadow:"inset 0 0 0 3px rgba(53, 120, 229, 0.2)"},disabled:{backgroundColor:"#EBEDF0",border:"1px solid #CCD0D5",boxShadow:"none"},hover:{backgroundColor:"#EBEDF0",border:"1px solid #CCD0D5",boxShadow:"inset 0 0 0 3px #FFFFFF"},normal:{backgroundColor:"#EBEDF0",border:"1px solid #CCD0D5",boxShadow:"inset 0 0 0 3px #FFFFFF"}},borderRadius:30,height:{medium:20,large:24},width:{medium:30,large:34}},inputs:{active:{backgroundColor:"#FFFFFF"},borderRadius:4,"default":{boxShadow:"none"},disabled:{backgroundColor:"#F5F6F7",boxShadow:"none"},edited:{backgroundColor:"#FFFBF0"},error:{border:"1px solid #FA383E"},focused:{boxShadow:"inset 0 0 0 3px rgba(53, 120, 229, 0.2)",error:{boxShadow:"inset 0 0 0 3px rgba(250, 56, 62, 0.3)"},valid:{boxShadow:"inset 0 0 0 3px rgba(0, 164, 0, 0.1)"},warning:{boxShadow:"inset 0 0 0 3px rgba(255, 186, 0, 0.3)"}},valid:{border:"1px solid #00A400"},warning:{border:" 1px solid #FFBA00"},size:{medium:20,large:24}},controls:{fontWeight:"bold",fontWeightAlt:"bold",height:{small:24,medium:28,large:36},"default":{active:{background:"#DADDE1",borderColor:"#DADDE1",color:"#444950"},disabled:{background:"#F5F6F7",borderColor:"#EBEDF0",color:"#BEC3C9"},hover:{background:"#EBEDF0",borderColor:"#DADDE1",color:"#444950"},normal:{background:"#F5F6F7",borderColor:"#DADDE1",color:"#444950"}},confirm:{active:{background:"#1D3C78",borderColor:"#1D3C78",color:"#FFFFFF"},disabled:{background:"#AAC9FF",borderColor:"#AAC9FF",color:"#FFFFFF"},hover:{background:"#2851A3",borderColor:"#2851A3",color:"#FFFFFF"},normal:{background:"#3578E5",borderColor:"#3578E5",color:"#FFFFFF"}},special:{active:{background:"#006900",borderColor:"#006900",color:"#FFFFFF"},disabled:{background:"#86DF81",borderColor:"#86DF81",color:"#FFFFFF"},hover:{background:"#008C00",borderColor:"#008C00",color:"#FFFFFF"},normal:{background:"#00A400",borderColor:"#00A400",color:"#FFFFFF"}},flat:{active:{background:"rgba(0, 0, 0, 0.1)",borderColor:"transparent",color:"#444950"},disabled:{background:"transparent",borderColor:"transparent",color:"#BEC3C9"},hover:{background:"rgba(0, 0, 0, 0.05)",borderColor:"transparent",color:"#444950"},normal:{background:"transparent",borderColor:"transparent",color:"#444950"}},flatWhite:{active:{background:"rgba(255, 255, 255, 0.1)",borderColor:"transparent",color:"#FFFFFF"},disabled:{background:"transparent",borderColor:"transparent",color:"rgba(255, 255, 255, 0.4)"},hover:{background:"rgba(255, 255, 255, 0.05)",borderColor:"transparent",color:"#FFFFFF"},normal:{background:"transparent",borderColor:"transparent",color:"#FFFFFF"}}},inputPrimitive:{size:{medium:28,large:36}},layout:{sidebar:{sparse:{width:{expanded:"300px",collapsed:"72px"},gutter:"12px",itemPaddingHorz:"12px",itemPaddingVert:"8px"},dense:{width:{expanded:"240px",collapsed:"52px"},gutter:"4px",itemPaddingHorz:"12px",itemPaddingVert:"4px"}}}};e.exports=c}),null);
__d("FDSPrivateThemeContext.react",["FDSPrivateThemeAtomsClassic","React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(b("FDSPrivateThemeAtomsClassic"))}),null);
__d("CornerEnum",[],(function(a,b,c,d,e,f){"use strict";a={topLeft:"topLeft",topRight:"topRight",bottomRight:"bottomRight",bottomLeft:"bottomLeft",values:["topLeft","topRight","bottomRight","bottomLeft"]};e.exports=a}),null);
__d("SideEnum",["prop-types"],(function(a,b,c,d,e,f){"use strict";a={top:"top",right:"right",bottom:"bottom",left:"left",propType:b("prop-types").oneOf(["top","right","bottom","left"]),values:["top","right","bottom","left"]};e.exports=a}),null);
__d("SUIBorderUtils",["CornerEnum","Locale","SideEnum","prop-types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CornerEnum").values,h=b("SideEnum").values;a={ALL_CORNERS:g,ALL_SIDES:h,BorderedSidesPropType:b("prop-types").arrayOf(b("prop-types").oneOf(h)),RoundedCornersPropType:b("prop-types").arrayOf(b("prop-types").oneOf(g)),getBorderRadiusStyles:function(a,c){c=c;if(a===g)return c!=null?{borderRadius:c}:null;a=new Set(a);if(a.size===g.length)return c!=null?{borderRadius:c}:null;c==null&&(c="2px");a={borderTopLeftRadius:a.has("topLeft")?c:"0",borderTopRightRadius:a.has("topRight")?c:"0",borderBottomRightRadius:a.has("bottomRight")?c:"0",borderBottomLeftRadius:a.has("bottomLeft")?c:"0"};return b("Locale").isRTL()?{borderTopLeftRadius:a.borderTopRightRadius,borderTopRightRadius:a.borderTopLeftRadius,borderBottomRightRadius:a.borderBottomLeftRadius,borderBottomLeftRadius:a.borderBottomRightRadius}:a},getBorderWidthStyles:function(a){if(a===h)return null;a=new Set(a);if(a.size===h.length)return null;a={borderTopWidth:a.has("top")?"1px":"0",borderRightWidth:a.has("right")?"1px":"0",borderBottomWidth:a.has("bottom")?"1px":"0",borderLeftWidth:a.has("left")?"1px":"0"};return b("Locale").isRTL()?babelHelpers["extends"]({},a,{borderRightWidth:a.borderLeftWidth,borderLeftWidth:a.borderRightWidth}):a}};e.exports=a}),null);
__d("SUIThemeContext.react",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(null)}),null);
/**
 * License: https://www.facebook.com/legal/license/oyybAxN87_l/
 */
__d("hoist-non-react-statics-2.5.0",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h={exports:g},i;function j(){__p&&__p();(function(b,c){typeof g==="object"&&typeof h!=="undefined"?h.exports=c():typeof i==="function"&&i.amd?i(c):b.hoistNonReactStatics=c()})(this,function(){__p&&__p();var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},b={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,d=Object.getOwnPropertyNames,e=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,h=g&&g(Object);return function i(j,k,l){__p&&__p();if(typeof k!=="string"){if(h){var m=g(k);m&&m!==h&&i(j,m,l)}m=d(k);e&&(m=m.concat(e(k)));for(var n=0;n<m.length;++n){var o=m[n];if(!a[o]&&!b[o]&&(!l||!l[o])){var p=f(k,o);try{c(j,o,p)}catch(a){}}}return j}return j}})}var k=!1,l=function(){k||(k=!0,j());return h.exports};a=function(a){switch(a){case void 0:return l()}};e.exports=a}),null);
__d("hoist-non-react-statics",["hoist-non-react-statics-2.5.0"],(function(a,b,c,d,e,f){e.exports=b("hoist-non-react-statics-2.5.0")()}),null);
__d("withSUITheme",["invariant","React","SUITheme","SUIThemeContext.react","gkx","hoist-non-react-statics","prop-types","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(a){return a.displayName||a.name||"Component"};function a(a){__p&&__p();if(!b("gkx")("678820"))return a;var c=h(a),d=function(e){__p&&__p();babelHelpers.inheritsLoose(d,e);function d(){return e.apply(this,arguments)||this}var f=d.prototype;f.getChildContext=function(){return this.props.preserveThemeFromContext===!0?{theme:this.context.theme}:{theme:this.props.theme||this.context.theme}};f.$1=function(){b("requireWeak")("AdsInterfacesComponentsLogger",function(a){return a.logSUIThemeError(new Error("Silvertail component "+c+" was not passed a theme in props or context. See https://fburl.com/silvertail-theme for more details."),c)})};f.$2=function(a){var b=this.props.theme,d=this.context&&this.context.theme;b=b||a||d;b||this.$1();b||g(0,2207,c);return b};f.render=function(){var c=this,d=this.props,e=d.theme;return b("React").createElement(b("SUIThemeContext.react").Consumer,null,function(f){var g=b("React").createElement(a,babelHelpers["extends"]({},d,{ref:d.forwardedRef,theme:c.$2(f)}));f=!c.props.preserveThemeFromContext&&e&&e!==f;return f?b("React").createElement(b("SUIThemeContext.react").Provider,{value:e},g):g})};return d}(b("React").Component);d.defaultProps={preserveThemeFromContext:!1};d.contextTypes={theme:b("prop-types").instanceOf(b("SUITheme"))};d.childContextTypes={theme:b("prop-types").instanceOf(b("SUITheme"))};var e=b("React").forwardRef(function(a,c){return b("React").createElement(d,babelHelpers["extends"]({},a,{forwardedRef:c}))});b("hoist-non-react-statics")(e,a);e.defaultProps=a.defaultProps;e.propTypes=a.propTypes;return e}e.exports=a}),null);
__d("FDSPrivateSelectorFactory",["memoizeWithArgsWeak"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("memoizeWithArgsWeak")(a)}e.exports=a}),null);
__d("FDSPrivateGutterSelector",["FDSPrivateSelectorFactory"],(function(a,b,c,d,e,f){"use strict";a=b("FDSPrivateSelectorFactory")(function(a,b){return a.baseUnit*a.gutters[b]});e.exports=a}),null);
__d("getSUIButtonUniform.fds",["FDSPrivateGutterSelector","FDSPrivateThemeAtomsType"],(function(a,b,c,d,e,f){"use strict";var g=2;function a(a){var c=a.borderRadius,d=a.controls,e=a.colors,f=a.type,h=d.height,i=a.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC;a={button:b("FDSPrivateGutterSelector")(a,"text"),icon:b("FDSPrivateGutterSelector")(a,"iconInline"),onlyIcon:b("FDSPrivateGutterSelector")(a,"icon")};return{borderRadius:c.medium===g?void 0:c.medium,height:{"short":h.small,normal:h.medium,tall:h.large},padding:i?{normal:a,"short":a,tall:a}:{normal:{button:"11px",icon:"7px",onlyIcon:"7px"},"short":{button:"7px",icon:"3px",onlyIcon:"3px"},tall:{button:"19px",icon:"7px",onlyIcon:"11px"}},typeStyle:{letterSpacing:f.letterSpacing,color:e.text["default"],fontSize:f.size+"px",fontWeight:d.fontWeight,fontFamily:f.fontFamily,lineHeight:f.lineHeight},use:{"default":d["default"],confirm:babelHelpers["extends"]({},d.confirm,{fontWeight:d.fontWeightAlt}),special:babelHelpers["extends"]({},d.special,{fontWeight:d.fontWeightAlt}),flat:d.flat,flatWhite:d.flatWhite}}}e.exports=a}),null);
__d("makeFDSErrorHandlingComponent",["FDSClientConfig","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=function(e){__p&&__p();babelHelpers.inheritsLoose(d,e);function d(){return e.apply(this,arguments)||this}var f=d.prototype;f.componentDidCatch=function(a){a.suiChildError===!0||a.fdsError===!0?delete a.suiChildError:(a.fdsError=!0,b("FDSClientConfig").logger!=null&&typeof b("FDSClientConfig").logger.logBIGComponentError==="function"&&b("FDSClientConfig").logger.logBIGComponentError(a,c));throw a};f.render=function(){var c=this.props,d=c.forwardedRef;c=babelHelpers.objectWithoutPropertiesLoose(c,["forwardedRef"]);return b("React").createElement(a,babelHelpers["extends"]({},c,{ref:d}))};return d}(b("React").Component),e=function(a,c){return b("React").createElement(d,babelHelpers["extends"]({},a,{forwardedRef:c}))};e.displayName=c;e=b("React").forwardRef(e);return e}e.exports=a}),null);
__d("makeFDSMountLoggingComponent",["FDSClientConfig","React","Run","gkx","guid","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a!==0&&Math.random()*a<1}var h=new Map();function i(a,b){h.set(a,b)}function j(a){h["delete"](a)}function a(){h.forEach(function(a){return a()})}b("Run").onBeforeUnload(a);function c(a,c,d){__p&&__p();d===void 0&&(d=!0);if(!g(b("FDSClientConfig").mountTimeSamplingRate)||!b("gkx")("678294"))return a;var e=function(e){__p&&__p();babelHelpers.inheritsLoose(d,e);function d(){var a,d;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(a=d=e.call.apply(e,[this].concat(g))||this,d.$1=null,d.$2=b("guid")(),d.$3=function(){var a=d.$1;if(a!==null){a=b("performanceNow")()-a;b("FDSClientConfig").logger&&typeof b("FDSClientConfig").logger.logFDSMountTime==="function"&&b("FDSClientConfig").logger.logFDSMountTime(c,a)}},a)||babelHelpers.assertThisInitialized(d)}var f=d.prototype;f.componentDidMount=function(){this.$1=b("performanceNow")(),i(this.$2,this.$3)};f.componentWillUnmount=function(){j(this.$2),this.$3()};f.render=function(){var c=this.props,d=c.forwardedRef;c=babelHelpers.objectWithoutPropertiesLoose(c,["forwardedRef"]);return b("React").createElement(a,babelHelpers["extends"]({},c,{ref:d}))};return d}(b("React").Component);if(!d)return e;d=function(a,c){return b("React").createElement(e,babelHelpers["extends"]({},a,{forwardedRef:c}))};d.displayName=c;return b("React").forwardRef(d)}e.exports=c}),null);
__d("makeFDSStandardComponent",["React","hoist-non-react-statics","makeFDSErrorHandlingComponent","makeFDSMountLoggingComponent","requireCond","cr:845147"],(function(a,b,c,d,e,f){"use strict";function a(a,c){c.displayName==null&&(c.displayName=a);return b("hoist-non-react-statics")(b("makeFDSMountLoggingComponent")(b("makeFDSErrorHandlingComponent")(c,a),a),c)}e.exports=a}),null);
__d("makeSUIThemeGetter",["SUITheme","memoizeWithArgs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){function c(c){var d={};Object.keys(a).forEach(function(b){var e=a[b];e!==void 0&&(d[b]=e(c))});return new(b("SUITheme"))({id:c.id,components:d})}return b("memoizeWithArgs")(c,function(a){return a.id})}e.exports=a}),null);
__d("FDSButton.react",["cx","FDSPrivateThemeAtomsType","FDSPrivateThemeContext.react","KeyboardFocus.react","React","SUIBorderUtils","SUIButton.react","SUIButtonContext","autoFlipStyleProps","getSUIButtonUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("makeSUIThemeGetter")({SUIButton:b("getSUIButtonUniform.fds")});a={borderedSides:b("SUIBorderUtils").ALL_SIDES,isDisabled:!1,labelIsHidden:!1,roundedCorners:b("SUIBorderUtils").ALL_CORNERS,size:"medium",type:"button",use:"default"};var i={isFixedWidthPadded:!0};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){return this.context.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC};d.$2=function(){return h(this.context)};d.$3=function(a,c,d){if(this.context.visualAlignment!=="optical"||a==null||d)return a;d=this.$2().SUIButton.padding[k(this.props.size)];d=parseInt(d.button,10)-parseInt(d.onlyIcon,10);c=c==="before"?"marginLeft":"marginRight";return b("React").cloneElement(a,{style:(c=b("autoFlipStyleProps")((a={},a[c]=-d,a)))!=null?c:void 0})};d.render=function(){var a=this,c=this.props,d=this.$1(),e=this.$2(),f=l(c.use),g=c.busyIndicator==null||d?c.iconAfter:void 0,h=c.icon!=null,m=g!=null,n=!c.labelIsHidden,o=n||h||m,p=c.busyIndicator!=null,q=(h||m)&&!(h&&m)&&!n;h=b("React").createElement(b("KeyboardFocus.react"),{onBlur:c.onBlur,onFocus:c.onFocus,onKeyDown:c.onKeyDown},function(h){var i,l=h.isKeyboardFocused,m=h.onBlur,n=h.onFocus;h=h.onKeyDown;return b("React").createElement(b("SUIButton.react"),{"aria-busy":c.busyIndicator!=null?!0:void 0,"aria-haspopup":c["aria-haspopup"],"aria-pressed":c["aria-pressed"],autoFocus:c.autoFocus,borderedSides:c.borderedSides,className_DEPRECATED:"_7tvm"+(d?"":" _7tv2")+(d?" _7tv3":"")+(o?" _7tv4":"")+(p?" _7tvn":""),"data-testid":c["data-testid"],"data-tooltip-position":c.tooltipPosition,density:c.density,disabled:c.isDisabled,height:k(c.size),href:c.href,icon:a.$3(c.icon,"before",q),iconAfter:a.$3(g,"after",q),id:c.id,isDepressed:c.isDepressed,label:c.label,labelIsHidden:c.labelIsHidden,layerAction:c.layerAction,margin:c.margin,maxWidth:(i=c.maxWidth)!=null?i:d?"100%":void 0,minWidth:c.minWidth,onBlur:m,onClick:c.onClick,onFocus:n,onKeyDown:h,onKeyUp:c.onKeyUp,onMouseDown:c.onMouseDown,onMouseEnter:c.onMouseEnter,onMouseLeave:c.onMouseLeave,onMouseUp:c.onMouseUp,rel:c.rel,rightContent:b("React").createElement(b("React").Fragment,null,p?b("React").createElement("div",{className:"_7tvo"},c.busyIndicator):null,d&&l?b("React").createElement(j,{isDisabled:c.isDisabled,uniform:e.SUIButton,use:f}):null),roundedCorners:c.roundedCorners,style:c.style,target:c.target,textAlign:c.textAlign,theme:e,tooltip:c.tooltip,tooltipDelay:c.tooltipDelay,type:c.type,use:f,value:c.value,width:c.width})});return d?b("React").createElement(b("SUIButtonContext").Provider,{value:i},h):h};return c}(b("React").PureComponent);c.defaultProps=a;c.contextType=b("FDSPrivateThemeContext.react");function j(a){var c=a.uniform.use[a.use],d=a.isDisabled?"disabled":"hover";return b("React").createElement("div",{className:"_7tvp",style:{borderRadius:a.uniform.borderRadius,color:c[d].borderColor}})}function k(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}function l(a){return a==="primary"?"confirm":a}d=b("makeFDSStandardComponent")("FDSButton",c);d.defaultProps=a;e.exports=d}),null);
__d("SUIInlineStyle",[],(function(a,b,c,d,e,f){"use strict";a=[0,4,8,12,16,20,24,28,32,36,40,"0","0px","4px","8px","12px","16px","20px","24px","28px","32px","36px","40px","auto"];e.exports={StandardSpacingValues:a}}),null);
__d("WhiteSpaceEnum",["prop-types"],(function(a,b,c,d,e,f){"use strict";a={inherit:"inherit",initial:"initial",normal:"normal",nowrap:"nowrap",pre:"pre","pre-line":"pre-line","pre-wrap":"pre-wrap",propType:b("prop-types").oneOf(["inherit","initial","normal","nowrap","pre","pre-line","pre-wrap"]),values:["inherit","initial","normal","nowrap","pre","pre-line","pre-wrap"]};e.exports=a}),null);
__d("SUIText.react",["cx","invariant","AlignmentEnum","PositionEnum","React","SUIComponent","SUIInlineStyle","SUITheme","WhiteSpaceEnum","autoFlipStyleProps","gkx","joinClasses","prop-types","withSUITheme"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("SUIInlineStyle").StandardSpacingValues;c={display:"inline",overflowWrap:"normal",shade:"dark",size:"body2",textAlign:"left"};d=b("gkx")("678820")?b("React").Component:b("SUIComponent");f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getLineHeight=function(a,b){a=a.SUIText;return a[c.$SUIText1(b)].lineHeight};c.$SUIText1=function(a){__p&&__p();switch(a){case"large_DEPRECATED":return"large";case"medium_DEPRECATED":return"medium";case"xlarge_DEPRECATED":return"xlarge";case"xsmall_DEPRECATED":return"xsmall";case"xxlarge_DEPRECATED":return"xxlarge";case"heading_DEPRECATED":return"heading";case"headline_DEPRECATED":return"headline";case"regular_DEPRECATED":return"regular";case"regularUI_DEPRECATED":return"regularUI";default:return a}};var d=c.prototype;d.$SUIText2=function(a,b){if(!a||!(a==="dark"))return b;switch(b){case"primary":return"primaryDark";case"secondary":return"secondaryDark";case"disabled":return"disabledDark";default:return b}};d.$SUIText3=function(a,b,c){return a.color?c.color[this.$SUIText2(a.palette,a.color)]:c.shade[a.shade]};d.render=function(){__p&&__p();var a,d=b("SUITheme").get(this).SUIText,e=babelHelpers["extends"]({},this.props.style),f=this.$SUIText3(this.props,c.defaultProps,d),g=d[c.$SUIText1(this.props.size)];a=(a=this.props.weight)!=null?a:g.fontWeight;e.fontFamily=g.fontFamily;e.fontSize=g.fontSize+"px";e.lineHeight=g.lineHeight+"px";e.letterSpacing=d.letterSpacing;Boolean(this.props.customSizeUseSparingly)&&(e.fontSize=this.props.customSizeUseSparingly,e.lineHeight="1.35");a!=null&&(e.fontWeight=a);Boolean(this.props.width)&&(e.width=this.props.width);e.overflowWrap=this.props.overflowWrap;e.wordWrap=this.props.overflowWrap;e.textAlign=this.props.textAlign;e.color=(g=this.props.customColorUseSparingly)!=null?g:f;this.props.whiteSpace&&(e.whiteSpace=this.props.whiteSpace);d={};this.props.id&&(d.id=this.props.id);Boolean(this.props["data-testid"])&&(d["data-testid"]=this.props["data-testid"]);this.props.headingLevel&&(d.role="heading",d["aria-level"]=String(this.props.headingLevel));(Boolean(this.props.className)||Boolean(this.props.margin))&&(d.className=b("joinClasses")(this.props.className,this.props.margin));var i;switch(this.props.display){case"inline":i="span";(Boolean(this.props.width)||Boolean(this.props.margin))&&(e.display="inline-block");break;case"block":i="div";break;case"truncate":i="div";d.className=b("joinClasses")(d.className,"ellipsis");d["data-hover"]="tooltip";d["data-tooltip-display"]="overflow";this.props.tooltipPosition&&(d["data-tooltip-position"]=this.props.tooltipPosition);break;default:h(0,1606)}d.style=b("autoFlipStyleProps")(e);return b("React").createElement(i,d,this.props.children)};return c}(d);f.propTypes={color:b("prop-types").oneOf(["primary","secondary","blueLink","placeholder","disabled","interactive","white","positive","negative"]),customColorUseSparingly:b("prop-types").string,customSizeUseSparingly:b("prop-types").string,"data-testid":b("prop-types").string,display:b("prop-types").oneOf(["block","inline","truncate"]).isRequired,margin:b("prop-types").string,overflowWrap:b("prop-types").oneOf(["break-word","normal"]).isRequired,shade:b("prop-types").oneOf(["dark","light","link","medium","white"]).isRequired,size:b("prop-types").oneOf(["display","header1","header2","header3","header4","body1","body1_DEPRECATED","body2","body2_DEPRECATED","body3","body3_DEPRECATED","meta1","heading","heading_DEPRECATED","headline","headline_DEPRECATED","regular","regular_DEPRECATED","regularUI","regularUI_DEPRECATED","large","large_DEPRECATED","medium","medium_DEPRECATED","small","subheading","xlarge","xlarge_DEPRECATED","xsmall","xsmall_DEPRECATED","xxlarge","xxlarge_DEPRECATED"]).isRequired,style:b("prop-types").shape({margin:b("prop-types").oneOf(a),marginBottom:b("prop-types").oneOf(a),marginLeft:b("prop-types").oneOf(a),marginRight:b("prop-types").oneOf(a),marginTop:b("prop-types").oneOf(a)}),textAlign:b("AlignmentEnum").propType.isRequired,tooltipPosition:b("PositionEnum").propType,palette:b("prop-types").oneOf(["light","dark"]),weight:b("prop-types").oneOf(["bold","normal"]),whiteSpace:b("WhiteSpaceEnum").propType,width:b("prop-types").oneOfType([b("prop-types").number,b("prop-types").string])};f.defaultProps=c;e.exports=b("withSUITheme")(f)}),null);
__d("FDSPrivateThemeTypeSelectors",[],(function(a,b,c,d,e,f){"use strict";function a(a){return Object.keys(a.type.scale).reduce(function(b,c){var d=Math.round(a.type.scale[c][0]*a.type.base);b[c]={fontSize:d,lineHeight:Math.round(d*a.type.scale[c][1])};return b},{})}e.exports={fontTypeSelector:a}}),null);
__d("getSUITextUniform.fds",["cssVar","FDSPrivateThemeAtomsType","FDSPrivateThemeTypeSelectors"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("FDSPrivateThemeTypeSelectors").fontTypeSelector;function a(a,c){var d=a.type.fontFamily,e=a.id===b("FDSPrivateThemeAtomsType").FDS_GEODESIC;e=e?"700":void 0;var f={fontSize:a.type.base,lineHeight:typeof a.type.lineHeight==="string"?a.type.lineHeight.replace("px",""):a.type.lineHeight*a.type.base};a=h(a);var g=a.display,i=a.title,j=a.header1,k=a.header2,l=a.header3,m=a.header4,n=a.body,o=a.body1,p=a.body2,q=a.body3;a=a.small;return{display:babelHelpers["extends"]({fontFamily:d},(g=g)!=null?g:f),header1:babelHelpers["extends"]({fontWeight:e,fontFamily:d},j),header2:babelHelpers["extends"]({fontWeight:e,fontFamily:d},k),header3:babelHelpers["extends"]({fontWeight:e,fontFamily:d},l),header4:babelHelpers["extends"]({fontWeight:e,fontFamily:d},m),body1:babelHelpers["extends"]({fontFamily:d},(j=(g=n)!=null?g:o)!=null?j:f),body1_DEPRECATED:{fontFamily:d,fontSize:16,lineHeight:20},body2:babelHelpers["extends"]({fontFamily:d},(l=(k=n)!=null?k:p)!=null?l:f),body2_DEPRECATED:{fontFamily:d,fontSize:14,lineHeight:18},body3:babelHelpers["extends"]({fontFamily:d},(m=(e=n)!=null?e:q)!=null?m:f),body3_DEPRECATED:{fontFamily:d,fontSize:13,lineHeight:17},meta1:{fontFamily:d,fontSize:12,lineHeight:16},heading:{fontFamily:d,fontSize:24,lineHeight:32},subheading:{fontFamily:d,fontSize:20,lineHeight:24},headline:babelHelpers["extends"]({fontFamily:d},(g=i)!=null?g:f),regular:babelHelpers["extends"]({fontFamily:d},(o=n)!=null?o:f),regularUI:{fontFamily:d,fontSize:14,lineHeight:16},large:{fontFamily:d,fontSize:16,lineHeight:20},letterSpacing:"normal",medium:{fontFamily:d,fontSize:14,lineHeight:18},shade:{dark:"#1d2129",light:"#90949c",link:"#365899",medium:"#4b4f56",white:"#FFFFFF"},small:babelHelpers["extends"]({fontFamily:d},(j=a)!=null?j:f),color:{primary:c,secondary:c,blueLink:c,negative:c,positive:c,disabled:"#BEC3C9",disabledDark:"#373737",interactive:"#3578E5",placeholder:"#8D949E",primaryDark:"#cccccc",secondaryDark:"#4A4A4A",white:"#FFFFFF"},xlarge:{fontFamily:d,fontSize:18,lineHeight:24},xsmall:{fontFamily:d,fontSize:11,lineHeight:14},xxlarge:{fontFamily:d,fontSize:24,lineHeight:30}}}e.exports=a}),null);
__d("FDSText.react",["FDSPrivateThemeContext.react","React","SUIText.react","SUITheme","getSUITextUniform.fds","makeFDSStandardComponent","memoizeWithArgs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("memoizeWithArgs")(function(a,c){return new(b("SUITheme"))({id:"FDSText",components:{SUIText:b("getSUITextUniform.fds")(a,c)}})},function(a,b){return a.id+"."+b});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=this.context;c=g(c,(c=c.colors.text[a.color])!=null?c:"UNSUPPORTED");return b("React").createElement(b("SUIText.react"),{children:a.children,color:j(a.color,a.palette),"data-testid":h(a["data-testid"]),display:a.display,id:h(a.id),margin:h(a.margin),overflowWrap:a.overflowWrap,palette:a.palette,preserveThemeFromContext:!0,size:i(a.size),textAlign:a.textAlign,theme:c,tooltipPosition:h(a.tooltipPosition),weight:h(a.weight),whiteSpace:h(a.whiteSpace),width:h(a.width)})};return c}(b("React").Component);a.contextType=b("FDSPrivateThemeContext.react");a.defaultProps={color:"primary",display:"inline",overflowWrap:"normal",size:"body2",textAlign:"left"};function h(a){return a===null?void 0:a}function i(a){switch(a){case"title":return"headline";case"body":return"regular";default:return a}}function j(a,b){switch(a){case"highlight":return"interactive";case"white":case"disabled":case"placeholder":return a;case"secondary":return b==="dark"?a:"primary";default:return"primary"}}e.exports=b("makeFDSStandardComponent")("FDSText",a)}),null);
__d("getSUILinkUniform.fds",["cssVar"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return{normalColor:a.colors.text.blueLink,hoverColor:a.colors.text.blueLink,inverseColor:"#FFFFFF",inverseHoverColor:"#FFFFFF"}}e.exports=a}),null);
__d("makeSUIFDSPrivateTheme",["SUITheme"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return new(b("SUITheme"))({id:a,components:c})}e.exports=a}),null);
__d("SUIButtonUniform.fds",["FDSPrivateThemeAtomsClassic","getSUIButtonUniform.fds"],(function(a,b,c,d,e,f){"use strict";e.exports=b("getSUIButtonUniform.fds")(b("FDSPrivateThemeAtomsClassic"))}),null);
__d("ManagedError",[],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this,b!==null&&b!==void 0?b:"")||this;b!==null&&b!==void 0?d.message=b:d.message="";d.innerError=c;return d}return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);
__d("AssertionError",["ManagedError"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,b)||this}return b}(b("ManagedError"));e.exports=a}),null);
__d("Assert",["AssertionError","sprintf"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(typeof a!=="boolean"||!a)throw new(b("AssertionError"))(c);return a}function h(a,c,d){__p&&__p();var e;if(c===void 0)e="undefined";else if(c===null)e="null";else{var f=Object.prototype.toString.call(c);e=/\s(\w*)/.exec(f)[1].toLowerCase()}g(a.indexOf(e)!==-1,d||b("sprintf")("Expression is of type %s, not %s",e,a));return c}function a(a,b,c){g(b instanceof a,c||"Expression not instance of type");return b}function i(a,b){j["is"+a]=b,j["maybe"+a]=function(a,c){a!=null&&b(a,c)}}var j={isInstanceOf:a,isTrue:g,isTruthy:function(a,b){return g(!!a,b)},type:h,define:function(a,b){a=a.substring(0,1).toUpperCase()+a.substring(1).toLowerCase(),i(a,function(a,c){g(b(a),c)})}};["Array","Boolean","Date","Function","Null","Number","Object","Regexp","String","Undefined"].forEach(function(a){i(a,h.bind(null,a.toLowerCase()))});e.exports=j}),null);
__d("suiMargin",[],(function(a,b,c,d,e,f){"use strict";function a(a){throw new Error("suiMargin: Unexpected margin transformation.")}e.exports=a}),null);
__d("VideoEditSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PROCESSING_DIALOG:"processing_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_ASSET_INSIGHTS:"video_asset_insights",PERMALINK:"permalink",TIMELINE:"timeline",SNOWLIFT:"snowlift",LIBRARY:"library",SEASON_DETAILS:"season_details",PLAYLIST_DETAILS:"playlist_details",REFERENCE_LIBRARY:"reference_library",CAROUSEL_PREVIEW:"carousel_preview",PAGE_VIDEO_LPP_PUBLISH:"page_video_lpp_publish",SCHEDULE_LIVE_STORY:"schedule_live_story",TAHOE:"tahoe",MEDIA_MANAGER_CONTENT_LIBRARY:"media_manager_content_library",MEDIA_MANAGER_INSTAGRAM_CONTENT_LIBRARY:"media_manager_instagram_content_library",UNKNOWN:"unknown",VIDEO_PAGE_SPOTLIGHT_SELECTOR:"video_page_spotlight_selector",PAGE_CONTENT_TAB:"page_content_tab"})}),null);