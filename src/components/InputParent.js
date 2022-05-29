import React, { Component } from 'react'
import Input from './Input'

class InputParent extends Component {
    constructor(props) {
      super(props)
    
      this.comp_ref = React.createRef()
    }
    btnClicked = () => {
        this.comp_ref.current.focusInput()
    }
  render() {
    return (
      <div>
          <Input ref={this.comp_ref} />
          <button onClick={this.btnClicked}>Focus Child Input</button>
      </div>
    )
  }
}

export default InputParent
// it's possible to access child ref from parent, but component has to be class component, by attaching class component to a ref