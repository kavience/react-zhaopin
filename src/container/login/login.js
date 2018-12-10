import React, {Component} from 'react';
import Logo from  '../../component/logo/logo.js';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './login.scss';
import {Link} from "react-router-dom";

const FormItem = Form.Item;

class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login">
                <Logo/>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入您的账号' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
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
const LoginForm = Form.create()(Login);

export default LoginForm;