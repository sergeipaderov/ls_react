import React from 'react';
import NewsPost from './NewsPost';
import './App.css';

class App extends React.Component {
    state = {
        newsInput: "",
        news: []
    };
    handleChange = e => {
        this.setState({ newsInput: e.target.value });
    };
    handleNewPost = e => {
        
        let value = this.state.newsInput;
        let news = this.state.news;
        news.push({text: value})
        
        this.setState({
            newsInput: "",
            news: news
        })
    };
    render() {
        return (
            <div>
                <div className="wrapper App">
                    <input
                        type="text"
                        className="comment-input"
                        placeholder=""
                        onChange={this.handleChange}
                        value={this.state.newsInput}
                    />
                    <button
                        className={"button"}
                        onClick={this.handleNewPost}
                    >
                        Push
                    </button>
                </div>
                <div className="todo-container">
                    {this.state.news.map(item => <NewsPost key={item.text} text={item.text} />)}                    
                </div>              
            </div>
        );
    }
}

export default App;