const todo = document.querySelector('#addToDo');
const ul = document.getElementsByTagName('UL')[0];

todo.addEventListener('keydown', addTask);
// ul.addEventListener('click', deleteTask);

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
        // deleteTask();
    }
}

function deleteTask(e) {
    // const del = ul.querySelectorAll('li'); // Selecciona todos los li contenidos en ul
    // del.forEach(item => {
    //     item.children[0].addEventListener('click', () => {
    //         item.remove();
    //     });
    // });
    if(e.target.classList.contains('fa')) {
        const tarea = e.target.parentNode.parentNode;
        tarea.remove();
    }
}

// deleteTask();
