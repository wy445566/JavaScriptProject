class Dog{
    constructor(name){
        this.name = name;

    }
    bark(){
        return '汪汪';
    }
}
class ChiWaWa extends Dog{
    constructor(name){
        super(name);
    }
    smallBark(){
        return '哇哇';
    }
}
let myPet = new ChiWaWa('小狗');
myPet.smallBark();
myPet.Bark();
console.log(myPet.name);
console.log(myPet.a);//