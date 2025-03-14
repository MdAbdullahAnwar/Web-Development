// What is the DOM?
// The DOM (Document Object Model) is a tree structure representation of an HTML document that JavaScript can manipulate.

// Example of an HTML DOM Tree:

// html
// Copy
// Edit
// <html>
//   <head>
//     <title>My Page</title>
//   </head>
//   <body>
//     <h1>Hello, World!</h1>
//     <p>This is a paragraph.</p>
//   </body>
// </html>


// The DOM represents the HTML elements in a hierarchical structure.


 
// Accessing Elements:

// We can select elements in different ways.



// 1. Using getElementById()

// html

// <p id="message">Hello!</p>
// <script>
//   let msg = document.getElementById("message");
//   console.log(msg.innerText); // Output: Hello!
// </script>



// 2. Using getElementsByClassName()

// html

// <p class="text">Paragraph 1</p>
// <p class="text">Paragraph 2</p>
// <script>
//   let texts = document.getElementsByClassName("text");
//   console.log(texts[0].innerText); // Output: Paragraph 1
// </script>



// 3. Using getElementsByTagName()

// html

// <p>First paragraph</p>
// <p>Second paragraph</p>
// <script>
//   let paragraphs = document.getElementsByTagName("p");
//   console.log(paragraphs[1].innerText); // Output: Second paragraph
// </script>



// 4. Using querySelector() & querySelectorAll()

// html

// <p class="para">Hello</p>
// <p class="para">World</p>
// <script>
//   let firstPara = document.querySelector(".para"); // Selects first match
//   let allParas = document.querySelectorAll(".para"); // Selects all matches

//   console.log(firstPara.innerText); // Output: Hello
//   console.log(allParas[1].innerText); // Output: World
// </script>



// 5. Modifying Elements

// We can change HTML content, attributes, and styles.

// Changing Text Content (innerText & textContent)

// html

// <p id="text">Hello!</p>
// <script>
//   let para = document.getElementById("text");
//   para.innerText = "Welcome!";
// </script>
// innerText changes only visible text, while textContent changes all text.


// 6. Changing HTML Content (innerHTML)

// html

// <p id="text">Old Text</p>
// <script>
//   document.getElementById("text").innerHTML = "<strong>New Text</strong>";
// </script>
// Modifying Attributes (setAttribute() & getAttribute())
// html
// Copy
// Edit
// <img id="myImage" src="old.jpg">
// <script>
//   let img = document.getElementById("myImage");
//   img.setAttribute("src", "new.jpg");
//   console.log(img.getAttribute("src")); // Output: new.jpg
// </script>



// 7. Modifying Styles (style property)

// html

// <p id="text">Hello!</p>
// <script>
//   let para = document.getElementById("text");
//   para.style.color = "red";
//   para.style.fontSize = "20px";
// </script>
// Creating & Removing Elements



// 8. Creating Elements (createElement() & appendChild())

// html

// <div id="container"></div>
// <script>
//   let newPara = document.createElement("p");
//   newPara.innerText = "New Paragraph";
  
//   document.getElementById("container").appendChild(newPara);
// </script>



// 9. Removing Elements (removeChild())

// html

// <ul id="list">
//   <li>Item 1</li>
//   <li id="item2">Item 2</li>
// </ul>
// <script>
//   let list = document.getElementById("list");
//   let item2 = document.getElementById("item2");

//   list.removeChild(item2); // Removes "Item 2"
// </script>



// 10. Event Handling
// Events allow interaction with the webpage.

// Using onclick Event

// html

// <button onclick="alert('Button Clicked!')">Click Me</button>
// Using addEventListener()
// html
// Copy
// Edit
// <button id="btn">Click Me</button>
// <script>
//   document.getElementById("btn").addEventListener("click", function() {
//     alert("Button Clicked!");
//   });
// </script>



// 11. Traversing the DOM

// Parent, Child, and Sibling Nodes

// html

// <div id="parent">
//   <p id="child">Hello</p>
// </div>
// <script>
//   let child = document.getElementById("child");
  
//   console.log(child.parentElement); // Access parent
//   console.log(child.nextElementSibling); // Access next sibling
//   console.log(child.previousElementSibling); // Access previous sibling
// </script>



// 12. Class Manipulation

// Adding, Removing & Toggling Classes

// html

// <p id="text" class="red">Hello</p>
// <script>
//   let para = document.getElementById("text");

//   para.classList.add("bold");  // Adds class
//   para.classList.remove("red");  // Removes class
//   para.classList.toggle("hidden");  // Toggles class on/off
// </script>