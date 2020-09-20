export const usersReducer = (state=['mark', 'dean', 'diana', 'sam', 'ross'], action) => {
    switch (action.type) {
        case 'SELECT_USER' : {
            // console.log(action.payload)
            return state.filter((name, index) => index !== action.payload)
        }
        default: {
            return state
        }
    }
}