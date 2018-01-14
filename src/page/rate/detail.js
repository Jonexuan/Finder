import React, { Component } from 'react';
import { List, WingBlank, WhiteSpace, InputItem, Button } from 'antd-mobile'
import * as api from './api';

const Item = List.Item;
const Brief = Item.Brief;

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userNumber: '',
            userName: '',
            userHomeTown: '',
            qqNumber: '',
            userGender: '',
            hobby: '',
            images: []
        }
        this.fetchData = () => {
            api.getBeauti(this.props.match.params.id)
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
        this.doSave = () => {
            
        }
    }

    componentWillMount() {
        this.fetchData()
    }

    render() {
        return (
            <WingBlank>
                <WhiteSpace size="xl" />
                <h3>个人信息</h3>
                <List>
                    <Item extra={this.state.userNumber}>编号</Item>
                    <Item extra={this.state.userName}>昵称</Item>
                    <Item extra={this.state.qqNumber}>QQ</Item>
                    <Item extra={this.state.userHomeTown}>家乡位置</Item>
                    <Item wrap>
                        兴趣爱好
                        <Brief>{this.state.hobby}</Brief>
                    </Item>
                    <Item wrap>
                        个人图片
                        <Brief>循环图片</Brief>
                    </Item>
                    <InputItem type="digit" placeholder="请在区间[3-10]打分" value={this.state.userNumber} onChange={ (v) => {this.onChangeValue('userNumber', v)}} >
                        您的打分
                    </InputItem>
                    <Button onClick={this.doSave()} type="primary">保存</Button>
                </List>
            </WingBlank>
        )
    }
}