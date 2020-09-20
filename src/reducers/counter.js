const initialState = 0
const initialStateHide = true

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            return state + 1
        }
        default: {
            return state
        }
    }
}

export const counterHideReducer = (state = initialStateHide, action) => {
    switch(action.type) {
        case 'HIDE': {
            return state = !state
        }
        default: {
            return state
        }
    }
}