//  Copyright (c) 2000-2015 ZEDO Inc. All Rights Reserved.
var o16="http://z1.zedo.com/asw";var c13=new function(){var o3=this;
o3.p5=false;
var zzDtctRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7"},{"name":"ShockwaveFlash.ShockwaveFlash.6"},{"name":"ShockwaveFlash.ShockwaveFlash"}];var zzgetXObj=function(name){var z19=-1;
try{
z19=new ActiveXObject(name);
}
catch(err)
{
z19={
zzactiveXError:true};
}
return z19;
};
o3.c13=function(){
if(navigator.plugins&&navigator.plugins.length>0){
var d1='application/x-shockwave-flash';var p6=navigator.mimeTypes;
if(p6&&p6[d1]&&p6[d1].enabledPlugin&&p6[d1].enabledPlugin.description){
o3.p5=true;
}
}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){
var z45=-1;
for(var i=0;i<zzDtctRules.length&&z45==-1;i++){
try{
var z19=zzgetXObj(zzDtctRules[i].name);
if((typeof(z19)!=='undefined')&&!z19.zzactiveXError){
o3.p5=true;
return;
}
}catch(err){
o3.p5=false;
}}}
}();
};
get_flash_bit=function(){
var n4=navigator.userAgent.toLowerCase();var a21=(n4.indexOf('mac')!=-1);var r21=parseInt(navigator.appVersion);
var w22=(!a21&&(n4.indexOf('opera')==-1)&&(n4.indexOf('msie')!=-1)&&(r21>=4)&&(n4.indexOf('webtv')==-1
)&&(n4.indexOf('msie 4')==-1));
var q19=navigator.javaEnabled();var q4=1;
if(q19){q4 |=4;}
if(c13.p5){q4 |=8;}
if(w22){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
q4 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
q4 |=16;
}}}
return q4;
};
var n14=get_flash_bit();
if(n14==null){
n14='';
}

