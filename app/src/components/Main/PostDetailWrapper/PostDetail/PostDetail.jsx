import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { BsFillTrashFill, BsPencilSquare, BsArrowClockwise } from 'react-icons/bs'
import { useMainContext } from '../../../../contexts/MainContext'
import Modal from '../../../Modal/Modal'
import PostForm from '../../PostForm/PostForm'

function PostDetail({ postId }) {
  const currentController = useRef(new AbortController()).current
  const navigate = useNavigate()
  const { deletePost } = useMainContext()
  const [post, setPost] = useState({})
  const [viewModal, setViewModal] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      signal: currentController.signal,
    })
      .then((response) => response.json())
      .then((dataFromServer) => setPost(dataFromServer))

    return () => {
      currentController.abort()
    }
  }, [])

  const deleteHandler = async () => {
    if (await deletePost(postId)) navigate(-1)
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

    const res = await fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.status === 200) {
      const updatedPost = await res.json()

      setPost(updatedPost)
      e.target.reset()
      closeModal()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
  }

  const content = () => {
    if (!post.id) return <strong>Loading...</strong>

    return (
      <>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={post.image}
                className="img-fluid rounded-start"
                alt="Empty link"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.text}</p>
                <p className="card-text">
                  <small className="text-muted">{post.hashtag}</small>
                </p>
              </div>
              <div className="d-flex justify-content-end align-items-center mx-1">
                <div className="d-flex flex-column align-items-end mx-2">
                  <p className="card-text">
                    <small className="fw-bolder text-muted">{post.date}</small>
                  </p>
                  <div className="d-flex">
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="btn btn-link link-primary btn-lg"
                    >
                      <BsArrowClockwise />
                    </button>
                    <button
                      onClick={openModal}
                      type="button"
                      className="btn btn-link link-success btn-lg"
                    >
                      <BsPencilSquare />
                    </button>
                    <button
                      onClick={deleteHandler}
                      type="button"
                      className="btn btn-link link-danger btn-lg"
                    >
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal state={viewModal} onClose={closeModal}>
          <PostForm
            onSubmit={submitHandler}
            inputs={post}
          />
        </Modal>
      </>
    )
  }

  return <div className="d-flex justify-content-center">{content()}</div>
}

export default PostDetail
