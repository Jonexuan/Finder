import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function AuthRouter({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={(props) => (
            rest.isAuth
              ? <Component {...props} />
              : <Redirect to={{
		          pathname: '/login',
		          state: { from: props.location }
		        }}
		        />
          )} />
    )
}