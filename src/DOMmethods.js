const DOMmethods = (() => {
  const displayTasks = (taskArray, projectIndex) => {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    const sortedArray = taskArray.sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
    if (taskArray.length === 0) {
      return;
    }
    let i = 0;
    sortedArray.forEach((task) => {
      const taskContainer = document.createElement("div");

      const titleContainer = document.createElement("div");
      titleContainer.className = "titleContainer";
      const title = document.createElement("div");
      title.className = "task-title";
      title.textContent = task.title;
      const date = document.createElement("div");
      date.className = "task-date";
      date.textContent = task.dueDate;
      taskContainer.className = "task";
      taskContainer.id = `task-${i}`;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.id = `Task ${i} project ${projectIndex}`;
      checkbox.className = "checkbox-task";
      titleContainer.appendChild(checkbox);
      titleContainer.appendChild(title);
      titleContainer.appendChild(date);
      taskContainer.appendChild(titleContainer);

      const rightItems = document.createElement("div");
      rightItems.className = "right";
      const projectName = document.createElement("div");
      projectName.className = "project-name";
      projectName.textContent = task.projectName;
      if (projectIndex >= 0) projectName.id = `project ${projectIndex}`;
      rightItems.appendChild(projectName);

      const deleteTaskBtn = document.createElement("button");
      deleteTaskBtn.id = `delete-task-button-${i}`;
      deleteTaskBtn.className = "task-delete-button";
      deleteTaskBtn.textContent = "X";
      rightItems.appendChild(deleteTaskBtn);
      taskContainer.appendChild(rightItems);

      tasksContainer.appendChild(taskContainer);
      i += 1;
    });
  };

  const displayProjects = (projectArray) => {
    const projectsContainer = document.getElementById("projects-section");
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projectArray.length; i += 1) {
      const project = document.createElement("div");
      project.className = "project";
      project.id = `project-${i}`;
      const projectTitle = document.createElement("div");
      projectTitle.className = "project-title";
      projectTitle.id = `project-${i}`;
      projectTitle.textContent = projectArray[i].name;
      project.appendChild(projectTitle);
      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "deleteProjectBtn";
      deleteProjectBtn.textContent = "X";
      deleteProjectBtn.id = `delete-project-button-${i}`;
      project.appendChild(deleteProjectBtn);

      projectsContainer.appendChild(project);
    }
  };

  const displayTitle = (projectContainer, visibility, index) => {
    const mainTitle = document.createElement("h3");
    mainTitle.className = "main-title";
    mainTitle.textContent = `${projectContainer.name}:`;
    mainTitle.id = `project ${index}`;
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
