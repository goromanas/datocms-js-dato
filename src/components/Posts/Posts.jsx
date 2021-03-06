import React from 'react'
import { usePosts } from '../../graphql/usePosts'
import PostCard from './PostCard/PostCard'
import { PostsWrapper, Title } from './Posts.style'

const Posts = () => {
  const { posts } = usePosts()

  return (
    <>
      <Title>Straipsniai</Title>
      <PostsWrapper>
        {posts.edges.map((post) => (
          <PostCard key={post.node.originalId} post={post.node} />
        ))}
      </PostsWrapper>
    </>
  )
}

export default Posts
