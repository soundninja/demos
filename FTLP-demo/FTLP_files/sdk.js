function theChampInitiateFB(){FB.init({appId:theChampFBKey,channelUrl:"//"+theChampSiteUrl+"/channel.html",status:!0,cookie:!0,xfbml:!0,version:"v2.4"})}window.fbAsyncInit=function(){theChampInitiateFB(),theChampFbIosLogin&&theChampAuthUserFB(),"function"==typeof theChampDisplayLoginIcon&&theChampDisplayLoginIcon(document,["theChampFacebookButton","theChampFacebookLogin"]),theChampCommentNotification&&FB.Event.subscribe("comment.create",function(e){e.commentID&&jQuery.ajax({type:"POST",dataType:"json",url:theChampSiteUrl+"/index.php",data:{action:"the_champ_moderate_fb_comments",data:e},success:function(){}})}),theChampFbLikeMycred&&(FB.Event.subscribe("edge.create",function(e){heateorSsmiMycredPoints("Facebook_like_recommend","",e?e:"")}),FB.Event.subscribe("edge.remove",function(e){heateorSsmiMycredPoints("Facebook_like_recommend","",e?e:"","Minus point(s) for undoing Facebook like-recommend")}))},function(e){var t,n="facebook-jssdk",o=e.getElementsByTagName("script")[0];e.getElementById(n)||(t=e.createElement("script"),t.id=n,t.async=!0,t.src="//connect.facebook.net/"+theChampFBLang+"/sdk.js",o.parentNode.insertBefore(t,o))}(document);