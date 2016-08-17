

const todo_each = (each_state, action) => {

    switch(action.type){
        case 'ADD_TODO':
            return {
                    id:action.id,
                    text:action.text,
                    completed: false
                }
        case 'TOGGLE_TODO':
            if(each_state.id ===action.id){
                return Object.assign ( {}, each_state, {completed: !each_state.completed});
            }
            return  Object.assign ( {}, each_state);
        default:
            return each_state;
    }
}



const todos_reducer_composition = (state = [], action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [ ...state, todo_each(state, action)];

        case 'TOGGLE_TODO':
            return state.map((todo)=>{
                todo_each(todo, action);
            });
        default:
            return state;
    }
}
