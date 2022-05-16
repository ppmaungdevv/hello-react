import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Newbie !'
        }
    }
    changeMsg(){
        this.setState({
            message: 'See Ya!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMsg()}>Logout</button>
            </div>
        )
    }
}

export default Message