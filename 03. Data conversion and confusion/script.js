// Data conversion and confusion

// 1. String to Numbers 

let numberString  = "9876";
let stringIntoNubers = Number(numberString);
console.log(typeof stringIntoNubers);

let numberString2 = "9876ab";
let stringIntoNubers2 = Number(numberString2);
console.log(typeof stringIntoNubers2);  // Output is number
console.log(stringIntoNubers2)  // Output is NaN Means Not a number

//  2.  Numbers to String

let  firstNumber = 9836;
let  firstString = String(firstNumber);
console.log(firstString) // output is 9836
console.log(typeof firstString) // output is string

// 3. number and string convert into boolean


// Number to Boolean

let num = 0;
let firstBoo = Boolean(num);
console.log(firstBoo,typeof firstBoo ); // output=> false / boolean

let num2 = 1;
let secBoo = Boolean(num2);
console.log(secBoo, typeof secBoo)  // outpput =>  true / Boolean

let num3 = 7535;
let thiBoo = Boolean(num3);
console.log(thiBoo, typeof thiBoo);

// String To Boolean;

let str = "";
let forBoo = Boolean(str);
console.log(forBoo,typeof forBoo);

let str2 = "Yash";
let fivBoo = Boolean(str2);
console.log(fivBoo, typeof fivBoo);

// Numbers to boolean  

let a = 0;
let b = 1;
let c = 973;
console.log(a,Boolean(a),typeof a);
console.log(b, Boolean(b), typeof b);
console.log(c, Boolean(c), typeof c);

// null and undefind conversion

let NULL = null;
let bNull = Boolean(NULL);
let cNull = Number(NULL);
let sNull = String(NULL);
console.log(bNull, typeof bNull)  // false Boolean
console.log(sNull, typeof sNull);  // null string
console.log(cNull, typeof cNull); // 0 number
console.log(NULL,Boolean(NULL),typeof NULL); // null false object
console.log(NULL, Number(NULL), typeof NULL); // null 0 object

let und = undefined;
let  cUnd = Number(und);
let  sUnd = String(und);
let bUnd = Boolean(und)
console.log(bUnd, typeof bUnd);  // false Boolean
console.log(sUnd, typeof sUnd); // undefined string
console.log(cUnd, typeof cUnd);  //NaN number
console.log(und, Boolean(und), typeof und)  // undefined false null


















