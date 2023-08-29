document.getElementById('add-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input-field');
    const inputText = inputValue.value;
    inputValue.value = '';

    const taskContainer = document.getElementById('task-container');

    taskContainer.classList = 'bg-slate-900 w-[450px] mx-auto my-[20px] rounded-md shadow-md p-10';

    const taskDiv = document.createElement('div');

    taskDiv.innerHTML = `
        <div id ="single-task" class ="bg-primary p-4 rounded-md flex justify-between items-center my-[10px]">
            <p class ="text-white">${inputText}</p>
            <div>
                <button onclick = "deleteTask(){taskDiv.style.display = 'none';}">
                    <i class="text-white fa-solid fa-circle-xmark"> </i>
                </button>   
            </div>
        </div>
    `
    taskContainer.appendChild(taskDiv);
});