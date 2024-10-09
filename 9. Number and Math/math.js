// Declaring a primitive number
const score = 100;
console.log(score);  // Output: 100

// Declaring a Number object
const newScore = new Number(100);
console.log(newScore);  // Output: [Number: 100]

// Convert number to string
console.log(score.toString());  // Output: "100"

// Find the length of the number when converted to a string
console.log(newScore.toString().length);  // Output: 3

// Format number to two decimal places
console.log(score.toFixed(2));  // Output: "100.00"

const otherNumber = 273.3833;
const money = 2981877326737;

// Format number with a specific number of significant digits
console.log(otherNumber.toPrecision(3));  // Output: "273"

// Convert number to exponential notation
console.log(otherNumber.toExponential(3));  // Output: "2.734e+2"

// Round number to nearest integer without decimals
console.log(otherNumber.toFixed());  // Output: "273"

// Format number according to locale (default)
console.log(money.toLocaleString());  // Output: e.g., "2,981,877,326,737"

// Format number for Indian locale (e.g., lakh and crore separators)
console.log(money.toLocaleString('en-IN'));  // Output: e.g., "2,98,18,77,32,6737"

// Format number for Hindi locale (alternative option for India)
console.log(money.toLocaleString('hi'));  // Output will follow Hindi conventions


//+++++++++++++ MATH METHODS ++++++++++++++++++++++++++

const highScore = 999999;

console.log(Math);  // Output: Math object
console.log(Math.PI);  // Output: 3.141592653589793

// Get the absolute value of a number
console.log(Math.abs(-4));  // Output: 4

// Find the maximum value from a set of numbers
console.log(Math.max(8, 3, 2, 3));  // Output: 8

// Find the minimum value from a set of numbers
console.log(Math.min(3, 45, 33, 2));  // Output: 2

// Round to the nearest integer
console.log(Math.round(128.733));  // Output: 129

// Round up to the nearest integer
console.log(Math.ceil(532.872));  // Output: 533

// Round down to the nearest integer
console.log(Math.floor(273.7982));  // Output: 273

// Square root of a number
console.log(Math.sqrt(144));  // Output: 12

// Exponentiation (e.g., 2 to the power of 3)
console.log(Math.pow(2, 3));  // Output: 8

// Natural logarithm of a number
console.log(Math.log(10));  // Output: ~2.3026

// Generate a random decimal between 0 and 1
console.log(Math.random());  // Output: Random number between 0 and 1

// Generate a random decimal between 1 and 10
console.log((Math.random() * 10) + 1);  // Output: Random number between 1 and 10

// Generate a random integer between min and max (inclusive)
let max = 20;
let min = 14;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Output: Random integer between 14 and 20
