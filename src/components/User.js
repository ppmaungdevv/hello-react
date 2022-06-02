import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
          {this.props.name(false)}
          <br />
          {this.props.render(true)}
      </div>
    )
  }
}

export default User

// render props means sharing codes between component using a prop whose value is function