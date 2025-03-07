//----------------------------------------- Variable Scoping ----------------------------------------------------

// 1) Global Scope ------------------------


var age = 15;

console.log(age);

{
    console.log(age);           // 15
}

if(true)
{
    console.log(age);           // 15
}

for(let i=0;i<1;i++)
{
    console.log(age);           // 15
}

function sayHello() {
    console.log(age);           // 15
}
sayHello();

// In Global Scope variable is available for all the entities below its declaration in case of let and const Keywords



// 2) Function Scope-----------------------

function sayHello2() {
    var name1 = "Earth";
    console.log(name1);         // Earth
}
sayHello2();

// console.log(name1);         ReferenceError: name1 is not defined   ==>>  Out of Function Scope        



// Lexical Scoping

function outer() {
    let x = 10;
    function inner() {
        console.log(x);         // 10  ==>> x is accessible here (lexical scope)
    }
    inner();
}
outer();

// Inner functions can access variables from their outer (enclosing) functions, but not vice versa. 



// 3) Block Scope--------------------------

{
    var height = 180;
}
console.log(height);            // 180


console.log(weight);            // undefined [No Error -->> Variable Hoisting]
{
    var weight = 65;
}


/*

{
    let year = 2025;
}
console.log(year);              // ReferenceError: year is not defined

{
    const month = "January";
}
console.log(month);             // ReferenceError: month is not defined 


let and const can't be accessed outside Block Scope i.e., {}

*/



//---------------------------------------- Temporal Dead Zone ---------------------------------------------------

console.log(marks);
console.log("abcd");
console.log(1234);
console.log(true);
const marks = 100;
console.log(marks);

// Line No 80 to Line No 84 is Temporal Dead Zone because Marks do exist but it is not possible to access its value in let & const keyword case.

