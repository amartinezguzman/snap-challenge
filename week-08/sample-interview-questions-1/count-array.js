
// Instructions: In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.

//My attempt:

// Assign a variable to the array
// Create a function to measure length
//     run the map function to loop through the array
//     return length value using arrayLength() function

// let array = [1, 2, 3, 4, 5, 6, 7]
//
// function arrayLength() {
//     array.map()
//     return arrayLength()
// }


// Answer from Marty:

const myArray= [3, 7, 2, 3, 3, 3, 1, 1, 7, 3]

// first we need to loop through the array
// for each loop goes through each element individually

function countMatchingArrayElements(arrayOfNumbers) {
    let anotherArray = []
    // arrayOfNumbers is equal to myArray
    //each number in an array is an element
    arrayOfNumbers.forEach(element =>{
        // by putting the number in [] we are indexing them (determining the index location).
        //The question mark serves as boolean statement (shorthand for if statement)
        //In JS, undefined is equal to false. So since "anotherArray[element]" is undefined it will the value after the color, but if it were true then it would run "anotherArray[element] +1"
        anotherArray[element] = anotherArray[element] ? anotherArray[element]  + 1 : 1
    })
    return anotherArray
}

const newArray = countMatchingArrayElements(myArray)
newArray.forEach((element, index) => console.log(`value: ${index}, number of times in the original array: ${element}`))


