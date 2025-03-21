// Call

function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}
  
greet.call(null, "Hello", "John"); 

// Output: Hello, John!




// Apply

function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}
  
greet.apply(null, ["Hello", "John"]); 

// Output: Hello, John!





// Bind

function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}
  
const boundGreet = greet.bind(null, "Hello"); // Creates a new function
boundGreet("MD"); 

// Output: Hello, MD!