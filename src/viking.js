// Soldier
class Soldier {
    constructor(health, strength)
    {
        this.health = health;
        this.strength = strength;
    }

    attack()
    {
        return this.strength;
    }s
    receiveDamage(damage)
    {   
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength)
    {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage)
    {
        this.health -= damage;
        if (this.health > 0)
        {
            return (`${this.name} has received ${damage} points of damage`);
        }
        else
        {
            return (`${this.name} has died in act of combat`);
        }
    }
    battleCry()
    {
        return ("Odin Owns You All!")
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0)
        {
            return (`A Saxon has received ${damage} points of damage`)
        }
        else
        {
            return (`A Saxon has died in combat`);
        }
    }
}

// War
class War {
    constructor()
    {
        this.vikingArmy = [];
        this.saxonArmy = []; 
    }
    addViking(viking)
    {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon)
    {
        this.saxonArmy.push(saxon)
    }
    vikingAttack()
    {
        
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        console.log(randomSaxon)
        let result = randomSaxon.receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength)
        for(let i = 0; i < this.saxonArmy.length; i++)
        {
            if(this.saxonArmy[i].health <= 0)
            {
                this.saxonArmy.splice(i,1);
            }
        }
        return result;
    }
    saxonAttack()
    {
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        console.log(randomViking)
        let result = randomViking.receiveDamage(this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].strength)
        for(let i = 0; i < this.vikingArmy.length; i++)
        {
            if(this.vikingArmy[i].health <= 0)
            {
                this.vikingArmy.splice(i,1);
            }
        }
        return result;
    }
    //******REFACTORIZATION**********
    // attack(soldier)
    // {
    //     let army;
    //     let enemyArmy
    //     if('name' in soldier)
    //     {
    //         army = this.vikingArmy;
    //         enemyArmy = this.saxonArmy;
    //     }
    //     else
    //     {
    //         army = this.saxonArmy;
    //         enemyArmy = this.vikingArmy;
    //     }
    //     let randomSoldier = army[Math.floor(Math.random()*army.length)]
    //     let result = randomSoldier.receiveDamage(enemyArmy[0].strength)
    //     for(let i = 0; i < army.length; i++)
    //     {
    //         if(army[i].health <= 0)
    //         {
    //             army.splice(i,1);
    //         }
    //     }
    //     return result;
    // }
    showStatus()
    {
        if (this.saxonArmy.length === 0)
        {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0)
        {
            return "Saxons have fought for their lives and survived another day..."
        }
        else
        {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
// let viking="hola"
// let vikingOne = new Viking ("juanix", 10, 5);
// let vikingTwo = new Viking ("albix", 10, 5);
// let vikingThree = new Viking ("Olivix", 10, 5);
// let vikingFour = new Viking ("Arturix", 10, 5);
// let vikingFive = new Viking ("Micaelix", 10, 5);
// let saxonOne = new Saxon(20, 2);
// let saxonTwo = new Saxon(20, 2);
// let saxonThree = new Saxon(20, 2);
// let saxonFour = new Saxon(20, 2);
// let saxonFive = new Saxon(20, 2);

// let firstWar = new War();

// firstWar.addViking(vikingOne);
// firstWar.addViking(vikingTwo);
// firstWar.addViking(vikingThree);
// firstWar.addViking(vikingFour);
// firstWar.addViking(vikingFive);

// firstWar.addSaxon(saxonOne);
// firstWar.addSaxon(saxonTwo);
// firstWar.addSaxon(saxonThree);
// firstWar.addSaxon(saxonFour);
// firstWar.addSaxon(saxonFive);

// firstWar.vikingAttack();




