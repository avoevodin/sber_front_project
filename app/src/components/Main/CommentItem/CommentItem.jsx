import { TiTrash } from 'react-icons/ti'
import { BsPencilFill } from 'react-icons/bs'
import { useCommentsContext } from '../../../contexts/CommentsContext'
import Modal from '../../Modal/Modal'
import CommentForm from '../CommentForm/CommentForm'

function CommentItem({
  commentData,
}) {
  const { deleteComment } = useCommentsContext()
  const [comment, setComment] = useState(commentData)
  const [viewModal, setViewModal] = useState(false)
  const deleteCommentHandler = () => {
    deleteComment(comment.id)
  }

  const openModal = () => {
    setViewModal(true)
  }

  const closeModal = () => {
    setViewModal(false)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <li className="list-group-item">
        <div>
          <div className="d-flex justify-content-between align-items-center card-header">
            <div>
              {comment.date}
            </div>
            <div className="d-flex align-items-center">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-link link-success"
              >
                <BsPencilFill />
              </button>
              <button
                onClick={deleteCommentHandler}
                type="button"
                className="btn btn-link link-danger"
              >
                <TiTrash />
              </button>
            </div>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <div className="multiline-text">{comment.text}</div>
            </blockquote>
          </div>
        </div>
      </li>
      <Modal
        state={viewModal}
        onClose={closeModal}
      >
        <CommentForm onSubmit={submitHandler} />
      </Modal>
    </>
  )
}

export default CommentItem
