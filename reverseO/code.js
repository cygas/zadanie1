window.addEventListener("load", function(){	
	
	Array.prototype.reverseO = function(){
		for(let i=0; i<this.length;i++){
			if(this[i] == 0){
				this.unshift(...this.splice(i,1));				
			}			
		}
		return this;
	}

});