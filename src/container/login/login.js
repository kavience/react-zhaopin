import React, {Component} from 'react';
import Logo from  '../../component/logo/logo.js';
import AuthRouter from '../../component/authroute/authroute';
import {
    Form, Icon, Input, Button, Checkbox, message
} from 'antd';
import './login.scss';
import {Link, withRouter} from "react-router-dom";
import axios from 'axios';

const FormItem = Form.Item;

class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/user/login', values).then((res) => {
                    if (res.data.code === 0) {
                        message.success(res.data.data.msg, 2, () => {
                            this.props.history.push("/center/" + res.data.data.data._id);
                        })
                    } else {
                        message.error(res.data.data.msg, 2);
                    }
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login">
                <Logo/>
                <AuthRouter/>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: '请输入您的邮箱账号' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <Link className="login-form-forgot" to="/forgot-password">忘记密码？</Link>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            立即登录
                        </Button>
                        或者 <Link to="/register">立即注册</Link>
                    </FormItem>
                </Form>

            </div>
        )
    }
}
Login = Form.create()(Login);
Login = withRouter(Login);

export default Login;