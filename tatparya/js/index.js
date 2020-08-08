	$(document).ready(function(){
	var i = 0;
	var i2 = 0;
	var interval = "";
	$(".main_imgdiv2 img").click(function(){
		$(".main_imgdiv2 img").animate({opacity:0.5});

		if($(document).innerWidth()>940)
			$(".main_imgdiv2 img").animate({width:150,height:150},200);
		else
			$(".main_imgdiv2 img").animate({width:100,height:100},200);

		$(this).animate({width:200,height:200},200);
		var no = $(this).index();
		console.log(no);
		$(this).animate({opacity:1});
		$("#main2 .main_div").hide();
		$("#main2 .main_div").eq(no).show();
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>$(document).innerHeight()/2){
			$("#up").show();
		}
		else{
			$("#up").hide();
		}
		console.log($("#main1").position().top);
		console.log($("#main2").position().top);
		console.log($("#main3").position().top);
		console.log($("#main2").position().top);
		if($(window).scrollTop()==0){
			$("#link_div a").eq(0).addClass("active");
			$("#link_div a").eq(1).removeClass("active");
			$("#link_div a").eq(2).removeClass("active");
			$("header").css("border-bottom","0");
		}
		else if($(window).scrollTop()>200 && $(window).scrollTop()<$("section").position().top){
			$("#link_div a").eq(0).removeClass("active");	
			$("#link_div a").eq(1).addClass("active");	
			$("#link_div a").eq(2).removeClass("active");
		}
		else if($(window).scrollTop()>$("section").position().top){
			$("#link_div a").eq(0).removeClass("active");	
			$("#link_div a").eq(1).removeClass("active");	
			$("#link_div a").eq(2).addClass("active");	
		}
	});	
	if($(window).scrollTop()>$(document).innerHeight()/2){
		$("#up").show();
	}
	else{
		$("#up").hide();
	}
	$(".indicator span").click(function(){
		i = $(this).index();
		$(".slides").hide();
		$(".slides").eq(i).show();
		$(".indicator span").css("background","transparent");
		$(this).css("background","white");
	});
	$("#up").click(function(){
		$("html, body").animate({scrollTop:0});
	})
	$("#link_div a").click(function(){
		var index =$(this).index();	
		if(index==0){
			var scrolltop = $("#main1").position().top;
			$("html, body").animate({scrollTop:scrolltop});
		}
		else if(index==1){
			var scrolltop = $("#main2").position().top;
			$("html, body").animate({scrollTop:scrolltop});
		}
		else if(index==2){
			var scrolltop = $("#main3").position().top;
			$("html, body").animate({scrollTop:scrolltop});
		}
	})
});