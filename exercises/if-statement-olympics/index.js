if (5 > 3) {
    console.log('is greater than')
} 
if ("cat" == 3) {
    console.log("is the length")
} else {
    console.log('not the same')
}

var person ={
    name: "Bobby",
    age: 12,
   
}
if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " isn't allowed to go to the movie")
}

if (person.name.charAt(0) == "B") {
    console.log(person.name+ " is allowed to go to the movie")
} else {
    console.log(person.name + " isn't allowed to go to the movie")
}

if (person.name[0] == "B" && person >= 18) {
    console.log(person.name + " is allowed to go to the movie")
}else {
    console.log(person.name + " isn't allowed to go to the movie")
}
var phone = 1 === 1; {
    if (1 === "1") {
        console.log('strict')
    } else if (1 == "1") {
        console.log('loose')
    } else {
        console.log('not equal at all')
    }
}

// switch (phone) {
//     case (1 === "1"):
//         console.log('strict')
//         break;
//     case (1 == "1"):
//         console.log('loose')
// }

if (1 <= 2 && 2 === 4) {
    console.log('yes')
}

var dog = "dog"
if (typeof dog === 'string') {
    console.log('true')
} else {
    console.log('false')
}
if (typeof dog === "boolean") {
    console.log('true')
} else {
    console.log('false')
}
if (typeof variabl !== "undefined") {
    console.log('not defined')
} else {
    console.log('defined')
}


if ("s" > 12) {
    console.log("s is greater")
} else {
    console.log('s is less than')
}


if ("c" > 12) {
    console.log("c is greater")
} else {
    console.log('c is less than')
}

var myNum = 10
if (myNum % 2 === 0) {
    console.log('Even')
} else {
    console.log('Odd')
}