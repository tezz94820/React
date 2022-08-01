import React, { Component } from 'react'
import LifecycleB from './LifecycleB';


export class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name :'Tejas'
      }
      console.log("LifecycleA construvtor");
    }

    static getDerivedStateFromProps(props , state){
        console.log("LifeycleA getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
    
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name : 'codeEvolution'
        })
    }

    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <div>LifecycleA </div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA


//order of execution of Lifecycles of A and B 

// LifecycleA construvtor
// LifecycleA.js:15 LifeycleA getDerivedStateFromProps
// LifecycleA.js:24 LifecycleA render
// LifecycleB.js:11 LifecycleB construvtor
// LifecycleB.js:15 LifeycleB getDerivedStateFromProps
// LifecycleB.js:24 LifecycleB render
// LifecycleB.js:20 LifecycleB componentDidMount
// LifecycleA.js:20 LifecycleA componentDidMount

//After LifecycleA render ,all the lifecycles of B are run and then at last to complete A lifecycle and shutdown the js file LifecycleA componentDidMount is run.