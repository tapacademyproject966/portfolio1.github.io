function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.onclick = () => taskSpan.classList.toggle('completed');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => taskItem.remove();

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}