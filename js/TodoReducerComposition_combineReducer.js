"use strict";
var todo_each = function (each_state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (each_state.id === action.id) {
                return Object.assign({}, each_state, { completed: !each_state.completed });
            }
            return Object.assign({}, each_state);
        default:
            return each_state;
    }
};
var todos_reducer_composition_obj = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([todo_each(state, action)]);
        case 'TOGGLE_TODO':
            return state.map(function (todo) {
                return todo_each(todo, action);
            });
        default:
            return state;
    }
};
var visibilityFilter = function (state, action) {
    if (state === void 0) { state = 'SHOW_ALL'; }
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};
var redux_1 = require('redux');
var todoApp = redux_1.combineReducers({
    todos: todos_reducer_composition_obj,
    visibilityFilter: visibilityFilter
});
/*
const todoApp = (state = {}, action) =>{

    return {
        todos: todos_reducer_composition_obj(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibiltyFilter, action)
    };
}
*/
exports.test_func = function () {
    var store = redux_1.createStore(todoApp);
    console.log("initial state");
    console.log(store.getState());
    console.log("dispatching add_todo");
    store.dispatch({
        type: 'ADD_TODO',
        id: 1,
        text: 'first item'
    });
    console.log("first", store.getState());
    store.dispatch({
        type: 'ADD_TODO',
        id: 2,
        text: 'second item'
    });
    console.log("second", store.getState());
    store.dispatch({
        type: 'ADD_TODO',
        id: 3,
        text: 'third item'
    });
    console.log("third", store.getState());
    store.dispatch({
        type: 'TOGGLE_TODO',
        id: 2
    });
    console.log("complete change second", store.getState());
    store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: "completed"
    });
    console.log("complete change second", store.getState());
};
