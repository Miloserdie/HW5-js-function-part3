console.log('------------- # 4');
function fromTo(a, b){
	if(a === b){
		return console.log(b);
	} else if (a < b){
		console.log(a);
		fromTo(a + 1, b);
	} else{
		console.log(a);
		fromTo(a - 1, b);
	}
}
fromTo(10, 1);
window.onload = function(){
	window.setInterval(function(){
		let now = new Date();
		let clock = document.getElementById("clock");
		clock.innerHTML = now.toLocaleTimeString();
	}, 1000);
};