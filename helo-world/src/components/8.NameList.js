import React from 'react'
import Person from './8.Person'

function NameList() {
    //we passing index as key attribute to make it seem unique
    const chars = ['Monica', 'Rachel', 'Phoebe', 'Rachel']
    const charList = chars.map((role, idx) => <h3  key ={idx}> {idx} {role}</h3>)



    const persons = [
        {
            id: 1,
            name: 'Tokyo',
            age: 36,
            skill: 'robbery'
        },
        {
            id: 2,
            name: 'Moscow',
            age: 39,
            skill: 'digging'
        },
        {
            id: 3,
            name: 'Rio',
            age: 21,
            skill: 'hacker'
        },
        {
            id: 4,
            name: 'Lisban',
            age: 40,
            skill: 'Police'
        }
    ]
    const personList = persons.map((person) => (
        <Person key={person.id} person={person}></Person>
        // <h3>Iam {person.name}, {person.age} yrs old with {person.skill} skillset of an id: {person.id} </h3>
    ))

    /*  const names = ['Starlight', 'Homelander', 'Maeve']
      const nameList = names.map((name) => <h3>{name}</h3>)*/
    return (

        <div>{charList}</div>
        //<div>{personList}</div>

        // <div>{nameList}</div>


        // <div>
        //   {
        //     names.map((name) => <h3>{name}</h3>)
        //   }
        // </div>
    )
}

export default NameList


//here list component is responsible for persons list...
//But in Person.js.. Persone component is rsponsible for rendering the perosn html

//Each child should have a unique key prop..Value to that prop is unique among the elements..id can be unique
//Key prop is needed for parent componeent to run the code efficiently
//Key helps react to know which elemnts are added, changed, removed and placed the cruicial role in code
//key prop cannot be accexsible in the  child components   In person.js, if u try {key} in html, it throws error
