export default class Project {
  constructor(name) {
    this.name = name;
    this.taskArray = [];
  }

  add(task) {
    this.taskArray.push(task);
  }

  remove(index) {
    this.taskArray.splice(index, 1);
  }

  getTaskArray() {
    return this.taskArray;
  }
}
