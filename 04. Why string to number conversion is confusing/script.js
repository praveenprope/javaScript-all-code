// Why string to number conversion is confusing

var a = "String";  // This is a string value
var b = 8778387;   // This is an integer value
console.log(typeof(a), typeof(b));

// ***************** Operation **************

let str1 = "Rakesh";
let str2 = " Chacha";
console.log(str1 + str2);  // Adding two strings
console.log(+str1);  // Attempt to convert the string to a number, but it results in NaN

let string1 = "8";
let number1 = 6;
let number2 = 4;
console.log(string1 + number1); // Output is "86". The string is not converted into a number
let check = string1 + number1 + number2;
console.log(check, typeof check);  // Output is "864", type is string
console.log(string1 + number1 + number2); // Output is "864". The numbers are concatenated with the string

// Now let's do the opposite

let numfirst = number1 + string1;
console.log(numfirst, typeof numfirst);  // Output is "68", type is string. "6" + "8" = "68"

let numsec = number1 + number2 + string1;
console.log(numsec, typeof numsec);  // Output is "108", type is string. 10 + "8" = "108"

// Using some increment and decrement operators

let pre = 12;
let pos = 8;
console.log(++pre, "Prefix");  // Output is 13 after prefix increment
console.log(pos++, "Postfix");  // Output is 8 after postfix increment

let postfix = 20;
console.log(postfix++, "Postfix");  // Output is 20
console.log(postfix);  // Output is 21

console.log(28 + 2);  // Output is 30
console.log(28 - 2);  // Output is 26
console.log(28 * 2);  // Output is 56
console.log(4 ** 2);  // Output is 16
console.log(28 / 2);  // Output is 14
console.log(29 % 2);  // Output is 1

// let yeah = yeah1 = yeah2 = 8;
// console.log(yeah, yeah1, yeah2);
