/// <reference path="./../typings/globals/redux/index.d.ts" />
/// <reference path="./../typings/modules/requirejs/index.d.ts" />
/// <reference path="./../typings/modules/react/index.d.ts" />
/// <reference path="./../typings/modules/react-dom/index.d.ts" />


import * as React from 'react';
import * as ReactDOM from 'react-dom';



const render = ()=>{
    ReactDOM.render(
        <div>aa</div>,
        document.getElementById('root')
    );
}


const test_execute = () =>{
    console.log("test execute");
    render();
}


export default test_execute;

