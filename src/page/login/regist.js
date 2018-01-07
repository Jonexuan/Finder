import React, { Component } from 'react'
import { Flex, List, InputItem, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile'
import XIcon from '../../component/common/icon'
import Header from '../../component/common/home-header'
import Footer from '../../component/common/footer'
import * as api from './api'
import * as user from '../../service/user-state'
import regist from '../../static/image/regist.jpg'

export default class Login extends Component {
    constructor(props) {
        window.document.title = 'Finder-注册'
        super(props)
        if (user.isLogin()) {
            this.props.history.push('/')
        }
        this.onChangeValue = this.onChangeValue.bind(this)
        this.doRegist = this.doRegist.bind(this)
        this.state = {
            name: '',
            password: '',
            password2: '',
            footer: true
          }
        this.showFooter = this.showFooter.bind(this)
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

    doRegist() {
        if (!this.state.name) {
            Toast.info('还没有输入用户编号-.-');
            return false;
          }
          if (!this.state.password) {
            Toast.info('还没有输入密码-.-');
            return false;
          }
          if (!this.state.password2) {
            Toast.info('还没有输入重复密码-.-');
            return false;
          }
          if (this.state.password !== this.state.password2) {
            Toast.info('两次输入的密码不一致-.-');
            return false;
          }
          const data = {
            userNumber: this.state.name,
            password: this.state.password
        }
        api.regist(data)
            .then((res) => {
                if (res.code === 200) {
                    Toast.success('注册成功')
                    this.props.history.puah('/login')
                }
            })
    }
    
    render() {
        return (
            <div>
                <Header showLogout={false} />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank>
                    <List>
                        <InputItem type="digit" onFocus={() => {this.showFooter(false)}} onBlur={() => {this.showFooter(true)}} placeholder="请输入用户编号" value={this.state.name} onChange={ (v) => {this.onChangeValue('name', v)}} >
                        <XIcon type="icon-user" />
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <List>
                        <InputItem type="password" onFocus={() => {this.showFooter(false)}} onBlur={() => {this.showFooter(true)}} placeholder="设置登录密码" value={this.state.password} onChange={ (v) => {this.onChangeValue('password', v)}}>
                        <XIcon type="icon-pwd" />
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <List>
                        <InputItem type="password" onFocus={() => {this.showFooter(false)}} onBlur={() => {this.showFooter(true)}} placeholder="再次输入密码" value={this.state.password} onChange={ (v) => {this.onChangeValue('password2', v)}}>
                        <XIcon type="icon-pwd" />
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <List>
                        <Button type="primary" onClick={ () => { this.doRegist() }}>注册</Button>
                    </List>
                </WingBlank>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <Flex justify="center">
                    <img src={regist} style={{ height: '30vh' }} />
                </Flex>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <Footer show={this.state.footer} />
            </div>
        )
    }
}