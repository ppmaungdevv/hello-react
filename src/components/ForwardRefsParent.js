import React, { Component } from 'react'
import ForwardRefsComponent from './ForwarRefsComponent'

class ForwardRefsParent extends Component {
    constructor(props) {
      super(props)
        this.input_ref = React.createRef()
    }
    clicked = () => {
        this.input_ref.current.focus()
    }
  render() {
    return (
      <div>
          <ForwardRefsComponent ref={this.input_ref} />
          <button onClick={this.clicked}>Click</button>
      </div>
    )
  }
}

export default ForwardRefsParent