function ClickTagButton(width, height, clickTagNum, url){
    this.container = document.createElement("div");
    this.container.style.position = "absolute";
    this.container.style.width = width + 'px';
    this.container.style.height = height + 'px';
    this.container.style.cursor = "pointer";
    document.getElementsByTagName("body")[0].appendChild(this.container);

    if(!/msie 9/i.test(navigator.userAgent)) {
        this.container.onclick = function(){
            myFT.clickTag(clickTagNum, url);
        }
    } else {
        FT.addListener(window, 'click', function(){
            myFT.clickTag(clickTagNum, url);
        });
        myFT.addEventListener('load', function(){
            var divs = FT.query('div');
            var i = divs.length;
            while(i--) {
                divs[i].style.cursor = 'pointer';
            }
        });
    }
}