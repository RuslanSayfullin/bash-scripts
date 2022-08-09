function summa_without_default(list) {
	let counter =0;
  	for (let item of list) {
		if (item.toLowerCase() === "default") {
			continue;
		}
		counter +=1;
  	}
	console.log(counter);
}

summa_without_default(list)