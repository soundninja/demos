/*------------------------------------------------------------------------*/
// VARS - FT OBJECT
/*------------------------------------------------------------------------*/
var myFT = new FT();

/*------------------------------------------------------------------------*/
// VARS - ALIGNMENT/PROPERTY VARS
/*------------------------------------------------------------------------*/
// These vars are used to properly line up certain objects in our ad.
// here is a legend of what they do:
// - adWidth_num 			: width of ad
// - adHeight_num 			: height of ad,
// - adMargin_num			: The ad margins (top, left, right).  This var gives us
//					  		  a space in pixels from the top, left, and right edges
//					  		  of our ad, and objects in our ad are lined up as such.
// - left_frameMargin_num	: This is the space in pixels of separation on the left
// 							  and right sides of our animated elements. This ensures
// 							  this much space in pixels between the animated elements
// 							  and product image and/or animated elements and cta.
// - bgColor_arr			: This array will hold our background color gradient
// 							  values once it is loaded from our instant ad.
var adWidth_num = 728;
var adHeight_num = 90;
var adMargin_num = 14;
var left_frameMargin_num = 14;
var bgColor_arr;

/*------------------------------------------------------------------------*/
// VARS - BROWSER WINDOW AND IA VAR LOAD BOOLEANS
/*------------------------------------------------------------------------*/
// These booleans will be used to check if our window and ia vars have loaded.
var isWindowLoaded_bool = false;
var isIALoaded_bool = false;

/*------------------------------------------------------------------------*/
// VARS - OBJECT INITIALIZATION
/*------------------------------------------------------------------------*/
// These objects hold information that will let us know if the objects are
// loaded and/or if they are visible in our ad. This is used for both pre-
// loading and alignment purposes. As the names imply, these objects hold
// this information for the cta, logo, product image, and footer respectively.
var ctaInfo_obj = {isLoaded: false, isVisible: false};
var logoInfo_obj = {isLoaded: false, isVisible: false};
var product1Info_obj = {isLoaded: false, isVisible: false};
var product2Info_obj = {isLoaded: false, isVisible: false};
var product3Info_obj = {isLoaded: false, isVisible: false};
var footersInfo_obj = {isLoaded: false};

/*------------------------------------------------------------------------*/
// VARS - PRODUCTS/FOOTERS ARRAY
/*------------------------------------------------------------------------*/
// This array will hold the information necessary to create our products
// and footers
var products_arr = new Array();
var footers_arr = new Array();

/*------------------------------------------------------------------------*/
// VARS - OBJECTS IN OUR AD
/*------------------------------------------------------------------------*/
var body = document.getElementsByTagName("body")[0];
var gradient_bg;
var logo;
var cta;
var product1;
var product2;
var product3;
var footers;
var footer1;
var footer2;
var footer3;
var frame1;
var frame2;
var frame3;
var border;
var clickButton;

/*------------------------------------------------------------------------*/
// VARS - PRELOADERS
/*------------------------------------------------------------------------*/
// These intervals are used to preload our ad unit before displaying.  The
// unit loads in 3 stages:
// - stage1 : This stage makes sure that the browser window and instant ads
//            are loaded. Once they are, the logo, cta, and product image
//            will begin to initialize.
// - stage2 : This stage ensures that the logo, cta, and product image are
//            loaded. This is needed so that the footer can align itself
//            properly.  Once it insures that they have loaded, the
//            footer then will initialize itself.
// - stage3 : This stage ensures that the footer is loaded. This is for
//            alignment purposes so that the animation frames can align
//            themselves properly.  Once the footer is loaded, animation
//            frames are initialized, and our ad can finally start playing.
//
var stage1_preloader_interval = setInterval(stage1Preloader, 1);
var stage2_preloader_interval;
var stage3_preloader_interval;

/*------------------------------------------------------------------------*/
// FUNCTIONS - PRELOADERS
/*------------------------------------------------------------------------*/
// These load functions will switch their respective booleans to true
// for proper loading.
window.onload = function(){isWindowLoaded_bool = true;}
function logoLoaded(){logoInfo_obj.isLoaded = true;}
function ctaLoaded(){ctaInfo_obj.isLoaded = true;}
function product1Loaded(){product1Info_obj.isLoaded = true;}
function product2Loaded(){product2Info_obj.isLoaded = true;}
function product3Loaded(){product3Info_obj.isLoaded = true;}
function footersLoaded(){footersInfo_obj.isLoaded = true;}

