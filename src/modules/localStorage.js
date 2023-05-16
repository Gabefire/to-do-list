import Container from "./container";
import Task from "./task";
import Project from "./project";

export default function generateContainer() {
  if (storageAvailable("localStorage")) {
    const projectArray = JSON.parse(localStorage.getItem("projectArray"));
    const allContainer = new Container("Inbox");
    allContainer.projectArray = projectArray;
    if (projectArray === null) {
      const newContainer = new Container("Inbox");
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

      newContainer.add(defaultProject);
      newContainer.add(defaultProject2);

      return newContainer;
    }
    return allContainer;
  }
  const allContainer = new Container("Inbox");

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

  return allContainer;
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
