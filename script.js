document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTaskButton').addEventListener('click', addTask);
    document.getElementById('taskInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.innerHTML = `<span>${taskText}</span> <button class="delete-button">Delete</button>`;
        taskList.appendChild(listItem);
        taskInput.value = '';

        // Add event listener to the delete button
        listItem.querySelector('.delete-button').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
    }
}