// This eventlistener has issues in Firefox. Removing this for now
myFT.addEventListener('instantads', function(){
	bgColor_arr = myFT.instantAds.IA_bg_grad.split(",");
	isIALoaded_bool = true;
});

// Stage 1 preloader
function stage1Preloader(){
    if(isWindowLoaded_bool && isIALoaded_bool) {
        clearInterval(stage1_preloader_interval);

       	stage1Init();
    }
}

// Stage 2 preloader
function stage2Preloader(){
	if(logoInfo_obj.isLoaded && ctaInfo_obj.isLoaded && product1Info_obj.isLoaded  && product2Info_obj.isLoaded  && product3Info_obj.isLoaded) {

		clearInterval(stage2_preloader_interval);
        stage2Init();
    }
}

// Stage 3 preloader
function stage3Preloader(){
	//console.log("LOADIG");
	if(footersInfo_obj.isLoaded) {
		console.log("FOOTERS LOADED");
		clearInterval(stage3_preloader_interval);
        stage3Init();
    }
}

/*------------------------------------------------------------------------*/
// FUNCTIONS - OBJECT SETUP
/*------------------------------------------------------------------------*/
// Once Stage 1 has loaded, this will initialize the gradient background,
// cta, logo, and product image
function stage1Init(){
	// Initiates the stage 2 loading process
	stage2_preloader_interval = setInterval(stage2Preloader, 1);

	// Gradient Background
	gradient_bg = new GradientBG({	color1: bgColor_arr[0],
									color2: bgColor_arr[1],
									width: 	adWidth_num,
									height: adHeight_num
								});

	// These objects hold information that will let us know if the objects are
	// loaded and/or if they are visible in our ad. This is used for both pre-
	// loading and alignment purposes. As the names imply, these objects hold
	// this information for the cta, logo, product image, and footer respectively.
	ctaInfo_obj.isVisible = (myFT.instantAds.IA_cta_text != "") ? true : false;
	logoInfo_obj.isVisible = (myFT.instantAds.IA_logo != "") ? true : false;
	product1Info_obj.isVisible = (myFT.instantAds.IA_prodImgFr1 != "") ? true : false;
	product2Info_obj.isVisible = (myFT.instantAds.IA_prodImgFr2 != "") ? true : false;
	product3Info_obj.isVisible = (myFT.instantAds.IA_prodImgFr3 != "") ? true : false;

	// Initializes CTA
	if (ctaInfo_obj.isVisible){
		cta = new CTA({		bgColor: 		'#FFFFFF',
							fontColor: 		myFT.instantAds.IA_cta_textColor,
							text: 			myFT.instantAds.IA_cta_text,
							ctaArrowColor: 	myFT.instantAds.IA_cta_arrowColor
						});
	} else {
		cta = new BlankDiv();
	}
	cta.container.style.opacity = 0;
	ctaLoaded();

	// Initializes Logo
	if (logoInfo_obj.isVisible){
		logo = new ImageLoader(myFT.instantAds.IA_logo);
		logo.container.addEventListener("imageloaded", logoLoaded);
	} else {
		logo = new BlankDiv();
		logoLoaded();
	}
	logo.container.style.opacity = 0;

	// Initializes Product Image for all 3 frames
	for (var i=1; i<=3; i++){
		if (window["product"+i+"Info_obj"].isVisible){
			window["product"+i] = new ImageLoader(myFT.instantAds["IA_prodImgFr"+i]);
			window["product"+i].container.style.opacity = 0;
			window["product"+i].container.addEventListener("imageloaded", window["product"+i+"Loaded"]);
		} else {
			window["product"+i] = new BlankDiv();
			window["product"+i+"Loaded"]();
		}
	}
}

// Once Stage 2 has loaded, this will initialize the footers in each frame
function stage2Init(){
	// Product images styles are set once they're loaded
	for (var j=1; j<=3; j++){
		window["product"+j].container.style.top = (Math.round(adHeight_num/2) - Math.round(window["product"+j].container.offsetHeight/2)) + 'px';
		window["product"+j].container.style.left = (0-window["product"+j].container.offsetWidth) + "px";
		window["product"+j].container.style.opacity = 1;
	}

	// Initiates the stage 3 loading process
	stage3_preloader_interval = setInterval(stage3Preloader, 1);

 	// Logo styles are set once it's loaded
	logo.container.style.top = '0px';
	logo.container.style.left = (adWidth_num - adMargin_num - logo.container.offsetWidth) + 'px';

	// CTA styles are set once it's loaded
	cta.container.style.top = adMargin_num+'px';
	cta.container.style.left = (adWidth_num - adMargin_num - logo.container.offsetWidth - cta.container.offsetWidth) + 'px';

	// Initializes Footers for all 3 frames
	for (var i=1; i<=3; i++){
		footers_arr.push({	leftTextMargin: 	(window["product"+i+"Info_obj"].isVisible) ? (window["product"+i].container.offsetWidth + left_frameMargin_num) : adMargin_num,
							rightTextMargin: 	adMargin_num,
							text: 				myFT.instantAds["IA_legalFr"+i+"_text"]
		});
		window["product"+i].container.style.zIndex = 999+i;
	}

	footers = new FooterController({ 	adWidth: 	adWidth_num,
										adHeight: 	adHeight_num,
										footerArr: 	footers_arr
	});

	footersLoaded();
}

