/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/modules/DOMmethods.js":
/*!***********************************!*\
  !*** ./src/modules/DOMmethods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/addDays */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/modules/container.js");



const DOMmethods = (() => {
  const displayTasks = (container, MainContainer, filter, days) => {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    let projectArray;
    if (container instanceof _container__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      projectArray = container.projectArray;
    } else {
      projectArray = [container];
    }

    projectArray.forEach((project) => {
      let taskArray;
      if (filter) {
        taskArray = project.taskArray;
        const today = new Date();
        const compareDate = (0,date_fns_addDays__WEBPACK_IMPORTED_MODULE_1__["default"])(today, days);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMmethods);


/***/ }),

/***/ "./src/modules/container.js":
/*!**********************************!*\
  !*** ./src/modules/container.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
class Container {
  constructor(name) {
    this.name = name;
    this.projectArray = [];
  }

  add(project) {
    this.projectArray.push(project);
  }

  remove(index) {
    this.projectArray.splice(index, 1);
  }

  getTaskArray() {
    let finalTaskArray = [];
    this.projectArray.forEach((project) => {
      const { taskArray } = project;
      finalTaskArray = finalTaskArray.concat(taskArray);
    });
    return finalTaskArray;
  }

  getProjectArray() {
    return this.projectArray;
  }
}


/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateContainer)
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/modules/container.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");




function generateContainer() {
  if (storageAvailable("localStorage")) {
    const projectArray = JSON.parse(localStorage.getItem("projectArray"));
    const allContainer = new _container__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox");
    allContainer.projectArray = projectArray;
    if (projectArray === null) {
      const newContainer = new _container__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox");
      const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]("Clean the House");
      const task1 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
        "Wash the Dishes",
        "2023-05-16",
        "Clean the House",
        defaultProject
      );
      const task2 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
        "Take Out the Trash",
        "2023-05-21",
        "Clean the House",
        defaultProject
      );
      const task3 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
        "Mop the Floor",
        "2023-05-15",
        "Clean the House",
        defaultProject
      );
      defaultProject.add(task1);
      defaultProject.add(task2);
      defaultProject.add(task3);

      const defaultProject2 = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]("Paint the Bedroom");
      const task4 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
        "Buy Cleaning Supplies",
        "2023-05-16",
        "Paint the Bedroom",
        defaultProject2
      );
      const task5 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
        "Buy the Paint",
        "2022-11-26",
        "Paint the Bedroom",
        defaultProject2
      );
      const task6 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
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
  const allContainer = new _container__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox");

  const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]("Clean the House");
  const task1 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
    "Wash the Dishes",
    "2023-05-16",
    "Clean the House",
    defaultProject
  );
  const task2 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
    "Take Out the Trash",
    "2023-05-21",
    "Clean the House",
    defaultProject
  );
  const task3 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
    "Mop the Floor",
    "2023-05-15",
    "Clean the House",
    defaultProject
  );
  defaultProject.add(task1);
  defaultProject.add(task2);
  defaultProject.add(task3);

  const defaultProject2 = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]("Paint the Bedroom");
  const task4 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
    "Buy Cleaning Supplies",
    "2023-05-16",
    "Paint the Bedroom",
    defaultProject2
  );
  const task5 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
    "Buy the Paint",
    "2022-11-26",
    "Paint the Bedroom",
    defaultProject2
  );
  const task6 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
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


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.taskArray = [];
  }

  add(task) {
    this.taskArray.push(task);
  }

  remove(index) {
    this.taskArray.splice(index, 1);
  }

  getTaskArray() {
    return this.taskArray;
  }
}


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, dueDate, projectName) {
    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
    this.projectName = projectName;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOMmethods */ "./src/modules/DOMmethods.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/container */ "./src/modules/container.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/localStorage */ "./src/modules/localStorage.js");






const allContainer = (0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"])();

function storeContainer() {
  localStorage.setItem(
    "projectArray",
    JSON.stringify(allContainer.projectArray)
  );
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
  const task = new _modules_task__WEBPACK_IMPORTED_MODULE_3__["default"](taskName.value, dueDate.value, project.name, project);
  project.taskArray.push(task);
  storeContainer();
  taskFormElement.reset();
  taskFormElement.style.visibility = "hidden";
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(project, allContainer, false);
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
      _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible", index);
      _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(project, allContainer, false);
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
      storeContainer();
      _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
      selectProject(allContainer);
      _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", NaN);
      _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer, allContainer, false);
      taskEditButton();
      deleteProjectListener();
    });
  });
}

