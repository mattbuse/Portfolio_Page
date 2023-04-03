function addToList(e) {
    e.preventDefault();
    const task = input.value;
    if (!task) {
        alert("Please select a task");
        return;
    }

    const list_el = document.querySelector('#tasks');

    const task_el = document.createElement("div");
    task_el.classList.add('task');
    
    const task_content_el = document.createElement("div");
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readOnly', 'readOnly');

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add('actions');

    const task_actions_edit_el = document.createElement("button");
    task_actions_edit_el.classList.add('edit');
    task_actions_edit_el.innerHTML = 'EDIT';

    const task_actions_delete_el = document.createElement("button");
    task_actions_delete_el.classList.add('delete');
    task_actions_delete_el.innerHTML = 'DELETE';

    const task_actions_complete_el = document.createElement("button");
    task_actions_complete_el.classList.add('complete');
    task_actions_complete_el.innerHTML = 'COMPLETE';

    task_actions_el.appendChild(task_actions_edit_el);
    task_actions_el.appendChild(task_actions_delete_el);
    task_actions_el.appendChild(task_actions_complete_el);
    
    task_el.appendChild(task_actions_el);
    list_el.appendChild(task_el);

    input.value = '';

    task_actions_edit_el.addEventListener("click", () => {
        if (task_actions_edit_el.innerHTML === 'EDIT') {
        task_input_el.removeAttribute('readonly');
        task_actions_edit_el.innerHTML = 'SAVE';
        task_input_el.focus();
        } else {
            task_input_el.setAttribute('readonly', 'readonly');
            task_actions_edit_el.innerHTML = 'EDIT';    
        }
    });

    task_actions_delete_el.addEventListener("click", () => {
        list_el.removeChild(task_el);
    });

    task_actions_complete_el.addEventListener("click", () => {
        if (task_input_el.style.textDecoration === 'line-through') {
            task_input_el.style.textDecoration = 'none';
            task_actions_complete_el.innerHTML = 'COMPLETE';
        } else {
            task_input_el.style.textDecoration = 'line-through';
            task_actions_complete_el.innerHTML = 'UN-COMPLETE';
        }
    });

}

const input = document.querySelector('#input');
const form = document.querySelector('#input-box');
const addTask = document.getElementById("submit");

addTask.addEventListener("click",addToList);