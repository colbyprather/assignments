// function doubleNumbers(numbers){
//     return numbers.map((num) => {
//       return num * 2  
//     })
//   }

// console.log(doubleNumbers([2, 5, 100]))



// function stringItUp(numbers) {
//   return numbers.map((num) =>{
//     return num.toString()
//   })
// }
  
// console.log(stringItUp([2, 5, 100]))


// function capitalizeNames(people){
//   return people.map((person) => {
//     return person[0].toUpperCase() + person.slice(1).toLowerCase()
//   })
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))


// function namesOnly(people){
//   return people.map((person) => {
//     return person.name.toString()
//   })
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))



// function makeStrings(people){
//   return people.map((person) => {
//     if(person.age >= 18){
//       return `${person.name} can go to The Matrix`
//     } else {
//       return `${person.name} is under age!!`
//     }
//   })
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))


function readyToPutInTheDOM(people){
  return people.map((person) => {
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`
  })
}
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]))


