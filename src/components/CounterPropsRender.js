import React, { Component } from 'react'

class CounterPropsRender extends Component {

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
    return (
      <div>
          {this.props.render(this.state.counter, this.increaseCount)}
      </div>
    )
  }
}

export default CounterPropsRender