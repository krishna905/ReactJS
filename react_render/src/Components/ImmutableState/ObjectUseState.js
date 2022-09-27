import React, { useState } from 'react'

const initialState={
    fname:'Krishna',
    lname:'vamsi'
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState)

    const changeName= () => {
        // person.fname='Chandhler'
        // person.lname="Bing"
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname='Chandhler'
        newPerson.lname='bing'
        setPerson(newPerson)
    }

   console.log('useState rendering')

  return (
    <div>
        <button onClick={changeName}>{person.fname}{person.lname}</button>
      
    </div>
  )
}


