import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
        this.input_ref = React.createRef()

        this.cb_ref = null // callback ref
        this.setCbRef = element => {
            this.cb_ref = element
        }

    }
    componentDidMount() {
        if (this.cb_ref) { // assgin it as null so need to check before clg
            this.cb_ref.focus()
        }
        // this.input_ref.current.focus()
        // console.log(this.input_ref)
    }
    btnClicked = () => {
        alert('Hello ' + this.input_ref.current.value)
    }
  render() {
    return (
        <div>
            RefsDemo <br/>
            <input type='text' ref={this.input_ref} />
            <input type='text' ref={this.setCbRef}  placeholder='callback ref' /> {/* input with callback ref */}
            <button onClick={this.btnClicked}>Click</button>
        </div>
    )
  }
}

export default RefsDemo