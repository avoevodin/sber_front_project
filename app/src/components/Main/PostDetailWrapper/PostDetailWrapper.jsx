import { useParams } from 'react-router-dom'
import CommentsContextProvider from '../../../contexts/CommentsContext'
import MainContextProvider from '../../../contexts/MainContext'
import CommentsToggleBar from '../CommentsToggleBar/CommentsToggleBar'
import PostDetail from './PostDetail/PostDetail'

function PostDetailWrapper() {
  const { postId } = useParams()
  return (
    <MainContextProvider loadPosts={false}>
      <CommentsContextProvider postId={postId}>
        <div className="container col-8">
          <PostDetail postId={postId} />
          <CommentsToggleBar postId={postId} />
        </div>
      </CommentsContextProvider>
    </MainContextProvider>
  )
}

export default PostDetailWrapper
