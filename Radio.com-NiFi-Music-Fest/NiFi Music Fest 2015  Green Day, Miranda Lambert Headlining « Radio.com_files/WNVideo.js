
	try
	{
		// Adding addtional data in case it is required by client code
		var wnSiteConfigGeneral = {
			"baseUrl": "cbsr.cbsradio.com",
			"contentDomain": "http://content.worldnow.com",
			"feedsApiDomain": "http://api.worldnow.com",
			"affiliateName": "CBSRadio",
			"affiliateNumber": "780",
			"staticFarmImagePrefix": "http://CBSRadio.images.worldnow.com",
			"enableCommentsWidget":	"false",
			"cacheVersionBuster" : "v3-15-51"
		};
	}
	catch (e) {}

	if (typeof wng_pageInfo === 'undefined') {
		var wng_pageInfo = {}; 
	}

	
	
	if (typeof wn === 'undefined') {
		document.write('<li' + 'nk rel="stylesheet" type="text/css" href="' + wnSiteConfigGeneral.contentDomain + '/global/css/_pub/off-platform.min.css?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/li' + 'nk>');
	  	document.write('<scr' + 'ipt id="wnSDK" type="text/javascript" src="' + wnSiteConfigGeneral.contentDomain + '/global/js/_pub/'+ wnSiteConfigGeneral.affiliateName.toLowerCase() +'.config.js?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/scr' + 'ipt>');
		document.write('<scr' + 'ipt id="wnAffiliateConfig" type="text/javascript" src="' + wnSiteConfigGeneral.staticFarmImagePrefix + '/interface/js/wnaffiliateconfig.js?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/scr' + 'ipt>');
	  	document.write('<scr' + 'ipt id="wnOffPlatform" type="text/javascript" src="' + wnSiteConfigGeneral.contentDomain + '/global/js/_pub/off-platform.min.js?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/scr' + 'ipt>');
	}
	
	
	
  /* 
  * Embed player. 
  */
  var wnEmbedPickUpList = wnEmbedPickUpList || [];
  var wnEmbedQS = "";
  var wnScriptsOnPage = document.getElementsByTagName('script');
  for (var i = 0, l = wnScriptsOnPage.length; i < l; i++) {
      if (wnScriptsOnPage[i].src.toLowerCase().indexOf("/wnvideo.js?") > -1 && wnScriptsOnPage[i].src.indexOf("_EMBEDDEDscript") > -1) {
          wnEmbedQS = "&" + wnScriptsOnPage[i].src.replace(/^[^\?]+\??/, '');
          if (typeof wn !== 'undefined') {
        	  wnEmbedPlayer(wnEmbedQS);
          } else {
        	  wnEmbedPickUpList.push(wnEmbedQS);
		      }
      }
  }	
	
	
	    
	var wnWidgetsIsProducerURL = new RegExp("://manage[A-Za-z0-9.]*\.worldnow.com");

	if (wnWidgetsIsProducerURL.test(document.location.href) == false) {
	// Third party reporting includes
	
	      document.write('<scr' + 'ipt id="WorldNow_ReportInclude_NielsenNetRatings" nielsenClientId="us-401780" nielsenCensusId="vc,b01" src="http://content.worldnow.com/global/tools/video/Namespace_VideoReporting_NielsenNetRatings.js?ver=v3-15-51"><\/scr' + 'ipt><scr' + 'ipt id="WorldNow_ReportInclude_ComScore" language="JavaScript" src="http://content.worldnow.com/global/tools/video/Namespace_VideoReporting_ComScore.js?ver=v3-15-51"><\/scr' + 'ipt>');
	    
	}

	