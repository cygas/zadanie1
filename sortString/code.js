window.addEventListener("load", function(){	
	
	function sortString(str){
		let arr = str.toLowerCase().replace(/\W/g,'').split('').sort();
		return arr.join('');
	}
	
	String.prototype.sortString = function(){
		let arr = this.toLowerCase().replace(/\W/g,'').split('').sort();
		return arr.join('');
	}


	
	//ta wersja jest ponoć najszybsza według firefoxa
	function sortString2(str){
		let arr = str.toLowerCase().split('').sort(Intl.Collator().compare);
		return arr.join('').replace(/[^a-zÀ-ž]/g, "");
	}
	//ta trochę wolniejsza, ale też uwzględnia polskie znaki
	function sortString3(str){
		let arr = str.toLowerCase().split('').sort(function (a, b) {
		  return a.localeCompare(b);
		});	
		return arr.join('').replace(/[^a-zÀ-ž]/g, "");
	}
	
	
	function oddSortString(str){
		let arr = str.toLowerCase().split('').sort(Intl.Collator().compare);
		for(let i=0;i<arr.length;i++){
			if(arr[i] == "a"){
				arr[i] = "b";
			}else{
				if(arr[i] == "b")
					arr[i] = "a";
			}
		}
		return arr.join('').replace(/[^a-zÀ-ž]/g, "");		
	}
	

});