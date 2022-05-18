import React, { Component } from 'react';

class GreetCl extends Component {
    render() {
        const {name} = this.props
        return (
            <div>
                <h1>Hi {name} !</h1>
                {this.props.children}
            </div>
        )
    }
}

export default GreetCl