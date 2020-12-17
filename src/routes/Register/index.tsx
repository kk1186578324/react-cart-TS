import React, { PropsWithChildren } from 'react';
import './index.less';
import { Form, Input, Icon, Button, message } from 'antd';
import { connect } from 'react-redux';
import { CombinedState, ProfileState } from '@/typings/state';
import { RouteComponentProps, Link } from 'react-router-dom';
import mapDispatchToProps from "@/store/actions/profile";
import Nav from '@/components/Nav'
type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>
interface Props {

}
function Register(props:Props) {
    const layout = {
        labelCol: { span:4 },
        wrapperCol: { span: 12 },
    };
    const tailLayout = {
        wrapperCol: { offset: 4, span: 12 },
    };

    const onFinish:any = (values:any) => {

        props.register(values)
    };

    // const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };


    return (
        <>
            <Nav  history={props.history}>注册</Nav>
        <Form
            {...layout}
            className="register-form"
            name="basic"
            onFinish={onFinish}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="confirmPassword"
                name="confirmPassword"
                rules={[{ required: true, message: 'Please input your confirmPassword!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
            </>
    );
}
let mapStateToProps = (state:CombinedState):ProfileState=>state.profile
export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Register);

