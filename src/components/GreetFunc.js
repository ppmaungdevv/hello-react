import React from 'react';

// function Greet() {
//     return <h1>Hello PPM</h1>
// }

const GreetFunc = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            {props.children}
        </div>
    ) 
}

export default GreetFunc

// props are immutable