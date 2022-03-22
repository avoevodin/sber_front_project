import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { useMainContext } from '../../../../contexts/MainContext'

function PostDetail({ postId }) {
  const currentController = useRef(new AbortController()).current
  const navigate = useNavigate()
  const { deletePost } = useMainContext()
  const [post, setPost] = useState({})

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

  const deleteHandler = () => {
    deletePost(postId)
    navigate(-1)
  }

  const content = () => {
    if (!post.id) return <strong>Loading...</strong>

    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={post.image} className="img-fluid rounded-start" alt="Empty link" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.text}</p>
              <p className="card-text"><small className="text-muted">{post.hashtag}</small></p>
            </div>
            <div className="d-flex justify-content-end align-items-center mx-1">
              <div className="d-flex flex-column align-items-end mx-2">
                <p className="card-text">
                  <small className="fw-bolder text-muted">{post.date}</small>
                </p>
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
    )
  }

  return (
    <div className="d-flex justify-content-center">
      {content()}
    </div>
  )
}

export default PostDetail
