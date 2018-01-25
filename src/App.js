import React from 'react';
import NewsPost from './NewsPost';
import './App.css';

class App extends React.Component {
    state = {
        value: "",
        news: []
    };
    handleChange = e => {
        this.setState({ value: e.target.value });
    };
    handleClick = e => {
        e.preventDefault();

        let { value, news } = this.state;

        news.push(value);
        this.setState({ news });
        this.setState({ value: "" });
    };
    render() {
        let { value, news } = this.state;
        return (
            <div>
                <div className="wrapper">
                    <input
                        type="text"
                        className="input"
                        placeholder="News"
                        onChange={this.handleChange}
                        value={value}
                    />
                    <button
                        className={"button"}
                        onClick={this.handleClick}
                    >
                        Push
                    </button>
                </div>
                <NewsPost news={news} />                
            </div>
        );
    }
}

export default App;