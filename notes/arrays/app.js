// const favoriteThings = ["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles", "Warm"]

// for(let i = 0; i < favoriteThings.length; i++)
//     console.log(favoriteThings[i])

// function canCastSpell(){
//     for(let i = 0; i < spellsArr.length; i++){
//         console.log("can cast" + spellsArr[i].name)
//     }
// }

// canCastSpell(spells)



// const matrix = [
//     [0, 0, 0],
//     [1, 5, 1],
//     [2, 2, 2]
// ]

// console.log(matrix[1][1])



// for(let i = 0; i <= 9; i++)
// console.log(i)
// counts 0 to 9

// for(let i = 9; i >= 0; i--)
// console.log(i)
// counts down from 9 to 0

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for(let i = 0; i < fruit.length; i++)
//     console.log(fruit[i])
// prints fruit



// var extraNumbers = []
// for(let i = 0; i <= 9; i++) {
//     extraNumbers.push([i])
// }
// console.log(extraNumbers)
//puts numbers 0 through 9 into an array


// for(let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
// prints all even numbers 1 to 100


// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var everyOther = []
// for(let i = 0; i < fruit.length; i+=2) {
//     everyOther.push(fruit[i])
// }
// console.log(everyOther)

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// for(let i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }
// prints peoples names in array


// var names = []
// var occupations = []

// for(let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }
// console.log(names)
// console.log(occupations)
//puts names into two seprate arrays


// var names = []
// var occupations = []
// for(let i = 0; i < peopleArray.length; i+=2) {
//     names.push(peopleArray[i].name)
// }
// for(let i = 1; i < peopleArray.length; i+=2) {
//     occupations.push(peopleArray[i].occupation)
// }
// console.log(names)
// console.log(occupations)
//pushes every other name into array starting with Harrison Ford and every other occupation into another loop starting with singer



var bundle = []

for(let i = 0; i < 3; i++){
    console.log([0, 0, 0])
    for(let j = 0; j < i; j++){
         bundle.push([j, j, j])
    }  
}
console.log(bundle)
// will print [0, 0, 0] down three times like a grid like so
//[0, 0, 0]
//[0, 0, 0]
//[0, 0, 0]


// for(let i = 0; i < 3; i++) {
//     console.log([0, 0, 0])
// }


// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < i; j++){
//          console.log([0, 1, 2])
//     }  
// }
// will print [0, 1, 2] down like so
//[0, 1, 2]
//[0, 1, 2]
//[0, 1, 2]