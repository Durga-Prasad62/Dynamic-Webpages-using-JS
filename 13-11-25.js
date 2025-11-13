// 🧠 10 MCQs on DOM Methods & Field Access
// Which method is used to create a new HTML element in the DOM?
//  a) createNode()
//  b) createElement()
//  c) newElement()
//  d) appendElement()
// b



// What does appendChild() do?
//  a) Creates a new element
//  b) Adds an existing/new element as a child to another element
//  c) Removes a child node
//  d) None of the above
// b

// What will document.querySelector('.item') return?
//  a) All elements with class item
//  b) The first element with class item
//  c) A list of nodes
//  d) None
// b

// What is returned by document.querySelectorAll('p')?
//  a) Array of all <p> elements
//  b) NodeList of all <p> elements
//  c) HTMLCollection
//  d) Only one element
// b

// Which method removes a specific child element from its parent?
//  a) deleteChild()
//  b) remove()
//  c) removeChild()
//  d) destroyChild()
// c

// Which of the following can access an input field by its name?
//  a) document.forms["formName"]["fieldName"]
//  b) document.fieldName
//  c) document.getElementByName()
//  d) document.querySelectorName()
// a

// What type does document.querySelectorAll() return?
//  a) Array
//  b) HTMLCollection
//  c) NodeList
//  d) Object
// c
// Which is correct syntax to access input value using id?
//  a) document.getElementById("user").textContent
//  b) document.getElementById("user").value
//  c) document.getElementById("user").innerText
//  d) document.querySelector("user").input
//  a

// What will happen if you call appendChild() on an element already in the DOM?
//  a) Error occurs
//  b) The element is duplicated
//  c) The element is moved to new position
//  d) Nothing happens
// c

// What is the difference between querySelector and getElementById?
//  a) Both same
//  b) querySelector accepts any CSS selector
//  c) getElementById returns NodeList
//  d) querySelector only works for IDs
// b

// ⚙️ 10 Output-Based Questions


// let p = document.createElement('p');
// p.innerText = "Hello DOM";
// document.body.appendChild(p);

// ✅ Output: A paragraph with text “Hello DOM” added to the page.



// let div = document.querySelector('div');
// let span = document.createElement('span');
// span.textContent = "New Text";
// div.appendChild(span);

// ✅ Output: A new <span> with “New Text” added inside the first <div>.



// let li = document.querySelectorAll('li');
// console.log(li.length);

// ✅ Output: Number of <li> elements on the page.



// let el = document.querySelector('.box');
// el.remove();

// ✅ Output: The element with class box is removed from DOM.



// let input = document.querySelector('#name');
// input.value = "John";
// console.log(input.value);

// ✅ Output: John



// let ul = document.createElement('ul');
// let li = document.createElement('li');
// li.innerText = "Item 1";
// ul.appendChild(li);
// document.body.appendChild(ul);

// ✅ Output: A new unordered list <ul> with one list item “Item 1”.



// let items = document.querySelectorAll('.item');
// items[0].textContent = "Updated Item";

// ✅ Output: The text of first .item element changes to “Updated Item”.



// let para = document.createElement('p');
// para.innerHTML = "<b>Hello</b> World";
// document.body.appendChild(para);

// ✅ Output: A paragraph with bold “Hello” and normal “World”.



// let div = document.createElement('div');
// let span = document.createElement('span');
// div.appendChild(span);
// div.removeChild(span);
// console.log(div.children.length);

// ✅ Output: 0



// document.querySelectorAll('p').forEach(el => el.style.color = 'red');

// ✅ Output: All <p> text turns red.

// 💻 Mini Task: Dynamic Form List App
// Note : Pick any one Task
// 🎯 Task_1 :
// Create a small app to add and remove student names using DOM methods.
// 📋 Requirements
// One input box and two buttons — Add and Remove Last


// When “Add” is clicked →


// Create <li> dynamically using createElement()


// Append it to <ul> using appendChild()


// When “Remove Last” is clicked →


// Remove last <li> using removeChild()


// Use querySelector and querySelectorAll to access and modify DOM elements.


// 🎯 Task_2:
// Create a small app create 10 elements and access using querySelector and querySelectorAll and modify content and color




