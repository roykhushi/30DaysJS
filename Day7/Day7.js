//task1
const book = {
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
console.log(book);
//task2
console.log(`Title of the book ${book.title}`);
console.log(`Author of the book ${book.author}`);
console.log(`Year of publication ${book.year}`);
//task3
book.details();
//task4
book.updateYear(2023);
//task5
console.log(book.library);
//task6
for(let i=0;i<book.library.length;i++){
    console.log(`Accessing names of the books in the library : ${book.library[i].name}`);
}
//task7
book.usingThis();
//task8
for(const key in book){
    console.log(`${key} : ${book[key]}`);
}
//task9
console.log(`Keys : ${Object.keys(book)}`);
console.log(`Values : ${Object.values(book)}`);
