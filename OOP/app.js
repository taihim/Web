//ES5

//Object literal
const brad = {
    name: 'Taimur',
    age: '23'
}
console.log(brad);


//Constructor

function Person(firstName, lastName,  dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    // this.calcAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get fullname
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`; 
}

//Gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '08-04-1996');
console.log(john.calculateAge());

const mary = new Person('Mary', 'Johnson', '08-04-1996');


//Prototypes
console.log(mary.getFullName());
mary.getsMarried('Boo')
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));

console.log(mary.hasOwnProperty('getFullName'));//in prototype so not a property
console.log(mary);

//Properties are firstName, lastName and birthday since they are unique for every person
//calcAge behaves the same for every instance of person so it should be in prototype


//Prototype inheritance

function person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;

}

person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;   
}


const person1 = new person('Taima', 'Igarashi');

console.log(person1.greeting());

//Customer constructor
function customer(firstName, lastName, phone, membership) {
    person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit person prototype methods
customer.prototype = Object.create(person.prototype);

//Make customer.prototype return customer
customer.prototype.constructor = customer;


const cust1 = new customer('Tom', 'Smith', '0321', 'Standard');

//New greeting overrides person greeting
customer.prototype.greeting = function(){
    return `Hello ${this.firstName}, welcome.`
}

console.log(cust1.greeting());


//Using Object.create()

const personPrototypes = {
    greeting: function(){
        return `Hello, ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }

}


const maria = Object.create(personPrototypes);
maria.firstName = 'Maria';
maria.lastName = 'John';
maria.age = '20';

maria.getsMarried('Toom');

console.log(maria);


const brand = Object.create(personPrototypes, {
    firstName : {value:'Brad'},
    lastName: {value:'Trav'},
    age: {value: '20'}
});

console.log(brand.greeting());
