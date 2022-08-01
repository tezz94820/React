import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false       //initialse the state to false that means no error
      }
    }
    

    static getDerivedStateFromError(error){     //this method helps to get the state in which error can happen
        return {
            hasError : true 
        }
    }

    componentDidCatch(error , info){                //this is used to see te error object ad the information related to that error
        console.log(error)
        console.log(info)
    }
    render() {
      if(this.state.hasError){
          return <h1>Something went wrong </h1>
      }
      return this.props.children
  }
}

export default ErrorBoundary
//1) error boundaries are react components that catch JavaScript error in the child component tree ,  log those errors , and display fallback UI
//2) class component becomes a error boundary by defining either or both of getderivedstatefromerror and componentDidCatch Lifecycle methods
//3) the placement of the error boundary also matters as it controls if the entire app should have the fallback UI or just the components causing the problems