import React, { Component } from 'react'
import './app.less'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AuthRouter from './service/auth-router'
import * as user from './service/user-state'
import Login from './page/login/'
import Regist from './page/login/regist'
import User from './page/user/'
import Rate from './page/rate/'
import Result from './page/result/'

class App extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <Router >
        <Switch>
          <Route path="/regist" component={Regist} />
          <Route path="/login" component={Login} />
          <Route path="/result" component={Result} />
          <Route path="/user" component={User} />
          <Route path="/rate" component={Rate} />
          <AuthRouter path="/" isAuth={user.isLogin()} />
        </Switch>
      </Router>
    )
  }
}

export default App;
