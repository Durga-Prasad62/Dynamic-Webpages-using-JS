// # 💡 MCQs (DOM Access, Content & Append/Remove)
// # 1️⃣ Which method returns an element with a specific ID?
// #  a) getElementsById()
// #  b) getElementById()
// #  c) querySelectorAll()
// #  d) getById()
// #  
// #  a 



// # 2️⃣ What is the output type of getElementsByClassName()?
// #  a) Array
// #  b) NodeList
// #  c) HTMLCollection
// #  d) Object
// # c

// # 3️⃣ What’s the main difference between querySelector() and querySelectorAll()?
// #  a) One uses ID, another uses class
// #  b) One returns a single element, another returns multiple
// #  c) Both return arrays
// # b

// # 4️⃣ Which property returns only visible text of an element?
// #  a) innerText
// #  b) textContent
// #  c) innerHTML
// # a

// # 5️⃣ Which property allows reading and writing HTML tags inside an element?
// #  a) innerText
// #  b) textContent
// #  c) innerHTML
// c



// # 6️⃣ Which method is used to add a new child element to a parent?
// #  a) addChild()
// #  b) appendChild()
// #  c) pushChild()
// b

// # 7️⃣ Which method removes an existing child node from a parent?
// #  a) deleteChild()
// #  b) removeChild()
// #  c) clearChild()
// b



// # 8️⃣ What’s the difference between appendChild() and append()?
// #  a) appendChild() adds multiple nodes, append() adds one
// #  b) appendChild() adds one node, append() can add text or multiple nodes
// b



// # 9️⃣ What is returned by document.getElementsByTagName('p')?
// #  a) The first <p> element
// #  b) A collection of all <p> elements
// #  c) The last <p> 
// b
// # 10️⃣ Which property is faster when reading large text content (ignores CSS)?
// #  a) innerText
// #  b) textContent
// b

// # ⚙️ Output-Based Questions


//  <div id="test">Hello <b>World</b></div>
// <script>
//   console.log(document.getElementById("test").innerText);
//   console.log(document.getElementById("test").innerHTML);
//  </script>

// # 👉 Output:
// Hello World
// Hello <b>World</b>




//  <p class="msg">Hi</p>
//  <script>
//   const msg = document.getElementsByClassName("msg");
//   console.log(msg[0].textContent);
//  </script>
//  👉 Output:
// Hi




// # <ul id="list"><li>One</li></ul>
// # <script>
// #   const ul = document.getElementById("list");
// #   const li = document.createElement("li");
// #   li.innerText = "Two";
// #   ul.appendChild(li);
// #   console.log(ul.innerHTML);
// # </script>


// # 👉 Output:
// <li>One</li><li>Two</li>





// # <div id="demo">Text</div>
// # <script>
// #   document.querySelector("#demo").append(" JS");
// #   console.log(document.getElementById("demo").textContent);
// # </script>


// # 👉 Output:
// Text JS




// # <ul id="items">
// #   <li>Apple</li>
// #   <li>Banana</li>
// # </ul>
// # <script>
// #   const list = document.getElementById("items");
// #   list.removeChild(list.firstElementChild);
// #   console.log(list.innerText);
// # </script>

// # 👉 Output:
//  BANANA


// # 🧩 Mini Task – “Add & Remove Student Names”

// # Pick any one Task

// # 🎯 Goal _1 :
// # Display a list of student names inside <ul>.


// # When the “Add Name” button is clicked → new <li> gets added.


// # When “Remove Last” button is clicked → last <li> gets removed.
// # Or 
 
// #  🎯 Goal_2 :
// # Modify content all elements using 5 methods(Id,Tag,query,className and 3 properties(inner HTML,innerText,textContent)
// # Use for loop to reduce the lines of code


// # Or 
// #   🎯 Goal_3:
// # Online Toss App 
// # Reference Link :https://app-sorteos.com/en/apps/flip-a-coin-online

    


