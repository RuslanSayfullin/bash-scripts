let regexp= /\d\d\D\D$/;

let newpn = [];
values = partNumbers;

function printArray(values) {
  	for (let value of values) {
    		if (regexp.test(value)) {
			newpn.push(value);
  		}
	}
	console.log(newpn);
}

printArray(values)