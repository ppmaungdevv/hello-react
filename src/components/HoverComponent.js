import React, { Component } from 'react'

class HoverComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }
    increaseCount = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }
  render() {
      const { counter } = this.state
    return (
      <div>
          <h1 onMouseOver={this.increaseCount}>Hover {counter} times</h1>
      </div>
    )
  }
}

export default HoverComponent