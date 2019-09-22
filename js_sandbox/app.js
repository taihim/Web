// console.time('yeet');
// console.log("Yoo");
// console.warn("Stahp");
// console.log([1,2,3,4,5]);

// console.log({a:1, b:2});

// console.table({a:1, b:2});

// console.table([1,2,3]);

// console.error("Some error");

// console.timeEnd('yeet');

// document.querySelector('#h').style.color = 'red';
// console.clear();



// //var, let, const used to define variables in JS

// // var name = "Taimur";
// // console.log(name);
// // name = "Waleed";
// // console.log(name);

// // //Init var
// // var greeting; //undefined for now
// // console.log(greeting);
// // greeting = "hello";
// // console.log(greeting);



// //Let
// // let name = "Taimur";
// // console.log(name);
// // name = "Waleed";
// // console.log(name);


// //const
// const name = "Taimur";
// console.log(name);
// // const age; // cant leave const undefined
// //name = "Waleed"; // cant reassign const

// //const arrays or objects can have their data changed, just cant be reassigned to any other object/array
// const person = {
//     name: "John",
//     age: 30
// }

// person.name = "Waleed"
// person.age = 20;
// console.log(person);

// const array = [1,2,3,4,5];

// array.push(2);
// console.log(array);

// //Always use const unless values change, need to init or its an iterator


// //Primitive data types: String, number, boolean, null, undefined, Symbols(ES6)
// //Reference types: Arrays, object literals, functions, dates, object wrappers

// //JS is dynamically typed, types are associated with values not variables
// //same variable can hold any data type


// //String
// const string = "Taimur";
// //Number
// const x = 12;
// //Boolean
// const y = true;
// //null
// const z = null;

// //undefined
// let a;

// //Symbol
// const sym = Symbol();

// console.log(typeof sym);


// //Reference types - Objects

// //Array
// const num = [1,2,3,4];
// //Object literal
// const address = {
//     city: 'Boston',
//     street: 1
// }

// //Date
// const today = new Date();

// console.log(typeof today);



// //Type conversion

// let val;

// //Number to string
// val = String(3+2);

// //Bool to string
// val = String(true);

// //Date to string
// val = String(new Date());

// //Array to string
// val = String([1,2,3,4,5]);

// //toString()
// val = (5).toString();
// val = (true).toString();

// //String to number
// val = Number('5.55555'); 

// //Bool to number
// val = Number(true); // val = 1

// //Null to number
// val = Number(null); // val = 0

// //NaN
// val = Number('hello'); // not a number
// val = Number([1,2,3]); // not a number

// //parseInt()
// val = parseInt('100');
// val = parseFloat('100.30')



// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));



// //Type coercion
// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);



// //Numbers


// const num1 = 100;
// const num2 = 50;
// let value;



// value = num1 + num2;
// value = num1 - num2;
// value = num1 / num2;
// value = num1 * num2;
// value = num1 % num2;

// //Math object

// value = Math.PI;
// value = Math.E;

// value = Math.round(2.4);
// value = Math.ceil(2.4);
// value = Math.floor(2.4);
// value = Math.sqrt(64);
// value = Math.abs(-2.4);
// value = Math.pow(8,2);
// value = Math.min(2.4, 2.2,2.3,2.5);
// value = Math.max(2.4, 2.2,2.3,2.5);

// value = Math.random(); //random decimal

// value = Math.floor(Math.random() * 50 + 1);//Random whole number between 1 and 50

// console.log(value);


// console.clear();

// //Strings and concatenation
// const firstName = "Taimur";
// const lastName = "Ibrahim";

// let value2;

// //Concatenation
// value2 = firstName + ' ' + lastName;

// //Append
// value2 = "Waleed ";
// value2 += "Ibrahim";


// //Concatenating strings and variables
// value2 = "Hello my name is " + firstName + ' ' + lastName; 

// //Escaping
// value2 = 'That\'s awesome, I can\'t wait'; // \ makes the following character a regular character

// //concat
// value2 = firstName.concat(' ', lastName);

// //Change case
// value2 = firstName.toLowerCase();
// value2 = firstName.toUpperCase();


// //String as array
// value2 = firstName[0];

// //indexof
// value2 = firstName.indexOf('m'); // gives index of first m starting from the left
// value2 = firstName.lastIndexOf('m'); // gives index of first m starting from the right

// //charAt()
// value2 = firstName.charAt('2'); //returns character at specified index


// //get last char of string
// value2 = firstName.charAt(firstName.length-1);

// //substring()
// value2 = firstName.substring(3,5);

// //slice()
// value2 = firstName.slice(0,4);
// value2 = firstName.slice(-3); //starts from the end of string

// const str = "Hello, what you up to?";

// //split()
// value2 = str.split(',');

// //replace()
// value2 = str.replace('Hello', 'Fool');

// //includes()
// value2 = str.includes('foo');


// //Template literals
// value2 = `Hey my name is ${firstName} ${lastName}`; //useful when writing html in JS script


// //Arrays

// const numbers = [1,2,3212,445,5,63,72];
// const numbers2 = [21,23,322,44,523,63,2];

// const foo = [1, 'lol', new Date(), true, null];

// //Insert into array
// numbers[2] = 3444;

// //Get index
// value2 = numbers.indexOf(3444);

// //Add element to end
// numbers.push(23);

// //Add element to start
// numbers.unshift(23);

// //Remove element from end
// numbers.pop();

// //Remove element from start
// numbers.shift();

