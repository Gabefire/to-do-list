import add from "date-fns/add";

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

  getTaskArray() {
    let finalTaskArray = [];
    this.projectArray.forEach((project) => {
      const { taskArray } = project;
      finalTaskArray = finalTaskArray.concat(taskArray);
    });
    return finalTaskArray;
  }

  filterDate(days) {
    const taskArray = this.getTaskArray();
    const today = new Date();
    taskArray.filter((task) => new Date(task.dueDate) <= add(today, days));
    return taskArray;
  }
}
