//https://jsonplaceholder.typicode.com/users
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Fetching() {
    const [text, setText] = useState(true)
    const [posts, setPosts] = useState([])
    const [email, setEmail] = useState(false)
    const [phone, setPhone] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)

                setPosts(res.data)
                posts.sort((a, b) => {
                    return a.name > b.name
                })
                console.log(posts.length)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleClick = () => {
        setEmail(true)

    }

    const displayHandler = (e) => {
        setCity(e.post.city)
        setZipcode(e.post.zipcode)
        setPhone(e.post.phone)
        { return <div key={e.post.id}>{phone}{zipcode}{city}</div> }

    }


    // const displayList = (posts) => {
    //     text ?
    //         posts.sort().map(post => {
    //             return <li key={post.id}> {post.name} --- {email ? post.email : null}</li>
    //         }) : " not yet clicked"
    // }


    return (
        <div>
            {/* {
                <ul>
                    {
                        text ? posts.map(post => {
                            return <li key={post.id}>{post.name}</li>
                        }) : null
                    }
                </ul>
            } */}

            <div>{
                <ul>
                    {text ?
                        posts.map(post => {
                            return <li key={post.id} onClick={e => displayHandler(e)}> {post.name} --- {email ? post.email : null}</li>
                        }) : " not yet clicked"

                    }
                </ul>
            }</div>
            {/* <div>{displayList}</div> */}


            <button onClick={handleClick}>Display</button>



        </div>
    )
}
export default Fetching
