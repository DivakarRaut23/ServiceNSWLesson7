class Person {

    constructor(name, age, heightInMm){

        this.name = name;
        this.age = age;
        this.heightInMm = heightInMm;
    }

    set heightInInches(){
        this.heightInMm = this.heightInInches*25.4; ;
    }

    get heightInInches(){
        return this.heightInMm / 25.4 ;
    }

}
console.log(me.heightInInches);
me.heightInInches = 72;
let me = new Person ("Divakar", 23, 1963);
console.log(me);
console.log(me.heightInInches);