// Once Stage 3 has loaded, this will initialize animation frames 1-3, border,
// and clickTag button. It then initiates the animation
function stage3Init(){
	// Initializes Frame 1 animation
	frame1 = new Frame({ 	frameType: 							"normal",
							width: 								adWidth_num,
							height: 							adHeight_num,
							topTextMargin: 						adMargin_num - 5,
							leftTextMargin: 					(product1Info_obj.isVisible) ? (product1.container.offsetWidth + left_frameMargin_num) : adMargin_num,
							rightTextMargin: 					(logoInfo_obj.isVisible || ctaInfo_obj.isVisible) ? adMargin_num + logo.container.offsetWidth + cta.container.offsetWidth + left_frameMargin_num : adMargin_num,
							headlineFontSize: 					myFT.instantAds.IA_headlineFr1_fontSize,
							headlineLetterSpacing: 				myFT.instantAds.IA_headlineFr1_letterSpacing,
							headlineLineHeight: 				myFT.instantAds.IA_headlineFr1_lineHeight,
							headlineColor: 						"#FFFFFF",
							headlineText: 						myFT.instantAds.IA_headlineFr1_text,
							subHeadFontSize: 					myFT.instantAds.IA_subHeadlineFr1_fontSize,
							subHeadLetterSpacing: 				myFT.instantAds.IA_subHeadlineFr1_letterSpacing,
							subHeadLineHeight: 					myFT.instantAds.IA_subHeadlineFr1_lineHeight,
							subHeadColor: 						"#FFFFFF",
							subHeadText: 						myFT.instantAds.IA_subHeadlineFr1_text,
	});

	// Initializes Frame 2 animation
	frame2 = new Frame({ 	frameType: 							"normal",
							width: 								adWidth_num,
							height: 							adHeight_num,
							topTextMargin: 						adMargin_num - 5,
							leftTextMargin: 					(product2Info_obj.isVisible) ? (product2.container.offsetWidth + left_frameMargin_num) : adMargin_num,
							rightTextMargin: 					(logoInfo_obj.isVisible || ctaInfo_obj.isVisible) ? adMargin_num + logo.container.offsetWidth + cta.container.offsetWidth + left_frameMargin_num : adMargin_num,
							headlineFontSize: 					myFT.instantAds.IA_headlineFr2_fontSize,
							headlineLetterSpacing: 				myFT.instantAds.IA_headlineFr2_letterSpacing,
							headlineLineHeight: 				myFT.instantAds.IA_headlineFr2_lineHeight,
							headlineColor: 						"#FFFFFF",
							headlineText: 						myFT.instantAds.IA_headlineFr2_text,
							subHeadFontSize: 					myFT.instantAds.IA_subHeadlineFr2_fontSize,
							subHeadLetterSpacing: 				myFT.instantAds.IA_subHeadlineFr2_letterSpacing,
							subHeadLineHeight: 					myFT.instantAds.IA_subHeadlineFr2_lineHeight,
							subHeadColor: 						"#FFFFFF",
							subHeadText: 						myFT.instantAds.IA_subHeadlineFr2_text,
	});

	// Initializes Frame 3 animation
	frame3 = new Frame({ 	frameType: 							"resolve",
							width: 								adWidth_num,
							height: 							adHeight_num,
							topTextMargin: 						adMargin_num - 5,
							leftTextMargin: 					(product3Info_obj.isVisible) ? (product3.container.offsetWidth + left_frameMargin_num) : adMargin_num,
							rightTextMargin: 					(logoInfo_obj.isVisible || ctaInfo_obj.isVisible) ? adMargin_num + logo.container.offsetWidth + cta.container.offsetWidth + left_frameMargin_num : adMargin_num,
							headlineFontSize: 					myFT.instantAds.IA_headlineFr3_fontSize,
							headlineLetterSpacing: 				myFT.instantAds.IA_headlineFr3_letterSpacing,
							headlineLineHeight: 				myFT.instantAds.IA_headlineFr3_lineHeight,
							headlineColor: 						"#FFFFFF",
							headlineText: 						myFT.instantAds.IA_headlineFr3_text,
							valueStackTextColor: 				"#FFFFFF",
							valueStackPrice: 					myFT.instantAds.IA_valStackFr3_pricePoint,
							valueStackDescriptionFontSize: 		myFT.instantAds.IA_valStackFr3_description_fontSize,
							valueStackDescriptionLetterSpacing: myFT.instantAds.IA_valStackFr3_description_letterSpacing,
							valueStackDescriptionLineHeight: 	myFT.instantAds.IA_valStackFr3_description_lineHeight,
							valueStackDescriptionPer: 			myFT.instantAds.IA_valStackFr3_description_per,
							valueStackDescription: 				myFT.instantAds.IA_valStackFr3_description_text,
	});

	// Initializes Border
	border = new Border({	width: 		adWidth_num,
							height: 	adHeight_num,
							thickness: 	1,
							color: 		"#000000"
						});
	border.container.style.zIndex = 9999;

	// Initializes ClickTag button - (width of button, height of button, clickTag number)
	clickButton = new ClickTagButton(adWidth_num, adHeight_num, 1, processDynamicURL(myFT.instantAds.IA_clickTag_url));
	clickButton.container.style.zIndex = 10000;

	// Once all of our ad objects have initialized, we can finally start animating
	animateFrames();
}

