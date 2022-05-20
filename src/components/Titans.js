import React from 'react'

function Titans(props) {
    // const titans = props.teen_titans.map(titan => <li>{titan.secret_id} is {titan.name}</li>)
    const {teen_titans} = props
  return (
    // <div>
    //     {titans}
    // </div>
    <>
        <li>{teen_titans.secret_id} is {teen_titans.name}</li>
    </>
  )
}

export default Titans