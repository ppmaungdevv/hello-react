import React, { Component } from 'react'

class ClickCounter extends Component {
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
      const {counter} = this.state
    return (
      <div>
          <button onClick={this.increaseCount}>Clicked {counter} times</button>
      </div>
    )
  }
}

export default ClickCounter

// we are duplicating the code, in HoverComponent, not re-using functionality (increaseCount)