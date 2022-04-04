import { API_PORT } from '../../../settings'
import { useCommentsContext } from '../../../contexts/CommentsContext'
import CommentForm from '../CommentForm/CommentForm'

function CreateCommentForm() {
  const { createComment, postId } = useCommentsContext()

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const res = await fetch(`http://localhost:${API_PORT}/api/v1/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, postId }),
    })

    if (res.status === 201) {
      const commentFromServer = await res.json()
      createComment(commentFromServer)
      e.target.reset()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
  }

  return (
    <CommentForm onSubmit={submitHandler} />
  )
}

export default CreateCommentForm
