RatingsPlugIn = Class.extend({

	init: function() {
		this._shouldBeDisplayed = true;
        this._isFirstClip = true;
        this.mediaArea = {width:0, height:0};
		this.overlay = document.createElement("img");
        // helper objects
        this.imageManager = this.setUpRatingsImageManager();
        this.imageManager.setImageElement(this.overlay);
        this.nameMap = this.setUpNameMap();
        this.loadVars = this.setUpLoadVarsManager();
        this.ratingsTimer = this.setUpTimerUtils();
	},

    setUpRatingsImageManager : function() {
        var RatingsImageManagerClass = function(config) {
            this._config = config;
        };

        var config = {
            HD : {
                size : {width: 1920, height: 1080},
                position : {x:95, y: 100}
            },
            SD : {
                size : {width: 640, height: 480},
                position : {x:70, y: 40}
            }
        };
        RatingsImageManager.call(RatingsImageManagerClass.prototype);
        return new RatingsImageManagerClass(config);
    },

    setUpNameMap: function() {
        var RatingsNameMapClass = function() {};
        RatingsNameMap.call(RatingsNameMapClass.prototype);
        var r =  new RatingsNameMapClass();
        // this is used in showRatings and is mashed up with naming pattern when a
        // new images name is generated
        this._namingProperties = {
            HD : [
                {subdir: "hd_large", definition: "H", size: "L"},
                {subdir: "hd_mid", definition: "H", size: "M"}
            ],
            SD : [
                {subdir: "sd_large", definition: "S", size: "L"},
                {subdir: "sd_mid", definition: "S", size: "M"}
            ]
        };
        r.setNamingPattern("{subdir}/{size}{rating}{subratings}{definition}");
        return r;
    },

    setUpLoadVarsManager: function()
    {
        var RatingsLoadVarsManager = function() {};
        LaodVarsManager.call(RatingsLoadVarsManager.prototype);
        RatingsLoadVarsManagerMethods.call(RatingsLoadVarsManager.prototype);
        return new RatingsLoadVarsManager();
    },

    setUpTimerUtils : function()
    {
        var RatingsTimer =  function() {};
        BasicTimer.call(RatingsTimer.prototype);
        var t = new RatingsTimer();
        var me = this;
        t.setCallback(function() { me.hideRating() });

        return t;
    },

	initialize: function(loadObj) {
		var me = this;
		this.controller = loadObj.controller;
        this.loadVars.setLoadVars(loadObj.vars);

		this.controller.addEventListener("OnMediaPlaying", function(){ me.handleMediaPlaying.apply(me, arguments);});
		this.controller.addEventListener("OnMediaStart", function(){ me.handleMediaStart.apply(me, arguments); });
		this.controller.addEventListener("OnReleaseStart", function(){ me.handleLoadRelease.apply(me, arguments); });
        this.controller.addEventListener("OnReleaseEnd", function(){ me.handleReleaseEnd.apply(me, arguments); });
		this.controller.addEventListener("OnMediaError", function(){ me.handleMediaError.apply(me, arguments); });
		this.controller.addEventListener("OnMediaPause", function(){ me.handleMediaPause.apply(me, arguments); });
		this.controller.addEventListener("OnMediaUnpause", function(){ me.handleMediaUnpause.apply(me, arguments); });
        // player event
        this.controller.addEventListener("OnMediaAreaChanged", function(){me.handleMediaAreaChanged.apply(me, arguments)});
	},


	handleMediaPlaying: function(e) {    
		var time = Math.round(e.data.currentTime * 100) / 100;
        //console.log(time+" "+this._reminder*1000);

        if(this._reminder > -1 && time > (this._reminder*1000)) {
            this.showRating();
            this._reminder = -1;
        }
	},
	
	handleMediaStart: function(e) {
        var clip = e.data;

        if(clip.isAd)  {
           this._shouldBeDisplayed = true;
        } else {
           if(clip.baseClip && clip.baseClip.ratings.length > 0 && this._shouldBeDisplayed) {
               this.nameMap.setRatings(clip.baseClip.ratings);
               this.showRating();
               if(this._isFirstClip)
                this._isFirstClip = false;
           }
        }

	},

    handleLoadRelease : function(e) {
        this.resetState();
    },

	handleReleaseEnd: function(e) {
        this.resetState();
	},

    resetState : function() {
       this.imageManager.hide();
       this._shouldBeDisplayed = true;
       this._isFirstClip = true;
       this._reminder = this.loadVars.getReminder();
    },

	handleMediaPause: function(e) {
        if(this.ratingsTimer.isRunning()) {
            this.ratingsTimer.stop();
        }
	},
		
	handleMediaUnpause: function(e) {
        if(!this.ratingsTimer.isRunning()) {
            this.ratingsTimer.go();
        }
	},
	
	handleMediaError: function(e) {
        this.hideRating();
	},

    handleMediaAreaChanged: function(e) {
        // check width and height
        if(this.mediaArea.width != e.data.width || this.mediaArea.height != e.data.height) {
            this.mediaArea.width = e.data.width;
            this.mediaArea.height = e.data.height;
            this.imageManager.setContainerSize(this.mediaArea);
        }
    },

    showRating : function() {
        var additionalProps = this._namingProperties[this.imageManager.isHD()?"HD":"SD"][this._isFirstClip?0:1];
        var imageName = this.nameMap.getImageName(this.loadVars.getScheme(),additionalProps);
        console.log("Loading: "+this.loadVars.getPath()+imageName);
        this.imageManager.setImageSrc(this.loadVars.getPath()+imageName);

        if(!this.ratingsTimer.isRunning())
            this.ratingsTimer.start(this.loadVars.getDelay());
    },

    hideRating : function() {
        this.imageManager.hide();
    }
	
});

