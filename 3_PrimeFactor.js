/*
Adaption on Project Euler question #3:
Find the largest prime factor of a number

NOTE: This solution uses a brute force method. Do not try with large numbers! 
*/

var target=prompt("Enter a number: ");
var factor=1;

//Function checks if multiple is a prime#
var primeChecker=function(number){
	for(var i=2; i<number; i++){
		if (number%i === 0)
			return false;
	}
	return true;
};

for (var i=2; i<target; i++){
	if(target%i === 0){
		var check=primeChecker(i);
		if(check === true)
			factor=i;
	}
}
console.log("Largest Prime Factor of "+target+" is: "+factor);