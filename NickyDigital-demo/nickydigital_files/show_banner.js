(function(){

	function m(b){return b!=null?'"'+b+'"':'""';}
	function c(b,a){if(a){window.s6_win_url+="&"+b+"="+a;}}
	function E(b){if(typeof encodeURIComponent=="function"){return encodeURIComponent(b)}else{return escape(b)}}
	function f(b,a){if(a){c(b,E(a))}}

	function P(w,d,s){
		d.write('<iframe id="s6_win_frame1" name="s6_win_frame" width='+m(w.s6_win_width)+' height='+m(w.s6_win_height)+' frameborder='+m(w.s6_win_frameborder)+' src='+m(s)+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">');
		d.write("</iframe>");
	}

	function D(w){
		var n=null;
		w.s6_account=n;
		w.s6_post=n;
		w.s6_channel=n;
		w.s6_format=n;
		w.s6_user=n;
		w.s6_studio=n;
		w.s6_collection=n;
		w.s6_curator=n;
		w.s6_page_url=n;
		w.s6_win_width=n;
		w.s6_win_height=n;
		w.s6_target=n;
	}


	function A(){
		var w=window,d=document,g=new Date,e=null,t=g.getTime();
		var domain = (w.s6_dev==1) ? 'www.society6.dev' : 'society6.com' ;
		w.s6_win_url='//'+domain+'/pubnet/win?';
		c("account",w.s6_account);
		c("curator",w.s6_curator);
		c("channel",w.s6_channel);
		c("format",w.s6_format);
		c("width",w.s6_win_width);
		c("height",w.s6_win_height);
		c("target",w.s6_target);
		c("user",w.s6_user);
		c("studio",w.s6_studio);
		c("collection",w.s6_collection);
		c("r",Math.round(Math.random()*1000000));
		P(w,d,w.s6_win_url);
		D(w);
	}

	function E(){
		var w=window,d=document,l=d.location,g=d.referrer,e=null;
		if(w.s6_win_frameborder==e){w.s6_win_frameborder=0;}
		if(w.s6_page_url==e){w.s6_page_url=g}
		if(w.s6_dev==e){w.s6_dev=0}
		if(w.s6_account==e){w.s6_account=''}
		if(w.s6_format==e){w.s6_format='300x250'}
		if(w.s6_target==e){w.s6_target='self'}
		var size = w.s6_format.split("x");
		w.s6_win_width = size[0];
		w.s6_win_height = size[1];
	}

E();
A();
})
()

