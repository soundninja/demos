jQuery(document).ready(function(){var resizeTimer;var $window=jQuery(window);function check_file_exists(fileToCheck){var tmp=new Image;tmp.src=fileToCheck;if(!tmp.complete){fileToCheck=fileToCheck.replace('.320','.full').replace('.480','.full').replace('.768','.full').replace('.1024','.full');}
return fileToCheck;}
function responsive_imageswap(){jQuery('img.responsive').each(function(){var $thisImg=jQuery(this);var newSrc=$thisImg.attr('src');if($window.width()<=320){newSrc=newSrc.replace('.480','.320').replace('.768','.320').replace('.1024','.320').replace('.full','.320');}else if($window.width()>320&&$window.width()<=480){newSrc=newSrc.replace('.320','.480').replace('.768','.480').replace('.1024','.480').replace('.full','.480');}else if($window.width()>480&&$window.width()<=768){newSrc=newSrc.replace('.320','.768').replace('.480','.768').replace('.1024','.768').replace('.full','.768');}else if($window.width()>768&&$window.width()<=1024){newSrc=newSrc.replace('.320','.1024').replace('.480','.1024').replace('.768','.1024').replace('.full','.1024');}else{newSrc=newSrc.replace('.320','.full').replace('.480','.full').replace('.768','.full').replace('.1024','.full');}
newSrc=check_file_exists(newSrc);$thisImg.attr('src',newSrc);});}
responsive_imageswap();$window.resize(function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(responsive_imageswap,150);});$window.ready(function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(responsive_imageswap,150);});});