import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../component/common/home-header';
import Footer from '../component/common/footer';
import User from '../page/user/';
import Rate from '../page/rate/';
import Result from '../page/result/';
import Home from '../page/home/';
import RateDetail from '../page/rate/detail';
import ResultDetail from '../page/result/detail';

import * as u from '../service/user-state'


export default class BasicLayout extends React.Component {
    constructor(props) {
        super(props)
        if (!u.isLogin()) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <Header showLogout />
                <Router >
                    <Switch>
                        <Route path="/result/:id" component={ResultDetail} />
                        <Route path="/result" component={Result} />
                        <Route path="/user" component={User} />
                        <Route path="/rate/:id" component={RateDetail} />
                        <Route path="/rate" component={Rate} />
                        <Route component={Home} />
                    </Switch>
                </Router >
                <Footer show={true} className="bg-deep" home />
            </div>
        )
    }

}
