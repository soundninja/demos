/*!CK:1128996814!*//*1444754337,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["flUUQ"]); }

__d('DraftRemovableWord',['TokenizeUtil'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h.getPunctuation(),j='[\'\u2018\u2019]',k='\\s|(?![_])'+i,l='^'+'(?:'+k+')*'+'(?:'+j+'|(?!'+k+').)*'+'(?:(?!'+k+').)',m=new RegExp(l),n='(?:(?!'+k+').)'+'(?:'+j+'|(?!'+k+').)*'+'(?:'+k+')*'+'$',o=new RegExp(n);function p(r,s){var t=s?o.exec(r):m.exec(r);return t?t[0]:r;}var q={getBackward:function(r){return p(r,true);},getForward:function(r){return p(r,false);}};f.exports=q;},null);