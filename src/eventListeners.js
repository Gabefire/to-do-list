const eventListeners = (() => {
  const projectForm = () => {
    const addProjectBtn = document.getElementById("add-project-button");
    const projectFormElement = document.getElementById("project-form");
    addProjectBtn.addEventListener("click", () => {
      projectFormElement.style.visibility = "visible";
      return projectFormListener.bind(projectForm);
    });
    const projectFormListener = () => {
      const getItems = () => {
        const projectName = document.getElementById("project-name-field");
        this.title = projectName.value;
      };
      const submitForm = document.getElementById("project-submit-button");
      submitForm.addEventListener("click", getItems.bind(projectFormListener));
      return this.title;
    };
  };
  return {
    projectForm,
  };
})();

export default eventListeners;
