export const addToDo = (todo) => {
    return {type: "ADD_TODO", payload: todo}
}

export const removeTodo = (id) => {
    return {type: "REMOVE_TODO", payload: id}
}