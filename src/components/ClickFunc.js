import React from 'react'

const ClickFunc = () => {
    const clicked = () => {
        console.log('click function')
    }
  return (
    <div>
        <button onClick={clicked}>Click Function</button>
    </div>
  )
}

export default ClickFunc

// don't use () when calling from handler