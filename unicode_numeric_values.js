let fc1 = (symbols.codePointAt(0));
let fc2 = (symbols.codePointAt(1));
let fc3 = (fc1+fc2);

if (((fc1+fc2)%2)==0){
	console.log(String.fromCodePoint(fc3));
}
else {
	console.log("Символ обнаружить не удалось");
}