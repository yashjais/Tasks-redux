import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { getSetOnlineUsers } from './actions/onlineUsers'


const store = configureStore()

store.subscribe(() => {
    console.log('index',store.getState())
})

store.dispatch(getSetOnlineUsers())


const ele = (
    <Provider store={store}> <App /> </Provider>
)

ReactDOM.render(ele, document.getElementById('root'))