import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const { count , incrementCount} = this.props
    return <h1 onMouseOver={incrementCount}> Hover {count} times</h1>
  }
}

export default withCounter(HoverCounter , 10)  


//in click counter and hover counter we are repeating the code for constructor and incrementCount over and over again .
// so there is a need for Higher order components where can write code once and repeatance can be avoided