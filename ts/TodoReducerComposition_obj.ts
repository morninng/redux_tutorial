

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



const todos_reducer_composition_obj = (state = [], action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [ ...state, todo_each(state, action)];

        case 'TOGGLE_TODO':
            return state.map((todo)=>{
                return todo_each(todo, action);
            });
        default:
            return state;
    }
}



import {createStore} from 'redux';

export const test_func = ()=>{

    const store = createStore(todos_reducer_composition_obj);
    console.log("initial state");
    console.log(store.getState());
    console.log("dispatching add_todo");
    store.dispatch({
        type:'ADD_TODO',
        id:1,
        text:'first item'
    })
    console.log("first", store.getState());
    
    store.dispatch({
        type:'ADD_TODO',
        id:2,
        text:'second item'
    })
    console.log("second", store.getState());

    store.dispatch({
        type:'ADD_TODO',
        id:3,
        text:'third item'
    })
    console.log("third", store.getState());

    store.dispatch({
        type:'TOGGLE_TODO',
        id:2
    })
    console.log("complete change second", store.getState());


}

