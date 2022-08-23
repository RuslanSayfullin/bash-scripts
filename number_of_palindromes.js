let words = ["Заказ","Такси","Доход"]

function countofpalindromes(words) {
    let result = [0, 0];
  	for (let index = 0; index < words.length; index++) {
  	        let newword = ((words[index]).toLowerCase()).split("");
  	        let newword2 = newword.reverse();
  	        let reversedwords = newword.join('');
  	        if (  reversedwords != ((words[index]).toLowerCase())  ) {
  	            result[1] +=1;
  	        }
  	        else {
  	            result[0] +=1;
  	        }
  	}
    console.log(result);
}

countofpalindromes(words)