import { useParams } from 'react-router-dom'
import CommentsContextProvider from '../../../contexts/CommentsContext'
import MainContextProvider from '../../../contexts/MainContext'
import CommentsToggleBar from '../CommentsToggleBar/CommentsToggleBar'
import PostDetail from './PostDetail/PostDetail'

const PostDetailWrapper = () => {
  const { postId } = useParams()
  return (
    <MainContextProvider loadPosts={false}>
      <div className="container col-8">
        <PostDetail postId={postId} />
        <CommentsContextProvider postId={postId}>
          <CommentsToggleBar postId={postId} />
        </CommentsContextProvider>
      </div>
    </MainContextProvider>
  )
}

export default PostDetailWrapper
