/// <reference path="./../typings/globals/redux/index.d.ts" />
/// <reference path="./../typings/modules/requirejs/index.d.ts" />
/// <reference path="./../typings/modules/react/index.d.ts" />
/// <reference path="./../typings/modules/react-dom/index.d.ts" />


import * as React from 'react';
import * as ReactDOM from 'react-dom';


const counter = (state = 0, action) => {

    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}
import {createStore} from 'redux';
const store = createStore(counter);


const Counter = ({value}) =>{
    return <h1>{value}</h1>
}

const render = ()=>{
    ReactDOM.render(
        <Counter value={store.getState()} />,
        document.getElementById('root')
    );
}


const test_execute = () =>{
    console.log("test execute");
    store.subscribe(()=>{
        console.log("subscribe is called");
        render();
    })
    render();
    document.addEventListener('click', ()=>{
        store.dispatch({type:"INCREMENT"});
    })

}


export default test_execute;

