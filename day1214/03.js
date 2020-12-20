class User{

}
let myUser = new User();

//类表达式
const User = class{

};

let myUser1 = new User();

//不提升！



//constroduce()
class User {
constructor(name){
    this.name = name;
}
}

let myUser = new User('xiao');
console.log(myUser.name); //xiao

//显示定义一个公共字段
class User{
    name = 'unkown';
    constructor(){

    }
}

let  myUser = new User();
myUser.name = 'xiao';

//定义一个私有字段
class User{
    #name;
    constructor(name){
        this.#name = name;
    }
}

//
class User{
   static TYPE_ADMIN = 'admin';
   static TYPE_ADMIN = "regular";
   name;
   type;
   constructor(name,type){
       this.name = name;
       this.type = type;

   }
}
const admin = new User("网站管理员")




//
class User{
    static #MAX_INSTANCES = 2;
    static #instance = 0;
    name;
    
    constructor(name){
        User.#instances++;
        if(User.#instances > User.#MAX_INSTANCES){
            throw new Error("无法创建User实例");
        }
        this.name = name;
 
    }
 }
 new User("Jon Snow");
 new User("Jon Snow");
 new User("Jon Snow");
 
 //
 class User{
    name;
    constructor(name){
        this.name = name;

    }
    getName(){
        return this.#name;
    }
    name
}



//创建私有实例方法
class User{
    #name;
   
}


//创建公有静态方法:
//规则：
//1、只能访问静态的字段
//2、不能访问实例的字段和方法；
class User{
    static #takenName = [];
    static isNameTaken(name){
        return User.#takenNames.includes(name);
    }
    name = "Unknown";
    constructor(name){
        this.name = name;
        User.#takenNames.push(name);
    }
}
const user = new User("Jon Snow");
User .isNameTaken("Arya Stark");// => false



//私有的静态方法
class User{
    static #takenName = [];
    static #isNameTaken(name){
        return User.#takenNames.includes(name);
    }
    name = "Unknown";
    constructor(name){
        this.name = name;
        User.#takenNames.push(name);
    }
}
const user = new User("Jon Snow");
User .#isNameTaken("Jon Snow");// => TypeError

 //getter/setter
 class User{
     #nameValue;
     constructor(){

     }
     
 }
