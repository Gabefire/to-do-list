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
    this.taskArray.slice(index);
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
/* harmony import */ var _DOMmethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMmethods */ "./src/DOMmethods.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "./src/container.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");





const allContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Inbox");
const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Clean the House");
const task1 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"]("Wash the Dishes", "2023-05-16", "Clean the House");
const task2 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"]("Take Out the Trash", "2023-05-21", "Clean the House");
const task3 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"]("Mop the Floor", "2023-05-15", "Clean the House");
defaultProject.add(task1);
defaultProject.add(task2);
defaultProject.add(task3);

const defaultProject2 = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Paint the Bedroom");
const task4 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](
  "Buy Cleaning Supplies",
  "2023-05-16",
  "Paint the Bedroom"
);
const task5 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"]("But the Paint", "2022-11-26", "Paint the Bedroom");
const task6 = new _task__WEBPACK_IMPORTED_MODULE_3__["default"]("Tape the Bedroom", "2025-11-26", "Paint the Bedroom");

defaultProject2.add(task4);
defaultProject2.add(task5);
defaultProject2.add(task6);

allContainer.add(defaultProject);
allContainer.add(defaultProject2);

_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", NaN);
_DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer.getTaskArray(), -1);

function removeTaskListener() {
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
  const task = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](taskName.value, dueDate.value, project.name);
  project.add(task);
  taskFormElement.reset();
  taskFormElement.style.visibility = "hidden";
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(project.getTaskArray(), index);
}

function addTaskListener() {
  const taskFormElement = document.getElementById("task-form");
  taskFormElement.style.visibility = "visible";
  const submitTaskBtn = document.getElementById("task-submit-button");
  submitTaskBtn.removeEventListener("click", submitTaskListener);
  submitTaskBtn.addEventListener("click", submitTaskListener);
  const cancelTaskBtn = document.getElementById("task-cancel-button");
  submitTaskBtn.removeEventListener("click", removeTaskListener);
  cancelTaskBtn.addEventListener("click", removeTaskListener);
}

function addTask() {
  const addTaskBtn = document.getElementById("add-task-button");
  addTaskBtn.removeEventListener("click", addTaskListener);
  addTaskBtn.addEventListener("click", addTaskListener);
}

const selectProject = (container) => {
  const projectBtns = document.querySelectorAll(".project-title");
  projectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.id.slice(-1);
      const project = container.projectArray[index];
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible", index);
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(project.getTaskArray(), index);
      addTask();
    });
  });
};

function deleteProjectListener() {
  const deleteProjectBtns = document.querySelectorAll(".deleteProjectBtn");
  deleteProjectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.id.slice(-1);
      allContainer.remove(index);
      console.log(allContainer.projectArray);
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
      selectProject(allContainer);
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", NaN);
      _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer.getTaskArray(), -1);
      deleteProjectListener();
    });
  });
}

const getItems = () => {
  const projectName = document.getElementById("project-name-field");
  const title = projectName.value;
  const project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
  const projectArrayLength = allContainer.projectArray.length;
  const projectFormElement = document.getElementById("project-form");
  projectFormElement.style.visibility = "hidden";
  projectFormElement.reset();
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible", projectArrayLength);
  addTask();
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(project.getTaskArray(), projectArrayLength);
  allContainer.add(project);
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
  selectProject(allContainer);
  deleteProjectListener();
};

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

const inboxBtn = document.getElementById("inbox");
inboxBtn.addEventListener("click", () => {
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden", NaN);
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer.getTaskArray(), -1);
});

const todayBtn = document.getElementById("today");
todayBtn.addEventListener("click", () => {
  const todayContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Today");
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(todayContainer, "hidden", NaN);
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer.filterDate(1), -1);
});

const upcomingBtn = document.getElementById("upcoming");
upcomingBtn.addEventListener("click", () => {
  const upcomingContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Upcoming");
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(upcomingContainer, "hidden", NaN);
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer.filterDate(7), -1);
});

