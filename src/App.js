import React, { Component } from 'react'
import './app.less'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthRouter from './service/auth-router'
import * as user from './service/user-state'
import Login from './page/login/'
import Regist from './page/login/regist'

class App extends Component {
  constructor(props) {
    super(props)
    window.onpopstate = function(event) {
      alert('back')
    }
  }



  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/regist" component={Regist} />
          <Route path="/login" component={Login} />
          <AuthRouter path="/" isAuth={user.isLogin()} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
