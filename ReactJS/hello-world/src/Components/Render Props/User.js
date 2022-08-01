import React, { Component } from 'react'

class User extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        {this.props.render(true)}           {/*//this is completely valid to use render as a function name and not conflict with the render required method */}
      </div>
    )
  }
}

export default User
