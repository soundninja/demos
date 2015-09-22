var LiveSearch={searchBoxes:"",activeRequests:[],callbacks:[],addCallback:function(a,b){if(this.callbacks[a]===undefined){this.callbacks[a]=[]}return this.callbacks[a].push(b)},invokeCallbacks:function(a,c){var b;if(this.callbacks[a]!==undefined){for(b in this.callbacks[a]){c=this.callbacks[a][b](c)}}}};LiveSearch.init=function(){LiveSearch.searchBoxes=jQuery("input").filter("[name='s']").not(".no-livesearch");LiveSearch.searchBoxes.keyup(LiveSearch.handleKeypress);LiveSearch.searchBoxes.focus(LiveSearch.hideResults);if(!LiveSearch.searchBoxes.outerHeight){alert(DavesWordPressLiveSearchConfig.outdatedJQuery)}LiveSearch.searchBoxes.parents("form").attr("autocomplete","off");LiveSearch.searchBoxes.each(function(){this.autocomplete="off"});jQuery("html").click(LiveSearch.hideResults);LiveSearch.searchBoxes.click(function(a){a.stopPropagation()});LiveSearch.compiledResultTemplate=_.template(DavesWordPressLiveSearchConfig.resultTemplate);jQuery(window).resize(function(){LiveSearch.positionResults(this)})};LiveSearch.positionResults=function(){var c;var d=jQuery("input:focus").first();var b=jQuery("#dwls_search_results");if(b&&d.size()>0){var a=d.offset();a.left+=parseInt(DavesWordPressLiveSearchConfig.xOffset,10);a.top+=parseInt(DavesWordPressLiveSearchConfig.yOffset,10);b.css("left",a.left);b.css("top",a.top);b.css("display","block");switch(DavesWordPressLiveSearchConfig.resultsDirection){case"up":c=a.top-b.height();break;case"down":c=a.top+LiveSearch.searchBoxes.outerHeight();break;default:c=a.top+LiveSearch.searchBoxes.outerHeight()}b.css("top",c+"px")}};LiveSearch.handleAJAXResults=function(b){var d="";LiveSearch.activeRequests.pop();if(b){resultsSearchTerm=b.searchTerms;if(resultsSearchTerm!=jQuery("input:focus").first().val()){if(LiveSearch.activeRequests.length===0){LiveSearch.removeIndicator()}return}var c=jQuery("#dwls_search_results").children("input[name=query]").val();if(c!==""&&resultsSearchTerm==c){if(LiveSearch.activeRequests.length===0){LiveSearch.removeIndicator()}return}if(b.results.length===0){LiveSearch.hideResults()}else{d=LiveSearch.compiledResultTemplate({searchResults:b.results,e:b,resultsSearchTerm:resultsSearchTerm});var a=jQuery("#dwls_search_results");if(a.size()>0){jQuery("#dwls_search_results").replaceWith(d)}else{jQuery("body").append(d)}LiveSearch.positionResults();jQuery("#dwls_search_results").bind("click.dwls",function(){window.location.href=jQuery(this).find("a.daves-wordpress-live-search_title").attr("href")})}if(LiveSearch.activeRequests.length===0){LiveSearch.removeIndicator()}}};LiveSearch.handleKeypress=function(b){var c=0;var a=LiveSearch.searchBoxes.val();setTimeout(function(){LiveSearch.runQuery(a)},c)};LiveSearch.runQuery=function(e){var h=jQuery("input:focus");var f=h.val();var b;var d;if(f===""||f.length<DavesWordPressLiveSearchConfig.minCharsToSearch){LiveSearch.hideResults();LiveSearch.removeIndicator()}else{LiveSearch.displayIndicator();while(LiveSearch.activeRequests.length>0){d=LiveSearch.activeRequests.pop();d.abort()}var c={};var a=h.parents("form").find("input:not(:submit),select,textarea");for(b in a){if(a.hasOwnProperty(b)&&b%1===0){var g=jQuery(a[b]);c[g.attr("name")]=g.val()}}c.action="dwls_search";d=jQuery.get(DavesWordPressLiveSearchConfig.ajaxURL,c,LiveSearch.handleAJAXResults,"json");d.fail=LiveSearch.ajaxFailHandler;LiveSearch.activeRequests.push(d)}};LiveSearch.ajaxFailHandler=function(a){console.log("Dave's WordPress Live Search: There was an error retrieving or parsing search results");console.log("The data returned was:");console.log(a)};LiveSearch.hideResults=function(){var a=jQuery("#dwls_search_results");if(a.size()>0){LiveSearch.invokeCallbacks("BeforeHideResults");switch(DavesWordPressLiveSearchConfig.resultsDirection){case"up":a.fadeOut("normal",function(){a.remove();LiveSearch.invokeCallbacks("AfterHideResults")});break;case"down":a.slideUp("normal",function(){a.remove();LiveSearch.invokeCallbacks("AfterHideResults")});break;default:a.slideUp("normal",function(){a.remove();LiveSearch.invokeCallbacks("AfterHideResults")})}}};LiveSearch.displayIndicator=function(){if(jQuery(".search_results_activity_indicator").size()===0){var e=jQuery("input:focus").first();var b=e.offset();jQuery("body").append('<span id="search_results_activity_indicator" class="search_results_activity_indicator" />');var a={outer:Math.ceil((e.height()*0.9)/2)};a.inner=Math.floor(a.outer*0.29);jQuery(".search_results_activity_indicator").css("position","absolute").css("z-index",9999);var c=(b.top+((e.outerHeight()-e.innerHeight())/2)+"px");jQuery(".search_results_activity_indicator").css("top",c);var d=(b.left+e.outerWidth()-((a.outer+a.inner)*2)-2)+"px";jQuery(".search_results_activity_indicator").css("left",d);Spinners.create(".search_results_activity_indicator",{radii:[a.inner,a.outer],color:"#888888",dashWidth:4,dashes:8,opacity:0.8,speed:0.7}).play()}};LiveSearch.removeIndicator=function(){jQuery(".search_results_activity_indicator").remove()};jQuery(function(){LiveSearch.init()});