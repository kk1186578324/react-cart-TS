import React from 'react'
import {Link,NavLink,withRouter } from 'react-router-dom'
import './index.less'
import {
    HomeOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
interface  Props {

}
function Tabs(_props:Props) {
    return(
        <footer>
            <NavLink exact to="/"><HomeOutlined className="icon"/><span>首页</span></NavLink>
            <NavLink  to="/cart">< ShoppingCartOutlined className="icon"/><span>XXX</span></NavLink>
            <NavLink  to="/profile"><UserOutlined className="icon"/><span>个人中心</span></NavLink>
        </footer>
    )
}
export default Tabs
