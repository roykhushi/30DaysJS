//task1
console.log(`Task 1`)
for(let i=1;i<=10;i++){
    console.log(i);
}


//task2
console.log(`Table of 5`)
for(let i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}


//task3
console.log(`Task 3`)
let i =1;
let sum = 0;
while (i<=10) {
    sum+=i;
    i++;
}
console.log(`The sum from 1-10 is ${sum}`);


//task4
console.log(`Task 4`);
let j = 10;
while(j>=0){
    console.log(j);
    j--;
}

//task5
console.log(`Task5`);
let num = 1;
do {
    console.log(num);
    num++;
} while (num<=5);

//task6
console.log(`Task 6`);
let fact = 1;
let n = 5;
do {
    fact*=n;
    n--;
    
} while (n>0);
console.log(`factorial of ${n} is: ${fact}`);


//task7
console.log(`Task7`);

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("*"); //doesnt bring the cursor to the new line
    }
    console.log();
}