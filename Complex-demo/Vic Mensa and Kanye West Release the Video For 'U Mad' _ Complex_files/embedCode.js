
"use strict";

//Intersection  namspace for widget
var ntrsctnWidget = ntrsctnWidget || {};

ntrsctnWidget = (function( document, window, undefined ) {

    //Private Methods
    var el, xmlhttp, fetchWidget, ntrsctnWidgetLinks, ntrsctnWidgetHash;

    //http://davidwalsh.name/javascript-once
    function once(fn, context) { 
        var result;
        return function() { 
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    }

    // Google Analytics script
    try {
        _gaq.push(['_ntrsctnGaq._setAccount', 'UA-30251-60']);
    } catch(e) {
        console.error('Ntrsctn widget tracking event not fired!');
    }
    
    //Getting element to appened widget 
    el = document.getElementById("ntrsctnWidget"); 

    return {

        _XmlFunc:function() {
            xmlhttp = new XMLHttpRequest(); 
            
            xmlhttp.onreadystatechange = function() { 
                if (xmlhttp.readyState == 4 ) { 
                
                    if( xmlhttp.status == 200) {
                        var dataResponse = JSON.parse(xmlhttp.responseText);

                        var headID = document.getElementsByTagName("head")[0], 
                            styleTags = dataResponse.data.style, 
                            htmlContent = dataResponse.data.content, 
                            cssNode; 
                    
                        styleTags.forEach(function (index) { 
                            cssNode = document.createElement('link'); 
                            cssNode.type = 'text/css'; 
                            cssNode.rel = 'stylesheet'; 
                            cssNode.href = index; 

                            headID.appendChild(cssNode); 
                        }); 
                    
                        //appending HTML stucture to div tag 
                        el.innerHTML = htmlContent;

                        ntrsctnWidgetHash = el.getAttribute('data-ntrsctn-hash'),
                        ntrsctnWidgetLinks = Array.prototype.slice.call( document.querySelectorAll("#ntrsctnWidget a" ) );

                        
                        if ( ntrsctnWidgetHash.length > 0 ) {
                            var trackWidgetLoadOnce = once(function() {
                                //load event for GA
                                try {
                                    _gaq.push([
                                        '_ntrsctnGaq._trackEvent', 
                                        'Trending Widget', 
                                        'Load',  
                                        dataResponse.data.widgetTemplateName + "-" + dataResponse.data.widgetName + "-"  + ntrsctnWidgetHash
                                    ]);

                                    // console.log(_gaq); 

                                } catch(e) {
                                    console.error('NTRSCTN widget click not tracked.');
                                }
                            });
                    
                            ntrsctnWidgetLinks.forEach(function (element, index) {

                                index += 1;

                                var ntrsctnLinkOld = element.href;

                                var ntrsctnLinkNew = ntrsctnLinkOld += "?utm_source=" + window.location.host + "&utm_medium=referral&utm_campaign=Trending+Widget+" +  dataResponse.data.widgetTemplateName + "+" +dataResponse.data.widgetName + "+node" + index;

                                element.setAttribute('href', ntrsctnLinkNew);

                                //click event for GA
                                element.addEventListener('click', function() {
                                    try {
                                        _gaq.push([
                                            '_ntrsctnGaq._trackEvent', 
                                            'Trending Widget', 
                                            'Click',  
                                            dataResponse.data.widgetTemplateName + "-" + dataResponse.data.widgetName + "-"  + index.toString()
                                        ]);

                                        _gaq.push([
                                            '_setCustomVar', 
                                            1, 
                                            'url',
                                            element.origin + element.pathname
                                        ]);
                                    } catch(e) {
                                        console.error('NTRSCTN widget click not tracked.');
                                    }
                                });
                            });

                            // hides extra story and uses it to replace any story that needs to be filtered out
                            var elems = document.getElementsByClassName("ntrsctn-wrap");
                            var fallback = elems[elems.length-1];
                            var urlfilter = ntrsctnWidget.filterurl;

                            elems[elems.length-1].style.display = "none";

                            for (var i=0; i < elems.length; i++) {
                                var cpw = elems[i];
                                var url = cpw.getElementsByClassName("ntrsctn-link")[0].href;
                                if(url.indexOf(urlfilter)>1)
                                {
                                   elems[i].replaceChild(fallback.childNodes[1],elems[i].childNodes[1]);
                                   break;
                                }
                            }
                        } else {
                            
                            //error event for GA
                            _gaq.push([
                                '_ntrsctnGaq._trackEvent', 
                                'Trending Widget', 
                                'Loading Error',  
                                ntrsctnWidgetHash
                            ]);

                            console.error('Widget did not load successfully.', ntrsctnWidgetHash); 
                        }

                        //onscoll callback to check if widget is in view
                        var CheckWidgetInView = function( event ) {
                            var docViewTop = window.pageYOffset,
                                docViewBottom = docViewTop + window.innerHeight,
                                elemTop = parseInt(  el.offsetTop, 10),
                                elemBottom = elemTop +  el.offsetHeight;

                                // console.log(docViewTop, 'docViewTop');
                                // console.log(docViewBottom, 'docViewBottom');
                                // console.log(elemTop, 'elemTop');
                                // console.log(elemBottom, 'elemBottom');
                        
                            if ( 
                                //bottom of element is lower than the top of the page
                                (elemBottom  >= docViewTop ) && 
                                //top of the element is higher than the bottom of the page
                                (elemTop <= docViewBottom ) && 

                                //bottom of the element is higher than bottom of the document
                                (elemBottom <= docViewBottom ) && 

                                //top of the element is lower than top of the document
                                (elemTop >= docViewTop) ) 
                            {

                                trackWidgetLoadOnce();
                                
                                // remove scrolling event
                                window.removeEventListener("scroll", CheckWidgetInView, false);
                                
                                // console.log('Element in View!');
                            } else {
                                
                            }
                        };  

                        //Scroll Event Listener
                        window.addEventListener("scroll", CheckWidgetInView, false);

                    } else if(xmlhttp.status == 400) { 
                        console.error('There was an error 400'); 
                    } else { 
                        console.error('something else other than 200 was returned') 
                    } 
                }
            };
        },
        _Widget:function() {
            
            //intializer for getting widget 
            fetchWidget = function() {

                var defaults = {
                    domain:null,
                    key:null,
                    url:null
                };


                if(arguments[0] && typeof arguments[0] === 'object'){
                    this.options = extendDefaults(defaults, arguments[0]);
                }

                // Utility method to extend defaults with user options
                function extendDefaults(source, properties) {
                    var property;
                    
                    for (property in properties) {

                        if (properties.hasOwnProperty(property)) {
                            source[property] = properties[property];
                        }
                    }
                    return source;
                }

                this.init();

            };

            fetchWidget.prototype.init = function() {
                this.load();
            };


            fetchWidget.prototype.load = function() {
                if(this.options.url && this.options.url.length > 10)
                {
                    ntrsctnWidget.filterurl = this.options.key;
                }else{
                    ntrsctnWidget.filterurl = 'norealurl';
                }
                xmlhttp.open("GET", "http://" + this.options.domain  +  "/api/getTrendingWidget?w=" + this.options.key + "&url=" + this.options.url, true);
                xmlhttp.send();
            };


            //making accessible window object
            window.fetchWidget = fetchWidget;

        }     
    };//Return end
})( document, window, undefined );


/* 
 *
 *
 * Calling functions 
 *
 *
 */

ntrsctnWidget._XmlFunc();
ntrsctnWidget._Widget();




