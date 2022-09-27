import React, { useState } from 'react'

function LetterRep() {

    const [text, setText] = useState('');
    const [list, setList] = useState({})

    const changeHandler = (e) => {
        const val = e.target.value


        var array = Object.assign([], val);
        const map = [];
        array.forEach(item => {
            if (map[item]) {
                map[item]++;
            } else {
                map[item] = 1;
            }
        });
        // console.log(typeof map)
        // console.log("map size is " + Object.keys(map).length)
        // console.log(val)
        // console.log(array)
        console.log(map)
        setList(map)
        console.log(list)
    }

    return (
        <div>
            <input onChange={(e) => changeHandler(e)} placeholder='Enter the Input' />
            {
                Object.keys(list).map(key => {
                    return (
                        <li key={key}> {key} - {list[key]}</li>
                    )
                }
                )
            }
        </div>
    )
}


export default LetterRep
