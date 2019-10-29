
hasStar = false;
gameActive = true;


class Player {
    constructor(name, totalCoins, status){
        this.name = name;
        this.status = status;
        this.totalCoins = totalCoins; 
        this.numStatus = 0;
    }
    gotHit(){
        this.numStatus++
        this.status = status[this.numStatus]
        if(this.numStatus === 3){
            gameActive = false
        } 
    }
    
    gotPowerup(){
        
        if(this.numStatus <= 0){
            this.numStatus = 0
        } else{
            this.numStatus -= 1
            this.status = status[this.numStatus]
        }
    }
    
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(
            `
            Name: ${this.name} 
            Status: ${this.status} 
            Coins: ${this.totalCoins}
            `)
        // console.log(`Status: ${this.status}`)
        // console.log(`Coins: ${this.totalCoins}`)
    }
    
}

let status = ['Powered Up', 'Big', 'Small', 'Dead'];

const mario = new Player('Mario', 0, status[0])



const interval = setInterval(() => {
    if(gameActive === true){
        function run(){
                let selected = Math.floor(Math.random()*3)
            if(selected === 0){
                mario.gotHit()
            } else if(selected === 1){
                mario.gotPowerup()
            } else if(selected === 2){
                mario.addCoin()
            } 
            
        }
        run()
        mario.print()    
    }else if (gameActive === false){
        clearInterval(interval)
    }
    
}, 1000)
