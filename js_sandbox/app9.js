//Keyboard and input events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//form.addEventListener('submit', runEvent);

//taskInput.value = ''; //Used to clear form after submission


//Key down
// taskInput.addEventListener('keydown', runEvent);

//Key up
// taskInput.addEventListener('keyup', runEvent);

//Key press
// taskInput.addEventListener('keypress', runEvent);

//Focus
// taskInput.addEventListener('focus', runEvent); //Runs when element is brought into focus

//Blur
// taskInput.addEventListener('blur', runEvent); //Opposite of focus

//Cut
// taskInput.addEventListener('cut', runEvent); //Fires when text cut from element

//Paste
// taskInput.addEventListener('paste', runEvent); //Fires when text pasted to element


//Input
// taskInput.addEventListener('input', runEvent);


//Change fires when select list value changes
select.addEventListener('change', runEvent);



function runEvent(e){
    console.log(`Event type: ${e.type}`);
    console.log(e.target.value);
    //console.log(taskInput.value);
    
    // heading.textContent = e.target.value;




    //e.preventDefault();
}
