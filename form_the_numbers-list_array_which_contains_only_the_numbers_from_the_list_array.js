function summa_before_false(list) {
	let numbers_list =[];
  	for (let item of list) {
		if (item === false) {
			break;
		}
    		else if (typeof item !== "number") {
      			 continue;
    		}
		else {
			numbers_list.push(item)	;
		}

  	}
	console.log(numbers_list);
}

summa_before_false(list)