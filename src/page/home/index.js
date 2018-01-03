import React, { Component } from 'react'
import { Carousel, WingBlank, Button } from 'antd-mobile'
// import logo from '../../static/image/logo_white.png'
import * as conf from '../../service/conf'
import './home.less'
import * as user from '../../service/user-state'
import Header from '../../component/common/home-header'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ['', '', ''],
            imgHeight: '25%',
        }
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div>
                <Header />
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
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
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        // this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
            </div>
        )
    }
}