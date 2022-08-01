import React, { Component } from 'react'

class CountSetState extends Component {

    constructor(props) {
        super(props)

        this.state = {    //state is an object
            count: 0
        }
    }

    increment() {
        // this.state.count +=1;    //here this do not change the ui of the screen AND NEVER CHANGE THE state outside constructor if you want to change use setState method which takes an object inide
    //     this.setState({ //never modify the state directly instaed take the use of setState method.if you modify state directly react will not render the page
    //         count: this.state.count + 1
    //     },
    //         () => {
    //             console.log('callback value',this.state.count); //setState is a asynchronous method . so to call anything after setState method put it as a second parameter that is after the ','
    //         }
    //     )
    //     console.log(this.state.count);  //this is called synchronously so it will run before the setState method as it is processed first in the stack
    // 

        this.setState( prevState => ({  //this is a function inside the setstate method .we use it when we have to change something from previous state and want it to be dislayed on the screen
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }


    incrementFive(){    //this will not work with the setstate method passed with object .whenever we have to change the previos state use function instaed of object.because function remembers the previous state
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>Count --- {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={ () => this.incrementFive()}>Incement five</button>
            </div>
        )
    }
}

export default CountSetState


// 1) alwayas make use of setState and never modify it directly
// 2) code has to be executed after the state has been updated ? place that code in callback function nwhich
//    is the second argument to the setState method
// 3) when you have to update state based on the previus state , pass in a function as an argument instead of an regular object  