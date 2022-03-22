import { useEffect, useState } from 'react'

const useComments = ({ postId }) => {
  const [comments, setComments] = useState([])

  const createComment = async (inputs) => {
    const newComment = {
      id: inputs.id,
      postId: inputs.postId,
      text: inputs.text,
      date: inputs.date,
    }
    setComments((prev) => [...prev, newComment])
  }

  const deleteComment = async (id) => {
    const res = await fetch(`http://localhost:3000/api/v1/comments/${id}`, {
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
    fetch(`http://localhost:3000/api/v1/comments/post/${postId}`)
      .then((response) => response.json())
      .then((dataFromServer) => {
        setComments(dataFromServer)
      })
  }, [])

  return {
    comments,
    createComment,
    deleteComment,
  }
}

export default useComments
