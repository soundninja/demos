(function(window) {
    var v = {
        mdom: 'http://event.altitude-arena.com/beacon/',
        sdom: 'http://arena.altitude-arena.com',
        com: 'qmp6b37555247145',
        pub: '97hc5ab538247145',
        sit: 'w6d2a0ec5a247145',
        sec: '9jfc4cda6e347145',
        siz: '300x250',
        pos: 'btf',
        pod: '9x1353fa6e347145',
        par: 'fnl',
        um: 'px',
        width: 300,
        height: 250,
        basicData: true,
        advancedData: false,
        customData: false,
        codeType: 'final',
        code: '',
        resType: 'display',
        cid: '23A0DB85-0B5A-448B-A14E-C3564833F270'
    };
    v.prevPod='cgg94aa7bf347145';v.prevPar='apn';v.isPassback=true;v.isApnPassback=true;v.ca='1';v.eventType='all-partners-failed';v.quant_pxurl='//pixel.quantserve.com/pixel/p-j1T2WVPwku77p.gif?';v.pubName='EurWeb.comPUB';v.sitName='EurWeb.com';v.sitType='network';v.secName='MedRec%20300%20BTF';v.evb='1';v.floor='0.000';
    if (window.ALT_ARENA) {
        window.ALT_ARENA.run(v);
    } else {
        window.ALT_ARENA_V = v;
        window.document.write('<scr' + 'ipt src="http://cdn.altitude-arena.com/js/aad157.js" type="text/javascript"></scr' + 'ipt>');
    }
})(window);