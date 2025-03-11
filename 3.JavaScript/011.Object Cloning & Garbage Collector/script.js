// 1. Object Cloning in JavaScript

// Shallow Copy ==>> Method 1: Using Object.assign()
const obj1 = { name: "Alice", address: { city: "New York" } };
const obj2 = Object.assign({}, obj1);

obj2.name = "Bob"; // Changes only obj2
obj2.address.city = "Los Angeles"; // Affects obj1 as well!

console.log(obj1); // { name: "Alice", address: { city: "Los Angeles" } }
console.log(obj2); // { name: "Bob", address: { city: "Los Angeles" } }


// Shallow Copy ==>> Method 2: Using Spread Operator (...)
const obj3 = { ...obj1 };
obj3.address.city = "Chicago"; // Still modifies obj1!

console.log(obj1); // { name: "Alice", address: { city: "Chicago" } }
console.log(obj3); // { name: "Bob", address: { city: "Chicago" } }



// Deep Copy ==>> Method 1: Using JSON.parse(JSON.stringify(obj))
const obj4 = JSON.parse(JSON.stringify(obj1));
obj4.address.city = "Miami"; // Does NOT affect obj1!

console.log(obj1); // { name: "Alice", address: { city: "Chicago" } }
console.log(obj4); // { name: "Bob", address: { city: "Miami" } }


// Deep Copy ==>> Method 2: Using Structured Clone (Modern Approach)
const obj5 = structuredClone(obj1);
obj5.address.city = "Houston"; // Does NOT affect obj1!

console.log(obj1); // { name: "Alice", address: { city: "Chicago" } }
console.log(obj5); // { name: "Bob", address: { city: "Houston" } }





// 2.Garbage Collection in JavaScript

// Example 1: Memory Leak Prevention
function createObject() {
    let person = { name: "John" };
  }
  
createObject(); // 'person' is not returned, so it becomes unreachable
// The Garbage Collector will remove it automatically.



// Example 2: Circular References (Problematic)
let objA = {};
let objB = { ref: objA };
objA.ref = objB; // Circular reference

objA = null;
objB = null; // Now GC can clear both objects.

