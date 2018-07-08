const TaskCreator = (function(){

  return class {

    constructor(list, description, priority) {
      this.description = description
      this.priority = priority
      this.listId = list.id
    }

  }

})()
