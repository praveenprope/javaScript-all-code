// Switch Case Statement

// Basic Syntax:
// switch (key) {   
//     case value:
//         // Code to execute if key matches value
//         break;  // Exits the switch block
//     default:
//         // Code to execute if no case matches
//         break;
// }

let askUserNumber = 4;
switch (askUserNumber) {
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default: 
        console.log("Invalid day number");
        break;
}

// Another example

let month = "Feb";
switch (month) {
    case "Jan": 
        console.log("January");  // Cases can be strings as well
        break;
    case "Feb": 
        console.log("February");
        break;
    case "Mar": 
        console.log("March");
        break;
    default: 
        console.log("Month not found");
        break;
}
