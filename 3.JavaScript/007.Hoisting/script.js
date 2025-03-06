// --------------------------------------  Hoisting  ------------------------------------------------------------

// Varaible Hoisting ----------------------------------------------

// ----- 1) var -----
var age = 12;
console.log(age);           // 12 [Normal Case]


console.log(age);          // undefined  ==>> No Error because of Variable Hoisting
var age = 11;


// ------ 2) let -----
let name = "Mile";
console.log(name);         // Mile [Normal Case]

/*
console.log(name2);
let name2 = "Mark";        // ReferenceError : Cannot access 'name2' before initialization
                            
--------------->>>>>>>>>>>>> Hoisting not possible in let variable
*/


// ----- 3) const -----
const email = "a@gmail.com";
console.log(email);                 // a@gmail.com

/*
console.log(email2);
const email2 = "b@gamil.com";       // ReferenceError: Cannot access 'email2' before initialization

--------------->>>>>>>>>>>>> Hoisting not possible in const variable
*/



// Function Hoisting -----------------------------------------------

// Function Defination =============================================

// Normal Case 

function sayMyName(userName)
{
    console.log(`My name is ${userName}`);  // My name is Aaron
}
console.log(sayMyName("Aaron"));            // undefined



function sayMyName(userName)
{
    console.log(`My name is ${userName}`);  // My name is Aaron
}
sayMyName("Aaron");           


// Function Hoisting Case

console.log(sayMyName("Smith"));            // undefined
function sayMyName(userName)
{
    console.log(`My name is ${userName}`);  // My name is Smith
}



sayMyName("Peter");            
function sayMyName(userName)
{
    console.log(`My name is ${userName}`);  // My name is Peter
}

// --------------->>>>>>>>>>>>> Hoisting is possible in function defination case 




// Function Expression value storing in a variable =================

const greetings =function() {
    console.log("Hi greetings from my side");
}
greetings();                                // Hi greetinga from my side


/*
sayHello();
const sayHello = function() {
    console.log("Hello");
}                                           // ReferenceError: Cannot access 'sayHello' before initialization

--------------->>>>>>>>>>>>> Hoisting not possible for function expression value storing in a variable
*/