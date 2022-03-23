import { useEffect, useState } from 'react'

function handleCollapseField(post, reverse = false) {
  return {
    ...post,
    commentsExpanded: (reverse) ? !post.commentsExpanded : false,
  }
}

const usePosts = (loadPosts) => {
  const [posts, setPosts] = useState([])

  const createPost = (inputs) => {
    const newPost = handleCollapseField(inputs)
    setPosts((prev) => [...prev, newPost])
  }

  const deletePost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.status !== 200) return false

    setPosts((prev) => prev.filter((post) => post.id !== id))
    return true
  }

  useEffect(() => {
    if (loadPosts) {
      fetch('http://localhost:3000/api/v1/posts/')
        .then((response) => response.json())
        .then((dataFromServer) => setPosts(dataFromServer.map(
          (post) => (handleCollapseField(post)),
        )))
    }
  }, [])

  return {
    posts,
    createPost,
    deletePost,
  }
}

export default usePosts
