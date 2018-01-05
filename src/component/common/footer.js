import React from 'react'
import { Flex, WhiteSpace } from 'antd-mobile'
import './footer.less'
import classnames from 'classnames'

export default function Footer(props) {
    return (
        <Flex justify="center" className="footer-box">
            <div className={classnames({'hide': !props.show})}>
                <span>Finder-Designed 4 U</span>
                <WhiteSpace size="xl" />
            </div>
        </Flex>
    )
}