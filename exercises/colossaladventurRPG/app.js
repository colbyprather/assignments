const ask = require('readline-sync');
let isAlive = true;
let hasWon = false;
function Enemy (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
var special = ['gold', 'silver', 'candy']
var inventory = []
const count = new Enemy('The Count', 53, 12)
const dracula = new Enemy('Dracula', 100, 20)
const nosferatu = new Enemy('Nosferatu', 80, 3)
const enemies = [count, dracula, nosferatu]
function Hero (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const hero = new Hero('Superman', 500, 2)
console.log('Hello how are you, welcome to the game')
const name = ask.question('What is your name? ')
console.log(`Welcome to the game ${name}, Your journey is about to begin`)
while(isAlive && !hasWon){
    let choice = ask.keyIn('Would you like to (w) Walk, (i) Check Inventory, or (q) Leave Game? ', {limit: 'wiq'} )
    if(choice === 'w'){
        walk()
    }else if (choice === 'i'){
       printInventory()
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

function fight(currEnemy){
    while(currEnemy.hp > 0 && hero.hp > 0){
        let attack = Math.floor(Math.random()*100)+30;
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
    console.log(inventory)
}
