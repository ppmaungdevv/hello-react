import React, { Component } from 'react';

class GreetCl extends Component {
    render() {
        return (
            <div>
                <h1>Hi {this.props.name} !</h1>
                {this.props.children}
            </div>
        )
    }
}

export default GreetCl