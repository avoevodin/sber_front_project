import { useParams } from 'react-router-dom'
import MainContextProvider from '../../../contexts/MainContext'
import PostDetail from './PostDetail/PostDetail'

function PostDetailWrapper() {
  const { postId } = useParams()
  return (
    // TODO is it optimal to pass loadPosts boolean for context?
    <MainContextProvider loadPosts={false}>
      <div className="container col-8">
        <PostDetail postId={postId} />
      </div>
    </MainContextProvider>
  )
}

export default PostDetailWrapper
