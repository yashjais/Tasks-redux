import React from 'react'
import { connect } from 'react-redux'

import ToDoForm from './ToDoForm'
import { removeTodo } from '../actions/todos'

function ToDo(props) {
    // console.log('here',props)
    const handleClick = (id) => {
        props.dispatch(removeTodo(id))
    }
    return (
        <div>
            <h1> To-Do  </h1>
            <ul>
                {
                    props.todos.map(td => {
                        return (
                            <li key={td.id}> {td.todo} <button onClick={() => {
                                handleClick(td.id)
                            }}>Remove</button></li>
                        )
                    })
                }
            </ul>
            <ToDoForm />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ToDo)