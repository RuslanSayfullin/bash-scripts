tasks= [{"title":"Умыться","completed":true},{"title":"Сделать зарядку","completed":true},{"title":"Приготовить завтрак","completed":false}];
newarray = [];
function printArray(tasks) {
  	for (let index = 0; index < tasks.length; index++) {
  	        newarray.push((tasks[index]).title);
  	}
	console.log(newarray);
}
printArray(tasks)