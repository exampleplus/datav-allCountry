
			function times(){
			var mydate = new Date();//获取当前日期
		    var week;//定义星期
			//switch判断
			switch (mydate.getDay()){
			     case 1: week="星期一"; break;
			     case 2: week="星期二"; break;
			     case 3: week="星期三"; break;
			     case 4: week="星期四"; break;
			     case 5: week="星期五"; break;
			     case 6: week="星期六"; break;
			     default:week="星期天"; break;
				}
			//年
			var year = mydate.getFullYear();
			    //判断小于10，前面补0
			   if(year<10){
			    year="0"+year;
			 }
			//月
			 var month = mydate.getMonth()+1;
			    //判断小于10，前面补0
			  if(month<10){
			     month="0"+month;
			 }
			 //日
		   	var day = mydate.getDate();
			    //判断小于10，前面补0
			   if(day<10){
			    day="0"+day;
			 }
			 //时
			var hours =mydate.getHours();
				//判断小于10，前面补0
				    if(hours<10){
				    hours="0"+hours;
				 }
			//分
			var minutes =mydate.getMinutes();
			    //判断小于10，前面补0
			    if(minutes<10){
			    minutes="0"+minutes;
			 }
			//秒
		   var seconds=mydate.getSeconds();
			    //判断小于10，前面补0
			    if(seconds<10){
			    seconds="0"+seconds;
			 } 
			//拼接年月日时分秒
			var today = year+"年"+month+"月"+day+"日 "+" "+week;
			var time=hours+":"+minutes+":"+seconds;
			//显示在id为showtimes的容器里
			 document.getElementById("time").innerHTML=time;;
			 document.getElementById("year").innerHTML=today;
}				
setInterval("times()",100);

