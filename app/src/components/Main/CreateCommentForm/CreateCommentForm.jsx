import { useCommentsContext } from '../../../contexts/CommentsContext'
import CommentForm from '../CommentForm/CommentForm'
import axiosInstance from '../../../config/axios'
import { authHeader } from '../../../config/auth'

const CreateCommentForm = () => {
  const { createComment, postId } = useCommentsContext()

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const res = await axiosInstance.post('comments/', { ...formData, postId }, {
      headers: {
        ...authHeader(),
      },
    })

    if (res.status === 201) {
      const commentFromServer = res.data
      createComment(commentFromServer)
      e.target.reset()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
  }

  return (
    <CommentForm onSubmit={submitHandler} />
  )
}

export default CreateCommentForm
