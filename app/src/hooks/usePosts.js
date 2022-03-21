import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { LSPostsKey, options } from '../settings'

const usePosts = () => {
  const [posts, setPosts] = useState([])

  const createPost = (inputs) => {
    const newPost = {
      id: uuidv4(),
      title: inputs.title,
      text: inputs.text,
      hashtag: inputs.hashtag,
      image: inputs.image,
      date: new Date().toLocaleDateString('ru-RU', options),
      commentsExpanded: false,
    }
    setPosts((prev) => [...prev, newPost])
  }

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  const collapseComments = (id) => {
    setPosts((prev) => prev.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          commentsExpanded: !post.commentsExpanded,
        }
      }
      return post
    }))
  }

  useEffect(() => {
    const dataFromLS = JSON.parse(localStorage.getItem(LSPostsKey))
    if (dataFromLS) {
      setPosts(dataFromLS.map((post) => ({
        ...post,
        commentsExpanded: false,
      })))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LSPostsKey, JSON.stringify(posts))
  }, [posts])

  return {
    posts,
    createPost,
    deletePost,
    collapseComments,
  }
}

export default usePosts
