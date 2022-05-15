import React from 'react';

const HelloJSX = () => {
    return (
        <div className="test"> {/* class is reserve word in JS */}
            <h1>Hello JSX!</h1>
        </div>
    )
    // ------ without JSX --------
    // return React.createElement(
    //         'div',
    //         {
    //             id: 'hello',
    //             className: 'test' 
    //         }, 
    //         React.createElement('h1', null, 'Hello without JSX'))
}

export default HelloJSX;

// ----------- some JSX differences for HTML --------------
// Class -> className
// for -> htmlFor
// camelCase naming convention
// - onclick -> onClick
// - tabindex -> tabIndex
// React Fire - https://github.com/facebook/react/issues/13525

