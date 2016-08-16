const todos_reducer_composition = (state = [], action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo)=>{
                if(todo.id ===action.id){
                    return Object.assign ( {}, todo, {completed: !todo.completed});
                }
                return  Object.assign ( {}, todo);
            });
        default:
            return state;
    }
}