//Handles the clicktag omniture code
function processDynamicURL(inputUrl){
    var clickSuf = myFT.get("clickSuf");
    var urlEscapeMod = myFT.get("escapeMod");
    var dynUrl = inputUrl;
    var urlMod = "";
    switch(dynUrl.charAt(dynUrl.length-1)){
        case "?":
        case "&":
        break;
        default:
        if(dynUrl.indexOf("?")!=-1){
            urlMod = "&";
        }else{
            urlMod = "?";
        }
    }
    var clickSufMod="";
    if(clickSuf){
        clickSufMod=urlMod+clickSuf;
    }
    var urlConstruct = dynUrl+clickSufMod;
    if(urlEscapeMod){
        var escapeMultiplier = Math.max(0,parseInt(urlEscapeMod,10));
        for(var i=0;i<escapeMultiplier;i++){
            urlConstruct = escape(urlConstruct);
        }
    }
    var output=urlConstruct;
    return output;
}

// Handles how the product images will animate for each frame
function productImageAnimation(frame_num, delay_num){
	if (frame_num > 1){
		if (myFT.instantAds["IA_prodImgFr"+frame_num] == myFT.instantAds["IA_prodImgFr"+(frame_num-1)]){
			TweenLite.delayedCall(delay_num, function(){
				window["product"+frame_num].container.style.left = '0px';
				window["product"+(frame_num-1)].container.style.opacity = 0;
			});
		} else {
			TweenLite.to(window["product"+(frame_num-1)].container, .65, {	left: 0-window["product"+(frame_num-1)].container.offsetWidth,
																			delay:delay_num,
																			ease:Quad.easeIn
																	});

			TweenLite.to(window["product"+frame_num].container, .65, {	left: 0,
																		delay:delay_num + 0.75,
																		ease:Quad.easeOut
																	});
		}
	} else {
		TweenLite.to(window["product"+frame_num].container, .65, {	left: 0,
																	delay:delay_num,
																	ease:Quad.easeOut
																});
	}

}

/*------------------------------------------------------------------------*/
// FUNCTIONS - FRAME ANIMATION
/*------------------------------------------------------------------------*/
// This initiates our animation.  The paremeters in the animation functions
// are the number of seconds to start the animation
function animateFrames(){
	// Frame 1 animates in
	productImageAnimation(1, 2);
	frame1.animateIn(2);

	// Logo and CTA fade in
	TweenLite.to(cta.container, .5, {opacity: 1, delay:3});
	TweenLite.to(logo.container, .5, {opacity: 1, delay:3});
	footers.animateFrame1(3.25);

	// Frame 1 animates out & Frame 2 animates in
	productImageAnimation(2, 7);
	footers.animateFrame2(7);
	frame1.animateOut(7);
	frame2.animateIn(7.5);

	// Frame 2 animates out && Frame 3 animates in
	productImageAnimation(3, 12.5);
	footers.animateFrame3(12.5);
	frame2.animateOut(12.5);
	frame3.animateIn(13);
}