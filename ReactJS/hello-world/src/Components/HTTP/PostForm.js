import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title : '' ,
         userId : '' ,
         body : ''
      }
    }
    

    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts' , this.state)       //first parameter is the url and second is the object which we have to send
        .then( response => console.log(response))
        .catch( error => console.log(error))
    }
  render() {
      const { userId , body , title} = this.state
    return (
      <div>
          <form onSubmit={this.submitHandler}>
              <div>
                  <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
              </div>
              <div>
                  <input type="text" name="title" value={title} onChange={this.changeHandler}/>
              </div>
              <div>
                  <input type="text" name="body" value={body} onChange={this.changeHandler}/>
              </div>
              <button type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}

export default PostForm
