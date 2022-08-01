import React, { Component } from 'react'

class RefsWithClassComponent extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    
    focusInput(){
        this.inputRef.current.focus()           //we defines the method here and we will access tis method in FocusRefsWithClassComponent file.
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />       
      </div>
    )
  }
}

export default RefsWithClassComponent
