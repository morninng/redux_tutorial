var todos_reducer_composition = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]);
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
