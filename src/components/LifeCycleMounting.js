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

    static getDerivedStateFromProps(props, state) { // rarely used
        console.log('2. derived FP')
        return null
    }

    componentDidMount() { // best place make API or Http request
        console.log('4. did mount')
    }

  render() {
    return (
        <div>
          3. LifeCycleMounting
            <LifeCycleMountingChild/>
        </div>
    )
  }
}

export default LifeCycleMounting