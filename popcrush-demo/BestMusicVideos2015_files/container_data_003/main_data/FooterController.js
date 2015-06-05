//adWidth, adHeight, arr
function FooterController(obj){
	this.footer_obj = obj;
	this.footerHeight_num = 21;
	for (var i=0; i<3; i++){
		if (obj.footerArr[i].text != ""){

			this["footer"+(i+1)] = new LegalFooter({		width: 				obj.adWidth, 
															height: 			this.footerHeight_num, 
															footerColor: 		"#FFFFFF", 
															leftTextMargin: 	obj.footerArr[i].leftTextMargin,
															rightTextMargin: 	obj.footerArr[i].rightTextMargin,
															fontSize: 			9,
															fontColor: 			"#000000",
															text: 				obj.footerArr[i].text
												});
		} else {
			this["footer"+(i+1)] = new BlankDiv();
		}

		this["footer"+(i+1)].container.style.top = (obj.adHeight) + 'px';
	}

}

// delay
FooterController.prototype.animateFrame1 = function(delay){
	if(this.footer_obj.footerArr[0].text != ""){
		TweenLite.to(this.footer1.container, .65, {	top: this.footer_obj.adHeight - this.footer1.container.offsetHeight, 
													delay:delay,
													ease:Quad.easeOut
													});
	}
}

// delay
FooterController.prototype.animateFrame2 = function(delay){

	if ((this.footer_obj.footerArr[1].text == "") && (this.footer_obj.footerArr[0].text != "")){
		TweenLite.to(this.footer1.container, .65, {	top: this.footer_obj.adHeight, 
													delay:delay + 0.75,
													ease:Quad.easeOut
												});
	}

	if ((this.footer_obj.footerArr[1].text != "") && (this.footer_obj.footerArr[0].text != "")){
		TweenLite.to(this.footer1.textString, .65, {	opacity: 0, 
														delay:delay, 
														ease:Quad.easeIn
													});

		TweenLite.delayedCall(delay + 0.65, (function(r){
			return function(){
				r.footer1.container.style.opacity = 0;
				r.footer2.textString.style.opacity = 0;
				r.footer2.container.style.top = (r.footer_obj.adHeight - r.footer2.container.offsetHeight) + 'px';
				r.footer2.container.style.opacity = 1;
			}
		}(this)));

		TweenLite.to(this.footer2.textString, .65, {	opacity: 1, 
														delay:delay + 0.75, 
														ease:Quad.easeIn
													});
	}

	if ((this.footer_obj.footerArr[1].text != "") && (this.footer_obj.footerArr[0].text == "")){
		TweenLite.to(this.footer2.container, .65, {	top: this.footer_obj.adHeight - this.footer2.container.offsetHeight, 
													delay:delay + 1.5,
													ease:Quad.easeOut
												});
	}
}

// delay
FooterController.prototype.animateFrame3 = function(delay){

	if ((this.footer_obj.footerArr[2].text == "") && (this.footer_obj.footerArr[1].text != "")){
		TweenLite.to(this.footer2.container, .65, {	top: this.footer_obj.adHeight, 
													delay:delay + 0.75,
													ease:Quad.easeOut
													});
	}

	if ((this.footer_obj.footerArr[2].text != "") && (this.footer_obj.footerArr[1].text != "")){
		TweenLite.to(this.footer2.textString, .65, {	opacity: 0, 
														delay:delay, 
														ease:Quad.easeIn
													});

		TweenLite.delayedCall(delay + 0.65, (function(r){
			return function(){
				r.footer2.container.style.opacity = 0;
				r.footer3.textString.style.opacity = 0;
				r.footer3.container.style.top = (r.footer_obj.adHeight - r.footer3.container.offsetHeight) + 'px';
				r.footer3.container.style.opacity = 1;
			}
		}(this)));

		TweenLite.to(this.footer3.textString, .65, {	opacity: 1, 
														delay:delay + 0.75, 
														ease:Quad.easeIn
													});
	}

	if ((this.footer_obj.footerArr[2].text != "") && (this.footer_obj.footerArr[1].text == "")){
		TweenLite.to(this.footer3.container, .65, {	top: this.footer_obj.adHeight - this.footer3.container.offsetHeight, 
													delay:delay + 1.5,
													ease:Quad.easeOut
												});
	}
}