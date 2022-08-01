import React, { Component } from 'react'

class HoverCounter2 extends Component {

  render() {
      const { count , incrementCount} = this.props
    return <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
  }
}

export default HoverCounter2
