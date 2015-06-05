document.write(unescape("%3Cscript src=' " + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js'  %3E%3C/script%3E"));

var Namespace_VideoReporting_ComScore = function() {

return {

logVideoEvent_ComScore : function(p_eventType, p_title, p_pos, p_clipId, p_clipAdTag, p_hostPage, p_affiliateName, p_OwnerAffiliateNo, p_isAd, p_ciid, p_refererUrl, p_baseUrl, p_reportingKeywords, p_uri, p_len, p_pctViewed, p_location, p_contentSource, p_keywords, p_playerType, p_isExpressReport, p_PlayerName, p_PlayerId, p_SiteId)
{

//-1 coming from windows media beacons and flash players will always send 0
if (p_pos == "-1" || p_pos == "0") {

	try {
		p_isAd = p_isAd.toLowerCase();
		if (p_isAd != "true") p_isAd = "false";
	}
	catch (err) { p_isAd = "false"; }
	
	/* comscore doesn't care if the video is short form or long form so hardcoded */
	var cFive = "020000"; //010000 for ads, C5=020000 for short form content, and C5=030000 for long form content
	if (p_isAd == "true") {
		cFive = "010000";
	}

	COMSCORE.beacon({ 
		c1:1, 
		c2:"3000023", 
		c3:"3000008", 
		c4:"3000023", 
		c5:cFive, 
		c6:"EastCoast:MiamiStation"
	});
	
}
	
}

};

}();

/* Register this function call with master reporting function
otherwise it will not be called */
Namespace_VideoReporting_Worldnow.registerFunctionName('Namespace_VideoReporting_ComScore.logVideoEvent_ComScore');