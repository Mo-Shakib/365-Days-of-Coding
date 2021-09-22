// printign hello world
console.log('hello world');

// Variables

var x = 10;
var y = 20;
var z = x + y;
console.log(z);

var name = 'John';
var arr = [1, 2, 3, 4, 5];
// print arr
console.log(arr);

let a = 10;

a = a + 1;

// print a
console.log(a);

const pi = 3.1416;

// print pi
console.log(pi);

// JS Data Types
let lenth = 16; // int
let lastName = 'Doe'; // string
let details = {firstName: 'John', lastName: 'Doe'}; // object
let weight = {kg: 70, lb: 200}; // object

// print details
console.log(details);

let xy = 15 + " Hello";
let xz = 10 + 5;
// print xy
console.log(xy);
console.log(xz);

// print type of xy
console.log(typeof xy);
// print type of xz
console.log('Type of xz is:', typeof xz);
xz = 'Shakib';
console.log('Type of xz is:', typeof xz);

// JS Arrays
let array = [1, 2, 3, 4, 5];
// print arr
console.log(array);

// print length of array
console.log(array.length);
// print first element of array
console.log(array[0]);
// print last element of array
console.log(array[array.length - 1]);

// insert an element at the end of array
array.push(6);
// print array
console.log(array);

// change the first element of array
array[0] = 'Hello';
// print array
console.log(array);

// print the array in reverse order
console.log(array.reverse());

// print the array in loop
for (let i = 0; i < array.length; i++) {
    console.log(i,'->',array[i]);
}

// print the array using while loop
let i = 0;
while (i < array.length) {
    console.log(i,'->',array[i]);
    i++;
}



// JS Functions
console.log('------JS functions------')
function hello() {
    return 'Hello';
}

a1 = hello();
// print a1
console.log(a1);

// function to convert celcius to fahrenheit
function celciusToFahrenheit(celcius) {
    return celcius * 9 / 5 + 32;
}

console.log(celciusToFahrenheit(36));

function greeting(name){
    return 'Hello ' + name;
}

// print greeting
console.log(greeting('Shakib'));

let myArr = [];

for (let x = 1; x <= 5; x++){
    console.log(x,'->',myArr);
    myArr.push(x);
    console.log(myArr);
}

// sum of digits of a number
function sumOfDigits(num){
    // convert num to string
    let numStr = num.toString();
    // get the length of numStr
    let len = numStr.length;
    // initialize sum
    let sum = 0;
    // loop through the length of numStr
    for (let i = 0; i < len; i++){

        sum += parseInt(numStr[i]);
    }
    return sum;
}

// take input from user
let num = parseInt(prompt('Enter a number:'));
// print sum of digits
console.log(sumOfDigits(num));


// function to check pelindrome or not
function isPelindrome(str){
    // create a new string with reverse of str
    let reverseStr = str.split('').reverse().join('');
    // check if str and reverseStr are equal
    if (str === reverseStr){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPelindrome('shakib'));

// selection sort
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        // find the minimum element in arr[i..n-1]
        let min = i;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        // swap the minimum element with arr[i]
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

// create an array with 15 random numbers
let arr = [3, 7, 6, 23, 56, 23, 12, 23];
// Print the array
console.log(arr);
// Sort the array
arr = selectionSort(arr);
// Print the array
console.log(arr);

// Binary Search implementation
function binarySearch(arr, key){
    for (let i; i <= arr.length; i++){
        
    }