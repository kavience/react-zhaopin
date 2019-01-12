import React, {Component} from 'react';
import Logo from '../../component/logo/logo.js';
import AuthRouter from '../../component/authroute/authroute';

import './register.scss';
import {Link, withRouter} from "react-router-dom";
import axios from 'axios';
import {
    Form, Input, Tooltip, Icon, Button, message
} from 'antd';

const FormItem = Form.Item;

class Register extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/user/register', values).then(res => {
                    if (res.data.code === 0) {
                        message.success(res.data.data.msg, 2, () => {
                            this.props.history.push("/login");
                        });
                    } else {
                        message.error(res.data.data.msg, 2);
                    }
                });
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码输入不一致');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div>
                <Logo/>
                <AuthRouter/>

                <Form onSubmit={this.handleSubmit} className='register-form'>
                    <FormItem
                        {...formItemLayout}
                        label="邮箱"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '请输入正确的邮箱地址',
                            }, {
                                required: true, message: '请输入您的邮箱',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="密码"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入您的密码',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="password"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="确认密码"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请再次输入密码',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                            昵称&nbsp;
                                <Tooltip title="想怎么称呼您？">
                            <Icon type="question-circle-o"/>
                          </Tooltip>
                        </span>
                        )}
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{required: true, message: '请输入您的昵称', whitespace: true}],
                        })(
                            <Input/>
                        )}
                    </FormItem>


                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">立即注册</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

Register = Form.create()(Register);
Register = withRouter(Register);

export default Register;