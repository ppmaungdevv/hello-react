import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         is_logged_in: true
      }
    }

    login() {
        this.setState((prevState, props) => ({
            is_logged_in: !prevState.is_logged_in
        }))
    }
  render() {
    //   if (this.state.is_logged_in) {
    //     return (
    //         <div>
    //             <h2>Welcome Pyae</h2>
    //         </div>
    //     )
    //   } else {
    //     return (
    //         <div>
    //             <h2>Welcome Guest</h2>
    //         </div>
    //       )
    //   }
    // ---------- element varible approach -------
    // let msg
    // if (this.state.is_logged_in) {
    //     msg = <h2>Welcome Pyae</h2>
    // } else {
    //     msg = <h2>Welcome Guest</h2>
    // }
    // return <div> {msg} </div>
    // -------------- ternary approach --------------
    return (
          <div>
                {
                    this.state.is_logged_in ?
                    <h2>Hi Pyae!</h2> :
                    <h2>Welcome Guest...</h2>
                }
    
              <button onClick={() => this.login()}>login</button>
          </div>
    )
    // ------------ short circuit operator approach -----------
    // return this.state.is_logged_in && <h2>Welcome Pyae</h2> // if left side correct show right side
  }
}

export default UserGreeting