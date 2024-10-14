// Arrays of Marvel and DC heroes
const marvelHeros = ["Spiderman", "IronMan", "Thor", "CaptainAmerica"];
const dcHeros = ["Batman", "Superman", "Aquaman", "Flash"];

// Adding two arrays

// Using .push() method - this will create a nested array
marvelHeros.push(dcHeros);
console.log(marvelHeros);  
// Output: [ 'Spiderman', 'IronMan', 'Thor', 'CaptainAmerica', [ 'Batman', 'Superman', 'Aquaman', 'Flash' ] ]

// Using .concat() method - joins both arrays into a new array
const allHero = marvelHeros.concat(dcHeros);
console.log(allHero);  
// Output: [ 'Spiderman', 'IronMan', 'Thor', 'CaptainAmerica', 'Batman', 'Superman', 'Aquaman', 'Flash' ]

// Using spread operator (...) - another way to merge arrays
const allMainHero = [...marvelHeros, ...dcHeros];
console.log(allMainHero);  
// Output: [ 'Spiderman', 'IronMan', 'Thor', 'CaptainAmerica', 'Batman', 'Superman', 'Aquaman', 'Flash' ]

// .flat() method - flattens nested arrays into a single array
const vehicles = ["Scorpio", "Thar", "Range", "WagonR", ["Hero", "Honda", "Splendor", "Platina"]];
console.log(vehicles); 
// Output: [ 'Scorpio', 'Thar', 'Range', 'WagonR', [ 'Hero', 'Honda', 'Splendor', 'Platina' ] ]

console.log(vehicles.flat(Infinity));
// Output: [ 'Scorpio', 'Thar', 'Range', 'WagonR', 'Hero', 'Honda', 'Splendor', 'Platina' ]
// The .flat() method makes all nested arrays into a single, flat array

// Checking if a value is an array with Array.isArray()
console.log(Array.isArray("SpiderMan"));  // false
console.log(Array.isArray(vehicles));     // true

// .from() method - creates an array from a string
console.log(Array.from("Sidhu Moose Wala"));
// Output: [ 'S', 'i', 'd', 'h', 'u', ' ', 'M', 'o', 'o', 's', 'e', ' ', 'W', 'a', 'l', 'a' ]

// .of() method - creates a new array instance with specified values
let target = 100;
let target2 = 200;
let target3 = 300;
console.log(Array.of(target, target2, target3)); 
// Output: [ 100, 200, 300 ]
