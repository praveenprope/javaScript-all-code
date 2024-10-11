// Create a new Date object with the current date and time
let myDate = new Date();
console.log("Current Date and Time:", myDate);

// Display the date as a readable string (e.g., "Fri Oct 11 2024")
console.log("Date String:", myDate.toDateString());

// Display the date and time in a localized format
console.log("Locale String:", myDate.toLocaleString());

// Display the date and time in ISO 8601 format (useful for databases and APIs)
console.log("ISO String:", myDate.toISOString());

// Get the current hour and minute from the date object
console.log("Hour:", myDate.getHours());
console.log("Minutes:", myDate.getMinutes());

// Check the data type of myDate (should be an object)
console.log("Type of myDate:", typeof myDate);

// Create a new Date object with a specific date (February 1, 1801)
let myCreateDate = new Date(1801, 1, 1);
console.log("Created Date:", myCreateDate);

// Display the created date in a localized date-only format
console.log("Locale Date String:", myCreateDate.toLocaleDateString());

// Get the current timestamp in milliseconds since January 1, 1970 (Unix epoch)
let timeStamp = Date.now();
console.log("Current Timestamp (ms):", timeStamp);

// Convert timestamp from milliseconds to seconds
console.log("Current Timestamp (s):", Math.floor(timeStamp / 1000));

// Extract the day of the week, month, and year from the date object
const dayOfWeek = myDate.getDay();  // Sunday - Saturday : 0 - 6
const month = myDate.getMonth();    // January - December : 0 - 11
const year = myDate.getFullYear();  // Full year (e.g., 2024)

// Display the current day, month, and year in a formatted string
console.log(`Today is day ${dayOfWeek} of the week, month ${month + 1}, and year ${year}.`);

// Additional Date Methods:

// Get the day of the month (1 - 31)
console.log("Day of the Month:", myDate.getDate());

// Get the number of milliseconds since January 1, 1970, for a date object
console.log("Milliseconds since Epoch for myDate:", myDate.getTime());

// Get the time zone offset in minutes (difference from UTC)
console.log("Time Zone Offset (minutes):", myDate.getTimezoneOffset());

// Set the year, month, and date to new values
myDate.setFullYear(2025);
myDate.setMonth(5);  // June (month is zero-based)
myDate.setDate(15);  // 15th day of the month
console.log("Updated Date:", myDate);

// Display the updated date in a long format
console.log("Updated Date (Long Format):", myDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));

// Display the current time in a 24-hour format
console.log("Current Time (24-hour format):", myDate.toLocaleTimeString('en-GB'));

// Get the seconds of the current time
console.log("Seconds:", myDate.getSeconds());

// Get the milliseconds of the current time
console.log("Milliseconds:", myDate.getMilliseconds());
