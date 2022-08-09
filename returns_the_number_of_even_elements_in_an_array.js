function count(list) {
	let counter = 0;
	for (let value of list) {
    		if (value % 2 !=0){
			continue;
		}
	counter += 1;
  	}
	console.log(counter);
}

count(list);
