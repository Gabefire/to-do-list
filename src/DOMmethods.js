const DOMmethods = (() => {
  const displayTasks = (projectArray) => {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";
    for (let i = 0; i < projectArray.length; i += 1) {
      for (let x = 0; x < projectArray[i].length; x += 1) {
        const task = document.createElement("div");
        task.className = "task";
        task.id = `task-${x}`;
        for (let y = 0; y < projectArray[i][x]; y += 1) {
          const checkbox = document.createElement("checkbox");
          checkbox.checked = projectArray[i][x].completed;
          task.appendChild(checkbox);

          const titleContainer = document.createElement("div");
          titleContainer.className = "titleContainer";
          const title = document.createElement("div");
          title.className = "task-title";
          title.textContent = projectArray[i][x].title;
          titleContainer.appendChild("title");
          const date = document.createElement("div");
          date.className = "task-date";
          date.textContent = projectArray[i][x].dueDate;
          titleContainer.appendChild("date");
          task.appendChild(titleContainer);

          const projectName = document.createElement("div");
          projectName.className = "project-name";
          projectName.textContent = projectArray[i].name;
          projectName.id = `project ${i}`;
          task.appendChild(projectName);

          const deleteTaskBtn = document.createElement("button");
          deleteTaskBtn.id = `delete-task-button-${x}`;
          deleteTaskBtn.className = "task-delete-button";
          deleteTaskBtn.textContent = "X";
          task.appendChild(deleteTaskBtn);

          tasksContainer.appendChild(task);
        }
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
    const addTaskBtn = document.getElementById("addTask");
    addTaskBtn.style.visibility = visibility;
  };

  return {
    displayTasks,
    displayProjects,
    displayTitle,
  };
})();

export default DOMmethods;
