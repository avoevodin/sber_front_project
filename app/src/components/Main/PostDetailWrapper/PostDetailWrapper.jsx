import { useParams } from 'react-router-dom'
import PostDetail from './PostDetail/PostDetail'

const PostDetailWrapper = () => {
  const { postId } = useParams()
  return (
  // TODO is it optimal to pass loadPosts boolean for context?
    <div className="container col-8">
      <PostDetail postId={postId} />
    </div>
  )
}

export default PostDetailWrapper
