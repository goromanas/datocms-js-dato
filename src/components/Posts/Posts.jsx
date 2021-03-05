import React from 'react'
import { usePosts } from '../../graphql/usePosts'

const Posts = () => {
  const { posts } = usePosts()
  console.log(posts)
  return (
    <div>
      {posts.edges.map((post) => (
        <div>{post.node.title}</div>
      ))}
    </div>
  )
}

export default Posts
