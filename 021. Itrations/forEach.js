// ForEach Loop Examples in JavaScript

// 1. Basic forEach Loop with Array of Strings
const numbers = ['SpiderMan', 'SuperMan', 'BatMan', 'IronMan'];
numbers.forEach(function(item, index, arr) {
    console.log(item, index, arr);  // Prints each item, its index, and the entire array
});

// 2. forEach Loop with Arrow Function
numbers.forEach((item) => {
    console.log(`Arrow Function forEach: ${item}`);  // Prints each item with a custom message
});

// 3. forEach Loop with Array of Objects
const users = [
    { id: 1, username: "raj123", age: 25, address: "123 Main St, Delhi, India" },
    { id: 2, username: "priya_98", age: 26, address: "456 Park Ave, Mumbai, India" },
    { id: 3, username: "aman_kumar", age: 30, address: "789 Hill St, Kolkata, India" },
    { id: 4, username: "meena_77", age: 28, address: "101 River Rd, Chennai, India" },
    { id: 5, username: "vishal007", age: 22, address: "202 Lake Blvd, Bengaluru, India" }
];

users.forEach((item) => {
    console.log(item.username);  // Prints the username of each user object in the array
});

// 4. forEach Loop with Map Object
const map = new Map();
map.set('IN', "India");
map.set('UK', "United Kingdom");
map.set('USA', "United States Of America");

map.forEach((value, key) => {
    console.log(`forEach Map: ${key} -> ${value}`);  // Prints each key-value pair in the Map
});
