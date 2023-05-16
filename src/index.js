import DOMmethods from "./DOMmethods";
import Project from "./project";
import Container from "./container";
import Task from "./task";
import generateContainer from "./localStorage";

const allContainer = generateContainer();

function storeContainer() {
  localStorage.setItem("container", JSON.stringify(allContainer));
}

// Task Controls

function cancelTaskListener() {
  const taskFormElement = document.getElementById("task-form");
  taskFormElement.reset();
  taskFormElement.style.visibility = "hidden";
}

function submitTaskListener() {
  const taskFormElement = document.getElementById("task-form");
  const mainTitle = document.querySelector(".main-title");
  const index = mainTitle.id.slice(-1);
  const { projectArray } = allContainer;
  const taskName = document.getElementById("task-name-field");
  const dueDate = document.getElementById("due-date-field");
  const project = projectArray[index];
  const task = new Task(taskName.value, dueDate.value, project.name, project);
  project.add(task);
  taskFormElement.reset();
  taskFormElement.style.visibility = "hidden";
  DOMmethods.displayTasks(
    project.getTaskArray(),
    index,
    allContainer.projectArray
  );
  taskEditButton();
}

function addTaskListener() {
  const taskFormElement = document.getElementById("task-form");
  taskFormElement.style.visibility = "visible";
  const submitTaskBtn = document.getElementById("task-submit-button");
  submitTaskBtn.removeEventListener("click", submitTaskListener);
  submitTaskBtn.addEventListener("click", submitTaskListener);
  const cancelTaskBtn = document.getElementById("task-cancel-button");
  submitTaskBtn.removeEventListener("click", cancelTaskListener);
  cancelTaskBtn.addEventListener("click", cancelTaskListener);
}

function addTask() {
  const addTaskBtn = document.getElementById("add-task-button");
  addTaskBtn.removeEventListener("click", addTaskListener);
  addTaskBtn.addEventListener("click", addTaskListener);
}

// Project Controls //

function selectProject(container) {
  const projectBtns = document.querySelectorAll(".project-title");
  projectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const project = container.projectArray[index];
      DOMmethods.displayTitle(project, "visible", index);
      DOMmethods.displayTasks(
        project.getTaskArray(),
        index,
        allContainer.projectArray
      );
      taskEditButton();
      addTask();
    });
  });
}

function deleteProjectListener() {
  const deleteProjectBtns = document.querySelectorAll(".deleteProjectBtn");
  deleteProjectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      allContainer.remove(index);
      DOMmethods.displayProjects(allContainer.projectArray);
      selectProject(allContainer);
      DOMmethods.displayTitle(allContainer, "hidden", NaN);
      DOMmethods.displayTasks(
        allContainer.getTaskArray(),
        -1,
        allContainer.projectArray
      );
      taskEditButton();
      deleteProjectListener();
    });
  });
}

function getItems() {
  const projectName = document.getElementById("project-name-field");
  const title = projectName.value;
  const project = new Project(title);
  const projectArrayLength = allContainer.projectArray.length;
  const projectFormElement = document.getElementById("project-form");
  projectFormElement.style.visibility = "hidden";
  projectFormElement.reset();
  DOMmethods.displayTitle(project, "visible", projectArrayLength);
  addTask();
  DOMmethods.displayTasks(
    project.getTaskArray(),
    projectArrayLength,
    allContainer.projectArray
  );
  taskEditButton();
  allContainer.add(project);
  DOMmethods.displayProjects(allContainer.projectArray);
  selectProject(allContainer);
  deleteProjectListener();
}

// Initial Task Listeners

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

function inboxListenerFunction() {
  DOMmethods.displayTitle(allContainer, "hidden", "inbox");
  DOMmethods.displayTasks(
    allContainer.getTaskArray(),
    -1,
    allContainer.projectArray
  );
  taskEditButton();
}

const inboxBtn = document.getElementById("inbox");
inboxBtn.addEventListener("click", inboxListenerFunction);

function todayListenerFunction() {
  const todayContainer = new Container("Today");
  DOMmethods.displayTitle(todayContainer, "hidden", "today");
  DOMmethods.displayTasks(
    allContainer.filterDate(1),
    -1,
    allContainer.projectArray
  );
  taskEditButton();
}

const todayBtn = document.getElementById("today");
todayBtn.addEventListener("click", todayListenerFunction);

