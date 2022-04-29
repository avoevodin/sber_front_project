import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import styles from './postItem.module.css'
import CommentsToggleBar from '../../CommentsToggleBar/CommentsToggleBar'
import { deletePostQuery } from '../../../../redux/actionCreators/postsActionCreators'

const postsListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const PostItem = ({ post, index }) => {
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(deletePostQuery(post.id))
  }

  return (
    <motion.li variants={postsListVariants} initial="start" animate="end" className={`list-group-item ${styles.list_item_without_borders}`}>
      <div className="my-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={post.image}
              className="img-fluid rounded-start"
              alt="Empty link"
            />
          </div>
          <div className="d-flex flex-column col-md-8">
            <div className="card-body">
              <Link to={`/posts/${post.id}`} className="card-title">
                {post.title}
              </Link>
              <hr />
              <div className="card-text multiline-text">{post.text}</div>
              <p className="card-text">
                <small className="text-muted">{post.hashtag}</small>
              </p>
              <hr />
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
      <CommentsToggleBar
        key={post.id}
        postId={post.id}
        commentsExpanded={post.commentsExpanded}
        index={index}
      />
      <hr />
    </motion.li>
  )
}

export default PostItem
