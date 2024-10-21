// Object declaration using 'new Object()'
const instaUser = new Object();

// Adding properties to instaUser
instaUser.userName = "Bro Iam";     // Setting 'userName' property to "Bro Iam"
instaUser.loggedIn = false;         // Setting 'loggedIn' property to false (boolean)
instaUser.followers = 24;           // Setting 'followers' property to 24 (number)

// Logging the instaUser object to the console
console.log(instaUser);
// Output: { userName: 'Bro Iam', loggedIn: false, followers: 24 }


// Object declaration using an object literal (2nd way)
const telegramUser = {};

// Adding properties to telegramUser
telegramUser.userName = "Bro Not";  // Setting 'userName' to "Bro Not"
telegramUser.phoneNo = 99393939399339; // Setting 'phoneNo' to a large number
telegramUser.loggedIn = true;       // Setting 'loggedIn' to true (boolean)

// Logging the telegramUser object to the console
console.log(telegramUser);
// Output: { userName: 'Bro Not', phoneNo: 99393939399339, loggedIn: true }


// Creating a nested object for facebookUser
const facebookUser = {
     userName: {
        firstName: "Basic",         // 'firstName' inside 'userName' nested object
        lastName: "detail",         // 'lastName' inside 'userName' nested object
        fullName: "Basic Detail"    // Full name as a single string
     },
     phoneNo: {
          stateCode: 91,            // Country/state code
          number: 929833874433,     // Phone number
          fullNumber: 91929833874433  // Full phone number with country code
     },
     isLogged: false                // Boolean indicating if the user is logged in
};

// Logging the entire facebookUser object to the console
console.log(facebookUser);
// Output: { userName: { firstName: 'Basic', lastName: 'detail', fullName: 'Basic Detail' }, phoneNo: { stateCode: 91, number: 929833874433, fullNumber: 91929833874433 }, isLogged: false }

// Accessing nested properties
console.log(facebookUser.userName.firstName);   // Output: Basic
console.log(facebookUser.phoneNo.fullNumber);   // Output: 91929833874433


// Joining two objects (merging)
// Declaring two separate objects
const bigLetters = {1: "A", 2: "B", 3: "C", 4: "D"};
const smallLetters = {5: "a", 6: "b", 7: "c", 8: "d"};
const numbers = {9: 1, 10: 2, 11: 3, 12: 4};

// Merging objects using object shorthand
const mixLetters = {bigLetters, smallLetters};  // Creating an object with 'bigLetters' and 'smallLetters' as keys
console.log(mixLetters);
// Output: { bigLetters: {1: 'A', 2: 'B', 3: 'C', 4: 'D'}, smallLetters: {5: 'a', 6: 'b', 7: 'c', 8: 'd'} }

// Merging objects using the spread operator
const mixLetters2 = {...bigLetters, ...smallLetters}; // Combining 'bigLetters' and 'smallLetters' into a single object
console.log(mixLetters2);
// Output: {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'a', 6: 'b', 7: 'c', 8: 'd'}

// Merging multiple objects using Object.assign()
console.log(Object.assign({}, bigLetters, smallLetters, numbers)); 
// Output: {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'a', 6: 'b', 7: 'c', 8: 'd', 9: 1, 10: 2, 11: 3, 12: 4}


// Objects inside an array
const myArr = [
    {
        userId: 1,
        email: "123@gmail.com"      // First object in array
    },
    {
        userId: 2,
        email: "123@gmail.com"      // Second object in array
    },
    {
        userId: 1,
        email: "123@gmail.com"      // Third object in array
    },
    {
        userId: 1,
        email: "123@gmail.com"      // Fourth object in array
    },
];

// Accessing elements from the array
console.log(myArr[1]);  // Accessing the second object in the array
// Output: { userId: 2, email: '123@gmail.com' }

console.log(myArr[2]);  // Accessing the third object in the array
// Output: { userId: 1, email: '123@gmail.com' }


// More methods on objects

// Creating an object using 'new Object()'
const instaUser1 = new Object();

instaUser1.userName = "Bro Iam";     // Setting 'userName'
instaUser1.loggedIn = false;         // Setting 'loggedIn'
instaUser1.followers = 24;           // Setting 'followers'

// Object.keys() - Returns an array of the keys of the object
console.log(Object.keys(instaUser1));
// Output: ['userName', 'loggedIn', 'followers']

// Object.values() - Returns an array of the values of the object
console.log(Object.values(instaUser1));
// Output: ['Bro Iam', false, 24]

// Object.entries() - Returns an array of key-value pairs
console.log(Object.entries(instaUser1));
// Output: [['userName', 'Bro Iam'], ['loggedIn', false], ['followers', 24]]


// Checking if the object has certain properties using hasOwnProperty()
console.log(instaUser1.hasOwnProperty('loggedIn'));   // Checking if 'loggedIn' exists
// Output: true

console.log(instaUser1.hasOwnProperty('offline'));    // Checking if 'offline' exists (it does not)
// Output: false
