import DOMmethods from "./DOMmethods";
import Project from "./project";
import Container from "./container";
import Task from "./task";

const eventListeners = (() => {
  const allContainer = new Container("Inbox");
  DOMmethods.displayTitle(allContainer, "hidden", NaN);

  function addTaskListener() {
    const taskFormElement = document.getElementById("task-form");
    taskFormElement.style.visibility = "visible";
    const submitTaskBtn = document.getElementById("task-submit-button");
    submitTaskBtn.addEventListener(
      "click",
      () => {
        const mainTitle = document.querySelector(".main-title");
        const index = mainTitle.id.slice(-1);
        const { projectArray } = allContainer;
        const taskName = document.getElementById("task-name-field");
        const dueDate = document.getElementById("due-date-field");
        const project = projectArray[index];
        const task = new Task(taskName.value, dueDate.value, project.name);
        project.add(task);
        taskFormElement.reset();
        taskFormElement.style.visibility = "hidden";
        DOMmethods.displayTasks(project.getTaskArray(), index);
      },
      { once: true }
    );
  }

  function addTask() {
    const addTaskBtn = document.getElementById("add-task-button");
    addTaskBtn.removeEventListener("click", addTaskListener);
    addTaskBtn.addEventListener("click", addTaskListener);
  }

  const selectProject = (container) => {
    const projectBtns = document.querySelectorAll(".project-title");
    projectBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.id.slice(-1);
        const project = container.projectArray[index];
        DOMmethods.displayTitle(project, "visible", index);
        DOMmethods.displayTasks(project.getTaskArray(), index);
        addTask();
      });
    });
  };

  const getItems = () => {
    const projectName = document.getElementById("project-name-field");
    const title = projectName.value;
    const project = new Project(title);
    const projectArrayLength = allContainer.projectArray.length;
    const projectFormElement = document.getElementById("project-form");
    projectFormElement.style.visibility = "hidden";
    projectFormElement.reset();
    console.log(projectArrayLength);
    DOMmethods.displayTitle(project, "visible", projectArrayLength);
    addTask();
    DOMmethods.displayTasks(project.getTaskArray(), projectArrayLength);
    allContainer.add(project);
    DOMmethods.displayProjects(allContainer.projectArray);
    selectProject(allContainer);
  };
  const addProjectBtn = document.getElementById("add-project-button");
  const projectFormElement = document.getElementById("project-form");
  addProjectBtn.addEventListener("click", () => {
    projectFormElement.style.visibility = "visible";
    const submitForm = document.getElementById("project-submit-button");
    submitForm.addEventListener("click", getItems);
    const cancelForm = document.getElementById("project-cancel-button");
    cancelForm.addEventListener("click", () => {
      projectFormElement.style.visibility = "hidden";
      projectFormElement.reset();
    });
  });

  const inboxBtn = document.getElementById("inbox");
  inboxBtn.addEventListener("click", () => {
    DOMmethods.displayTitle(allContainer, "hidden", NaN);
    DOMmethods.displayTasks(allContainer.getTaskArray(), -1);
  });
})();
