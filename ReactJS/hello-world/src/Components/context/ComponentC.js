import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
  render() {
    return <ComponentE />
  }
}

export default ComponentC


//1) create the context    
//2) provide a context value 
//3) consume the context value