const ListCreator = (function() {

  const all = []
  let id = 0

  return class {

    constructor(title) {
      this.title = title
      this.id = ++id
      all.push(this)
    }

    getAll() {
      return [...all]
    }

  }

})()
