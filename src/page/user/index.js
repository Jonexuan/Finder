import React, { Component } from 'react'
import { List, InputItem, WingBlank, WhiteSpace, TextareaItem, ImagePicker, Button } from 'antd-mobile'
import * as api from './api'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.state = {
            userNumber: '',
            userName: '',
            userHomeTown: '',
            qqNumber: '',
            userGender: '',
            hobby: '',
            images: []
        }
        this.onFilesChange = (file, type, index) => {
            this.setState({
                images: file
            })
        }
        this.doSave = () => {

        }
    }

    componentDidMount() {
        api.getUserInfo()
            .then((res) => {
                if(res.code === 200) {
                    Object.keys(res.result).map((k) => {
                        this.setState({
                            [k]: res.result[k]
                        })
                    })
                }
            })
    }

    onChangeValue(type, value) {
        this.setState({
            [type]: value
        })
    }

    render() {
        return (
            <WingBlank>
                <WhiteSpace size="xl" />
                <h3>个人信息</h3>
                <List>
                    <InputItem type="digit" placeholder="请输入用户编号" disabled value={this.state.userNumber} onChange={ (v) => {this.onChangeValue('userNumber', v)}} >
                        用户编号
                    </InputItem>
                    <InputItem placeholder="请输入昵称" value={this.state.userName} onChange={ (v) => {this.onChangeValue('userName', v)}} >
                        昵称
                    </InputItem>
                    <InputItem placeholder="请输入QQ" value={this.state.qqNumber} onChange={ (v) => {this.onChangeValue('qqNumber', v)}} >
                        QQ
                    </InputItem>
                    <InputItem placeholder="请输入家乡" value={this.state.userHomeTown} onChange={ (v) => {this.onChangeValue('userHomeTown', v)}} >
                        家乡
                    </InputItem>
                    <TextareaItem rows={3} title="兴趣爱好" value={this.state.hobby} onChange={ (v) => {this.onChangeValue('hobby', v)}} />
                    <ImagePicker files={this.state.images} multiple={true} onChange={this.onFilesChange} />
                </List>
                <Button onClick={this.doSave()} type="primary">保存</Button>
            </WingBlank>
        )
    }
}