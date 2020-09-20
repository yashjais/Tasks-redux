export const userReducer = (state='', action) => {
    switch (action.type) {
        case 'CHOSEN_USER' : {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}