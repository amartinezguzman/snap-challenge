console.log('hello world')

let name ='Sue'
console.log(name)

//Arrays (can include numbers, strings or both

let people =['Marty', 'Anais', 'Jonathan', 'Andrew']
console.log(people)

console.log(people[2])

//Objects (JSON Java Script Object Notation)
let person1 = {
    name: 'Anais',
    status: 'bootcamper',
    hobby: 'cooking',
    code: function(){
        console.log('develop website')
    }
}
console.log(person1)

//We can call it like this to get the value only
person1.code()

//Values within an object can be accessed by a .
//console.log(person.status)

//console is an object; log is a function; functions are followed by (),
//console.log()

let person2 = {
    name: 'Marty',
    status: 'instructor',
    hobby: 'snowboarding',
    code: function () {
        console.log('develop website')
    }
}

let person3 = {
    name: 'Jonathan',
    status: 'bootcamper',
    hobby: 'hiking',
    code: function () {
        console.log('develop website')
    }
}

let person4 = {
    name: 'Andrew',
    status: 'bootcamper',
    hobby: 'board gaming',
    code: function () {
        console.log('develop website')
    }
}

let bootcamp = [person1, person2, person3, person4]

console.log(bootcamp[2])

console.log(bootcamp[2].hobby)

//You can concatenate values with strings

console.log(bootcamp[2].name + ' likes ' + bootcamp[2].hobby)