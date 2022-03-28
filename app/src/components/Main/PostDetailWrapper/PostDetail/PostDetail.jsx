import { createContext, useContext, useMemo } from 'react'
import withLoader from '../../../hocs/withLoader'
import usePostDetail from '../hooks/usePostDetail'
import usePostDetailModal from '../hooks/usePostDetailModal'
import PostDetailCard from './PostDetailCard/PostDetailCard'
import PostDetailModal from './PostDetailModal/PostDetailModal'

const PostDetailContext = createContext()
const PostDetailCardWithLoader = withLoader(PostDetailCard)

function PostDetail({ postId }) {
  const { viewModal, openModal, closeModal } = usePostDetailModal()
  const {
    post, loading, submitHandler, deleteHandler,
  } = usePostDetail(postId, closeModal)

  const sharedValues = useMemo(() => ({
    viewModal, openModal, closeModal, post, submitHandler, deleteHandler,
  }), [post, viewModal])

  return (
    <PostDetailContext.Provider value={sharedValues}>
      <div className="d-flex justify-content-center">
        <PostDetailCardWithLoader loading={loading} />
        <PostDetailModal />
      </div>
    </PostDetailContext.Provider>
  )
}

export default PostDetail

export const usePostDetailContext = () => useContext(PostDetailContext)
