jQuery(document).ready(function(a){function b(a){if("undefined"!=typeof mashsb&&1==mashsb.round_shares){if(a>1e6)return shares=Math.round(a/1e6*10)/10+"M",shares;if(a>1e3)return shares=Math.round(a/1e3*10)/10+"k",shares}return a.toFixed(0)}!function(a,b){a.fn.nearest=function(c){function d(b){f=f?f.add(b):a(b)}var e,f,g,h,i,j=b.querySelectorAll;return this.each(function(){e=this,a.each(c.split(","),function(){if(h=a.trim(this),h.indexOf("#"))for(i=e.parentNode;i;){if(g=j?i.querySelectorAll(h):a(i).find(h),g.length){d(g);break}i=i.parentNode}else d(j?b.querySelectorAll(h):a(h))})}),f||a()}}(jQuery,document),a(".onoffswitch").click(function(){a(".onoffswitch").hide(),a(".secondary-shares").show(),a(".onoffswitch2").show()}),a(".onoffswitch2").click(function(){a(".onoffswitch").show(),a(".secondary-shares").hide()}),"undefined"==typeof lashare_fb&&"undefined"!=typeof mashsb&&a(".mashicon-facebook").click(function(b){winWidth=520,winHeight=550;var c=screen.height/2-winHeight/2,d=screen.width/2-winWidth/2,e=a(this).attr("href");return window.open(e,"sharer","top="+c+",left="+d+",toolbar=0,status=0,width="+winWidth+",height="+winHeight),b.preventDefault(b),!1}),"undefined"!=typeof mashsb&&(shareurl=mashsb.share_url,"undefined"!=typeof mashsu&&(shareurl=0!=mashsu.shorturl?mashsu.shorturl:mashsb.share_url),a(".mashicon-twitter").click(function(b){winWidth=520,winHeight=350;var c=screen.height/2-winHeight/2,d=screen.width/2-winWidth/2,e=a(this).attr("href");return"1"===mashsb.twitter_popup&&window.open(e,"sharer","top="+c+",left="+d+",toolbar=0,status=0,width="+winWidth+",height="+winHeight),b.preventDefault(b),!1})),"undefined"!=typeof mashsb&&"content"===mashsb.subscribe&&(jQuery(".mashicon-subscribe").not(".trigger_active").nearest(".mashsb-toggle-container").hide(),jQuery(".mashicon-subscribe").click(function(){var a=jQuery(this);return a.hasClass("trigger_active")?(jQuery(a).nearest(".mashsb-toggle-container").slideToggle("fast"),a.removeClass("trigger_active")):(jQuery(".trigger_active").nearest(".mashsb-toggle-container").slideToggle("slow"),jQuery(".trigger_active").removeClass("trigger_active"),jQuery(a).nearest(".mashsb-toggle-container").slideToggle("fast"),a.addClass("trigger_active")),!1})),"undefined"!=typeof mashsb&&"link"===mashsb.subscribe&&a(".mashicon-subscribe").click(function(){var b=mashsb.subscribe_url;a(this).attr("href",b)}),function(a){a.fn.countTo=function(b){return b=b||{},a(this).each(function(){function c(){k+=g,j++,d(k),"function"==typeof e.onUpdate&&e.onUpdate.call(h,k),j>=f&&(i.removeData("countTo"),clearInterval(l.interval),k=e.to,"function"==typeof e.onComplete&&e.onComplete.call(h,k))}function d(a){var b=e.formatter.call(h,a,e);i.text(b)}var e=a.extend({},a.fn.countTo.defaults,{from:a(this).data("from"),to:a(this).data("to"),speed:a(this).data("speed"),refreshInterval:a(this).data("refresh-interval"),decimals:a(this).data("decimals")},b),f=Math.ceil(e.speed/e.refreshInterval),g=(e.to-e.from)/f,h=this,i=a(this),j=0,k=e.from,l=i.data("countTo")||{};i.data("countTo",l),l.interval&&clearInterval(l.interval),l.interval=setInterval(c,e.refreshInterval),d(k)})},a.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null}}(jQuery),"undefined"!=typeof mashsb&&1==mashsb.animate_shares&&a(".mashsbcount").length&&a(".mashsbcount").countTo({from:0,to:mashsb.shares,speed:1e3,refreshInterval:100})});