if(typeof zflag_vals!='undefined'&&typeof zflag_vals.c!='undefined'){
var zflag_cid=zflag_vals.c;}
if(typeof zflag_vals!='undefined'&&typeof zflag_vals.s!='undefined'){
var zflag_sid=zflag_vals.s;}
var p11=0;var r0='';var q7=0;var o49;var i47;var c48;var q48;var i48;var v47;var v48='';var q12='0';var z12=0;var q30='';var zd_$='';var p5=0;var q26='';var i30='';
var p37="";var n34='';var w36='';var n18=new Array();var a13='';var q34=0;var a30='';var d11="";var t30="";var r30="";var a39="";var o17="";var d30="";var z25="";var r31="";var v24=new Array();
var i38=new Array();var c22=new Array();var d33=0;var t19="";var y19="";var q36="";
if(typeof zflag_ct!='undefined'){
q36=encodeURI(zflag_ct);
zflag_ct="";
}
if(typeof zflag_nid!='undefined'){
p11=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_charset!='undefined'){
r0=zflag_charset;
zflag_charset="";
}else{
r0="UTF-8";
}
if(typeof zflag_sid!='undefined'){
q7=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'&&zflag_pbnw>0){
d11+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
d11+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
d11+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
if(zflag_pbch.indexOf("/")!=-1){
var n46=zflag_pbch.substr(0,zflag_pbch.indexOf("/"));
d11+="&pc="+n46;
}
else{
d11+="&pc="+zflag_pbch;
}
zflag_pbch="0";
}
if(typeof zflag_pbr!='undefined'){
d11+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_pbsid!='undefined'){
d11+="&ps="+zflag_pbsid;
}
if(typeof zflag_tmy!='undefined'){
t30+="&tmy="+zflag_tmy;
zflag_tmy=0;
}
if(typeof zflag_cid!='undefined'){
/*if(zflag_cid.indexOf("/")>-1){
q12=zflag_cid.substr(0,zflag_cid.indexOf("/"));
}else{
q12=zflag_cid;
}*/
q12=zflag_cid;
if(q12<0||q12>999999){
q12=0;
}}
if(typeof zflag_chanlimits!='undefined'){
q34=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
z12=zflag_sz;
if(z12<0||z12>95){
z12=0;
}
zflag_sz=0;
}
if(typeof zflag_msize!='undefined'){
zd_msz=F54(zflag_msize,screen.width,screen.height);
if(typeof zd_msz!='undefined'){
z12=zd_msz;
}
zflag_msize="";
}
if(typeof zflag_alter_sz!='undefined'){
o17=zflag_alter_sz;
if(o17<0||o17>95){
o17=0;
}
zflag_alter_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
q30=zflag_kw;
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
q26="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
p37="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=encodeURIComponent(zflag_click);
i30='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
a30='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
n34='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
w36=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
a13='&ck='+zflag_ck;
zflag_ck=0;
}
if(typeof zflag_message_transport!='undefined'){
r30=zflag_message_transport;
zflag_message_transport=0;
}
if(typeof zflag_append_message!='undefined'){
a39=zflag_append_message;
zflag_append_message=0;
}
if(typeof zflag_multi_param!='undefined'){
d30="&mp="+zflag_multi_param;
zflag_multi_param="";
}
if(typeof zflag_smooth!='undefined'){
z25+="&ssm="+zflag_smooth;
}
if(typeof zflag_slide_speed!='undefined'){
z25+="&ssp="+zflag_slide_speed;
}
if(typeof zflag_slider_close_text!='undefined'){
z25+="&sct="+zflag_slider_close_text;
}
if(typeof zflag_page!='undefined'&&zflag_page!='[INSERT_PAGE_URL]'){
t19=zflag_page;
zflag_page='';
}
if(typeof zflag_ref!='undefined'&&zflag_ref!='[INSERT_REFERER_URL]'){
y19=zflag_ref;
zflag_ref='';
}
if(typeof zd_pg_id=='undefined'){
zd_pg_id=(new Date).getTime();
}
var n18="d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df".split(",");
function U14(){
var w19=new Array();
for(var i=0;i<n18.length;i++){
w19[i]=n18[i].substring(1);
}
return w19;
}
function B12(){
var c25=n18;var r6=new Array();var v13=new RegExp(",","g");
for(var i=0;i<c25.length;i++){
if(eval('typeof(zflag_'+n18[i]+')!="undefined"')){
r6[i]=eval('zflag_'+n18[i]);
if(r6[i]!=""){
r6[i]=r6[i].replace(v13,"Z");
}}}
return r6;
}
i38=U14();
c22=B12();
for(var i=0;i<c22.length;i++){
if(c22[i]!=""&&typeof c22[i]!='undefined'){
v24[v24.length]=i38[i]+":"+c22[i];
}}
if(v24.length!=0){
r31='&dm='+v24;
}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=q7;var zzPbNId=i47;var zzPbEId=c48;var zzPbAId=q48;var zzPbCId=i48;var zzPbGeoLvl=v47;var zzPbk=v48;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=o49;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
if(n14<0||n14>31){
n14=1;
}
var z11=new Array();
function B0(zp_label){
if(!z11[zp_label]){
var r35=document.cookie;var c7=new Array();var n15=new Array();
c7=r35.split(';');
var d34=(c7!=null)?c7.length:0;
for(var i=0;i<d34;i++){
c7[i]=c7[i].replace(/^\s/,'');
n15=c7[i].split('=');
z11[n15[0]]=n15[1];
}}
if(z11[zp_label]){
return z11[zp_label];
}else{
return '';
}}
function B61(){
var i43=new Date();var n49=new Date(i43.getFullYear(),0,1,0,0,0,0);var i45=new Date(i43.getFullYear(),6,1,0,0,0,0);var o48=Math.max(n49.getTimezoneOffset(),i45.getTimezoneOffset());
return-o48/60;
}
d33=B61();
function F23(isJSTag){
var z31='';
try{
if(isJSTag){
z31=(typeof(location.href)=='undefined'?"":encodeURIComponent(location.href.split("?")[0]));
}else{
z31=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(err){}
return z31;
}
function U20(isJSTag){
var a38='';
try{
if(isJSTag){
a38=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(e){}
return a38;
}
function F20(tag_dimid,tag_height,tag_width){
this.tag_dimid=tag_dimid;
this.tag_height=tag_height;
this.tag_width=tag_width;
}
function B19(r2,scrWidth,scrHeight){
if(typeof r2=='undefined'||r2.length==0){
return;
}
r2.sort(B58);
r2.sort(U29);
var r47=r2[r2.length-1];
for(i=0;i<r2.length;i++){
if(r2[i].tag_width<=scrWidth&&r2[i].tag_height<=scrHeight){
return r2[i].tag_dimid;
}}
for(i=0;i<r2.length;i++){
if(r2[i].tag_width<=scrWidth){
return r2[i].tag_dimid;
}}
r2.reverse();
r2.sort(F51);
for(i=0;i<r2.length;i++){
if(r2[i].tag_height<=scrHeight){
return r2[i].tag_dimid;
}}
return r47.tag_dimid;
}
function U29(a,b){
if(a.tag_height>b.tag_height&&a.tag_width==b.tag_width){
return-1;
}else if(a.tag_height<b.tag_height&&a.tag_width==b.tag_width){
return 1;
}else{
return 0;
}}
function B58(a,b){
if(a.tag_width>b.tag_width){
return-1;
}else if(a.tag_width<b.tag_width){
return 1;
}else{
return 0;
}}
function F51(a,b){
if(a.tag_height>b.tag_height){
return-1;
}else if(a.tag_height<b.tag_height){
return 1;
}else{
return 0;
}}
function F54(msize,scrWidth,scrHeight){
if(typeof msize=='undefined'){
return;
}
var arr=msize.trim().split(",");var r2=new Array();
for(i=0;i<arr.length;i++){
if(null!=arr[i].trim().match(/^\d+x\d+:\d+$/)){
r2.push(B42(arr[i].trim()));
}}
return B19(r2,scrWidth,scrHeight);
}
function B42(val){
var arr=val.split(":");var n41=arr[0].split("x");
return new F20(arr[1],n41[1],n41[0]);
}

z0=o16+'/fm.js?c='+q12+'&a='+q34+'&f='+w36+'&n='+p11
+'&r='+n14+'&d='+z12+'&adm='+o17+'&q='+q30+'&$='+zd_$+d11+t30+'&s='+q7+q26+p37+i30+n34+a30+
'&ct='+q36+r31+'&z='+Math.random()+'&tt=0'+d30+'&tz='+d33+'&pu='+((t19!='')?encodeURI(t19.split("?")[0]):F23(true))+
'&ru='+((y19!='')?encodeURI(y19.split("?")[0]):U20(true))+'&pi='+zd_pg_id+'&ce='+r0;
z0='<scr'+'ipt language="javascript" src="'+z0+'" charset='+r0+'></scr'+'ipt>';
var e20=B0("ZEDOIDA");
if(!(e20=="OPT_OUT"&&z12==15)){
document.write(z0);
}