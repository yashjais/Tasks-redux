import React from 'react'

import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import DrawingUsers from './components/DrawingUsers'
import ToDo from './components/ToDo'
import DrawingUsersClassComponent from './components/DrawingUsersClassComponent'
import GetUserInfo from './components/GetUserInfo'
import UserAutoFill from './components/UserAutoFill'
import ToggleButton from './components/ToggleButton'

function App(props) {
    // console.log('here', props)
    return (
        <div>
            <BrowserRouter>

            <h1> TASKS APP </h1>

            <Link to="/"> Home </Link> |||
            <Link to="/draw-users"> Draw-Users </Link> |||
            <Link to="/to-do"> To-Do </Link> |||
            <Link to="/draw-users-class-component"> Draw-Users-Class-Component </Link> |||
            <Link to="/get-user-info"> Get User Info </Link> |||
            <Link to="/user-auto-fill"> User Auto Fill </Link> |||
            <Link to="/toggle-button"> Toggle Button </Link>
            
            <Route path="/draw-users" component={DrawingUsers} />
            <Route path="/to-do" component={ToDo} />
            <Route path="/draw-users-class-component" component={DrawingUsersClassComponent} /> 
            <Route path="/get-user-info" component={GetUserInfo} />
            <Route path="/user-auto-fill" component={UserAutoFill} />
            <Route path="/toggle-button" component={ ToggleButton } />

            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        choosenUser: state.choosenUser
    }
}

export default connect(mapStateToProps)(App)