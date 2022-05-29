import React from 'react'

function MemoComp({name}) {
    console.log('Memo Render')
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)

// higher order component and similar to Pure Class Component