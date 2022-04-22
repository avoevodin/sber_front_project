import { useCommentsContext } from '../../../contexts/CommentsContext'
import CommentItem from '../CommentItem/CommentItem'
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm'
import axiosInstance from '../../../config/axios'
import { authHeader } from '../../../config/auth'

const CommentsList = ({ postId }) => {
  const { comments, createComment } = useCommentsContext()
  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const res = await axiosInstance.post(
      'comments/',
      {
        ...formData,
        postId,
      },
      {
        headers: {
          ...authHeader(),
        },
      },
    )

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
