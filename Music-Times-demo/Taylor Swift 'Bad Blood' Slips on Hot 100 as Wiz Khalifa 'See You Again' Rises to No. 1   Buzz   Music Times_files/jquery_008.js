// javascript document

	$(function()
	{
		var selfUrl   =  window.location.pathname;
		var anchor    =  '#page';
		var autoRun   =  false;
		var bt_next   =  $('#bt_next');
		var timeBtn   =  $('.timeicon');
		var timeClass =  'showtime';
		var endBtn   =  $('.top_bt_end,.bottom_bt_end');
		var backBtn   =  $('.top_bt_back,.bottom_bt_back');
		var nextBtn   =  $('.top_bt_next,.bottom_bt_next');
		var showArea  =  $('#loading');
		var numAra    =  $('.top_bt_number,.bottom_bt_number');
		var lastTxt   =  'last';
		var startTxt   =  'End';
		var nextLink;
		var startIcon =  '<a>Auto Play</a>';//'<div class="slideshow_start"></div>';
		var pauseIcon =  '<a>Stop</a>';//'<div class="slideshow_pause"></div>';
		var restaIcon =  '<a>Re Play</a>';//'<div class="slideshow_restart"></div>';
		var interval  =  3000;
		
		var hrefArr;
		var curOrder;
		var totalOrder;
		var backTxt;
		var nextTxt;
		var timeIcon;
		var autoStart;
		var first_run=true;
		
		var reg = new RegExp('^[1-9]d*|0$');
		
		function get_order()
		{
			hrefArr = window.location.hash.split(anchor); 
			curOrder = hrefArr.length > 1 ? parseInt(hrefArr[1]) : 0;
			totalOrder = showArea.attr('order');
			
			if(hrefArr == ",last") { curOrder = 1; window.location.hash = "#page"+curOrder;}
			if(hrefArr == ",start") { first_run=true; window.location.hash = "#page"+curOrder;}
			if(!first_run) if(hrefArr == "") { curOrder = totalOrder; window.location.hash = "#page"+curOrder;}
			if(!first_run) if(curOrder == 0) { curOrder = totalOrder; window.location.hash = "#page"+curOrder;}

			first_run=false;
			if(reg.test(curOrder))
			{
				//timeBtn.addClass(timeClass);
				
				// back button
				if(curOrder)
				{
					backTxt = '<a href="javascript:void(0)">Back</a>';
					endTxt = '<a href="javascript:void(0)">End</a>';
				}
				else
				{
					backTxt = endTxt = '&nbsp;';
				}
				
				
				
				backBtn.html(backTxt);
				endBtn.html(endTxt);
				
				nextTxt = 'javascript:void(0)';
				nextLink = curOrder>0  ? 'Next' : 'Start';
							
				// 1 of 4
				numTxt = !curOrder
							? '<span style="font-size:0" class="current_order">0</span><span style="display:block;line-height:0;text-indent:-9999px;font-size:0;" class="total_order">'+totalOrder+'</span>' 
							: '<span class="current_order">' + curOrder + '</span> of <span class="total_order">' + totalOrder + '</span>';
				numAra.html(numTxt);
			}
			else
			{ 
				if(curOrder != 0)
					curOrder = lastTxt;
				backBtn.html('<a href="javascript:void(0)">Back</a>');
				endBtn.html('<a href="javascript:void(0)">End</a>');
				numAra.html('&nbsp;&nbsp;');
				timeBtn.removeClass(timeClass);
				nextTxt = showArea.attr('next');
				nextLink = 'Next';
			}
			
			
			// time button
			timeIcon = !autoRun ? startIcon : pauseIcon;
			
			
			// next button
			nextBtn.html('<a href="' + nextTxt + '">' + nextLink + '</a>');
						
			
			// content
			$('.showarea').hide();
			$('.hidearea'+curOrder).show();
											
			// stop setInterval
			if(curOrder == totalOrder) { timeIcon = restaIcon; turnOff(); }
			if(curOrder == lastTxt) { timeIcon = ''; turnOff(); }
			
			//showIcon();
		}
/*
		function showIcon()	{
			timeBtn.hover( function(){ $(this).html(timeIcon); }, function(){ $(this).html(''); } );
		}
*/		
		nextBtn.click(function(){ entry('next'); });
		backBtn.click(function(){ entry(); });
		endBtn.click(function(){ entry('end'); });
		
		function entry(btn)
		{
			var total = $('.total_order:first').text()*1;
			var current = $('.current_order:first').text()*1;
			var suffix;
			
			if(btn == 'next')
			{
				if(!autoRun || total == current) turnOff();
				suffix = current+1 > total ? lastTxt : current+1;
			}
			else
			{
				if(btn == 'end')
				{
					turnOff();
					suffix = 0;
					first_run=true;
				}
				else{
					if(total != current) turnOff();
					suffix = current > 1 ? current-1 : 0;
				}
			}
			
			location = selfUrl + anchor + suffix;
		}
				
		timeBtn.click(function()
		{
			var total = $('.total_order:first').text()*1;
			var current = $('.current_order:first').text()*1;
						
			autoRun = autoRun ? false : true;
			timeIcon = autoRun ? pauseIcon : startIcon;
			timeBtn.html(timeIcon);
			//showIcon();
			
			if(total == current)
			{
				location = selfUrl + anchor + 1;
				autoStart = self.setInterval("$('#bt_next').click();",interval);
			}
			else
			{
				if(autoRun) 
				{ 
					bt_next.click();
					autoStart = self.setInterval("$('#bt_next').click();",interval); 
				}
				else window.clearInterval(autoStart);
			}
		});
		
		function turnOff()
		{
			if(autoRun) window.clearInterval(autoStart);
			timeIcon = startIcon;
			//showIcon();
			autoRun = false;
		}
		
		$(window).hashchange( function(){ get_order(); })
		$(window).hashchange();		
	})