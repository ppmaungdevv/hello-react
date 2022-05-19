import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent_name: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(child) {
        alert(`Hello ${this.state.parent_name} from ${child}`)
    }
  render() {
    return (
      <div>
        ParentComponent
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent