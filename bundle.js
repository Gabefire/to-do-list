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

/***/ "./src/DOMmethods.js":
/*!***************************!*\
  !*** ./src/DOMmethods.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMmethods = (() => {
  const displayTasks = (array, projectIndex, projectArray) => {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    const sortedArray = array.sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
    if (array.length === 0) {
      return;
    }

    sortedArray.forEach((task) => {
      const projectTask = task.projectLocation;
      const projectLocation = projectArray.indexOf(projectTask);
      const { taskArray } = projectTask;
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
      if (projectIndex >= 0) projectName.id = `project ${projectIndex}`;
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

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/addDays */ "./node_modules/date-fns/esm/addDays/index.js");


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

  filterDate(days) {
    const taskArray = this.getTaskArray();
    const today = new Date();
    const compareDate = (0,date_fns_addDays__WEBPACK_IMPORTED_MODULE_0__["default"])(today, days);
    const finalArray = taskArray.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return taskDate <= compareDate;
    });
    return finalArray;
  }
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
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

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, dueDate, projectName, project) {
    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
    this.projectName = projectName;
    this.projectLocation = project;
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
/* harmony import */ var _DOMmethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMmethods */ "./src/DOMmethods.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "./src/container.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");





const allContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Inbox");

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
  const task = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](taskName.value, dueDate.value, project.name, project);
  project.add(task);
  taskFormElement.reset();
  taskFormElement.style.visibility = "hidden";
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
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
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible", index);
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
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
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
      selectProject(allContainer);
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", NaN);
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
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
  const project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
  const projectArrayLength = allContainer.projectArray.length;
  const projectFormElement = document.getElementById("project-form");
  projectFormElement.style.visibility = "hidden";
  projectFormElement.reset();
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible", projectArrayLength);
  addTask();
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
    project.getTaskArray(),
    projectArrayLength,
    allContainer.projectArray
  );
  taskEditButton();
  allContainer.add(project);
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
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
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", "inbox");
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
    allContainer.getTaskArray(),
    -1,
    allContainer.projectArray
  );
  taskEditButton();
}

const inboxBtn = document.getElementById("inbox");
inboxBtn.addEventListener("click", inboxListenerFunction);

function todayListenerFunction() {
  const todayContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Today");
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(todayContainer, "hidden", "today");
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
    allContainer.filterDate(1),
    -1,
    allContainer.projectArray
  );
  taskEditButton();
}

const todayBtn = document.getElementById("today");
todayBtn.addEventListener("click", todayListenerFunction);

function upcomingListenerFunction() {
  const upcomingContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Upcoming");
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(upcomingContainer, "hidden", "upcoming");
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
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
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", "inbox");
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
          allContainer.getTaskArray(),
          -1,
          allContainer.projectArray
        );
        taskEditButton();
      } else if (titleName === "upcoming") {
        const upcomingContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Upcoming");
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(upcomingContainer, "hidden", "upcoming");
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
          allContainer.filterDate(7),
          -1,
          allContainer.projectArray
        );
        taskEditButton();
      } else if (titleName === "today") {
        const todayContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Today");
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(todayContainer, "hidden", "today");
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
          allContainer.filterDate(1),
          -1,
          allContainer.projectArray
        );
        taskEditButton();
      } else {
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible", projectIndex);
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
          project.getTaskArray(),
          projectIndex,
          allContainer.projectArray
        );
        addTask();
        taskEditButton();
      }
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
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

const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Clean the House");
const task1 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](
  "Wash the Dishes",
  "2023-05-16",
  "Clean the House",
  defaultProject
);
const task2 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](
  "Take Out the Trash",
  "2023-05-21",
  "Clean the House",
  defaultProject
);
const task3 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](
  "Mop the Floor",
  "2023-05-15",
  "Clean the House",
  defaultProject
);
defaultProject.add(task1);
defaultProject.add(task2);
defaultProject.add(task3);

