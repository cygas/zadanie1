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
	  let text = "";
	  let alphabet = "abcdefghijklmnopqrstuvwxyz";

	  for (let i = 0; i < len; i++){
		text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	  }
	  return text;
	}	
	
	//nowe funkcje
	
	function randomString(){
		return Math.random().toString(36).substring(2);
	}
	
	function randomString2(L) {
	  let s = '';
	  let randomchar = function() {
		let n = Math.round(Math.random() * 62);
		if (n < 10) return n; //0-9
		if (n < 36) return String.fromCharCode(n + 55); //A-Z
		return String.fromCharCode(n + 61); //a-z
	  }
	  while (s.length < L) s += randomchar();
	  return s;
	}

	
});