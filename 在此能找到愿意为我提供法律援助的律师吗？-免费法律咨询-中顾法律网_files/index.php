var tpl = '';
if (document.getElementById("piu338_2")) {
tpl += '<a href="@link" class="ig" target="_blank" rel="nofollow"><img src="@image" alt="@alt"></a>';
}else{
tpl += '<a href="@link" target="_blank" rel="nofollow"><img src="@image" width="1000" height="80" alt="@alt"></a>';
}

function showADContent(data){//显示广告内容
	var html = '',temp = '';
	for(i=0;i<data.length;i++){
		var o = eval("("+ data[i] +")");
		temp = tpl;
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
var picarr=[];
var linkarr=[];
if (document.getElementById("piu338_2")) {
picarr[0]='http://www.9ask.cn/statics/d_n_pic/1200-80-1.jpg';
picarr[1]='http://www.9ask.cn/statics/d_n_pic/1200-80-2.jpg';
picarr[2]='http://www.9ask.cn/statics/d_n_pic/1200-80-3.jpg';
}else{
picarr[0]='http://img.9ask.cn/statics/d_n_pic/1000-80-1.jpg';
picarr[1]='http://img.9ask.cn/statics/d_n_pic/1000-80-2.jpg';
picarr[2]='http://img.9ask.cn/statics/d_n_pic/1000-80-7.jpg';
}

linkarr[0]='http://www.9ask.cn/souask/ask.html?zx_dingbu';
linkarr[1]='http://www.9ask.cn/souask/ask.html?zx_dingbu';
linkarr[2]='http://www.9ask.cn/ztc/';
var ads_limit_num = 3;
for(i=0;i<ads_limit_num;i++){
	if(!data[i]){
		data[i] = "{\"name\":\"您的位置\",\"tel\":\"053168621058\",\"image\":picarr[i],\"link\":linkarr[i],\"zxlink\":\"http://www.9ask.cn/souask/ask.html\"}";
	}
}
if (!document.getElementById("piu338_2")) {
if (!document.getElementById("piu338")) {
//为两个图片轮换设置的例外(日前只有日照 20170119 lvtengfei)--开始
    document.writeln("<script src=\'http://img.9ask.cn/statics/www9ask2014/js/jquery.KinSlideshow-1.2.1.js\' type=\'text/javascript\'></script>");
    document.writeln("<script type=\'text/javascript\'>");
    document.writeln("            $(function(){");
    document.writeln("                $(\'#KinSlideshow\').KinSlideshow({");
    document.writeln("                    moveStyle:\'up\',");
    document.writeln("                    isHasTitleBar:false,");
    document.writeln("                    titleBar:{titleBar_height:1,titleBar_bgColor:\'#000000\',titleBar_alpha:0.5},");
    document.writeln("                    isHasTitleFont:false,");
    document.writeln("                    btn:{btn_bgColor:\'#999999\',btn_bgHoverColor:\'#996600\',btn_fontColor:\'#A74546\',");
    document.writeln("                        btn_fontHoverColor:\'#999999\',btn_borderWidth:0,btn_bgAlpha:0.5}");
    document.writeln("                });");
    document.writeln("            })");
    document.writeln("        </script>");

//为两个图片轮换设置的例外--结束
}
document.writeln("<div id=\'KinSlideshow\' style=\'visibility:visible; width: 1000px; height: 80px; overflow: hidden; position: relative;\'>");

}
showADContent(data);//开始给页面写入广告吧
if (!document.getElementById("piu338_2")) {
document.writeln("</div>");
}