selectProject(allContainer);
deleteProjectListener();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUEwQjtBQUNoQztBQUNBLE1BQU0sZ0VBQXVCO0FBQzdCLE1BQU0sZ0VBQXVCO0FBQzdCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdFQUF1QjtBQUN6QjtBQUNBLEVBQUUsZ0VBQXVCO0FBQ3pCO0FBQ0EsRUFBRSxtRUFBMEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsZ0VBQXVCO0FBQ3pCLEVBQUUsZ0VBQXVCO0FBQ3pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDZCQUE2QixrREFBUztBQUN0QyxFQUFFLGdFQUF1QjtBQUN6QixFQUFFLGdFQUF1QjtBQUN6QixDQUFDOztBQUVEO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQVM7QUFDekMsRUFBRSxnRUFBdUI7QUFDekIsRUFBRSxnRUFBdUI7QUFDekIsQ0FBQzs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiY29uc3QgRE9NbWV0aG9kcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlUYXNrcyA9ICh0YXNrQXJyYXksIHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1jb250YWluZXJcIik7XG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gdGFza0FycmF5LnNvcnQoXG4gICAgICAoYSwgYikgPT4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSlcbiAgICApO1xuICAgIGlmICh0YXNrQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpID0gMDtcbiAgICBzb3J0ZWRBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0aXRsZUNvbnRhaW5lclwiO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrLXRpdGxlXCI7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWRhdGVcIjtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1wiO1xuICAgICAgdGFza0NvbnRhaW5lci5pZCA9IGB0YXNrLSR7aX1gO1xuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuICAgICAgY2hlY2tib3guaWQgPSBgVGFzayAke2l9IHByb2plY3QgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tib3gtdGFza1wiO1xuICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcblxuICAgICAgY29uc3QgcmlnaHRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByaWdodEl0ZW1zLmNsYXNzTmFtZSA9IFwicmlnaHRcIjtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHRhc2sucHJvamVjdE5hbWU7XG4gICAgICBpZiAocHJvamVjdEluZGV4ID49IDApIHByb2plY3ROYW1lLmlkID0gYHByb2plY3QgJHtwcm9qZWN0SW5kZXh9YDtcbiAgICAgIHJpZ2h0SXRlbXMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZVRhc2tCdG4uaWQgPSBgZGVsZXRlLXRhc2stYnV0dG9uLSR7aX1gO1xuICAgICAgZGVsZXRlVGFza0J0bi5jbGFzc05hbWUgPSBcInRhc2stZGVsZXRlLWJ1dHRvblwiO1xuICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgcmlnaHRJdGVtcy5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRJdGVtcyk7XG5cbiAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgICAgaSArPSAxO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtc2VjdGlvblwiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICBwcm9qZWN0LmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgICAgcHJvamVjdFRpdGxlLmlkID0gYHByb2plY3QtJHtpfWA7XG4gICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVByb2plY3RCdG5cIjtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uaWQgPSBgZGVsZXRlLXByb2plY3QtYnV0dG9uLSR7aX1gO1xuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcblxuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUaXRsZSA9IChwcm9qZWN0Q29udGFpbmVyLCB2aXNpYmlsaXR5LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBtYWluVGl0bGUuY2xhc3NOYW1lID0gXCJtYWluLXRpdGxlXCI7XG4gICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdENvbnRhaW5lci5uYW1lfTpgO1xuICAgIG1haW5UaXRsZS5pZCA9IGBwcm9qZWN0ICR7aW5kZXh9YDtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1iYXJcIik7XG4gICAgYWRkVGFza0J0bi5pZCA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCBpbmRleCk7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVGFza1wiO1xuICAgIHRvcEJhci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRvcEJhci5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICAgIHRvcEJhci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuICAgIGFkZFRhc2tCdG4uc3R5bGUudmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5VGFza3MsXG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIGRpc3BsYXlUaXRsZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTW1ldGhvZHM7XG4iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiZGF0ZS1mbnMvYWRkRGF5c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByb2plY3RBcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5wcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGdldFRhc2tBcnJheSgpIHtcbiAgICBsZXQgZmluYWxUYXNrQXJyYXkgPSBbXTtcbiAgICB0aGlzLnByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHRhc2tBcnJheSB9ID0gcHJvamVjdDtcbiAgICAgIGZpbmFsVGFza0FycmF5ID0gZmluYWxUYXNrQXJyYXkuY29uY2F0KHRhc2tBcnJheSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsVGFza0FycmF5O1xuICB9XG5cbiAgZmlsdGVyRGF0ZShkYXlzKSB7XG4gICAgY29uc3QgdGFza0FycmF5ID0gdGhpcy5nZXRUYXNrQXJyYXkoKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY29tcGFyZURhdGUgPSBhZGREYXlzKHRvZGF5LCBkYXlzKTtcbiAgICBjb25zdCBmaW5hbEFycmF5ID0gdGFza0FycmF5LmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpO1xuICAgICAgcmV0dXJuIHRhc2tEYXRlIDw9IGNvbXBhcmVEYXRlO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbEFycmF5O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrQXJyYXkgPSBbXTtcbiAgfVxuXG4gIGFkZCh0YXNrKSB7XG4gICAgdGhpcy50YXNrQXJyYXkucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMudGFza0FycmF5LnNsaWNlKGluZGV4KTtcbiAgfVxuXG4gIGdldFRhc2tBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrQXJyYXk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBET01tZXRob2RzIGZyb20gXCIuL0RPTW1ldGhvZHNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmNvbnN0IGFsbENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJJbmJveFwiKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJDbGVhbiB0aGUgSG91c2VcIik7XG5jb25zdCB0YXNrMSA9IG5ldyBUYXNrKFwiV2FzaCB0aGUgRGlzaGVzXCIsIFwiMjAyMy0wNS0xNlwiLCBcIkNsZWFuIHRoZSBIb3VzZVwiKTtcbmNvbnN0IHRhc2syID0gbmV3IFRhc2soXCJUYWtlIE91dCB0aGUgVHJhc2hcIiwgXCIyMDIzLTA1LTIxXCIsIFwiQ2xlYW4gdGhlIEhvdXNlXCIpO1xuY29uc3QgdGFzazMgPSBuZXcgVGFzayhcIk1vcCB0aGUgRmxvb3JcIiwgXCIyMDIzLTA1LTE1XCIsIFwiQ2xlYW4gdGhlIEhvdXNlXCIpO1xuZGVmYXVsdFByb2plY3QuYWRkKHRhc2sxKTtcbmRlZmF1bHRQcm9qZWN0LmFkZCh0YXNrMik7XG5kZWZhdWx0UHJvamVjdC5hZGQodGFzazMpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlBhaW50IHRoZSBCZWRyb29tXCIpO1xuY29uc3QgdGFzazQgPSBuZXcgVGFzayhcbiAgXCJCdXkgQ2xlYW5pbmcgU3VwcGxpZXNcIixcbiAgXCIyMDIzLTA1LTE2XCIsXG4gIFwiUGFpbnQgdGhlIEJlZHJvb21cIlxuKTtcbmNvbnN0IHRhc2s1ID0gbmV3IFRhc2soXCJCdXQgdGhlIFBhaW50XCIsIFwiMjAyMi0xMS0yNlwiLCBcIlBhaW50IHRoZSBCZWRyb29tXCIpO1xuY29uc3QgdGFzazYgPSBuZXcgVGFzayhcIlRhcGUgdGhlIEJlZHJvb21cIiwgXCIyMDI1LTExLTI2XCIsIFwiUGFpbnQgdGhlIEJlZHJvb21cIik7XG5cbmRlZmF1bHRQcm9qZWN0Mi5hZGQodGFzazQpO1xuZGVmYXVsdFByb2plY3QyLmFkZCh0YXNrNSk7XG5kZWZhdWx0UHJvamVjdDIuYWRkKHRhc2s2KTtcblxuYWxsQ29udGFpbmVyLmFkZChkZWZhdWx0UHJvamVjdCk7XG5hbGxDb250YWluZXIuYWRkKGRlZmF1bHRQcm9qZWN0Mik7XG5cbkRPTW1ldGhvZHMuZGlzcGxheVByb2plY3RzKGFsbENvbnRhaW5lci5wcm9qZWN0QXJyYXkpO1xuRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUoYWxsQ29udGFpbmVyLCBcImhpZGRlblwiLCBOYU4pO1xuRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoYWxsQ29udGFpbmVyLmdldFRhc2tBcnJheSgpLCAtMSk7XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tMaXN0ZW5lcigpIHtcbiAgY29uc3QgdGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tGb3JtRWxlbWVudC5yZXNldCgpO1xuICB0YXNrRm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2tMaXN0ZW5lcigpIHtcbiAgY29uc3QgdGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG4gIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10aXRsZVwiKTtcbiAgY29uc3QgaW5kZXggPSBtYWluVGl0bGUuaWQuc2xpY2UoLTEpO1xuICBjb25zdCB7IHByb2plY3RBcnJheSB9ID0gYWxsQ29udGFpbmVyO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lLWZpZWxkXCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS1maWVsZFwiKTtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RBcnJheVtpbmRleF07XG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrTmFtZS52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJvamVjdC5uYW1lKTtcbiAgcHJvamVjdC5hZGQodGFzayk7XG4gIHRhc2tGb3JtRWxlbWVudC5yZXNldCgpO1xuICB0YXNrRm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKHByb2plY3QuZ2V0VGFza0FycmF5KCksIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza0xpc3RlbmVyKCkge1xuICBjb25zdCB0YXNrRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZm9ybVwiKTtcbiAgdGFza0Zvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zdWJtaXQtYnV0dG9uXCIpO1xuICBzdWJtaXRUYXNrQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUYXNrTGlzdGVuZXIpO1xuICBzdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUYXNrTGlzdGVuZXIpO1xuICBjb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWNhbmNlbC1idXR0b25cIik7XG4gIHN1Ym1pdFRhc2tCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2tMaXN0ZW5lcik7XG4gIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2tMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0xpc3RlbmVyKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0xpc3RlbmVyKTtcbn1cblxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGl0bGVcIik7XG4gIHByb2plY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuaWQuc2xpY2UoLTEpO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGNvbnRhaW5lci5wcm9qZWN0QXJyYXlbaW5kZXhdO1xuICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUocHJvamVjdCwgXCJ2aXNpYmxlXCIsIGluZGV4KTtcbiAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKHByb2plY3QuZ2V0VGFza0FycmF5KCksIGluZGV4KTtcbiAgICAgIGFkZFRhc2soKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0TGlzdGVuZXIoKSB7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVQcm9qZWN0QnRuXCIpO1xuICBkZWxldGVQcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmlkLnNsaWNlKC0xKTtcbiAgICAgIGFsbENvbnRhaW5lci5yZW1vdmUoaW5kZXgpO1xuICAgICAgY29uc29sZS5sb2coYWxsQ29udGFpbmVyLnByb2plY3RBcnJheSk7XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgICAgIHNlbGVjdFByb2plY3QoYWxsQ29udGFpbmVyKTtcbiAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKGFsbENvbnRhaW5lciwgXCJoaWRkZW5cIiwgTmFOKTtcbiAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKGFsbENvbnRhaW5lci5nZXRUYXNrQXJyYXkoKSwgLTEpO1xuICAgICAgZGVsZXRlUHJvamVjdExpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1maWVsZFwiKTtcbiAgY29uc3QgdGl0bGUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdEFycmF5TGVuZ3RoID0gYWxsQ29udGFpbmVyLnByb2plY3RBcnJheS5sZW5ndGg7XG4gIGNvbnN0IHByb2plY3RGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpO1xuICBwcm9qZWN0Rm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIHByb2plY3RGb3JtRWxlbWVudC5yZXNldCgpO1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShwcm9qZWN0LCBcInZpc2libGVcIiwgcHJvamVjdEFycmF5TGVuZ3RoKTtcbiAgYWRkVGFzaygpO1xuICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhwcm9qZWN0LmdldFRhc2tBcnJheSgpLCBwcm9qZWN0QXJyYXlMZW5ndGgpO1xuICBhbGxDb250YWluZXIuYWRkKHByb2plY3QpO1xuICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgc2VsZWN0UHJvamVjdChhbGxDb250YWluZXIpO1xuICBkZWxldGVQcm9qZWN0TGlzdGVuZXIoKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0Rm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBjb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXN1Ym1pdC1idXR0b25cIik7XG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldEl0ZW1zKTtcbiAgY29uc3QgY2FuY2VsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnV0dG9uXCIpO1xuICBjYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHByb2plY3RGb3JtRWxlbWVudC5yZXNldCgpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIik7XG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShhbGxDb250YWluZXIsIFwiaGlkZGVuXCIsIE5hTik7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKGFsbENvbnRhaW5lci5nZXRUYXNrQXJyYXkoKSwgLTEpO1xufSk7XG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcihcIlRvZGF5XCIpO1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZSh0b2RheUNvbnRhaW5lciwgXCJoaWRkZW5cIiwgTmFOKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoYWxsQ29udGFpbmVyLmZpbHRlckRhdGUoMSksIC0xKTtcbn0pO1xuXG5jb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBjb21pbmdcIik7XG51cGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJVcGNvbWluZ1wiKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUodXBjb21pbmdDb250YWluZXIsIFwiaGlkZGVuXCIsIE5hTik7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKGFsbENvbnRhaW5lci5maWx0ZXJEYXRlKDcpLCAtMSk7XG59KTtcblxuc2VsZWN0UHJvamVjdChhbGxDb250YWluZXIpO1xuZGVsZXRlUHJvamVjdExpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=