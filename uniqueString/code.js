window.addEventListener("load", function(){	
	
	function uniqueString(len){
		let charArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"];		
		let a=[];
		for(let i=0;i<len;i++){
			a[i]= charArr[Math.floor(Math.random() * charArr.length)];
		}
		return a.join('');
	}
	
	function uniqueString2(len) {
	  var text = "";
	  var alphabet = "abcdefghijklmnopqrstuvwxyz";

	  for (var i = 0; i < len; i++){
		text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	  }
	  return text;
	}	
	
});