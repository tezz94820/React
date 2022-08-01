import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
  render() {
    //here under the userConsumer tag pass a  function which returns a JSX to be run directly.take username as a parameter
    return (
         <UserConsumer>                          
            {(username) => {
                return <div><strong>Hello {username}</strong></div>
            }}
        </UserConsumer>
    )
  }
}

export default ComponentF
