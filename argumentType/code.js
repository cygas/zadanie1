window.addEventListener("load", function(){	
	
	function argType(arg){
		return (typeof arg);
	}
	
	let x = 3;
	let y = "hej";
	let z = {
		a: 2,
		v: "ddd"
	};
	let c = [1,2,3,4];
	let d = function (){
		alert("sads");
	}
	let e = false;
	
	console.log(argType(x));
	console.log(argType(y));
	console.log(argType(z));
	console.log(argType(c));
	console.log(argType(d));
	console.log(argType(e));
	
	console.log(c instanceof Array);
	console.log(Array.isArray(c));


});