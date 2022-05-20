import React from 'react'
import '../style/myStyle.css'

function StyleSheet(props) {
    const className = props.primary ? 'primary' : ''
  return (
    <div>
        <h2 className={`${className} bg-pale round-border`}>Style Sheet</h2>
    </div>
  )
}

export default StyleSheet