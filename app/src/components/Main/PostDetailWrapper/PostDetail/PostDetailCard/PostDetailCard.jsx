import { BsFillTrashFill, BsPencilSquare, BsArrowClockwise } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { usePostDetailContext } from '../PostDetail'

function PostDetailCard() {
  const navigate = useNavigate()
  const { post, openModal, deleteHandler } = usePostDetailContext()

  return (
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
            <p className="card-text multiline-text">{post.text}</p>
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
  )
}

export default PostDetailCard
