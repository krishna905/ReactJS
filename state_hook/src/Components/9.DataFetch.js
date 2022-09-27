import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetch() {
    //fetching all data from that url
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setAlbums(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const heading = {
        width: '72px',
        height: '50px'
    }

    //fetch data of particular id we enter in the input box
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(res => {
    //             console.log(res)
    //             setPost(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [id])



    //fetch data of particular id we enter in input field after button click
    const [idFromClick, setIdFromClick] = useState(1)

    const handleClick = () => {
        setIdFromClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromClick])



    return (
        <div>
            <ul>
                {
                    albums.map(album => (
                        <li key={album.id}>{album.title} <img style={heading} src={album.image} /></li>
                    ))}
            </ul>


            {/* for fetching data of partiuclar id which we enter in the input box */}
            {/* <input type='text' value={id} onChange={e => setId(e.target.value)}/>
           
            <div>{post.title}</div> */}



            {/* for fetching data of partiuclar id which we enter in the input box on Button CLick */}
            {/* <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>

            <div>{post.title}</div> */}

        </div>
    )
}

export default DataFetch


/*

 <table>
                <tr>
                    <th>Album id</th>
                    <th>title</th>
                </tr>
                <>
                    {
                        albums.map(album => (
                            <tr key={album.id}>
                                <td>{album.id}</td>
                                <td>{album.title}</td>
                            </tr>
                        ))}
                </>
            </table>
            */

/*  <table >
      <tr>
          <th>User Id</th>
          <th> Id</th>
          <th>title</th>
      </tr>
      <tr>
          <td>{post.userId}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
      </tr>
  </table> */
