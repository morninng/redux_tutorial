var todos_reducer = function (state, action) {
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
        default:
            return state;
    }
};
