import React from 'react'
import { usePosts } from '../../graphql/usePosts'
import PostCard from './PostCard/PostCard'
import { PostsWrapper, Title, PostsContainer } from './Posts.style'

const Posts = () => {
  const { posts } = usePosts()

  return (
    <PostsContainer>
      <Title>Straipsniai</Title>
      <PostsWrapper>
        {posts.edges.map((post) => (
          <PostCard key={post.node.originalId} post={post.node} />
        ))}
      </PostsWrapper>
    </PostsContainer>
  )
}

export default Posts
