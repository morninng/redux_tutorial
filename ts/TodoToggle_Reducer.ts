
const todos_toggle_reducer = (state = [], action)=>{

    switch(action.type){
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
