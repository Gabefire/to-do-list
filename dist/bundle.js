/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
class Container {
  constructor(name) {
    this.name = name;
    this.projectArray = [];
  }

  add(project) {
    this.projectArray.push(project);
  }

  remove(index) {
    this.projectArray.slice(index);
  }

  display() {
    DOMmethods.displayTasks(this.projectArray);
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
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
  }
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





const eventListeners = (() => {
  const allContainer = new _container__WEBPACK_IMPORTED_MODULE_2__["default"]("Inbox");
  _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden");

  const addTask = (project) => {
    const addTaskBtn = document.getElementById("add-task-button");
    const taskFormElement = document.getElementById("task-form");
    addTaskBtn.addEventListener("click", () => {
      taskFormElement.style.visibility = "visible";
      const submitTaskBtn = document.getElementById("task-submit-button");
      submitTaskBtn.addEventListener("click", () => {
        const taskName = document.getElementById("task-name-field");
        const dueDate = document.getElementById("due-date-field");
        const task = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](taskName.value, dueDate.value);
        project.add(task);
        taskFormElement.style.visibility = "hidden";
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks([project]);
      });
    });
  };

  const selectProject = (container) => {
    const projectBtns = document.querySelectorAll(".project-title");
    projectBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.id.slice(-1);
        const project = container.projectArray[index];
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible");
        _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks([container]);
        addTask(project);
      });
    });
  };

  const getItems = () => {
    const projectName = document.getElementById("project-name-field");
    const title = projectName.value;
    const project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
    _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(project, "visible");
    allContainer.add(project);
    _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayProjects(allContainer.projectArray);
    selectProject(allContainer);
    addTask(project);
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
    _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTitle(allContainer, "hidden");
    _DOMmethods__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(allContainer);
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDOztBQUVBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JGWDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ047QUFDSTtBQUNWOztBQUUxQjtBQUNBLDJCQUEyQixrREFBUztBQUNwQyxFQUFFLGdFQUF1Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUFJO0FBQzdCO0FBQ0E7QUFDQSxRQUFRLGdFQUF1QjtBQUMvQixPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQXVCO0FBQy9CLFFBQVEsZ0VBQXVCO0FBQy9CO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQU87QUFDL0IsSUFBSSxnRUFBdUI7QUFDM0I7QUFDQSxJQUFJLG1FQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLGdFQUF1QjtBQUMzQixJQUFJLGdFQUF1QjtBQUMzQixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERPTW1ldGhvZHMgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdEFycmF5KSA9PiB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyB4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHRhc2tBcnJheSA9IHByb2plY3RBcnJheVt4XS50YXNrQXJyYXk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB0YXNrID0gdGFza0FycmF5W2ldO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1wiO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmlkID0gYHRhc2stJHt4fWA7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0aXRsZUNvbnRhaW5lclwiO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGFzay10aXRsZVwiO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWRhdGVcIjtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LW5hbWVcIjtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlbeF0ubmFtZTtcbiAgICAgICAgcHJvamVjdE5hbWUuaWQgPSBgcHJvamVjdCAke3h9YDtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uaWQgPSBgZGVsZXRlLXRhc2stYnV0dG9uLSR7aX1gO1xuICAgICAgICBkZWxldGVUYXNrQnRuLmNsYXNzTmFtZSA9IFwidGFzay1kZWxldGUtYnV0dG9uXCI7XG4gICAgICAgIGRlbGV0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcblxuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKHByb2plY3RBcnJheSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1zZWN0aW9uXCIpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIik7XG4gICAgcHJvamVjdEZvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHByb2plY3RGb3JtRWxlbWVudC5yZXNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgICBwcm9qZWN0VGl0bGUuaWQgPSBgcHJvamVjdC0ke2l9YDtcbiAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcbiAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVByb2plY3RCdG5cIjtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uaWQgPSBgZGVsZXRlLXByb2plY3QtYnV0dG9uLSR7aX1gO1xuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcblxuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUaXRsZSA9IChwcm9qZWN0Q29udGFpbmVyLCB2aXNpYmlsaXR5KSA9PiB7XG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXRpdGxlXCIpO1xuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RDb250YWluZXIubmFtZX06YDtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idXR0b25cIik7XG4gICAgYWRkVGFza0J0bi5zdHlsZS52aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUYXNrcyxcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRpdGxlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NbWV0aG9kcztcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJvamVjdEFycmF5ID0gW107XG4gIH1cblxuICBhZGQocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLnByb2plY3RBcnJheS5zbGljZShpbmRleCk7XG4gIH1cblxuICBkaXNwbGF5KCkge1xuICAgIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKHRoaXMucHJvamVjdEFycmF5KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza0FycmF5ID0gW107XG4gIH1cblxuICBhZGQodGFzaykge1xuICAgIHRoaXMudGFza0FycmF5LnB1c2godGFzayk7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tBcnJheS5zbGljZShpbmRleCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERPTW1ldGhvZHMgZnJvbSBcIi4vRE9NbWV0aG9kc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICBjb25zdCBhbGxDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKFwiSW5ib3hcIik7XG4gIERPTW1ldGhvZHMuZGlzcGxheVRpdGxlKGFsbENvbnRhaW5lciwgXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgYWRkVGFzayA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGNvbnN0IHRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2tGb3JtRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXN1Ym1pdC1idXR0b25cIik7XG4gICAgICBzdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWUtZmllbGRcIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZpZWxkXCIpO1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUudmFsdWUsIGR1ZURhdGUudmFsdWUpO1xuICAgICAgICBwcm9qZWN0LmFkZCh0YXNrKTtcbiAgICAgICAgdGFza0Zvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhbcHJvamVjdF0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5pZC5zbGljZSgtMSk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjb250YWluZXIucHJvamVjdEFycmF5W2luZGV4XTtcbiAgICAgICAgRE9NbWV0aG9kcy5kaXNwbGF5VGl0bGUocHJvamVjdCwgXCJ2aXNpYmxlXCIpO1xuICAgICAgICBET01tZXRob2RzLmRpc3BsYXlUYXNrcyhbY29udGFpbmVyXSk7XG4gICAgICAgIGFkZFRhc2socHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWZpZWxkXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gcHJvamVjdE5hbWUudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShwcm9qZWN0LCBcInZpc2libGVcIik7XG4gICAgYWxsQ29udGFpbmVyLmFkZChwcm9qZWN0KTtcbiAgICBET01tZXRob2RzLmRpc3BsYXlQcm9qZWN0cyhhbGxDb250YWluZXIucHJvamVjdEFycmF5KTtcbiAgICBzZWxlY3RQcm9qZWN0KGFsbENvbnRhaW5lcik7XG4gICAgYWRkVGFzayhwcm9qZWN0KTtcbiAgfTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICBjb25zdCBwcm9qZWN0Rm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1zdWJtaXQtYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldEl0ZW1zKTtcbiAgICBjb25zdCBjYW5jZWxGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNhbmNlbC1idXR0b25cIik7XG4gICAgY2FuY2VsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdEZvcm1FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgcHJvamVjdEZvcm1FbGVtZW50LnJlc2V0KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcbiAgaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBET01tZXRob2RzLmRpc3BsYXlUaXRsZShhbGxDb250YWluZXIsIFwiaGlkZGVuXCIpO1xuICAgIERPTW1ldGhvZHMuZGlzcGxheVRhc2tzKGFsbENvbnRhaW5lcik7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==