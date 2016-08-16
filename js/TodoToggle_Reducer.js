var todos_toggle_reducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'TOGGLE_TODO':
            return state.map(function (todo) {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, { completed: !todo.completed });
                }
                return Object.assign({}, todo);
            });
        default:
            return state;
    }
};
