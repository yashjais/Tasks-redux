import React from 'react'

import { connect } from 'react-redux'
import { addToDo } from '../actions/todos'

class ToDoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            todo: this.state.todo
        }
        this.setState({todo: ''})
        this.props.dispatch(addToDo(formData))
    }

    render() {
        return (
            <div>
                <h3> Add your ToDo here </h3>

                <form onSubmit={this.handleSubmit}>
                    <label> ToDo </label>
                    <input type="text" value={this.state.todo} onChange={this.handleChange} name="todo" /> <br />

                    <input type="submit" value="Go!" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps)(ToDoForm)