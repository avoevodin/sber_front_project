import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function PostDetail() {
  const { postId } = useParams()

  const currentController = useRef(new AbortController()).current

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
