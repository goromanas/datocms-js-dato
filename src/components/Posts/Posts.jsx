import React from 'react'
import { usePosts } from '../../graphql/usePosts'

const Posts = () => {
  const { posts } = usePosts()
  return (
    <div>
      {posts.edges.map((post) => (
        <div key={post.slug}>{post.node.title}</div>
      ))}
    </div>
  )
}

export default Posts
