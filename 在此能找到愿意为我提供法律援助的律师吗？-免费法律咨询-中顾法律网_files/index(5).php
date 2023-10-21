var tpl ='';
if (document.getElementById("piu334")) {
    tpl += '<li>';
    tpl += '<p class="sidebar_name">';
    tpl += '<a href="@link" target="_blank" rel="nofollow"><img src="@image" alt="">';
    tpl += '<span>@title律师</span>';
    tpl += '</a></p>';
    tpl += '<p class="sidebar_tenter">';
    tpl += '<a href="@zxlink" target="_blank" rel="nofollow">点击咨询</a>';
    tpl += '</p>';
    tpl += '</li>';
    var def="{\"name\":\"诚邀加盟\",\"tel\":\"053168621058\",\"image\":\"http://www.9ask.cn/statics/d_n_pic/face130_155.png\",\"link\":\"http://www.9ask.cn/souask/ask.html\",\"zxlink\":\"http://www.9ask.cn/souask/ask.html\"}";
}else{
    tpl += '<div class="pr_lawyer clearfix">';
    tpl += '<div class="clearfix">';
    tpl += '<div class="invitedLawyersPic">';
    tpl += '<a href="@link" target="_blank" rel="nofollow">';
    tpl += '<img src="@image" width="55" height="65"  alt="@alt"></a></div>';
    tpl += '<div class="lawyerInfo2">';
    tpl += '<div class="lawyerName">';
    tpl += '<a href="@link" target="_blank" rel="nofollow">@title</a>';
    tpl += '</div>';
    tpl += '<div class="askbutton">';
    tpl += '<a href="@zxlink" target="_blank" rel="nofollow">在线法律咨询</a>';
    tpl += '</div>';
    tpl += '</div>';
    tpl += '</div>';
    tpl += '</div>';
    var def="{\"name\":\"您的位置\",\"tel\":\"053168621058\",\"image\":\"http://img.9ask.cn/statics/d_n_pic/nopic1.png\",\"link\":\"http://www.9ask.cn/souask/ask.html\",\"zxlink\":\"http://www.9ask.cn/souask/ask.html\"}";

}



function showADContent(data){//显示广告内容
	var html = '',temp = '';
	for(i=0;i<6;i++){
		var o = eval("("+ data[i] +")");
		temp = tpl;
		temp = temp.replace(/@link/,o.link);
		temp = temp.replace(/@link/,o.link);
		temp = temp.replace(/@image/,o.image);
		temp = temp.replace(/@alt/,o.name);
		temp = temp.replace(/@tel/,o.tel);
		temp = temp.replace(/@title/,o.name);
		temp = temp.replace(/@zxlink/,o.zxlink);
		html += temp;
	}
	document.write(html);
}

//组合 data 数据
var data = new Array();

//处理其它位置 data 数据为默认数据
var ads_limit_num = 6;
for(i=0;i<ads_limit_num;i++){
	if(!data[i]){
		data[i] =def;
	}
}

showADContent(data);//开始给页面写入广告吧