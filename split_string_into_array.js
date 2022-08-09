let newsentence=[];
let range =0;

function printArray(sentence) {
	for (let value of sentence) {
		if (value == " ") {
			range +=1;
			continue;
		}
		if (typeof newsentence[range] === "undefined"){
			newsentence[range] = value;
		}
		else {
			newsentence[range] +=value;
		}

  	}
console.log(newsentence);
}

printArray(sentence)