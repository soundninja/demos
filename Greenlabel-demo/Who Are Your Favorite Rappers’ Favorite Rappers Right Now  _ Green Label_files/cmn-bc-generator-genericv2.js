/*! Branded Content Generic v0.0.1 */

/*
 * Developer: Christopher Wojcik (christopher.wojcik@complex.com)
 * Last Modified: 03/31/15 by Jose Diaz
 * All code copyrighted by Complex Media Inc. All rights reserved.
 */
(function(win, undefined) {
	// Grab a reference to the configuration object
	var config = cmnBC_config;
	var logoWH = '';
	if(config.logoWidth != '0' && config.logoHeight != '0') {
		logoWH = ' width="'+config.logoWidth+'" height="'+config.logoHeight+'"';
	}
 	// Template for the ad content in the iframe
	var frameContent = [
		'<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700|Fjalla+One" rel="stylesheet" type="text/css">',
		'<link rel="stylesheet" href="http://media.complex.com/campaigns/2015-q1/generic-bc-inline/cmn-bc-generic.css" type="text/css" media="screen" />',
		'<scr' + 'ipt>',
			'var campaignname = "'+config.campaignName+'";',
			'var unittype = "'+config.unitType+'";',
			'var unitname = campaignname + "-" + unittype;',
			'var clientSite = "'+config.clientSite+'";',
			'var postLink = "'+config.postLink+'";',
			'var logoDomain = "'+config.logoDomain+'";',
		'</sc' + 'ript>',
		'<scr'+'ipt src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></sc'+'ript>',
		'<scr'+'ipt src="http://media.complex.com/campaigns/2014-q3/champs-bc-suitcase/jquery.dotdotdot.min.js"></sc'+'ript>',
			'<div id="bc_unit">',
				'<div id="thumbnail">',
					'<div id="thumbnail-wrap">',
						'<img onclick="click_to_post();" id="thumbnail-img" src="'+config.imageURL+'" />',
					'</div>',
				'</div>',
				'<div id="content">',
					'<h1 onclick="click_to_post();">'+config.title+'</h1>',
					'<p>'+config.desc+'</p>',
					'<div id="sponsored-by">',
						'<a onclick="click_to_client();">'+config.message+'&nbsp;&nbsp;'+config.brand+'</a>',
						'<a onclick="click_to_client();"><img src="'+config.brandLogo+'"'+logoWH+' alt="'+config.message+' '+config.brand+'" style="border:0; outline:0;"></a>',
					'</div>',
					'<a id="readmore" onclick="click_to_post();">Full Story</a>',
				'</div>',
			'</div>',
		'<scr' + 'ipt src="http://media.complex.com/campaigns/2015-q1/generic-bc-inline/cmn-bc-genericv2.js"></sc' + 'ript>',
	].join('');

	// Dynamically create a friendly iframe inside of a parent Div
	function createAdFrame(frameId, parent) {
		var frame = document.createElement('iframe');
		var styleText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; visibility: hidden; display: none; z-index: 77;"

		frame.width        = '100%';
		frame.height       = '100%';
		frame.id           = frameId;
		frame.scrolling    = "no";
		frame.marginWidth  = "0";
		frame.marginHeight = "0";
		frame.frameBorder  = "0";
		frame.src  = "javascript:\"<html><body style='background:transparent'></body></html>\"";

		if( typeof( frame.style.cssText ) != 'undefined' ) {
		  	frame.style.cssText = styleText;
		} else {
		  	frame.setAttribute('style',styleText);
		}

		parent.appendChild(frame);

		return frame;
	}

	// Detect if we're within an iframe
	// If not, Legacy DFP Tags
	if (!window.frameElement) {

		// Change the wrapper id to include a random number
		var adWrap    = document.getElementById('cmn_suitcase_wrapper_ad');
		var random    = Math.floor(Math.random()*1000000 + 1);
		var adWrapId = 'cmn_suitcase_wrapper_ad_'+random;
		var adFrame;

		adWrap.id = 'cmn_suitcase_wrapper_ad_'+random;

		// Create an iframe
		adFrame   = createAdFrame('cmn_adframe_'+random, adWrap);
		win       = adFrame.contentWindow;

		// Make sure the template becomes a valid HTML document
		frameContent = [
			'<!DOCTYPE html>',
			'<html>',
			'<head>',
			'<title>Branded Content</title>',
			'</head>',
			'<body>',
			frameContent,
			'</body>',
			'</html>'
		].join('');

		// Write the content into the iframe
		var doc = win.document.open('text/html', 'replace');
		doc.write(frameContent);
		doc.close();

	// Else, GPT Tags
	// Write the content directly into the current document
	} else {
		var frame = window.frameElement;
		
		frame.style.position = 'absolute';
		frame.style.width = '100%';
		frame.style.height = '100%';
		frame.style.zIndex = '77';

		document.write(frameContent);
	}
})(window);