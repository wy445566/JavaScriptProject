const dog= {
    name:'豆豆',
    breed:'泰渣',
    color:'棕色',
    bark(){
        return '旺旺'
    },
};

//ES5构造函数
function Dog(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function(){
        return '汪汪';
    }
}

//ES5原型
function Dog(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    
}
Dog,prototype.bark = function(){
    return '汪汪';
    
}
let dog1 = new Dog('打豆豆','泰迪','棕色');
dog1.bark();





//ES6
function Dog(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function(){
        return '汪汪';
    }
}
let dog1 = Object.create(dog);
let a = dog.bark();
console.log();
console.log(dog1.constructor);
console.log(dog1.constructor.prototype);


let dog1 =new Dog('豆豆','泰迪','棕色');
let dog2 = new Doog('毛冒','拉布拉多','白色');

