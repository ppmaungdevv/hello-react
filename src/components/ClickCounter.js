import React, { Component } from 'react'
import withCounter from "./HOC/withCounter";

class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      counter: 0
    //   }
    // }
    // increaseCount = () => {
    //     this.setState(prevState => {
    //         return { counter: prevState.counter + 1 }
    //     })
    // }
  render() {
    //   const {counter} = this.state
    const { counter, increaseCount } = this.props
    return (
      <div>
                {/* {this.props.name}  */}
                {/* this.props.name get from HOC */}
          {/* <button onClick={this.increaseCount}>
              Clicked {counter} times
            </button> */}
            <button onClick={increaseCount} > {this.props.fromApp} Clicked {counter} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 2) // using the HOC

// we are duplicating the code, in HoverComponent, not re-using functionality (increaseCount) without HOC

// by using HOC common methods, states,... can passed down with props
// but states are separated for each component