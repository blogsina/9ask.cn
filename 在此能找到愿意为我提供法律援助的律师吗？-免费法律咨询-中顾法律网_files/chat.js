/* document.write("<script src='http://pv.sohu.com/cityjson?ie=utf-8'></script>");
$(function(){
    $('#leftsead').css('display','none');
    $('.dyn').css('display','none');
    
	var ip = returnCitySN['cip'];

    var openid = '';
    var saleid = '';
    var salename = '';
    var provname = '';
    var cityname = '';
    var user_id = '';
    var provid = '';
    var cityid = '';
	var qq = '';
	var chat = '';

    $.ajax({
        url: '/index.php?m=content&c=index&a=get_lawyer',
        type: 'POST',
        data:{ip2:ip},
        async:false,
        dataType: 'json',
        success:function(data) {

            openid = data.openid;
			qq = data.qq;
			chat = data.workqrcode;
            
        }
    });
	var zixun = '';
    zixun += '<div class="closeS"></div><div class="hotline_bottom"><div class="bottom_w1000 clearfix"><div class="clearfix closeImg"><img src="/statics/9ask2017/showask/images/hotlineClose.png" alt=""/></div><iframe class="bottom_iframe" src="http://www.9ask.cn/index.php?m=content&c=index&a=bridge" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>'
    zixun +='<div class="right w598"><div class="hotlineTel"><h4>法援热线：400-000-9164</h4><p>周一至周日8:00-18:00（如遇紧急情况请立即致电）</p></div><div class="otherHelp"><ul>';
    zixun += '<li><a href="http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes" target="_blank"><img src="/statics/9ask2017/showask/images/qqicon.png" alt=""/><p>QQ在线助理</p><h4>立即召唤QQ助理</h4></a></li>';
    zixun += '<li class="weixin"><a href="javascript:;"><img src="/statics/9ask2017/showask/images/weixinIcon.png" alt=""/><p>微信在线助理</p><h4>立即扫码召唤微信助理</h4></a><div class="taMa hide"><span style="color:red;font-size:16px">微信扫一扫，立享咨询</span><img src="'+chat+'" alt=""/></div></li>';
    zixun += '<li><a href="javascript:;"><img src="/statics/9ask2017/showask/images/iconpeo.png" alt=""/><p>在线咨询</p><h4>点击立即咨询</h4></a></li></ul></div></div></div></div>';

	$('body').append(zixun);

    $('.closeS').click(function(){
        $(this).animate({"bottom":"-528px"});
		$('.hotline_bottom').animate({
			"bottom":0
		});
    });
    $('.closeImg').click(function(){
        $('.hotline_bottom').animate({"bottom":"-528px"});
		$('.closeS').animate({"bottom":0});
    });
    $('.weixin').hover(function(){
        $('.taMa').stop().fadeIn();
    },function(){
        $('.taMa').stop().fadeOut();
    })
}) */
/**
$(function() {
    $('#leftsead').css('display','none');
    $('.dyn').css('display','none');

    var zixun = '';
    zixun += '<div class="leftImg_bottom_new"><a href="http://www.9ask.cn/souask/ask.html?dibuguding" target="_blank"><img src="http://www.9ask.cn/statics/9ask2017/showask/images/g_leftImg.gif" alt=""/></a></div>';
    zixun += '<div class="foot_bottom_new"> <div class="wImg_bottom_new"><div class="footL_bottom_new"><img src="http://www.9ask.cn/statics/9ask2017/showask/images/foot_l.png" alt=""/></div><span><img src="http://www.9ask.cn/statics/9ask2017/showask/images/g_close2.png" alt=""/></span><div class="anniu_bottom_new"><a href="http://www.9ask.cn/souask/ask.html?dibuguding" target="_blank"><img src="http://www.9ask.cn/statics/9ask2017/showask/images/g_btn.gif" alt=""/></a></div><div class="footL_bottom_new"><img src="http://www.9ask.cn/statics/9ask2017/showask/images/foot_r.png" alt=""/></div></div></div>';

    $('body').append(zixun);

    $('.foot_bottom_new').addClass('left_bottom_new');

    $('.wImg_bottom_new span').click(function(){
        $('.foot_bottom_new').removeClass('left_bottom_new');
        $('.anniu_bottom_new').hide();
        setTimeout(
            "$('.leftImg_bottom_new').fadeIn()",1000
        )
    })
}) */
$(function() {
    $('#leftsead').css('display','none');
    $('.dyn').css('display','none');
/*
    var zixun = '';
	zixun +='<div class="leftImg_bottom_new"><a href="http://www.9ask.cn/souask/ask.html?dibuguding" target="_blank"><img src="http://www.9ask.cn/statics/9ask2017/showask/images/g_leftImg.png" alt=""/></a></div>';
    zixun += '<div class="foot_bottom_new left_bottom_new" style="display:none"><div class="wImg_bottom_new"><span class="footClose_bottom_new"><img src="http://www.9ask.cn/statics/9ask2017/s7/images/g_close2.png" alt=""> </span> <div class="footL_bottom_new"><img src="http://www.9ask.cn/statics/9ask2017/s7/images/foot_l.png" alt=""></div>';
    zixun += '<div class="anniu_bottom_new"><a href="http://www.9ask.cn/souask/ask.html?dibuguding" target="_blank"><img src="http://www.9ask.cn/statics/9ask2017/s7/images/g_btn.gif" alt=""></a></div></div></div>';
   */
    var zixun = '';
    zixun +='<div class="leftImg_bottom_new"><a href="http://www.9ask.cn/souask/ask.html?dibuguding" target="_blank"><img src="http://www.9ask.cn/statics/9ask2017/showask/images/g_leftImg.png" alt=""/></a></div>';
    zixun += '<div class="foot_bottom_new left_bottom_new"><div class="wImg_bottom_new"><span class="footClose_bottom_new"><img src="http://www.9ask.cn/statics/9ask2017/s7/images/g_close2.png" alt=""></span><div class="footL_bottom_new"><img src="http://www.9ask.cn/statics/9ask2017/s7/images/foot_0.png" class="person" alt=""><img src="http://www.9ask.cn/statics/9ask2017/s7/images/foot_1.png" alt=""></div>';
    zixun += '<div class="anniu_bottom_new"><a href="http://www.9ask.cn/souask/ask.html?dibuguding" target="_blank"><img src="http://www.9ask.cn/statics/9ask2017/s7/images/g_btn.gif" alt=""></a></div></div></div>';

    $('body').append(zixun);
	$(".foot_bottom_new").slideDown("slow");
    $('.foot_bottom_new').addClass('left_bottom_new');

    $('.wImg_bottom_new span').click(function(){
        $('.foot_bottom_new').removeClass('left_bottom_new');
        $('.footL_bottom_new').find(".person").addClass('person_hide');
        $('.anniu_bottom_new').hide();

        setTimeout(
            "$('.leftImg_bottom_new').fadeIn()",1000
        )
    })
})

