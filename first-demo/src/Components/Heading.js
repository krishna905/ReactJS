import React from 'react'
import { useState } from 'react'

export default function Display() {

    const [id, setId] = useState(false)

    return (
        <div>
            <button id="click" onClick={() => setId(true)}>display</button>
            <>
                {
                    id ? <div>
                        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
                    </div> : null
                }
            </>

        </div>
    )
}
