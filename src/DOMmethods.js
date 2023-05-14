const DOMmethods = (() => {
  const displayTasks = (projectArray) => {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";
    console.log(projectArray);
    for (let x = 0; x < projectArray.length; x += 1) {
      const taskArray = projectArray[x].taskArray;
      for (let i = 0; i < taskArray.length; i += 1) {
        const task = taskArray[i];

        const taskContainer = document.createElement("div");
        taskContainer.className = "task";
        taskContainer.id = `task-${x}`;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        taskContainer.appendChild(checkbox);

        const titleContainer = document.createElement("div");
        titleContainer.className = "titleContainer";
        const title = document.createElement("div");
        title.className = "task-title";
        title.textContent = task.title;
        titleContainer.appendChild(title);
        const date = document.createElement("div");
        date.className = "task-date";
        date.textContent = task.dueDate;
        titleContainer.appendChild(date);
        taskContainer.appendChild(titleContainer);

        const projectName = document.createElement("div");
        projectName.className = "project-name";
        projectName.textContent = projectArray[x].name;
        projectName.id = `project ${x}`;
        taskContainer.appendChild(projectName);

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.id = `delete-task-button-${i}`;
        deleteTaskBtn.className = "task-delete-button";
        deleteTaskBtn.textContent = "X";
        taskContainer.appendChild(deleteTaskBtn);

        tasksContainer.appendChild(taskContainer);
      }
    }
  };

  const displayProjects = (projectArray) => {
    const projectsContainer = document.getElementById("projects-section");
    projectsContainer.innerHTML = "";
    const projectFormElement = document.getElementById("project-form");
    projectFormElement.style.visibility = "hidden";
    projectFormElement.reset();
    for (let i = 0; i < projectArray.length; i += 1) {
      const project = document.createElement("div");
      project.className = "project";
      const projectTitle = document.createElement("div");
      projectTitle.textContent = projectArray[i].name;
      projectTitle.id = `project-${i}`;
      projectTitle.className = "project-title";
      project.appendChild(projectTitle);
      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "deleteProjectBtn";
      deleteProjectBtn.textContent = "X";
      deleteProjectBtn.id = `delete-project-button-${i}`;
      project.appendChild(deleteProjectBtn);

      projectsContainer.appendChild(project);
    }
  };

  const displayTitle = (projectContainer, visibility) => {
    const mainTitle = document.getElementById("main-title");
    mainTitle.textContent = `${projectContainer.name}:`;
    const addTaskBtn = document.getElementById("add-task-button");
    addTaskBtn.style.visibility = visibility;
  };

  return {
    displayTasks,
    displayProjects,
    displayTitle,
  };
})();

export default DOMmethods;
