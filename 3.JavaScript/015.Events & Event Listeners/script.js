// 1. Adding Event Listeners

element.addEventListener(event, callbackFunction);

// Example: Click Event

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});



// 2. Common Event Types

// Mouse Events

document.getElementById("box").addEventListener("mouseover", function() {
    console.log("Mouse is over the box!");
});


// Keyboard Events


document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});


// Form Events


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
    alert("Form Submitted!");
});


// Window Events


window.addEventListener("resize", function() {
    console.log("Window resized!");
});



// 3. Removing Event Listeners


function handleClick() {
    console.log("Clicked!");
}

// Adding event listener
document.getElementById("btn").addEventListener("click", handleClick);

// Removing event listener
document.getElementById("btn").removeEventListener("click", handleClick);



// 4. Event Bubbling & Capturing

// Events propagate through the DOM in two phases:
// Capturing Phase (Trickling down) – From the root to the target element.
// Bubbling Phase (Propagating up) – From the target element back to the root.

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent Clicked!");
}, true); // `true` enables capturing phase

document.getElementById("child").addEventListener("click", function() {
    console.log("Child Clicked!");
});

event.stopPropagation();



// 5. Delegation (Event Delegation)


document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        alert(`Clicked on ${event.target.innerText}`);
    }
});



// 6. Passive Event Listeners

window.addEventListener("scroll", function() {
    console.log("Scrolling...");
}, { passive: true });




// 7. Once Event Listeners

document.getElementById("btn").addEventListener("click", function() {
    console.log("This will run only once!");
}, { once: true });