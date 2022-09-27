import React from 'react'

function Person({person}) {
  return (
    <div>
       <h3>
        Iam {person.name}, {person.age} yrs old with {person.skill} skillset 
        </h3>
    </div>
  )
}

export default Person
