if (!window.mraid) {document.write('\x3cdiv class="GoogleActiveViewClass" ' +'id="DfaVisibilityIdentifier_2057181013"\x3e');}
(function() {
  var DEBUG = ''.toLowerCase() == 'true';
  var csiStart = (+new Date);
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var publisherSideFilePath = unescape('');
  if(publisherSideFilePath == '') {
    publisherSideFilePath = '/doubleclick/DARTIframe.html';
  } else if (publisherSideFilePath.charAt(publisherSideFilePath.length - 1) == '/') {
    publisherSideFilePath += 'DARTIframe.html';
  }
  var bookingTimeMetaData = {
  };

  var runtimeMetaData = {
  };

  var exitUrlPatternMacroValues = {
  };
  var macroParser = function (macroName, value) {
    return (value.indexOf(macroName) < 0) ? value : '';
  };
  var adServerData = {
    eventReportingUrl: 'https://ad.doubleclick.net/activity;src=4714703;met=1;v=1;pid=118124928;aid=290913840;ko=0;cid=62982333;rid=62862333;rv=1;',
    clickUrl: 'https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuwXr3SdHRcvqC-IZkcINhvybNAeS3AFsmdXdKutl-xx_SlJReNFg5pRttjH_jpdPWjZ-_3o1rjpVybdRJ6LbZrQRpBm5iQwkzyX5XSVgBeo6C8U2oeF6qZD54dfqm9iT5j1xc&sig=Cg0ArKJSzC1exLTBQ4kkEAE&adurl=http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCAOZT6U9nVezKJ4zJ9AXg3oPoCODdo6QD8K6-5FLAjbcBEAEgAGCl-JGAkAGCARdjYS1wdWItNTQzOTg4NDA3MzA1MjQ0McgBCeACAKgDAZgEAKoEvwFP0I41Wmtxfuy284sQ3DvXZDJK1ORot7LM5T69mjcxw-kZhDNzqjGATnX_barlbC32Xx7dPGI6EE5UaTNIf72cZQgnc-Ig0T5R_wfLGO0cMaPWRQBHDgF_0mlsyayYStVxt_5MHrm7O2qSybkEPdOLQYuJ_fJ9wUlfS6Ieh2vEqdSBmLii1DFzN1LoWKM0c20EtjFa25n0q0DFVxlpldITpZJ_u6tp9seezun7uwJFG5xPVyA6SSYaLRetEM179uAEAYAGgtGzyfiirfpjoAYh2AcA%26num%3D1%26sig%3DAOD64_0vzL5XgjOgS6N0Wxg45-dAlLe2cw%26client%3Dca-pub-5439884073052441%26adurl%3D',
    clickUrlTimesToEscape: '',
    impressionUrl: '',
    geoData: 'ct=AU&st=&city=185&dma=0&zp=2042&bw=4',
    siteName: 'N97602.286450AMNET',
    siteId: '1832686',
    adId: '0',
    exitSuffix: '',
    buyId: '8733569',
    creativeId: '62982333',
    placementId: '118124928',
    advertiserId: '4714703',
    keyValueOrdinal: '0',
    renderingVersion: '1',
    renderingId: '62862333',
    randomNumber: '2057181013',
    dynamicData: '',
    stringReportingUrl: 'https://ad.doubleclick.net/activity;src=4714703;stragg=1;v=1;pid=118124928;aid=290913840;ko=0;cid=62982333;rid=62862333;rv=1;rn=2057181013;',
    urlToGetKeywordsFor: '%LivePreviewSiteUrl',
    bookingTimeMetaData: bookingTimeMetaData,
    generatedAdSlot: false,
    exitUrlPatternMacroValues: exitUrlPatternMacroValues,
    renderingEnvironment: ('' == '1' ||
        window['mraid']) ? 'IN_APP' : 'BROWSER',
    placementDimensions: {
      'w': '300',
      'h': '250'
    },
    tag: {
      adContainerElementId: macroParser('ad_container_id', ''),
      hideObjects: '',
      top: '',
      left: '',
      zIndex: '',
      duration: '',
      wmode: '',
      preferHtml5Artwork: '' == 'true',
      adSenseKeywords: '',
      adSenseLatitude: '',
      adSenseLongitude: '',
      publisherSideFilePath: publisherSideFilePath,
      runtimeMetaData: runtimeMetaData,
      lidarEnabled: false,
      expansionMode: '',
      renderFloatInplace: ''.toLowerCase() == 'true',
      tryToWriteHtmlInline: ''.toLowerCase() == 'true'
    }
  };

    var scheme = location.protocol;
  var staticResourceMediaServer = scheme == 'https:' ?
       'https://s0.2mdn.net' :
       'http://s0.2mdn.net';

  var creativeMediaServer = scheme == 'https:' ?
       'https://s0.2mdn.net' :
       'http://s0.2mdn.net';

  var backupImageUrl = '/4714703/MPOS0701_Trust_300x250_01_01.gif';
  if (!/^https?:/.test(backupImageUrl)) {
    backupImageUrl = creativeMediaServer + backupImageUrl;
  }
  var backupImage = {
    exitUrl: 'https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuwXr3SdHRcvqC-IZkcINhvybNAeS3AFsmdXdKutl-xx_SlJReNFg5pRttjH_jpdPWjZ-_3o1rjpVybdRJ6LbZrQRpBm5iQwkzyX5XSVgBeo6C8U2oeF6qZD54dfqm9iT5j1xc&sig=Cg0ArKJSzC1exLTBQ4kkEAE&adurl=http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCAOZT6U9nVezKJ4zJ9AXg3oPoCODdo6QD8K6-5FLAjbcBEAEgAGCl-JGAkAGCARdjYS1wdWItNTQzOTg4NDA3MzA1MjQ0McgBCeACAKgDAZgEAKoEvwFP0I41Wmtxfuy284sQ3DvXZDJK1ORot7LM5T69mjcxw-kZhDNzqjGATnX_barlbC32Xx7dPGI6EE5UaTNIf72cZQgnc-Ig0T5R_wfLGO0cMaPWRQBHDgF_0mlsyayYStVxt_5MHrm7O2qSybkEPdOLQYuJ_fJ9wUlfS6Ieh2vEqdSBmLii1DFzN1LoWKM0c20EtjFa25n0q0DFVxlpldITpZJ_u6tp9seezun7uwJFG5xPVyA6SSYaLRetEM179uAEAYAGgtGzyfiirfpjoAYh2AcA%26num%3D1%26sig%3DAOD64_0vzL5XgjOgS6N0Wxg45-dAlLe2cw%26client%3Dca-pub-5439884073052441%26adurl%3Dhttp://auspost.com.au/money-insurance/car-insurance.html%253Fecid%253DLK20150511060',
    target: '_blank',
    imageUrl: backupImageUrl,
    width: '300',
    height: '250',
    backupDisplayActivityUrl: '',
    thirdPartyBackupImpressionUrl: ''
  };

  var versionPrefix = DEBUG ? 'db_' : '';
  var templateVersion = '200_79';
  var renderingScriptPath = '/879366';
  var rendererDisplayType = '';
  rendererDisplayType += 'dfa7banner_';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;
  var renderingLibrary = renderingScriptPath + '/' + rendererName + '_rendering_lib_' +
      versionPrefix + templateVersion + '.js';
  // Adserver has a logic to detect media files and prepend host name.
  if (!/^https?:/.test(renderingLibrary)) {
    renderingLibrary = staticResourceMediaServer + renderingLibrary;
  }

  var adCreativeDefinitions = {};

  var creativeId = '62982333';
  var adId = adCreativeDefinitions[adServerData.adId] ? adServerData.adId : 0;
  // The unique creative is identified by combination of creative id and ad id.
  // When the same creative(same creative id and same ad id) is served on the page more
  // than once then they will share the creative definition yet there will be
  // multiple instances of 'adResponses'.s
  var creativeKey = [creativeId, adId].join('_');
  var creativeDef = adCreativeDefinitions[adServerData.adId] ?
      adCreativeDefinitions[adServerData.adId] :
      '[%DEFAULT_PLCR_PATH%]';
  if(!/^https?:/.test(creativeDef) && creativeDef.substring(0, 2) != '//') {
    creativeDef = creativeMediaServer + creativeDef;
  }
    creativeDef = null;
  studioObjects['creativeCount'] = studioObjects['creativeCount'] || 0;
  var creativeDto = {
    id: creativeId,
    uniqueId: creativeId + '_' + studioObjects['creativeCount']++,
    templateVersion: templateVersion,
    adServerData: adServerData,
    isPreviewEnvironment: '%PreviewMode' == 'true',
    hasFlashAsset: true,
    hasHtmlAsset: false,
    requiresCss3Animations: false,
    flashVersion: '9',
    httpsMediaServer: 'https://s0.2mdn.net',
    httpMediaServer: 'http://s0.2mdn.net',
    renderingScriptPath: renderingScriptPath,
    renderingLibrary: renderingLibrary,
    rendererName: rendererName,
    creativeDefinitionUrl: creativeDef,
    creativeKey: creativeKey,
    thirdPartyImpressionUrls: [''],
    thirdPartyArtworkImpressionUrl: '',
    breakoutToTop: false,
    dimensions: {
      width: '300px',
      height: '250px'
    },
    backupImage: backupImage,
    csiStart: csiStart,
    csiAdRespTime: csiStart - (parseFloat('') || 0),
    csiEvents: {},
    hasModernizrFeatureChecks: false,
    html5FeatureChecks: [
    ],
    hasSwiffyHtmlAsset: false
  };

  var inGdnIframe = window['IN_ADSENSE_IFRAME'] || false;
  var inYahooSecureIframe = window.Y && Y.SandBox && Y.SandBox.vendor;
  var inWinLiveIframe = false;
  try {
    inWinLiveIframe = !!window.$WLXRmAd;
  } catch(e) {}
  var inSafeFrame = window.$sf && window.$sf.ext;
  var isMsnAjaxIframe = (typeof(inDapMgrIf) != 'undefined' && inDapMgrIf);
  var breakoutIframe = ''.toLowerCase();
  var shouldBreakout = (((false ||
                          false) &&
                         !inGdnIframe &&
                         !inYahooSecureIframe &&
                         !inSafeFrame &&
                         !inWinLiveIframe) ||
                        (true && breakoutIframe == 'true')) &&
                       self != top &&
                       !creativeDto.isPreviewEnvironment &&
                       breakoutIframe != 'false';

  if (adServerData.tag.adContainerElementId == '' &&
      (true || false ||
         adServerData.tag.renderFloatInplace)) {
    var containerId = ['creative', creativeDto.uniqueId].join('_');
    var divHtml = ['<div id="', containerId, '"></div>'].join('');
    document.write(divHtml);
    adServerData.tag.adContainerElementId = containerId;
    adServerData.generatedAdSlot = true;
  }
  var creatives = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creative = creatives[creativeKey] = creatives[creativeKey] || {};
  var adResponses = creative['adResponses'] = creative['adResponses'] || [];
  creative['shouldBreakout'] = creative['shouldBreakout'] || shouldBreakout;
  var iframeBusterLibrary = renderingScriptPath + '/iframe_buster_' +
      versionPrefix + templateVersion + '.js';
  if(!/^https?:/.test(iframeBusterLibrary)) {
    iframeBusterLibrary = staticResourceMediaServer + iframeBusterLibrary;
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  adResponses.push({
    creativeDto: creativeDto
  });
  if (shouldBreakout) {
    if (versionedLibrary['breakout']) {
      versionedLibrary['breakout']();
    } else if (!versionedLibrary['breakoutLoading']) {
      versionedLibrary['breakoutLoading'] = true;
      document.write('<scr' + 'ipt type="text/javascript" src="' + iframeBusterLibrary + '" async="async"></scr' + 'ipt>');
    }
  } else if (typedLibrary['bootstrap'] && creative['creativeDefinition']) {
    typedLibrary['bootstrap']();
  } else {
    if (!typedLibrary['loading']) {
      typedLibrary['loading'] = true;
      creativeDto.csiEvents['gb'] = (+new Date);
      document.write('<scr' + 'ipt type="text/javascript" src="' + renderingLibrary + '"' + (adServerData.tag.tryToWriteHtmlInline ? '' : ' async="async"') + '></scr' + 'ipt>');
    }
  }
  if (isMsnAjaxIframe) {
    window.setTimeout("document.close();", 1000);
  }
  (function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      HTML5_CREATIVE_IMPRESSION: '871060'
    },
    exitEvents: [
      {
        name: 'ClickTag',
        reportingId: '',
        url: 'https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuwXr3SdHRcvqC-IZkcINhvybNAeS3AFsmdXdKutl-xx_SlJReNFg5pRttjH_jpdPWjZ-_3o1rjpVybdRJ6LbZrQRpBm5iQwkzyX5XSVgBeo6C8U2oeF6qZD54dfqm9iT5j1xc&sig=Cg0ArKJSzC1exLTBQ4kkEAE&adurl=http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCAOZT6U9nVezKJ4zJ9AXg3oPoCODdo6QD8K6-5FLAjbcBEAEgAGCl-JGAkAGCARdjYS1wdWItNTQzOTg4NDA3MzA1MjQ0McgBCeACAKgDAZgEAKoEvwFP0I41Wmtxfuy284sQ3DvXZDJK1ORot7LM5T69mjcxw-kZhDNzqjGATnX_barlbC32Xx7dPGI6EE5UaTNIf72cZQgnc-Ig0T5R_wfLGO0cMaPWRQBHDgF_0mlsyayYStVxt_5MHrm7O2qSybkEPdOLQYuJ_fJ9wUlfS6Ieh2vEqdSBmLii1DFzN1LoWKM0c20EtjFa25n0q0DFVxlpldITpZJ_u6tp9seezun7uwJFG5xPVyA6SSYaLRetEM179uAEAYAGgtGzyfiirfpjoAYh2AcA%26num%3D1%26sig%3DAOD64_0vzL5XgjOgS6N0Wxg45-dAlLe2cw%26client%3Dca-pub-5439884073052441%26adurl%3Dhttp://auspost.com.au/money-insurance/car-insurance.html%253Fecid%253DLK20150511060',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'clickTAG',
        reportingId: '',
        url: 'https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuwXr3SdHRcvqC-IZkcINhvybNAeS3AFsmdXdKutl-xx_SlJReNFg5pRttjH_jpdPWjZ-_3o1rjpVybdRJ6LbZrQRpBm5iQwkzyX5XSVgBeo6C8U2oeF6qZD54dfqm9iT5j1xc&sig=Cg0ArKJSzC1exLTBQ4kkEAE&adurl=http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCAOZT6U9nVezKJ4zJ9AXg3oPoCODdo6QD8K6-5FLAjbcBEAEgAGCl-JGAkAGCARdjYS1wdWItNTQzOTg4NDA3MzA1MjQ0McgBCeACAKgDAZgEAKoEvwFP0I41Wmtxfuy284sQ3DvXZDJK1ORot7LM5T69mjcxw-kZhDNzqjGATnX_barlbC32Xx7dPGI6EE5UaTNIf72cZQgnc-Ig0T5R_wfLGO0cMaPWRQBHDgF_0mlsyayYStVxt_5MHrm7O2qSybkEPdOLQYuJ_fJ9wUlfS6Ieh2vEqdSBmLii1DFzN1LoWKM0c20EtjFa25n0q0DFVxlpldITpZJ_u6tp9seezun7uwJFG5xPVyA6SSYaLRetEM179uAEAYAGgtGzyfiirfpjoAYh2AcA%26num%3D1%26sig%3DAOD64_0vzL5XgjOgS6N0Wxg45-dAlLe2cw%26client%3Dca-pub-5439884073052441%26adurl%3Dhttp://auspost.com.au/money-insurance/car-insurance.html%253Fecid%253DLK20150511060',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '0',
        artworkType: 'FLASH',
        displayType: 'BANNER',
        width: '300',
        height: '250',
        servingPath: '/4714703/MPOS0701_Trust_300x250_01_01.swf',
        zIndex: '0',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '2',
          wmode: 'opaque',
          sdkVersion: '',
          flashBackgroundColor: '',
          allowScriptAccess: 'always'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'dfa7banner_';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '62982333';
  var adId = '0';
  var templateVersion = '200_79';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();

})();
document.write('\n\x3cnoscript\x3e\n  \x3ca target\x3d\x22_blank\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsuwXr3SdHRcvqC-IZkcINhvybNAeS3AFsmdXdKutl-xx_SlJReNFg5pRttjH_jpdPWjZ-_3o1rjpVybdRJ6LbZrQRpBm5iQwkzyX5XSVgBeo6C8U2oeF6qZD54dfqm9iT5j1xc\x26sig\x3dCg0ArKJSzC1exLTBQ4kkEAE\x26adurl\x3dhttp://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCAOZT6U9nVezKJ4zJ9AXg3oPoCODdo6QD8K6-5FLAjbcBEAEgAGCl-JGAkAGCARdjYS1wdWItNTQzOTg4NDA3MzA1MjQ0McgBCeACAKgDAZgEAKoEvwFP0I41Wmtxfuy284sQ3DvXZDJK1ORot7LM5T69mjcxw-kZhDNzqjGATnX_barlbC32Xx7dPGI6EE5UaTNIf72cZQgnc-Ig0T5R_wfLGO0cMaPWRQBHDgF_0mlsyayYStVxt_5MHrm7O2qSybkEPdOLQYuJ_fJ9wUlfS6Ieh2vEqdSBmLii1DFzN1LoWKM0c20EtjFa25n0q0DFVxlpldITpZJ_u6tp9seezun7uwJFG5xPVyA6SSYaLRetEM179uAEAYAGgtGzyfiirfpjoAYh2AcA%26num%3D1%26sig%3DAOD64_0vzL5XgjOgS6N0Wxg45-dAlLe2cw%26client%3Dca-pub-5439884073052441%26adurl%3Dhttp://auspost.com.au/money-insurance/car-insurance.html%253Fecid%253DLK20150511060\x22\x3e\n    \x3cimg border\x3d\x220\x22 alt\x3d\x22\x22 src\x3d\x22//s0.2mdn.net/4714703/MPOS0701_Trust_300x250_01_01.gif\x22\n        width\x3d\x22300\x22 height\x3d\x22250\x22 /\x3e\n  \x3c/a\x3e\n\x3c/noscript\x3e\n');if (!window.mraid) {document.write('\x3c/div\x3e');}if (!window.mraid) {(function() {var avDiv = document.getElementById("DfaVisibilityIdentifier_2057181013");if (avDiv) {avDiv['_avi_'] = 'BsUOJ609nVcOsJpX79QXu7oJQAAAAABABOAHIAQngBAKgBj8';avDiv['_avihost_'] = 'pagead2.googlesyndication.com';avDiv['_avm_'] = 'ts\x3d1\x26';}var glidar = document.createElement('script');glidar.type = 'text/javascript';glidar.async = true;glidar.src = '//pagead2.googlesyndication.com/pagead/js/lidar.js';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(glidar, s);})();}