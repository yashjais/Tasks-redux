const initialState = [{id: '1', todo: 'exercise'}, {id:2, todo: 'eat less juck food'}]
export const todosReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_TODO" : {
            return [...state,action.payload]
        }
        case "REMOVE_TODO" : {
            return state.filter(todo => todo.id !== action.payload)
        }
        default: {
            return [...state]
        }
    }
}