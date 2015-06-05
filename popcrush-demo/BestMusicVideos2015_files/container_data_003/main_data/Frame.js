// frameType, width, height, topTextMargin, leftTextMargin, rightTextMargin, headlineFontSize,
// headlineLetterSpacing, headlineLineHeight, headlineColor, headlineText,
// subHeadColor, subHeadText, valueStackTextColor, valueStackPrice, valueStackDescription
function Frame(obj){
	this.frame_obj = obj;
	this.valueStack_priceDollarSign_fontSize_num = 17;
	this.valueStack_price_fontSize_num = 27;

	this.valueStackMargin_num = 5;
	this.valueStackTextTopMargin_num = 3;
	this.valueStackTextLeftMargin_num = 6;

	this.randomClassName;

	this.subscript_arr = [];

	this.isValueStack_bool = false;

	this.splitHeadline;

	this.container = document.createElement("div");
	this.container.style.position = "absolute";
	this.container.style.width = obj.width + 'px';
	this.container.style.height = obj.height + 'px';

	document.getElementsByTagName("body")[0].appendChild(this.container);

	if(obj.headlineText != ""){
		this.headline = document.createElement("div");
		this.headline.style.position = "absolute";
		this.headline.style.font = obj.headlineFontSize + "px HelveticaNeue";
		this.headline.style.opacity = 0;
		this.container.appendChild(this.headline);
		this.headline.style.top = obj.topTextMargin + 'px';
		this.headline.style.left = obj.leftTextMargin + 'px';
		this.headline.style.width = (obj.width - (obj.leftTextMargin + obj.rightTextMargin)) + 'px';
		this.headline.style.lineHeight = (obj.headlineLineHeight) + 'px';
		this.headline.style.letterSpacing = obj.headlineLetterSpacing + 'px';
		this.headline.style.color = obj.headlineColor;
		this.headline.innerHTML = obj.headlineText;
	} else {
		this.headline = new BlankDiv();
	}

	if (obj.frameType == "normal"){
		setTimeout(
			(function(root){
				return function(){
					if(root.frame_obj.subheadText != ""){
						root.subhead = document.createElement("div");
						root.subhead.style.position = "absolute";
						root.subhead.style.font = root.frame_obj.subHeadFontSize + "px Arial";
						root.subhead.style.opacity = 0;
						root.container.appendChild(root.subhead);
						root.subhead.style.top = ((root.frame_obj.headlineText != "") ? (root.frame_obj.topTextMargin + root.headline.offsetHeight + 4) : root.frame_obj.topTextMargin) + 'px';
						root.subhead.style.left = root.frame_obj.leftTextMargin + 'px';
						root.subhead.style.width = (root.frame_obj.width - (root.frame_obj.leftTextMargin + root.frame_obj.rightTextMargin)) + 'px';
						root.subhead.style.lineHeight = root.frame_obj.subHeadLineHeight + 'px';
						root.subhead.style.letterSpacing = root.frame_obj.subHeadLetterSpacing + 'px';
						root.subhead.style.color = root.frame_obj.subHeadColor;
						root.subhead.innerHTML = root.frame_obj.subHeadText;
					} else {
						root.subhead = new BlankDiv();
					}
				}
			}(this))
		,200);
	} else if (obj.frameType == "resolve"){
		setTimeout(
			(function(root){
				return function(){
					root.valueStackBox = document.createElement("div");
					root.valueStackBox.style.position = "absolute";
					root.container.appendChild(root.valueStackBox);
					root.valueStackBox.style.backgroundColor = "#000000";
					root.valueStackBox.style.opacity = 0;
					root.valueStackBox.style.top = ((root.frame_obj.headlineText != "") ? (root.frame_obj.topTextMargin + root.headline.offsetHeight + root.valueStackMargin_num ) : root.frame_obj.topTextMargin) + 'px';
					root.valueStackBox.style.left = root.frame_obj.leftTextMargin + 'px';


					if(root.frame_obj.valueStackPrice != "" || root.frame_obj.valueStackDescription != ""){
						root.isValueStack_bool = true;
						root.valueTextDescription = document.createElement("div");
						root.valueTextDescription.style.position = "absolute";
						root.valueTextDescription.style.font = root.frame_obj.valueStackDescriptionFontSize + "px Arial";
						root.valueTextDescription.style.color = root.frame_obj.valueStackTextColor;
						root.valueTextDescription.style.opacity = 0;
						root.valueTextDescription.style.lineHeight = root.frame_obj.valueStackDescriptionLineHeight + 'px';
						root.valueTextDescription.style.letterSpacing = root.frame_obj.valueStackDescriptionLetterSpacing + 'px';

						if(root.frame_obj.valueStackPrice != ""){
							root.valueTextPriceHolder = document.createElement("div");
							root.valueTextPriceHolder.style.position = "absolute";
							root.valueTextPriceHolder.style.font = root.valueStack_price_fontSize_num + "px Arial";
							root.valueTextPriceHolder.style.opacity = 0;
							root.valueTextPriceHolder.style.color = root.frame_obj.valueStackTextColor;
							root.valueTextPriceHolder.innerHTML = root.frame_obj.valueStackPrice;
							root.container.appendChild(root.valueTextPriceHolder);

							root.valueTextDollarSign = document.createElement("div");
							root.valueTextDollarSign.style.position = "absolute";
							root.valueTextDollarSign.style.font = root.valueStack_priceDollarSign_fontSize_num + "px Arial";
							root.valueTextDollarSign.style.opacity = 0;
							root.valueTextDollarSign.style.color = root.frame_obj.valueStackTextColor;
							root.valueTextDollarSign.innerHTML = '$';
							root.container.appendChild(root.valueTextDollarSign);

							root.valueTextDescription.style.whiteSpace ="nowrap";

							if(root.frame_obj.valueStackDescriptionPer != ""){
								root.valueTextDescription.innerHTML = root.frame_obj.valueStackDescriptionPer + '&nbsp;&nbsp;&nbsp;'+root.frame_obj.valueStackDescription;
							} else {
								root.valueTextDescription.innerHTML = root.frame_obj.valueStackDescription;
							}

						} else {
							root.valueTextPriceHolder = new BlankDiv();
							root.valueTextDollarSign = new BlankDiv();
							root.valueTextDescription.innerHTML = root.frame_obj.valueStackDescription;
						}
						root.container.appendChild(root.valueTextDescription);

						if(root.frame_obj.valueStackPrice != ""){
							root.valueStackBox.style.height = (root.valueTextPriceHolder.offsetHeight + (root.valueStackTextTopMargin_num))+'px';
							root.valueTextPriceHolder.style.top = (root.valueStackBox.offsetTop + (Math.round(root.valueStackBox.offsetHeight/2) - Math.round(root.valueTextPriceHolder.offsetHeight/2))+1) + 'px';
							root.valueTextDollarSign.style.top = (root.valueTextPriceHolder.offsetTop+2) + 'px';
							root.valueTextDollarSign.style.left = (root.valueStackBox.offsetLeft + root.valueStackTextLeftMargin_num) + 'px';
							root.valueTextPriceHolder.style.left = (root.valueTextDollarSign.offsetLeft + root.valueTextDollarSign.offsetWidth) + 'px';
							root.valueTextDescription.style.top = ((root.valueTextPriceHolder.offsetTop + root.valueTextPriceHolder.offsetHeight) - root.valueTextDescription.offsetHeight - 4) + 'px';
							if(root.frame_obj.valueStackDescriptionPer != ""){
								root.valueTextDescription.style.left = (root.valueTextPriceHolder.offsetLeft + root.valueTextPriceHolder.offsetWidth + 1) + 'px';
								root.valueStackBox.style.width = ((root.valueStackTextLeftMargin_num*2) + root.valueTextDollarSign.offsetWidth + root.valueTextPriceHolder.offsetWidth + root.valueTextDescription.offsetWidth + 1) + 'px';
							} else {
								root.valueTextDescription.style.left = (root.valueTextPriceHolder.offsetLeft + root.valueTextPriceHolder.offsetWidth + 8) + 'px';
								root.valueStackBox.style.width = ((root.valueStackTextLeftMargin_num*2) + root.valueTextDollarSign.offsetWidth + root.valueTextPriceHolder.offsetWidth + root.valueTextDescription.offsetWidth + 8) + 'px';
							}
							//root.valueStackBox.style.width = ((root.valueStackTextLeftMargin_num*2) + root.valueTextDollarSign.offsetWidth + root.valueTextPriceHolder.offsetWidth + root.valueTextDescription.offsetWidth) + 'px';
						} else {
							//root.valueStackBox.style.width = ((root.valueStackTextLeftMargin_num*2) + root.valueTextDollarSign.offsetWidth + root.valueTextPriceHolder.offsetWidth) + 'px';
							if(root.valueTextDescription.offsetWidth > (root.frame_obj.width - (root.frame_obj.leftTextMargin + root.frame_obj.rightTextMargin) - (root.valueStackTextLeftMargin_num*2))){
								root.valueTextDescription.style.width = (root.frame_obj.width - (root.frame_obj.leftTextMargin + root.frame_obj.rightTextMargin) - (root.valueStackTextLeftMargin_num*2)) + 'px';
							}
							root.valueStackBox.style.width = ((root.valueStackTextLeftMargin_num*2) + root.valueTextDescription.offsetWidth) + 'px';
							root.valueStackBox.style.height = (root.valueTextDescription.offsetHeight + ((root.valueStackTextTopMargin_num+1.5)*2))+'px';
							root.valueTextDescription.style.top = (root.valueStackBox.offsetTop + (Math.round(root.valueStackBox.offsetHeight/2) - Math.round(root.valueTextDescription.offsetHeight/2))) + 'px';
							root.valueTextDescription.style.left = (root.valueStackBox.offsetLeft + root.valueStackTextLeftMargin_num) + 'px';
						}
					}
				}
			}(this))
		,200);
	}
}

