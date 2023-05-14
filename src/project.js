export default class Project {
  constructor(name) {
    this.name = name;
    this.taskArray = [];
  }

  add(task) {
    this.taskArray.push(task);
  }

  remove(index) {
    this.taskArray.slice(index);
  }

  getTaskArray() {
    return this.taskArray;
  }
}
