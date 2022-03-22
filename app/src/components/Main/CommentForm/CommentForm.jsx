import { useRef, useEffect } from 'react'

function CommentForm({ onSubmit, text = '' }) {
  const formRef = useRef(null)
  useEffect(() => {
    if (text) {
      formRef.current.elements.text.value = text
    }
  }, [])

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="d-flex flex-column align-items-center"
    >
      <div className="mb-3">
        <textarea
          name="text"
          type="text"
          className="form-control"
          cols="50"
          placeholder="text your comment"
        />
      </div>
      <button type="submit" className="btn btn-success col-6">
        Add comment
      </button>
    </form>
  )
}

export default CommentForm
