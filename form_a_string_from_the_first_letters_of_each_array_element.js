function first_element(list) {
	let result ="";
  	for (let item of list) {
		result +=item[0];
  	}
	console.log(result);
}

first_element(list)