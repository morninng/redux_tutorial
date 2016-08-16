/// <reference path="./../typings/globals/redux/index.d.ts" />
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
var redux_1 = require('redux');
var test_execute = function () {
    console.log("test execute");
    var store = redux_1.createStore(counter);
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
exports.__esModule = true;
exports["default"] = test_execute;
