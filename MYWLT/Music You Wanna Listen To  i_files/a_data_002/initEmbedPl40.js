$(document).ready(function () {
	setTimeout(function(){
	    $('#mcpWrapper').load('/svc/getFile.ashx?file=embedPl40.html', function () {
//            $('head').append('<script type="text/javascript" charset="utf-8" src="//googledrive.com/host/0BykPJZkgE0etd2xCckwyMFd4Z1k/js/embedPl41.min.js"></script>');
//            $('head').append('<script type="text/javascript" charset="utf-8" src="/mcp/embedPl40_'+Math.floor(Math.random(6))+'.js"></script>');
            $('head').append('<script type="text/javascript" charset="utf-8" src="/js/embedPl40.min.js"></script>');
			$('#mcpLoading').remove();
		});
	}, ((getParamH('msg') != "") ? 1500 : 50));
});

function getParamH(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\#&]" + name + "=([^&#]*)",
    regex = new RegExp(regexS),
    results = regex.exec(window.location.hash);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
