const x = new http();

// x.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));


const data = {
    name: 'John Doe',
    email: 'abc@gmail.com',
    username: 'woot'
}

// x.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// x.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

x.delete('https://jsonplaceholder.typicode.com/users/2')
.then((res) => console.log(res))
.catch(err => console.log(err));
