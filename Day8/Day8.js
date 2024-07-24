//task1
let name = "Khushi";
let age = 21;
console.log(`Name : ${name} and Age : ${age}`);
//task2
//multiline string
let multi_str = `This is and 
example of a 
multiline string`;
console.log(multi_str);
//ṭask3
const arr = [1,2,3,4,5];
let a,b;
[a,b] = arr;
console.log(`First value of the array : ${a} and second value : ${b}`);
//task4 
const book = {
    title : "Javascript",
    author : "mdndocs"
}

const{title,author} = book;
console.log(`Title : ${title} and author ${author}`);
//task5
const arr1 = [1,2,3,4,5];
const arr2 = [0,9,8,7,6,...arr1];
console.log(arr2);
//task6
function f1(...args){
    let sum = 0;
    args.forEach((i)=>sum+=i);
    console.log(sum);
}
(f1(2,3,4,5));
//task7
function mul(a,b=1){
    return a*b;
}
console.log(mul(8));
//task8
const book2 = {
    title : "Javascript",
    author : "Khushi",
    year : 2024,
    details : function(){
        console.log(`Title : ${book.title}`);
        console.log(`Author : ${book.author}`);
    },
    updateYear : function(yr){
        book.year = yr;
        console.log(`Updated book year ${book.year}`)
    },
    library : [
        {
            name: "C",
            quantity: 10,
            Author : "Bjarne Stroustrup"
        },
        {
            name: "C++",
            quantity: 10,
            Author : "Dennis Ritchie"
        },
        {
            name: "Java",
            quantity : 20,
            Author: "Sun Microsystems"
        }
    ],

    usingThis : function(){
        console.log(`Current book name: ${this.title}`);
        console.log(`Current book year : ${this.year}`);
    }
    
}
console.log(book2);
//task9
let LAST_NAME = "lastname";
let fullname = {
    firstname: "Khushi"
};
fullname[LAST_NAME] = "Roy";
console.log(
    "My fullname is: " + fullname.firstname
    + " " + fullname.lastname
);