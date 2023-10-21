$(function(){
	
	// 最多160个中文字符
	var maxstrlen = 1000;
	// 函数：获取传入的字符串的长度
	function getStrleng(str) {
		var len = 0;
		for (i = 0; (i < str.length) && (len <= maxstrlen * 2); i++) {
			// 如果是键盘码，则为英文字符，占一个字符；否则为中文字符，占两个字符
			if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128){
				len++;
			}
			else{
				len+=2;
			}
		}
		return len;
	}
	$(".inputbox").keyup(function(event) {
		len = maxstrlen;
		var str = $(this).val();
		myLen = getStrleng(str);
		if (myLen > len * 2) {
			 $(this).val(str.substring(0, len));
		}
		else {
			$(".wordCheck").html( Math.floor((len * 2 - myLen) / 2));
		}
	});
	//输入字符长度
	
	$('a.zan').click(function(){
		var obj=$(this);
		answerid=$(this).attr('data-id');
		num=$(this).find("span").html();
		$.ajax({
			type: "GET",
			url: "/index.php?m=content&c=question&a=dianzan",
			data: {answerid: answerid},
			success:function(data, st){
				if(data==0){
					//alert('休息下再点赞吧！');
					return false;
				}
				obj.find("span").html(data);
			}
		});
   });
   //点赞
   
   $(".stat").prepend( $(".con li.ls-reply").length );	 //全部回答
   
   //举报弹出层
   $(".big-link").click(function(){
	    $(".reveal-modal-bg").css({
			display:"block",height:$(document).height()
		});
	   askid=$(this).attr("data-id");
	   $('#tousu').load("http://www.9ask.cn/index.php?m=content&c=question&a=tousu&askid="+askid);
   });
	$(".close").click(function(){	
	    $(".reveal-modal-bg").css("display","none");	
		$(".reveal-modal").css("display","none");
	});

	//查看电话弹出层
	$(".showboxtel").click(function(){
		$("#TEL_overlayBG").css({
			display:"block",height:$(document).height()
		});
		$(".boxtel").css({
			left:($("body").width()-$(".boxtel").width())/2-20+"px",
			top:($(window).height()-$(".boxtel").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
		var askid=$(this).attr('data-id');
		$.ajax({
			type: "GET",
			url: "/index.php?m=content&c=question&a=getusertel",
			data: {askid: askid},
			success:function(data){
				$('#showusertel').html(data);
			}
		});
	});
	$(".closetel").click(function(){
		$("#TEL_overlayBG").css("display","none");
		$(".boxtel ").css("display","none");
	});

});
