/*!CK:4283530040!*//*1445186311,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["KIbXU"]); }

__d("XPartnersPortalTestID",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CHROME:"XMPPViewWithChrome",FOOTER:"XMPPFooter",PROFILE_SETTINGS:"XMPPProfileSettings",SETTINGS_NAME:"XMPPSettingsName",SETTINGS_LOCALE:"XMPPSettingsLocale",SETTINGS_LOGO:"XMPPSettingsLogo",SETTINGS_PAGE:"XMPPSettingsPage",USERS_SETTINGS:"XMPPUsersSettings",MCC_MNC_SETTINGS:"XMPPMCCMNCSettings",SETTINGS_ADD_MCC_MNC:"XMPPSettingsAddMCCMNC",SETTINGS_ADD_MCC_MNC_DIALOG:"XMPPSettingsAddMCCMNCDialog",SETTINGS_ADD_MCC_MNC_SAVE:"XMPPSettingsAddMCCMNCDialogSave",SETTINGS_REMOVE_MCC_MNC:"XMPPSettingsRemoveMCCMNC",SETTINGS_MCC_MNC_DIALOG_DELETE:"XMPPSettingsMCCMNCDialogDelete",SETTINGS_MCC_MNC_REQUESTED:"XMPPSettingsMCCMNCRequested",IP_SETTINGS:"XMPPIPSettings",IP_ADD_SETTINGS:"XMPPIPAddSettings",IP_ADD_SETTINGS_DIALOG:"XMPPIPAddSettingsDialog",IP_ADD_SETTINGS_SAVE:"XMPPIPAddSettingsSave",IP_REQUESTED_SETTINGS:"XMPPIPRequestedSettings",IP_EDIT_SETTINGS:"XMPPIPEditSettings",IP_EDIT_SETTINGS_DIALOG:"XMPPIPEditSettingsDialog",IP_REMOVE_SETTINGS:"XMPPIPRemoveSettings",IP_REMOVE_SETTINGS_CONFIRM:"XMPPIPRemoveSettingsConfirm",IP_REMOVE_SETTINGS_CONFIRM_DIALOG:"XMPPIPRemoveSettingsConfirmDialog",WAP_SETTINGS:"XMPPWAPSettings",WAP_FOOTER:"WAPFooter",DASHBOARD:"XMPPDashboard",INSIGHTS:"XMPPInsights",TOS_INTERSTITIAL:"TOSInterstitial",TOS_CHECKBOX:"TOSCheckbox",TOS_SUBMIT:"TOSSubmit",TOS_SUCCESS:"TOSSuccess",PARTNER_LOGO:"XMPPLogo",SUPPORT:"XMPPSupport",SUPPORT_TASK:"XMPPSupportTicket",SUPPORT_TASK_TITLE:"XMPPSupportTicketTitle",SUPPORT_TASK_DESCRIPTION:"XMPPSupportTicketDescription",SUPPORT_TASK_IMPACT:"XMPPSupportTicketImpact",SUPPORT_TASK_ADDITIONAL:"XMPPSupportTicketAdditional",CREATE_TICKET_BUTTON:"XMPPCreateTicketButton",CREATE_TICKET_PAGE:"XMPPCreateTicketPage",CREATE_TICKET:"XMPPCreateTicket",CREATE_TICKET_TAGS:"XMPPCreateTicketTags",MSISDN:"XMPPMSISDN",PRODUCT_LAUNCHER:"XMPPProductLauncher",SIMPLE_XUI_DIALOG_FOOTER:"SimpleXUIDialogFooter",CPP_SLICES_SELECTOR:"XFBSPPInsightsSlicesSelector",FBS_SETTINGS_TITLE:"XFBSPPSettingsTitle",CONTENT_ONBOARDING:"XCPPContentOnboarding",CONTENT_ONBOARDING_MANAGE:"XCPPContentOnboardingManage",CPP_CONAME:"XCPPCompanyName",CPP_SITE:"XCPPSiteName",CPP_PHONE:"XCPPSubmitterPhone",CPP_SHORT_DESC:"XCPPShortDesc",CPP_LONG_DESC:"XCPPLongDesc",CPP_COUNTRY_SELECTOR:"XCPPCountrySelector",CPP_AF:"AF",CPP_AFGHANISTAN:"Afghanistan",CPP_ADD_LANGUAGE:"XCPPAddLanguage",CPP_HTTP_ONLY:"XCPPHTTPOnly",CPP_GENERAL_COUNTRY_SELECTOR:"XCPPGeneralCountrySelector",CPP_TOS_CHECKBOX:"XCPPTOSCheckBox",CPP_SUBMIT:"XCPPSubmit",CPP_UPLOAD_BANNER:"XCPPUploadBanner",CPP_UPLOAD_THUMBNAIL:"XCPPUploadThumbnail"};},null,{});
__d('CenteredContainer.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'CenteredContainer',propTypes:{fullHeight:k.bool,vertical:k.bool,horizontal:k.bool},getDefaultProps:function(){return {fullHeight:false,vertical:false,horizontal:true};},render:function(){var m=(this.props.vertical?"_3bwv":'')+(this.props.horizontal?' '+"_3bww":''),n=h.Children.map(this.props.children,function(p){return (h.createElement('div',{className:"_3bwx"},p));}),o=j(this.props.className,this.props.fullHeight?"_5bpf":'');return (h.createElement('div',babelHelpers._extends({},this.props,{className:o}),h.createElement('div',{className:m},h.createElement('div',{className:"_3bwy"},n))));}});f.exports=l;},null);
__d('AbstractActionList.react',['React','ReactChildren','ReactFragment'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=' \u00b7 ',l=h.createClass({displayName:'AbstractActionList',render:function(){var m=true,n=i.map(this.props.children,function(o){if(!o)return o;if(m){m=false;return o;}return j.create({BULLET:k,child:o});});return h.createElement('div',this.props,n);}});f.exports=l;},null);
__d('ActionList.react',['AbstractActionList.react','joinClasses','React'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=j.createClass({displayName:'ActionList',render:function(){return (j.createElement(h,babelHelpers._extends({},this.props,{className:i(this.props.className,"fsm fwn fcg")}),this.props.children));}});f.exports=k;},null);
__d('InputLabel.react',['React','cx','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=0;function n(){return 'js_input_label_'+m++;}var o=h.createClass({displayName:'InputLabel',propTypes:{display:l.oneOf(['block','inline'])},getDefaultProps:function(){return {display:'block'};},render:function(){!(this.props.children.length===2)?j(0):undefined;var p=this.props.children[0],q=this.props.children[1],r=p.type==='input';p=h.cloneElement(p,{className:k(p.props.className,"uiInputLabelInput"+(r&&p.props.type==='radio'?' '+"uiInputLabelRadio":'')+(r&&p.props.type==='checkbox'?' '+"uiInputLabelCheckbox":'')),id:p.props.id||n()});q=h.cloneElement(q,{className:k(q.props.className,'uiInputLabelLabel'),htmlFor:p.props.id});var s="uiInputLabel"+(' '+"clearfix")+(this.props.display==='inline'?' '+"inlineBlock":'')+(r?' '+"uiInputLabelLegacy":'');return (h.createElement('div',babelHelpers._extends({},this.props,{className:k(this.props.className,s)}),p,q));}});f.exports=o;},null);
__d('AbstractCheckboxInput.react',['React','cx','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'AbstractCheckboxInput',propTypes:{tooltip:l.string},render:function(){!(!this.props.children||this.props.children.length===0)?j(0):undefined;var n=k(this.props.className,"_kv1"),o=h.createElement('input',babelHelpers._extends({},this.props,{className:null,type:'checkbox'}),undefined);return (h.createElement('label',{className:n},o,h.createElement('span',{'data-hover':this.props.tooltip?'tooltip':null,'aria-label':this.props.tooltip})));}});f.exports=m;},null);
__d('XUICheckboxInput.react',['AbstractCheckboxInput.react','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=i.createClass({displayName:'XUICheckboxInput',render:function(){return (i.createElement(h,babelHelpers._extends({},this.props,{className:k(this.props.className,"_55sg")}),undefined));}});f.exports=l;},null);
__d('SimpleXUIDialog',['DialogX','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','XPartnersPortalTestID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){'use strict';if(c.__markCompiled)c.__markCompiled();var u=445,v={show:function(w,x,y,z){var aa=n.createElement(r,{action:'cancel',use:'confirm'});this.showEx(w,x,aa,y,z);},showConfirm:function(w,x,y,z){var aa=false,ba=n.createElement('div',null,n.createElement(o,{onClick:function(){aa=false;}}),n.createElement(r,{action:'cancel',use:'confirm',onClick:function(){aa=true;}}));function ca(){y(aa);}this.showEx(w,x,ba,ca,z);},showEx:function(w,x,y,z,aa){aa=aa||{};var ba=[i,k,j,m];if(aa.hideOnBlur!==false)ba.push(l);var ca={width:aa.width||u,xui:true,addedBehaviors:ba};if(x)x=n.createElement(s,{showCloseButton:true},x);if(y)y=n.createElement(q,{'data-testid':t.SIMPLE_XUI_DIALOG_FOOTER},y);var da=n.createElement('div',null,x,n.createElement(p,null,w),y),ea=new h(ca,da);if(z)ea.subscribe('hide',z);ea.show();}};f.exports=v;},null);
__d('XUIRadioInput.react',['React','cx','joinClasses','invariant'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'XUIRadioInput',render:function(){!(!this.props.children||this.props.children.length===0)?k(0):undefined;var m=j(this.props.className,"_55sh"),n=h.createElement('input',babelHelpers._extends({},this.props,{className:null,type:'radio'}),undefined);return (h.createElement('label',{className:m},n,h.createElement('span',null)));}});f.exports=l;},null);
__d('Grid.react',['React','ReactChildren','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'Grid',propTypes:{cols:l.number.isRequired,fixed:l.bool,alignv:l.oneOf(['top','middle','bottom']),alignh:l.oneOf(['left','center','right']),spacing:l.string},render:function(){var o=this.props,p=o.alignh,q=o.alignv,r=o.children,s=o.cols,t=o.fixed,u=o.spacing,v=i.count(r),w=[],x=[],y=0;i.forEach(r,function(z,aa){if(z===null||z===undefined)return;var ba=z.type===n;y+=ba?Math.max(z.props.colSpan||0,1):1;var ca=y===s?"_51mw":'';if(!ba){z=h.createElement(n,{alignh:p,alignv:q,className:k(u,ca),key:z.key||aa},z);}else z=h.cloneElement(z,{key:z.key||aa,alignh:z.props.alignh||p,alignv:z.props.alignv||q,className:k(z.props.className,u,ca)});x.push(z);if(y%s===0||aa+1===v){if(t&&y<s){for(var da=y;da<s;da++)x.push(h.createElement(n,{key:aa+da}));y=s;}w.push(h.createElement('tr',{className:"_51mx",key:aa},x));x=[];y=0;}});return (h.createElement('table',babelHelpers._extends({},this.props,{className:k(this.props.className,"uiGrid"+(' '+"_51mz")+(t?' '+"_5f0n":'')),cellSpacing:'0',cellPadding:'0'}),h.createElement('tbody',null,w)));}}),n=h.createClass({displayName:'GridItem',propTypes:{alignv:l.oneOf(['top','middle','bottom']),alignh:l.oneOf(['left','center','right'])},render:function(){var o=k(this.props.className,"_51m-"+(this.props.alignv==='top'?' '+"vTop":'')+(this.props.alignv==='middle'?' '+"vMid":'')+(this.props.alignv==='bottom'?' '+"vBot":'')+(this.props.alignh==='left'?' '+"hLeft":'')+(this.props.alignh==='center'?' '+"hCent":'')+(this.props.alignh==='right'?' '+"hRght":''));return (h.createElement('td',babelHelpers._extends({},this.props,{className:o})));}});m.GridItem=n;f.exports=m;},null);
__d('getSafeBodyFromHTML',['UserAgent'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h.isBrowser('IE <= 9');function j(k){var l,m=null;if(!i&&document.implementation&&document.implementation.createHTMLDocument){l=document.implementation.createHTMLDocument('foo');l.documentElement.innerHTML=k;m=l.getElementsByTagName('body')[0];}return m;}f.exports=j;},null);