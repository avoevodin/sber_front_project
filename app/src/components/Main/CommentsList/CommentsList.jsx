import { useState } from 'react'
import { useCommentsContext } from '../../../contexts/CommentsContext'
import CommentItem from './CommentItem/CommentItem'

function CommentsList({ postId }) {
  const { comments, createComment } = useCommentsContext()
  const [input, setInput] = useState('')

  const changeHandler = (e) => setInput(e.target.value)

  const submitHandler = (e) => {
    e.preventDefault()

    const inputTrim = input.trim()
    if (inputTrim) {
      createComment({ postId, text: inputTrim })
      setInput('')
    }
  }

  return (
    <>
      {comments.length ? (
        <ul className="list-group list-group-flush">
          {comments
            .filter((comment) => comment.postId === postId)
            .map((comment) => (
              <CommentItem
                key={comment.id}
                text={comment.text}
                date={comment.date}
                id={comment.id}
              />
            ))}
        </ul>
      ) : (
        <p className="text-center text-muted">No comments yet...</p>
      )}
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center"
      >
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            cols="50"
            value={input}
            onChange={changeHandler}
            placeholder="text your comment"
          />
        </div>
        <button type="submit" className="btn btn-success col-6">
          Add comment
        </button>
      </form>
    </>
  )
}

export default CommentsList