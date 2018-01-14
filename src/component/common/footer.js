import React from 'react'
import { Flex, WhiteSpace } from 'antd-mobile'
import './footer.less'
import classnames from 'classnames'

export default function Footer(props) {
    return (
        <div>
            {
                props.home ?
                <div>
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                </div>
                : null
            }
            <Flex justify="center" className={classnames({ "footer": !props.home,"footer-box": !props.home,'hide': !props.show, [props.className]: true} )}>
                <p>Finder-Designed 4 U</p>
            </Flex>
        </div>
    )
}