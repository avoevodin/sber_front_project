import { useEffect, useRef, useState } from 'react'
import axiosInstance from '../config/axios'

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
    const res = await axiosInstance.delete(`comments/${id}`)

    if (res.status !== 200) return false

    const commentsFromServer = res.data
    setComments(commentsFromServer)
    return true
  }

  useEffect(() => {
    axiosInstance.get(`comments/post/${postId}`, {
      signal: currentController.signal,
    })
      .then((response) => {
        setComments(response.data)
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
