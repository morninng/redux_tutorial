"use strict";
var toggleTodo = function (todo) {
    todo.completed = !todo.completed;
    return todo;
};
var toggleTodo_mutate1 = function (todo) {
    return {
        id: todo.id,
        text: todo.text,
        completed: !todo.completed
    };
};
var toggleTodo_mutate2 = function (todo) {
    return Object.assign({}, todo, { completed: !todo.completed });
};
/*
この書き方は動作しない。　three dots
const toggleTodo_mutate3 = (todo : Object) =>{

    return [  ...todo, {completed: !todo.completed}
    ];
}

*/
