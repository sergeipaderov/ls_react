import React from 'react';
import './NewsPost.css';

class NewsPost extends React.Component {
    render() {
        let { news } = this.props;
        return (
            <div className="todo-container">
                {news.map((item, index) => {
                    return (
                        <p key={index} className="news-post">
                            {item}
                        </p>
                        );
                    })
                }
            </div>
        );
    }
}

export default NewsPost;