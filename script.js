
let count = 1;


const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click',function(){
    deleteTask(taskCard);
    updateCount()
});
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");
const addBtn = document.querySelector('#btn'); //Allows you to select class and id in the CSS.
addBtn.addEventListener('click', addTask); //add a task on click.

function addTask(){
    const newTask = taskCard.cloneNode(true); //clone the task card.
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector(".task");
 
    newTextArea.value = "New Task";
    newDelBtn.addEventListener('click', function(){
        deleteTask(newTask);
        updateCount()
    })

    tasksContainer.appendChild(newTask);// append new task yo the tasks container
    updateCount();

}

function deleteTask(task){
    task.remove();
}

function updateCount(){
    let newCount = document.querySelector ("#count");

    newCount.textContent = 'Compteur('+ tasksContainer.children.length+')';
}