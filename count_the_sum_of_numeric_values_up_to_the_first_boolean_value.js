function summa_before_bool(list) {
  	let sum = 0;
  	for (let item of list) {
    		if (typeof item === "boolean") {
      			break;
    		}
		sum +=item;
  	}
	console.log(sum);
}

summa_before_bool(list)