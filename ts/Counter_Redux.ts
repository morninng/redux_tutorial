/// <reference path="./../typings/globals/redux/index.d.ts" />


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

const test_execute = () =>{

    console.log("test execute");
    const store = createStore(counter);
    console.log('state', store.getState());
    store.dispatch({type:"INCREMENT"});
    store.dispatch({type:"INCREMENT"});
    store.dispatch({type:"INCREMENT"});
    console.log('state', store.getState());
    store.dispatch({type:"DECREMENT"});
    store.dispatch({type:"DECREMENT"});
    console.log('state', store.getState());

    const render = () => {
        console.log("render is called");
        let num = store.getState();
        document.body.innerText = String(num);
    }

    store.subscribe(()=>{
        console.log("subscribe is called");
        render();
    })

    console.log("after subscription");
    store.dispatch({type:"DECREMENT"});
    console.log('state', store.getState());

    document.addEventListener('click', ()=>{
        store.dispatch({type:"INCREMENT"});
    })

}


export default test_execute;

