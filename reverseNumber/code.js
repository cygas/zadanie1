window.addEventListener("load", function(){	
	
	function reverseNumber(number){
		let arr = number.toString().split('').reverse();
		return parseInt(arr.join(''));		
	}	
	
	Number.prototype.reverseNumber = function(){
		let arr = this.toString().split('').reverse();
		return parseInt(arr.join(''));		
	}

});