RatingsImageManager = function(config) {
    this._config = config;
    this._imgElement = undefined;
    this._srcLoaded = false;
    this._currentSrc = "";
    this._containerSize = {};
    this._nativeImageSize = {};

    this.setImageElement = function(img) {
        // make sure this only happens once
        if (this._imgElement)
            return;
        var me = this;
        this._imgElement = img;
        this._imgElement.style.position = 'relative';
        this._imgElement.style.zIndex = 150;
        this._imgElement.style.visibility = 'hidden'; // keep hidden until sized
        this._imgElement.onerror = function(e) { me._onError(e) };
        this._imgElement.onload = function(e) { me._onLoad(e) };
    };

    this.setImageSrc = function(src) {
        // don't try o load the same src again
        if(this._srcLoaded) {
            if(this._currentSrc == src)
                return;
        }
        this.hide(); // don't show the resizing
        this._srcLoaded = false; // keep track of what is loaded, may not need
        this._imgElement.src = this._currentSrc = src;
    };

    this.setContainerSize = function(size) {
        if(!size)
            return;
        this._containerSize.width = size.width;
        this._containerSize.height = size.height;

        this.resizeImage();
        this.positionImage();
    };

    this._getContainerSize = function() {
        if (!this._containerSize.hasOwnProperty("width") ||
            !this._containerSize.hasOwnProperty("height")) {
            // get from parent if nothing is set
            var p = this._imgElement.parentNode;
            this._containerSize = {width: p.clientWidth, height: p.clientHeight};
        }
        return this._containerSize;
    };

    this.resizeImage = function() {
        if(!this._imgElement || this._imgElement.clientWidth == 0)
            return;
        var baseSize = this._config[(this.isHD() ? 'HD' : 'SD')].size;
        var scale = Math.min(1, (this._getContainerSize().width / baseSize.width));
        this._imgElement.style.width = Math.floor(this._nativeImageSize.width*scale)+'px';
    };

    this.positionImage = function() {
        var base = this._config[(this.isHD() ? 'HD' : 'SD')];
        var scale = Math.min(1, (this._getContainerSize().width / base.size.width));
        this._imgElement.style.top = Math.floor(scale*base.position.x)+'px';
        this._imgElement.style.left = Math.floor(scale*base.position.y)+'px';
    };

    this._onError = function(e) {
        this._srcLoaded = false;
        console.log('Error: could not load: ' + e.currentTarget.src);
    };

    this._onLoad = function(e) {
        this._srcLoaded = true;
        // reset the image size
        this._imgElement.style.width = 'auto';
        this._imgElement.style.height = 'auto';
        // keep the image size for scaling purposes
        this._nativeImageSize.width = this._imgElement.clientWidth;
        this._nativeImageSize.height = this._imgElement.clientHeight;
        // do the resizing, positioning, and show
        this.resizeImage();
        this.positionImage();
        this.show();
    };

    this.isVisible = function() {
        //console.log(this._imgElement.style.visibility);
        return (this._imgElement.style.visibility == 'visible');
    };

    this.isHD = function() {
        // TODO: check this scaling could be off
        return ( (this._getContainerSize().width / this._getContainerSize().height) > 1.33);
    };

    this.show = function() {
        if (!this.isVisible() && this._srcLoaded) {
            this._imgElement.style.visibility = 'visible';
        }
    };

    this.hide = function() {
        if (this.isVisible()) {
            this._imgElement.style.visibility = 'hidden';
        }
    };

};

