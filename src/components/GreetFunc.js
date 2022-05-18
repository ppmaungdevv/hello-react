import React from 'react';

// function Greet() {
//     return <h1>Hello PPM</h1>
// }

const GreetFunc = props => { // can destructure from func param ({name}) => {}
    const { name } = props
    console.log(props)
    return (
        <div>
            <h1>Hello {name}!</h1>
            {props.children}
        </div>
    ) 
}

export default GreetFunc

// props are immutable