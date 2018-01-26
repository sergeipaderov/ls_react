import React from "react";
import NewsPost from "./NewsPost";
import "./App.css";

class App extends React.Component {
  state = {
    newsInput: "",
    news: []
  };
  handleChange = e => {
    this.setState({ newsInput: e.target.value });
  };
  handleNewPost = e => {
    let { value, news } = this.state;

    this.setState({
      value: "",
      news: [...news, value]
    });
  };
  render() {
    let { value, news } = this.state;
    return (
      <div>
        <div className="wrapper App">
          <input
            type="text"
            className="comment-input"
            placeholder=""
            onChange={this.handleChange}
            value={value}
          />
          <button className={"button"} onClick={this.handleNewPost}>
            Push
          </button>
        </div>
        <NewsPost news={news} />
      </div>
    );
  }
}

export default App;
