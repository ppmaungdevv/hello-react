import React from 'react'
import Titans from './Titans'

function NameList() {
    const justice_league = ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Hawkgirl', 'Green Lantern']
    const teen_titans = [
        {
            id: 1,
            name: 'Robin',
            secret_id: 'Dick Grayson'
        },
        {
            id: 2,
            name: 'Star Fire',
            secret_id: 'Koriand\'r'
        },
        {
            id: 3,
            name: 'Cyborg',
            secret_id: 'Victor Stone'
        },
        {
            id: 4,
            name: 'Raven',
            secret_id: 'Raven'
        },
        {
            id: 5,
            name: 'Beast Boy',
            secret_id: 'Garfield Mark "Gar" Logan'
        },

    ]
    const jl_member = justice_league.map((member, index) => <li key={index}>{member}</li>)
    // using index as key there might be some issue when rendering
    // const titans = teen_titans.map(titan => <li>{titan.secret_id} is {titan.name}</li>)
    const titans = teen_titans.map(titan => <Titans key={titan.id} teen_titans={titan} />) 
    // key must be unique, can't be used as a prop
  return (
    <div>
        Justice League
        <ul>
            {/* {
                justice_league.map(member => <li>{member}</li>)
            } */}
            {
                jl_member
            }
        </ul>
        <h4>Titans</h4>
        <ul>
            {
                // titans
            }
        </ul>
        {/* <Titans teen_titans={teen_titans} /> */}
    </div>
  )
}

export default NameList