// Assignment Question 5//

// prompt user for a positive number//

let num = prompt("40:");

// ensure num is a positive number//

num = Math.abs(Number(num));

// find the power of 2 nearest to num //

let pwr = Math.pow(2, Math.round(Math.log(num)/Math.log(2)));
console.log(pwr)

// display the result console.log('The number $ {pwr} is the power of 2 nearest to ${num}.');