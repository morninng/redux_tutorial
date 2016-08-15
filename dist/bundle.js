/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var test_1 = __webpack_require__(2);
	var OwnStore_Redux_1 = __webpack_require__(1);
	console.log("aaa");
	OwnStore_Redux_1.default();
	var fizz_obj = new test_1.default();


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var counter = function (state, action) {
	    if (state === void 0) { state = 0; }
	    switch (action.type) {
	        case 'INCREMENT':
	            return state + 1;
	        case 'DECREMENT':
	            return state - 1;
	        default:
	            return state;
	    }
	};
	var OwnStore = (function () {
	    function OwnStore(reducer) {
	        var _this = this;
	        this.reducer = reducer;
	        this.listeners = [];
	        this.getState = function () {
	            return _this.state;
	        };
	        this.dispatch = function (action) {
	            _this.state = _this.reducer(_this.state, action);
	            _this.listeners.forEach(function (listener) {
	                listener();
	                return;
	            });
	        };
	        this.subscribe = function (listener) {
	            _this.listeners.push(listener);
	            return function () {
	                _this.listeners = _this.listeners.filter(function (l) {
	                    return (l !== listener);
	                });
	            };
	        };
	        this.dispatch({});
	    }
	    return OwnStore;
	}());
	var test_execute = function () {
	    console.log("test execute");
	    var store = new OwnStore(counter);
	    console.log('state', store.getState());
	    store.dispatch({ type: "INCREMENT" });
	    store.dispatch({ type: "INCREMENT" });
	    store.dispatch({ type: "INCREMENT" });
	    console.log('state', store.getState());
	    store.dispatch({ type: "DECREMENT" });
	    store.dispatch({ type: "DECREMENT" });
	    console.log('state', store.getState());
	    var render = function () {
	        console.log("render is called");
	        var num = store.getState();
	        document.body.innerText = String(num);
	    };
	    store.subscribe(function () {
	        console.log("subscribe is called");
	        render();
	    });
	    console.log("after subscription");
	    store.dispatch({ type: "DECREMENT" });
	    console.log('state', store.getState());
	    document.addEventListener('click', function () {
	        store.dispatch({ type: "INCREMENT" });
	    });
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = test_execute;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var FizzBuzz = (function () {
	    function FizzBuzz() {
	    }
	    FizzBuzz.prototype.generate = function (input) {
	        return input;
	    };
	    return FizzBuzz;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = FizzBuzz;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map