import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../page/home/'

export default function AuthRouter(props) {
    return (
        <Route path={props.path} render={() => (
            props.isAuth
              ? <Home {...props} />
              : <Redirect from="/" to="/login" />
          )} />
    )
}