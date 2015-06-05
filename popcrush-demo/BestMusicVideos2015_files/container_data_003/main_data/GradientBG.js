// color1, color2, width, height
function GradientBG(obj){
	this.colorOne = obj.color1;
	this.colorTwo = obj.color2;

	this.gradientPrefix = this.getCssValuePrefix('backgroundImage','linear-gradient(left, #fff, #fff)');
	this.gradientOrientation = this.getGradientOrientation(this.gradientPrefix);

	this.container = document.createElement("div");
	this.container.id = "bg";
	this.container.style.position = "absolute";
	this.container.style.top = '0px';
	this.container.style.left = '0px';
	this.container.style.width = obj.width + 'px';
	this.container.style.height = obj.height + 'px';

	document.getElementsByTagName("body")[0].appendChild(this.container);
	this.changeBackgroundGradient();
}

// Detect which browser prefix to use for the specified CSS value
// (e.g., background-image: -moz-linear-gradient(...);
//        background-image:   -o-linear-gradient(...); etc).
//
GradientBG.prototype.getCssValuePrefix = function(name, value) {
    var prefixes = ['', '-o-', '-ms-', '-moz-', '-webkit-'];

    // Create a temporary DOM object for testing
    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++) {
        // Attempt to set the style
        dom.style[name] = prefixes[i] + value;

        // Detect if the style was successfully set
        if (dom.style[name]) {
            return prefixes[i];
        }
        dom.style[name] = '';   // Reset the style
    }
}

// Based on different browsers, this function will generate the right gradient syntax
GradientBG.prototype.getGradientOrientation = function(str){
	switch(str){
		case '':
			return 'to right';
		break;
		case '-o-':
			return 'left';
		break;
		case '-ms-':
			return 'left';
		break;
		case '-moz-':
			return 'left';
		break;
		case '-webkit-':
			return 'left';
		break;
	}
}

// This function will apply the gradient to our background
GradientBG.prototype.changeBackgroundGradient = function(){
    // Setting the gradient later on
    if(!this.gradientPrefix&&/msie/i.test(window.navigator.userAgent)) {
        this.container.style.cssText = this.container.style.cssText + '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=\''+this.colorOne+'\', endColorstr=\''+this.colorTwo+'\')";'
    } else {
        this.container.style.backgroundImage = this.gradientPrefix + 'linear-gradient('
            + this.gradientOrientation + ', ' + this.colorOne + ', ' + this.colorTwo + ')';
    }
}