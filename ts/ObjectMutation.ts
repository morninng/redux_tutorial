export interface TODO{
    id:number;
    text:string;
    completed:boolean;
}


const toggleTodo = (todo : TODO) =>{
    todo.completed = !todo.completed;
    return todo;
}

const toggleTodo_mutate1 = (todo : TODO) =>{
    return {
        id:todo.id,
        text:todo.text,
        completed: !todo.completed
    };
}


const toggleTodo_mutate2 = (todo : TODO) =>{
    return Object.assign ( {}, todo, {completed: !todo.completed});
}

/*
この書き方は動作しない。　three dots
const toggleTodo_mutate3 = (todo : Object) =>{

    return [  ...todo, {completed: !todo.completed}
    ];
}

*/


