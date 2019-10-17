console.log(Math.floor(math.random() * 10))

console.log(Math.round(math.random() * 10))

// this is use for like a random thing like rolling a dice or randomley selecting something
// .random



for(let i = 0; i < 100; i++){
    console.log(i)
}

if(Math.random() > .5 ){
    console.log("This code")
} else {
    console.log("That code")
}


let count = 0

for(let i = 0; i < 100; i++){
    if(Math.random() > .5 ){
        countTrue++
    } else {
        countFalse++
    }
}

console.log(countFalse, countTrue)