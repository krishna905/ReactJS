import React from 'react'

export const ChildFour = ({ name }) => {
    const date = new Date()
    console.log('Child four render')
    return (
        <div>
            Helo {name}. It is currently  {date.getHours()} : {date.getMinutes()} :{' '} {date.getSeconds()}
        </div>
    )
}

export const MemoizedChildFour = React.memo(ChildFour)
