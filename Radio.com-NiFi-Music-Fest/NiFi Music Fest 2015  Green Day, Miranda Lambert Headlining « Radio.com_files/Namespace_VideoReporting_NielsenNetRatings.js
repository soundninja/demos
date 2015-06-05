var Namespace_VideoReporting_NielsenNetRatings = function() {
/*--------------------------*/
/* Worlnow Nielsen's Plugin */
/*--------------------------*/
//Nielsen specified parameters.  
var WorldNow_NielsenNetRatingsIncludeScript	= document.getElementById('WorldNow_ReportInclude_NielsenNetRatings'); //get include file script node
var WorldNow_NielsenNetRatingsClientId	    = WorldNow_NielsenNetRatingsIncludeScript.getAttribute("nielsenClientId");
var WorldNow_NielsenNetRatingsVideoCensusId	= WorldNow_NielsenNetRatingsIncludeScript.getAttribute("nielsenCensusId");

return {
/*implement custom logging function 
params in order are: 
1. Event Type (Duration, Pause, ..)
2. Video Title - make sure to unescape this before logging
3. Postition in video when this event was logged
4. Clip Id
5. Content Classification of the Clip 
6. Hosting Page Name, Category name/Id
7. Affiliate Name
8. Owner Affiliate Name
9. boolean if the video is an Ad
10.ad ID
11.The calling application name */
logVideoEvent_NielsenNetRatings : function(p_eventType, p_title, p_pos, p_clipId, p_clipAdTag, p_hostPage, p_affiliateName, p_OwnerAffiliateNo, p_isAd, p_ciid, p_refererUrl, p_baseUrl, p_reportingKeywords, p_uri, p_len, p_pctViewed, p_location, p_contentSource, p_keywords)
{
   if (p_pctViewed == "0" || p_pctViewed == "100")
   {
        try
        { 
            var m_objImages     = new Image();
            var rndNum          = Math.ceil(Math.random()*1000000);
            var cID             = WorldNow_NielsenNetRatingsClientId;
            var vCID            = WorldNow_NielsenNetRatingsVideoCensusId;     
            var position        = p_pctViewed == "100"?"dav2-":"dav0-";
            var m_URL           = "http://secure-us.imrworldwide.com/cgi-bin/m?";
            var params          = "ci=" + cID;
            params              += (p_reportingKeywords != undefined && p_reportingKeywords != "undefined")?"&cg=" + p_reportingKeywords:"";
            params              += "&tl=" + position + p_title;
            params              += p_isAd=="true"?"&c3=st,a":"";  
            params              += "&c6=" + vCID;
            params              += "&cc=1";
            params              += "&si=" + p_location;
            params              += "&rnd=" + rndNum;
            m_URL               += params;
            
 	        if (m_URL.length>2048&&navigator.userAgent.indexOf('MSIE')>=0){
		        m_URL=m_URL.substring(0,2040)+"&rnd="+ rndNum;
	        }
   
	        if (document.images){
		        m_objImages.src=m_URL;          
	        }       
        
        }
        catch(e)
        {
        }
    }
}

};

}();

Namespace_VideoReporting_Worldnow.registerFunctionName('Namespace_VideoReporting_NielsenNetRatings.logVideoEvent_NielsenNetRatings');
















