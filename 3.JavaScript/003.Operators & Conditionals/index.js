//-----------------------------------  Operators  -----------------------------------------------

let value = 3;
let negValue = -value;
console.log(negValue);          // -3



//------------------------------ 1) Arithmetic Operators  ----------------------------------------


//--------- a)  Binary  -----------

console.log(3 + 4);             // 7 (Addition)
console.log(3 - 4);             // -1 (Subtraction)
console.log(3 * 4);             // 12 (Multiplication)
console.log(3 / 4);             // 0.75 (Division)
console.log(3 ** 4);            // 81 (Power)
console.log(3 % 4);             // 3 (Modulus or Remainder)


//---------- b)  Unary  -----------

let a = 5;
console.log(a++);       // Post Increment => 5
console.log(++a);       // Pre Increment => 7

let b = 2; 
console.log(b--);       // Post Decrement => 2
console.log(--b);       // Pre Decrement => 0



//--------------------------------  String Addition  ---------------------------------------------

let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2;

console.log(str1 + str2);       // Hello World
console.log(str3);              // Hello World


// String Conversion (OK for Interviews but in Industry try to use parenthesis for better code readability)

console.log("1" + 2);           // 12
console.log(1 + "2");           // 12
console.log("1" + 2 + 2);       // 122
console.log(1 + 2 + "2");       // 32 [Different]


// Other Conversions  ==>>  know but try to avoid using 

console.log(true);          // true 
console.log(+true);         // 1
// console.log(true+);         Error
console.log(+"");           // 0

let num1, num2 ,num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);          // 4
console.log(num2);          // 4
console.log(num3);          // 4

console.log("2" > 0);       // true
console.log("02" > 0);      // true

console.log(null > 0);      // false [difficult to predict]
console.log(null == 0);     // false [difficult to predict]
console.log(null < 0);      // false [difficult to predict]

console.log(null >= 0);      // true [difficult to predict]
console.log(null === 0);     // false [difficult to predict]
console.log(null <= 0);      // true [difficult to predict]

console.log(undefined > 0)         // false
console.log(undefined >= 0)        // false
console.log(undefined < 0)         // false
console.log(undefined <= 0)        // false
console.log(undefined == 0)        // false
console.log(undefined === 0)       // false
console.log(undefined != 0)        // true
console.log(undefined !== 0)       // true



//------------------------------- 2) Assignment Operator -----------------------------------------

let x = 5;

x = x + 10;         
console.log(x);         // 15

x += 10;
console.log(x);         // 25

x = x - 10;
console.log(x);         // 15

x -= 10;
console.log(x);         // 5

x *= x;
console.log(x);         // 25

x /= x;
console.log(x);         // 1

x %= x;
console.log(x);         // 0

x **= x;
console.log(x);         // 1



//------------------------------- 3) Comparision Operator ----------------------------------------

console.log(5>1);           // true 
console.log(5<1);           // false
console.log(5>=1);          // true
console.log(1<=5);          // true
console.log(5==1);          // false
console.log(5!=1);          // true

console.log("5" == 5);      // true [Loose Equality => (only checks value) or Equal to Equal to]
console.log("5" === 5);     // false [Strict Equality => (checks data type and value) or Strict Check]
console.log("5" != 5);      // false [Loose Equality => (only checks value) or Not Equal to]
console.log("5" !== 5);     // true [Strict Inequality => (checks data type and value) or Strict Check]



//--------------------------------- 4) Ternary Operator ------------------------------------------

let age = 25;
let status1 = (age >= 18) ? "I can vote" : "I cannot vote";
console.log(status1);



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10                  // 5
// val1 = null ?? 10               // 10  
// val1 = undefined ?? 15          // 15
val1 = null ?? 10 ?? 20            // 10



console.log(val1);

//---------------------------------- 5) Logical Operator ------------------------------------------

console.log(true && false);         // false
console.log(true && true);          // true

console.log(true || false);         // true
console.log(true || true);          // true
console.log(false || false);        // false

console.log(false && "Hello");      // false
console.log(true && "Hello");       // Hello
console.log(false || "OK");         // OK


//Falsy ==>> undefined, null, 0, "", NaN, false

//Truthy ==>> everything which is not falsy    ==>>   tricky eg., "0", 'false', " ", [], {}, function(){}


//Short Circuiting

console.log(false || true || false || false);       // true
console.log(false || 7 || 8 || "Hello");            // 7



//---------------------------------- 6) Bitwise Operator ------------------------------------------

console.log(2 & 3);             // 2
console.log(2 | 3);             // 3
console.log(~3);                // -4
console.log(~1);                // -2
console.log(~0);                // -1
console.log(~(-1));             // 0
console.log(2 << 3);            // 16
console.log(22 >> 3);           // 2
console.log(2 ^ 3);             // 1
console.log(2 ^ 2);             // 0




//----------------------------------  Conditional Statements  -------------------------------------


// IF-ELSE -------------------------

const score = 200
if (score > 100) {
     let power = "fly"
    console.log(`User power: ${power}`);     // User power: fly
}

// console.log(`User power: ${power}`);      // ReferenceError: power is not defined


const balance = 1000
if (balance > 500) console.log("test"),console.log("test2");        // test test2



if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");           // less than 1200

}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");      // 2==3 wrong statement so nothing will print in this case
}



if (loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User logged in");           // User logged in
}



const userEmail = []
if (userEmail) {
    console.log("Got user email");          // Got user email
} else {
    console.log("Don't have user email");
}



const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");         // Object is empty
}

// Switch Case ---------------------


const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");               // march
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


