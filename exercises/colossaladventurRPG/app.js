const ask = require('readline-sync');
let isAlive = true;
let hasWon = false;
function Enemy (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
var special = ["Red Shell", "Gold Coin", "Mushroom"]
var inventory = []
const Bowser = new Enemy('Bowser', 350, 12)
const KingBoo = new Enemy('King Boo', 250, 20)
const Waluigi = new Enemy('Waluigi', 150, 3)
const enemies = [Bowser, KingBoo, Waluigi]
function Hero (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
console.log('It is me Mario help me save Princess Peach')
const name = ask.question('What is your name? ')
const hero = new Hero(name, 700, 2)
console.log(`Welcome ${name}, right this way`)
while(isAlive && !hasWon){
    let choice = ask.keyIn('Would you like to (w) Walk, (i) Check Inventory, (s) use Red Shell, (m) use Mushroom or (q) Leave Game? ', {limit: 'wismq'} )
    if(choice === 'w'){
        walk()
    }else if (choice === 'i'){
       printInventory()
    }else if(choice === "s"){
        if(inventory.find(item => item === "Red Shell") === "Red Shell"){
            let attack = Math.floor(Math.random()*100)+30;
            attack += 50;
            inventory.splice(inventory.indexOf("Red Shell"), 1)
            console.log(`You've gained an additional 50 attack points from Red Shell`)
        }
    }else if(choice === "m"){
        if(inventory.find(item => item === "Mushroom") === "Mushroom"){
            hero.hp += 50
            inventory.splice(inventory.indexOf("Mushroom"), 1)
            console.log(`You've gained an additional 50 HP from Mushroom`)
        }
    }else {
        isAlive = false
        console.log('You quit the game')
    }
}

function walk (){
    let random = Math.floor(Math.random()*4)
    if(random === 3){
        enemyEncounter()
    }else{
        console.log('You continue walking safely')
    }
}
function enemyEncounter(){
    const currEnemy = selectEnemy()
    let choice = ask.keyIn(`You encountered ${currEnemy.name}! Would you like to [a] Attack, [r] Run, or [q] Quit`, {limit: 'arq'})
    if(choice === 'a'){
        fight(currEnemy)
    }else if (choice === 'r'){
        run(currEnemy)
    }else{
        isAlive = false
        console.log('you quit')
    }
}

function selectEnemy(){
    let random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}

function fight(currEnemy, attack){
    // let attack = Math.floor(Math.random()*100)+30;
    while(currEnemy.hp > 0 && hero.hp > 0){
        currEnemy.hp -= attack 
        console.log(`The ${currEnemy.name} has ${currEnemy.hp} HP left`)
        let enemieAttack = Math.floor(Math.random()*100)+30;
        hero.hp -= enemieAttack
        console.log(`You have ${hero.hp} HP left`)
    }
    if(hero.hp > 0){
        console.log(`You killed ${currEnemy.name}!!`)
        hero.hp += 50
        console.log(`Your new HP is ${hero.hp}`)
        inventory.push(special[Math.floor(Math.random()*special.length)])
        console.log(inventory)
        // let use = ask.keyIn('Would you like to use (s) Red Shell, (m) use Mushroom for next battle?', {limit: 'sm'} )
        // if(use === "s"){
        //     if(inventory.find(item => item === "Red Shell") === "Red Shell"){
        //         attack += 50
        //         inventory.splice(inventory.indexOf("Red Shell"), 1)
        //         console.log(`You've gained an additional 50 attack points from Red Shell`)
        // }else if(use === "m"){
        //     if(inventory.find(item => item === "Mushroom") === "Mushroom"){
        //         hero.hp += 50
        //         inventory.splice(inventory.indexOf("Mushroom"), 1)
        //         console.log(`You've gained an additional 50 HP from Mushroom`)
        // }
        for( var i = 0; i < enemies.length; i++){
            if (enemies[i] === currEnemy){
                enemies.splice(i, 1)
            }
        }
        if(enemies.length === 0){
            isAlive = false
            console.log(`You have saved Princess Peach thank you for your help ${hero.name}!`)
        }
    }else{
        isAlive = false
        console.log(`You have been kill by ${currEnemy.name}!`)
    }
}

function run(currEnemy, hero){
    let runNum = Math.floor(Math.random()*3)
    if(runNum === 2){
        fight(currEnemy, hero)
    }else {
        console.log('You have succesfully ran from the monster')
    }
}

function printInventory(){
    console.log(`${hero.name}: ${hero.hp} HP,
    Inventory: ${inventory}`)
}
