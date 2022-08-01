import React from "react";
import { Component } from "react";


//created a class component .learning about state
class StateMessage extends Component{

    constructor(){
        super();    //we need to call the constructor of component class to inherit some properties
        this.state = {  //this is the way to define a state using this keyword in class component .and here state becomes an object
            message : "Welcome Visitor"
        } 
    }
    changeMessage(){    //method to change message
        this.setState({ //setState is used to change the state or overwrite the state in class Component
            message : "Thank you for Subscribing"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                    <button onClick={ () => this.changeMessage()}>Subscribe</button>  {/*this is Event Handling */}
            </div>
        )
    }
}
//so from here we can see that the props are immutable but the state are mutable . states can be changed . and state is an object
export default StateMessage;
