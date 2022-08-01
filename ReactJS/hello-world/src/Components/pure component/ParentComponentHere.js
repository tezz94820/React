import React, { Component , PureComponent} from 'react'
import RegularComponent from './RegularComponent';
import PureComponentExample from './PureComponentExample';
import MemoComponent from './MemoComponent';

//if you want to check this file then import just component and extend only component and not pureComponent
class ParentComponentHere extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Tejas'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Tejas'
            })
        }, 2000);
    }
    
  render() {
    console.log("********* parent Component********")
    return (
      <div>
        Parent component
        <RegularComponent name={this.state.name}/>
        <PureComponentExample name={this.state.name} />
        <MemoComponent name ={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponentHere
//we can create a component by extending the pure component class
//pure component implements the shouldcomponentupdate lifecycle method by performing a Shallow comparison on the props and state of the component
//if there is no difference the component is not read and that my performance boost
//it is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour
//never mutate the state always return a new object that reflects the new state
//wheras the regular component rerenders everytime .the pure component checks if there is any shallow difference .and if it is there then it re renders


//as there is pure component for for class component .for functional component Memo is there which works same as pure component.
//memo is added as export default React.memo(MemoComponent)