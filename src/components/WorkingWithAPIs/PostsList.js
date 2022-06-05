import React, { Component } from 'react'
import axios from 'axios'

class PostsList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts: [],
        err: ''
      }
    }
    fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts1')
            .then(({data}) => {
                this.setState({posts: data})
            })
            .catch(err => {
                console.log(err)
                this.setState({err: 'Error'})
            })
    }
    componentDidMount() {
        this.fetchData()
    }
  render() {
      const { posts, err } = this.state
    return (
      <div>
        PostsList
        {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) :
            'No Post'
        }
        {
            err && <div>{err}</div>
        }
      </div>
    )
  }
}

export default PostsList