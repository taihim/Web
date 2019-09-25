//Event Bubbling and delegation


//Event bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card-title');
// });


// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card-content');
// });



// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

//Event bubbling means when an event fires for an element it bubbles up to its parents as well
//Which is all of the above will fire even if we only click Task List





//Event delegation
//Opposite of bubbling, event listener on parent

//Used when there are multiple identical elements and you need events to fire on all of them
//Another use case is when something is dynamically added to a page via JS after the page loads

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);



function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();

    }

    
}