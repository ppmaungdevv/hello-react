import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentForRegAndPure extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'ppm'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'ppm'
            })
        }, 2000);
    }

  render() {
      console.log('parent render')
    return (
      <div>
          ParentForRegAndPure
          <RegComp name={this.state.name} />
          <PureComp name={this.state.name} />
          <MemoComp name={this.state.name}/>
        </div>
    )
  }
}

export default ParentForRegAndPure

// if parent component, is pure component or, does not re-render the child component won't re-render