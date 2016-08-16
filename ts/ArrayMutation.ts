const addCounter = (list) =>{
    list.push(0);
    return list;
}

const addCounter_mutate = (list) =>{
    return list.concat([0]);
}

const addCounter_mutate_2 = (list) =>{
    return [...list, 0];
}

const removeCounter = (list, index) =>{
     list.splice(index,1);
     return list;
}

const removeCounter_mutate1 = (list, index) =>{

     return list.slice(0, index).concat(list.slice(index+1));

}

const removeCounter_mutate2 = (list, index) =>{

     return [...list.slice(0, index), ...list.slice(index+1)]
     
}

const increment_counter = (list, index) =>{

     return [...list.slice(0, index), list[index]+1 , ...list.slice(index+1)]
     
}