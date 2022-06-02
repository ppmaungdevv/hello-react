// file name is HOC covention
import React from 'react';

// const UpdatedComponent = (OriginalComponent) => {
const withCounter = (WrappedComponent, inc_val) => {
    
    // class NewComponent extends React.Component {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               counter: 0
            }
          }
        increaseCount = () => {
            this.setState(prevState => {
                return { counter: prevState.counter + inc_val }
            })
        }
        render() {
            return <WrappedComponent name="HOCComp" counter={this.state.counter} increaseCount={this.increaseCount} {...this.props} />
        }
    }

    // return NewComponent
    return WithCounter
}

export default withCounter

// a func that accpet OGComponent and return EnhancedComp

// by using name convention HOC with common function name is easier to read

// must need to passed down the props using spread operator, {...this.props} 