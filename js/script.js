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
onload = function(){
	let clock = document.querySelector('#clock');
	setInterval(function(){
		clock.innerHTML = new Date().toLocaleTimeString();
	}, 1000);
};