import React, { Component } from 'react'

class HoverComponent extends Component {
  render() {
    const { counter, increaseCount } = this.props
    return (
      <div>
            <h1 onMouseOver={increaseCount}>
              Hover {counter} times
            </h1>
      </div>
    )
  }
}

export default HoverComponent