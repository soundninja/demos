jQuery(document).ready(function(){jQuery('a').each(function(){var a=jQuery(this);var href=a.attr('href');if(href==undefined)
return;var url=href.replace('http://','').replace('https://','');var hrefArray=href.split('.').reverse();var extension=hrefArray[0].toLowerCase();var hrefArray=href.split('/').reverse();var domain=hrefArray[2];var downloadTracked=false;if(jQuery.inArray(extension,analyticsFileTypes)!=-1){downloadTracked=true;a.click(function(){if(analyticsEventTracking=='enabled'){_gaq.push(['_trackEvent','Downloads',extension.toUpperCase(),href]);}else
_gaq.push(['_trackPageview',analyticsDownloadsPrefix+url]);});}
if((href.match(/^http/))&&(!href.match(document.domain))&&(downloadTracked==false)){a.click(function(){if(analyticsEventTracking=='enabled'){_gaq.push(['_trackEvent','Outbound Traffic',href.match(/:\/\/(.[^/]+)/)[1],href]);}else
_gaq.push(['_trackPageview',analyticsOutboundPrefix+url]);});}});});

