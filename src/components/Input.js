import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props)
        
      this.input_ref = React.createRef()
    }

    focusInput = () => {
        this.input_ref.current.focus()
    }

  render() {
    return (
      <div>
          <input type='text' ref={this.input_ref} />
      </div>
    )
  }
}

export default Input