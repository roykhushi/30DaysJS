//task1
const arr1 = [1,2,3,4,5];
console.log(`The array of five numbers is : ${arr1}`);

//task2
const arr2 = [1,2,3,4,5];
console.log(`First element of the array : ${arr2[0]} and last element of the array is : ${arr2[arr2.length-1]}`);

//task3
const original_arr = [1,2,3,4];
console.log(`Array before pushing: ${original_arr}`);
original_arr.push(5);
console.log(`Array after pushing : ${original_arr}`);

//task4
const nums = [1,2,3,4,5];
console.log(`Array before popping : ${nums}`);
nums.pop();
console.log(`Updated array after popping: ${nums}`);

//task5
let nums1 = [1,2,3,4,5];
console.log(`Original array ${nums1}`);
console.log(`Array after removing the first element : ${nums1.shift()}`);

//task6
nums1 = [1,2,3,4,5];
nums1.unshift(55);
console.log(`Using unshift : ${nums1}`);

//task7
const array = [1,2,3,4,5];
console.log(`Original array : ${array}`);
const new_arr = array.map((i)=>i*2);
console.log(`New Array after doubling each element : ${new_arr}`);

//task8
const filter_arr = [1,2,3,4,5,6,7,8,9,10];
console.log(`Original array : ${filter_arr}`);
const even_arr = filter_arr.filter((i)=>(i%2 == 0));
console.log(`New array with even numbers : ${even_arr}`);

//task9
const reduce_arr = [1,2,3,4,5];
const sum = 0;
reduce_arr.reduce((i)=>sum+i);
console.log(`The sum of the array elements are : ${sum}`);

//task10
const myArr = [1,2,3,4,5];
console.log(`The array elements are : `)
for(let i=0;i<myArr.length;i++){
    console.log(myArr[i]);
}

//task 11
console.log(`Using for each method`);
myArr.forEach(i => {
    console.log(i);
});

//task12
//2-d arr
const arr_2d = [[1,2,3],
                [4,5,6],
                [7,8,9]];
console.log(`2D Array : ${arr_2d}`);

//task13
console.log(arr_2d[1][0]);