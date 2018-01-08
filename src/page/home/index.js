import React, { Component } from 'react'
import { Carousel, WingBlank, Button, List, WhiteSpace } from 'antd-mobile'
// import logo from '../../static/image/logo_white.png'
import * as conf from '../../service/conf'
import './home.less'
import * as user from '../../service/user-state'
import Header from '../../component/common/home-header'
import XIcon from '../../component/common/icon'
import Footer from '../../component/common/footer'

const Item = List.Item
const Brief = Item.Brief

export default class Home extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            data: ['', '', ''],
            imgHeight: '25%',
        }
        this.toDetail = this.toDetail.bind(this)
    }

    componentDidMount() {
    }

    toDetail(flag) {
        switch(flag) {
            case 1:
                console.log(this.context.router)
                // this.props.history.push('/user')
                break;
            case 2:
                // this.props.history.push()
                break;
            case 3:
                // this.props.history.push()
                break;
            default:
                break;
        }
    }
    
    render() {
        return (
            <div>
                <Header showLogout />
                <Carousel
                    autoplay={false}
                    infinite
                >
                {conf.silderImages.map(item => (
                    <a
                    key={item.index}
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                    >
                    <img
                        src={item.src}
                        alt={conf.slogn}
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                    </a>
                ))}
                </Carousel>
                <List>
                    <Item onClick={ () => {this.toDetail(1)}} align="top" thumb={<span className="step-icon bg-green"><XIcon type="icon-step-first w-64 middle" /></span>} multipleLine>
                        <span className="text-green">[第一步]完善信息</span>
                        <Brief> 请完善个人信息，让有缘人更了解您</Brief>
                    </Item>
                    <Item onClick={ () => {this.toDetail(2)}} align="top" thumb={<span className="step-icon bg-orange"><XIcon type="icon-step-two w-64 middle" /></span>} multipleLine>
                        <span className="text-orange">[第二步]开始评分</span>
                        <Brief> 为参加活动的嘉宾给出您的印象分</Brief>
                    </Item>
                    <Item onClick={ () => {this.toDetail(3)}} align="top" thumb={<span className="step-icon bg-red"><XIcon type="icon-step-three w-64 middle" /></span>} multipleLine>
                        <span className="text-red">[第三步]查看评分</span>
                        <Brief> 查看双方打分总和的最高前<span className="text-red">6</span>位</Brief>
                    </Item>
                </List>
                <Footer show={true} className="bg-deep" home />
            </div>
        )
    }
}