// Comparison of data types in JavaScript

// Comparison operators return values in the boolean data type

console.log(8 == 4);    // false
console.log(8 >= 4);    // true
console.log(8 <= 4);    // false
console.log(8 != 4);    // true
console.log(8 < 4);     // false
console.log(8 > 4);     // true

// Comparison of strings

let str1 = "aanuj";
let str2 = "Prita";
console.log(str1 == str2, "String to String");  // false
console.log(str1 != str2, "String to String");  // true
console.log(str1 >= str2, "String to String");  // true
console.log(str1 <= str2, "String to String");  // false
console.log(str1 < str2, "String to String");   // false
console.log(str1 > str2, "String to String");   // true

/*
When comparing strings in JavaScript using relational operators (>=, <=, <, >, ==, !=), the comparison is based on the Unicode values of the characters in the strings, which are compared lexicographically (like in a dictionary).

Here’s the breakdown of each comparison:

str1 == str2:
"aanuj" == "Prita":
Since the strings are not identical, the result is false.

str1 != str2:
"aanuj" != "Prita":
Since the strings are not identical, the result is true.

str1 >= str2:
"aanuj" >= "Prita":
JavaScript compares strings based on Unicode values. The first character of str1 ('a') has a Unicode value of 97, while the first character of str2 ('P') has a Unicode value of 80. Since 97 is greater than 80, the result is true.

str1 <= str2:
"aanuj" <= "Prita":
This is the opposite of the >= comparison. Since 'a' is greater than 'P', the result is false.

str1 < str2:
"aanuj" < "Prita":
Since 'a' is greater than 'P', the result is false.

str1 > str2:
"aanuj" > "Prita":
Since 'a' is greater than 'P', the result is true.

So, the output of your code is correct based on how JavaScript performs string comparison.
*/

// Comparison of strings to numbers

let num1 = 22;

console.log(str1 == num1, "String to Number");  // false 
console.log(str1 != num1, "String to Number");  // true
console.log(str1 >= num1, "String to Number");  // false
console.log(str1 <= num1, "String to Number");  // false
console.log(str1 < num1, "String to Number");   // false
console.log(str1 > num1, "String to Number");   // false

/*
Explanation:
str1 == num1 (false):
"aanuj" == 22: JavaScript tries to convert "aanuj" to a number.
Since "aanuj" can't be converted to a valid number, it becomes NaN.
NaN is not equal to any number, so the result is false.

str1 != num1 (true):
"aanuj" != 22: As before, "aanuj" becomes NaN.
Since NaN is not equal to 22, the result is true.

str1 >= num1 (false):
"aanuj" >= 22: JavaScript again converts "aanuj" to NaN.
Any comparison with NaN (>=, <=, <, >) returns false, so this is false.

str1 <= num1 (false):
"aanuj" <= 22: Same logic as above. NaN comparison results in false.

str1 < num1 (false):
"aanuj" < 22: Again, NaN comparison results in false.

str1 > num1 (false):
"aanuj" > 22: Once more, NaN comparison results in false.
*/

// Comparison of undefined, null, number, and string

let a = "Here";
let b = 0;
let c = undefined;
let d = null;

console.log(a > b, "String and Number", a);       // false
console.log(a == b, "String to Number");          // false
console.log(b > c, "Number to undefined");        // false
console.log(c == b, "Undefined to number");       // false
console.log(c > a, "Undefined to string");        // false
console.log(d > a, "Null to string");             // false
console.log(d > b, "Null to number");             // false
console.log(d > c, "Null to undefined");          // false
console.log(d == a, "Null to string");            // false
console.log(d == b, "Null to number");            // false
console.log(d == c, "Null to undefined");         // false

// It's better to compare only the same data type with ===

let first = 20;
let second = "twenty";
let third = 20;

console.log(first == second);   // false
console.log(first === second);  // false // === checks both value and data type, and they are not the same, so the answer is false
console.log(first === third);   // true  // same data type and value, so the output is true
