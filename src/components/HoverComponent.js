import React, { Component } from 'react'
import withCounter from "./HOC/withCounter";

class HoverComponent extends Component {
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
    //   const { counter } = this.state
    const { counter, increaseCount } = this.props
    return (
      <div>
            {/* {this.props.name}  */}
            {/* get from HOC */}
          {/* <h1 onMouseOver={this.increaseCount}>
              Hover {counter} times
            </h1> */}
            <h1 onMouseOver={increaseCount}>
              Hover {counter} times
            </h1>
      </div>
    )
  }
}

export default withCounter(HoverComponent)