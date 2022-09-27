import React from "react";

const Hello = () =>{
    //with JSX

    // return (
    //     <div className="dummy">
    //         <h1>Helko krishna from hell0.js with jsx</h1>
    //     </div>
    // )

    //without JSX
    
    return React.createElement('div',
     {id:'hello', className:"dummy"},
     React.createElement('h1', null, 'Helo krishna from hello.js without jsx'))
}
export default Hello