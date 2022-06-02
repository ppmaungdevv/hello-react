import React, { Component } from 'react'

class ClickCounter extends Component {
    
  render() {
    const { counter, increaseCount } = this.props
    return (
      <div>
        <button onClick={increaseCount} > Clicked {counter} times</button>
      </div>
    )
  }
}

export default ClickCounter
