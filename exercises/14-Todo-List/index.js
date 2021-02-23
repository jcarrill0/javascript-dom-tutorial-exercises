// Your code here

/*document.getElementById('inputFirst').addEventListener('keydown', inputCharacters);

function inputCharacters(event) {
 
  if (event.keyCode == 13) {
    document.getElementById('inputSecond').focus();
  }

}*/

// VARIABLES
const todo = document.querySelector('#addToDo');
const ul = document.getElementsByTagName('UL')[0];

todo.addEventListener('keydown', addTask);

function addTask(e) {
    if (e.keyCode == 13) {
        if(e.target.value !== '') {
            let li = document.createElement('LI');
            li.innerHTML = `
                <span><i class="fa fa-trash"></i></span>
                ${e.target.value} 
            `;
            ul.appendChild(li);
            todo.value='';
        }
    }
}

ul.addEventListener('click', deleteTask);

function deleteTask(e) {
    if(e.target.classList.contains('fa')) {
        const tarea = e.target.parentNode.parentNode;
        tarea.remove();
    }
}