function upcomingListenerFunction() {
  const upcomingContainer = new Container("Upcoming");
  DOMmethods.displayTitle(upcomingContainer, "hidden", "upcoming");
  DOMmethods.displayTasks(
    allContainer.filterDate(7),
    -1,
    allContainer.projectArray
  );
  taskEditButton();
}

const upcomingBtn = document.getElementById("upcoming");
upcomingBtn.addEventListener("click", upcomingListenerFunction);

// Task Edit

function taskEditButton() {
  const deleteTaskBtns = document.querySelectorAll(".task-delete-button");
  deleteTaskBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const taskIndex = e.target.dataset.index;
      const projectIndex = e.target.dataset.project;
      const { projectArray } = allContainer;
      const project = projectArray[projectIndex];
      project.remove(taskIndex);
      const mainTitle = document.querySelector(".main-title");
      let titleName = mainTitle.id;
      const taskArray = project.getTaskArray();

      if (taskArray.length === 0) {
        allContainer.remove(projectIndex);
        titleName = "inbox";
      }

      if (titleName === "inbox") {
        DOMmethods.displayTitle(allContainer, "hidden", "inbox");
        DOMmethods.displayTasks(
          allContainer.getTaskArray(),
          -1,
          allContainer.projectArray
        );
        taskEditButton();
      } else if (titleName === "upcoming") {
        const upcomingContainer = new Container("Upcoming");
        DOMmethods.displayTitle(upcomingContainer, "hidden", "upcoming");
        DOMmethods.displayTasks(
          allContainer.filterDate(7),
          -1,
          allContainer.projectArray
        );
        taskEditButton();
      } else if (titleName === "today") {
        const todayContainer = new Container("Today");
        DOMmethods.displayTitle(todayContainer, "hidden", "today");
        DOMmethods.displayTasks(
          allContainer.filterDate(1),
          -1,
          allContainer.projectArray
        );
        taskEditButton();
      } else {
        DOMmethods.displayTitle(project, "visible", projectIndex);
        DOMmethods.displayTasks(
          project.getTaskArray(),
          projectIndex,
          allContainer.projectArray
        );
        addTask();
        taskEditButton();
      }
      DOMmethods.displayProjects(allContainer.projectArray);
      selectProject(allContainer);
      deleteProjectListener();
    });
  });

  const checkTaskBox = document.querySelectorAll(".checkbox-task");
  checkTaskBox.forEach((checkBox) => {
    checkBox.addEventListener("change", (e) => {
      const taskIndex = e.target.dataset.index;
      const projectIndex = e.target.dataset.project;
      const { projectArray } = allContainer;
      const project = projectArray[projectIndex];
      const task = project.getTaskArray()[taskIndex];

      task.completed = e.target.checked;
    });
  });
}

// Default project and task values

const defaultProject = new Project("Clean the House");
const task1 = new Task(
  "Wash the Dishes",
  "2023-05-16",
  "Clean the House",
  defaultProject
);
const task2 = new Task(
  "Take Out the Trash",
  "2023-05-21",
  "Clean the House",
  defaultProject
);
const task3 = new Task(
  "Mop the Floor",
  "2023-05-15",
  "Clean the House",
  defaultProject
);
defaultProject.add(task1);
defaultProject.add(task2);
defaultProject.add(task3);

const defaultProject2 = new Project("Paint the Bedroom");
const task4 = new Task(
  "Buy Cleaning Supplies",
  "2023-05-16",
  "Paint the Bedroom",
  defaultProject2
);
const task5 = new Task(
  "Buy the Paint",
  "2022-11-26",
  "Paint the Bedroom",
  defaultProject2
);
const task6 = new Task(
  "Tape the Bedroom",
  "2025-11-26",
  "Paint the Bedroom",
  defaultProject2
);

defaultProject2.add(task4);
defaultProject2.add(task5);
defaultProject2.add(task6);

allContainer.add(defaultProject);
allContainer.add(defaultProject2);

DOMmethods.displayProjects(allContainer.projectArray);
DOMmethods.displayTitle(allContainer, "hidden", "inbox");
DOMmethods.displayTasks(
  allContainer.getTaskArray(),
  -1,
  allContainer.projectArray
);
taskEditButton();
selectProject(allContainer);
deleteProjectListener();
