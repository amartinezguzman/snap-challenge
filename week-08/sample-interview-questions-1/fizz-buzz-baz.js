// 2. In pseudocode, write a function that takes two integers. For each integer in between those two numbers (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without 'fizz' or 'buzz' if the number is divisible by both. Otherwise, output the number.

// Set up for loop with if statements
//     Determine which input is larger
//     Use if else statements to run different scenarios
//     modulo for even
//     divide number by 3
//     else statement if numbers are divisible by both

// Answer from Marty:

function fizzBuzzBaz(number1, number2) {
    const smallerNumber = number1 < number2 ? number1 : number2
    const largerNumber = number1 < number2 ? number2 : number1
    //i= counter
    for (let i = smallerNumber; i <= largerNumber; i++) {
        //is count evenly divisible by 6?
        if (!(i % 6)) {
            console.log('baz')
            //is count evenly divisible by 3?
        } else if (i % 3 === 0) {
            console.log('buzz')
            //is count evenly divisible by 2?
        } else if (!(i % 2)) {
            console.log('fizz')
            //if count of the above, output count
        } else {
            console.log(i)
        }
    }
}

fizzBuzzBaz(3, 27)


