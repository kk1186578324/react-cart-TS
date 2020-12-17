import React,{PropsWithChildren} from 'react'
import {RouteComponentProps } from 'react-router-dom'
import './index.less'
import {
ArrowLeftOutlined
} from '@ant-design/icons';
import {History} from 'history'
type Props = PropsWithChildren<{
    history:History
}>
function Nav(props:Props) {
    return(
        <nav className="nav-header">
            <ArrowLeftOutlined className="out-lined" onClick={()=>props.history.goBack()}/>
            {props.children}
        </nav>
    )
}
export default Nav
