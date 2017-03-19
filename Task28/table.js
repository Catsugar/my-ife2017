/***全局变量*****/
   var data = [

        {"姓名": "小明", "语文": "80", "数学": "90", "英语": "70", "总分": "240"},

        {"姓名": "小红", "语文": "100", "数学": "60", "英语": "90", "总分": "250"},

        {"姓名": "小亮", "语文": "60", "数学": "100", "英语": "70", "总分": "230"},

        {"姓名": "小米", "语文": "60", "数学": "50", "英语": "80", "总分": "190"}

    ];
	var btn=document.getElementById("btn");
	var table=document.getElementsByTagName("table")[0];
	var tbody = document.getElementsByTagName("tbody")[0];
/*****添加数据*****/
function adddata(){
  btn.onclick=function(){	
	var name=document.getElementById("name").value;
	var Chinese=parseInt(document.getElementById("Chinese").value);
	var math=parseInt(document.getElementById("math").value);
	var English=parseInt(document.getElementById("English").value);
	var sum=Chinese+math+English;
	if(name=="" || name==null ||  isNaN(Chinese) ||  isNaN(math) ||  isNaN(English)){
	  alert("请正确输入值");
	  return;
	}else{
	  reclear();
	  data.push({"姓名": name, "语文": Chinese, "数学": math, "英语": English, "总分": sum});
	  renew();
	}
	
  }
}
/*****清空表格*****/
function reclear(){
	var length=table.getElementsByTagName("tr").length;
	for (var i = 1; i <length; i++) {
 	    table.removeChild(table.lastChild);
	}
}
/*****生成表格*****/
function renew(){
	for (var i = 0; i < data.length; i++) {
		var tr=document.createElement("tr");
		tr.innerHTML="<td>" + data[i].姓名 + "</td><td>" + data[i].语文 + "</td>" 
	   +"<td>" + data[i].数学 + "</td><td>" + data[i].英语 + "</td>" 
	   +"<td>" + data[i].总分 + "</td>";
	   table.appendChild(tr);
	}
}
/*****排序*****/
function Sort() {
	var sortopt=table.getElementsByClassName("sortopt");
	for(var i=0;i<sortopt.length;i++){
	  sortopt[i].onclick=function(){
		var thisTh=this.parentNode.parentNode;
        var ths=table.getElementsByTagName("th");
		for(var j=0;j<ths.length;j++){
			if(thisTh==ths[j]){
		      var index=j;	
		   }
	    }
		//取得行数
		var rowlength=table.rows.length;
		var scores=[],names=[];
		//取得比较科目的分数。
		for(var k=0;k<rowlength;k++){
		  scores[k]=parseInt(table.rows[k].cells[index].innerHTML);
		  names[k]=table.rows[k];
		}
		//排序
		for(var j=1;j<scores.length;j++){
          for(var k=j;k<scores.length;k++){
			  /**判断是升序还是降序****/
			  if(this.id=="up"){
                if(scores[j]>scores[k]){
					var a,b; 
					b=scores[j];
					scores[j]=scores[k];
					scores[k]=b;

					a=names[j];
					names[j]=names[k];
					names[k]=a;
				}
			  }else if(this.id=="down"){
                if(scores[j]<scores[k]){
					var a,b; 
					b=scores[j];
					scores[j]=scores[k];
					scores[k]=b;

					a=names[j];
					names[j]=names[k];
					names[k]=a;
				}
			 }
		    }
		  }
		  /***移除先前的元素*****/
		  table.children[0].remove(table.children[0].children);
		  /***重新生成表格*****/
		  for(var j=0;j<names.length;j++){
		    table.appendChild(names[j]);
		  }
		}
	  }
}
renew();
Sort();
adddata();


