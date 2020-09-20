import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/counter'
import { hide } from '../actions/counter'

function ToggleButton(props) {
    // console.log(props)
    const handleClick = () => {
        // console.log('clicked')
        props.dispatch(increment())
    }
    const handleHide = () => {
        // console.log('hide')
        props.dispatch(hide())
    }
    return (
        <div>
            <h2> ToggleButton </h2>
            <h3> { props.counter } </h3>
            {(props.counterHide) && (<button onClick={handleClick}> increment </button>)}
            <button onClick={handleHide}> {props.counterHide ? "hide" : "unhide"} </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        counterHide: state.counterHide
    }
}

export default connect(mapStateToProps)(ToggleButton)