//divContainer, width, height, footerColor, leftTextMargin, rightTextMargin, fontSize, fontColor, text
function LegalFooter(obj){
	this.container = document.createElement("div");
	this.container.style.position = "absolute";
	this.container.style.width = obj.width + 'px';
	this.container.style.height = obj.height + 'px';
	this.container.style.backgroundColor = obj.footerColor;
	this.container.style.overflow = "hidden";

	document.getElementsByTagName("body")[0].appendChild(this.container);

	this.textString = document.createElement("div");
	this.textString.style.position = "absolute";
	this.textString.style.left = obj.leftTextMargin + 'px';
	this.textString.style.font = obj.fontSize +"px Arial";
	this.textString.style.width = (obj.width - (obj.leftTextMargin+obj.rightTextMargin) - 2) + 'px';
	this.textString.style.opacity = 0.9;
	this.textString.style.color = obj.fontColor;
	this.textString.style.lineHeight = '8px';
	this.textString.style.letterSpacing = '0px';
	this.container.appendChild(this.textString);
	this.textString.innerHTML = obj.text;
	this.textString.style.top = (Math.round(obj.height/2) - Math.round(this.textString.offsetHeight/2) - 1) + 'px';
}