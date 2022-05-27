import React, { Component } from 'react'
import LifeCycleMountingChild from './LifeCycleMountingChild'

class LifeCycleMounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'PPM'
      }
      console.log('1. constructor')
    }

    static getDerivedStateFromProps(props, state) { // rarely used // both mount and updated life cycle
        console.log('2. derived FP')
        return null
    }

    componentDidMount() { // best place make API or Http request
        console.log('4. did mount')
    }

    shouldComponentUpdate() {
      console.log('should comp update') // update lifcycle
      return true
    }

    getSnapshotBeforeUpdate() {
      console.log('get snap before update')
      return null
    }

    componentDidUpdate() {
      console.log('comp did update')
    }

    changeName = () => {
      this.setState({
        name: 'PPM2'
      })
    }

  render() { // mount and update
    return (
        <div>
          <button onClick={this.changeName}>Click</button><br/>
          3. LifeCycleMounting
            <LifeCycleMountingChild/>
        </div>
    )
  }
}

export default LifeCycleMounting

// to trigger update life cycle, need to change either props or state
// there are two more in lifecycle => unmount and error handling 
// don't setState in unmount