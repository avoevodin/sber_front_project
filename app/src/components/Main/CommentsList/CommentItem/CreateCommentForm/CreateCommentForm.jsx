function CommentForm({ onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="d-flex flex-column align-items-center"
    >
      <div className="mb-3">
        <textarea
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
