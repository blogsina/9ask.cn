// JavaScript Document
document.write('<link href="http://www.9ask.cn/statics/9ask2017/chat/chat.css"  rel="stylesheet" type="text/css"/>');
document.write('<script type="text/javascript" src="http://www.9ask.cn/statics/9ask2017/chat/chat.js"></script>');
/* document.write('<link href="http://img.9ask.cn/statics/kefu/kefu.css"  rel="stylesheet" type="text/css"/>');
document.write('<div id="leftsead">');
document.write('<ul>');
document.write('<li class="xf-6"><a href="http://www.9ask.cn/aixin/" target="_blank"></a></li>');
document.write('<li class="xf-7"><a href="http://www.9ask.cn/souask/ask.html" target="_blank"></a></li>');
//document.write('<li class="xf-4"><a href="http://www.9ask.cn/souask/ask.html#download2" target="_blank"></a></li>');
document.write('<li class="xf-lsh"><a href="http://www.9ask.cn/ztc/lsh/" title="律师函" target="_blank"></a></li>');
document.write('<li class="xf-yjls"><a href="http://www.9ask.cn/ztc/yjls/" title="约见律师" target="_blank"></a></li>');
document.write('<li class="xf-ckh"><a href="http://www.9ask.cn/ztc/ckh/" title="催款函" target="_blank"></a></li>');
document.write('<li class="xf-3"><a href="'+city_url+'" target="_blank"></a></li>');
document.write('<li class="xf-5" id="top_btn"><a href="javascript:void(0);"></a></li>');
document.write('</ul>');
document.write('</div>');
document.write('<div id="TB_overlayBG"></div>');
document.write('<div class="box" style="display:none">');
document.write('<div class="close"></div>');
document.write('<div id="iframe">加载中...</div>');
document.write('</div>');

$(document).ready(function(){
	$("#top_btn").hide();
	$(window).scroll(function(){
		if ($(window).scrollTop()>600){
			$("#top_btn").fadeIn(500);
		}
		else
		{
			$("#top_btn").fadeOut(500);
		}
	});
	$("#top_btn").click(function(){if(scroll=="off") return;
	$("html,body").animate({scrollTop: 0}, 600);});
	$(".showbox").click(function(){
		var classname=$(this).parent().attr('class');
		if(classname=='xf-1'){
			$('#iframe').html('<iframe frameborder="0" marginheight=0 marginwidth=0 scrolling=no src="http://www.9ask.cn/souask/ask7.html" width="570" height="440"></iframe>')
		}else{
			$('#iframe').html('<iframe frameborder="0" marginheight=0 marginwidth=0 scrolling=no src="http://www.9ask.cn/entrust/post_new.html" width="570" height="440"></iframe>')
		}

		$("#TB_overlayBG").css({
			display:"block",height:$(document).height()				
		});
		$("body").css("overflow","hidden");
		$(".box").css({
			left:($("body").width()-$(".box").width())/2-20+"px",
			top:($(window).height()-$(".box").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});		
	});	
	$(".close").click(function(){			
		$("#TB_overlayBG").css("display","none");
		$(".box ").css("display","none");	
		$("body").css("overflow","auto");	
	});

	$("#TB_overlayBG").click(function() {
		if ($("#TB_overlayBG").css("display")=='block' ){
			$("#TB_overlayBG").css("display","none");
			$(".box ").css("display","none");
			$("body").css("overflow","auto");
		}
	});



	}); */
