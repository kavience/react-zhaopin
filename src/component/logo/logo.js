import React, {Component} from 'react';
import './logo.scss';

class Logo extends Component{
    render() {
        return (
            <div className="logo">
                <img className='logoImg' src="/static/img/logo.svg" alt="logo"/>
                <span className='title'>kavience招聘App</span>
            </div>
        )
    }
}

export default Logo;