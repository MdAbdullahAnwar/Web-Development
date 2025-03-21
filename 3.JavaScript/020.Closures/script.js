// Example of a Closure:

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const closureExample = outerFunction("Outside"); // Create a closure
closureExample("Inside"); // Access both outer and inner variables


// Output:

// Outer Variable: Outside
// Inner Variable: Inside



function counter() {
    let count = 0; // Private variable
    return {
      increment: () => count++,
      getCount: () => count,
    };
  }
  
const myCounter = counter();
myCounter.increment();
console.log(myCounter.getCount()); 


// Output: 1


  
// Currying: 
function multiply(a) {
    return function (b) {
      return a * b;
    };
}
  
const double = multiply(2);
console.log(double(5)); 


// Output: 10
  
