/// <reference path="./../typings/modules/react/index.d.ts" />
/// <reference path="./../typings/modules/react-dom/index.d.ts" />

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

const visibilityFilter = (state = 'SHOW_ALL', action) =>{

    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state;
    }
}


import {createStore, combineReducers} from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';



const todoApp = combineReducers({
    todos:todos_reducer_composition_obj,
    visibilityFilter: visibilityFilter
})
const store = createStore(todoApp);



let nextTodoId = 1;

const TodoApp3 = React.createClass({
    propTypes: {
        todos: React.PropTypes.array,
        aaa: React.PropTypes.string
    },
    render: function{
        return (
            <div>
                <input ref={node => {this.input = node;}} />
                <button onClick={()=>{
                    nextTodoId++;
                    store.dispatch({
                        type:'ADD_TODO',
                        text:this.input.value,
                        id:nextTodoId
                    })
                    this.input.value = '';
                }}>Add todo</button>
                <div>{this.props.aaa}
                </div>
                <ul>{
                    this.props.todos.map(todo => 
                        <li onClick={
                            ()=>{store.dispatch({
                                type:'TOGGLE_TODO',
                                id: todo.id
                            })}
                            }
                        style={{
                            textDecoration:todo.completed? 'line-through' : 'none'
                        }}
                         key={todo.id}>{todo.text}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
});



  const render = () => {
      ReactDOM.render(
        <TodoApp3 aaa="kk" todos = {store.getState().todos}  ></TodoApp3>
        ,
        document.getElementById('root')
      );
  }



export const test_func = ()=>{

  store.subscribe(render);

    store.dispatch({
        type:'ADD_TODO',
        id:0,
        text:'first item'
    })

}

