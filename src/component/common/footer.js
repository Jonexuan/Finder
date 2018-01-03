import React from 'react'
import { Flex, WhiteSpace } from 'antd-mobile'
import './footer.less'

export default function Footer() {
    return (
        <Flex justify="center" className="footer-box">
            <div>
                <span>Finder-Designed 4 U</span>
                <WhiteSpace size="xl" />
            </div>
        </Flex>
    )
}