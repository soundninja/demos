this["SN"] = this["SN"] || {};
this["SN"]["admin"] = this["SN"]["admin"] || {};

this["SN"]["admin"]["option"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "    <option value=\""
    + alias2(alias1((depth0 != null ? depth0.artist : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["SN"]["admin"]["panel"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" type=\"text/css\" href=\""
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.root : depth0), depth0))
    + "admin.css\">\n<div class=\"sn-admin-panel\">\n    <div class=\"sn-admin-panel-close SN-clickable\">X</div>\n    <h1 class=\"sn-admin-panel-title\">Soundninja</h1>\n\n    <h2 class=\"sn-admin-panel-title\">God mode</h2>\n\n    <select class=\"sn-admin-panel-whitelist-candidates\" multiple></select>\n    <div class=\"sn-admin-panel-whitelist-candidates-add SN-clickable sn-clickable-disabled\">Add to whitelist</div>\n\n    <div><label>\n        Whitelist:\n        <select class=\"sn-admin-panel-whitelist\" multiple disabled></select>\n    </label></div>\n    <div class=\"sn-admin-panel-reload SN-clickable sn-clickable-disabled\">Reload</div>\n</div>\n";
},"useData":true});

this["SN"]["admin"]["whitelisttip"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "    <option value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-text=\""
    + alias2(alias1((depths[1] != null ? depths[1].text : depths[1]), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});;
(function ($) {
    var panel = new Panel();
    new TextSelector(panel);
    new ListEditor(panel);

    function Panel() {
        var panel = this;
        $(document.body).append(SN.admin.panel({root: chrome.extension.getURL('')}));
        $(window).on('hashchange', toggle);
        $('.sn-admin-panel-close').on('click', close);
        setup('whitelist');

        panel.isOpen = function isOpen() {
            // can't just check window.location.hash because music times has already changed it
            var $panel = $('.sn-admin-panel');
            return $panel.css('display') != 'none';
        };

        panel.addOptions = function (list, text, artists) {
            var $candidates = $('.sn-admin-panel-' + list + '-candidates');
            $candidates.html(SN.admin[list + 'tip']({text: text, artists: artists})).prop('selectedIndex', 0);
            $('.sn-admin-panel-' + list + '-candidates-add').removeClass('sn-clickable-disabled');
        };

        function toggle() {
            var $panel = $('.sn-admin-panel');
            if (panel.isOpen())
                $panel.hide();
            else
                $panel.show();
        }

        function close() {
            window.history.back();
        }

        function reload() {
            window.location.reload();
        }

        function setup(list) {
            var $candidates = $('.sn-admin-panel-' + list + '-candidates');
            $('.sn-admin-panel-' + list + '-candidates-add').on('click', function () {
                var option = $candidates.prop('options')[$candidates.prop('selectedIndex')];
                //$.ajax('http://localhost:5000/artists/', {
                $.ajax('http://soundninja-django-py.herokuapp.com/artists/', {
                    data: {echonest_id: option.value},
                    method: 'POST', type: 'POST'
                }).done(function () {
                    addToList(list, option);
                }).fail(function (jqXHR) {
                    if (!jqXHR.responseJSON)
                        jqXHR.responseJSON = JSON.parse(jqXHR.responseText);
                    if (jqXHR.responseJSON.echonest_id[0] === 'This field must be unique.') {
                        addToList(list, option);
                    }
                });
            });
            $.ajax('http://soundninja-django-py.herokuapp.com/whitelistitems/', {data: {page: getLocation()}}).done(function (data) {
                $('.sn-admin-panel-' + list).append(SN.admin.option(data));
            });
        }

        function getLocation() {
            return window.location.origin + window.location.pathname;
        }

        function addToList(list, option) {
            var location = getLocation();
            $('.sn-admin-panel-' + list).prepend(option);
            //$.ajax('http://localhost:5000/pages/', {
            $.ajax('http://soundninja-django-py.herokuapp.com/pages/', {
                data: {url_pattern: location},
                method: 'POST', type: 'POST'
            }).done(function () {
                addToWhiteList(location, option);
            }).fail(function (jqXHR) {
                if (!jqXHR.responseJSON)
                    jqXHR.responseJSON = JSON.parse(jqXHR.responseText);
                if (jqXHR.responseJSON.url_pattern[0] === 'This field must be unique.') {
                    addToWhiteList(location, option);
                }
            });
        }

        function addToWhiteList(location, option) {
            var whitelistText = $(option).data('text');
            //$.ajax('http://localhost:5000/whitelistitems/', {
            $.ajax('http://soundninja-django-py.herokuapp.com/whitelistitems/', {
                data: {page: location, artist: option.value, text: whitelistText},
                method: 'POST', type: 'POST'
            }).done(function (data) {
                //console.log(data);
                $('.sn-admin-panel-reload').off('click.reload').on('click.reload', reload).removeClass('sn-clickable-disabled');
            });
        }
    }

    function TextSelector(panel) {
        var lastname;

        document.body.addEventListener('mouseup', search);

        function suggest(name) {
            //$.ajax('//developer.echonest.com/api/v4/artist/suggest', {
            //$.ajax('//localhost:5000/suggest', {
            $.ajax('//soundninja-node-js.herokuapp.com/suggest', {
                data: {
                    format: "json",
                    name: name,
                    results: 100
                },
                dataType: "json" // in case jquery couldn't figure it out
            }).done(function (response) {
                if (name == lastname) // in case selection changed while we were ajaxing
                    display(name, response.response.artists);
            });
        }

        function display(text, artists) {
            panel.addOptions('whitelist', text, artists);
        }

        function search() {
            var name;
            if (panel.isOpen()) {
                name = getSelection().toString();
                if (name && name != lastname) {
                    lastname = name;
                    //$.ajax('//developer.echonest.com/api/v4/artist/suggest', {
                    //    $.ajax('//localhost:5000/search', {
                    $.ajax('//soundninja-node-js.herokuapp.com/search', {
                        data: {
                            format: "json",
                            name: name,
                            results: 100,
                            // TODO: check SoundninjaOpts for sources
                            bucket: ["id:spotify", "id:songkick" /*, "hotttnesss", "familiarity", "artist_location"*/ /*, "terms"*/, "genre"],
                            fuzzy_match: true,
                            sort: 'familiarity-desc'
                        },
                        dataType: "json", // in case jquery couldn't figure it out
                        traditional: true // for bucket instead of bucket[]
                    }).done(function (response) {
                        if (name == lastname) { // in case selection changed while we were ajaxing
                            var artists;
                            artists = response.response.artists;
                            if (artists.length)
                                display(name, artists);
                            else
                                suggest(name);
                        }
                    });
                }
            }
        }
    }

    function ListEditor(panel) {

    }
})(jQuery);
