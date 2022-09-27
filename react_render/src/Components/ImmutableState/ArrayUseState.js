import React, { useState } from 'react'

const initialState=['Monica', 'Geller']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initialState)

    const handleClick = () =>{
        // persons.push('Rachel')
        // persons.push('Green')
        // setPersons(persons)

     const newPersons=[...persons]
        newPersons.push('Rachel')
        newPersons.push('Green')
        setPersons(newPersons)
    }
    console.log('ArrayUseState rendering')

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        persons.map(person =>(
            <div key={person}>{person}</div>
        ))
      }
    </div>
  )
}


