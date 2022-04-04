import { useDispatch } from 'react-redux'
import { addPostQuery } from '../../../redux/actionCreators/postsActionCreators'
import PostForm from '../PostForm/PostForm'
// import SearchPostsForm from '../SearchPostsForm/SearchPostsForm'

function CreatePostForm() {
  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())

    dispatch(addPostQuery(formData, e))
  }

  return (
    <>
      <PostForm onSubmit={submitHandler} />
      {/* <SearchPostsForm /> */}
    </>
  )
}

export default CreatePostForm
