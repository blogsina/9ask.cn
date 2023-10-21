var tpl='';
if (document.getElementById("piu339")) {
var myhash=[];
var img_d_path='http://img.9ask.cn/statics/d_n_pic/';
if(cityspell =='bj'||cityspell =='sh'){
myhash[1]={'num':3,'img_A':'840-80-1.jpg','img_B':'840-80-1.jpg','img_C':'840-80-1.jpg','tpl':'<a href="@link" target="_blank" rel="nofollow"><img src="@image" alt="@alt"/></a>'};
}else{
myhash[1]=myhash[2]=myhash[3]=myhash[4]=myhash[5]={'num':1,'img_A':'840-80-1.jpg','tpl':'<a href="@link" target="_blank" rel="nofollow"><img src="@image" alt="@alt" /></a>'};
}
tpl+=myhash[c_level]['tpl'];
}else{
var myhash=[];
var img_d_path='http://img.9ask.cn/statics/d_n_pic/';
if(cityspell =='bj'||cityspell =='sh'){
myhash[1]={'num':3,'img_A':'243_80_1.jpg','img_B':'243_80_2.jpg','img_C':'243_80_1.jpg','tpl':'<li><a href="@link" target="_blank" rel="nofollow"><img src="@image" alt="@alt" width="243" height="80" /></a></li>'};
}else if(c_level==1){
myhash[1] ={'num':2,'img_A':'370_80_1.jpg','img_B':'370_80_2.jpg','tpl':'<li><a href="@link" target="_blank" rel="nofollow"><img src="@image" alt="@alt" width="370" height="80" /></a></li>'};
}else if(c_level==2 || c_level==3){
myhash[2]=myhash[3]= {'num':1,'img_A':'750_80-.jpg','tpl':'<li><a href="@link" target="_blank" rel="nofollow"><img src="@image" alt="@alt" width="750" height="80" /></a></li>'};

}else{
myhash[4]=myhash[5]={};
}
tpl+=myhash[c_level]['tpl'];
}

function showADContent(data){//显示广告内容
	var html = '<ul>',temp = '';
	for(i=0;i<myhash[c_level]['num'];i++){
		var o = eval("("+ data[i] +")");
		temp = tpl;
		temp = temp.replace(/@link/,o.link);
		temp = temp.replace(/@image/,o.image);
		temp = temp.replace(/@alt/,o.name);
		html += temp;
	}
	html+='</ul>';
	document.write(html);
}

//组合 data 数据
var data = new Array();

//处理其它位置 data 数据为默认数据
var ads_limit_num = myhash[c_level]['num'];
var img_d=new Array();
var link_d=new Array();
for(i=0;i<ads_limit_num;i++){
	if(!data[i]){
		if(i%3==0)
        {img_d[i]=myhash[c_level]['img_A'];}
        else if(i%3==1)
        {img_d[i]=myhash[c_level]['img_B'];}
        else if(i%3==2)
        {img_d[i]=myhash[c_level]['img_C'];}
		if(i%3==0)
        {link_d[i]='http://www.9ask.cn/souask/ask.html';}
        else if(i%3==1)
        {link_d[i]='http://www.9ask.cn/aixin/';}
        else if(i%3==2)
        {link_d[i]='http://www.9ask.cn/souask/ask.html';}
		data[i] = "{\"name\":\"品牌律师姓名\",\"tel\":\"\",\"image\":img_d_path+img_d[i],\"link\":link_d[i],\"zxlink\":\"http://www.9ask.cn/souask/ask.html\"}";
	}
}
showADContent(data);//开始给页面写入广告吧
