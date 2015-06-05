

var widgetUrl = "http://www.mstarz.com/widget_basic.php";
var lazyLoad = false;
var contentWidgetCodeLoaded = false;

function contentWidgetInitMzBasic(widgetUrl, lazyLoad) {
	if (typeof (this["contentWidgetMzBasic"]) == 'undefined') {
        if (!contentWidgetCodeLoaded) {
            contentWidgetCodeLoaded = true;
            if (lazyLoad) {
                (function () {
                    function asyncLoad() {
                        var s = document.createElement('script');
                        s.type = 'text/javascript';
                        s.async = true;
                        s.src = widgetUrl;
                        var x = document.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);
                    }
                    if (window.attachEvent)
                        window.attachEvent('onload', asyncLoad);
                    else
                        window.addEventListener('load', asyncLoad, false);
                })();
            } else {
                (function () {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = widgetUrl;
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                })();
            }
        }
        setTimeout(function () { contentWidgetInitMzBasic(widgetUrl, lazyLoad) }, 50);
    } else {
        var content = this["contentWidgetMzBasic"]();
        var newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.innerHTML = content;
        var container = document.getElementById("mzWidget");
        container.parentNode.insertBefore(newDiv, container);

    }

}

contentWidgetInitMzBasic(widgetUrl, lazyLoad);