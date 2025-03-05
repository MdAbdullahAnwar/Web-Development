//-----------------------------------------------  Functions  ---------------------------------------------------

function say() {
    console.log('A');
    console.log('B');
    console.log('C');
    console.log('D');
    console.log('E');
    console.log('F');
}

// say;         // Reference
say();          // A \n B \n C \n D \n E \n F   <= Function Execution 



function addTwoNumber(num1 ,num2){
    console.log(num1 + num2);
}


// addTwoNumber();                  // NaN
// addTwoNumber(3,5);               // 8

// addTwoNumber(3,"5");             // 35   
// addTwoNumber(3,"a");             // 3a
// addTwoNumber(3,null);            // 3
// addTwoNumber(3,undefined);       // NaN

/*
const result =addTwoNumber(3,5);     // 8
console.log("Result :", result);     // Result : undefined
*/



function addTwoNumbers(num1 ,num2){
    let res = num1 + num2;
    return res;                          // return num1 + num2;
    // console.log("hello");             // After return statements are unreachable in a scope
}
const result = addTwoNumbers(3,5);
console.log("Result :", result);        // Result : 8



function loggingIn(username){
    return `${username} just logged in`;
}

console.log(loggingIn("Mark"));         // Mark just logged in
console.log(loggingIn(""));             //  just logged in
console.log(loggingIn());               // undefined just logged in



function loggingInn(username){
    if(username === undefined)
    {
        console.log("Please enter the username");       // Please enter the username
        return;
    }
    return `${username} just logged in`;
}
console.log(loggingInn());              // undefined



function loggingInnn(username){
    if(!username)
    {
        console.log("Please enter the username");       // Please enter the username
        return;
    }
    return `${username} just logged in`;
}
console.log(loggingInnn());             // undefined



function loggingInnnn(username = "Henry"){
    if(!username)
    {
        console.log("Please enter the username");       
        return;
    }
    return `${username} just logged in`;
}
console.log(loggingInnnn());            // Henry just logged in



function loggingInnnnn(username = "Henry"){
    if(!username)
    {
        console.log("Please enter the username");       
        return;
    }
    return `${username} just logged in`;
}
console.log(loggingInnnnn("HEMAN"));    // HEMAN just logged in  ==>> HEMAN overwites Henry



// Functiion Defination ==>> Arguments  ---------------------------------------------------------------------------

function calculateCartPrice(number){
    console.log(number);
}
calculateCartPrice(2);                  // 2



function calculateCartPrice2(number){
    return number;
}
console.log(calculateCartPrice2(200, 300, 400));      // 200



function calculateCartPrice3(...number){
    return number;
}
console.log(calculateCartPrice3(200, 300, 400));      // [ 200, 300, 400 ]



function calculateCartPrice4(val1, ...number){
    return number;
}
console.log(calculateCartPrice4(200, 300, 400));      // [ 300, 400 ]



// Function Defination  ==>>  Objects as Argument  ----------------------------------------------------------------

// 1) -------------------------------------------
const user = {
    userName : "Brendon",
    age : 19
}
function handleObject(anyObject){
    console.log(`User name is ${anyObject.userName} and his age is ${anyObject.age}`);
                //User name is Brendon and his age is 19
}
handleObject(user);


// 2) -------------------------------------------
function handleObject2(anyObject){
    console.log(`User name is ${anyObject.userName} and his age is ${anyObject.age}`);
                //User name is Pat and his age is 18
}
handleObject2({
    userName : "Pat",
    age : 18
})



// Function Defination  ==>>  Array as Argument  ------------------------------------------------------------------

// 1) -----------------------------------------
const arr1 = [2,1,3,5,4];
function getArrayElement(getElement){
    return getElement[2];
}
console.log(getArrayElement(arr1));              // 3


// 2) -----------------------------------------
function getArrayElement2(getElement){
    return getElement[2];
}
console.log(getArrayElement2([200, 300, 1200, 4000]));       // 1200



// this Keyword  ==>>  refers to current object  -----------------------------------------------------------------

const user1 = {
    usersName : "Peter",
    age : 90,

    welcomeMessage : function() {
        console.log(`${this.usersName}, Welcome to the website`);
    }
}
user1.welcomeMessage();               // Peter, Welcome to the website
user1.usersName = "Sam";
user1.welcomeMessage();               // Sam, Welcome to the website



const user2 = {
    usersName2 : "Peter",
    age : 90,

    welcomeMessage : function() {
        console.log(`${this.usersName2}, Welcome to the website`);
        console.log(this);
    }
}
user2.welcomeMessage();    

/*
Peter, Welcome to the website
{
  usersName2: 'Peter',
  age: 90,
  welcomeMessage: [Function: welcomeMessage]
}
*/

user2.usersName2 = "Sam";
user2.welcomeMessage();

/*
Sam, Welcome to the website
{
  usersName2: 'Sam',
  age: 90,
  welcomeMessage: [Function: welcomeMessage]
}
*/

console.log(this);                    // {}  <<== current context is empty object in TERMINAL {Node,Dino etc}

// But in browser we will get Window Objects and not empty object because ==>> DOM 



// Printing only this keyword inside function --------------------------------------------------------------------

function chai(){
   // console.log(this);
}
//chai();

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/


function chai2(){
    let userNamed = "Akash";
    console.log(this.userNamed);            // undefined
}
chai2();



// Function Expression -------------------------------------------------------------------------------------------

let getMultiplication = function(no1, no2) {
    return no1 * no2;
}
console.log(getMultiplication(3,4));        // 12



// Arrow Function  -----------------------------------------------------------------------------------------------

const chai3 = () => {
    let userNamed = "Akash";
    console.log(this.userNamed);            // undefined
}
chai3();    


const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));                  // 7


// Implicit Return -----------------------------------------

const addTwoNum = (number1, number2) => number1 + number2;
console.log(addTwoNum(3,4));                // 7

const addTwoNum2 = (number1, number2) => (number1 + number2);
console.log(addTwoNum2(3,4));               // 7

const addTwoNum3 = (n1,n2) => ({fName : "Oggy"});
console.log(addTwoNum3(3,4));               // { fName: 'Oggy' }
//console.log(addTwoNum3);                  // [Function: addTwoNum3]
              


// ---------------------------  Immediately Invoked Function Expression (IIFE) ------------------------------------

// 2 Reasons to use IIFE are  --->>>      1) Immediate Execution      2) Avoid being polluted by global scope 

// Syntax:  (Function Defination)()

// 1) Named IIFE

(function chai() {
    console.log("DB Connected");          // DB Connected
})();


// 2) Simple IFFE

(() => {
    console.log("Hello DB");              // Hello DB
})();


((name) => {
    console.log(`${name} saying Hello DB`);          // Rahil says Hello DB
})("Rahil");

