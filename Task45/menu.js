var menu=document.getElementById("menu");
var dialog=document.getElementById("dialog");
var container=document.getElementById("container");
var ad1=document.getElementById("ad1");
var ad2=document.getElementById("ad2");
var del=document.getElementById("del");
var sure=document.getElementById("sure");
var list=document.getElementById("list");
var showbox=document.getElementById("showbox");

var style;
function showmenu() {
	  event.preventDefault ? event.preventDefault():(event.returnValue = false);
	  //初始化
	  menu.style.display="none";
	  menu.style.left="";
	  menu.style.top="";
	  menu.style.right="";
	  menu.style.bottom="";
	
	  var e=event||window.event;
	  var eX=e.clientX;
	  var eY=e.clientY;
	  var winW=document.body.clientWidth;
	  var winH=document.body.clientHeight;
	  console.log("点击坐标："+eX+","+eY+"窗口："+winW+","+winH)
	  menu.style.display="block";
	  menu.style.left=eX+"px";
	  menu.style.top=eY+"px";;
	  var menuW=menu.offsetWidth;
	  var menuH=menu.offsetHeight;
	  if(eX+menuW>winW){
		  menu.style.right=(winW-eX)+"px";
	  }else{
		  menu.style.left=eX+"px";}
      if(eY+menuH>winH){
		  menu.style.bottom=(winH-eY)+"px";
	  }else{
		  menu.style.top=eY+"px";} 
}
function main() {
	  //阻止事件冒泡
     container.addEventListener('oncontextmenu',function(e){e.stopPropagation()},false);//阻止冒泡
	 showbox.addEventListener('oncontextmenu',function(e){e.stopPropagation()},false);//阻止冒泡
     //单击窗口，菜单消失
     window.onclick=function(){
     menu.style.display="none";
	 menu.style.left="";
	 menu.style.top="";
	 menu.style.right="";
	 menu.style.bottom=""; }
     showbox.oncontextmenu=function(){del.disabled=true;showmenu();}
	 var as=list.getElementsByTagName("as");
	 for(var i=0;i<as.length;i++){
		 a[i].onclick=function(){//左击----打开文件或者文件夹
		   if(this.href==""){
			   return;
		   };
		 }
		 lis[i].oncontextmenu=function(){
			 ad1.disabled=true;
			 ad2.disabled=true;//右机
		     showmenu();
		 }
	 }
	ad1.onclick=function(){dialog.style.display="block";menu.style.display="none";style=1;}
    ad2.onclick=function(){dialog.style.display="block";menu.style.display="none";style=2;}
    del.onclick=function(){menu.style.display="none";}
	sure.onclick=function(){
		dialog.style.display="none";
		var inputname=document.getElementById("inputname").value;
		console.log(inputname);
		if(style=1){
		}else{
		}
	}
}

main();