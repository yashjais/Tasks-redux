const initialState = [{id: 1, name: 'dane'}, {id: 2, name: 'mark'},  {id: 3, name: 'sam'},  {id: 4, name: 'dean'}]

export const usersClassReducer = (state= initialState, action) => {
    switch(action.type) {
        case 'REMOVE_USER' : {
            return state.filter(user => user.id !== action.payload)
        }
        default: {
            return [...state]
        }
    }
}