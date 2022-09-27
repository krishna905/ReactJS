import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import './fetchh.css'

function Fetchhhh() {
    const [posts, setPosts] = useState([]);
    const [cli, setCli] = useState(false);



    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err + "THIS ERROR OCCURED");
            })
    }, [cli])


    return (
        <div>
            <button onClick={() => setCli(true)} >Display data</button>

            <> {cli ? <table >
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                <>{
                    posts.map(post => {
                        return (
                            <>
                                <tr>
                                    <td>{post.userId}</td>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            </>
                        )
                    })
                }
                </>

            </table> : null
            }

            </>

        </div>
    )
}
export default Fetchhhh
