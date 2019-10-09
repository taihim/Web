//ES6

class Person {
    constructor(firstName, lastName, birthday){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
    }

    greeting(){
        return `Hello ${this.firstName} ${this.lastName}.`;
    }

    calcAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNum(a,b){
        return a+b;
    }

}


const bob = new Person('Bob', 'Smith', '11-08-1990');
bob.getsMarried('Yolo');
console.log(bob.greeting());


//Static methods
//Don't need to instantiate an object of the class to use

console.log(Person.addNum(1,2));




//Inheritance
class Customer extends Person{
    constructor(firstName, lastName, birthday, phone, membership){
        super(firstName, lastName, birthday); //Super calls parent class's constructor
        this.phone = phone;
        this.membership = membership;
    }

}



const john = new Customer('John', 'Smith', '10-4-1911', '555', 'premium');
console.log(john);


 





