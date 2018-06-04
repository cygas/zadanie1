window.addEventListener("load", function(){	
	
	function multiply(num){
		return function(str){
			return num*str;
		}
	}
	
	let multi = num => { return str => num*str; };

});