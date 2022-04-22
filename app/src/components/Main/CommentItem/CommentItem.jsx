import { TiTrash } from 'react-icons/ti'
import { BsPencilFill } from 'react-icons/bs'
import { useState } from 'react'
import { useCommentsContext } from '../../../contexts/CommentsContext'
import Modal from '../../Modal/Modal'
import CommentForm from '../CommentForm/CommentForm'
import { authHeader } from '../../../config/auth'
import axiosInstance from '../../../config/axios'

const CommentItem = ({
  commentData,
}) => {
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

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const res = await axiosInstance.patch(`comments/${comment.id}`, formData, {
      headers: {
        ...authHeader(),
      },
    })

    if (res.status === 200) {
      const updatedComment = res.data

      setComment(updatedComment)
      e.target.reset()
      closeModal()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
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
        <CommentForm onSubmit={submitHandler} text={comment.text} />
      </Modal>
    </>
  )
}

export default CommentItem
