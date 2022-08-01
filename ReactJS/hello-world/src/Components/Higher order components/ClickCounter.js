import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
  render() {
    const { count , incrementCount} = this.props
    return <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
  }
}

export default withCounter(ClickCounter ,5) 
//here the component is sent to  higher order component to add the functionality of constructor and clickHandler