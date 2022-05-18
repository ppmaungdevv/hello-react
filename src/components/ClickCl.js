import React, { Component } from 'react'

class ClickCl extends Component {
    clicked() {
        console.log('click class')
    }
  render() {
    return (
      <div>
          <button onClick={this.clicked}>Click Class</button>
      </div>
    )
  }
}

export default ClickCl