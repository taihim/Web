document.getElementById('btn').addEventListener('click', loadData);


function loadData(e)
{
    const xhr = new XMLHttpRequest();

    
    //Open
    xhr.open('GET', 'data.txt', true); //True determines whether step is asynchronous or not

    //Onprogress is used for spinners/loaders i.e. the time when data is being fetched
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    //When data fetched/job completed, do this
    xhr.onload = function(){
        
            if(xhr.status === 200 && this.readyState === 4)
            {
                document.getElementById('output').textContent = this.responseText;
            }
    }

    //Send/finalise xhr request
    xhr.send();

}

//readyState values
    // 0: request not initialized
    // 1: server connection established i.e. xhr.open
    // 2: request recieved
    // 3: processing request i.e. xhr.onProgress
    // 4: request finished and response ready 