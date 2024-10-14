// Declaring an Array
let arr = [10, 20, 30, 40, 50]; // Array indexes start from 0
console.log(arr); // Output: [10, 20, 30, 40, 50]
console.log(typeof arr);  // Output: object (Arrays are a special type of object in JavaScript)

// JavaScript allows mixed-type arrays (heterogeneous arrays)
let cars = new Array("bmw", "scorpio", "toyota", 23, 43);
console.log(cars); // Output: [ 'bmw', 'scorpio', 'toyota', 23, 43 ]

// Accessing Array Elements
console.log(cars[0]);  // Output: 'bmw'

// Modifying an Array Element
cars[0] = "noCar";  // Changes the first element
console.log(cars[0]); // Output: 'noCar'

//***************** Array Methods **************************//

// length property
// Returns the number of elements in the array
const car = ["bmw", "jeep", "wrangler", "thar", "scorpio", "toyota"];
console.log(car.length); // Output: 6

// Accessing First and Last Elements
console.log(car[0]); // Output: 'bmw'
console.log(car[car.length - 1]); // Output: 'toyota'

// join method
// Joins all elements of an array into a string with specified separator
const bike = ["hero", "honda", "bajaj", "duke"];
console.log("join method", car.join("*")); // Output: 'bmw*jeep*wrangler*thar*scorpio*toyota'

// Adding two arrays
console.log(car + bike); // Concatenates car and bike arrays into a string: 'bmw,jeep,wrangler,thar,scorpio,toyota,hero,honda,bajaj,duke'

// pop method
// Removes the last element from the array and returns it
bike.pop();
console.log(bike); // Output: [ 'hero', 'honda', 'bajaj' ]

// push method
// Adds a new element to the end of the array and returns the new length
bike.push("dc");
console.log(bike);  // Output: [ 'hero', 'honda', 'bajaj', 'dc' ]

// shift method
// Removes the first element from the array and shifts all other elements to a lower index
bike.shift();
console.log(bike);  // Output: [ 'honda', 'bajaj', 'dc' ]

// unshift method
// Adds a new element to the beginning of the array and returns the new length
bike.unshift("zero");
console.log(bike);  // Output: [ 'zero', 'honda', 'bajaj', 'dc' ]

// toString method
// Converts the array to a string, with each element separated by commas
console.log(car.toString()); // Output: 'bmw,jeep,wrangler,thar,scorpio,toyota'

// concat method
// Combines two or more arrays into a new array without modifying the original arrays
const vehicles = car.concat(bike);
console.log(vehicles);  // Output: [ 'bmw', 'jeep', 'wrangler', 'thar', 'scorpio', 'toyota', 'zero', 'honda', 'bajaj', 'dc' ]

// reverse method
// Reverses the order of elements in the array
console.log(car.reverse());  // Output: [ 'toyota', 'scorpio', 'thar', 'wrangler', 'jeep', 'bmw' ]

// sort method
// Sorts the elements in the array alphabetically (for strings) or numerically (for numbers)
console.log(car.sort());  // Output: [ 'bmw', 'jeep', 'scorpio', 'thar', 'toyota', 'wrangler' ]

// slice method
// Returns a shallow copy of a portion of the array into a new array without modifying the original array
const slicedCar = car.slice(1, 3);
console.log(slicedCar);  // Output: [ 'jeep', 'scorpio' ]

// splice method
// Adds and/or removes elements from an array
car.splice(2, 1, "ford", "chevy"); // At index 2, remove 1 item and add 'ford' and 'chevy'
console.log(car);  // Output: [ 'bmw', 'jeep', 'ford', 'chevy', 'thar', 'toyota', 'wrangler' ]

// indexOf method
// Returns the index of the first occurrence of a specified value, or -1 if not found
console.log(car.indexOf("jeep"));  // Output: 1

// includes method
// Checks if an array contains a specified element, returning true or false
console.log(car.includes("bmw"));  // Output: true

// filter method
// Creates a new array with elements that pass a test (provided as a function)
const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = numbers.filter(number => number > 3);
console.log(filteredNumbers);  // Output: [ 4, 5, 6 ]

// map method
// Creates a new array with the results of calling a provided function on every element
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);  // Output: [ 1, 4, 9, 16, 25, 36 ]

// reduce method
// Executes a reducer function on each element, resulting in a single output value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // Output: 21
