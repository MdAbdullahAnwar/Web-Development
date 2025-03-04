//---------------------------------------------  Loops  ---------------------------------------------------------

//------------------------------------------- 1) For Loop  ------------------------------------------------------

// Basic Syntax

for(let i = 1; i <= 10; i++)
{
    const element = i;

    if(i==5)
    {
        console.log("Hello you are in the middle");
    }

    console.log(element);
}


// Nested For Loop

for(let i = 1; i <= 10; i++)
{
    
    if(i==2)
    {
        console.log("Break Detected");
        break;
    }
    else
    {
        console.log(`Table of ${i} :`)
        for(let j = 1; j <= 10; j++)
        {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}


// Break  ==>> Terminates the loop

for(let i = 1; i <= 10; i++)
{   
    if(i==5)
    {
        console.log("Hello you are in the middle so STOP");
        break;
    }
    console.log(i);    
}

// Continue  ==>> Skips Iteration

for(let i = 1; i <= 10; i++)
{   
    if(i==5)
    {
        console.log("Hello you are in the middle so CONTINUE");
        continue;
    }
    console.log(i);    
}
    

// Using Arrays with For Loop

let arr = ["Shubhman", "Rohit", "Virat", "Shreyas", "Rahul", "Surya"];
for(let i=0; i<arr.length;i++)
{
    console.log(`Batsman No. ${i+1} : ${arr[i]}`);
}



//------------------------------------------- 2) While Loop  ----------------------------------------------------

// Basic Syntax
let index = 0;
while(index <= 10)
{
    console.log(index);
    index = index + 2;
}


// Using Arrays with While Loop

let arr2 = ["Doremon", "ShinChan", "Kitretsu"];
let counter = 0; 
while(counter < arr2.length)
{
    console.log(`Cartoon Name : ${arr2[counter]}`);
    counter++;
}



//----------------------------------------- 3) Do While Loop  ---------------------------------------------------

let number = 10;
do{
    console.log(number);
    number++;
}while(number < 5)              // Atleast run one time then condition is checked



//--------------------------------------  Loops used for Arrays  ------------------------------------------------
//------------------------------------------- 4) For-Of Loop  ---------------------------------------------------

//---- Senario 1: ["","",""]  ---- Senario 2: [{},{},{}]

// Senario 1--------------------------------------------

// Numbers

let num = [1,2,3,4,5];
for(const i of num)
{
    console.log(i);
}

/* Output INDEX will not be printed only VALUE
1
2
3
4
5
*/

// Strings

let greeting = "Hello World!";
for(const greet of greeting)
{
    console.log(greet === " " ? "Character is Space" : `Character is ${greet}`);
}


// Maps

const map = new Map();
map.set('IN' , "India");
map.set('SK' , "South Korea");
map.set('UK' , "United Kingdom");
//map.set('IN' , "Indonasia");     ==>> Replaces value (India to Indonasia) if the key is same 
console.log(map);

/* Output KEY with its VALUE
Map(3) {
  'IN' => 'India',
  'SK' => 'South Korea',
  'UK' => 'United Kingdom'
}
*/

for (const key of map) {
    console.log(key);
}

/* Output KEY with its VALUE
[ 'IN', 'India' ]
[ 'SK', 'South Korea' ]
[ 'UK', 'United Kingdom' ]
*/


for (const [key] of map) {
    console.log(key);
}

/* Output
IN
SK
UK
*/

for(const [key,value] of map) {
    console.log(key, ":-" ,value);
}

/* Output
IN :- India
SK :- South Korea
UK :- United Kingdom
*/


// Senario2---------------------------------------------
// Objects [{},{},{}]

/*
const myObj={
    "game1" : "NFS",
    "game2" : "IGI"
}

for(const [key,value] of myObj) {
    console.log(key, ":-" ,value);
}

------------------------------------------------
ERROR : Objects are not iterable in FOR OF LOOP
------------------------------------------------
*/



//--------------------------------------  Loops used for Objects  ------------------------------------------------
//------------------------------------------- 5) For-In Loop  ----------------------------------------------------

//---- Senario 1: => Objects [{},{},{}] ---- Senario 2: => Arrays ["","",""]


// Senario 1: => Objects [{},{},{}]

const myObj1 = {
    "JS" : "JavaScript",
    "TS" : "TypeScript",
    "PY" : "Python"
}

for (const key in myObj1) {
    console.log(`${key} is shortcut for ${myObj1[key]}`);
}

/* Output
JS is shortcut for JavaScript
TS is shortcut for TypeScript
PY is shortcut for Python
*/


// Senario 2: => Arrays ["","",""]

const progLang = ["C++", "Java", "JavaScript", "Python"];
for(const key in progLang)
{
    console.log(key,progLang[key]);
}

/* Output INDEX also gets printed
0 C++
1 Java
2 JavaScript
3 Python
*/

for(const key in progLang)
{
    console.log(progLang[key]);
}

/* Output to avoid INDEX getting print
C++
Java
JavaScript
Python
*/


// Maps----------------------------

/*
const map2 = new Map();
map2.set('IN' , "India");
map2.set('SK' , "South Korea");
map2.set('UK' , "United Kingdom"); 

for (const key in map2) {
    console.log(key);
}

--------------------------------------------------------------------
No ERROR but still using FOR IN LOOP we cannot itterate through Map
--------------------------------------------------------------------

*/



//------------------------------------------- 6) forEach Loop  ----------------------------------------------------


const sports = ["Cricket", "Soccer", "Hockey"];

/*
1) Call Back Function--------------------------

sports.forEach( function (value) {
    console.log(`Sports Name : ${value}`);
});

OUTPUT:
Sports Name : Cricket
Sports Name : Soccer
Sports Name : Hockey
*/


/*
2) Arrow Function------------------------------

sports.forEach( (value) => {
    console.log(`Sports Name : ${value}`);
});

OUTPUT:
Sports Name : Cricket
Sports Name : Soccer
Sports Name : Hockey
*/


/*
3)---------------------------------------------

function printMe(value)
{
    console.log(value);
}

sports.forEach(printMe);

OUTPUT:
Cricket
Soccer
Hockey
*/


/*
4)---------------------------------------------

sports.forEach( (item, index, array) => {
    console.log(item, index, array);
});

OUTPUT:
Cricket 0 [ 'Cricket', 'Soccer', 'Hockey' ]
Soccer 1 [ 'Cricket', 'Soccer', 'Hockey' ]
Hockey 2 [ 'Cricket', 'Soccer', 'Hockey' ]
*/


/*
5)---------------------------------------------

const values = sports.forEach( (item) => {
    return item;
});

console.log(values);

OUTPUT: undefined
*/



//---------------------------------------------
// Array ==>> Object ==>> Value 

const phone = [
    {
        phoneName : "1Plus",
        phoneRam : "8GB"
    },
    {
        phoneName : "IPhone",
        phoneRam : "12GB"
    },
    {
        phoneName : "RealMe",
        phoneRam : "4GB"
    },
    {
        phoneName : "Oppo",
        phoneRam : "6GB"
    },
];

phone.forEach( (item) => {
    console.log(item.phoneName);
});

/* OUTPUT
1Plus
IPhone
RealMe
Oppo
*/




//-------------------------------------------  Strings  ----------------------------------------------------------

// 1) Concatenation--------------------------
let ip1 = "Hindi "; 
let ip2 = "English";

let op1 = ip1 + ip2;
console.log(op1);               // Hindi English

let op2 = `${ip1} and ${ip2}`;
console.log(op2);               // Hindi  and English

let op3 = 'ip1 + ip2';
console.log(op3);               // ip1 + ip2

let op4 = `${ip1} + ${ip2}`;
console.log(op4);               // Hindi  + English 

let op5 = `${ip1}${ip2}`;
console.log(op5);               // Hindi English

console.log(`My mother tongue is ${ip1.toUpperCase()} and I also know ${ip2.toLowerCase()}`);
// My mother tongue is HINDI  and I also know english


let newIp = new String("HolaAmigos");
console.log(newIp[4]);                  // A
console.log(newIp.__proto__);           // {}



// 2) length---------------------------------

console.log(newIp.length);              // 10


// 3) toUpperCase()--------------------------

console.log(newIp.toUpperCase());       // HOLAAMIGOS


// 4) toLowerCase()--------------------------

console.log(newIp.toLowerCase());       // holaamigos


// 5) substring()----------------------------

console.log(newIp.substring(0,7));      // HolaAmi


// 6) split()--------------------------------

let sentence = "Hello Jee Kaise Ho Saare";
let words = sentence.split(' ');
console.log(words);                     // [ 'Hello', 'Jee', 'Kaise', 'Ho', 'Saare' ]


// let sentence2 = "HelloJee" Kaise "Ho Saare";         ERROR => 2 Strings ["HelloJee" , "Ho Saare"]


let sentence2 = "HelloJee \" Kaise \"Ho Saare";         
console.log(sentence2);                                 // HelloJee " Kaise "Ho Saare


// let sentence3 = "Hello \ Jee \ Kaise \ Ho \ Saare";
// let words3 = sentence3.split('\');                   // ERROR : SyntaxError: Invalid or unexpected token


let sentence4 = "Hello \\ Jee \\ Kaise \\ Ho \\ Saare";
let words4 = sentence4.split('\\');                     
console.log(words4);                                    // [ 'Hello ', ' Jee ', ' Kaise ', ' Ho ', ' Saare' ]


// 7) join()---------------------------------

console.log(words4.join(','));                          // Hello , Jee , Kaise , Ho , Saare
console.log(words4.join('-'));                          // Hello - Jee - Kaise - Ho - Saare


// 8) charAt()-------------------------------

console.log(sentence4.charAt(1));                       // e


// 9) indexOf()------------------------------

console.log(sentence4.indexOf('e'));                    // 1 => 1st e is at Index 1


// 10) slice()-------------------------------

let part = sentence4.slice(2,10);
console.log(part);                                      // llo \ Je


// 11) trim()--------------------------------

let newStr = "   Hello   ";
console.log(newStr);                                    //    Hello
console.log(newStr.trim());                             // Hello


// 12) replace()-----------------------------

let url = "https://JavaScript.com/JS%20programming";
console.log(url.replace('%20','-'));                    // https://JavaScript.com/JS-programming


// 13) includes()----------------------------

console.log(url.includes('hello'));                     // false
console.log(url.includes('program'));                   // true
