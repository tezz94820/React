import React, { Component } from 'react'

class ClassClickEventHandling extends Component {
  
    clickHandler(){
        console.log('Clicked the button');
    }
    
    render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>       {/*so do not add parenthesis here as well then it becomes the function call and runs automatically without button clicked */}
      </div>
    )
  }
}

export default ClassClickEventHandling
