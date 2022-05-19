class Ninja {
    constructor(ninjaName, initialHealth){
        this.name = ninjaName
        this.health = initialHealth
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this)
    }
    drinkShakes(){
        this.health += 10
    }
}

const sakura = new Ninja("Sakura", 30)
sakura.drinkShakes()
sakura.showStats()