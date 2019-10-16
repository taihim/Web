document.getElementById('btn1').addEventListener('click', loadCustomer);
document.getElementById('btn2').addEventListener('click', loadCustomers);

function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        const customer = JSON.parse(this.responseText);

        const output = `<ul>
                            <li>${customer.id}</li>
                            <li>${customer.name}</li>
                            <li>${customer.company}</li>
                            <li>${customer.phone}</li>
                        </ul>`;
        document.getElementById('customer').innerHTML = output;
    }

    xhr.send();
}

function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        const customers = JSON.parse(this.responseText);
        customers.forEach(function(cust){
                
        const output = `<li>${cust.id}</li>
                        <li>${cust.name}</li>
                        <li>${cust.company}</li>
                        <li>${cust.phone}</li>`;
        const x = document.createElement('ul');
        x.innerHTML = output;
        document.getElementById('customers').appendChild(x);



        });
    }

    xhr.send();
}