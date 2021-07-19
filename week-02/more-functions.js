// Write a function in JavaScript that converts weights to grams. The algorithm should take two arguments. The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg". Based on the second argument, convert the number to grams and return it.

//Tip: (control + /) will comment out a section as long as your courser is on that line.

const convertToGrams = (weight, units) => {
    //items inside the curly braces are arguments
    //switch is a conditional statement (switch function)
    let grams
    switch (units) {
        case 'lbs':
            //A variable declared inside a function is only available within that function.
            grams= weight * 454
            break
        case 'oz':
            grams= weight * 454 / 16
            break
        case 'kg':
            grams = weight * 1000
            break
        case 'g':
            grams = weight
            break
        case 'mg':
            grams = weight / 1000
            break
        //we must account for all scenarios, we can use default to provide an error message.
        default:
            grams = 'please provide units of "lbs", "oz", "kg", "g", or "mg"'
    }
    return grams
}

const coffeeWeight = convertToGrams(1, 'lbs')
console.log(coffeeWeight)

// testing a random unit
const smallBagOfCoffee = convertToGrams(1, 'Nt')
console.log(smallBagOfCoffee)

//
const waterInCup = convertToGrams(14, 'oz')
console.log(waterInCup)


// Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number. (The factors of a number are all numbers that divide evenly into it. For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)

const factor = function (number) {
    let sum = 0

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            sum = sum + i
        }
    }

    return sum

}

console.log(factor(12))
