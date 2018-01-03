import React from 'react'
import { Flex } from 'antd-mobile'
import XIcon from './icon'
import './home-header.less'
import * as user from '../../service/user-state'

const doLogout = () => {
    user.logout()
    window.location.reload()
}

const goBack = () => {
    window.history.back()
}

export default function Header() {
    return (
        <Flex justify="between" className="header-title">
            <XIcon type="icon-back" className="margin-1 cursor" onClick={ () => { goBack() }} />
            <p>情不知所起，一往而情深</p>
            <XIcon type="icon-logout" className="margin-1 cursor" onClick={ () => { doLogout() }} />
        </Flex>
    )
}