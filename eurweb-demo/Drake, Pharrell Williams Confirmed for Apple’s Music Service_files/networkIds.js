(function() {
	/*channelFlag=0 --- main channel
	channelFlag=1 --- backup channel*/
	var networkIds = { 2320:'2320', 480:'480', 2988:'2988'};
	var channelIds = { 578:'578', 579:'579', 3498:'3498', 3499:'3499', 5:'5'};
	var bchannelIds = { 580:'580', 3500:'3500', 4:'4'};
	
	window.NetworkIdsCheck=(function() {
		var dock = function(channelFlag) {
			var dock1=0;
			if (channelFlag==0)  
				if (networkIds[inReadNetworkId] && channelIds[inReadChannelId]) dock1 = 1;

			if (channelFlag==1)  
				if (networkIds[inReadNetworkId] && bchannelIds[inReadbChannelId]) dock1 = 1;
			
			return dock1;
		};

		return {
	 		dock:dock
	 	}
	 })();
})();