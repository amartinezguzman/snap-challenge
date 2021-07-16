/*Snap Challenge 1: Write Write two functions in javascript.

    Function #1
Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.) Which operation is your choice.*/


function multiplyTwoNumbers(number1, number2) {
    return (number1 * number2);
}
 let result= console.log(multiplyTwoNumbers(5,8))

//assigning a variable such as "result" to the function allows you to use the answer to he value throughout other code.


/*    Function #2
Take two strings as arguments and return a value that has them concatenated. */

function concatenateAString(string1, string2) {
    return (string1 + string2)
}

console.log(concatenateAString('Hi, my name is ', "Adriana"));

//string literals  = `Hi, my name is ${name}. This can be used to enter values in a string.

function combineTwoStrings(string1, string2) {
    return (string1 + string2)
}

console.log('Javascript is to carpet as', 'Java is to car');