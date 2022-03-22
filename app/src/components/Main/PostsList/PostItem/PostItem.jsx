import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from './postItem.module.css'
import { useMainContext } from '../../../../contexts/MainContext'
import CommentsToggleBar from '../../CommentsToggleBar/CommentsToggleBar'

function PostItem({
  id, title, hashtag, image, text, date, commentsExpanded, index,
}) {
  const { deletePost } = useMainContext()

  const deleteHandler = () => {
    deletePost(id)
  }

  return (
    <li className={`list-group-item ${styles.list_item_without_borders}`}>
      <div className="my-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start"
              alt="Empty link"
            />
          </div>
          <div className="d-flex flex-column col-md-8">
            <div className="card-body">
              <Link to={`/posts/${id}`} className="card-title">{title}</Link>
              <hr />
              <div className="card-text multiline-text">{text}</div>
              <p className="card-text">
                <small className="text-muted">{hashtag}</small>
              </p>
              <hr />
            </div>
            <div className="d-flex justify-content-end align-items-center mx-1">
              <div className="d-flex flex-column align-items-end mx-2">
                <p className="card-text">
                  <small className="fw-bolder text-muted">{date}</small>
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
      <CommentsToggleBar key={id} postId={id} commentsExpanded={commentsExpanded} index={index} />
      <hr />
    </li>
  )
}

export default PostItem
