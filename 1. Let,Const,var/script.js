/*
let, const, var keywords
*/

// 1. let keyword

{
    let a = 10;
    // let a = 30; // let keyword cannot be redeclared.
    a = 20;  // let keyword can be reassigned.
    console.log(a);
}
// console.log(a); // let keyword has block scope.

// 2. const keyword

{
    const a = 40;
    // const a = 30; // const keyword cannot be redeclared.
    // a = 60;  // const keyword cannot be reassigned.
    console.log(a);
}
// console.log(a); // const keyword has block scope.

// 3. var keyword

{
    var a = 10;
    var a = 90; // var can be reassigned and redeclared with the same name.
}
console.log(a); // var keyword does not have block scope.
