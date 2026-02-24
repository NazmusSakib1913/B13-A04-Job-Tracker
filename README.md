<h1> 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? </h1>
<h2>Ans: getElementById  will select single element for their unique id . It will return the element directly, otherwise it will returns null if there no match can found. This is the fastest DOM selection method because every id is unique within a page.
  getElementsByClassName select all of the elements that share a given class name. It will return a live HTMLCollection. HTMLCollection meaning the collection automatically updates when the DOM will change. It can pass multiple class names separated by spaces to match elements that have all specified classes.
  querySelector returns the first element which will matche a given CSS selector string. It work with any valid CSS selector like: IDs, classes, attributes or combinations. 
  querySelectorAll will the same but it return all matching element as a static NodeList. The NodeList from querySelectorAll  will not change when the DOM will changes, unlike getElementsByClassName. </h2>
<h1> 2. How do you create and insert a new element into the DOM? </h1>
<h2>Ans: To create a new element we will use the command document like createElement('tagName'). It  will takes a string with the tag name like an argument. This will gives you a new element node and it will be only in memory and not yet on the page. After that, you can set variables like textContent, className, id to customize it. To insert the element on the page we need to use an insertion method on a parent element which is already exists. </h2>
<h1>3. What is Event Bubbling? And how does it work? </h1>
<h2>Ans: When an event  happened for a element that bubbles up to the parents ; this is event bubbling. When we click a button this click also happen on the <div>, <body> and window.</h2>
<h1>4. What is Event Delegation in JavaScript? Why is it useful? </h1>
<h2>Ans: When we putting one listener on a  parent to handle the events for all child, That is event delegation. It is useful because, It can save memory and works. </h2>
<h1>5. What is the difference between preventDefault() and stopPropagation() methods? </h1>
<h2>Ans: preventDefault() :  this function stop the browser to do something stopPropagation() : this function stop the event to going up to parents </h2>
