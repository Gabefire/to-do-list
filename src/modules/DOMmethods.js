import addDays from "date-fns/addDays";
import Container from "./container";

const DOMmethods = (() => {
  const displayTasks = (container, MainContainer, filter, days) => {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    let projectArray;
    if (container instanceof Container) {
      projectArray = container.projectArray;
    } else {
      projectArray = [container];
    }

    projectArray.forEach((project) => {
      let taskArray;
      if (filter) {
        taskArray = project.taskArray;
        const today = new Date();
        const compareDate = addDays(today, days);
        taskArray = taskArray.filter((task) => {
          const taskDate = new Date(task.dueDate);
          return taskDate <= compareDate;
        });
      } else {
        taskArray = project.taskArray;
      }

      if (taskArray.length === 0) {
        return;
      }

      const mainProjectArray = MainContainer.projectArray;

      const sortedArray = taskArray.sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      );
      sortedArray.forEach((task) => {
        const projectLocation = mainProjectArray.indexOf(project);
        const taskLocation = taskArray.indexOf(task);
        const taskContainer = document.createElement("div");
        taskContainer.setAttribute("data-index", taskLocation);
        taskContainer.setAttribute("data-project", projectLocation);

        const titleContainer = document.createElement("div");
        titleContainer.className = "titleContainer";

        const title = document.createElement("div");
        title.className = "task-title";
        title.textContent = task.title;
        title.setAttribute("data-index", taskLocation);
        title.setAttribute("data-project", projectLocation);
        const date = document.createElement("div");
        date.className = "task-date";
        date.textContent = task.dueDate;
        date.setAttribute("data-index", taskLocation);
        date.setAttribute("data-project", projectLocation);
        taskContainer.className = "task";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.className = "checkbox-task";
        checkbox.setAttribute("data-index", taskLocation);
        checkbox.setAttribute("data-project", projectLocation);
        titleContainer.appendChild(checkbox);
        titleContainer.appendChild(title);
        titleContainer.appendChild(date);
        taskContainer.appendChild(titleContainer);

        const rightItems = document.createElement("div");
        rightItems.className = "right";
        const projectName = document.createElement("div");
        projectName.className = "project-name";
        projectName.textContent = task.projectName;
        rightItems.appendChild(projectName);

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.className = "task-delete-button";
        deleteTaskBtn.textContent = "X";
        deleteTaskBtn.setAttribute("data-index", taskLocation);
        deleteTaskBtn.setAttribute("data-project", projectLocation);
        rightItems.appendChild(deleteTaskBtn);
        taskContainer.appendChild(rightItems);

        tasksContainer.appendChild(taskContainer);
      });
    });
  };

  const displayProjects = (projectArray) => {
    const projectsContainer = document.getElementById("projects-section");
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projectArray.length; i += 1) {
      const project = document.createElement("div");
      project.className = "project";
      project.id = `project-${i}`;
      project.setAttribute("data-index", i);
      const projectTitle = document.createElement("div");
      projectTitle.className = "project-title";
      projectTitle.id = `project-${i}`;
      projectTitle.setAttribute("data-index", i);
      projectTitle.textContent = projectArray[i].name;
      project.appendChild(projectTitle);
      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "deleteProjectBtn";
      deleteProjectBtn.textContent = "X";
      deleteProjectBtn.id = `delete-project-button-${i}`;
      deleteProjectBtn.setAttribute("data-index", i);
      project.appendChild(deleteProjectBtn);

      projectsContainer.appendChild(project);
    }
  };

  const displayTitle = (projectContainer, visibility, index) => {
    const mainTitle = document.createElement("h3");
    mainTitle.className = "main-title";
    mainTitle.textContent = `${projectContainer.name}:`;
    mainTitle.id = index;
    const addTaskBtn = document.createElement("button");
    const topBar = document.querySelector(".top-bar");
    addTaskBtn.id = "add-task-button";
    addTaskBtn.setAttribute("index", index);
    addTaskBtn.textContent = "+ Add Task";
    topBar.innerHTML = "";
    topBar.appendChild(mainTitle);
    topBar.appendChild(addTaskBtn);

    addTaskBtn.style.visibility = visibility;
  };

  return {
    displayTasks,
    displayProjects,
    displayTitle,
  };
})();

export default DOMmethods;
