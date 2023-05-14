export default class Task {
  constructor(title, dueDate, projectName) {
    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
    this.projectName = projectName;
  }
}
