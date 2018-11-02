let bigBox = document.querySelector(".banner");
console.log(bigBox);
var hammertime = new Hammer(bigBox);
/* hammertime.on('pan',function(ev){
	console.log(ev);
}) */

let yuanList = document.querySelectorAll(".circle div");
console.log(yuanList);
let intLeft = 0;

hammertime.on("panstart",function () {
	intLeft= parseInt(bigBox.style.marginLeft?bigBox.style.marginLeft:0); 
});
console.log(intLeft);
hammertime.on("panmove",function (e) {
	bigBox.style.transition = "all 0s";
	bigBox.style.marginLeft = intLeft +e.deltaX+"px";
	if (parseInt(bigBox.style.marginLeft?bigBox.style.marginLeft:0)>=0) {
		bigBox.style.marginLeft = 0+"px";
	} else if(parseInt(bigBox.style.marginLeft?bigBox.style.marginLeft:0)< -(bigBox.offsetWidth*2/3)){
		bigBox.style.marginLeft = -(bigBox.offsetWidth*2/3)+"px";
		
	}
	console.log(bigBox.style.marginLeft);
	console.log(bigBox.offsetWidth*2/3);
});
hammertime.on("panend",function () {
	bigBox.style.transition = "all 0.3s";
	let left = Math.abs(parseInt(bigBox.style.marginLeft?bigBox.style.marginLeft:0))/* <(bigBox.offsetWidth/6) */;
	console.log(left);
	let width = bigBox.offsetWidth;
	console.log(width);
	yuanList.forEach(function(val,index){
		val.style.backgroundColor = "black";
	});
	if (left<width/6) {
		bigBox.style.marginLeft = 0;
		yuanList[0].style.transition = "all 0.3s";
		yuanList[0].style.backgroundColor = "white";
	}else if(left<width/2){
		bigBox.style.marginLeft = -width/3+"px";
		yuanList[1].style.transition = "all 0.3s";
		yuanList[1].style.backgroundColor = "white";
	} else{
		bigBox.style.marginLeft = -width*2/3+"px";
		yuanList[2].style.transition = "all 0.3s";
		yuanList[2].style.backgroundColor = "white";
	}
});

let smallBox = document.querySelector(".smalltiao");
console.log(smallBox);
let sBox = document.querySelector(".smalltiao>div:last-child");
var hammertime = new Hammer(smallBox);

let inerLeft = 0;
console.log(inerLeft);
hammertime.on("panstart",function () {
	inerLeft= parseInt(smallBox.style.marginLeft?smallBox.style.marginLeft:0); 
	console.log(inerLeft);	
});

hammertime.on("panmove",function (e) {
	smallBox.style.transition = "all 0s";
	smallBox.style.marginLeft = inerLeft +e.deltaX+"px";
	console.log(smallBox.style.marginLeft);
	if (parseInt(smallBox.style.marginLeft?smallBox.style.marginLeft:0)>0) {
		smallBox.style.marginLeft = 0+"px";
	}else if (parseInt(smallBox.style.marginLeft?smallBox.style.marginLeft:0)< -(sBox.offsetWidth)) {
		smallBox.style.marginLeft = -(sBox.offsetWidth)+"px";
	}
	console.log(smallBox.style.marginLeft);
	console.log(sBox.offsetWidth);
});
hammertime.on("panend",function () {
	smallBox.style.transition = "all 0.3s";
	if (Math.abs(parseInt(smallBox.style.marginLeft?smallBox.style.marginLeft:0))<(sBox.offsetWidth*1/3)) {
		smallBox.style.marginLeft = 0;
	} else{
		smallBox.style.marginLeft = - sBox.offsetWidth+"px";
	}
});