Frame.prototype.createSupClass = function(className,charNum) {
	// the following code sets the superscripting attributes to the character number.
	var char_top = (parseInt((FT.query("."+className+charNum)[0].style.top), 10) - 2) + "px";
    var str= "."+className+charNum+"{font-size: 0.6em; top:"+char_top+" !important}";
    var pa= document.getElementsByTagName('head')[0];
    var el= document.createElement('style');
    el.type= 'text/css';
    if(el.styleSheet) el.styleSheet.cssText= str;// IE method
    else el.appendChild(document.createTextNode(str));// others
    pa.appendChild(el);
};

Frame.prototype.removeHeadlineWhiteSpace = function(){
	var str = this.headline.textContent;

	str = str.split(' ').join('');

	return str;
}

Frame.prototype.getIndicesOf = function(searchStr, str) {
    var startIndex = 0, searchStrLen = searchStr.length;
    var index;

    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        this.subscript_arr.push(index);
        startIndex = index + searchStrLen;
    }
}

Frame.prototype.getRandomNumber = function(min, max){
    return Math.random() * (max - min) + min;
}

Frame.prototype.getRandomLetter = function(){
	var randomNumber = Math.round(this.getRandomNumber(1, 26));

	switch(randomNumber){
		case 1:return "a";break;
		case 2:return "b";break;
		case 3:return "c";break;
		case 4:return "d";break;
		case 5:return "e";break;
		case 6:return "f";break;
		case 7:return "g";break;
		case 8:return "h";break;
		case 9:return "i";break;
		case 10:return "j";break;
		case 11:return "k";break;
		case 12:return "l";break;
		case 13:return "m";break;
		case 14:return "n";break;
		case 15:return "o";break;
		case 16:return "p";break;
		case 17:return "q";break;
		case 18:return "r";break;
		case 19:return "s";break;
		case 20:return "t";break;
		case 21:return "u";break;
		case 22:return "v";break;
		case 23:return "w";break;
		case 24:return "x";break;
		case 25:return "y";break;
		case 26:return "z";break;
	}
}

