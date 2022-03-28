import { useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMainContext } from '../../../../contexts/MainContext'

const usePostDetail = (postId, closeModal) => {
  const { deletePost } = useMainContext()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(false)
  const currentController = useRef(new AbortController()).current
  const navigate = useNavigate()

  useLayoutEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      signal: currentController.signal,
    })
      .then((response) => response.json())
      .then((dataFromServer) => setPost(dataFromServer))
      .finally(() => setLoading(false))

    return () => {
      currentController.abort()
    }
  }, [])

  const deleteHandler = async () => {
    if (await deletePost(postId)) navigate(-1)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())

    const res = await fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.status === 200) {
      const updatedPost = await res.json()

      setPost(updatedPost)
      e.target.reset()
      closeModal()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
  }
  return {
    post,
    loading,
    submitHandler,
    deleteHandler,
  }
}

export default usePostDetail
