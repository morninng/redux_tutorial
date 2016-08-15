/// <reference path="./../typings/globals/redux/index.d.ts" />
"use strict";
var _this = this;
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
var createStore_own = function (reducer) {
    var state;
    var listeners = [];
    var getState = function () {
        return state;
    };
    var dispatch = function (action) {
        state = reducer(state, action);
        _this.listeners.forEach(function (listener) {
            listener();
            return;
        });
    };
    var subscribe = function (listener) {
        _this.listeners.push(listener);
        return function () {
            _this.listeners = listeners.filter(function (l) {
                return (l !== listener);
            });
        };
    };
    dispatch({});
    return { getState: getState, dispatch: dispatch, subscribe: subscribe };
};
var test_execute = function () {
    console.log("test execute");
    var store = createStore_own(counter);
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
