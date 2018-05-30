window.addEventListener("load", function(){	
	
	function sortString(str){
		let arr = str.toLowerCase().replace(/\W/g,'').split('').sort();
		return arr.join('');
	}
	
	String.prototype.sortString = function(){
		let arr = this.toLowerCase().replace(/\W/g,'').split('').sort();
		return arr.join('');
	}
		
});