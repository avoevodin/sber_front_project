import { useEffect, useRef, useState } from 'react'
import { API_PORT } from '../settings'

const useComments = ({ postId }) => {
  const [comments, setComments] = useState([])
  const currentController = useRef(new AbortController()).current

  const createComment = (inputs) => {
    const newComment = {
      id: inputs.id,
      postId: inputs.postId,
      text: inputs.text,
      date: inputs.date,
    }
    setComments((prev) => [...prev, newComment])
  }

  const deleteComment = async (id) => {
    const res = await fetch(`http://localhost:${API_PORT}/api/v1/comments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.status !== 200) return false

    const commentsFromServer = await res.json()
    setComments(commentsFromServer)
    return true
  }

  useEffect(() => {
    fetch(`http://localhost:${API_PORT}/api/v1/comments/post/${postId}`, {
      signal: currentController.signal,
    })
      .then((response) => response.json())
      .then((dataFromServer) => {
        setComments(dataFromServer)
      })

    return () => {
      currentController.abort()
    }
  }, [])

  return {
    comments,
    createComment,
    deleteComment,
  }
}

export default useComments
