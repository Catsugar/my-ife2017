//列表
 var data = [
        {"song": "不老梦", "author": "银临","address": "test/不老梦.mp3","cover": "test/不老梦.jpg"},
        {"song": "化身孤岛的鲸", "author": "云之泣","address": "test/化身孤岛的鲸.mp3","cover":"test/化身孤岛的鲸.jpg"},
        {"song": "渺小王国", "author": "兔裹煎蛋卷","address": "test/渺小王国.mp3","cover": "test/渺小王国.jpg"},
 ];
 //当前播放的歌曲的ID
 var current=0;
 //是否循环
 var isloop=true;
var song=document.getElementById('song');
//那根棍子
var bar=document.getElementById('bar');
//封面
var cover=document.getElementById('cover');
var cover2=document.getElementById('cover2');
var pic=document.getElementById('pic');
//信息
var like=document.getElementById('like');
var download=document.getElementById('download');
var comment=document.getElementById('comment');
var lrc=document.getElementById('lrc');
//时间线
var start=document.getElementById('start');
var end=document.getElementById('end');
var move=document.getElementById('move');
var red=document.getElementById('red');
//按键
var order1=document.getElementById('order1');
var order2=document.getElementById('order2');
var order3=document.getElementById('order3');

var last=document.getElementById('last');
var isplay=document.getElementById('isplay');
var noplay=document.getElementById('noplay');
var next=document.getElementById('next');
var songbtn=document.getElementById('songbtn');
var songlist=document.getElementById('songlist');
var sure=document.getElementById('sure')
var add=document.getElementById('add')

/*****生成歌曲列表*****/
function dolist(){
	for (var i = 0; i < data.length; i++) {
		//生成列表
		var li=document.createElement("li");
		li.innerHTML="<input type='radio' name='op' id='"+i+"'><label for='"+i+"'>"+data[i].song+"</label><span>"+data[i].author+"</span>";
	   songlist.getElementsByTagName("ul")[0].appendChild(li);
	   //生成音轨
	   /*var source=document.createElement("source");
	   source.src=data[i].address;
	   song.appendChild(source);*/
	}
}
/*****同步歌曲和封面*****/
function renew(a){
	 document.getElementById('name').innerHTML="<h3>"+data[a].song+"</h3><span>"+data[a].author+"</span>";
	 pic.style.background="url("+data[a].cover+") center center no-repeat";
	 pic.style.backgroundSize="cover";
	  song.innerHTML='';
	  var source=document.createElement("source");
	  source.src=data[a].address;
	  song.appendChild(source);
}
/*****时间线*****/
function timeline(){
  var timer=setInterval(function(){
	  //总时间
	  var sumTime=song.duration;
	  var sumM=parseInt(sumTime/60);
	  if (sumM < 10) {sumM = "0" + sumM;}
	  var sumS=parseInt(sumTime%60);
	  if (sumS < 10) {sumS = "0" + sumS;}
	  //当前时间
	  var currentTime=song.currentTime;
	  var currentM=parseInt(currentTime/60);
	  if (currentM < 10) {currentM = "0" + currentM;}
	  var currentS=parseInt(currentTime%60);
	  if (currentS < 10) {currentS = "0" + currentS;}
	  start.innerHTML=currentM+":"+currentS;
	  end.innerHTML=sumM+":"+sumS;
	  //线
	  red.style.width=parseInt(currentTime*260/sumTime)+"px";
	  move.style.left=parseInt(currentTime*260/sumTime-7)+"px";
	  if(parseInt(song.duration)==parseInt(song.currentTime)){
		if(timer){clearInterval(timer);timer=null;
		if(isloop==true){
		  if(current>data.length){current=0;}else{current=current+1;}
		  renew(current);}
		play();
		return;}
	  }
  },1000);
}
/*****播放歌曲****/
function play(){
	  cover.className="cover rotate";
	  bar.innerHTML="<img src='images/13.png'>";
      song.play();
	  isplay.style.display="none";
	  noplay.style.display="block";
	  timeline();	  
}
function pause(){
		 cover.className="cover";
		 bar.innerHTML="<img src='images/12.png'>";
		 song.pause();
		 noplay.style.display="none";
		 isplay.style.display="block";
}
function btn() {
	/*********打开歌曲列表******/
	songbtn.onclick=function(){songlist.style.height=300+"px";}
	/*********选择歌曲和关闭歌曲列表******/
	sure.onclick=function(){
	    var ops=songlist.getElementsByTagName("ul")[0].getElementsByTagName("input");
	    for (var i = 0; i < ops.length; i++) {
	       if(ops[i].checked){current=i;}
		}
		songlist.style.height=0+"px";
		renew(current);
		for (var i = 0; i < ops.length; i++) {
	       ops[i].checked=false;
		}
	}
	/*********添加歌曲列表******/
	add.onclick=function(){alert("还没有做，去后台添加吧");}
	/*********播放歌曲******/
	isplay.onclick=function(){play();}
	noplay.onclick=function(){pause();}
	/*********上一曲和下一曲******/
	next.onclick=function(){
		if(current>data.length){current=0;}
		else{current=current+1;}
		renew(current);}
	last.onclick=function(){
		if(current<1){current=data.length-1;}
		else{current=current-1;}
		renew(current);}
	/*********打开歌词和关闭歌词******/
	lrc.onclick=function(){
		   lrc.style.display="none";
		   nolrc.style.display="block";
		   bar.style.display="none";
		   cover.style.display="none";
		   cover2.style.display="block";
	}
	nolrc.onclick=function(){
		   nolrc.style.display="none";
		   lrc.style.display="block";
		   bar.style.display="block";
		   cover.style.display="block";
		   cover2.style.display="none";
	}
	/*********切换歌曲次序******/
	order1.onclick=function(){order1.style.display="none";order2.style.display="block";isloop=false;}	
	order2.onclick=function(){order2.style.display="none";order1.style.display="block";isloop=true;}	
	/*order3.onclick=function(){order3.style.display="none";order1.style.display="block";}	*/		   
}
dolist();
renew(0);
btn();


