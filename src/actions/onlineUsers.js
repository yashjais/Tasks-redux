const axios = require('axios') 

export const setOnlineUsers = (users) => {
    return {type: "SET_USERS", payload: users}
}

export const getSetOnlineUsers = () => {
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(setOnlineUsers(users))
            })
    }
}