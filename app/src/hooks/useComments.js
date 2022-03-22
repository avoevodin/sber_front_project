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

  const deleteCommentsByPost = () => setComments((prev) => {
    prev.filter((comment) => comment.postId !== postId)
  })

  const deleteComment = (id) => setComments((prev) => prev.filter((comment) => comment.id !== id))

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
    deleteCommentsByPost,
    deleteComment,
  }
}

export default useComments
