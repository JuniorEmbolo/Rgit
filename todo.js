document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        
        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';
    }
});