var LaodVarsManager = function() {
    this._defaults = [];

    this.setLoadVars = function(vars) {
        this._vars = vars;
        this.initVars();
    }

    this.initVars = function() {
       console.log('override in implementation');
    }

    this.addVar = function(varObj) {
        this._defaults.push(varObj);
    }

    this.getDefaultValue = function(name) {
        var i, obj;
        for (i = 0; i < this._defaults.length; i++) {
            obj = this._defaults[i];
            if (obj &&
                obj.hasOwnProperty('name') &&
               obj.hasOwnProperty('value') &&
               obj['name'] == name) {
                return obj['value'];
            }
        }
    }

    this.getVar = function(name) {
        var value = undefined;
        if (this._vars.hasOwnProperty(name)) {
            // TODO: validate this at some point
            value = this._vars[name];
        }
        if (!value)
            value = this.getDefaultValue(name);
        return value;
    }

    return this;
};

var RatingsLoadVarsManagerMethods = function() {

    this._delay = 15; // seconds
    this._scheme = '';
    this._position = {x: 100, y: 20};
    this._reminder = -1;

    this.initVars = function() {
        this.addVar({name: 'path', value: 'images/ratings', type: String});
        this.addVar({name: 'delay', value: 15, type: Number});
        this.addVar({name: 'scheme', value: 'urn:v-chip', type: String});
        this.addVar({name: 'position', value: {x: 100, y: 20}, type: Object});
        this.addVar({name: 'reminder', value: -1, type: Number});
    }

    this.getPath = function() {
        return this.getVar('path');
    }

    this.getDelay = function() {
        return this.getVar('delay');
    }

    this.getScheme = function() {
        return this.getVar('scheme');
    }

    this.getPosition = function() {
        return this.getVar('position');
    }

    this.getReminder = function() {
        return this.getVar('reminder');
    }

    return this;
};

var RatingsNameMap = function() {
    this._suffix = '.png';
    this._ratings = [];
    this._namingPattern = '{rating}{subratings}';
    this._filenameToUpper = true;

    this.setNamingPattern = function(value)
    {
        if (value.indexOf('{rating}') < 0) {
            console.log('Missing {rating} in naming pattern definition');
        } else {
            this._namingPattern = value;
        }
    };

    this.setFilenameToUpper = function(bool)
    {
        this._filenameToUpper = bool;
    };

    this.setRatings = function(obj)
    {
        this._ratings = obj;
    };

    this.setSuffix = function(value)
    {
        this._suffix = value;
    };

    this.getImageName = function(scheme, additionalParams)
    {
        var namePattern = this._namingPattern,
            rating = this._getRating(scheme),
            subRatings = '',
            toReplace;

        namePattern = namePattern.replace('{rating}', rating.rating.replace('-', ''));

        if (namePattern.indexOf('{subratings}') > -1)
        {
            subRatings = '';
            if (rating.hasOwnProperty('subRatings') && rating.subRatings.length > 0)
            {
                subRatings = rating.subRatings.join("");
            }
            namePattern = namePattern.replace('{subratings}', subRatings);
        }

        if (this._filenameToUpper)
        {
            namePattern = namePattern.toUpperCase();
        }

        for (var k in additionalParams)
        {
            toReplace = '{' + k + '}';
            if(this._filenameToUpper)
                toReplace = toReplace.toUpperCase();
            if (namePattern.indexOf(toReplace) >= 0)
            {
                namePattern = namePattern.replace(toReplace, additionalParams[k]);
            }
        }

        namePattern = namePattern.replace(/\s+/g,"");

        return namePattern+this._suffix;
    };

    this._getRating = function(scheme)
    {
        for (var k in this._ratings) {
           if (this._ratings[k]['scheme'] == scheme) {
                return this._ratings[k];
           }
        }
        return null;
    }

};

var BasicTimer = function() {
    this._interval = 1000;
    this._tickCounter = 0;
    this._id = 0;
    this._isRunning = false;

    this.setCallback = function(callback) {
        this._callback = callback;
    }

    this.start = function(seconds) {
        this._seconds = seconds;
        this.go();
    };

    this.go = function()
    {
        if (!this._isRunning) {
            var that = this;
            this._isRunning = true;
            this._id = setInterval(function() {
                that._tick();
            }, this._interval);
        }
    }

    this._tick = function() {
       if (this._seconds <= this._tickCounter) {
           //console.log('timer complete');
           this._callback(this._id);
           this.reset();
       } else {
           //console.log('timer tick: '+ this._tickCounter);
           this._tickCounter++;
       }
    }

    this.stop = function() {
       //console.log("stop");
       this._isRunning = false;
       clearInterval(this._id);
    };

    this.isRunning = function() {
        return this._isRunning;
    };

    this.reset = function() {
       //console.log("reset");
       this.stop();
       this._tickCounter = 0;
    }

};

// create an instance of the plugin and tell the controller we're ready.
// optionally you can pass a second param to add to the plugin's layer (any html element)
var ratingsPlugIn = new RatingsPlugIn();
tpController.plugInLoaded(ratingsPlugIn, ratingsPlugIn.overlay);