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
/*
const createStore_own = (reducer) =>{
    let state;
    let listeners = [];
    const getState = () =>{
        return state;
    }
    const dispatch = (action) => {
        state = reducer(state, action);
        this.listeners.forEach((listener) =>{
            listener();
            return;
        } )
    }
    const subscribe = (listener) => {
        this.listeners.push(listener);
        return () => {
            this.listeners = listeners.filter( (l)=>{
                return (l !==listener)
            })
        }
    };
    dispatch({})
}
*/
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
exports.__esModule = true;
exports["default"] = test_execute;
