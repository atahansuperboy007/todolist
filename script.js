let inputToDo = document.getElementById('addToDo');
let btnToDo = document.getElementById('addToDoButton');
let toDoContainer = document.getElementById('todoContainer');



btnToDo.addEventListener('click', function(){

    let paragraph = document.createElement('li');
    paragraph.classList.add('todo');
    paragraph.innerText = inputToDo.value;

    toDoContainer.appendChild(paragraph);
    inputToDo.value = '';



    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });


    
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

});













