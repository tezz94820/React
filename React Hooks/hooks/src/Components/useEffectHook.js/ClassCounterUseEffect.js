import React, { Component } from 'react'

class ClassCounterUseEffect extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0 ,
         name : ''
      }
    }
    
    componentDidMount(){        //for initial value
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevprops , prevState){     //for updated value
      
      if(prevState.count !== this.state.count){
        console.log("updating document title")
        console.log("updating document title in class component")
        document.title = `Clicked ${this.state.count} times`        //so by doing this rendermfunction only updates when the button is clicked and not when then the input element elemrnt is filled.
        //rendering the title is of no use when we are inputting .optimised code while using state in class
      }
    }


  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={
          event => this.setState({ name : event.target.value})
        }></input>
        <button onClick={() => this.setState({
            count : this.state.count + 1
        })}>     
        click {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterUseEffect
