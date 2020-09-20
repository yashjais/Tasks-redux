import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { userReducer } from '../reducers/userReducer'
import { usersReducer } from '../reducers/usersReducer'
import { todosReducer } from '../reducers/todosReducer'
import { usersClassReducer } from '../reducers/usersClassReducer'
import { onlineUsersReducer } from '../reducers/onlineUsers'
import { counterReducer } from '../reducers/counter'
import { counterHideReducer } from '../reducers/counter'

// console.log('code is in store')
const configureStore = () => {
    const store = createStore(combineReducers({
        users : usersReducer,
        choosenUser: userReducer,
        todos: todosReducer,
        usersClass: usersClassReducer,
        onlineUsers: onlineUsersReducer,
        counter: counterReducer,
        counterHide: counterHideReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore