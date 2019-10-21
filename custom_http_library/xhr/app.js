const http = new easyHTTP();

//Get posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log(response);
//     }

// });


//Create data
const data = {
    title: 'Custom post',
    body: 'Custom pst'
};


// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log(post);
//     }
// });


http.put('https://jsonplaceholder.typicode.com/posts/69', data, function(error, post)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(post);
    }
});


http.delete('https://jsonplaceholder.typicode.com/posts/69', function(error, response){
    if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(response);
    }

});
