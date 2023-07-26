// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!


//**SOLUTION */

function oddOrEven(array) {
   //reduce the array to a single value
  let reducedArr = array.reduce((a,c) => a + c, 0)
  //check if single value is even or odd
  if(reducedArr % 2 === 0){
    return 'even'
  }else if (reducedArr === []){
    return '[0]'
  }else{
    return 'odd'
  }
  
}