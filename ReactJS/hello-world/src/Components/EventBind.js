import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this); //this is  mainly used nowadays 
    }

    clickHandler(){
        this.setState({
            message : "Goodbye"
        })
    }
    
    // clickHandler = () => {
    //   this.setState({
    //     message : "Goodbye"
    //   })
    // } 

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> //this is 1 method but not applied nowadays */}
        {/* <button onClick={ () => this.clickHandler()}>Click</button>   //this is with the use of arrow functions only  */}
        <button onClick={this.clickHandler}>Click</button>    {/* define the click handler function by arrow and using it normally for calling it  */}
      </div> 
    )
  }
}

export default EventBind
  

//react develpoers suggest defining click handler by binding this in it in constructor.