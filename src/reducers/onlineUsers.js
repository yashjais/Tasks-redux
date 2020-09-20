const initialState = []

export const onlineUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_USERS" : {
            return [...state, ...action.payload]
        }
        default: {
            return [...state]
        }
    }
}