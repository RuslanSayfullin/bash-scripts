function average(list) {
	let counter = list.length;
	let sum = 0;
	for (let value of list) {
		sum +=value;
  	}
	let result = Math.round(sum/counter);
	console.log(result);
}

average(list);