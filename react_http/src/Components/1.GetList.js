import React, { Component } from 'react'
import axios from 'axios'

 class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errMessage : ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({
                posts : response.data
            })
        })
        .catch(err => {
            console.log(err)
            this.setState({
                errMessage : 'Error retreiving data'
            })
        })
    }
    
  render() {
    const {posts, errMessage} = this.state
    return (
      <div>
        List of posts
        {
            posts.length ?
            posts.map(post => <div key = {post.id}>{post.title} </div>) : null
        }
        {
            errMessage ? <div>{errMessage}</div> : null
        }
      </div>
    )
  }
}

export default GetList
