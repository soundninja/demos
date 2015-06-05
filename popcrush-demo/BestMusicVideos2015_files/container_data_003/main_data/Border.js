// width, height, thickness, color
function Border(obj){
	this.container = document.createElement("div");
	this.container.id = "border";
	this.container.style.position = "absolute";
	this.container.style.width = (obj.width - (obj.thickness*2)) + 'px';
	this.container.style.height = (obj.height - (obj.thickness*2)) + 'px';
	this.container.style.border = obj.thickness + "px solid " + obj.color;

	document.getElementsByTagName("body")[0].appendChild(this.container);
}