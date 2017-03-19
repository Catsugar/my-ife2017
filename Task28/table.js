/***全局变量*****/
var table=document.getElementsByTagName("table")[0];
/*****绑定按钮的事件*****/
function btn() {
	var up=table.getElementsByClassName("up");
	var down=table.getElementsByClassName("down");
	for(var i=0;i<up.length;i++){
	  up[i].onclick=function(){
		var thisTh=this.parentNode.parentNode;
        var ths=table.getElementsByTagName("th");
		for(var j=0;j<ths.length;j++){
			if(thisTh==ths[j]){
		      var index=j;	
		   }
	    }
		//取得行数
		var rowlength=table.rows.length;
		var scores=[],names=[]
		//取得比较科目的分数。
		for(var k=0;k<rowlength;k++){
		  scores[k]=parseInt(table.rows[k].cells[index].innerHTML);
		  names[k]=table.rows[k];
		}
		alert(scores);
		//排序
		
		for(var j=1;j<scores.length;j++){
          for(var k=j;k<scores.length;k++){
				if(scores[j]-scores[k]){
					var a,b; 
					b=scores[j];
					scores[j]=scores[k];
					scores[k]=b;

					a=names[j];
					names[j]=names[k];
					names[k]=a;
				}
				alert(scores);
		    }
		  }
		  
		  /***移除先前的元素*****/
		  table.children[0].remove(table.children[0].children);
		  for(var j=0;j<names.length;j++){
		    table.appendChild(names[j]);
			alert(names[j]);
		  }
		}
	  }
}
btn();
/*****前进函数*****/
function GO(n){
}

