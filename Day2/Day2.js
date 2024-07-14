//Activity 1
//task1
let a = 40;
let b = 20;
console.log(`The sum of the two numbers is : ${a+b}`);

//task2;
console.log(`The subtraction of the two numbers is : ${a-b}`);

//task3
console.log(`The multiplication of the two numbers is : ${a*b}`);

//task4
console.log(`The division of the two numbers is : ${a/b}`);

//task5
b = 30;
console.log(`The remainder of the two numbers is : ${a%b}`);



//Activity 2
//task6
let num1 = 10;
num1+= 20;
console.log(`Num1 is : ${num1}`);

//task7
let num2 = 20;
num2-=10;
console.log(`Num2 is ${num2}`);


//Activity 3
//task8
let x = 5;
let y = 6;
if(x>y){
    console.log(`X > Y`);
}
else{
    console.log(`Y>X`)
}


//task9
x = 10;
y = 30;
let z = 30;

console.log((y>=z) ? ("Y is greater than or equal to z") : ("Y is smaller than or equal to Z"));

//task10;
x = 10;
y = "10";

if(x == y){
    console.log("No type checking has been done!");
}

if(x === y){
    console.log(`Type checking has also been done!`);
}



//Activity 4

//task11
let p = 10;
let q = 13;
let r = 30;
let s = 1;

if( (p<q) && (r>s) ){
    console.log(`Tested && Operator`);
}
//task12
else if((p>q) || (r>s)) {
    console.log(`Tested || Operator`)
}


//task13
let age = 21;
let canDrive = false;
if(!(age>18)){
    console.log(`${canDrive}, Can't drive`);
}
else{
    console.log(`${!canDrive}, Can Drive`);
}



//Activity 5

//task14
let pos = 10;

console.log(`${(pos>0) ? ("Positive") : ("Negative")}`);