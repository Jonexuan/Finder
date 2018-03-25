import React, { Component } from 'react';
import { List, Toast } from 'antd-mobile';
import classnames from 'classnames'
import * as api from './api'
import thumb from '../../static/image/default1.png'

const Item = List.Item;
const Brief = Item.Brief;

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beauties: [],
            loading: true
        }
        this.fetchData = () => {
            api.getList()
                .then((res) => {
                    this.setState({
                        loading: false
                    })
                    Toast.hide()
                    if(res.code === 200) {
                        this.setState({
                            beauties: res.result
                        })
                    }
                })
        }
        this.toDetail = (be) => {
            this.props.history.push(`/rate/${be.userId}`)
        }
    }

    componentWillMount() {
        this.fetchData()
    }

    render() {
        if(this.state.loading) {
            Toast.loading('加载中...', 0);
            return null;
        }
        return (
            <div>
                <List className="my-list">
                    {
                        this.state.beauties.map((be) => {
                            return (
                            <Item
                                key={be.userId}
                                arrow="horizontal"
                                thumb={<img className="step-icon" src={thumb} />}
                                multipleLine
                                onClick={() => {this.toDetail(be)}}
                            >
                                {be.userNumber} <Brief><span className={classnames({'text-green': be.scoreString.indexOf("已") > -1, 'text-red': be.scoreString.indexOf("未") > -1})}>{be.scoreString}</span></Brief>
                            </Item>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}