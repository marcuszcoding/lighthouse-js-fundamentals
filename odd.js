/* We have been hired to write a function that can help with the mail sorting.
In this challenge, we will be writing a function to check whether 
a number is odd or not.
*/
const isOdd = function(num){
  if (num % 2 === 0) {
    return false
  }
  else {
    return true
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
