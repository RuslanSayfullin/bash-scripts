layout =  "<div>10<span>14<p>25<p>39<p>8<p>101</p></p></p></p></span></div>";
var regex =/[<\D*>]/;
let numberlist = layout.split(regex);
let newpn = [];


function printArray(numberlist) {
  	for (let index = 0; index < numberlist.length; index++) {
    		if (typeof Number(numberlist[index]) === "number" && Number(numberlist[index]) >0){
			    newpn.push(Number(numberlist[index]));
		}
  	}
  	const changeArray = [];
  	for (let index = 0; index < newpn.length; index++) {
  	    if ((newpn[index]%2) != 0) {
  	        changeArray.push(newpn[index]);
  	    }
  	    else {
  	        changeArray.push((newpn[index])**2);
  	    }
  	}
	console.log(changeArray);
}
printArray(numberlist)




