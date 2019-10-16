//Get n random jokes http://api.icndb.com/jokes/random/n


document.getElementById('submit').addEventListener('click', getJokes);


function getJokes(e)
{
    const num = document.getElementById('number').value;
    document.getElementById('number').value='';
    const request = `http://api.icndb.com/jokes/random/${num}`;
    

    const xhr = new XMLHttpRequest();

    xhr.open('GET', request, true);

    xhr.onprogress = function(){
        console.log('Getting Jokes');
    }

    xhr.onload = function()
    {
        let output = '';
        if(this.status === 200)
        {   
            const x = JSON.parse(xhr.responseText);
            if(x.type === 'success' )
            {
                const y = JSON.parse(xhr.responseText).value;
                y.forEach(function(j)
                    {
                        output += `<li>${j.joke}</li>`;
                    });
            }
            else
            {
                output = "<li>Something went wrong</li>";
            }
            document.getElementById('output').innerHTML = output;
        }
        
    }

    xhr.send();

    e.preventDefault();

}