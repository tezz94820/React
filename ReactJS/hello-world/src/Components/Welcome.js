import React from "react";
import { Component } from "react";


//created a class component 
class Welcome extends Component{
    render(){
        const {name , heroName } = this.props;    //destructuring of props
        //const {state1, state2} = this.state ;     //destructuring of state
        return (
              <h1>Welcome {name} a.k.a {heroName}</h1>          //while using props in class component use this keyword
        )
    }
}
export default Welcome;