import React, {Component} from 'react';
import {Avatar} from "antd";
import "./person.scss"
import {Link, withRouter} from "react-router-dom";

class Person extends Component {
    render() {
        return (
            <div className="person-item" onClick={this.goToChat.bind(this, this.props.id, this.props.nickname)}>
                <Avatar className="avatar" size={100} src="/static/img/logo.svg" alt="头像"/>
                <div className="text">
                    <span className="nickname">{this.props.nickname}</span>
                    <span className="tip">聊天</span>
                </div>
            </div>
        )
    }

    goToChat(id, nickname) {
        let data = {
            nickname
        }
        let path = {
            pathname: "/message/" + id,
            state:data,
        }

        this.props.history.push(path);
    }
}

Person = withRouter(Person)

export default Person;