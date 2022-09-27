import React from 'react'

//traditonal way 
// function Greet(){
//     return <h1>Helo krishna</h1>
// }

//export const Greet=() => <h1>Helo krishna</h1>



//function expression...arrow function
/*const Greet = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Helo {props.name} a.k.a {props.role} from Greet</h1>
      {props.children}
    </div>
  )
}*/

//destruction in body
const Greet = props =>{
  const {name, role} = props
  return (
    <div>
      <h1>Hello {name} a.k.a {role} from Greet i.e., Destructuring</h1>
    </div>
  )
}


//destruction in paramter
/*
const Greet =({name, role}) => {
  return (
    <div>
      <h1>Hello {name} a.k.a {role} from Greet i.e., Destructuring</h1>
    </div>
  )
}
*/
export default Greet