const tasks = [];
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

// Add task function
function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const task = {
        task_id: tasks.length,
        text: taskText,
        done: false
    };
    
    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
}

// Render a single task
function renderTask(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', task.task_id);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', doneTask);
    
    const label = document.createElement('span');
    label.className = 'task-text';
    label.textContent = task.text;
    if (task.done) {
        label.classList.add('completed');
    }
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.addEventListener('click', deleteTask);
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(deleteBtn);
    
    taskList.appendChild(taskItem);
}

// Mark task as done
function doneTask(event) {
    const taskItem = event.target.parentElement;
    const taskId = parseInt(taskItem.getAttribute('data-task-id'));
    const taskText = taskItem.querySelector('.task-text');
    
    tasks[taskId].done = event.target.checked;
    
    if (event.target.checked) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
}

// Delete task
function deleteTask(event) {
    const taskItem = event.target.closest('.task-item');
    const taskId = parseInt(taskItem.getAttribute('data-task-id'));
    
    // Remove from array
    tasks.splice(taskId, 1);
    
    // Update task_ids in array
    tasks.forEach((task, index) => {
        task.task_id = index;
    });
    
    // Re-render all tasks
    taskList.innerHTML = '';
    tasks.forEach(task => renderTask(task));
}

// Clear all tasks
function clearTasks() {
    tasks.length = 0;
    taskList.innerHTML = '';
}

// Event listeners
taskForm.addEventListener('submit', addTask);
clearBtn.addEventListener('click', clearTasks);