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

class OwnStore{

    constructor(private reducer){
        this.dispatch({})
    }

    state;
    listeners = [];

    getState = () =>{
        return this.state;
    }

    dispatch = (action) => {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach((listener) =>{
            listener();
            return;
        } )
    }

    subscribe = (listener) => {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter( (l)=>{
                return (l !==listener)
            })
        }
    };

}

/*
const createStore_own = (reducer) =>{
    let state;
    let listeners = [];
    const getState = () =>{
        return state;
    }
    const dispatch = (action) => {
        state = reducer(state, action);
        this.listeners.forEach((listener) =>{
            listener();
            return;
        } )
    }
    const subscribe = (listener) => {
        this.listeners.push(listener);
        return () => {
            this.listeners = listeners.filter( (l)=>{
                return (l !==listener)
            })
        }
    };
    dispatch({})
}
*/


const test_execute = () =>{

    console.log("test execute");
    const store = new OwnStore(counter);
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

