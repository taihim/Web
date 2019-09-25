const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//CLick
// clearBtn.addEventListener('click', runEvent);

//DOuble click
// clearBtn.addEventListener('dblclick', runEvent);

//Mouse down
//clearBtn.addEventListener('mousedown', runEvent);

//Mouse up
//clearBtn.addEventListener('mouseup', runEvent);

//Only fire when leaving/entering the main element
//Mouse enter
// card.addEventListener('mouseenter', runEvent);

//Mouse leave
// card.addEventListener('mouseleave', runEvent);


//These fire even when moving over/out of children elements in the main element
//Mouse over
// card.addEventListener('mouseover', runEvent);

//Mouse out
// card.addEventListener('mouseout', runEvent);


//Mouse move
// card.addEventListener('mousemove', runEvent);




//Event handler
function runEvent(e){
console.log(`Event type: ${e.type}`);

heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;


document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}