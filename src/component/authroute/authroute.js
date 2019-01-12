import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActionCreator from '../../redux/user.actionCreator';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Authroute extends Component {

    componentDidMount() {
        const publicList = ['/', '/login', '/register'];
        const pathName = this.props.location.pathname;
        if (publicList.indexOf(pathName) > -1) {
            return null;
        }
        // 获取用户信息

        console.log('authroute运行')
        axios.post('/user/info').then(res => {
            if (res.status === 200) {
                if (res.data.code === 0) {
                    // 说明用户已经登录成功
                    this.props.getUserInfo(res.data.data.data)
                } else {
                    this.props.history.push('/login')
                }
            }
        })
    }

    render() {
        return '';
    }
}

const mapState = (state) => {
    return {
        userInfo: state.user
    }
}

const mapDispatch = (dispatch) => {
    return {
        getUserInfo(data) {
            dispatch(userActionCreator.getUserInfo(data))
        }
    }
}

Authroute = withRouter(Authroute);

export default connect(mapState, mapDispatch)(Authroute);