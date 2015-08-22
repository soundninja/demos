/*!CK:132978017!*//*1440026167,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["j\/p70"]); }

__d("ActorSelectorNuxTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"};},null,{});
__d('AbstractPopoverButton.react',['React','URI','cloneWithProps','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=Object.assign||function(p){for(var q=1;q<arguments.length;q++){var r=arguments[q];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))p[s]=r[s];}return p;},n=h.PropTypes,o=h.createClass({displayName:'AbstractPopoverButton',propTypes:{config:n.object.isRequired,haschevron:n.bool,maxwidth:n.number},getDefaultProps:function(){return {haschevron:true};},render:function(){var p=this.props.config,q={},r=p.defaultMaxWidth;if(typeof this.props.maxwidth!=='undefined')r=this.props.maxwidth;var s=null;if(r){var t=this.props.haschevron?r-p.chevronWidth:r;if(this.props.label)s={maxWidth:t+'px'};q.style=m({},q.style,{maxWidth:r+'px'});}q.image=null;var u=null;if(this.props.image&&this.props.label){u=j(this.props.image,{className:"_3-8_"});}else if(this.props.image)u=this.props.image;if(u||this.props.label)q.label=h.createElement('span',{className:"_55pe",style:s},u,this.props.label);if(this.props.haschevron)q.imageRight=p.chevron;q.className=l(p.button.props.className,"_2agf");q.href=new i('#');return j(p.button,q);}});f.exports=o;},null);
__d('XUIPopoverButton.react',['AbstractPopoverButton.react','Image.react','React','XUIButton.react','cx','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=Object.assign||function(r){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u))r[u]=t[u];}return r;},p=j.PropTypes,q=j.createClass({displayName:'ReactXUIPopoverButton',propTypes:{haschevron:p.bool,maxwidth:p.number},statics:{getButtonSize:function(r){return r.size||'medium';}},render:function(){var r=q.getButtonSize(this.props),s="_55pi";if(this.props.theme==='dark')s=n(s,"_5vto"+(r==='small'?' '+"_55_o":'')+(r==='medium'?' '+"_55_p":'')+(r==='large'?' '+"_55_q":'')+(r==='xlarge'?' '+"_55_r":'')+(r==='xxlarge'?' '+"_55_s":''));var t=this.props.chevron;if(!t){var u=this.props.theme==='dark'||this.props.use==='confirm'||this.props.use==='special'?m('/images/ui/x/button/dark/chevron.png'):m('/images/ui/x/button/normal/chevron.png');t=j.createElement(i,{src:u});}var v={button:j.createElement(k,o({},this.props,{className:n(this.props.className,s),size:r})),chevron:t,chevronWidth:14,defaultMaxWidth:this.props.maxwidth||200};return (j.createElement(h,{config:v,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,maxwidth:this.props.maxwidth}));}});f.exports=q;},null);
__d('ActorSelectorPlaceholder.react',['Image.react','React','TooltipData','XUIPopoverButton.react','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=i.createClass({displayName:'ActorSelectorPlaceholder',getDefaultProps:function(){return {onActivate:function(){}};},componentDidMount:function(){if(this.props.focusOnInit&&this.refs['open-menu-button'])i.findDOMNode(this.refs['open-menu-button']).focus();var p=m._("Like or comment as one of the Pages you manage.");j.set(i.findDOMNode(this.refs['open-menu-button']),p,'above','right');},render:function(){return (i.createElement(k,{className:"_4z8-",haschevron:false,image:i.createElement(h,{width:16,height:16,src:n('images/pages/voice/flag.png')}),onFocus:(function(){return this.props.onActivate(true);}).bind(this),onMouseOver:(function(){return this.props.onActivate(false);}).bind(this),ref:'open-menu-button',suppressed:true,type:'button'}));}});f.exports=o;},null);
__d('HasLayerContextMixin',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getContextNode:function(){var j=this.props.context;if(this.props.contextRef){var k=this.props.contextRef();j=k&&h.findDOMNode(k);}return j;}};f.exports=i;},null);
__d('XUIContextualDialogBody.react',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h.createClass({displayName:'XUIContextualDialogBody',render:function(){return (h.createElement('div',{className:this.props.className},this.props.children));}});f.exports=i;},null);
__d('XUIContextualDialogFooter.react',['React','XUIOverlayFooter.react','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUIContextualDialogFooter',render:function(){return (h.createElement(i,{className:"_572u"},this.props.children));}});f.exports=k;},null);
__d('XUIContextualDialogTitle.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'XUIContextualDialogTitle',propTypes:{use:k.oneOf(['primary','secondary'])},getDefaultProps:function(){return {use:'primary'};},render:function(){var m=this.props.use,n=j("_47lu"+(m==='primary'?' '+"_47lv":'')+(m==='secondary'?' '+"_47mc":''),this.props.className);return (h.createElement('h3',{className:n},this.props.children));}});f.exports=l;},null);
__d('XUIContextualDialog.react',['HasLayerContextMixin','ContextualDialogXUITheme','React','ReactAbstractContextualDialog','ReactLayer','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=Object.assign||function(u){for(var v=1;v<arguments.length;v++){var w=arguments[v];for(var x in w)if(Object.prototype.hasOwnProperty.call(w,x))u[x]=w[x];}return u;},r=j.PropTypes,s=l.createClass(k.createSpec({displayName:'ReactXUIContextualDialog',theme:i})),t=j.createClass({displayName:'XUIContextualDialog',mixins:[h],propTypes:{position:r.oneOf(['above','below','left','right']),alignment:r.oneOf(['left','center','right']),offsetX:r.number,offsetY:r.number,width:r.number,autoFocus:r.bool,arrowBehavior:r.func,behaviors:r.object,shown:r.bool,context:r.object,contextRef:r.func,hoverContext:r.object,hoverContextRef:r.func,hoverShowDelay:r.number,hoverHideDelay:r.number,hideOnEscape:r.bool,onToggle:r.func,hasActionableContext:r.bool},getDefaultProps:function(){return {hasActionableContext:false,hideOnEscape:true};},_getDialogBody:function(){return this._getChildOfType(m);},_getDialogTitle:function(){return this._getChildOfType(o);},_getDialogFooter:function(){return this._getChildOfType(n);},_getChildOfType:function(u){var v=null;j.Children.forEach(this.props.children,function(w){if(!v&&w.type===u)v=w;});return v;},updatePosition:function(){var u=this.refs.dialog;if(u)u.layer.updatePosition();},render:function(){var u=this.props.children,v=this._getDialogBody();if(v)u=j.createElement('div',{className:"_53iv"},this._getDialogTitle(),v);return (j.createElement(s,q({},this.props,{ref:'dialog',context:this.getContextNode()}),u,v?this._getDialogFooter():null));}});t.WIDTH={NORMAL:312,WIDE:400};f.exports=t;},null);
__d('XUIDialogOkayButton.react',['React','XUIDialogButton.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=Object.assign||function(p){for(var q=1;q<arguments.length;q++){var r=arguments[q];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))p[s]=r[s];}return p;},n=h.PropTypes,o=h.createClass({displayName:'XUIDialogOkayButton',propTypes:{action:n.oneOf(['confirm','cancel','button']).isRequired},render:function(){return (h.createElement(i,m({},this.props,{className:l(this.props.className,"_2z1w"),action:this.props.action,label:k._("OK")})));}});f.exports=o;},null);
__d('XUIMenuSeparator.react',['MenuSeparator.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h;f.exports=i;},null);
__d("ReactSelectorUtils",["React"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={processMenuItems:function(j,k){var l,m=h.Children.map(j,function(n){if(n){var o=n.props.value===k;n=h.cloneElement(n,{selected:o});if(o)l=n;return n;}});return {items:m,selectedItem:l};},processMultiMenuItems:function(j,k){var l=[],m=j;if(k)m=h.Children.map(j,function(n){if(n){var o=k.some(function(p){return p===n.props.value;});n=h.cloneElement(n,{selected:o});if(o)l.push(n);return n;}});return {items:m,selectedItems:l};}};f.exports=i;},null);
__d('PopoverMenuContextMinWidth',['CSS','Style','cx','shield'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m){'use strict';this._popoverMenu=m;this._popover=m.getPopover();}l.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',k(this._onSetMenu,this));};l.prototype.disable=function(){'use strict';this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null;}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null;}};l.prototype._onSetMenu=function(){'use strict';this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe('show',k(this._updateWidth,this));var m=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(m,0);});this._updateWidth();};l.prototype._updateWidth=function(){'use strict';var m=this._menu.getRoot(),n=this._popoverMenu.getTriggerElem(),o=n.offsetWidth;i.set(m,'min-width',o+'px');h.conditionClass(m,"_575s",o>=m.offsetWidth);};Object.assign(l.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=l;},null);
__d('AbstractSelector.react',['InlineBlock.react','React','PopoverMenu.react','ReactSelectorUtils','ContextualLayerAutoFlip','PopoverMenuContextMinWidth','PopoverMenuOverlappingBorder','cloneWithProps','cx','invariant','joinClasses','intlList'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=Object.assign||function(x){for(var y=1;y<arguments.length;y++){var z=arguments[y];for(var aa in z)if(Object.prototype.hasOwnProperty.call(z,aa))x[aa]=z[aa];}return x;},u=i.PropTypes;function v(x,y,z){if(x[y]==null)return;var aa=Array.isArray(x[y]);if(x.multiple){if(!aa)return new Error('You are trying to set a single value for `'+y+'` '+'but the menu has `multiple` set to true, so it should be an '+'array of values.');}else if(aa)return new Error('You are trying to set an array of values for `'+y+'` '+'but the menu has `multiple` set to false, so it should be a '+'single value.');}var w=i.createClass({displayName:'AbstractSelector',propTypes:{config:u.object.isRequired,alignh:u.oneOf(['left','center','right']),name:u.string,overlappingborder:u.bool,onChange:u.func,disabled:u.bool,maxheight:u.number,multiple:u.bool,defaultLabel:u.string,defaultValue:v,value:v,initialValue:v},getInitialState:function(){return {value:this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue};},setMenuValue:function(x){!(this.refs&&this.refs.popover)?q(0):undefined;this._internalChange=true;this.refs.popover.getMenu().setValue(x);this._internalChange=false;},onChange:function(x,y){if(this._internalChange)return;if(this.props.value==null){var z=null;if(this.props.multiple){z=y.map(function(aa){return aa.value;});}else z=y.value;this.setState({value:z});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(y);},componentWillReceiveProps:function(x){if(x.value!=null){this.setState({value:x.value});}else if(this.props.multiple!==x.multiple)this.setState({value:x.multiple?[this.state.value]:this.state.value[0]});},render:function(){var x=this.props.config,y=!this.props.multiple?k.processMenuItems(this.props.children,this.state.value):k.processMultiMenuItems(this.props.children,this.state.value),z=o(x.menu,{children:y.items,className:r("_575t",x.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),aa='',ba=null;if(!this.props.multiple){var ca=y.selectedItem;aa=ca.props.label||ca.props.children;if(ca.props.icon)ba=o(ca.props.icon,{});}else{var da=y.selectedItems;if(!da.length){aa=this.props.defaultLabel;}else aa=s(da.map(function(la){return la.props.children;}),s.CONJUNCTIONS.NONE);}var ea={label:aa,disabled:this.props.disabled};if(ba)ea.image=ba;var fa=o(x.button,ea),ga=[l];if(x.layerBehaviors)ga=ga.concat(x.layerBehaviors);var ha=[m];if(this.props.overlappingborder)ha.push(n);var ia=null;if(this.props.multiple){var ja=this.props.name+'[]',ka;if(this.state.value)ka=this.state.value.map(function(la){return (i.createElement('input',{key:la,type:'hidden',name:ja,value:la}));});ia=i.createElement('div',null,ka);}else ia=i.createElement('input',{type:'hidden',name:this.props.name,value:this.state.value});return (i.createElement(h,t({},this.props,{alignv:'middle',name:null}),i.createElement(j,{ref:'popover',menu:z,alignh:this.props.alignh,layerBehaviors:ga,behaviors:ha,disabled:this.props.disabled},fa),ia));},showMenu:function(){!this.isMounted()?q(0):undefined;this.refs.popover.showPopover();},hideMenu:function(){!this.isMounted()?q(0):undefined;this.refs.popover.hidePopover();}});f.exports=w;},null);
__d('XUISelectorButton.react',['React','XUIPopoverButton.react','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=Object.assign||function(m){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var p in o)if(Object.prototype.hasOwnProperty.call(o,p))m[p]=o[p];}return m;},l=h.createClass({displayName:'XUISelectorButton',render:function(){!!this.props.theme?j(0):undefined;return (h.createElement(i,k({},this.props,{theme:'dark'})));}});f.exports=l;},null);
__d('XUISelector.react',['AbstractSelector.react','ContextualLayerPositionClassOnContext','React','ReactChildren','ReactXUIMenu','XUISelectorButton.react','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=Object.assign||function(t){for(var u=1;u<arguments.length;u++){var v=arguments[u];for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w))t[w]=v[w];}return t;},p=l.SelectableMenu,q=l.SelectableItem,r=j.PropTypes,s=j.createClass({displayName:'ReactXUISelector',propTypes:{layerBehaviors:r.array,maxheight:r.number,multiple:r.bool,disabled:r.bool,haschevron:r.bool,maxwidth:r.number,size:r.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:r.bool,use:r.oneOf(['default','special','confirm'])},statics:{getButtonSize:function(t){return t.size||'medium';}},getDefaultProps:function(){return {haschevron:true,layerBehaviors:[],multiple:false};},render:function(){var t,u=[];k.forEach(this.props.children,function(w){if(w)u.push(w);});if(u[0]&&u[0].type===m){t=u[0];u=u.slice(1);}else t=j.createElement(m,{haschevron:this.props.haschevron,disabled:this.props.disabled,use:this.props.use,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth});var v={button:t,menu:j.createElement(p,{maxheight:this.props.maxheight,multiple:this.props.multiple}),layerBehaviors:this.props.layerBehaviors.concat([i])};return (j.createElement(h,o({},this.props,{ref:'abstractSelector',config:v}),u));},showMenu:function(){!this.isMounted()?n(0):undefined;this.refs.abstractSelector.showMenu();},hideMenu:function(){!this.isMounted()?n(0):undefined;this.refs.abstractSelector.hideMenu();}});s.Option=q;f.exports=s;},null);
__d('ActorSelector.react',['ActorSelectorPlaceholder.react','BizSiteIdentifier.brands','BootloadedComponent.react','Bootloader','CurrentUser','DOM','DOMScroll','Event','Focus','Image.react','JSResource','LayerFadeOnHide','LayerFadeOnShow','ModulePerformanceGating','React','ReactLayeredComponentMixin','ShortProfiles','TooltipData','XUIContextualDialog.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIMenuSeparator.react','XUISelector.react','XUISpinner.react','cx','fbt','getObjectValues','goURI','ix','joinClasses','mapObject','tidyEvent','BrandsAppConfig'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na){if(c.__markCompiled)c.__markCompiled();var oa=ea.Option,pa=c('BrandsAppConfig').gk;if(!u.bootload_page_voice_dropdown)k.loadModules(["PageVoiceDropdownSelector.react"],function(){});var qa=v.PropTypes,ra=32,sa=195,ta=500,ua=175,va=16,wa=v.createClass({displayName:'ActorSelector',mixins:[w],propTypes:{actorIDs:qa.array.isRequired,actorPermissions:qa.object,coverEnabled:qa.bool.isRequired,focusOnInit:qa.bool,loading:qa.bool,nuxBody:qa.node,nuxEnabledCovered:qa.bool,nuxEnabledUncovered:qa.bool,nuxHoverContext:qa.object,onChange:qa.func.isRequired,onCompleteNux:qa.func,selectedActorID:qa.string,settingsURI:qa.string,showName:qa.bool,showNameMaxWidth:qa.number,suppressed:qa.bool,tooltipConstructor:qa.func,tooltipConstructorCovered:qa.func},getDefaultProps:function(){return {suppressed:true};},getInitialState:function(){return {actorData:{},clicked:false,nuxShown:false};},componentWillMount:function(){this._fetchActorData();},render:function(){var xa=pa.business_identity_page_voice_selector;if(!this.props.selectedActorID||!this.state.actorData[this.props.selectedActorID])return v.createElement(h,{focusOnInit:this.props.focusOnInit});var ya=this._renderSelectorOptions();if(ya.length<1)return v.createElement('div',null);if(xa){return this._renderNewComponent();}else return this._renderOldComponent(ya);},_renderOldComponent:function(xa){var ya=this._isCovered();return (v.createElement('span',{className:la("_6vh",this.props.className)},v.createElement(fa,{className:(!this.props.loading?"hidden_elem":'')+(!this.props.suppressed?' '+"_3-8_":'')}),v.createElement(ea,{haschevron:!ya,className:"_6vi",disabled:this.props.loading,maxheight:sa,maxwidth:ya?va:this.props.showName?this.props.showNameMaxWidth:ra,onChange:this.props.onChange,onClick:this._onClickSelector,ref:'selector',suppressed:this.props.suppressed,value:this.props.selectedActorID},xa)));},_renderNewComponent:function(){return (v.createElement('span',{className:la("_6vh",this.props.className)},v.createElement(fa,{className:(!this.props.loading?"hidden_elem":'')+(' '+"_3-8_")}),v.createElement('span',{ref:'selector'},v.createElement(j,{bootloadPlaceholder:v.createElement(h,{focusOnInit:this.props.focusOnInit}),bootloadLoader:r('PageVoiceDropdownSelector.react'),covered:this._isCovered(),focusOnInit:this.props.focusOnInit,permissions:this.props.actorPermissions,pages:this.state.actorData,onChange:this.props.onChange,onClick:this._onClickSelector,selectedActorID:this.props.selectedActorID,searchBarVisible:true,showBusinessPages:false,showPageName:this.props.showName,showNameMaxWidth:this.props.showNameMaxWidth,showPersonalPagesInRoot:!i.isBizSite(),suppressed:this.props.suppressed,user:ia(this.state.actorData)[0]}))));},renderLayers:function(){if(!this.refs.selector)return null;var xa=null;if(this.props.settingsURI)xa=v.createElement('a',{onClick:this._onClickSettings,style:{verticalAlign:'middle'}},ha._("Post Attribution Settings"));if(this.state.nuxShown)n.ensureVisible(v.findDOMNode(this.refs.selector),null,ua);return {nux:v.createElement(z,{alignment:'right',behaviors:{LayerFadeOnHide:s,LayerFadeOnShow:t},contextRef:(function(){return this.refs.selector;}).bind(this),hasActionableContext:true,offsetY:-8,position:'below',shown:this.state.nuxShown,width:z.WIDTH.NORMAL},v.createElement(aa,null,this.props.nuxBody),v.createElement(ba,{leftContent:xa},v.createElement(ca,{action:'button',use:'confirm',onClick:this._onCompleteNux})))};},_renderSelectorOptions:function(){var xa=[],ya=[];this.props.actorIDs.map((function(db){if(this._isBusinessManagedActor(db)){ya.push(db);}else xa.push(db);}).bind(this));var za=xa.map(this._renderActorOption);if(ya&&ya.length>0){var ab=[],bb=v.createElement(q,{src:ka('/images/bizsite/busmgr_bookmark_icon_16px.png'),alt:''}),cb=this._groupActorIDsByBusinessID(ya);ma(cb,(function(db,eb){ab.push(v.createElement(da,{key:'separator_'+eb}));var fb=ia(cb[eb])[0],gb=fb?this.state.actorData[fb].businessName:eb;ab.push(v.createElement(oa,{disabled:true,icon:bb,key:'option_'+eb},gb));ma(db,(function(hb){ab.push(this._renderActorOption(hb));}).bind(this));}).bind(this));}za=za.concat(ab);return za;},_renderActorOption:function(xa){var ya=this._isCovered(),za=this.state.actorData[xa];if(!za)return;var ab=!!za.businessID,bb=v.createElement(q,{className:"_6vg",height:va,src:ya&&l.getID()===xa?ka('images/pages/voice/flag.png'):za.thumbSrc,width:va,alt:''});return (v.createElement(oa,{className:ab?"plm":'',icon:bb,key:'actor_'+xa,value:xa},za.name));},componentDidMount:function(){this._setTooltip();if(this.props.focusOnInit)this._focusSelector();if(this._canShowNux())if(this.props.nuxHoverContext){var xa=na(o.listen(this.props.nuxHoverContext,'mouseenter',(function(){var ya=setTimeout((function(){xa.remove();if(this._canShowNux())this.setState({nuxShown:true});}).bind(this),ta),za=na(o.listen(this.props.nuxHoverContext,'mouseleave',function(){clearTimeout(ya);za.remove();}));}).bind(this)));}else this.setState({nuxShown:true});},componentDidUpdate:function(xa){if(this.state.focusOnUpdate){this._focusSelector();this.setState({focusOnUpdate:false});}if(this.props.actorIDs.toString()!==xa.actorIDs.toString())this._fetchActorData();this._setTooltip();},_focusSelector:function(){var xa=this.refs.selector&&v.findDOMNode(this.refs.selector);if(!xa)return;var ya=m.scry(xa,'a').pop();p.set(ya);},_canShowNux:function(){return this.props.nuxEnabledCovered&&this._isCovered()||this.props.nuxEnabledUncovered&&!this._isCovered();},_fetchActorData:function(){x.getMulti(this.props.actorIDs,(function(xa){this.setState({actorData:xa,focusOnUpdate:this.props.focusOnInit});}).bind(this));},_isCovered:function(){return (this.props.coverEnabled&&!this.state.clicked&&l.getID()===this.props.selectedActorID);},_onClickSelector:function(){this.setState({clicked:true});if(this.state.nuxShown)this._onCompleteNux();},_onClickSettings:function(){this._onCompleteNux();ja(this.props.settingsURI);},_onCompleteNux:function(){this.setState({nuxShown:false});if(this.props.onCompleteNux)this.props.onCompleteNux({isCovered:this._isCovered()});},_setTooltip:function(){if(!this.refs.selector)return;var xa=this.state.actorData[this.props.selectedActorID];if(!xa)return;var ya=this._isCovered()&&this.props.tooltipConstructorCovered?this.props.tooltipConstructorCovered:this.props.tooltipConstructor;if(!ya)return;y.set(v.findDOMNode(this.refs.selector),ya(xa.name),'above','right');},_isBusinessManagedActor:function(xa){return this.state.actorData[xa]&&this.state.actorData[xa].businessID;},_groupActorIDsByBusinessID:function(xa){var ya={};xa.forEach((function(za,ab){var bb=this.state.actorData[ab]?this.state.actorData[ab].businessID:null;if(bb){if(!za[bb])za[bb]={};za[bb][ab]=ab;}}).bind(this,ya));return ya;}});f.exports=wa;},null);
__d("XActorSelectorNuxSeenWriteController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/actor_selector\/nux\/mark_seen\/",{nux_type:{type:"Enum",required:true,enumType:1}});},null,{});
__d('UFIActorSelector.react',['ActorSelector.react','ActorSelectorNuxTypes','Arbiter','AsyncRequest','Parent','React','SubscriptionsHandler','UFICentralUpdates','UFIFeedbackTargets','UFIUserActions','XActorSelectorNuxSeenWriteController','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=m.PropTypes,u='ufi_actor_selector_nux_disabled_event',v=m.createClass({displayName:'UFIActorSelector',propTypes:{actorIDs:t.array.isRequired,coverEnabled:t.bool.isRequired,ftEntIdentifier:t.string.isRequired,isTimeline:t.bool,nuxEnabledCovered:t.bool,nuxEnabledUncovered:t.bool,nuxHoverContext:t.object,settingsURI:t.string},getInitialState:function(){var w=l.byClass(this.props.nuxHoverContext,'timelineUnitContainer');return {loading:false,nuxEnabledCovered:this.props.nuxEnabledCovered,nuxEnabledUncovered:this.props.nuxEnabledUncovered,nuxHoverContext:w?w:this.props.nuxHoverContext,selectedActorID:null};},render:function(){return (m.createElement(h,{actorIDs:this.props.actorIDs,coverEnabled:this.props.coverEnabled,focusOnInit:this.props.focusOnInit,loading:this.state.loading,nuxBody:this._getNUXBody(),nuxEnabledCovered:this.state.nuxEnabledCovered,nuxEnabledUncovered:this.state.nuxEnabledUncovered,nuxHoverContext:this.state.nuxHoverContext,onChange:this._onChange,onCompleteNux:this._onCompleteNux,selectedActorID:this.state.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this._getTooltipForActorName,tooltipConstructorCovered:this._getCoveredTooltip}));},componentDidMount:function(){this._updateSelectedActorIDFromFeedbackTarget();this._subscriptions=new n();this._subscriptions.addSubscriptions(o.subscribe('feedback-updated',(function(w,x){if(this.props.ftEntIdentifier in x.updates)this._updateSelectedActorIDFromFeedbackTarget();}).bind(this)),j.subscribe(u,(function(){this.setState({nuxEnabledCovered:false,nuxEnabledUncovered:false});}).bind(this)));},componentWillUnmount:function(){this._subscriptions.release();},_updateSelectedActorIDFromFeedbackTarget:function(){p.getFeedbackTarget(this.props.ftEntIdentifier,(function(w){this.setState({loading:false,selectedActorID:w.actorforpost});}).bind(this));},_getNUXBody:function(){return s._("Choose whether to like and comment as yourself or as one of the Pages you manage.");},_getTooltipForActorName:function(w){return s._("Liking and commenting as {actorName}",[s.param('actorName',w)]);},_getCoveredTooltip:function(){return s._("Like or comment as one of the Pages you manage.");},_onChange:function(w){this.setState({loading:true});q.changeActor(this.props.ftEntIdentifier,w.value);},_onCompleteNux:function(w){var x=w.isCovered,y=null;if(this.props.isTimeline){if(x){y=i.UFI_TIMELINE_COVERED;}else y=i.UFI_TIMELINE;}else y=i.UFI;var z=r.getURIBuilder().setEnum('nux_type',y).getURI();new k().setURI(z).send();j.inform(u);}});f.exports=v;},null);
__d('XUIDialogCancelButton.react',['React','XUIDialogButton.react','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=Object.assign||function(m){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var p in o)if(Object.prototype.hasOwnProperty.call(o,p))m[p]=o[p];}return m;},l=h.createClass({displayName:'XUIDialogCancelButton',render:function(){return (h.createElement(i,k({},this.props,{action:'cancel',label:j._("Cancel")})));}});f.exports=l;},null);