var st_width=screen.width;
var st_height=screen.height;
var st_referer=""+document.referrer;
try{st_referer=""+parent.document.referrer}catch(ex){st_referer=""+document.referrer}
st_referer=st_referer.substring(0,600);
st_referer=escape(st_referer);

st_url=""+document.location;
st_url=st_url.substring(0,300);
st_url=escape(st_url);

var st_strout = "";

if(__st_tracking_url) {

	st_strout +="<span class=\"stats\" style=\"display:none;\">";
	st_strout += "<img src=\""+__st_tracking_url+"/stat/counter.php?article_id="+__st_article_id;
	st_strout += "\" alt=\"STAT\" border=\"0\"  style=\"display:none;\"></span>";

	document.writeln(st_strout);

}
