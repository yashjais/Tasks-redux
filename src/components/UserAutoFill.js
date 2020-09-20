import React from 'react'
import { connect } from 'react-redux'

class UserAutoFill extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            name: '',
            email: ''
        }
    }
    handleUserName = (e) => {
        const username = e.target.value
        this.setState({username})
        const findUser = this.props.onlineUsers.find(user => user.username == username)
        if(findUser) {
            this.setState({
                name: findUser.name,
                email: findUser.email
            })
        }
    }
    render() {
        console.log('render', this.props)
        return (
            <div>
                <h2> User - Auto - Fill </h2>

                <form>
                    <label htmlFor="username"> UserName </label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleUserName} /> <br />

                    <label htmlFor="name"> Name </label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} /> <br />

                    <label htmlFor="email"> Email </label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} /> <br />

                    <input type="submit" value="Go!!" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        onlineUsers: state.onlineUsers
    }
}

export default connect(mapStateToProps)(UserAutoFill)