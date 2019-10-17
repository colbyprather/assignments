// // function User(name, age, password, username, isAdmin = false)
// function User(name, isAdmin = false){
//     this.name = name
//     this.isAdmin = isAdmin
//     this.greet = function(){
//         console.log("hello, my name is " + this.name)
//     }
// }

// const addedUser = new User("Richie")

// // addedUser.name = "Richard"

// addedUser.greet()

// console.log(addedUser)


function Car (year, Make, model) {
    this.year = year;
    this.Make = Make;
    this.model = model;
}

var myTacoma = new Car(2015, "Toyota", "Tacoma")

console.log(myTacoma)