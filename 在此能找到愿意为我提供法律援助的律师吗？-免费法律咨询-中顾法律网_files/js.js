$(function(){
	//登录条下拉层
    $(".user_login").hover(function(){
		$(".user_login ul").stop(false).slideToggle();
		$(".user_login i").toggleClass("low").toggleClass("up");				
	});	
	$(".sites").hover(function(){
		$(".sub_list").stop(false).slideToggle();
	});
	
	/* 导航菜单
    $(document).ready(function() {	
		$("#menu2 li a").wrapInner( '<span class="out"></span>' );			
		$("#menu2 li a").each(function() {
			$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
		});
		$("#menu2 li a").hover(function() {
			$(".out",	this).stop().animate({'top':'44px'},	300); 
			$(".over",	this).stop().animate({'top':'0px'},		300);

		}, function() {
			$(".out",	this).stop().animate({'top':'0px'},		300); 
			$(".over",	this).stop().animate({'top':'-44px'},	300);
		});
	}); */
	
	//举报弹出层
   $(".big-link").click(function(){
	    $(".reveal-modal-bg").css({
			display:"block",height:$(document).height()
		});
		$(".reveal-modal").css({
						
			display:"block"
		});
	   askid=$(this).attr("data-id");
	   $('#tousu').load("http://www.9ask.cn/index.php?m=content&c=question&a=tousu&askid="+askid);
   });
	$(".close").click(function(){	
	    $(".reveal-modal-bg").css("display","none");	
		$(".reveal-modal").css("display","none");
	});
	$(".close-reveal-modal").click(function(){
        $(".reveal-modal-bg").css("display","none");
        $(".reveal-modal").css("display","none");
    });
    
    // 统计字数
    $(function(){
        //先选出 textarea 和 统计字数 dom 节点
        var wordCount = $(".wordCount"),
            textArea = wordCount.find("textarea"),
            word = wordCount.find(".word");
        //调用
        statInputNum(textArea,word);
    });
    function statInputNum(textArea,numItem) {
        var max = numItem.text(),
        curLength;
		if(max>1000) max=1000;
        textArea[0].setAttribute("maxlength", max);
        curLength = textArea.val().length;
        numItem.text(max - curLength);
        textArea.on('input propertychange', function () {
            numItem.text(max- $(this).val().length);
        });
    };
    
    $('.asked').click(function(){
    	$(this).siblings('.wordCount').toggle();    	
    });
	$('.noasked').click(function(){
		$(this).parent().find('.hint').toggle();
	});
    $('.qulogin').click(function(){
	    $(".reveal-modal-bg").toggle();     	
    	$('.register-con').toggle();
    });
    $(".close-1").click(function(){	
	    $(".reveal-modal-bg").css("display","none");	
		$(".register-con").css("display","none");
	});
	$(".tit textarea").focus(function(){
		$(this).css("height","128px");
	});

	img_w=$(".pr_adT>ul>li").find("img").width();
	num=$(".pr_adT>ul>li").length;
	mr_left=Math.floor((740-(num*img_w))/(num-1));
	$(".pr_adT>ul>li").eq(0).siblings().find("img").css("margin-left",mr_left);
});