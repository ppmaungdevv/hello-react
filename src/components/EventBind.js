import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        msg: 'Hi'
      }
      this.clicked = this.clicked.bind(this)
    }

    clicked() {
        this.setState({
            msg: 'Bye!'
        })
    }

    clickedArrow = () => {
        this.setState({
            msg: 'Arrow'
        })
    }    

  render() {
    return (
      <div>
          <div>{this.state.msg} </div>
          {/* <button onClick={this.clicked.bind(this)}>Click</button> */}
          {/* <button onClick={() => this.clicked()}>Click</button> */}
          <button onClick={this.clicked}>Click</button> {/* would cause error if does not bind in constructor or does not use arrow func like the one below */}
          <button onClick={this.clickedArrow}>Click with Arrow</button>
      </div>
    )
  }
}

export default EventBind