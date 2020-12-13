function add(c,d){
    console.log(this.a + this.b + c +d);
}
add(3,4); //NaN why? this.a/this.b都是undefined

let num = {a:1, b:2};
add .call(num, 3,4);//10     //num.add(3,4)




const person = {
    say:function(){
        return '你好， 我是$(this.name)';
    },
};







var lastName = "global_name"; //定义一个全局变量

const func = function (firstName){
 return firstName + " " + this.lastName; //this 的值根据如何调用函数
};
 var person = {
     //该的对象作为的第一个参数传给call（）
     lastName: "person_name",

 };



 //apply（）

 let array = ['a','b'];
 let  elements = [0,1,2];

 let a = [--array,...elements];
 console.log(a);//['a','b',0,1,2]


 array.push.apply(array,elements);
 console.log(array); 



 let obj ={
     a:1,
     b:2,
     set:function(a,b){
         this.a=b;
         this.b = b;
     }
 };
 obj.set(3,7);//常规语法
 obj.set.call(obj,3,7);//常规语法
 obj.set.apply(obj,[3,7]);//常规语法
 console.log(obj);
 let myObj = {};

 obj.set.call(myObj, 5,4 );
 obj.set.apply(myObj, [5,4]);
 console.log(myObj); //{a:5, b:4}



 //借用方法模式
 function f(){
     let args = [].slice.call(argument,1,3);

     return args;
 }

 let a = f(11,21,13,4,5,6);
 console.log(a);//[21,13]



 //bind()
 var small ={
     a:1,
     go:function (b,c,d){
         console.log(this.a + b + c + d);
     },
 };
 var large = {
     a:100,
 };
 small.go(2, 3, 4);//10
 small.go.call(large,2,3,4);//10  go.call(small, 2, 3, 4)
 let bindTest1 = small.go.bind(large,2,3,4);
 bindTest1();//109
 let bindTest2 = small.go.bind(large,2,3);
 bindTest2(4);//109
 let bindTest3 = small.go.bind(large,2);
 bindTest3(3,4);//109
 
 

 


const person = {
    age:49,
    getNameAndAge: function (name){
        return name + "" + this.age;
    },
};

person.getNameAndAge("wangYan");
const getNameAndAge = person.getNameAndAge;
getNameAndAge("wangYan");
const boundNameAndAge = nameAndAge.bind(person, "wangYan");
boundNameAndAge();
const boundNameAndAge = nameAndAge.bind();
boundNameAndAge("wangYan");
const boundNameAndAge = nameAndAge.bind(undefined,"wangYan");
boundNameAndAge();
const boundNameAndAge = nameAndAge.bind(null,"wangYan");
boundNameAndAge();


//toString
function getName(){
    return 'xiao';

}
console.log(getName.toString());
console.log(Math)


function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]){
        square.cache[x] = x*x
    }
    return square.cache[x]
}
square(3);
square(11);
console.log(square.cache); //{”3“}



//memoization
console.time();
const fina = function (n) {
    // return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2)
    return n < 2 ? n : fina(n-1) + fina(n-2);
    
};
console.log(fina(40));
console.timeEnd();


//memoization版本
console.time();
const fina = function (n) {
    fina.cache = fina.cache || {};
    if (!fina.cache[n]){
        fina.cache[n] = n < 2 ? n : fina(n-1) +fina(n -2);
    } 
    return fina.cache;   
};
console.log(fina(40));
console.timeEnd();
console.time();
console.log(fina(40));
console.timeEnd();














