/* Write here your custom javascript codes */

				$('.jisu_timeline_new_link').mouseenter(function(){
					$(this).css('color','#72c02c');
					$(this).css('font-size','17px');
				});
				
				$('.jisu_timeline_new_link').mouseleave(function(){
					$(this).css('color','#999');
					$(this).css('font-size','15px');
				});
				
				$('.jisu_edit_link').mouseenter(function(){
					$(this).css('color','#72c02c');
					$(this).css('font-size','11px');
				});
				
				$('.jisu_edit_link').mouseleave(function(){
					$(this).css('color','#999');
					$(this).css('font-size','10px');
				});
				
				$('.jisu_edit_button').mouseenter(function(){
					$(this).css('color','#9c9c9c');
					$(this).css('background-color','#f3f3f3');
					$(this).css('transition','all 0.3s ease-in-out');
				});
				
				$('.jisu_edit_button').mouseleave(function(){
					$(this).css('color','#555');
					$(this).css('background-color','#f3f3f3');
				});
				
				$('.jisu_timeline_icon').mouseenter(function(){
					$(this).css('color','#ffffff');
					$(this).css('background-color','#4a9706');
					$(this).css('transition','all 0.3s ease-in-out');
				});
				
				$('.jisu_timeline_icon').mouseleave(function(){
					$(this).css('color','#ffffff');
					$(this).css('background-color','#5fb611');
				});
				
				$('.jisu-evaluation-button').css('background-color','#A4A4A4');
				$('.jisu-evaluation-button').width('50px');
				$('.jisu-evaluation-button').children('p').css('margin-top','0px');
				$('.jisu-evaluation-button').children('p').css('margin-bottom','0px');
				$('.jisu-evaluation-button').children().css('color','#FFFFFF');
				$('.dropdown-menu').css('min-width','200px');
				
				$('.jisu-excellent').click(function() {
					$(this).parent().parent().prev().children('.jisu-evaluation-result').remove();
					$(this).parent().parent().prev().children('p').after('<p style="font-size:10px; color:#FFFFFF; margin:0px 0px 0px 0px;" class="jisu-evaluation-result">Excellent<i class="fa fa-angle-down"></i></p>');
				});
				$('.jisu-good').click(function() {
					$(this).parent().parent().prev().children('.jisu-evaluation-result').remove();
					$(this).parent().parent().prev().children('p').after('<p style="font-size:10px; color:#FFFFFF; margin:0px 0px 0px 0px;" class="jisu-evaluation-result">Good<i class="fa fa-angle-down"></i></p>');
				});
				$('.jisu-soso').click(function() {
					$(this).parent().parent().prev().children('.jisu-evaluation-result').remove();
					$(this).parent().parent().prev().children('p').after('<p style="font-size:10px; color:#FFFFFF; margin:0px 0px 0px 0px;" class="jisu-evaluation-result">So So<i class="fa fa-angle-down"></i></p>');
				});
				$('.jisu-bad').click(function() {
					$(this).parent().parent().prev().children('.jisu-evaluation-result').remove();
					$(this).parent().parent().prev().children('p').after('<p style="font-size:10px; color:#FFFFFF; margin:0px 0px 0px 0px;" class="jisu-evaluation-result">Bad<i class="fa fa-angle-down"></i></p>');
				});
				$('.jisu-verybad').click(function() {
					$(this).parent().parent().prev().children('.jisu-evaluation-result').remove();
					$(this).parent().parent().prev().children('p').after('<p style="font-size:10px; color:#FFFFFF; margin:0px 0px 0px 0px;" class="jisu-evaluation-result">Very Bad<i class="fa fa-angle-down"></i></p>');
				});