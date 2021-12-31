
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./client/components/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./client/routes.js");




var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Navbar"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./client/components/About.js":
/*!************************************!*\
  !*** ./client/components/About.js ***!
  \************************************/
/*! exports provided: About, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "about-div"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "about-paragraph"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "After earning my bachelor's degree in mathematics, I taught high school calculus for two years. I knew I wanted to explore other career paths, and then I was given the amazing opportunity to move to Melbourne, Australia. I worked there in sales for six months but became eager to learn more about programming after I was promoted to a role where I used Excel and several automated scheduling apps."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I moved back to the U.S. and taught myself Python, thinking I wanted to learn more about data science. I moved to New York City and decided to pursue a career in software engineering instead. I found Fullstack Academy of Code's Grace Hopper Program which stood out to me above all other coding bootcamps in the New York area."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Over the last six months, I've been able to hone my problem-solving skills in a programming environment, and I'm now familiar with the many layers of full-stack web development. I graduated from Grace Hopper in May and I recently began my current position as a teaching fellow at Grace Hopper in their three-month fellowship program. After the fellowship, I will be seeking roles in which I can be further challenged with interesting projects so I can grow as a software engineer.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "about-images"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "australia.jpg",
    alt: "Australia",
    className: "about-img"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "gh.jpg",
    alt: "GH",
    className: "about-img"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "fellows.jpg",
    alt: "Fellows",
    className: "about-img"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./client/components/AdminForm.js":
/*!****************************************!*\
  !*** ./client/components/AdminForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var AdminForm = function AdminForm() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/addProjects"
  }, "Add Projects"));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminForm);

/***/ }),

/***/ "./client/components/Home.js":
/*!***********************************!*\
  !*** ./client/components/Home.js ***!
  \***********************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-photo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "michaela_linkedIn_photo.jpg",
    alt: "Photo of Me",
    width: "100%"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "bullets"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Saint Michael's College Alumn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Former Calculus Teacher"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Grace Hopper Program at Fullstack Academy of Code Alumn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Currently a Teaching Fellow at", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.gracehopper.com/",
    target: "_blank",
    without: true,
    rel: "noopener noreferrer"
  }, "The Grace Hopper Program"), ' ', "at Fullstack Academy of Code")));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);
