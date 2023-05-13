const eventListeners = (() => {
  const submitFormProject = () => {
    const projectName = document.getElementById("project-name-field");
  };

  const addProjectBtn = document.getElementById("add-project-button");
  const projectFrom = document.getElementById("project-form");
  addProjectBtn.addEventListener("click", () => {
    projectFrom.style.visibility = "visible";
    createProject();
  });
  return {
    submitFormProject,
  };
})();

export default eventListeners;
