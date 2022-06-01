import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        // mostly use to log the errors
        console.log(error)
        console.log(info)
    }

  render() {
      if (this.state.hasError) {
          return (
            <div>
                Something wrong
            </div>
          )
      } else return this.props.children
  }
}

export default ErrorBoundary

// in devlopment react auto log the error to console

// Error boundaries do not catch errors for:
// Event handlers (learn more)
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)