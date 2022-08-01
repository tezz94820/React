import React, { Component } from 'react'
import RefsWithClassComponent from './RefsWithClassComponent'

class FocusRefsWithClassComponent extends Component {

    constructor(props) {
      super(props)
      this.componentRef = React.createRef() //creating a ref
    }

    clickHandler = () => {
        this.componentRef.current.focusInput() //so we clalled the method here
    }
    
  render() {
    return (
      <div>
          <RefsWithClassComponent ref={this.componentRef}/>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusRefsWithClassComponent
