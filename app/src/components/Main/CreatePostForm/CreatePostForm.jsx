import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addPostQuery } from '../../../redux/actionCreators/postsActionCreators'
import PostForm from '../PostForm/PostForm'
import SearchPostsForm from '../SearchPostsForm/SearchPostsForm'

const CreatePostForm = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const parsedQuery = JSON.parse(searchParams.get('filter'))
    let changePosts = true
    // TODO How to share this logic between client and server. Is it possible?
    if (parsedQuery && parsedQuery.title) {
      const searchRegExp = new RegExp(parsedQuery.title, 'i')
      changePosts = (searchRegExp.test(formData.title))
    }
    dispatch(addPostQuery(formData, e, changePosts))
  }

  return (
    <>
      <PostForm onSubmit={submitHandler} />
      <SearchPostsForm />
    </>
  )
}

export default CreatePostForm
