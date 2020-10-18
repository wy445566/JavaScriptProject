let person = new Object();
person.name = 'wangyan';
person.age = '20'
console.log(person.name);

//对象自变量
let person1 = {};
let s = '';//模板字符串
// let s = '
//     <div>
//         <h1>hahaha</h1>
//         </div>
// ';


name: 'xiaoming';
age: '21';

let person2 = {
    name: 'xiaoming',
    age: '21',
};
console.log(person2.name);
console.log(typeof person2); //返回值是Object

//定义数组
const oArray = new Array();//构造器构造数组
const oArray = [];

console.log(typeof oArray);

//数组初始化
const heroes = [];
console.log(heroes[0]);
heroes[0] = '蝙蝠侠';
heroes[1] = '神奇女侠';
heroes[2] = '闪电侠';
heroes[5] = '水行侠'
console.log(heroes);


//数组字面量
const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
console.log(avengers);
delete avengers[0];
console.log(avengers);

let person2 = {
    name:"wangyan",
    age:49,
};
const a = [0,undefined,'123223',null,person2];
console.log(a);

//结构语法
const array1 = [1,2,3];
let a = array1[0];
let b = array1[1];
let c = array1[2];

const [a,b,c] = [1,2,3];
console.log('a=${a},b=${b},c=${c}') //模板字符串

const [a,b] = [1,2,3];
console.log(a);




const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
console.log(avengers.length);
avengers.length = 1;
console.log(avengers);

const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
avengers.pop();//删除末尾元素
console.log(avengers);

const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
avengers.pop();//删除末尾元素
console.log(avengers);
avengers.push('蜘蛛侠');//在末尾增加一个元素
console.log(avengers);

const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
console.log(avengers.shift());//删除数组中的第一个元素
console.log(avengers);

const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
console.log(avengers.unshift('小超人'));//在数组的第一个元素前添加一个元素
console.log(avengers);

//数组的合并
const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
const heroes = ['美国队长','雷神','宙斯','雅典娜']
const oArray = avengers.concat(heroes);
console.log(avengers);
console.log(oArray);


const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
const heroes = ['美国队长','雷神','宙斯','雅典娜']
const oArray = [...avengers,...heroes];
console.log(oArray);


const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
const a = avengers.join('&');
console.log(a);
console.log(avengers);

const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
const b = avengers.slice(2,3);
console.log(b);

const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
const c = avengers.splice(2,2,'xiaoming',2,3);
console.log(c);
console.log(avengers);


const d = ['a','b','c','d']
const e = d.reverse();
console.log(e,d);

const f = ['1','2','10','6']
const g = f.sort();
console.log(g,f);


const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
const a1 = avengers.indexOf('神奇队长1');
console.log(a1);

const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
const a2 = avengers.includes('神奇队长');
console.log(a2);

const avengers = ['蝙蝠侠','神奇女侠','闪电侠','水行侠']
const a3= avengers.includes('神奇女侠');
console.log(a3);


//多维数组
const ma = [[1,2],[3,4]];
console.log(ma[0][0])

const sumer = ['jul','ghi','jan'];
const winter = ['jul','koj','fil'];
const spring = ['jan','jku','til'];
const flat = [sumer,winter,spring];
console.log(flat);

//set
const list = new Set();
list.add(1);
list.add(1),add(2),add(3),add(4),add(5);
list.add(5)
console.log(list);

const list = new Set([1,2,3,4,5])
console.log(list);


//数组去重
const a = [1,2,12,1,2,3,4,5]
const b = new Set(a);
console.log(b);
const c = [...b];
console.log(c);


const list = new Set([1,2,3,4,5])
console.log(list);

const c = new Set('Hello')
console.log(c)

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.size);
list4.size = 6;
console.log(list4.has('brow'));


const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.size);
list4.size = 6;
console.log(list4);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.has('brow'));
list4.delete('the');
console.log(list4)

list4.clear();
console.log(list4);




const list4 = new Set().add('the').add('quick').add('brown').add('fox');
const oArray = [...list4];
console.log(oArray);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
const oArray = Array.from(list4);
console.log(oArray);


// 内存泄漏
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const strong = new Set().add(array1).add(array2); 
console.log(strong.has(array1));
array1 = null; // 删除对原始对象的引用
array2 = null;
array3 = [...strong][0]; 
array4 = [...strong][1];
console.log(array3);
console.log(array4);

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const weak = new WeakSet().add(array1).add(array2);
console.log(weak);
array1 = null;
array2 = null;
const array3 = [...weak][0];
const array4 = [...weak][1];
console.log(array3);
console.log(array4);


//map
const romanNumerals = new Map(); 
romanNumerals.set(1,'一'); 
romanNumerals.set(2,'二').set(3,'三').set(4,'四').set(5,'五'); 
console.log(romanNumerals);
console.log(romanNumerals.size);
console.log(romanNumerals.get(3));
console.log(romanNumerals.has(5));
romanNumerals.delete(5);
console.log(romanNumerals);
romanNumerals.clear();
console.log(romanNumerals);



// map to array
const romanNumerals = new Map(); 
romanNumerals.set(1,'一').set(2,'二').set(3,'三').set(4,'四').set(5,'五'); 
const oArray1 = [...romanNumerals];
const oArray2 = Array.from(romanNumerals);
console.log(oArray1);
console.log(oArray2);



//review
/*
 数据类型
    基础类型：String、Number Boolean Symbol undefined null
    引用类型：Object/Function

两种：
对象构造函数
let oStudent = new Object();

对象字面量
let oStudent = {
    name: 'xaaaa',
    age: 21
}

oStudent.name

Array
   new Array()
   []
   

Set
  let oSet = new Set();
  oSet.add(1).add(2)
  let oSet = new Set([1,2,3]);
*/

