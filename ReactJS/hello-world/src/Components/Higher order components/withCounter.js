import React from "react";

//Higher order component is a function which tajes the original component as input and adds something to it and return new component
//here WrappedComponent is a original component and a new component is created name WithCounter passed down constructor and clickhandler which other 2 files need and returned JSX
//at last the function returns the new ccomponent .and finally the original component is replaced with modified new comonent
//see the export of HoverCounter and clickCounter components .
const withCounter = (WrappedComponent , increment) => {         //it is even possible to pass another parameter other thanwrappedComponent


    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
               count : 0
            }  
          }
          incrementCount = () => {                            
              this.setState( previousState => {               //In case if you want to deal with the previous version of the state property
                return { count : previousState.count + increment }
            })
        }
        
        render(){
            return (
                <WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount}
                //spread operator
                {...this.props}             //this is necessary to specify the wrapped component whatever props are left . name prop example in ClickCounter Component
                />
            )
        }
    }

    return WithCounter

}

export default withCounter