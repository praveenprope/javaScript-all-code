// Array in JavaScript

// Declaring an Array
let arr = [10, 20, 30, 40, 50]; // Array indexes start from 0
console.log(arr);
console.log(typeof arr);  // In JavaScript, arrays are a special type of object

// JavaScript allows mixed-type arrays or heterogeneous arrays
let cars = new Array("bmw", "scorpio", "toyota", 23, 43);
console.log(cars); // Output: [ 'bmw', 'scorpio', 'toyota', 23, 43 ]

// Accessing Array Elements with an Index Value (index starts at 0)
console.log(cars[0]);  // Output: 'bmw'

// You can also change an array element by its index
cars[0] = "noCar";  // Modifies the original array
console.log(cars[0]); // Output: 'noCar'

//***************** Array Methods **************************//
// JavaScript arrays have built-in properties and methods:

// length property
// The length property returns the number of elements in the array
const car = new Array("bmw", "jeep", "wrangler", "thar", "scorpio", "toyota");
console.log(car.length); // Output: 6

// Accessing the first element
console.log(car[0]); // Output: 'bmw'

// Accessing the last element
console.log(car[car.length - 1]); // Output: 'toyota'

// join method
const bike = new Array("hero", "honda", "bajaj", "duke");
console.log("join method", car.join("*")); // Joins car elements with '*'

// Adding two arrays
console.log(car + bike); // Combines car and bike arrays into a string

// pop method
// Removes the last element from the array
bike.pop();
console.log(bike); // Output: [ 'hero', 'honda', 'bajaj' ]

// push method
// Adds an element to the end of the array
bike.push("dc");
console.log(bike);  // Output: [ 'hero', 'honda', 'bajaj', 'dc' ]

// shift method
// Removes the first element from the array
bike.shift();
console.log(bike);  // Output: [ 'honda', 'bajaj', 'dc' ]

// unshift method
// Adds an element to the beginning of the array
bike.unshift("zero");
console.log(bike);    // Output: [ 'zero', 'honda', 'bajaj', 'dc' ]

// convert array to string
console.log(car.toString()); // Converts car array to a string
