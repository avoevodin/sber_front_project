import { useMainContext } from '../../../contexts/MainContext'
import CommentsList from '../CommentsList/CommentsList'

function CommentsToggleBar({
  commentsExpanded, index = 0, postId = 0,
}) {
  const { collapseComments } = useMainContext()
  const collapseCommentsHandler = () => collapseComments(postId)

  return (
    <div className="d-flex flex-column align-items-center container my-2">
      <p>
        <a
          className="btn btn-link text-muted"
          data-bs-toggle="collapse"
          href={`#multiCollapseComments${index}`}
          role="button"
          aria-expanded={commentsExpanded}
          aria-controls="multiCollapseComments"
          onClick={collapseCommentsHandler}
        >
          {commentsExpanded ? 'Hide comments' : 'Show comments'}
        </a>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id={`multiCollapseComments${index}`}>
            <div>
              <CommentsList key={postId} postId={postId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsToggleBar
