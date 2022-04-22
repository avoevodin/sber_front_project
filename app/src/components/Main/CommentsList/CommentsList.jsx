import { useCommentsContext } from '../../../contexts/CommentsContext'
import CommentItem from '../CommentItem/CommentItem'
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm'

const CommentsList = ({ postId }) => {
  const { comments } = useCommentsContext()

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
      <CreateCommentForm />
    </>
  )
}

export default CommentsList
