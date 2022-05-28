import React, { Component } from 'react'

class RegComp extends Component {
  render() {
      console.log('reg render')
    return (
      <div>RegComp {this.props.name} </div>
    )
  }
}

export default RegComp

// regular component does not implement shouldComponentUpdate(),
// it always return true by default