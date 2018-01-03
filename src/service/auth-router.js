import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../page/home/'

export default function AuthRouter(props, {...rest}) {
    return (
        <Route path={props.path} render={() => (
            props.isAuth
              ? <Home {...rest} />
              : <Redirect from="/" to="/login" />
          )} />
    )
}