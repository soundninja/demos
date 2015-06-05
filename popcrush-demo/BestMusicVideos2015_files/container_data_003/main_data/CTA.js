//bgColor, fontColor, text
function CTA(obj){
	this.marginWidth_num = 10;
	this.maxHeight_num = 28;
	this.fontSize_num = 12;

	this.container = document.createElement("div");
	this.container.style.position = "absolute";
	this.container.id = "cta";
	this.container.style.height = this.maxHeight_num + 'px';

	document.getElementsByTagName("body")[0].appendChild(this.container);

	this.textBox = document.createElement("div");
	this.textBox.style.position = "absolute";
	this.textBox.style.backgroundColor = obj.bgColor;
	this.textBox.style.height = this.maxHeight_num + 'px';

	this.container.appendChild(this.textBox);

	this.textString = document.createElement("div");
	this.textString.style.position = "absolute";
	this.textString.style.left = this.marginWidth_num + 'px';
	this.textString.style.whiteSpace="nowrap";
	this.textString.style.font = this.fontSize_num+"px Arial";
	this.textString.style.letterSpacing = '0px';
	this.textString.innerHTML = '<font color="'+obj.fontColor+'">'+obj.text+'</font>';
	this.container.appendChild(this.textString);
	this.textString.style.top = (Math.round(this.maxHeight_num/2) - Math.round(this.textString.offsetHeight/2)) + 'px';

	this.textBox.style.width = (this.textString.offsetWidth + (2*this.marginWidth_num)) + 'px';
	this.textBox.style.height = this.maxHeight_num + 'px';

	this.arrowBox = document.createElement("div");
	this.arrowBox.style.position = "absolute";
	this.arrowBox.style.width = this.maxHeight_num + 'px';
	this.arrowBox.style.height = this.maxHeight_num + 'px';
	this.arrowBox.style.backgroundColor = obj.ctaArrowColor;
	this.arrowBox.style.left = (this.textBox.offsetWidth + 1) + 'px';

	this.container.appendChild(this.arrowBox);

	this.arrow = document.createElement("div");
	this.arrow.style.position = "absolute";
	this.arrow.innerHTML = '<img src="images/cta_arrow.png" width="100%" height="100%" />'
	this.arrowBox.appendChild(this.arrow);
	this.arrow.style.top = '0px';
	this.arrow.style.left = '0px';

	this.container.style.width = (this.textBox.offsetWidth + 1 + this.arrowBox.offsetWidth) + 'px'
}