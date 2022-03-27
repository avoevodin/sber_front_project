import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function handleCollapseField(post, reverse = false) {
  return {
    ...post,
    commentsExpanded: (reverse) ? !post.commentsExpanded : false,
  }
}

const usePosts = (loadPosts) => {
  const [posts, setPosts] = useState([])
  const [searchParams] = useSearchParams()

  // TODO is it optimal?
  const getSearchParams = () => {
    const parsedQuery = JSON.parse(searchParams.get('filter'))
    if (parsedQuery && parsedQuery.title) {
      return parsedQuery.title
    }
    return null
  }

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

  const updatePosts = (newPostsList) => setPosts(newPostsList)

  useEffect(() => {
    if (loadPosts && !getSearchParams()) {
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
    updatePosts,
    getSearchParams,
  }
}

export default usePosts
