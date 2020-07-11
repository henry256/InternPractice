/**
 * @file Character class
 * @author Henry Chen(backend)
 */

/**
 * @module
 */
export class Character {

    /**
     * 
     * Constructor 
     * @param {string} name 
     * @param {int} age
     * @param {string} gender
     * @param {int} level
     */
    constructor(name, age, gender, level)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.level = level;

    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
    getLevel(){
        return this.level;
    }

}

export class Knight extends Character{


    /**
   * @param {String} allegiance
   * @param {String} weapon 
   *  
   */

    constructor(name, age, gender, level, allegiance, weapon)
    {
        super(name,age, gender, level);
        this.allegiance=allegiance;
        this.weapon=weapon;

    }

    introduction(){
        console.log( `${this.name} is a level ${this.level} Knight loyal to ${this.allegiance} .`)
    }
}

