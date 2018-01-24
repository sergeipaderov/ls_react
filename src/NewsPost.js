import React from 'react';
import './NewsPost.css'

class NewsPost extends React.Component {
    render() {
    const text = this.props;
        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }
} 
    


export default NewsPost;