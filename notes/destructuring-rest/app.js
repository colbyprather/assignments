// Destructuring

const expense = {
    type: 'Business',
    amount: '$65'
}

// let type = expense.type
// let amount = expense.amount

let {type, amount} = expense

console.log(type, amount)

// Rest and Spread Operators

// rest Operator
// function myFunc(rest operators ar used in here){
// }

function myFunc(...stuff){
    console.log(stuff)
}

myFunc('hi', 'hello', 'good day', "g'day", 'cheers')

// Spread Operator

const primaryColors = ['red', 'yellow', 'blue']
const otherColors = ['teal', 'aguamarine', 'lobstermaine']

const allColors = [...primaryColors, 43, false, ...otherColors]
primaryColors.push(otherColors)
console.log(...primaryColors)