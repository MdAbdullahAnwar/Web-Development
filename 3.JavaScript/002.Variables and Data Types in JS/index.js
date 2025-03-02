//--------------------------------- var let const -----------------------------------------------
const accountID = 1717;

let accountNumber = 9876543210;

var accountPassword = 123456789;

accountRate = "Four Star";

let accountDetails;

/*
-------------------------------  const  ---------------------------------------------------------
accountID = 1234;         
const accountID = 3333;   -->>   reassignment and redeclaration is not allowed for const keyword
*/

console.log(accountID);   // 1717


/*
--------------------------------  let  ----------------------------------------------------------
let accountNumber = 88;
console.log(accountNumber);  -->>  redeclaration is not possible for let keyword
*/

accountNumber = 99;
console.log(accountNumber);  // 99  -->>  reassignment is possible for let keyword


//------------------------------  var  -----------------------------------------------------------
accountPassword = 5555;
console.log(accountPassword);  // 5555  -->>  reassignment is possible for var keyword

var accountPassword = 11;
console.log(accountPassword);  // 11  -->>  redeclaration is possible for var keyword

console.table([accountID,accountNumber,accountPassword,accountRate,accountDetails]);
/*
let accountPassword = 66; 
console.log(accountPassword);  -->>  var variable cannot converted into let variable   

var accountNumber = 55;
console.log(accountNumber);  -->>  and vice-versa

--------------------------------------------------------------------------------------------------
*/

//-------------------------------  Data Types  ---------------------------------------------------

//-------------------------- 1) Primitive Data Types ----------------------------------------------

"use strict";           //treat all JS code as newer version   



let a = 5.7;            // -2 to the power 53 to 2 to the power 53
console.log(a);         // 5.7
console.log(typeof(a)); // Number


let b = 'aaa';          // '  '
console.log(b);         // aaa
console.log(typeof(b)); // string


let c = "bbb";          // "  "
console.log(c);         // bbb
console.log(typeof(c)); // string


let d = `c              
c
c`;                     // `   `
console.log(d);         // c   ->next line    c   ->next line     c 
console.log(typeof(d)); // string 



let e = true;          
console.log(e);         // true
console.log(typeof(e)); // boolean


let f = false;          
console.log(f);         // false
console.log(typeof(f)); // boolean



let g;      
console.log(g);         // undefined     
console.log(typeof(g)); // undefined



let h = null;             // standalone value or empty value
console.log(h);           // null
console.log(typeof(h));   // object (bug in JavaScript)



let bigNumber = 34567890123n;
console.log(bigNumber);                 // 34567890123n
console.log(typeof(bigNumber));         // bigint



let sym1 = Symbol("descrition");        // To find unique elements
let sym2 = Symbol("descrition");        
console.log(sym1==sym2);                // false 
console.log(sym1===sym2);               // false 

//alert("Hello World");         -->>  We are using node not browser 

//---------------------------- Code Readability --------------------------------------------------
console.log(3+
    3+
    3
);                      //Code Readability should be there


//----------------------------- Type Conversion ---------------------------------------------------
let score1 = 33;
console.log(typeof score1);      // can also be written as   console.log(typeof(score1)); => Number




let score2 = "33abc";
console.log(typeof(score2));            // string

let valueInNumber = Number(score2);
console.log(typeof(valueInNumber));     // number -->> Type Conversion
console.log(valueInNumber);             // NaN (Not a Number)




let score3= null;
console.log(typeof(score3));            // object

let valueInNumber2 = Number(score3);
console.log(typeof(valueInNumber2));    // number -->> Type Conversion
console.log(valueInNumber2);            // 0




let score4= undefined;
console.log(typeof(score4));            // undefined

let valueInNumber3 = Number(score4);
console.log(typeof(valueInNumber3));    // number -->> Type Conversion
console.log(valueInNumber3);            // NaN




let score5= true;
console.log(typeof(score5));            // boolean

let valueInNumber4 = Number(score5);
console.log(typeof(valueInNumber4));    // number -->> Type Conversion
console.log(valueInNumber4);            // 1  (0 -->> if false)




let value = 1;
let booleanValue = Boolean(value);     // boolean
console.log(booleanValue);             // true 

//------------------ 1 => true  |  0 => false  |  "" => false  |  "abc" => true  ------------------



//------------------------- 1) Non-Primitive Data Types --------------------------------------------
// Also known as Reference Data Type

/*
1) Objects
2) Arrays
3) Functions
*/

const heros = ["Spiderman", "Superman", "Krishh"];      // Arrays

let myObj = {        
    name1 : "abc", 
    age : 22,
}                                                       // Object

let myFunction = function(){
    console.log("Hello");
}                                                         
    
console.log(typeof myFunction);                         // Function



//------------------------------------   Memory  ---------------------------------------------------

//------------------------------------  1) Stack  --------------------------------------------------

let orgName = "abc";
let dupName = orgName;

dupName = "xyz";

console.log(orgName);              // abc
console.log(dupName);              // xyz [Copy is created for the variable]


//------------------------------------  2) Heap  ---------------------------------------------------

let userOne = {
    email : "abcd@gmail.com",
    phNumber : 99999999999,
}

let userTwo = userOne;

userTwo.email = "xyz@gmail.com";

console.log(userOne.email);        // xyz@gmail.com
console.log(userTwo.email);        // xyz@gmail.com [Address is copied so it changes the original value]