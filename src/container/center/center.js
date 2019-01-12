import React, {Component} from 'react'
import browserCookie from 'browser-cookies';
import AuthRouter from '../../component/authroute/authroute';
import Nav from '../../component/nav/nav';
import {connect} from 'react-redux';
import './center.scss'
import {
    Button, Avatar
} from "antd";

class Center extends Component{
    logout() {
        browserCookie.erase('userid');
        window.location.reload();
    }
    render() {
        return (
            <div>
                <AuthRouter/>
                <div className="header">
                    <Avatar className={"avatar"} src={this.props.userInfo.avatar} size={200}/>
                    <p className='nickname'>{this.props.userInfo.nickname}</p>
                </div>
                <div className="list">
                    <Button className='ant-btn ant-btn-primary logout' onClick={this.logout.bind(this)}>退出登录</Button>
                </div>

                <Nav/>
            </div>

        )
    }
}
const mapState = (state) => {
        return {
            userInfo: state.user
        }
}
export default connect(mapState, null)(Center)