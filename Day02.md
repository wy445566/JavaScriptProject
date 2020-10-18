# Day02 作业



## 作业01



Mark和John在PK他们的BMI（Body Mass Index，体重指数）。

体重指数是用这个公式计算的：
$$
BMI = mass / height^2 = mass / (height * height)。
$$
其中，mass是体重，单位为kg；height为身高，单位为米。

请用 JavaScript 编写一个程序，命名为 `bmi.js` ，完成如下任务：

1. 用变量存储Mark和John的体重以及身高；

2. 计算二人的BMI；

3. 创建一个布尔变量，用来包含Mark的BMI是否比John更高；

4. 打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）

```
//1.变量存储Mark和John的体重以及身高；
let M_height = 1.80,M_Mass = 54;//声明变量：存储Mark的身高，体重
let J_height = 1.78,J_Mass = 50;//声明变量：存储John的身高，体重

//2.变量存储Mark和John的体重以及身高；
let M_BIM = M_Mass / (M_height * M_height);
let J_BIM = J_Mass / (J_height * J_height);
console.log("Mark的BIM值为:",M_BIM);
console.log("John的BIM值为:",J_BIM);

//3.创建一个布尔变量，用来包含Mark的BMI是否比John更高；
let compare;
compare = (M_BIM > J_BIM) ? true : false;
console.log(compare);


//4. 打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）
console.log("Mark的BIM是否比John的更高？",String(compare));

```

运行结果：

![img](https://img-blog.csdnimg.cn/20201007150610241.png#pic_center)

## 作业02

John 和 Mike 都在不同的队打篮球。在最近的3场比赛中，John 的队得了89分、120分和103分，而 Mike 的队得了116分、94分和123分。

用 JavaScript 编写程序，存为 `ball.js`，完成以下任务：

1. 计算每队的平均分；
2. 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
3. 然后改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
4. Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；
5. 像前面一样，改变分数以产生不同的赢家，记住可能会有平局。

```
//1. 计算每队的平均分；
let JohnAvg = (89 + 120 +103) / 3;
let MikeAvg = (116 + 94 +123) / 3;
let MaryAvg = (97 + 134 +105) / 3;
console.log("John的平均分是："+JohnAvg+"\n" +"Mike的平均分是："+MikeAvg+"\n"
+"Mary的平均分是："+MaryAvg+"\n")

//2. 4决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。
//在输出中也包括平均分；
if((JohnAvg > MikeAvg) && (JohnAvg > MaryAvg)){
    console.log("John是获胜队伍！" + "John的平均分是："+JohnAvg);
}
else if ((MikeAvg>JohnAvg) && (MikeAvg>MaryAvg)){
    console.log("Mike是获胜队伍！" + "Mike的平均分是："+MikeAvg);
}
else if((MaryAvg>JohnAvg) && (MaryAvg>MikeAvg)){
    console.log("Mary是获胜队伍！" + "Mary的平均分是："+MaryAvg);
}
else{
    console.log("平局！");
}

//3.5 然后改变分数来显示不同的赢家。
let JohnAvg1 = (123 + 120 +93) / 3;
let MikeAvg1 = (126 + 99 +123) / 3;
let MaryAvg1 = (100 + 134 +105) / 3;
console.log("John的平均分是："+JohnAvg1+"\n" +"Mike的平均分是："+MikeAvg1+"\n"
+"Mary的平均分是："+MaryAvg1+"\n")
if((JohnAvg1 > MikeAvg1) && (JohnAvg1 > MaryAvg1)){
    console.log("John是获胜队伍！" + "John的平均分是："+JohnAvg1);
}
else if ((MikeAvg1>JohnAvg1) && (MikeAvg1>MaryAvg1)){
    console.log("Mike是获胜队伍！" + "Mike的平均分是："+MikeAvg1);
}
else if((MaryAvg1>JohnAvg1) && (MaryAvg1>MikeAvg1)){
    console.log("Mary是获胜队伍！" + "Mary的平均分是："+MaryAvg1);
}
else{
    console.log("平局！");
}
```

运行结果：

![img](https://img-blog.csdnimg.cn/20201007151152138.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JlbmJ1eWluZ2dhaQ==,size_16,color_FFFFFF,t_70#pic_center)

## 作业03



用JavaScript编写程序，取名 `star.js`，在控制台输出如下图形：

```
   *
  * *
 * * *
* * * *
 * * *
  * *
   *
```



```
let all ="";
for(let i=1; i<=4; i++){
    let blank = " ";
    let stars = " ";
    for(let m = 1; m <= 4-i; m++){
        blank = blank + " ";
    }
    for(let n=1; n<=i;n++){
        stars = stars + "*" + " ";
    }
    all = all +blank + stars +"\n";
}
for(let i=4-1; i>0; i--){
    let blank = " ";
    let stars = " ";
    for(let m=1; m<=4-i; m++){
        blank += " ";
    }
    for(let n=1; n<=i; n++){
        stars += "*" + " ";
    }
     all += blank + stars + "\n";
}
console.log(all);






```

运行结果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201007151947481.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JlbmJ1eWluZ2dhaQ==,size_16,color_FFFFFF,t_70#pic_center)

