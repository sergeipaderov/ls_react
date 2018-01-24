import React from 'react';
import {NewsPost} from './NewsPost';
import './App.css'

class App extends React.Component {
    
    handleChange = event => {
        this.setState({value: event.target.value});
      };

    render() {
        return
        <div>
            <input onChange={this.handleChange} value={value} /> 
            <ul>    
                {NewsPost.map(comment => {
                    return <NewsPost text = {NewsPost.text} />;
                })}
            </ul>
        </div>
    }
}

export default App;