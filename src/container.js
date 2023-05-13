export default class Container {
  constructor(name) {
    this.name = name;
    this.projectArray = [];
  }

  add(project) {
    this.projectArray.push(project);
  }

  remove(index) {
    this.projectArray.slice(index);
  }

  display() {
    DOMmethods.displayTasks(this.projectArray);
  }
}
