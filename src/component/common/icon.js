import React from 'react'
import classnames from 'classnames'
import './icon.less'

export default function XIcon (props){
    function getClass(props) {
        let result = { 'icon': true, [props.type]: true }
        if (props.className){
            result[`${props.className}`] = true
        }
        return result
    }
    return (
        <div className={classnames(getClass(props))} onClick={ props.onClick } />
    )
}