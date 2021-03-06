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
var todos_reducer_composition = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([todo_each(state, action)]);
        case 'TOGGLE_TODO':
            return state.map(function (todo) {
                todo_each(todo, action);
            });
        default:
            return state;
    }
};
