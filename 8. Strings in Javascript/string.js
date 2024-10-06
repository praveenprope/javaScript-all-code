// String and String methods in JavaScript

// How to declare a string
const fullName = "Virat Kohli";
const sport = "Cricket";

// Old way to concatenate two strings
const details = fullName + " is a " + sport + " player";
console.log(details); // Output: "Virat Kohli is a Cricket player"

// New way to concatenate two strings using template literals
console.log(`${fullName} is the best ${sport} player`); // Output: "Virat Kohli is the best Cricket player"

// Creating a String object (not commonly used)
const actor = new String("Sunny Deol"); // This type of declaration makes the string an object
console.log(actor); // Output: [String: 'Sunny Deol']
console.log(typeof actor); // Output: "object"

// String methods

const krsnaRap = "Rehman, deta shot jaise A.R Balling - Neymar Drilling - ek chaar Me na victim, I’m more like Vikram, might pull up with A ghost, that’s Betaal";

// length method - returns the length of the string
console.log(krsnaRap.length); // Output: string length

// split method - splits the string into an array of substrings
console.log(krsnaRap.split(" - ")); // Output: array split by " - "

// toUpperCase method - converts the string to uppercase
console.log(krsnaRap.toUpperCase()); // Output: uppercase version of krsnaRap

// toLowerCase method - converts the string to lowercase
console.log(krsnaRap.toLowerCase()); // Output: lowercase version of krsnaRap

// replace method - replaces the first occurrence of a substring with another string
console.log(krsnaRap.replace("Neymar", "KR$NA")); // "Neymar" replaced with "KR$NA"

// replaceAll method - replaces all occurrences of a substring with another string
console.log(krsnaRap.replaceAll("A", "X")); // All "A" characters replaced with "X"

// charAt method - returns the character at the specified index
console.log(krsnaRap.charAt(0)); // Output: "R" (character at index 0)

// charCodeAt method - returns the Unicode of the character at the specified index
console.log(krsnaRap.charCodeAt(0)); // Output: Unicode for "R"

// trim method - removes whitespace from both sides of a string
console.log(krsnaRap.trim()); // Output: trimmed string

// trimStart method - removes whitespace from the start of the string
console.log(krsnaRap.trimStart()); // Output: string with leading whitespace removed

// trimEnd method - removes whitespace from the end of the string
console.log(krsnaRap.trimEnd()); // Output: string with trailing whitespace removed

// Additional string methods

// includes method - checks if a substring is present within the string
console.log(krsnaRap.includes("Vikram")); // Output: true or false

// startsWith method - checks if the string starts with a specified substring
console.log(krsnaRap.startsWith("Rehman")); // Output: true

// endsWith method - checks if the string ends with a specified substring
console.log(krsnaRap.endsWith("Betaal")); // Output: true

// indexOf method - returns the index of the first occurrence of a specified substring
console.log(krsnaRap.indexOf("shot")); // Output: index of "shot"

// lastIndexOf method - returns the index of the last occurrence of a specified substring
console.log(krsnaRap.lastIndexOf("A")); // Output: last index of "A"

// substring method - extracts a part of the string between two specified indexes
console.log(krsnaRap.substring(0, 10)); // Output: substring from index 0 to 10

// slice method - extracts a section of the string and returns it as a new string
console.log(krsnaRap.slice(0, 10)); // Output: string sliced from index 0 to 10

// repeat method - returns a new string with a specified number of copies of the original string
console.log("Hello ".repeat(3)); // Output:  "Hello Hello Hello "
