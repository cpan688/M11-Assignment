let num;

//STEP 1 - prompts the user for a number, display the positive version of that number in the console window.
num = prompt("Enter a number: ");
console.log(`The absolute value of your number is: ${Math.abs(num)}`)

//STEP 2 - prompts the user for a floating point value (decimal), round it UP to the nearest whole number.
num = prompt("Enter a decimal number: ");
console.log(`The nearest whole number (round up) is: ${Math.ceil(num)}`)

//STEP 3 - prompts the user for a floating point value (decimal), round it DOWN to the nearest whole number.
num = prompt("Enter a decimal number: ");
console.log(`The nearest whole number (round down) is: ${Math.floor(num)}`)

//STEP 4 - prompts the user for 5 numbers, comma delimited (1,2,3,4,5), find the largest and smallest numbers in the list
let numStr = prompt("Enter a list of five numbers comma delimited (Example: 1,2,3,4,5): ");
let arrNum = numStr.split(',');
console.log(`The largest number is: ${Math.max(...arrNum)}`)
console.log(`The smallest number is: ${Math.min(...arrNum)}`)

//STEP 5 - prompts the user for a number, display the square root of that number in the console window.
num = prompt("Enter a number: ");
console.log(`The square root of your number is: ${Math.sqrt(num)}`)
