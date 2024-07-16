//task1
let a = 10;

if(a>0){
    console.log(`The number is positive`);
}
else if(a<0){
    console.log(`The number is negative`);
}
else{
    console.log(`The number is zero`);
}


//task2
let age = 20;
if(age>=18){
    console.log(`You are eligible to vote`);
}
else{
    console.log(`You are not eligible to vote`);
}


//task3
let num1 = 10;
let num2 = 20;
let num3 = 30;

if(num1>num2){
    if(num1>num3){
        console.log(`Greatest is : ${num1}`);
    }
}
if(num2>num1){
    if(num2>num3){
        console.log(`The greatest is : ${num2}`);
    }
}
if(num3>num1){
    if(num3>num2){
        console.log(`The greatest is ${num3}`);
    }
}



//task4
let day = 5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
        console.log(`Enter a number between 1-7 only`);
        break;
}


//task5
let grade = 75;

switch (grade) {
    case (grade>=90):
        console.log(`A`)
        break;
    case (grade>=80):
        console.log(`B`)
    case (grade>=75):
        console.log(`C`);
    case (grade>=60):
        console.log(`D`);
    
    default:
        console.log(`F`)
        break;
}


//task6
let num = 4
console.log((num%2 == 0) ? "even" : "odd");

//task7
let year = 2000;
let flag = false;
if(year%4 == 0){
    if(year%100 == 0){
        if(year%400 == 0){
            console.log(`Leap Year`);
        }
        else{
            console.log(`Not leap year`);
        }
    }
    else{
        console.log(`Not leap year`);
    }
}
else{
    console.log(`Not leap year`);
}