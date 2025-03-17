// Promises: 

const fetchData = new Promise((resolve, reject) => {
    const data = true; // Simulating success
    setTimeout(() => {
      if (data) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data!");
      }
    }, 1000); // Simulates 1-second delay
  });
  
  // Using the Promise
  fetchData
    .then((result) => {
      console.log(result); // Logs: "Data fetched successfully!"
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Operation completed!");
    });

    



// Chaining Promises: 

const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1 completed"), 1000));
const task2 = () => new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 1000));

task1()
  .then((result1) => {
    console.log(result1);
    return task2();
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
