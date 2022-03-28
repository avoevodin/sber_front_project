import Modal from '../../../../Modal/Modal'
import PostForm from '../../../PostForm/PostForm'
import { usePostDetailContext } from '../PostDetail'

function PostDetailModal() {
  const {
    viewModal, closeModal, submitHandler, post,
  } = usePostDetailContext()
  return (
    <Modal state={viewModal} onClose={closeModal}>
      <PostForm onSubmit={submitHandler} inputs={post} />
    </Modal>
  )
}

export default PostDetailModal
