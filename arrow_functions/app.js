//passing in a parameter
//const hello = name => console.log(`Hello ${name}`);

//returning an object
// const hello = () => ({id:'1', body:'Yo'});

//passing in multiple parameters
// const hello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


const users = ['Taimur', 'Waleed', 'Shazia'];

const nameLengths = users.map( name => name.length);
console.log(nameLengths);

//Arrow functions use a lexical 'this' so no scope issues like in regular callbacks
