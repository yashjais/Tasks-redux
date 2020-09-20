import React from 'react'
import { connect } from 'react-redux'


class GetUserInfo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            id: '',
            user: {}
        }
    }
    // componentDidMount(){
    //     this.props.dispatch(getSetOnlineUsers())
    // }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.id)
        // console.log(this.props)
        const id = this.state.id
        const user = this.props.onlineUsers.find(user => user.id == id)
        // console.log(user)
        if(user) {
            this.setState({user, id: ''})
        }

    }
    render() {
        // console.log('render',this.props)
        return (
            <div>
                <h2> Get-User-Info </h2>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='id'> ID </label>
                    <input type="text" id="id" name="id" value={this.state.id} onChange={this.handleChange} placeholder="search by id" /> <br /> 
                    
                    <input type="submit" value="Go!!!" />
                </form>

                { (Object.keys(this.state.user).length != 0) && (<h3> { this.state.user.id } - { this.state.user.name } - { this.state.user.email } </h3>) }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        onlineUsers: state.onlineUsers
    }
}

export default connect(mapStateToProps)(GetUserInfo)