Frame.prototype.createRandomString = function(){
	return (this.getRandomLetter()+this.getRandomLetter()+this.getRandomLetter()+this.getRandomLetter()+this.getRandomLetter()+this.getRandomLetter()+this.getRandomLetter());
}

Frame.prototype.animateHeadline = function(){
	this.headline.style.visibility = 'hidden';
	this.headline.style.opacity = 1;

	// Removes the spaces from our headline text and stores into this var
	// This is used to search for our special subscripted character's positions
	this.headlineNoWhitespace_str = this.removeHeadlineWhiteSpace();

	this.subscript_arr = [];

	// Finds necessary characters in our string that need to be subscripted,
	// then stores the locations of those characters in the subscript_arr array
	this.getIndicesOf("®", this.headlineNoWhitespace_str, false);
	this.getIndicesOf("™", this.headlineNoWhitespace_str, false);
	this.getIndicesOf("℠", this.headlineNoWhitespace_str, false);
	this.getIndicesOf("©", this.headlineNoWhitespace_str, false);

	// For some reason when applying the superscript on characters, the lines shift
	// slightly and adds a few pixels to each line. This conditional is to offset that
	if(this.subscript_arr.length > 0){
		this.headline.style.lineHeight = (this.frame_obj.headlineLineHeight-2) + 'px';

		if (this.frame_obj.frameType == "normal"){
			this.subhead.style.top = ((this.frame_obj.headlineText != "") ? (this.frame_obj.topTextMargin + this.headline.offsetHeight + 6) : this.frame_obj.topTextMargin) + 'px';
		}
	}

	//console.log(this.subscript_arr);
	this.randomClassName = this.createRandomString();

    var splitHeadline = new SplitText(this.headline, {type:"chars", position:"absolute", charsClass: this.randomClassName+"++"});
    this.headline.style.visibility = 'visible';
    for (var i=0; i<splitHeadline.chars.length; i++){
        TweenLite.from(splitHeadline.chars[i], .25, {
            opacity:0,
            ease:Quad.easeInOut,
            delay:(i*.0075)
        });
    }

    // This loop will look into the subscript_arr, and will subscript the characters needed.
	for (var j=0; j<this.subscript_arr.length; j++){
		this.createSupClass(this.randomClassName,(this.subscript_arr[j]+1));
	}
};


Frame.prototype.animateSubhead = function(){
	TweenLite.to(this.subhead, .5, {opacity:1});
}

Frame.prototype.animateValueStack = function(){
    if(this.isValueStack_bool){
    	TweenLite.to(this.valueStackBox, .5, {opacity: 0.25});
    	TweenLite.to(this.valueTextDollarSign, .5, {opacity: 1});
    	TweenLite.to(this.valueTextPriceHolder, .5, {opacity: 1});
    	TweenLite.to(this.valueTextDescription, .5, {opacity: 1});
    }
}

Frame.prototype.animateIn = function(d){
	setTimeout((function(root){
		return function(){
			root.animateHeadline();
		}
	}(this)), d*1000);

	if(this.frame_obj.frameType == "normal"){
		setTimeout((function(root){
			return function(){
				root.animateSubhead();
			}
		}(this)), (d*1000) + 750);
	}

	if(this.frame_obj.frameType == "resolve"){
		setTimeout((function(root){
			return function(){
				root.animateValueStack();
			}
		}(this)), (d*1000) + 750);
	}
}

Frame.prototype.animateOut = function(d){
	TweenLite.to(this.container, .35, {opacity:0, delay:d});
}

