//Creating Elements in the DOM

const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add ID
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New Item');

//Create text node and append
li.appendChild(document.createTextNode('Hello WOrld'));
//li.textContent = 'Hello world';

//Create new link element
const link = document.createElement('a');
//Add classes
link.className = 'delete-item secondary-content';
//Add icon html
link.innerHTML = '<i class = "fa fa-remove"></i>';

//Append link into li
li.appendChild(link);


//Append lis as child to ul
document.querySelector('ul.collection').appendChild(li);


//