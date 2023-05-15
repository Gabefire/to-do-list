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
      deleteTaskBtn.setAttribute("data-project-name", task.projectName);
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

// Task Controls //

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
  submitTaskBtn.removeEventListener("click", cancelTaskListener);
  cancelTaskBtn.addEventListener("click", cancelTaskListener);
}

function addTask() {
  const addTaskBtn = document.getElementById("add-task-button");
  addTaskBtn.removeEventListener("click", addTaskListener);
  addTaskBtn.addEventListener("click", addTaskListener);
}

// Project Controls //

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

// Display at start

selectProject(allContainer);

// Default project and task values

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
deleteProjectListener();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsZ0VBQXVCO0FBQ3pCLEVBQUUsZ0VBQXVCO0FBQ3pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDZCQUE2QixrREFBUztBQUN0QyxFQUFFLGdFQUF1QjtBQUN6QixFQUFFLGdFQUF1QjtBQUN6QixDQUFDOztBQUVEO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQVM7QUFDekMsRUFBRSxnRUFBdUI7QUFDekIsRUFBRSxnRUFBdUI7QUFDekIsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQSwyQkFBMkIsZ0RBQU87QUFDbEMsa0JBQWtCLDZDQUFJO0FBQ3RCLGtCQUFrQiw2Q0FBSTtBQUN0QixrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixnREFBTztBQUNuQyxrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEIsa0JBQWtCLDZDQUFJOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBMEI7QUFDMUIsZ0VBQXVCO0FBQ3ZCLGdFQUF1QjtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImNvbnN0IERPTW1ldGhvZHMgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5VGFza3MgPSAodGFza0FycmF5LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtY29udGFpbmVyXCIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IHRhc2tBcnJheS5zb3J0KFxuICAgICAgKGEsIGIpID0+IG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpXG4gICAgKTtcbiAgICBpZiAodGFza0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgc29ydGVkQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGl0bGVDb250YWluZXJcIjtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGFzay10aXRsZVwiO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlLmNsYXNzTmFtZSA9IFwidGFzay1kYXRlXCI7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tcIjtcbiAgICAgIHRhc2tDb250YWluZXIuaWQgPSBgdGFzay0ke2l9YDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgICAgIGNoZWNrYm94LmlkID0gYFRhc2sgJHtpfSBwcm9qZWN0ICR7cHJvamVjdEluZGV4fWA7XG4gICAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImNoZWNrYm94LXRhc2tcIjtcbiAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgICAgIGNvbnN0IHJpZ2h0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmlnaHRJdGVtcy5jbGFzc05hbWUgPSBcInJpZ2h0XCI7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtbmFtZVwiO1xuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3ROYW1lO1xuICAgICAgaWYgKHByb2plY3RJbmRleCA+PSAwKSBwcm9qZWN0TmFtZS5pZCA9IGBwcm9qZWN0ICR7cHJvamVjdEluZGV4fWA7XG4gICAgICByaWdodEl0ZW1zLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVUYXNrQnRuLmlkID0gYGRlbGV0ZS10YXNrLWJ1dHRvbi0ke2l9YDtcbiAgICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NOYW1lID0gXCJ0YXNrLWRlbGV0ZS1idXR0b25cIjtcbiAgICAgIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIiwgdGFzay5wcm9qZWN0TmFtZSk7XG4gICAgICBkZWxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICByaWdodEl0ZW1zLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEl0ZW1zKTtcblxuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgICBpICs9IDE7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKHByb2plY3RBcnJheSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1zZWN0aW9uXCIpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcbiAgICAgIHByb2plY3QuaWQgPSBgcHJvamVjdC0ke2l9YDtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LXRpdGxlXCI7XG4gICAgICBwcm9qZWN0VGl0bGUuaWQgPSBgcHJvamVjdC0ke2l9YDtcbiAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlUHJvamVjdEJ0blwiO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5pZCA9IGBkZWxldGUtcHJvamVjdC1idXR0b24tJHtpfWA7XG4gICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRpdGxlID0gKHByb2plY3RDb250YWluZXIsIHZpc2liaWxpdHksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG1haW5UaXRsZS5jbGFzc05hbWUgPSBcIm1haW4tdGl0bGVcIjtcbiAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Q29udGFpbmVyLm5hbWV9OmA7XG4gICAgbWFpblRpdGxlLmlkID0gYHByb2plY3QgJHtpbmRleH1gO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLWJhclwiKTtcbiAgICBhZGRUYXNrQnRuLmlkID0gXCJhZGQtdGFzay1idXR0b25cIjtcbiAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGluZGV4KTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XG4gICAgdG9wQmFyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgYWRkVGFza0J0bi5zdHlsZS52aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUYXNrcyxcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRpdGxlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NbWV0aG9kcztcbiIsImltcG9ydCBhZGREYXlzIGZyb20gXCJkYXRlLWZucy9hZGREYXlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJvamVjdEFycmF5ID0gW107XG4gIH1cblxuICBhZGQocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLnByb2plY3RBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZ2V0VGFza0FycmF5KCkge1xuICAgIGxldCBmaW5hbFRhc2tBcnJheSA9IFtdO1xuICAgIHRoaXMucHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgdGFza0FycmF5IH0gPSBwcm9qZWN0O1xuICAgICAgZmluYWxUYXNrQXJyYXkgPSBmaW5hbFRhc2tBcnJheS5jb25jYXQodGFza0FycmF5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmluYWxUYXNrQXJyYXk7XG4gIH1cblxuICBmaWx0ZXJEYXRlKGRheXMpIHtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSB0aGlzLmdldFRhc2tBcnJheSgpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjb21wYXJlRGF0ZSA9IGFkZERheXModG9kYXksIGRheXMpO1xuICAgIGNvbnN0IGZpbmFsQXJyYXkgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICByZXR1cm4gdGFza0RhdGUgPD0gY29tcGFyZURhdGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsQXJyYXk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tBcnJheSA9IFtdO1xuICB9XG5cbiAgYWRkKHRhc2spIHtcbiAgICB0aGlzLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy50YXNrQXJyYXkuc2xpY2UoaW5kZXgpO1xuICB9XG5cbiAgZ2V0VGFza0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tBcnJheTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERPTW1ldGhvZHMgZnJvbSBcIi4vRE9NbWV0aG9kc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgYWxsQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcihcIkluYm94XCIpO1xuXG4vLyBUYXNrIENvbnRyb2xzIC8vXG5cbmZ1bmN0aW9uIGNhbmNlbFRhc2tMaXN0ZW5lcigpIHtcbiAgY29uc3QgdGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tGb3JtRWxlbWVudC5yZXNldCgpO1xuICB0YXNrRm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2tMaXN0ZW5lcigpIHtcbiAgY29uc3QgdGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG4gIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10aXRsZVwiKTtcbiAgY29uc3QgaW5kZXggPSBtYWluVGl0bGUuaWQuc2xpY2UoLTEpO1xuICBjb25zdCB7IHByb2plY3RBcnJheSB9ID0gYWxsQ29udGFpbmVyO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lLWZpZWxkXCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS1maWVsZFwiKTtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RBcnJheVtpbmRleF07XG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrTmFtZS52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJvamVjdC5uYW1lKTtcbiAgcHJvamVjdC5hZGQodGFzayk7XG4gIHRhc2tGb3JtRWxlbWVudC5yZXNldCgpO1xuICB0YXNrRm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKHByb2plY3QuZ2V0VGFza0FycmF5KCksIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza0xpc3RlbmVyKCkge1xuICBjb25zdCB0YXNrRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZm9ybVwiKTtcbiAgdGFza0Zvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1zdWJtaXQtYnV0dG9uXCIpO1xuICBzdWJtaXRUYXNrQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUYXNrTGlzdGVuZXIpO1xuICBzdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUYXNrTGlzdGVuZXIpO1xuICBjb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWNhbmNlbC1idXR0b25cIik7XG4gIHN1Ym1pdFRhc2tCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFRhc2tMaXN0ZW5lcik7XG4gIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFRhc2tMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0xpc3RlbmVyKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0xpc3RlbmVyKTtcbn1cblxuLy8gUHJvamVjdCBDb250cm9scyAvL1xuXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5pZC5zbGljZSgtMSk7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY29udGFpbmVyLnByb2plY3RBcnJheVtpbmRleF07XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShwcm9qZWN0LCBcInZpc2libGVcIiwgaW5kZXgpO1xuICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MocHJvamVjdC5nZXRUYXNrQXJyYXkoKSwgaW5kZXgpO1xuICAgICAgYWRkVGFzaygpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RMaXN0ZW5lcigpIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVByb2plY3RCdG5cIik7XG4gIGRlbGV0ZVByb2plY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuaWQuc2xpY2UoLTEpO1xuICAgICAgYWxsQ29udGFpbmVyLnJlbW92ZShpbmRleCk7XG4gICAgICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgICAgIHNlbGVjdFByb2plY3QoYWxsQ29udGFpbmVyKTtcbiAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKGFsbENvbnRhaW5lciwgXCJoaWRkZW5cIiwgTmFOKTtcbiAgICAgIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKGFsbENvbnRhaW5lci5nZXRUYXNrQXJyYXkoKSwgLTEpO1xuICAgICAgZGVsZXRlUHJvamVjdExpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1maWVsZFwiKTtcbiAgY29uc3QgdGl0bGUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdEFycmF5TGVuZ3RoID0gYWxsQ29udGFpbmVyLnByb2plY3RBcnJheS5sZW5ndGg7XG4gIGNvbnN0IHByb2plY3RGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpO1xuICBwcm9qZWN0Rm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIHByb2plY3RGb3JtRWxlbWVudC5yZXNldCgpO1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShwcm9qZWN0LCBcInZpc2libGVcIiwgcHJvamVjdEFycmF5TGVuZ3RoKTtcbiAgYWRkVGFzaygpO1xuICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhwcm9qZWN0LmdldFRhc2tBcnJheSgpLCBwcm9qZWN0QXJyYXlMZW5ndGgpO1xuICBhbGxDb250YWluZXIuYWRkKHByb2plY3QpO1xuICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgc2VsZWN0UHJvamVjdChhbGxDb250YWluZXIpO1xuICBkZWxldGVQcm9qZWN0TGlzdGVuZXIoKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0Rm9ybUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBjb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXN1Ym1pdC1idXR0b25cIik7XG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldEl0ZW1zKTtcbiAgY29uc3QgY2FuY2VsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jYW5jZWwtYnV0dG9uXCIpO1xuICBjYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHByb2plY3RGb3JtRWxlbWVudC5yZXNldCgpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIik7XG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShhbGxDb250YWluZXIsIFwiaGlkZGVuXCIsIE5hTik7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKGFsbENvbnRhaW5lci5nZXRUYXNrQXJyYXkoKSwgLTEpO1xufSk7XG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcihcIlRvZGF5XCIpO1xuICBET01tZXRob2RzLmRpc3BsYXlUaXRsZSh0b2RheUNvbnRhaW5lciwgXCJoaWRkZW5cIiwgTmFOKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGFza3MoYWxsQ29udGFpbmVyLmZpbHRlckRhdGUoMSksIC0xKTtcbn0pO1xuXG5jb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBjb21pbmdcIik7XG51cGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9IG5ldyBDb250YWluZXIoXCJVcGNvbWluZ1wiKTtcbiAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUodXBjb21pbmdDb250YWluZXIsIFwiaGlkZGVuXCIsIE5hTik7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKGFsbENvbnRhaW5lci5maWx0ZXJEYXRlKDcpLCAtMSk7XG59KTtcblxuLy8gRGlzcGxheSBhdCBzdGFydFxuXG5zZWxlY3RQcm9qZWN0KGFsbENvbnRhaW5lcik7XG5cbi8vIERlZmF1bHQgcHJvamVjdCBhbmQgdGFzayB2YWx1ZXNcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkNsZWFuIHRoZSBIb3VzZVwiKTtcbmNvbnN0IHRhc2sxID0gbmV3IFRhc2soXCJXYXNoIHRoZSBEaXNoZXNcIiwgXCIyMDIzLTA1LTE2XCIsIFwiQ2xlYW4gdGhlIEhvdXNlXCIpO1xuY29uc3QgdGFzazIgPSBuZXcgVGFzayhcIlRha2UgT3V0IHRoZSBUcmFzaFwiLCBcIjIwMjMtMDUtMjFcIiwgXCJDbGVhbiB0aGUgSG91c2VcIik7XG5jb25zdCB0YXNrMyA9IG5ldyBUYXNrKFwiTW9wIHRoZSBGbG9vclwiLCBcIjIwMjMtMDUtMTVcIiwgXCJDbGVhbiB0aGUgSG91c2VcIik7XG5kZWZhdWx0UHJvamVjdC5hZGQodGFzazEpO1xuZGVmYXVsdFByb2plY3QuYWRkKHRhc2syKTtcbmRlZmF1bHRQcm9qZWN0LmFkZCh0YXNrMyk7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiUGFpbnQgdGhlIEJlZHJvb21cIik7XG5jb25zdCB0YXNrNCA9IG5ldyBUYXNrKFxuICBcIkJ1eSBDbGVhbmluZyBTdXBwbGllc1wiLFxuICBcIjIwMjMtMDUtMTZcIixcbiAgXCJQYWludCB0aGUgQmVkcm9vbVwiXG4pO1xuY29uc3QgdGFzazUgPSBuZXcgVGFzayhcIkJ1dCB0aGUgUGFpbnRcIiwgXCIyMDIyLTExLTI2XCIsIFwiUGFpbnQgdGhlIEJlZHJvb21cIik7XG5jb25zdCB0YXNrNiA9IG5ldyBUYXNrKFwiVGFwZSB0aGUgQmVkcm9vbVwiLCBcIjIwMjUtMTEtMjZcIiwgXCJQYWludCB0aGUgQmVkcm9vbVwiKTtcblxuZGVmYXVsdFByb2plY3QyLmFkZCh0YXNrNCk7XG5kZWZhdWx0UHJvamVjdDIuYWRkKHRhc2s1KTtcbmRlZmF1bHRQcm9qZWN0Mi5hZGQodGFzazYpO1xuXG5hbGxDb250YWluZXIuYWRkKGRlZmF1bHRQcm9qZWN0KTtcbmFsbENvbnRhaW5lci5hZGQoZGVmYXVsdFByb2plY3QyKTtcblxuRE9NbWV0aG9kcy5kaXNwbGF5UHJvamVjdHMoYWxsQ29udGFpbmVyLnByb2plY3RBcnJheSk7XG5ET01tZXRob2RzLmRpc3BsYXlUaXRsZShhbGxDb250YWluZXIsIFwiaGlkZGVuXCIsIE5hTik7XG5ET01tZXRob2RzLmRpc3BsYXlUYXNrcyhhbGxDb250YWluZXIuZ2V0VGFza0FycmF5KCksIC0xKTtcbmRlbGV0ZVByb2plY3RMaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9