import React, { Component } from 'react'

class ClassMouse extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         x: 0 ,
         y : 0
      }
    }

    logMousePosition = e => {
        this.setState({
            x : e.clientX ,
            y : e.clientY
        })
    }
    componentDidMount(){
        window.addEventListener( 'mousemove' , this.logMousePosition)
    }
    //here we set the event listener only once by using componentDidMount .so no rendering happens for entire jsx and mouseoer.
    //but while using useEffect the problem arrises so we solve it by using an empty array
    

    render() {
    return (
      <div>
        x - {this.state.x} and Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse
