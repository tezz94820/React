import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : '' ,
         comments : '',
         topic : ''
      }
    }
    handleUsernameChange = event => {
        this.setState({
            username : event.target.value       //use event target value to go to the targeted input tag and extract value from there
        })
    }
    handleCommentsChange = event => {
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault()
    }
    
  render() {
      const {username , comments , topic } = this.state;
    return (
        //for each input type define the value as a state property and also use onChange handler to change the input value in the input tag
        //then define the handler method and using this.setState method changet the state of previously defined states

        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={this.handleUsernameChange}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form
