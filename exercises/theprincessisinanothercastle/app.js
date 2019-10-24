class Player {
    constructor(name, totalCoins, status){
        this.name = name;
        this.status = status;
        this.totalCoins = totalCoins;        
    }

}

let status = ['Powered Up', 'Big', 'Small', 'Dead'];
hasStar = false;

const mario = new Player('Mario', 0, status[0])
console.log(mario)