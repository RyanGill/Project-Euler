/*
Original Problem:
Each new term in the Fibonacci sequence is generated by adding 
the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed 
four million, find the sum of the even-valued terms.
*/

//Declare Variables
var target=prompt("Do not exceed (Original is 4000000):");
//Start the Sequence
var sequence=[1,2];
var sum=0;
//Sum of Evens
var evensum=0;

//Generate Fibonacci Sequence
for(var i=1;sequence[i]<target;i++){
    sum=sequence[i]+sequence[i-1];
    sequence.push(sum);
}
//Display Sequence
console.log(sequence);

//Find the even numbers in sequence and sum them together
for(var i=0;i<sequence.length;i++){
    if(sequence[i]%2 === 0)
        evensum+=sequence[i];
}

//Display sum
console.log("Sum of all evens = "+evensum);