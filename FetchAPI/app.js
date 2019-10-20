document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJSON);
document.getElementById('btn3').addEventListener('click', getAPI);



function getText(){
    fetch('data.txt')
    .then(response => response.text())
    .then(data =>
    {   
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}



function getJSON(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        output='';
        data.forEach(function(item){
            output+= `<li>${item.title}<hr><hr>${item.body}</li>`;
        });

        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


function getAPI(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => 
        {
        console.log(data);
        output='';
        data.forEach(function(item){
            output+= `<li>${item.login}<br>${item.html_url}</li>`;
        });

        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error)
    );
}