function printArray(values) {
  	for (let index = 0; index < values.length; index++) {
    		if (typeof values[index] != "boolean"){
			continue
		}
		else {
			values[index] = "Булевый тип";
			break;
		}
  	}
	console.log(values);
}
printArray(values)