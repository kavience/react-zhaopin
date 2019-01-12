import React, { Component} from 'react'
import './news.scss'
class News extends Component{
    render() {
        let type='left'
        this.props.type === 'send' ? type = 'right' : type = 'left'
        const newsClassName = 'news-' + type
        return (
            <div className={'news ' + newsClassName}>
                <div className='news-info'>{this.props.content}</div>
            </div>
        );
    }
}

export default News