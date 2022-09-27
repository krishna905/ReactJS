import React from 'react'

// export const ChildFive = ({name, person}) => {
export const ChildFive = ({name}) => {
    console.log('ChildFive rendering')
  return (
    <div>
      {/* Helo {name} {person.fname} {person.lname} */}
      Helo {name} 
    </div>
  )
}

export const  MemoizedChildSix = React.memo(ChildFive)
