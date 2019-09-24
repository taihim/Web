//DOM single element selectors
let val;

//document.getElementId()
val = document.getElementById('task-title');

//Get things from element
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;

//Change styling
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#333';
taskTitle.style.padding= '5px';

//Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style = "color:red">Woah</span>'


//querySelector

val = document.querySelector('h5'); //can grab element by any attribute
val = document.querySelector('#task-title'); //if multiple elements, gets first one 
val = document.querySelector('.card-title');

document.querySelector('li').style.color = 'red'; //First li returned and styled red
document.querySelector('ul li').style.color = 'blue'; //selector can be nested too

document.querySelector('li:last-child').style.color = 'red'; //selecting other elements via pseudoclasses
document.querySelector('li:nth-child(3)').style.color = 'yellow';


console.log(val);

//DOM multiple element selectors

//document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item');

console.log(items);

items[0].style.color = 'red';
items[3].innerText = 'yoooo';

//Restricting amount of elements returned to only those within a ul using querySelector
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);


//document.getElementsByTagName()
let items2 = document.getElementsByTagName('li');



items2[0].style.color = 'red';
items2[3].innerText = 'yoooo';

console.log(items2);


//converting collection to array
items2 = Array.from(items2);
items2.reverse();

items2.forEach(function(lis, index){
    console.log(lis.className);
    console.log(`${index}: Hello`);

});




//document.querySelectorAll()

// let items3 = document.querySelectorAll() 
//returns a nodeList instead of a collection
//can use forEach() with nodeLists directly
const items3 = document.querySelectorAll('ul.collection li.collection-item');

console.log(items3);

items3.forEach(function(lel,index){
    lel.textContent = `${index}: Ya`;
});


const liOdd = document.querySelectorAll('ul.collection li.collection-item:nth-child(odd)');
const liEven = document.querySelectorAll('ul.collection li.collection-item:nth-child(even)');


liOdd.forEach(function(li,index){
    li.style.background = '#333';
});


