import React, { Component } from 'react'
import axios from 'axios' //install axios as 'npm install axios

class PostList extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        post : [] ,
        errorMessage : ''  
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // console.log(response)
            this.setState( { post : response.data})
        })
        .catch(error => {
            // console.log(error)
            this.setState({
                errorMessage : 'Error Retrieving Data'
            })
        })
    }
    
  render() {
      const { post , errorMessage } = this.state
    return (
      <div>
        List of Post
        {   post.length ?
            post.map( post => <div key={post.id}>{post.title}</div>) :
            null
        }
        {
            errorMessage ? <div>{errorMessage}</div> :
            null
        }
      </div>
    )
  }
}

export default PostList
