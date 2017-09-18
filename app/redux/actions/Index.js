
let nextTodoId = 0;
export const addTodo =(text)=>{
    return {
        type:"ADD TODO",
        id:nextTodoId,
        text
    }
}

export const setVisibility = (filter)=>{
    return {
        type:"SEY_VISIBILITY",
        filter

    }
}

export const toggleTodo =(id)=>{
    return {
        type:"TOGGLE_TODO",
        id
    }
}