import React,{PropsWithChildren,useEffect} from 'react';
import './index.less'
import {RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux';
import Nav from '@/components/Nav'
import CombinedState, {LOGIN_TYPES, ProfileState} from "@/typings/state";
import mapDispatchToProps from "@/store/actions/profile";
import {Descriptions,Button,Alert} from 'antd'
type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>
function Profile(props:Props) {

    useEffect(()=>{
      let result =   props.validate()

    },[])
    let content;
    if(props.loginState===LOGIN_TYPES.UN_VALIDATE){
        content =  null;
    }else if(props.loginState===LOGIN_TYPES.LOGINED){
        content = (
            <div className="user-info">
                <Descriptions title="用户信息">
                    <Descriptions.Item label="用户名">
                        {props.user.username}
                    </Descriptions.Item>
                    <Descriptions.Item label="邮箱">
                        {props.user.email}
                    </Descriptions.Item>
                </Descriptions>
                <Button type="ghost" onClick={props.logout}>退出</Button>
            </div>
        )
    }else {
        content = (
            <div className="user-info">
               <Alert type="warning" message="未登录"
                 description ="亲爱的用户你好，你尚未登录，请注册或者登录"
               />
                <div style={{ textAlign: 'center', padding: '.5rem' }}>
                    <Button type="dashed" onClick={() => props.history.push('/login')}>登录</Button>
                    <Button type="dashed" style={{marginLeft:"20px"}} onClick={() => props.history.push('/register')}>注册</Button>
                </div>

            </div>
        )
    }
    return(
        <section>
            <Nav history={props.history}>个人中心</Nav>
            {content}
        </section>
    )
}

const mapStateToProps = (state:CombinedState):ProfileState => state.profile
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile)

/**
 * @param
 * 因为此组件是由路由渲染出来的
 * 所以属性对象会包括路由属性
 * 另外此组件需要连接仓库
 * */
