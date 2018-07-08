class TaskLister {

  static createList(listTitle) {
    const newList = new ListCreator(listTitle)
    return newList
  }

  static renderList(newList) {
    let listContainer = document.getElementById('lists')
    return listContainer.innerHTML += `<div>
      <h2>${newList.title}
        <button data-title="${newList.title}" class="delete-list">X</button>
      </h2>
      <ul>
      </ul>
    </div>`
  }

  createAndRenderList(listTitle) {
    const newList = TaskLister.createList(listTitle)
    TaskLister.renderList(newList)
    return newList
  }

  addListOption(newList) {
    let dropdownList = document.getElementById('parent-list')
    return dropdownList.innerHTML += `<option value="${newList.title}" selected>
      ${newList.title}
    </option>`
  }

  createTask() {
    const listTitle = document.getElementById('parent-list').value
    const listManager = new ListCreator
    const lists = listManager.getAll()
    let selectedList;
    lists.forEach((list)=>{
    	if(list.title===listTitle) {
    		 selectedList = list
    	}
    })
    const taskDesc = document.getElementById('new-task-description').value
    const taskPriority = document.getElementById('new-task-priority').value
    const newTask = new TaskCreator(selectedList, taskDesc, taskPriority)
    return newTask
  }

  renderTask(newTask) {
    const listTitle = document.getElementById('parent-list')
    let listContainer = document.querySelectorAll(`#lists h2`)
    const listArray = Array.from(listContainer)
    const list = listArray.filter((l)=>{
    	return l.innerHTML.includes(listTitle.value)
    })
    let listUl = list[0].parentNode.children[1]
    listUl.innerHTML += `<li>
                          Task: ${newTask.description}
                            <button       data-list-title="${listTitle.value}" data-task-name="${newTask.description}" class="delete-task">
                            X
                            </button>
                          <br>
                          Priority: ${newTask.priority}
                        </li>`
    return newTask
  }

}
