//  Basic try...catch Example

try {
    let x = y + 10; // y is not defined (ReferenceError)
  } catch (error) {
    console.log("An error occurred:", error.message);
  }

// An error occurred: y is not defined



// Using finally

try {
    console.log("Inside try block");
    let result = 10 / 2;
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Finally block executed");
  }

// Inside try block
// Result: 5
// Finally block executed



// Handling Specific Errors

try {
    JSON.parse("{ invalid json }"); // SyntaxError
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("Syntax Error:", error.message);
    } else {
      console.log("Unknown Error:", error);
    }
  } finally {
    console.log("Execution completed");
  }

// Syntax Error: Unexpected token i in JSON at position 2
// Execution completed



// Throwing Custom Errors

function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 0)); // Will throw an error
  } catch (error) {
    console.log("Error:", error.message);
  }
  
// Error: Cannot divide by zero!
