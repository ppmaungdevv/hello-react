import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
      console.log('pure render')
    return (
      <div>PureComp {this.props.name} </div>
    )
  }
}

export default PureComp
// pure component implement shouldComponentUpdate() with shallow props and state comparison
// if SC of prev_state with current_state (or) prev_props with current_props, the component will re-render

// when using PC never mutate the state always return new Obj that reflects the new state

// shallow comparison (SC)
// SC with primitive data types, like string, integer and bool, of a & b return TRUE if a & b has the same value and are of same data types
// SC with complex types, like Objects, array, of a & b return TRUE if a & b reference the same object
// eg.
// let a = [1, 2, 3]
// let b = [1, 2, 3]
// let c = a

// let SC_a_b = ( a === b ) // false
// let SC_a_c = ( a === c ) // true