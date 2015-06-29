function getParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)",
    regex = new RegExp(regexS),
    results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
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

function localTimeFromUTC(time){

    // get time offset from browser
            date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " "));
            
            var currentDate = new Date();
            var offset = -(currentDate.getTimezoneOffset() / 60);

            // get provided date
            var givenDate = new Date(date);

            // apply offset
            var hours = givenDate.getHours();
            hours += offset;
            //givenDate.setHours(hours);
            givenDate.setTime(givenDate.getTime() + (hours * 60 * 60 * 1000)); 
            // format the date
            //var localDateString = $.format.date(givenDate, format);
            return givenDate;
};

function prettyDate(time) {
    try {
        var date = new Date(), diff, day_diff;
        date = new Date((time || "").replace(/\-/g, '\/').replace(/[T|Z]/g, ' '));
        if (date == 'Invalid Date')
            date.setISO8601(time);
		var diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
        if (isNaN(day_diff) || day_diff < -1) {
            $('body').append(date + "<br>");
            return time;
        }
        if (day_diff >= 7)
            return $.datepicker.formatDate('D, dd/mm/y', date);
        if (day_diff >= 2) {
            return $.datepicker.formatDate('D, dd/mm/y', date) + " @ " + FormatTime(date);
//            return $.datepicker.formatDate('D, ', date) + date.toLocaleDateString() + " @ " + FormatTime(date);
        }
        return (day_diff == 0 || day_diff == -1) && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
		day_diff == 1 && "Yesterday @ " + FormatTime(date) ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
        return time;
    } catch (er) {
        $('body').append(er.Message + "<br>");
        return time;
    }
}
function prettyLocalDateTime(time) {
    try {
        var offset = -(new Date().getTimezoneOffset() / 60),
            hours = time.getHours();
        hours += offset;
        var date = new Date(time.getTime() + (hours * 60 * 60 * 1000));

        var diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
        if (isNaN(day_diff) || day_diff < -1)
            return date;
        if (day_diff >= 2)
            return $.datepicker.formatDate('DD, mm/dd/yy', date) + " @ " + FormatTime(date);
        return (day_diff == 0 || day_diff == -1) && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
		day_diff == 1 && "Yesterday @ " + FormatTime(date) ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
        return date;
    } catch (er) {
        $('body').append(er.Message + "<br>");
        return time;
    }
}

function prettyLocalDate(time) {
    try {
        var date2 = new  Date(time),
            offset = (new Date().getTimezoneOffset() / 60) + 2,
            hours = time.getHours();
        hours += offset;

        var date = new Date(date2.getTime()); // + (offset * 60 * 60 * 1000));
        var diff = (((new Date()).getTime() - date.getTime() - (offset * 60 * 60 * 1000)) / 1000),
		day_diff = Math.floor(diff / 86400);
        if (isNaN(day_diff) || day_diff < -1)
            return date;
        if (day_diff >= 2)
            return $.datepicker.formatDate('DD, mm/dd/yy', date) + " @ " + FormatTime(date);
        return (day_diff == 0 || day_diff == -1) && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
		day_diff == 1 && "Yesterday @ " + FormatTime(date) ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
        return date;
    } catch (er) {
        $('body').append(er.Message+"<br>");
        return time;
    }
}

function FormatTime(currentTime) {
    var hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    suffix = "AM";
//    if (hours >= 12) {
//        suffix = "PM";
//        hours = hours - 12;
//    }
//    if (hours == 0) {
//        hours = 12;
//    }

    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;

    return hours + ":" + minutes;
    return (hours + ":" + minutes + " " + suffix);
}

function nl2br_js(myString) {
    return myString.replace(/\n/g, '<br />\n');
}

function linkify(inputText) {
    var replaceText, replacePattern1, replacePattern2;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(^| )(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '$1<a href="$2" target="_blank">$2</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    return replacedText;
}


if (typeof jQuery != 'undefined') {
    jQuery.fn.humane_dates = function () {
        return this.each(function () {
            var date = humane_date(this.title);
            if (date && jQuery(this).text() != date) // don't modify the dom if we don't have to
                jQuery(this).text(date);
        });
    };
}

Date.prototype.setISO8601 = function (string) {
    var regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
        "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?" +
        "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
    var d = string.match(new RegExp(regexp));

    var offset = 0;
    var date = new Date(d[1], 0, 1);

    if (d[3]) { date.setMonth(d[3] - 1); }
    if (d[5]) { date.setDate(d[5]); }
    if (d[7]) { date.setHours(d[7]); }
    if (d[8]) { date.setMinutes(d[8]); }
    if (d[10]) { date.setSeconds(d[10]); }
    if (d[12]) { date.setMilliseconds(Number("0." + d[12]) * 1000); }
    if (d[14]) {
        offset = (Number(d[16]) * 60) + Number(d[17]);
        offset *= ((d[15] == '-') ? 1 : -1);
    }

    offset -= date.getTimezoneOffset();
    time = (Number(date) + (offset * 60 * 1000));
    this.setTime(Number(time));
}

function timecode(ms) {
    var hms = function (ms) {
        return {
            h: Math.floor(ms / (60 * 60 * 1000)),
            m: Math.floor((ms / 60000) % 60),
            s: Math.floor((ms / 1000) % 60)
        };
    } (ms),
        tc = []; // Timecode array to be joined with '.'

    if (hms.h > 0) {
        tc.push(hms.h);
    }
    if (isNaN(hms.m)) return 'n/a';
    tc.push((hms.m < 10 && hms.h > 0 ? "0" + hms.m : hms.m));
    tc.push((hms.s < 10 ? "0" + hms.s : hms.s));

    return tc.join(':');
};

function LogActivity(t, a, type) {
    $.ajax({
        url: '/svc/Log.ashx',
        dataType: 'json',
        type: 'post',
        data: {
            'uid': '',
            'tid': t,
            'ttype': type,
            'activity': a,
            'type': 's'
        },
        'success': function (response) {
            //            console.log(response);
        }
    });
}
