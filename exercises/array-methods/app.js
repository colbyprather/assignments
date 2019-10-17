var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()

console.log(vegetables)

fruit.splice(0, 1)

console.log(fruit)

function findNumber(){
    console.log(fruit.indexOf("orange"))
}
findNumber()

fruit.push('1')

console.log(fruit)

console.log(vegetables.length)

vegetables.push('3')

console.log(vegetables)

food = () => fruit.concat(vegetables)
    console.log(food())
    food = food()
        food.splice(4, 2)
    console.log(food)

console.log(food.reverse())

const str = food.join()
console.log(str)
