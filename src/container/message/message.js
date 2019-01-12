import React, {Component} from 'react';
import {
    Input,
    Button
} from 'antd'
import './message.scss'
import News from '../../component/news/news'
import {connect} from 'react-redux'
import * as messageActionCreator from '../../redux/message.actionCreator'
import io from 'socket.io-client'
import AuthRouter from "../../component/authroute/authroute";

const {TextArea} = Input
const socket = io('ws://localhost:9093')

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    componentDidMount() {
        setTimeout(() => {
            let sendid = this.props.user.id, receiveid = this.props.match.params.id
            this.props.getList(receiveid, sendid)

            socket.on('receivemsg', (res) => {
                if (res.code === 0) {
                    this.props.receiveMessage(res.data)
                }
            })
        }, 1000)


    }

    render() {
        let userid = this.props.user.id

        return (
            <div className='message' style={{height: document.documentElement.clientHeight + 'px'}}>
                <AuthRouter/>
                <div className="message-header">
                    <img className='message-back' onClick={() => {this.props.history.push('/chat')}} src="/static/img/back.png" alt="返回"/>
                    <p className='message-person'>{this.props.location.state.nickname}</p>
                </div>
                <div className="message-content">
                    {
                        this.props.message.list.map((item, key) => {
                            return (
                                <News type={item.sendid == userid ? 'send' : 'receive'} content={item.text} key={key}/>
                            )
                        })}
                </div>

                <div className="message-input-block">
                    <div className='message-input'>
                        <TextArea placeholder="请输入..." autosize={{minRows: 1, maxRows: 5}} value={this.state.text}
                                  onChange={this.props.changeInfo.bind(this)}/>
                    </div>
                    <div className='message-send'>
                        <Button className='ant-btn ant-btn-primary'
                                onClick={this.props.sendMessage.bind(this, this.props.user.id, this.state.text, this.props.match.params.id)}>发送</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        message: state.message,
        user: state.user
    }
}

const mapDispatch = (dispatch) => ({
    changeInfo(e) {
        this.setState({text: e.target.value})
    },
    sendMessage(sendid, text, receiveid) {
        if (text === '') {

            alert('内容不能为空')
            return
        }
        let data = {
            sendid,
            text,
            receiveid
        }

        socket.emit('sendmsg', data);
        // 清空消息框
        this.setState({text: ''})

        dispatch(messageActionCreator.sendMessage(data))
    },
    receiveMessage(data) {
        dispatch(messageActionCreator.receiveMessage(data))
    },
    getList(receiveid, sendid) {
        socket.emit('join', sendid);

        let data = {
            receiveid,
            sendid
        }
        dispatch(messageActionCreator.getList(data))
    }
})

export default connect(mapState, mapDispatch)(Message);