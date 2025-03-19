// Async Functions:

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Waits for the Promise
      const data = await response.json(); // Waits for JSON conversion
      console.log("Data fetched:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchData();

  



// Chaining with Async Functions:

async function task1() {
    return "Task 1 completed";
  }
  
  async function task2() {
    return "Task 2 completed";
  }
  
  async function runTasks() {
    const result1 = await task1();
    console.log(result1);
  
    const result2 = await task2();
    console.log(result2);
  }
  
  runTasks();
  