	window.onload=function(){
				refresh_20();
			}
			var number_allCountry=$("#number_allCountry");//全国贷款人数
			var number_day=$("#number_day");//等待放款人数
			var all=$("#all");//历史总金额
			var money_day=$("#money_day");//当天放款金额
			
			function refresh_20(){ 		//20秒请求一次全国统计数据接口
				setTimeout(refresh_20,20000)
					$.ajax({
					type:"get",
					url:"http://api.pettycash.cn/pjapiksh/userinfo/queryCountry.do",
					dataType:"jsonp",
					jsonp:"jsonpCallback",
					async:true,
					success:function(res){
						data=res.data;//借款信息
	//					console.log(res);
	//					console.log(data);
						number_allCountry.text(data.NationalLoanBorrowing); //全国贷款人数
						number_day.text(data.NationalLoanWaiting);   //全国等待放款人数
						all.text(data.NationalTotalBorrowing);  //历史总金额
						money_day.text(data.DayTotalBorrowing); //当天放款金额
						var list2=res.list2;
						console.log(list2);
						var tbody=$("tbody");
						$(list2).each(function(index){
							var val=list2[index];
							var tr=$("<tr></tr>");
							tr.append('<td>' + val.mingci + '</td>' + '<td>' + val.province + '</td>' + '<td>'+ val.count +'</td>'+ '<td>'+ val.historyMoney +'</td>' + '<td>'+ val.todayMonty +'</td>');					   
							tbody.append(tr);
						})
					},
				})
			}
		setInterval(slider,5000);
//		slider()
		function slider(){
			var sliderindex = 0;
			let numslider = -sliderindex*50+'px';
			var ban=$(".banner")
			var oUl = ban.find("ul");
			var aImg = ban.find("img");
			var imgWidth = parseFloat(ban.css("width"));//容器宽度
			 oUl.css("width", imgWidth * aImg.length + 'px');//ul宽度
			var $list = $('.banner .clear li'); //头像列表
			var info = $(".info");
			var $uLlist = $('.info .info_cont'); //个人信息列表
			if($list.eq(sliderindex).index() == $uLlist.eq(sliderindex).index()) {  //当前滚动头像的索引等于个人信息列表的索引
				$uLlist.eq(sliderindex).show().siblings().hide();//显示对应头像的个人信息，其他隐藏
			}
			if($list.eq(sliderindex).index() == sliderindex) {   
			$list.eq(sliderindex).addClass('posit').siblings().removeClass('posit'); //滚动到当前头像，头像移动到指定位置
		}
			$uLlist.eq(sliderindex).appendTo(info);   //把当前的个人借款信息追加到最后
			$list.eq(sliderindex).appendTo(oUl);	//把当前的头像追加到头像列表最后边	
			$('.banner ul').css('margin-left', numslider);
			if(sliderindex >= $('.banner ul li').length){
					sliderindex = 0;
					$('.banner ul').css("margin-left",0);
					$list.last().removeClass('posit');
					$list.first().addClass('posit');
					$uLlist.last().hide();
					$uLlist.eq(sliderindex).show();
				}
		sliderindex++;
	}
		
		//借款人信息接口
		$.ajax({
				type:"get",
				url:"http://api.pettycash.cn/pjapiksh/userinfo/queryUserInfo.do",//借款人信息
				dataType:"jsonp",
				jsonp:"jsonpCallback",
				async:true,
				success:function(res){
					list=res.list;//个人信息
					console.log(list);
					 var info = $(".info");
				 	 var clear = $(".clear");
					 $(list).each(function(index){
				 	var val = list[index];
                    //个人信息
					if(index==0){  
						var  Mydiv=$("<div class='info_cont'></div>"); 	//如果index=0，只显示当前借款人信息
					}else{
						var  Mydiv=$("<div class='info_cont none'></div>"); 
					}
				 	 Mydiv.append('<div class="info_left">'  //存放个人信息---》姓名和ID
				 	 + '<p class="first_name">'+val.realname+'</p>'
				 	 +'<p>'+'ID:'+val.ID+'</p>'
				 	 +'</div>'
				 	 +'<div class="info_right">'              //存放个人信息---》借款金额和地址，联系方式
					 +'<p>'+'<span class="sex">'+val.userSex+'<span>'+'&nbsp;&nbsp;&nbsp;'+'</span>'+'</span>' +'<span>'+val.userAge+'</span>'+'</p>'
					 +'<p class="add">'+val.address+'</p>'
					 +'<p>'+val.userPhone+'</p>'
					 +'</div>');
				   info.append(Mydiv); 
			       // 头像轮播
				   var  myli=$("<li class='con-show01'></li>");
				   var  mydv=$("<div class='con-show02'></div>");
				   var  myd=$("<div class='con-show03'></div>");
				   myli.append(mydv);
				   mydv.append(myd);
				   myd.append("<img src='"+val.src+"' alt=''/>");
				   clear.append(myli); //存放头像
				 }) //each
				},//success
		})