// //Splice
// //numbers.splice(0,1); //removes elements between specified indices

// //Reverse
// //numbers.reverse();

// //Concatenate arrays
// value2 = numbers.concat(numbers2);


// //Sort using the 'compare' function since JS sorts numbers based on first number by default

// numbers.sort(function(x,y){
//     //return x-y; // ascending order
//     return y-x; // descending order
// })


// //Find
// function under50(num){
//     return num < 50;
// }

// value2 = numbers.find(under50); //returns first value of array less than 50

// console.log(numbers);
// console.log(numbers2);



// //Object Literals

// const person1 = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age : 23,
//     email: '123@xyz.com',
//     hobbies: ['anime', 'gaming'],
//     address: {
//         city: 'NYC',
//         state: 'NY'
//     },
//     getBirthYear: function(){
//         return 2019 - this.age; //tells us that age is referring to objects own variable
//     }
// }

// value2 = person1.firstName;
// value2 = person1.hobbies[1];
// value2 = person1.getBirthYear();
// value2 = person1.address.state;

// console.log(value2);

//Date object

// let val;

// const today = new Date();
// let bday = new Date('4-08-1996 06:00:00');

// val = today.getMonth(); //0 based so January is 0 and December is 11

// val = today.getDate();

// val = today.getDay(); //Starts at sunday i.e 0 and so on

// val = today.getFullYear();

// val = today.getHours();

// val = today.getMinutes();

// val = today.getTime(); 

// bday.setMonth(7);
// bday.setFullYear(1996);


// console.log(bday);



//Conditionals

const id = 100;

//Equal to

// if(id == 100)
// {
//     console.log("true");
// }
// else{
//     console.log('false');
// }

// //Not Equal to

// if(id != 100)
// {
//     console.log("true");
// }
// else{
//     console.log('false');
// }

// //Equal to value AND type via ===

// if(id === 100)
// {
//     console.log("true");
// }
// else{
//     console.log('false');
// }

// //Not Equal to

// if(id !== 100)
// {
//     console.log("true");
// }
// else{
//     console.log('false');
// }


// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// }
// else{
//     console.log('NO ID');
// }

// switch(id){
//     case 100:
//         console.log('lel');
//         break;
//     case 200:
//         console.log('oof');
//         break;
//     default:
//         console.log('eek');
//         break;
    
// }

//Ternary operator

// console.log(id===100?'correct': 'incorrect');



//Function declarations and Expressions

function greet(firstName = 'Taimur'){ //Default value
    return `Hello ${firstName}`;
}

// console.log(greet());


//FUNC EXPRESSIONS

const square = function(x=4){ //anonymous function
    return x*x;
}

console.log(square());




//IMMEDIATLEY INVOCABLE FUNC EXPRESSIONS - IIFE's
//Functions that are run and declared at the same time
//Useful for some design patterns like the module pattern

// (function(name = 'LOOl'){
//     console.log(`yoo ${name}`);
// })();


//PROPERTY METHODS

// const todo = {
//     add: function(){
//         console.log('Add todo');
//     },
//     edit: function(){
//         console.log('Edit..');
//     }
// }

// todo.delete = function(){
//     console.log('Delete');
// }

// todo.add();








//LOOPS AND ITERATION

//FOR LOOP

//for(let i =0; i<3; i++)
//   console.log('lel');


//WHILE LOOP

//let x = 0;
//while(x<4)
//{
//    console.log('yoo');
//    x +=1;
//}


// DO WHILE

// let x = 1;
// do{
//     console.log('yoohoo');
//     x+=1;
// }
// while(x<4);



//LOOPING THROUGH ARRAYS
// const cars = ['FORD', 'HONDA', 'TESLA', 'TOYOTA'];

//FOR EACH
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

//MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Johnsda'},
//     {id: 3, name: 'Johny'},
//     {id: 4, name: 'Johnybyt'},
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);


//FOR IN LOOP
//Used to iterate through objects

// const user = {
//     id : 1,
//     name : 'john',
//     age : 20
// }


// //x returns keys and corresponding values ae returned as shown below
// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }



//WINDOW METHODS/OBJECTS/PROPERTIES

//ALERT
// alert('Hello');

//PROMPT
// const input = prompt();
// alert(input);


//CONFIRM
// if(confirm('Are you sure'))
//     console.log('Yes');
// else
//     console.log('No');

//HEIGHT AND WIDTH PROPERTY

//let val;


// val = window.outerHeight;//Height and width of browser window
// val = window.outerWidth;
 
// val = window.innerHeight; //Height and width of page actually being shown
// val = window.innerWidth;

//SCROLL POINTS
//Good for animations while scrolling
// val = window.scrollY;
// val = window.scrollX;



// //LOCATION OBJECT
// val = window.location;
// val = window.location.hostname;
// val = window.location.href;
// val = window.location.search;


// window.location.href = 'http://google.com';
// window.location.reload();


//HISTORY OBJECT

//window.history.go(-2); //goes back specified number of sites in history
// val = window.history.length; //number of sites in history

//NAVIGATOR OBJECT
// //Used to determine user platform/OS/browser/version etc
// val = window.navigator;
// val = window.navigator.appCodeName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;




//console.log(val);




//GLOBAL SCOPE

var a = 1;
let b = 2;
const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Func scope: ', a,b,c);
// }

//     test();

if(true)
{
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('IF Scope:',a,b,c);
}

for(let a = 0; a<10; a++)
{
console.log(`loop ${a}`);}


console.log('Global Scope: ', a, b, c);



