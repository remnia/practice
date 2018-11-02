let n = 0;
 var t=setInterval(function(){
  n++;
  move();
 },2000);
function move(){
	$(".dian li").css("background","#fff");
	$($(".dian li")[n]).css("background","black");
	$(".tu").animate({
		left:-n*300+"px"
	},1000);
	if (n==3) {
		n=0;
		$($(".dian li")[0]).css("background","black");
		$(".tu").animate({
			left:-n*300+"px"
		},0);
	}/* else if(n==0){
		n=3;
		$(".tu").animate({
			left:-4*300+"px"
		},0);
	} */
}
