import React from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/selectUser'
import { choosenUser } from '../actions/choosenUser'

function DrawingUsers(props) {
    // console.log('here', props)
    return (
        <div>
            <h1> Users </h1>
            <h2> { props.choosenUser } </h2>
            <ul>{
                    props.users.length !== 0 ? props.users.map((user, i) => {
                        return <li key={i}> {user} </li>
                    }) : <h2>No users to show</h2>
                } </ul>
            <button onClick={() => {
                const n = Math.floor(Math.random() * props.users.length)
                props.dispatch(selectUser(n))
                let name = props.users.find((user, index) => index == n)
                if(!name) {
                    name = ''
                }
                props.dispatch(choosenUser(name))
            }}> Draw </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        choosenUser: state.choosenUser
    }
}

export default connect(mapStateToProps)(DrawingUsers)