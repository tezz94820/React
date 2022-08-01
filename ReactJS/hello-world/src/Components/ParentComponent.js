import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       parentName : "Parent"
    }
    this.greetParent = this.greetParent.bind(this);     //event handler binding
  }

  greetParent(childName){
      alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  
  
    render() {
    return (
      <div>
        <ChildComponent greetHandler ={this.greetParent} />     {/*//we are trying to access parent component methods using child components events*/}
      </div>
    )
  }
}

export default ParentComponent
