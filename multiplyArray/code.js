window.addEventListener("load", function(){	
	
	function multiplyArr(arr){
		let d = [];
		for(let i=0; i<arr.length; i++){
			d[i] = arr[i]*2;			
		}
		return d;
	}
	
	Array.prototype.multiplyArr = function(){
		for(let i=0; i<this.length; i++){
			this[i] = this[i]*2;
		}
		return this;
	}

});