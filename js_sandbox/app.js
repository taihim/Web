console.time('yeet');
console.log("Yoo");
console.warn("Stahp");
console.log([1,2,3,4,5]);

console.log({a:1, b:2});

console.table({a:1, b:2});

console.table([1,2,3]);

console.error("Some error");

console.timeEnd('yeet');

document.querySelector('#h').style.color = 'red';
console.clear();



//var, let, const used to define variables in JS

// var name = "Taimur";
// console.log(name);
// name = "Waleed";
// console.log(name);

// //Init var
// var greeting; //undefined for now
// console.log(greeting);
// greeting = "hello";
// console.log(greeting);



//Let
// let name = "Taimur";
// console.log(name);
// name = "Waleed";
// console.log(name);


//const
const name = "Taimur";
console.log(name);
// const age; // cant leave const undefined
//name = "Waleed"; // cant reassign const

//const arrays or objects can have their data changed, just cant be reassigned to any other object/array
const person = {
    name: "John",
    age: 30
}

person.name = "Waleed"
person.age = 20;
console.log(person);

const array = [1,2,3,4,5];

array.push(2);
console.log(array);

//Always use const unless values change, need to init or its an iterator


//Primitive data types: String, number, boolean, null, undefined, Symbols(ES6)
//Reference types: Arrays, object literals, functions, dates, object wrappers

//JS is dynamically typed, types are associated with values not variables
//same variable can hold any data type


//String
const string = "Taimur";
//Number
const x = 12;
//Boolean
const y = true;
//null
const z = null;

//undefined
let a;

//Symbol
const sym = Symbol();

console.log(typeof sym);


//Reference types - Objects

//Array
const num = [1,2,3,4];
//Object literal
const address = {
    city: 'Boston',
    street: 1
}

//Date
const today = new Date();

console.log(typeof today);



//Type conversion

let val;

//Number to string
val = String(3+2);

//Bool to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4,5]);

//toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number('5.55555'); 

//Bool to number
val = Number(true); // val = 1

//Null to number
val = Number(null); // val = 0

//NaN
val = Number('hello'); // not a number
val = Number([1,2,3]); // not a number

//parseInt()
val = parseInt('100');
val = parseFloat('100.30')



console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));



//Type coercion
const val1 = '5';
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);



//Numbers


const num1 = 100;
const num2 = 50;
let value;



value = num1 + num2;
value = num1 - num2;
value = num1 / num2;
value = num1 * num2;
value = num1 % num2;

//Math object

value = Math.PI;
value = Math.E;

value = Math.round(2.4);
value = Math.ceil(2.4);
value = Math.floor(2.4);
value = Math.sqrt(64);
value = Math.abs(-2.4);
value = Math.pow(8,2);
value = Math.min(2.4, 2.2,2.3,2.5);
value = Math.max(2.4, 2.2,2.3,2.5);

value = Math.random(); //random decimal

value = Math.floor(Math.random() * 50 + 1);//Random whole number between 1 and 50

console.log(value);


console.clear();

//Strings and concatenation
const firstName = "Taimur";
const lastName = "Ibrahim";

let value2;

//Concatenation
value2 = firstName + ' ' + lastName;

//Append
value2 = "Waleed ";
value2 += "Ibrahim";


//Concatenating strings and variables
value2 = "Hello my name is " + firstName + ' ' + lastName; 

//Escaping
value2 = 'That\'s awesome, I can\'t wait'; // \ makes the following character a regular character

//concat
value2 = firstName.concat(' ', lastName);

//Change case
value2 = firstName.toLowerCase();
value2 = firstName.toUpperCase();


//String as array
value2 = firstName[0];

//indexof
value2 = firstName.indexOf('m'); // gives index of first m starting from the left
value2 = firstName.lastIndexOf('m'); // gives index of first m starting from the right

//charAt()
value2 = firstName.charAt('2'); //returns character at specified index


//get last char of string
value2 = firstName.charAt(firstName.length-1);

//substring()
value2 = firstName.substring(3,5);

//slice()
value2 = firstName.slice(0,4);
value2 = firstName.slice(-3); //starts from the end of string

const str = "Hello, what you up to?";

//split()
value2 = str.split(',');

//replace()
value2 = str.replace('Hello', 'Fool');

//includes()
value2 = str.includes('foo');


//Template literals
value2 = `Hey my name is ${firstName} ${lastName}`; //useful when writing html in JS script


//Arrays

const numbers = [1,2,3212,445,5,63,72];
const numbers2 = [21,23,322,44,523,63,2];

const foo = [1, 'lol', new Date(), true, null];

//Insert into array
numbers[2] = 3444;

//Get index
value2 = numbers.indexOf(3444);

//Add element to end
numbers.push(23);

//Add element to start
numbers.unshift(23);

//Remove element from end
numbers.pop();

//Remove element from start
numbers.shift();

//Splice
//numbers.splice(0,1); //removes elements between specified indices

//Reverse
//numbers.reverse();

//Concatenate arrays
value2 = numbers.concat(numbers2);


//Sort using the 'compare' function since JS sorts numbers based on first number by default

numbers.sort(function(x,y){
    //return x-y; // ascending order
    return y-x; // descending order
})


//Find
function under50(num){
    return num < 50;
}

value2 = numbers.find(under50); //returns first value of array less than 50

console.log(numbers);
console.log(numbers2);



//Object Literals

const person1 = {
    firstName : 'John',
    lastName : 'Doe',
    age : 23,
    email: '123@xyz.com',
    hobbies: ['anime', 'gaming'],
    address: {
        city: 'NYC',
        state: 'NY'
    },
    getBirthYear: function(){
        return 2019 - this.age; //tells us that age is referring to objects own variable
    }
}

value2 = person1.firstName;
value2 = person1.hobbies[1];
value2 = person1.getBirthYear();
value2 = person1.address.state;














































console.log(value2);













