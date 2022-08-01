import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
    super(props)

    this.inputRef = React.createRef()       //creating refs
    // this.cbRef = null                        //this is an older method called as call back method
    // this.setCbRef = (element) => {
    //     this.cbRef = element
    // }

    }

    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
        // if(this.cbRef){
        //     this.cbRef.focus()
        // }
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)          //this.inputRef return an object which has captured the input tag and now calling the current property of that object where the input is stored
    }


    render() {
        return (
        <div>
            <input type='text' ref={this.inputRef}></input>         {/*accessing refs*/}
            {/* <input type='text' ref={this.setCbRef}></input> */}
            <button onClick={this.clickHandler}>Click</button>
        </div>
        )
    }
}

export default RefsDemo
