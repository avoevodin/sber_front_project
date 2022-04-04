import { API_PORT } from '../../../settings'
import { useCommentsContext } from '../../../contexts/CommentsContext'
import CommentItem from '../CommentItem/CommentItem'
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm'

function CommentsList({ postId }) {
  const { comments, createComment } = useCommentsContext()
  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const res = await fetch(`http://localhost:${API_PORT}/api/v1/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        postId,
      }),
    })

    if (res.status === 201) {
      const commentFromServer = await res.json()
      createComment({ commentFromServer })
      e.target.reset()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
  }

  return (
    <>
      {comments && comments.length ? (
        <ul className="list-group list-group-flush">
          {comments
            .filter((comment) => comment.postId === postId)
            .map((comment) => (
              <CommentItem
                key={comment.id}
                commentData={comment}
                postId={postId}
              />
            ))}
        </ul>
      ) : (
        <p className="text-center text-muted">No comments yet...</p>
      )}
      <CreateCommentForm onSubmit={submitHandler} />
    </>
  )
}

export default CommentsList
