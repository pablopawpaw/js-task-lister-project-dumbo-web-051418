document.addEventListener('DOMContentLoaded', () => {
  const app = new TaskLister();
  const createListForm = document.getElementById("create-list-form");
  const createListFormInput = document.getElementById("new-list-title");
  const listDiv = document.getElementById("app-content");
  const createTaskForm = document.getElementById("create-task-form");
  const createTaskFormDescInput = document.getElementById("new-task-description");
  const createTaskFormPriorityInput = document.getElementById("new-task-priority");

  createListForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newList = app.createAndRenderList(createListFormInput.value)
    createTaskForm.style.display = 'block'
    app.addListOption(newList)
    createListFormInput.value = ""
  })

  createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTask = app.createTask()
    app.renderTask(newTask)
    createTaskFormDescInput.value = ""
    createTaskFormPriorityInput.value = ""
  })

});