const defaultProject2 = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Paint the Bedroom");
const task4 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](
  "Buy Cleaning Supplies",
  "2023-05-16",
  "Paint the Bedroom",
  defaultProject2
);
const task5 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](
  "Buy the Paint",
  "2022-11-26",
  "Paint the Bedroom",
  defaultProject2
);
const task6 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](
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

_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", "inbox");
_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(
  allContainer.getTaskArray(),
  -1,
  allContainer.projectArray
);
taskEditButton();
selectProject(allContainer);
deleteProjectListener();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRUFBMEI7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUEsMkJBQTJCLGdEQUFPO0FBQ2xDLGtCQUFrQiw2Q0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsZ0RBQU87QUFDbkMsa0JBQWtCLDZDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUEwQjtBQUMxQixnRUFBdUI7QUFDdkIsZ0VBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiY29uc3QgRE9NbWV0aG9kcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlUYXNrcyA9IChhcnJheSwgcHJvamVjdEluZGV4LCBwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtY29udGFpbmVyXCIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IGFycmF5LnNvcnQoXG4gICAgICAoYSwgYikgPT4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSlcbiAgICApO1xuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb3J0ZWRBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0VGFzayA9IHRhc2sucHJvamVjdExvY2F0aW9uO1xuICAgICAgY29uc3QgcHJvamVjdExvY2F0aW9uID0gcHJvamVjdEFycmF5LmluZGV4T2YocHJvamVjdFRhc2spO1xuICAgICAgY29uc3QgeyB0YXNrQXJyYXkgfSA9IHByb2plY3RUYXNrO1xuICAgICAgY29uc3QgdGFza0xvY2F0aW9uID0gdGFza0FycmF5LmluZGV4T2YodGFzayk7XG4gICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0YXNrTG9jYXRpb24pO1xuICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdExvY2F0aW9uKTtcblxuICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0aXRsZUNvbnRhaW5lclwiO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aXRsZS5jbGFzc05hbWUgPSBcInRhc2stdGl0bGVcIjtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgdGFza0xvY2F0aW9uKTtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0TG9jYXRpb24pO1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlLmNsYXNzTmFtZSA9IFwidGFzay1kYXRlXCI7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIHRhc2tMb2NhdGlvbik7XG4gICAgICBkYXRlLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0TG9jYXRpb24pO1xuICAgICAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tcIjtcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tib3gtdGFza1wiO1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0YXNrTG9jYXRpb24pO1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3RMb2NhdGlvbik7XG4gICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gICAgICBjb25zdCByaWdodEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJpZ2h0SXRlbXMuY2xhc3NOYW1lID0gXCJyaWdodFwiO1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LW5hbWVcIjtcbiAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0TmFtZTtcbiAgICAgIGlmIChwcm9qZWN0SW5kZXggPj0gMCkgcHJvamVjdE5hbWUuaWQgPSBgcHJvamVjdCAke3Byb2plY3RJbmRleH1gO1xuICAgICAgcmlnaHRJdGVtcy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlVGFza0J0bi5jbGFzc05hbWUgPSBcInRhc2stZGVsZXRlLWJ1dHRvblwiO1xuICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIHRhc2tMb2NhdGlvbik7XG4gICAgICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0TG9jYXRpb24pO1xuICAgICAgcmlnaHRJdGVtcy5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRJdGVtcyk7XG5cbiAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtc2VjdGlvblwiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICBwcm9qZWN0LmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgICAgcHJvamVjdFRpdGxlLmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlUHJvamVjdEJ0blwiO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5pZCA9IGBkZWxldGUtcHJvamVjdC1idXR0b24tJHtpfWA7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG4gICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRpdGxlID0gKHByb2plY3RDb250YWluZXIsIHZpc2liaWxpdHksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG1haW5UaXRsZS5jbGFzc05hbWUgPSBcIm1haW4tdGl0bGVcIjtcbiAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Q29udGFpbmVyLm5hbWV9OmA7XG4gICAgbWFpblRpdGxlLmlkID0gaW5kZXg7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtYmFyXCIpO1xuICAgIGFkZFRhc2tCdG4uaWQgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICB0b3BCYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICBhZGRUYXNrQnRuLnN0eWxlLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRhc2tzLFxuICAgIGRpc3BsYXlQcm9qZWN0cyxcbiAgICBkaXNwbGF5VGl0bGUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01tZXRob2RzO1xuIiwiaW1wb3J0IGFkZERheXMgZnJvbSBcImRhdGUtZm5zL2FkZERheXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcm9qZWN0QXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMucHJvamVjdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBnZXRUYXNrQXJyYXkoKSB7XG4gICAgbGV0IGZpbmFsVGFza0FycmF5ID0gW107XG4gICAgdGhpcy5wcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyB0YXNrQXJyYXkgfSA9IHByb2plY3Q7XG4gICAgICBmaW5hbFRhc2tBcnJheSA9IGZpbmFsVGFza0FycmF5LmNvbmNhdCh0YXNrQXJyYXkpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFRhc2tBcnJheTtcbiAgfVxuXG4gIGdldFByb2plY3RBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0QXJyYXk7XG4gIH1cblxuICBmaWx0ZXJEYXRlKGRheXMpIHtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSB0aGlzLmdldFRhc2tBcnJheSgpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjb21wYXJlRGF0ZSA9IGFkZERheXModG9kYXksIGRheXMpO1xuICAgIGNvbnN0IGZpbmFsQXJyYXkgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICByZXR1cm4gdGFza0RhdGUgPD0gY29tcGFyZURhdGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsQXJyYXk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tBcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkKHRhc2spIHtcbiAgICB0aGlzLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy50YXNrQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGdldFRhc2tBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrQXJyYXk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB0aGlzLnByb2plY3RMb2NhdGlvbiA9IHByb2plY3Q7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRE9NbWV0aG9kcyBmcm9tIFwiLi9ET01tZXRob2RzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbnRhaW5lclwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBhbGxDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKFwiSW5ib3hcIik7XG5cbi8vIFRhc2sgQ29udHJvbHNcblxuZnVuY3Rpb24gY2FuY2VsVGFza0xpc3RlbmVyKCkge1xuICBjb25zdCB0YXNrRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZm9ybVwiKTtcbiAgdGFza0Zvcm1FbGVtZW50LnJlc2V0KCk7XG4gIHRhc2tGb3JtRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFza0xpc3RlbmVyKCkge1xuICBjb25zdCB0YXNrRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZm9ybVwiKTtcbiAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXRpdGxlXCIpO1xuICBjb25zdCBpbmRleCA9IG1haW5UaXRsZS5pZC5zbGljZSgtMSk7XG4gIGNvbnN0IHsgcHJvamVjdEFycmF5IH0gPSBhbGxDb250YWluZXI7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWUtZmllbGRcIik7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZpZWxkXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEFycmF5W2luZGV4XTtcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcm9qZWN0Lm5hbWUsIHByb2plY3QpO1xuICBwcm9qZWN0LmFkZCh0YXNrKTtcbiAgdGFza0Zvcm1FbGVtZW50LnJlc2V0KCk7XG4gIHRhc2tGb3JtRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoXG4gICAgcHJvamVjdC5nZXRUYXNrQXJyYXkoKSxcbiAgICBpbmRleCxcbiAgICBhbGxDb250YWluZXIucHJvamVjdEFycmF5XG4gICk7XG4gIHRhc2tFZGl0QnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcigpIHtcbiAgY29uc3QgdGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tGb3JtRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stc3VibWl0LWJ1dHRvblwiKTtcbiAgc3VibWl0VGFza0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0VGFza0xpc3RlbmVyKTtcbiAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0VGFza0xpc3RlbmVyKTtcbiAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1jYW5jZWwtYnV0dG9uXCIpO1xuICBzdWJtaXRUYXNrQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxUYXNrTGlzdGVuZXIpO1xuICBjYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxUYXNrTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idXR0b25cIik7XG4gIGFkZFRhc2tCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tMaXN0ZW5lcik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tMaXN0ZW5lcik7XG59XG5cbi8vIFByb2plY3QgQ29udHJvbHMgLy9cblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChjb250YWluZXIpIHtcbiAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGl0bGVcIik7XG4gIHByb2plY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjb250YWluZXIucHJvamVjdEFycmF5W2luZGV4XTtcbiAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKHByb2plY3QsIFwidmlzaWJsZVwiLCBpbmRleCk7XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhcbiAgICAgICAgcHJvamVjdC5nZXRUYXNrQXJyYXkoKSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGFsbENvbnRhaW5lci5wcm9qZWN0QXJyYXlcbiAgICAgICk7XG4gICAgICB0YXNrRWRpdEJ1dHRvbigpO1xuICAgICAgYWRkVGFzaygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdExpc3RlbmVyKCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlUHJvamVjdEJ0blwiKTtcbiAgZGVsZXRlUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgYWxsQ29udGFpbmVyLnJlbW92ZShpbmRleCk7XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgICAgIHNlbGVjdFByb2plY3QoYWxsQ29udGFpbmVyKTtcbiAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKGFsbENvbnRhaW5lciwgXCJoaWRkZW5cIiwgTmFOKTtcbiAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKFxuICAgICAgICBhbGxDb250YWluZXIuZ2V0VGFza0FycmF5KCksXG4gICAgICAgIC0xLFxuICAgICAgICBhbGxDb250YWluZXIucHJvamVjdEFycmF5XG4gICAgICApO1xuICAgICAgdGFza0VkaXRCdXR0b24oKTtcbiAgICAgIGRlbGV0ZVByb2plY3RMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbXMoKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWUtZmllbGRcIik7XG4gIGNvbnN0IHRpdGxlID0gcHJvamVjdE5hbWUudmFsdWU7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gIGNvbnN0IHByb2plY3RBcnJheUxlbmd0aCA9IGFsbENvbnRhaW5lci5wcm9qZWN0QXJyYXkubGVuZ3RoO1xuICBjb25zdCBwcm9qZWN0Rm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKTtcbiAgcHJvamVjdEZvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBwcm9qZWN0Rm9ybUVsZW1lbnQucmVzZXQoKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUocHJvamVjdCwgXCJ2aXNpYmxlXCIsIHByb2plY3RBcnJheUxlbmd0aCk7XG4gIGFkZFRhc2soKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoXG4gICAgcHJvamVjdC5nZXRUYXNrQXJyYXkoKSxcbiAgICBwcm9qZWN0QXJyYXlMZW5ndGgsXG4gICAgYWxsQ29udGFpbmVyLnByb2plY3RBcnJheVxuICApO1xuICB0YXNrRWRpdEJ1dHRvbigpO1xuICBhbGxDb250YWluZXIuYWRkKHByb2plY3QpO1xuICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgc2VsZWN0UHJvamVjdChhbGxDb250YWluZXIpO1xuICBkZWxldGVQcm9qZWN0TGlzdGVuZXIoKTtcbn1cblxuLy8gSW5pdGlhbCBUYXNrIExpc3RlbmVyc1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idXR0b25cIik7XG5jb25zdCBwcm9qZWN0Rm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvamVjdEZvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1zdWJtaXQtYnV0dG9uXCIpO1xuICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRJdGVtcyk7XG4gIGNvbnN0IGNhbmNlbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtY2FuY2VsLWJ1dHRvblwiKTtcbiAgY2FuY2VsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBwcm9qZWN0Rm9ybUVsZW1lbnQucmVzZXQoKTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gaW5ib3hMaXN0ZW5lckZ1bmN0aW9uKCkge1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShhbGxDb250YWluZXIsIFwiaGlkZGVuXCIsIFwiaW5ib3hcIik7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKFxuICAgIGFsbENvbnRhaW5lci5nZXRUYXNrQXJyYXkoKSxcbiAgICAtMSxcbiAgICBhbGxDb250YWluZXIucHJvamVjdEFycmF5XG4gICk7XG4gIHRhc2tFZGl0QnV0dG9uKCk7XG59XG5cbmNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcbmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmJveExpc3RlbmVyRnVuY3Rpb24pO1xuXG5mdW5jdGlvbiB0b2RheUxpc3RlbmVyRnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcihcIlRvZGF5XCIpO1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZSh0b2RheUNvbnRhaW5lciwgXCJoaWRkZW5cIiwgXCJ0b2RheVwiKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoXG4gICAgYWxsQ29udGFpbmVyLmZpbHRlckRhdGUoMSksXG4gICAgLTEsXG4gICAgYWxsQ29udGFpbmVyLnByb2plY3RBcnJheVxuICApO1xuICB0YXNrRWRpdEJ1dHRvbigpO1xufVxuXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIik7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kYXlMaXN0ZW5lckZ1bmN0aW9uKTtcblxuZnVuY3Rpb24gdXBjb21pbmdMaXN0ZW5lckZ1bmN0aW9uKCkge1xuICBjb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJVcGNvbWluZ1wiKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUodXBjb21pbmdDb250YWluZXIsIFwiaGlkZGVuXCIsIFwidXBjb21pbmdcIik7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKFxuICAgIGFsbENvbnRhaW5lci5maWx0ZXJEYXRlKDcpLFxuICAgIC0xLFxuICAgIGFsbENvbnRhaW5lci5wcm9qZWN0QXJyYXlcbiAgKTtcbiAgdGFza0VkaXRCdXR0b24oKTtcbn1cblxuY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwY29taW5nXCIpO1xudXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwY29taW5nTGlzdGVuZXJGdW5jdGlvbik7XG5cbi8vIFRhc2sgRWRpdFxuXG5mdW5jdGlvbiB0YXNrRWRpdEJ1dHRvbigpIHtcbiAgY29uc3QgZGVsZXRlVGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZGVsZXRlLWJ1dHRvblwiKTtcbiAgZGVsZXRlVGFza0J0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgICAgIGNvbnN0IHsgcHJvamVjdEFycmF5IH0gPSBhbGxDb250YWluZXI7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF07XG4gICAgICBwcm9qZWN0LnJlbW92ZSh0YXNrSW5kZXgpO1xuICAgICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXRpdGxlXCIpO1xuICAgICAgbGV0IHRpdGxlTmFtZSA9IG1haW5UaXRsZS5pZDtcbiAgICAgIGNvbnN0IHRhc2tBcnJheSA9IHByb2plY3QuZ2V0VGFza0FycmF5KCk7XG5cbiAgICAgIGlmICh0YXNrQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFsbENvbnRhaW5lci5yZW1vdmUocHJvamVjdEluZGV4KTtcbiAgICAgICAgdGl0bGVOYW1lID0gXCJpbmJveFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodGl0bGVOYW1lID09PSBcImluYm94XCIpIHtcbiAgICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUoYWxsQ29udGFpbmVyLCBcImhpZGRlblwiLCBcImluYm94XCIpO1xuICAgICAgICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhcbiAgICAgICAgICBhbGxDb250YWluZXIuZ2V0VGFza0FycmF5KCksXG4gICAgICAgICAgLTEsXG4gICAgICAgICAgYWxsQ29udGFpbmVyLnByb2plY3RBcnJheVxuICAgICAgICApO1xuICAgICAgICB0YXNrRWRpdEJ1dHRvbigpO1xuICAgICAgfSBlbHNlIGlmICh0aXRsZU5hbWUgPT09IFwidXBjb21pbmdcIikge1xuICAgICAgICBjb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJVcGNvbWluZ1wiKTtcbiAgICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUodXBjb21pbmdDb250YWluZXIsIFwiaGlkZGVuXCIsIFwidXBjb21pbmdcIik7XG4gICAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKFxuICAgICAgICAgIGFsbENvbnRhaW5lci5maWx0ZXJEYXRlKDcpLFxuICAgICAgICAgIC0xLFxuICAgICAgICAgIGFsbENvbnRhaW5lci5wcm9qZWN0QXJyYXlcbiAgICAgICAgKTtcbiAgICAgICAgdGFza0VkaXRCdXR0b24oKTtcbiAgICAgIH0gZWxzZSBpZiAodGl0bGVOYW1lID09PSBcInRvZGF5XCIpIHtcbiAgICAgICAgY29uc3QgdG9kYXlDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKFwiVG9kYXlcIik7XG4gICAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKHRvZGF5Q29udGFpbmVyLCBcImhpZGRlblwiLCBcInRvZGF5XCIpO1xuICAgICAgICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhcbiAgICAgICAgICBhbGxDb250YWluZXIuZmlsdGVyRGF0ZSgxKSxcbiAgICAgICAgICAtMSxcbiAgICAgICAgICBhbGxDb250YWluZXIucHJvamVjdEFycmF5XG4gICAgICAgICk7XG4gICAgICAgIHRhc2tFZGl0QnV0dG9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShwcm9qZWN0LCBcInZpc2libGVcIiwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoXG4gICAgICAgICAgcHJvamVjdC5nZXRUYXNrQXJyYXkoKSxcbiAgICAgICAgICBwcm9qZWN0SW5kZXgsXG4gICAgICAgICAgYWxsQ29udGFpbmVyLnByb2plY3RBcnJheVxuICAgICAgICApO1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIHRhc2tFZGl0QnV0dG9uKCk7XG4gICAgICB9XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgICAgIHNlbGVjdFByb2plY3QoYWxsQ29udGFpbmVyKTtcbiAgICAgIGRlbGV0ZVByb2plY3RMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjaGVja1Rhc2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94LXRhc2tcIik7XG4gIGNoZWNrVGFza0JveC5mb3JFYWNoKChjaGVja0JveCkgPT4ge1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gICAgICBjb25zdCB7IHByb2plY3RBcnJheSB9ID0gYWxsQ29udGFpbmVyO1xuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdO1xuICAgICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFza0FycmF5KClbdGFza0luZGV4XTtcblxuICAgICAgdGFzay5jb21wbGV0ZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gRGVmYXVsdCBwcm9qZWN0IGFuZCB0YXNrIHZhbHVlc1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiQ2xlYW4gdGhlIEhvdXNlXCIpO1xuY29uc3QgdGFzazEgPSBuZXcgVGFzayhcbiAgXCJXYXNoIHRoZSBEaXNoZXNcIixcbiAgXCIyMDIzLTA1LTE2XCIsXG4gIFwiQ2xlYW4gdGhlIEhvdXNlXCIsXG4gIGRlZmF1bHRQcm9qZWN0XG4pO1xuY29uc3QgdGFzazIgPSBuZXcgVGFzayhcbiAgXCJUYWtlIE91dCB0aGUgVHJhc2hcIixcbiAgXCIyMDIzLTA1LTIxXCIsXG4gIFwiQ2xlYW4gdGhlIEhvdXNlXCIsXG4gIGRlZmF1bHRQcm9qZWN0XG4pO1xuY29uc3QgdGFzazMgPSBuZXcgVGFzayhcbiAgXCJNb3AgdGhlIEZsb29yXCIsXG4gIFwiMjAyMy0wNS0xNVwiLFxuICBcIkNsZWFuIHRoZSBIb3VzZVwiLFxuICBkZWZhdWx0UHJvamVjdFxuKTtcbmRlZmF1bHRQcm9qZWN0LmFkZCh0YXNrMSk7XG5kZWZhdWx0UHJvamVjdC5hZGQodGFzazIpO1xuZGVmYXVsdFByb2plY3QuYWRkKHRhc2szKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QyID0gbmV3IFByb2plY3QoXCJQYWludCB0aGUgQmVkcm9vbVwiKTtcbmNvbnN0IHRhc2s0ID0gbmV3IFRhc2soXG4gIFwiQnV5IENsZWFuaW5nIFN1cHBsaWVzXCIsXG4gIFwiMjAyMy0wNS0xNlwiLFxuICBcIlBhaW50IHRoZSBCZWRyb29tXCIsXG4gIGRlZmF1bHRQcm9qZWN0MlxuKTtcbmNvbnN0IHRhc2s1ID0gbmV3IFRhc2soXG4gIFwiQnV5IHRoZSBQYWludFwiLFxuICBcIjIwMjItMTEtMjZcIixcbiAgXCJQYWludCB0aGUgQmVkcm9vbVwiLFxuICBkZWZhdWx0UHJvamVjdDJcbik7XG5jb25zdCB0YXNrNiA9IG5ldyBUYXNrKFxuICBcIlRhcGUgdGhlIEJlZHJvb21cIixcbiAgXCIyMDI1LTExLTI2XCIsXG4gIFwiUGFpbnQgdGhlIEJlZHJvb21cIixcbiAgZGVmYXVsdFByb2plY3QyXG4pO1xuXG5kZWZhdWx0UHJvamVjdDIuYWRkKHRhc2s0KTtcbmRlZmF1bHRQcm9qZWN0Mi5hZGQodGFzazUpO1xuZGVmYXVsdFByb2plY3QyLmFkZCh0YXNrNik7XG5cbmFsbENvbnRhaW5lci5hZGQoZGVmYXVsdFByb2plY3QpO1xuYWxsQ29udGFpbmVyLmFkZChkZWZhdWx0UHJvamVjdDIpO1xuXG5ET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbkRPTW1ldGhvZHMuZGlzcGxheVRpdGxlKGFsbENvbnRhaW5lciwgXCJoaWRkZW5cIiwgXCJpbmJveFwiKTtcbkRPTW1ldGhvZHMuZGlzcGxheVRhc2tzKFxuICBhbGxDb250YWluZXIuZ2V0VGFza0FycmF5KCksXG4gIC0xLFxuICBhbGxDb250YWluZXIucHJvamVjdEFycmF5XG4pO1xudGFza0VkaXRCdXR0b24oKTtcbnNlbGVjdFByb2plY3QoYWxsQ29udGFpbmVyKTtcbmRlbGV0ZVByb2plY3RMaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9