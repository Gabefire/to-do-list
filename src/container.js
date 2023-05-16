import addDays from "date-fns/addDays";

export default class Container {
  constructor(name) {
    this.name = name;
    this.projectArray = [];
  }

  add(project) {
    this.projectArray.push(project);
  }

  remove(index) {
    this.projectArray.splice(index, 1);
  }

  getTaskArray() {
    let finalTaskArray = [];
    this.projectArray.forEach((project) => {
      const { taskArray } = project;
      finalTaskArray = finalTaskArray.concat(taskArray);
    });
    return finalTaskArray;
  }

  getProjectArray() {
    return this.projectArray;
  }

  filterDate(days) {
    const taskArray = this.getTaskArray();
    const today = new Date();
    const compareDate = addDays(today, days);
    const finalArray = taskArray.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return taskDate <= compareDate;
    });
    return finalArray;
  }
}
