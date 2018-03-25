import React, { Component } from 'react';
import { List } from 'antd-mobile';
import * as api from './api';
import classnames from 'classnames';
import thumb from '../../static/image/default1.png';

const Item = List.Item;
const Brief = Item.Brief;

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topList: []
        }
        this.toDetail = (be) => {
            this.props.history.push(`/result/${be.currentUserId}`)
        }
    }

    componentDidMount() {
        api.getTop()
            .then((res) => {
                if (res.code === 200) {
                    this.setState({topList: res.result})
                }
            })
    }

    render() {
        return (
            <div>
                <List className="my-list">
                    {
                        this.state.topList.map((be) => {
                            return (
                            <Item
                                key={be.currentUserId}
                                arrow="horizontal"
                                thumb={<img className="step-icon" src={thumb} />}
                                multipleLine
                                onClick={() => {this.toDetail(be)}}
                            >
                                <Brief>我的评分{be.selfGivedScore}</Brief>
                                <Brief>对方评分{be.otherGiveScore}</Brief>
                                <Brief>总分{be.totalScore}</Brief>
                            </Item>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}