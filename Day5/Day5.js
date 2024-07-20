//task1

function checkOddEven(n){
    if(n%2 == 0){
        console.log(`The number is even`);
    }
    else{
        console.log(`The number is odd`);
    }
}
checkOddEven(5);
checkOddEven(6);

//task2
function sq(n){
    let result = n*n;

    return result;
}
let n = 10;
console.log(`The square of ${n} is ${sq(n)}`);

//task3
function findMax(n,m){
    let result = Math.max(n,m);
    console.log(`The max of two numbers is : ${result}`);
}

//task4
let str1 = "abc";
let str2 = "def";
function stringConcatenation(str1,str2){
    let result = str1.concat(str2);
    console.log(`The concatenated string is : ${result}`);
}

//task5
//arrow func
const sum = (num1,num2) =>{
    let res = num1+num2;
    console.log(`The sum of two numbers is : ${res}`);
} 
sum(4,5);

//task6
const characterInString = (str) =>{
    if(str.includes('$') || str.includes('@')){
        return true;
    }
    return false;
}
let str = "khushi@$roy"; 
console.log(characterInString(str));


//task7
function product(num1, num2=2){
    return num1*num2;
}
num1 = 4;
console.log(`The product of the two numbers is : ${product(num1)}`);

//task8
function greet(name,age=20) {
    console.log(`Hello ${name}, your age is ${age}`);
}
let name = "Khushi";

//task9
//higher order functions

function f1(n,fn){
    for (let index = 0; index < n; index++) {
        fn();
    }
}
//calling the function
f1(3, () => {
    console.log(`Higher Order Functions`)
});

//task10
function f2(n,fn1,fn2){
    const res1 = fn1(n);
    const res2 = fn2(res1);
    return res2;
}

const fn1 = (n)=>{
    return n*2;
}
const fn2 = (n) =>{
    return n*10;
}

console.log(`The ans of the higher order function is : ${f2(2,fn1,fn2)}+`);