import React, {Component} from 'react';
import './nav.scss'
import {connect} from 'react-redux'
import * as navActionCreator from '../../redux/nav.actionCreator'
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <div className="nav-item user-news" onClick={() => this.props.changeActive('newsImg')}>
                    <Link to='/chat'>

                        <img src={this.props.nav.newsImg} alt=""/>
                        <span className="title">消息</span>
                    </Link>
                </div>
                <div className="nav-item user-center" onClick={() => this.props.changeActive('centerImg')}>
                    <Link to={'/center/' + this.props.user.id}>
                        <img src={this.props.nav.centerImg} alt=""/>
                        <span className="title">我的</span>
                    </Link>

                </div>
            </div>
        );
    }


}

const mapState = (state) => ({
    nav: state.nav,
    user: state.user
});

const mapDispatch = (dispatch) => ({
    changeActive(active) {
        dispatch(navActionCreator.changeNavActive(active))
    }
})

export default connect(mapState, mapDispatch)(Nav);