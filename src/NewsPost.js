import React from 'react';
import './NewsPost.css';

class NewsPost extends React.Component {
    render() {
        let { key, text } = this.props;
        return (
            <p key={key} className="news-post">
                {text}
            </p>                       
                
        );
    }
}

export default NewsPost;