import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user_name: '',
         comment: '',
         topic: '',
      }
    }
    changeUsername = (event) => {
        this.setState({
            user_name: event.target.value
        })
    }
    changeComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    changeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(this.state.user_name + this.state.comment + this.state.topic)
        event.preventDefault()
    }
  render() {
      const { user_name, comment, topic } = this.state
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User name</label>
                <input value={user_name} onChange={this.changeUsername} type="text" />
            </div>
            <br/>
            <div>
                <label>Comment</label>
                <textarea value={comment} onChange={this.changeComment} ></textarea>
            </div>
            <br/>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.changeTopic} >
                    <option>Vue</option>
                    <option>React</option>
                    <option>Angular</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form