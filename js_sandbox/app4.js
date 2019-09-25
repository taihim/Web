//Traversing the DOM

let val;


const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;


//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document
// 10 - Doctype



//Get children returns only elements as HTML collection
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Yp';

//Children of children
val = list.children[3].children[0];


//First child
val = list.firstChild; //Works like child node
val = list.firstElementChild; //Returns first element child


//Last child
val = list.lastChild;
val = list.lastElementChild;



//Count
val = list.childElementCount; // Returns number of child elements


//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement; //Returns parent of parent


//Get next sibling
val = listItem.nextSibling; //Returns first node sibling after listItem 
val = listItem.nextElementSibling;

//Get previous sibling
val = listItem.previousSibling; // Returns first node sibling before listItem
val = listItem.previousElementSibling; //Returns null since listItem contains first child



console.log(val);