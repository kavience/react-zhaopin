import React, {Component} from 'react';
import Person from '../../component/person/person'
import Nav from '../../component/nav/nav'
import {connect} from 'react-redux';
import * as userActionCreator from "../../redux/user.actionCreator";
import AuthRouter from "../../component/authroute/authroute";
import './chat.scss'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.props.getUserList();
    }

    render() {
        return (
            <div className='chat'>
                <AuthRouter/>
                <div className="person-list">
                    {
                        this.props.user.userList.map((item) => {
                            return (
                                    <Person nickname={item.nickname} id={item._id} key={item._id}/>
                            )
                        })}
                </div>

                <Nav/>
            </div>
        );
    }
}

const mapState = (state) => ({
    user: state.user
})

const mapDispatch = (dispatch) => ({
    getUserList() {
        dispatch(userActionCreator.getUserList())
    }
})

export default connect(mapState, mapDispatch)(Chat);