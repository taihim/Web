const posts = 
[
    {title:'Post One', body: 'This is post one'},
    {title:'Post Two', body: 'This is post two'}
]

function createPost(post){
    return new Promise(function(resolve, reject){
        
        setTimeout(function()
            {
                const fail = false;
                if(!fail){
                posts.push(post);
                resolve();
                }
                else
                {
                    reject('Woops');
                }
            }, 2000);
        
    });
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    } ,1000);
}




const three = {
    title: 'Post Three', body: 'This is post three'
}


createPost(three).then(getPosts).catch(function(error){console.log(error)});
console.log(posts);

