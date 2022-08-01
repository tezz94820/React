import React, { Component } from 'react'

class ConditionalRendering extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true
    }
  }
  
  
    render() {

        // // 1st approach for giving conditions to jsx .  but we cannot include if else hstatement inside the jsx
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Vishvas</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        // //2nd approach using javascript variables
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Vishvas</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // return(
        //     <div>{message}</div>
        // )


        //ternary operators
        return(
            //3rd way is ternary operat or. even we can use this in jsx  . use it most of the time
            this.state.isLoggedIn ?
            <div>Welcome Vishvas</div> :
            <div>Welcome Guest</div>
        )

        // //4th approach is short circuit . only holds good if the condition is true . dont forget to add return at front 
        // return this.state.isLoggedIn && <div>Welcome Vishvas</div>

    //this we need to do
    // return (
    //   <div>
    //     <div>Welcome Vishvas</div>      {/*if logged in */}
    //     <div>Welcome Guest</div>         {/*if not logged in*/} 
    //   </div>
    // )
  }
}

export default ConditionalRendering
