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
        console.log(`Name:${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10
    }
}
class Sensei extends Ninja {
    constructor(ninjaName) {
        super(ninjaName, 200)
        this.speed = 10
        this.strength = 10
    }
    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
}

const sakura = new Ninja("Sakura", 30)
sakura.drinkSake()
sakura.showStats()


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
