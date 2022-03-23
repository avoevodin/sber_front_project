import { useState } from 'react'
import CommentsList from '../CommentsList/CommentsList'

function CommentsToggleBar({
  commentsExpanded = false, index = -1, postId = 0,
}) {
  const [commentsToggler, setCommentsToggler] = useState(commentsExpanded)

  const collapseCommentsHandler = () => {
    setCommentsToggler(!commentsToggler)
  }
  return (
    <div className="d-flex flex-column align-items-center container my-2">
      <p>
        <a
          className="btn btn-link text-muted"
          data-bs-toggle="collapse"
          href={`#multiCollapseComments${index}`}
          role="button"
          aria-expanded={commentsToggler}
          aria-controls="multiCollapseComments"
          onClick={collapseCommentsHandler}
        >
          {commentsToggler ? 'Hide comments' : 'Show comments'}
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
