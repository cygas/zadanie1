window.addEventListener("load", function(){	
	
	Array.prototype.reverseO = function(){
		for(let i=0; i<this.length;i++){
			if(this[i] == 0){
				this.unshift(...this.splice(i,1));				
			}			
		}
		return this;
	}
	
	Array.prototype.reverseO2 = function(){
		for(let i=0; i<this.length;i++){
			if(this[i] == 0){
				this.splice(i,1);
				this.unshift(0);						
			}			
		}
		return this;
	}
	//nowa metoda
	Array.prototype.reverseO3 = function(){
		let count = 0;
		let tempArr = [];
		let len = this.length;
		for(let i=0; i<len;i++){
			if(this[i] !== 0){
				tempArr.push(this[i]);
				count++;				
			}			
		}
		while(count < len){
			tempArr = [0, ...tempArr];
			count++;
		}		
		return tempArr;
	}
		
	
	/*
	let a = [1, 0, 2, 0, 0] ;
	let b = [0,43,356,57,234,0,453,0,0,0,5340,2,4,5,0,0,636,0,35,0,634,0];
	let c = [0,43,356,57,234,0,453,0,0,0,5340,2,4,5,0,0,636,0,35,0,634,0];
	console.log(a.reverseO2());
	console.log(b.reverseO2());
	console.log(c.reverseO3());
	console.log(c);	
	*/

});