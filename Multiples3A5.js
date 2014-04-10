/*
Problem 1 from Project Euler:
If we list all the natural numbers below 10 that are multiples 
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

//Declare Variables
var target=prompt("Enter the target (1000 in Original Problem): ");
var sum=0;

//Check if each number is a multiple of 3 or 5
for(var i=0; i<target; i++){
    if(i%3 === 0 || i%5 === 0)
        sum+=i;
}

console.log(sum);