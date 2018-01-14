import React, { Component } from 'react'
import './app.less'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AuthRouter from './service/auth-router'
import * as user from './service/user-state'
import Login from './page/login/'
import Regist from './page/login/regist'
import BasicLayout from './layout/basic'

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
          <AuthRouter isAuth={user.isLogin()} component={BasicLayout} />
        </Switch>
      </Router>
    )
  }
}

export default App;
