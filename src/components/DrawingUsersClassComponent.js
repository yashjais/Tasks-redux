import React from 'react'

import { connect } from 'react-redux'
import { removeUser } from '../actions/usersClass'

class DrawingUsersClassComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            choosenUser: ''
        }
    }

    handleClick = () => {
        console.log('draw')
        const number = Math.floor(Math.random() * this.props.usersClass.length)
        // console.log(this.props.usersClass)
        let choosenUser, id
        if(this.props.usersClass.length !== 0) { // to be safe of undefined error
            choosenUser = this.props.usersClass[number].name
            id = this.props.usersClass[number].id
        }
        this.props.dispatch(removeUser(id))
        this.setState({choosenUser})
    }

    render() {
        // console.log(this.props, this.state.choosenUser)
        return (
            <div>
                <h1>Users</h1>
                <h3> Choosen User - {this.state.choosenUser} </h3>
                {(this.props.usersClass.length !== 0) ? (
                    <ul>
                        {
                            this.props.usersClass.map(user => {
                                return <li key={user.id}> {user.name} </li>
                            })
                        }
                    </ul>
                ) : ('No Users to Show') } <br />
                
                <button onClick={() => {
                    this.handleClick()
                }}> Draw </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersClass : state.usersClass
    }
}

export default connect(mapStateToProps)(DrawingUsersClassComponent)