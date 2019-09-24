//DOM Manipulation
let val;

val = document;
val = document.all; // returns all elements of the DOM as an HTML collection
val = document.all[4]; //returns a specific element from the collection

val = document.all.length; // returns number of items in DOM

//Some general properties
val = document.head;
val = document.body;
val = document.domain;
val = document.doctype;
val = document.URL;
val = document.characterSet;


//Get forms from DOM
val = document.forms; //Returns all forms in DOM as an HTML collection
val = document.forms[0]; //Select specific form
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;


//Get links
val = document.links; //Returns all links in DOM as an HTML collection
val = document.links[0]; //Select specific link
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0]; //returns collection of classes assigned to the element


//Get images
val = document.images;

//Get Scripts
val = document.scripts;
val = document.scripts[2].getAttribute('src');


//Converting HTML collection into array

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);


scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});



console.log(val);