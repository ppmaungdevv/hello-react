import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (user_name) => {
                    return <div>ComponentF {user_name}</div>
                }
            }
        </UserConsumer>
    )
  }
}

export default ComponentF