$(window).scrollTop(1);
let flag = true;
$(".bottom ul>li").click(function(){
	flag = false;
	let index = $(".bottom ul>li").index(this);
	let bottomNum = $(".top ul>li").eq(index).offset().top;
	console.log(bottomNum);
	$(".bottom ul>li").eq(index).css("background","orange").siblings().css("background","yellow");
	$("html,body").animate({
		scrollTop:bottomNum
	},500,function(){
		flag = true;
	});
	$(window).scroll(function(){
		if (flag) {
					let scrTop = $(window).scrollTop();
		for (let i=0;i<$(".bottom ul>li").length;i++) {
			let min = $(".top ul>li").eq(i).offset().top;
			let max = min + $(".top ul>li").eq(i).outerHeight();
			if (scrTop>=min && scrTop<max) {
				$(".bottom ul>li").eq(i).css("background","orange").siblings().css("background","yellow");
			}
		}
		}

	});
	
});