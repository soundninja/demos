/*!
 * Copyright 2006 - 2015 TubePress LLC (http://tubepress.com).
 * This file is part of TubePress (http://tubepress.com).
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
;var tubePressDomInjector,tubePressBeacon,TubePress=(function(h,g){var s="tubepress",m="ajax",c="base",j="css",u="gallery",d="head",p="http",k="js",x="php",D="script",e="src",i="sys",l="text",r="urls",b="web",n=".",f="/",C="",t=g.location,q=g.document,v=true,w=false,a=(function(){var G=function(L){return typeof L!=="undefined"},I=function(M){M=M.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var L="[\\?&]"+M+"=([^&#]*)",O=new RegExp(L),N=O.exec(t.search);return N===null?C:decodeURIComponent(N[1].replace(/\+/g," "))},H=function(L){var M=parseInt(L,10);return isNaN(M)?0:M},F=function(O,N,L){if(N()===v){O();return}var M=function(){F(O,N,L)};setTimeout(M,L)},K=function(O){if(!O){return w}var L=Array.prototype.slice.call(arguments),N=L.shift(),M;for(M=0;M<L.length;M+=1){if(!N.hasOwnProperty(L[M])){return w}N=N[L[M]]}return true},J=function(M,N){var L;if(N){L=/^\/+/}else{L=/\/+$/}return M.replace(L,C)};return{isDefined:G,getParameterByName:I,parseIntOrZero:H,callWhenTrue:F,hasOwnNestedProperty:K,trimSlashes:J}}()),E=(function(){var H=t.search.indexOf(s+"_debug=true")!==-1,K=g.console,F=a.isDefined(K),G=function(){return H&&F},J=function(L){K.log(s+": "+L)},I=function(L){K.dir(L)};return{on:G,log:J,dir:I}}()),z=(function(){var G=w,J="usr",F,I=function(){return g.TubePressJsConfig},L=function(){var O=I(),N,M,P;if(!G){if(a.hasOwnNestedProperty(O,r,c)){F=a.trimSlashes(O[r][c],w)}else{N=q.getElementsByTagName(D);M=0;for(M;M<N.length;M+=1){P=N[M][e];if(P.indexOf(f+s+n+k)!==-1){F=a.trimSlashes(P.substr(0,P.lastIndexOf(f)).split("?")[0].replace(b+f+k,C),w);break}}}G=v}return F},H=function(){var N=m+"Endpoint",M=I();if(a.hasOwnNestedProperty(M,r,m)){return M[r][m]}return L()+f+b+f+x+f+N+n+x},K=function(){var M=I();if(a.hasOwnNestedProperty(M,r,J)){return M[r][J]}return L()+f+s+"-content"};return{getBaseUrl:L,getAjaxEndpointUrl:H,getUserContentUrl:K}}()),B=(function(){var G=h({}),F=function(){G.on.apply(G,arguments)},I=function(){G.off.apply(G,arguments)},H=function(){if(E.on()){var J=arguments;E.log("firing event "+J[0]);if(J.length>1){E.dir(J[1])}}G.trigger.apply(G,arguments)};return{subscribe:F,unsubscribe:I,publish:H}}()),o=(function(){var K=[],I=function(Q){return K[Q]===v},F=function(R,Q){if(R.indexOf(f)===0||R.indexOf(p)===0){return R}var S;if(Q){S=z.getBaseUrl()}else{S=z.getUserContentUrl()}return S+f+a.trimSlashes(R,v)},O=function(R,Q){if(E.on()){E.log("Injecting "+Q+": "+R)}},P=function(Q){q.getElementsByTagName(d)[0].appendChild(Q)},N=function(S,Q){Q=a.isDefined(Q)?Q:v;S=F(S,Q);if(I(S)){return}K[S]=v;var R=q.createElement("link");R.rel="stylesheet";R.type=l+f+j;R.href=S;O(S,j);P(R)},G=function(S,R){R=a.isDefined(R)?R:v;S=F(S,R);if(I(S)){return}K[S]=v;O(S,k);var Q=q.createElement(D);Q.type=l+"/java"+D;Q[e]=S;Q.async=v;q.getElementsByTagName(d)[0].appendChild(Q)},H=function(R){var Q=g.TubePressJsConfig;if(a.hasOwnNestedProperty(Q,r,k,i,R)){G(Q[r][k][i][R])}else{G(b+f+k+f+R+n+k)}},M=function(){H(u)},L=function(){H("playerApi")},J=function(){H(m+"Search")};return{loadJs:G,loadCss:N,loadGalleryJs:M,loadPlayerApiJs:L,loadAjaxSearchJs:J}}()),y=(function(){var F=function(I,J){var H=E.on(),L,G=g[I],K=function(M){var O=M[0],N=M.slice(1);J[O].apply(this,N)};if(a.isDefined(G)&&h.isArray(G)){L=G.length;if(H){E.log("Running "+L+" queue items for "+I)}G.reverse();while(G.length){K(G.pop())}}if(H){E.log(I+" is now connected")}g[I]={push:K}};return{processQueueCalls:F}}()),A=(function(){var F=function(I,J){h(I).fadeTo(0,J)},H=function(I){F(I,0.3)},G=function(I){F(I,1)};return{applyLoadingStyle:H,removeLoadingStyle:G}}());(function(){var G,H=function(){B.publish(s+".window.resize")},F=function(){clearTimeout(G);G=setTimeout(H,150)},I=function(){h(g).resize(F)};h(I)}());(function(){var F="tubePress";y.processQueueCalls(F+"DomInjector",o);y.processQueueCalls(F+"Beacon",B)}());return{Ajax:{LoadStyler:A},AsyncUtil:y,Beacon:B,DomInjector:o,Environment:z,Lang:{Utils:a},Logger:E,Vendors:{jQuery:h}}}(jQuery,window));