// ------------------------  Math Object Function  ---------------------------

console.log(Math.PI);   // 3.141592653589793
console.log(Math.E);    // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.LN2);  // 0.6931471805599453

console.log(Math.round(4.7));  // 5
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.3));   // 5
console.log(Math.trunc(4.9));  // 4

console.log(Math.pow(2, 3));  // 8
console.log(Math.sqrt(16));   // 4
console.log(Math.cbrt(27));   // 3

console.log(Math.abs(-5));    // 5
console.log(Math.sign(-10));  // -1
console.log(Math.sign(0));    // 0
console.log(Math.sign(15));   // 1

console.log(Math.random());  // Random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1-10

console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));  // 1
console.log(Math.tan(Math.PI / 4));  // 1

console.log(Math.log(1));    // 0
console.log(Math.log10(100)); // 2
console.log(Math.log2(8));   // 3

console.log(Math.max(10, 5, 20));  // 20
console.log(Math.min(10, 5, 20));  // 5




// ------------------------  Date Objects Function  --------------------------


// 1. Creating Date Objects
// -------------------------

// Current date and time
let now = new Date();
console.log(now);  // Outputs current date and time

// Specific date (YYYY, MM, DD) - Month is 0-based (0 = January, 11 = December)
let specificDate = new Date(2024, 2, 3);  // March 3, 2024
console.log(specificDate);

// Date with time (YYYY, MM, DD, HH, MM, SS, MS)
let dateWithTime = new Date(2024, 2, 3, 14, 30, 0);
console.log(dateWithTime); // March 3, 2024, 14:30:00

// Using date string
let dateString = new Date("2024-03-03T14:30:00");
console.log(dateString);

// Timestamp (milliseconds since Jan 1, 1970)
let fromTimestamp = new Date(1709499000000);
console.log(fromTimestamp);


// 2. Getting Date & Time Components
// ----------------------------------
console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 2 (March)
console.log(now.getDate());      // 3
console.log(now.getDay());       // 0 (Sunday)
console.log(now.getHours());     // 14 (2 PM)
console.log(now.getMinutes());   // 30
console.log(now.getSeconds());   // 0
console.log(now.getMilliseconds()); // 0
console.log(now.getTime());      // Timestamp


// 3.Setting Date & Time Components
// ---------------------------------
let date = new Date();
date.setFullYear(2025);
date.setMonth(6);  // July (0-based index)
date.setDate(15);
date.setHours(10);
date.setMinutes(45);

console.log(date);  // 2025-07-15 10:45:00


// 4.Formatting Dates
// -------------------
console.log(now.toDateString());       // "Sun Mar 03 2024"
console.log(now.toTimeString());       // "14:30:00 GMT+0530"
console.log(now.toLocaleDateString()); // "3/3/2024"
console.log(now.toLocaleTimeString()); // "2:30:00 PM"
console.log(now.toISOString());        // "2024-03-03T14:30:00.000Z"
console.log(now.toUTCString());        // "Sun, 03 Mar 2024 14:30:00 GMT"



// 5.Comparing Dates
// ------------------
let date1 = new Date("2024-03-03");
let date2 = new Date("2024-03-04");

console.log(date1.getTime() < date2.getTime());  // true
console.log(date1.getTime() === date2.getTime()); // false


// 6.Calculating Time Differences
// -------------------------------
let startDate = new Date("2024-03-01");
let endDate = new Date("2024-03-10");

let diffMs = endDate - startDate; // Difference in milliseconds
let diffDays = diffMs / (1000 * 60 * 60 * 24); // Convert to days

console.log(diffDays);  // 9

