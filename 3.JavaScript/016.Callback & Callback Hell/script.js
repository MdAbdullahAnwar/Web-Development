// Callback

function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched!");
      callback();
    }, 1000); // Simulates 1-second delay
}
  
function processFetchedData() {
    console.log("Processing data...");
}
  
fetchData(processFetchedData);
  



// Callback Hell  

setTimeout(() => {
    console.log("Step 1: Fetched user data.");
    setTimeout(() => {
      console.log("Step 2: Retrieved user's orders.");
      setTimeout(() => {
        console.log("Step 3: Processed orders.");
        setTimeout(() => {
          console.log("Step 4: Sent confirmation email.");
        }, 1000);
      }, 1000);
    }, 1000);
}, 1000);



