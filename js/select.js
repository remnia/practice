/* $(function () {
	$(".top>div").click(function () {
		$(".top>div").css("background","yellow");
		$(this).css("background","orange");
		let index = $(".top>div").index(this);
		$(".bottom>div").css("display","none");
		let ele = $(".bottom>div")[index];
		$(ele).css("display","block");
	});
}); */

$(function () {
	console.log($(".top>div"));
	$(".top>div").mouseover(function () {
		$(".top>div").css("background","violet");
		$(this).css("background","lightcoral");
		let index = $(".top>div").index(this);
		$(".bottom>div").css("display","none");
		let ele = $(".bottom>div")[index];
		$(ele).css("display","block");
	});
});