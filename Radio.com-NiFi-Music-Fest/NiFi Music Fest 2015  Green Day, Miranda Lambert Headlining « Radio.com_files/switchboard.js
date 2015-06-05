(function (d, s, id) {
  var ev_location = document.location.toString(),
      js, 
      evjs = d.getElementsByTagName(s)[0],
      query = document.location.search.substring(1),
      params = {},
      vars = query.split("&"),
      i = 0,
      pair = [],
      host = "eventful.com";

  for( i; i < vars.length; i++ ) {
    pair = vars[i].split("=");
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]); 
  }

  if(params.ev_host) {
    host = params.ev_host + ".eventful.com";
    id = id + '-' + params.ev_host;
  } 

  if (d.getElementById(id)) { 
    return;
  } 

  js = d.createElement(s); js.id = id; 
  if (params.enable_poll) {
    js.src = "//" + host + "/apps/switchboard?poll=1&url=" + encodeURIComponent(ev_location); 
  } else {
    js.src = "//" + host + "/apps/switchboard?url=" + encodeURIComponent(ev_location); 
  }
  evjs.parentNode.insertBefore(js, evjs); 
}) (document, 'script', 'switchboard');
