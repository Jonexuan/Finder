import React, { Component } from 'react'
import { Flex, List, InputItem, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile'
import XIcon from '../../component/common/icon'
import Footer from '../../component/common/footer'
import logo from '../../static/image/logo.png'
import * as api from './api'
import * as user from '../../service/user-state'

export default class Login extends Component {
    constructor(props) {
        super(props)
        window.document.title = 'Finder-遇见'
        if (user.isLogin()) {
            this.props.history.push('/')
        }
        this.state = {
            name: '',
            password: '',
            footer: true
          }
        this.doLogin = this.doLogin.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.toRegist = this.toRegist.bind(this)
        this.showFooter = this.showFooter.bind(this)
    }

    doLogin() {
        if (!this.state.name) {
          Toast.info('还没有输入用户编号-.-');
          return false;
        }
        if (!this.state.password) {
          Toast.info('还没有输入密码-.-');
          return false;
        }
        const data = {
            userNumber: this.state.name,
            password: this.state.password
        }
        api.login(data)
            .then((res) => {
                if (res.code === 200) {
                    user.login(Object.assign({}, data, {sessionId: res.result}))
                    Toast.success('登录成功')
                    window.location.reload()
                }
            })
    }

    showFooter(flag) {
        setTimeout(() => {
            this.setState({
                footer: flag
            })
        },200)
    }
    
    onChangeValue(type, value) {
        this.setState({
            [type]: value
        })
    }
    toRegist() {
        this.props.history.push('/regist')
    }
    
    render() {
        return (
            <div>
                <Flex justify="center">
                    <img src={logo} alt="logo" className="app-logo" />
                </Flex>
                <WingBlank>
                    <List>
                        <InputItem type="digit" placeholder="请输入用户编号" onFocus={() => {this.showFooter(false)}} onBlur={() => {this.showFooter(true)}} value={this.state.name} onChange={ (v) => {this.onChangeValue('name', v)}} >
                            <XIcon type="icon-user" />
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <List>
                        <InputItem type="password" placeholder="请输入密码" onFocus={() => {this.showFooter(false)}} onBlur={() => {this.showFooter(true)}} value={this.state.password} onChange={ (v) => {this.onChangeValue('password', v)}}>
                            <XIcon type="icon-pwd" />
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <Flex justify="end">
                        <a onClick={ () => { this.toRegist() } }>新用户注册</a>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <List>
                        <Button type="primary" onClick={ () => { this.doLogin() }}>登录</Button>
                    </List>
                </WingBlank>
                <Footer show={this.state.footer} />
            </div>
        )
    }
}