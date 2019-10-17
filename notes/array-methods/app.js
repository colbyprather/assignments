// .push()

const animals = ['dog', 'cat']

animals.push('mouse')

console.log(animails)

// .pop()

const animals = ["dog", "cat"]

console.log(animals.pop())

console.log(animals)

// .shift()

const animals = ["dog", "cat"]

console.log(animals.shift())

console.log(animals)

// .unshift()

const animals = ["dog", "cat"]

console.log(animals.unshift())

console.log(animals)

// .splice()

const animals = ["dog", "cat", "monkey", "spider monkey", "flying squirl"]

console.log(animals.splice(3, 1, "gorilla"))

console.log(animals)

// .concat()

const plants = ["flower", "tree"]

animals.concat(plants)

console.log(animals)

// .reverse()

plants.reverse()

console.log(plants)

// .slice() 

const animals = ["dog", "cat", "monkey", "spider monkey", "flying squirl"]

animals.slice(2, 4)

console.log(animals)

// .join()

reverseString = (str) => str.split("").reverse("").join()

// or

function reverseString(str){
    return str.split("").reverse().join("")
}

console.log(reverseString("hello"))

// .indexOf

function removeFromArrayOfStringd(str, arr){
    const index = arr.indexOf(str)
    arr.splice(index, 1)
}

console.log(removeFromArrayOfStringd("spider monkey", ["dog", "cat", "monkey", "spider monkey", "flying squirl"]))