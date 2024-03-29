import React, { Component } from 'react'

class LifeCycleMountingChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'PPM'
      }
      console.log('1.1 constructor')
    }

    static getDerivedStateFromProps(props, state) { // rarely used
        console.log('2.2 derived FP')
        return null
    }

    componentDidMount() { // best place make API or Http request
        console.log('4.4 did mount')
    }

    shouldComponentUpdate() {
      console.log('child should comp update') // update lifcycle
      return true
    }

    getSnapshotBeforeUpdate() {
      console.log('child get snap before update')
      return null
    }

    componentDidUpdate() {
      console.log('child comp did update')
    }

  render() {
    return (
      <div>3.3 LifeCycleMounting</div>
    )
  }
}

export default LifeCycleMountingChild