function getItems() {
  const projectName = document.getElementById("project-name-field");
  const title = projectName.value;
  const project = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
  const projectArrayLength = allContainer.projectArray.length;
  const projectFormElement = document.getElementById("project-form");
  projectFormElement.style.visibility = "hidden";
  projectFormElement.reset();
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible", projectArrayLength);
  addTask();
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(project, allContainer, false);
  taskEditButton();
  allContainer.add(project);
  storeContainer();
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
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
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", "inbox");
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer, allContainer, false);
  taskEditButton();
}

const inboxBtn = document.getElementById("inbox");
inboxBtn.addEventListener("click", inboxListenerFunction);

function todayListenerFunction() {
  const todayContainer = new _modules_container__WEBPACK_IMPORTED_MODULE_2__["default"]("Today");
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(todayContainer, "hidden", "today");
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer, allContainer, true, 1);
  taskEditButton();
}

const todayBtn = document.getElementById("today");
todayBtn.addEventListener("click", todayListenerFunction);

function upcomingListenerFunction() {
  const upcomingContainer = new _modules_container__WEBPACK_IMPORTED_MODULE_2__["default"]("Upcoming");
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(upcomingContainer, "hidden", "upcoming");
  _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer, allContainer, true, 7);
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
      project.taskArray.splice(taskIndex, 1);
      const mainTitle = document.querySelector(".main-title");
      let titleName = mainTitle.id;
      const { taskArray } = project;

      if (taskArray.length === 0) {
        allContainer.remove(projectIndex);
        titleName = "inbox";
      }

      if (titleName === "inbox") {
        _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", "inbox");
        _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer, allContainer, false);
        taskEditButton();
      } else if (titleName === "upcoming") {
        const upcomingContainer = new _modules_container__WEBPACK_IMPORTED_MODULE_2__["default"]("Upcoming");
        _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(upcomingContainer, "hidden", "upcoming");
        _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer, allContainer, true, 7);
        taskEditButton();
      } else if (titleName === "today") {
        const todayContainer = new _modules_container__WEBPACK_IMPORTED_MODULE_2__["default"]("Today");
        _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(todayContainer, "hidden", "today");
        _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer, allContainer, true, 1);
        taskEditButton();
      } else {
        _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible", projectIndex);
        _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(project, allContainer, false);
        addTask();
        taskEditButton();
      }
      _modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
      selectProject(allContainer);
      deleteProjectListener();
      storeContainer();
    });
  });

  const checkTaskBox = document.querySelectorAll(".checkbox-task");
  checkTaskBox.forEach((checkBox) => {
    checkBox.addEventListener("change", (e) => {
      const taskIndex = e.target.dataset.index;
      const projectIndex = e.target.dataset.project;
      const { projectArray } = allContainer;
      const project = projectArray[projectIndex];
      const task = project.taskArray[taskIndex];

      task.completed = e.target.checked;
      storeContainer();
    });
  });
}

// Default values

_modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
_modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", "inbox");
_modules_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer, allContainer, false);
taskEditButton();
selectProject(allContainer);
deleteProjectListener();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLE1BQU0sMkVBQTBCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7QUFFQSwyRUFBMEI7QUFDMUIsd0VBQXVCO0FBQ3ZCLHdFQUF1QjtBQUN2QjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiZGF0ZS1mbnMvYWRkRGF5c1wiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcblxuY29uc3QgRE9NbWV0aG9kcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlUYXNrcyA9IChjb250YWluZXIsIE1haW5Db250YWluZXIsIGZpbHRlciwgZGF5cykgPT4ge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1jb250YWluZXJcIik7XG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxldCBwcm9qZWN0QXJyYXk7XG4gICAgaWYgKGNvbnRhaW5lciBpbnN0YW5jZW9mIENvbnRhaW5lcikge1xuICAgICAgcHJvamVjdEFycmF5ID0gY29udGFpbmVyLnByb2plY3RBcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdEFycmF5ID0gW2NvbnRhaW5lcl07XG4gICAgfVxuXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGxldCB0YXNrQXJyYXk7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IHByb2plY3QudGFza0FycmF5O1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGNvbXBhcmVEYXRlID0gYWRkRGF5cyh0b2RheSwgZGF5cyk7XG4gICAgICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIHRhc2tEYXRlIDw9IGNvbXBhcmVEYXRlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tBcnJheSA9IHByb2plY3QudGFza0FycmF5O1xuICAgICAgfVxuXG4gICAgICBpZiAodGFza0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1haW5Qcm9qZWN0QXJyYXkgPSBNYWluQ29udGFpbmVyLnByb2plY3RBcnJheTtcblxuICAgICAgY29uc3Qgc29ydGVkQXJyYXkgPSB0YXNrQXJyYXkuc29ydChcbiAgICAgICAgKGEsIGIpID0+IG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpXG4gICAgICApO1xuICAgICAgc29ydGVkQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TG9jYXRpb24gPSBtYWluUHJvamVjdEFycmF5LmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHRhc2tMb2NhdGlvbiA9IHRhc2tBcnJheS5pbmRleE9mKHRhc2spO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIHRhc2tMb2NhdGlvbik7XG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3RMb2NhdGlvbik7XG5cbiAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRpdGxlQ29udGFpbmVyXCI7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSBcInRhc2stdGl0bGVcIjtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIHRhc2tMb2NhdGlvbik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0TG9jYXRpb24pO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF0ZS5jbGFzc05hbWUgPSBcInRhc2stZGF0ZVwiO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgdGFza0xvY2F0aW9uKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdExvY2F0aW9uKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tcIjtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJjaGVja2JveC10YXNrXCI7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgdGFza0xvY2F0aW9uKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3RMb2NhdGlvbik7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgcmlnaHRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJpZ2h0SXRlbXMuY2xhc3NOYW1lID0gXCJyaWdodFwiO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0TmFtZTtcbiAgICAgICAgcmlnaHRJdGVtcy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NOYW1lID0gXCJ0YXNrLWRlbGV0ZS1idXR0b25cIjtcbiAgICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgdGFza0xvY2F0aW9uKTtcbiAgICAgICAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdExvY2F0aW9uKTtcbiAgICAgICAgcmlnaHRJdGVtcy5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEl0ZW1zKTtcblxuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtc2VjdGlvblwiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICBwcm9qZWN0LmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgICAgcHJvamVjdFRpdGxlLmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlUHJvamVjdEJ0blwiO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5pZCA9IGBkZWxldGUtcHJvamVjdC1idXR0b24tJHtpfWA7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG4gICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRpdGxlID0gKHByb2plY3RDb250YWluZXIsIHZpc2liaWxpdHksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG1haW5UaXRsZS5jbGFzc05hbWUgPSBcIm1haW4tdGl0bGVcIjtcbiAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Q29udGFpbmVyLm5hbWV9OmA7XG4gICAgbWFpblRpdGxlLmlkID0gaW5kZXg7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtYmFyXCIpO1xuICAgIGFkZFRhc2tCdG4uaWQgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICB0b3BCYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICBhZGRUYXNrQnRuLnN0eWxlLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRhc2tzLFxuICAgIGRpc3BsYXlQcm9qZWN0cyxcbiAgICBkaXNwbGF5VGl0bGUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01tZXRob2RzO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcm9qZWN0QXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMucHJvamVjdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBnZXRUYXNrQXJyYXkoKSB7XG4gICAgbGV0IGZpbmFsVGFza0FycmF5ID0gW107XG4gICAgdGhpcy5wcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyB0YXNrQXJyYXkgfSA9IHByb2plY3Q7XG4gICAgICBmaW5hbFRhc2tBcnJheSA9IGZpbmFsVGFza0FycmF5LmNvbmNhdCh0YXNrQXJyYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFRhc2tBcnJheTtcbiAgfVxuXG4gIGdldFByb2plY3RBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0QXJyYXk7XG4gIH1cbn1cbiIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udGFpbmVyKCkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIikpO1xuICAgIGNvbnN0IGFsbENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJJbmJveFwiKTtcbiAgICBhbGxDb250YWluZXIucHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5O1xuICAgIGlmIChwcm9qZWN0QXJyYXkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJJbmJveFwiKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJDbGVhbiB0aGUgSG91c2VcIik7XG4gICAgICBjb25zdCB0YXNrMSA9IG5ldyBUYXNrKFxuICAgICAgICBcIldhc2ggdGhlIERpc2hlc1wiLFxuICAgICAgICBcIjIwMjMtMDUtMTZcIixcbiAgICAgICAgXCJDbGVhbiB0aGUgSG91c2VcIixcbiAgICAgICAgZGVmYXVsdFByb2plY3RcbiAgICAgICk7XG4gICAgICBjb25zdCB0YXNrMiA9IG5ldyBUYXNrKFxuICAgICAgICBcIlRha2UgT3V0IHRoZSBUcmFzaFwiLFxuICAgICAgICBcIjIwMjMtMDUtMjFcIixcbiAgICAgICAgXCJDbGVhbiB0aGUgSG91c2VcIixcbiAgICAgICAgZGVmYXVsdFByb2plY3RcbiAgICAgICk7XG4gICAgICBjb25zdCB0YXNrMyA9IG5ldyBUYXNrKFxuICAgICAgICBcIk1vcCB0aGUgRmxvb3JcIixcbiAgICAgICAgXCIyMDIzLTA1LTE1XCIsXG4gICAgICAgIFwiQ2xlYW4gdGhlIEhvdXNlXCIsXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0XG4gICAgICApO1xuICAgICAgZGVmYXVsdFByb2plY3QuYWRkKHRhc2sxKTtcbiAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZCh0YXNrMik7XG4gICAgICBkZWZhdWx0UHJvamVjdC5hZGQodGFzazMpO1xuXG4gICAgICBjb25zdCBkZWZhdWx0UHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlBhaW50IHRoZSBCZWRyb29tXCIpO1xuICAgICAgY29uc3QgdGFzazQgPSBuZXcgVGFzayhcbiAgICAgICAgXCJCdXkgQ2xlYW5pbmcgU3VwcGxpZXNcIixcbiAgICAgICAgXCIyMDIzLTA1LTE2XCIsXG4gICAgICAgIFwiUGFpbnQgdGhlIEJlZHJvb21cIixcbiAgICAgICAgZGVmYXVsdFByb2plY3QyXG4gICAgICApO1xuICAgICAgY29uc3QgdGFzazUgPSBuZXcgVGFzayhcbiAgICAgICAgXCJCdXkgdGhlIFBhaW50XCIsXG4gICAgICAgIFwiMjAyMi0xMS0yNlwiLFxuICAgICAgICBcIlBhaW50IHRoZSBCZWRyb29tXCIsXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0MlxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRhc2s2ID0gbmV3IFRhc2soXG4gICAgICAgIFwiVGFwZSB0aGUgQmVkcm9vbVwiLFxuICAgICAgICBcIjIwMjUtMTEtMjZcIixcbiAgICAgICAgXCJQYWludCB0aGUgQmVkcm9vbVwiLFxuICAgICAgICBkZWZhdWx0UHJvamVjdDJcbiAgICAgICk7XG5cbiAgICAgIGRlZmF1bHRQcm9qZWN0Mi5hZGQodGFzazQpO1xuICAgICAgZGVmYXVsdFByb2plY3QyLmFkZCh0YXNrNSk7XG4gICAgICBkZWZhdWx0UHJvamVjdDIuYWRkKHRhc2s2KTtcblxuICAgICAgbmV3Q29udGFpbmVyLmFkZChkZWZhdWx0UHJvamVjdCk7XG4gICAgICBuZXdDb250YWluZXIuYWRkKGRlZmF1bHRQcm9qZWN0Mik7XG5cbiAgICAgIHJldHVybiBuZXdDb250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiBhbGxDb250YWluZXI7XG4gIH1cbiAgY29uc3QgYWxsQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcihcIkluYm94XCIpO1xuXG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJDbGVhbiB0aGUgSG91c2VcIik7XG4gIGNvbnN0IHRhc2sxID0gbmV3IFRhc2soXG4gICAgXCJXYXNoIHRoZSBEaXNoZXNcIixcbiAgICBcIjIwMjMtMDUtMTZcIixcbiAgICBcIkNsZWFuIHRoZSBIb3VzZVwiLFxuICAgIGRlZmF1bHRQcm9qZWN0XG4gICk7XG4gIGNvbnN0IHRhc2syID0gbmV3IFRhc2soXG4gICAgXCJUYWtlIE91dCB0aGUgVHJhc2hcIixcbiAgICBcIjIwMjMtMDUtMjFcIixcbiAgICBcIkNsZWFuIHRoZSBIb3VzZVwiLFxuICAgIGRlZmF1bHRQcm9qZWN0XG4gICk7XG4gIGNvbnN0IHRhc2szID0gbmV3IFRhc2soXG4gICAgXCJNb3AgdGhlIEZsb29yXCIsXG4gICAgXCIyMDIzLTA1LTE1XCIsXG4gICAgXCJDbGVhbiB0aGUgSG91c2VcIixcbiAgICBkZWZhdWx0UHJvamVjdFxuICApO1xuICBkZWZhdWx0UHJvamVjdC5hZGQodGFzazEpO1xuICBkZWZhdWx0UHJvamVjdC5hZGQodGFzazIpO1xuICBkZWZhdWx0UHJvamVjdC5hZGQodGFzazMpO1xuXG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiUGFpbnQgdGhlIEJlZHJvb21cIik7XG4gIGNvbnN0IHRhc2s0ID0gbmV3IFRhc2soXG4gICAgXCJCdXkgQ2xlYW5pbmcgU3VwcGxpZXNcIixcbiAgICBcIjIwMjMtMDUtMTZcIixcbiAgICBcIlBhaW50IHRoZSBCZWRyb29tXCIsXG4gICAgZGVmYXVsdFByb2plY3QyXG4gICk7XG4gIGNvbnN0IHRhc2s1ID0gbmV3IFRhc2soXG4gICAgXCJCdXkgdGhlIFBhaW50XCIsXG4gICAgXCIyMDIyLTExLTI2XCIsXG4gICAgXCJQYWludCB0aGUgQmVkcm9vbVwiLFxuICAgIGRlZmF1bHRQcm9qZWN0MlxuICApO1xuICBjb25zdCB0YXNrNiA9IG5ldyBUYXNrKFxuICAgIFwiVGFwZSB0aGUgQmVkcm9vbVwiLFxuICAgIFwiMjAyNS0xMS0yNlwiLFxuICAgIFwiUGFpbnQgdGhlIEJlZHJvb21cIixcbiAgICBkZWZhdWx0UHJvamVjdDJcbiAgKTtcblxuICBkZWZhdWx0UHJvamVjdDIuYWRkKHRhc2s0KTtcbiAgZGVmYXVsdFByb2plY3QyLmFkZCh0YXNrNSk7XG4gIGRlZmF1bHRQcm9qZWN0Mi5hZGQodGFzazYpO1xuXG4gIGFsbENvbnRhaW5lci5hZGQoZGVmYXVsdFByb2plY3QpO1xuICBhbGxDb250YWluZXIuYWRkKGRlZmF1bHRQcm9qZWN0Mik7XG5cbiAgcmV0dXJuIGFsbENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrQXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZCh0YXNrKSB7XG4gICAgdGhpcy50YXNrQXJyYXkucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMudGFza0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBnZXRUYXNrQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza0FycmF5O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRE9NbWV0aG9kcyBmcm9tIFwiLi9tb2R1bGVzL0RPTW1ldGhvZHNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhaW5lclwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy90YXNrXCI7XG5pbXBvcnQgZ2VuZXJhdGVDb250YWluZXIgZnJvbSBcIi4vbW9kdWxlcy9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgYWxsQ29udGFpbmVyID0gZ2VuZXJhdGVDb250YWluZXIoKTtcblxuZnVuY3Rpb24gc3RvcmVDb250YWluZXIoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIFwicHJvamVjdEFycmF5XCIsXG4gICAgSlNPTi5zdHJpbmdpZnkoYWxsQ29udGFpbmVyLnByb2plY3RBcnJheSlcbiAgKTtcbn1cblxuLy8gVGFzayBDb250cm9sc1xuXG5mdW5jdGlvbiBjYW5jZWxUYXNrTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xuICB0YXNrRm9ybUVsZW1lbnQucmVzZXQoKTtcbiAgdGFza0Zvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xuICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tdGl0bGVcIik7XG4gIGNvbnN0IGluZGV4ID0gbWFpblRpdGxlLmlkLnNsaWNlKC0xKTtcbiAgY29uc3QgeyBwcm9qZWN0QXJyYXkgfSA9IGFsbENvbnRhaW5lcjtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZS1maWVsZFwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtZmllbGRcIik7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0QXJyYXlbaW5kZXhdO1xuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUudmFsdWUsIGR1ZURhdGUudmFsdWUsIHByb2plY3QubmFtZSwgcHJvamVjdCk7XG4gIHByb2plY3QudGFza0FycmF5LnB1c2godGFzayk7XG4gIHN0b3JlQ29udGFpbmVyKCk7XG4gIHRhc2tGb3JtRWxlbWVudC5yZXNldCgpO1xuICB0YXNrRm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKHByb2plY3QsIGFsbENvbnRhaW5lciwgZmFsc2UpO1xuICB0YXNrRWRpdEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xuICB0YXNrRm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXN1Ym1pdC1idXR0b25cIik7XG4gIHN1Ym1pdFRhc2tCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFRhc2tMaXN0ZW5lcik7XG4gIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFRhc2tMaXN0ZW5lcik7XG4gIGNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stY2FuY2VsLWJ1dHRvblwiKTtcbiAgc3VibWl0VGFza0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsVGFza0xpc3RlbmVyKTtcbiAgY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsVGFza0xpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrTGlzdGVuZXIpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrTGlzdGVuZXIpO1xufVxuXG4vLyBQcm9qZWN0IENvbnRyb2xzIC8vXG5cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QoY29udGFpbmVyKSB7XG4gIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY29udGFpbmVyLnByb2plY3RBcnJheVtpbmRleF07XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShwcm9qZWN0LCBcInZpc2libGVcIiwgaW5kZXgpO1xuICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MocHJvamVjdCwgYWxsQ29udGFpbmVyLCBmYWxzZSk7XG4gICAgICB0YXNrRWRpdEJ1dHRvbigpO1xuICAgICAgYWRkVGFzaygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdExpc3RlbmVyKCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlUHJvamVjdEJ0blwiKTtcbiAgZGVsZXRlUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgYWxsQ29udGFpbmVyLnJlbW92ZShpbmRleCk7XG4gICAgICBzdG9yZUNvbnRhaW5lcigpO1xuICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5UHJvamVjdHMoYWxsQ29udGFpbmVyLnByb2plY3RBcnJheSk7XG4gICAgICBzZWxlY3RQcm9qZWN0KGFsbENvbnRhaW5lcik7XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShhbGxDb250YWluZXIsIFwiaGlkZGVuXCIsIE5hTik7XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhhbGxDb250YWluZXIsIGFsbENvbnRhaW5lciwgZmFsc2UpO1xuICAgICAgdGFza0VkaXRCdXR0b24oKTtcbiAgICAgIGRlbGV0ZVByb2plY3RMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbXMoKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWUtZmllbGRcIik7XG4gIGNvbnN0IHRpdGxlID0gcHJvamVjdE5hbWUudmFsdWU7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gIGNvbnN0IHByb2plY3RBcnJheUxlbmd0aCA9IGFsbENvbnRhaW5lci5wcm9qZWN0QXJyYXkubGVuZ3RoO1xuICBjb25zdCBwcm9qZWN0Rm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKTtcbiAgcHJvamVjdEZvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBwcm9qZWN0Rm9ybUVsZW1lbnQucmVzZXQoKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUocHJvamVjdCwgXCJ2aXNpYmxlXCIsIHByb2plY3RBcnJheUxlbmd0aCk7XG4gIGFkZFRhc2soKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MocHJvamVjdCwgYWxsQ29udGFpbmVyLCBmYWxzZSk7XG4gIHRhc2tFZGl0QnV0dG9uKCk7XG4gIGFsbENvbnRhaW5lci5hZGQocHJvamVjdCk7XG4gIHN0b3JlQ29udGFpbmVyKCk7XG4gIERPTW1ldGhvZHMuZGlzcGxheVByb2plY3RzKGFsbENvbnRhaW5lci5wcm9qZWN0QXJyYXkpO1xuICBzZWxlY3RQcm9qZWN0KGFsbENvbnRhaW5lcik7XG4gIGRlbGV0ZVByb2plY3RMaXN0ZW5lcigpO1xufVxuXG4vLyBJbml0aWFsIFRhc2sgTGlzdGVuZXJzXG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0Rm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBjb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXN1Ym1pdC1idXR0b25cIik7XG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldEl0ZW1zKTtcbiAgY29uc3QgY2FuY2VsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnV0dG9uXCIpO1xuICBjYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHByb2plY3RGb3JtRWxlbWVudC5yZXNldCgpO1xuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBpbmJveExpc3RlbmVyRnVuY3Rpb24oKSB7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKGFsbENvbnRhaW5lciwgXCJoaWRkZW5cIiwgXCJpbmJveFwiKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoYWxsQ29udGFpbmVyLCBhbGxDb250YWluZXIsIGZhbHNlKTtcbiAgdGFza0VkaXRCdXR0b24oKTtcbn1cblxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpO1xuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluYm94TGlzdGVuZXJGdW5jdGlvbik7XG5cbmZ1bmN0aW9uIHRvZGF5TGlzdGVuZXJGdW5jdGlvbigpIHtcbiAgY29uc3QgdG9kYXlDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKFwiVG9kYXlcIik7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKHRvZGF5Q29udGFpbmVyLCBcImhpZGRlblwiLCBcInRvZGF5XCIpO1xuICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhhbGxDb250YWluZXIsIGFsbENvbnRhaW5lciwgdHJ1ZSwgMSk7XG4gIHRhc2tFZGl0QnV0dG9uKCk7XG59XG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RheUxpc3RlbmVyRnVuY3Rpb24pO1xuXG5mdW5jdGlvbiB1cGNvbWluZ0xpc3RlbmVyRnVuY3Rpb24oKSB7XG4gIGNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcihcIlVwY29taW5nXCIpO1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZSh1cGNvbWluZ0NvbnRhaW5lciwgXCJoaWRkZW5cIiwgXCJ1cGNvbWluZ1wiKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoYWxsQ29udGFpbmVyLCBhbGxDb250YWluZXIsIHRydWUsIDcpO1xuICB0YXNrRWRpdEJ1dHRvbigpO1xufVxuXG5jb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBjb21pbmdcIik7XG51cGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBjb21pbmdMaXN0ZW5lckZ1bmN0aW9uKTtcblxuLy8gVGFzayBFZGl0XG5cbmZ1bmN0aW9uIHRhc2tFZGl0QnV0dG9uKCkge1xuICBjb25zdCBkZWxldGVUYXNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1kZWxldGUtYnV0dG9uXCIpO1xuICBkZWxldGVUYXNrQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgY29uc3QgeyBwcm9qZWN0QXJyYXkgfSA9IGFsbENvbnRhaW5lcjtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XTtcbiAgICAgIHByb2plY3QudGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXRpdGxlXCIpO1xuICAgICAgbGV0IHRpdGxlTmFtZSA9IG1haW5UaXRsZS5pZDtcbiAgICAgIGNvbnN0IHsgdGFza0FycmF5IH0gPSBwcm9qZWN0O1xuXG4gICAgICBpZiAodGFza0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhbGxDb250YWluZXIucmVtb3ZlKHByb2plY3RJbmRleCk7XG4gICAgICAgIHRpdGxlTmFtZSA9IFwiaW5ib3hcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpdGxlTmFtZSA9PT0gXCJpbmJveFwiKSB7XG4gICAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKGFsbENvbnRhaW5lciwgXCJoaWRkZW5cIiwgXCJpbmJveFwiKTtcbiAgICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoYWxsQ29udGFpbmVyLCBhbGxDb250YWluZXIsIGZhbHNlKTtcbiAgICAgICAgdGFza0VkaXRCdXR0b24oKTtcbiAgICAgIH0gZWxzZSBpZiAodGl0bGVOYW1lID09PSBcInVwY29taW5nXCIpIHtcbiAgICAgICAgY29uc3QgdXBjb21pbmdDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKFwiVXBjb21pbmdcIik7XG4gICAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKHVwY29taW5nQ29udGFpbmVyLCBcImhpZGRlblwiLCBcInVwY29taW5nXCIpO1xuICAgICAgICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhhbGxDb250YWluZXIsIGFsbENvbnRhaW5lciwgdHJ1ZSwgNyk7XG4gICAgICAgIHRhc2tFZGl0QnV0dG9uKCk7XG4gICAgICB9IGVsc2UgaWYgKHRpdGxlTmFtZSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcihcIlRvZGF5XCIpO1xuICAgICAgICBET01tZXRob2RzLmRpc3BsYXlUaXRsZSh0b2RheUNvbnRhaW5lciwgXCJoaWRkZW5cIiwgXCJ0b2RheVwiKTtcbiAgICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoYWxsQ29udGFpbmVyLCBhbGxDb250YWluZXIsIHRydWUsIDEpO1xuICAgICAgICB0YXNrRWRpdEJ1dHRvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUocHJvamVjdCwgXCJ2aXNpYmxlXCIsIHByb2plY3RJbmRleCk7XG4gICAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKHByb2plY3QsIGFsbENvbnRhaW5lciwgZmFsc2UpO1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIHRhc2tFZGl0QnV0dG9uKCk7XG4gICAgICB9XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgICAgIHNlbGVjdFByb2plY3QoYWxsQ29udGFpbmVyKTtcbiAgICAgIGRlbGV0ZVByb2plY3RMaXN0ZW5lcigpO1xuICAgICAgc3RvcmVDb250YWluZXIoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY2hlY2tUYXNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveC10YXNrXCIpO1xuICBjaGVja1Rhc2tCb3guZm9yRWFjaCgoY2hlY2tCb3gpID0+IHtcbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgY29uc3QgeyBwcm9qZWN0QXJyYXkgfSA9IGFsbENvbnRhaW5lcjtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XTtcbiAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tBcnJheVt0YXNrSW5kZXhdO1xuXG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICBzdG9yZUNvbnRhaW5lcigpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gRGVmYXVsdCB2YWx1ZXNcblxuRE9NbWV0aG9kcy5kaXNwbGF5UHJvamVjdHMoYWxsQ29udGFpbmVyLnByb2plY3RBcnJheSk7XG5ET01tZXRob2RzLmRpc3BsYXlUaXRsZShhbGxDb250YWluZXIsIFwiaGlkZGVuXCIsIFwiaW5ib3hcIik7XG5ET01tZXRob2RzLmRpc3BsYXlUYXNrcyhhbGxDb250YWluZXIsIGFsbENvbnRhaW5lciwgZmFsc2UpO1xudGFza0VkaXRCdXR0b24oKTtcbnNlbGVjdFByb2plY3QoYWxsQ29udGFpbmVyKTtcbmRlbGV0ZVByb2plY3RMaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9