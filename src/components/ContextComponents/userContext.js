import React from 'react';

// const UserContext = React.createContext()
const UserContext = React.createContext('Default Context')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {
    UserProvider,
    UserConsumer
}

export default UserContext // for context type property

// context is useful for deeply nested components
// but it's not like VueX
// every context come with Consumer and Provider React Components
// Only the descendents of Provider can Consume the Context
// e.g 
// if you use Provider in App, all components can consume the context 
// if you use Provider in ComponentC, only E ann F can consume the context 

// default value can be set in context, set while creating the context React.createContext('default')
// default value appear when there is no matching provider (<UserProvider value='Pyae' >) in component tree

// context can also be consume by context type property
// draw backs of context type usage are
// - It's only works with classes
// - can only use with single context 