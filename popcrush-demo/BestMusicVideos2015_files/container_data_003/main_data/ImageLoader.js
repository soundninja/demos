function ImageLoader(src){
	this.img;

	this.container = document.createElement("div");
	this.container.style.position = "absolute";

	this.img = new Image();
	this.img.src = src;

	this.evt = document.createEvent("Event");
	this.evt.initEvent("imageloaded", true, false);

	this.img.onload = (function(root){
		return function(){
			document.getElementsByTagName("body")[0].appendChild(root.container);
			root.container.style.width = root.img.width + 'px';
			root.container.style.height = root.img.height + 'px';
			root.container.appendChild(root.img);

			root.container.dispatchEvent(root.evt);
		}
	}(this));
}