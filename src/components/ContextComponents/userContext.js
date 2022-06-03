import React from 'react';

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {
    UserProvider,
    UserConsumer
}

// context is useful for deeply nested components
// but it's not like VueX
// every context come with Consumer and Provider React Components
// Only the descendents of Provider can Consume the Context
// e.g 
// if you use Provider in App, all components can consume the context 
// if you use Provider in ComponentC, only E ann F can consume the context 