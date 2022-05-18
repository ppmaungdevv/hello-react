import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increase() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('callback', this.state.count)
        // })
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => console.log('callback', this.state.count))
        console.log(this.state.count)
    }
    increaseFiveTimes() {
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }
  render() {
      const {count} = this.state
    return (
      <div>
          <div>Counter {this.state.count}</div>
          <>Des count {counts}</>
          <button onClick={() => this.increaseFiveTimes()}>Increase</button>
      </div>
    )
  }
}

export default Counter

// don't update state directly
// if need to use updated state, use it within setState({}, callback() => {}) callback part
// react group multiple setSteate call into single update for performance so if you need to update state based on previous state you need pass func instead of an obj 