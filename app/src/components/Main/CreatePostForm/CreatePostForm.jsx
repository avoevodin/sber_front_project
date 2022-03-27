import { useMainContext } from '../../../contexts/MainContext'
import PostForm from '../PostForm/PostForm'
import SearchPostsForm from '../SearchPostsForm/SearchPostsForm'

const CreatePostForm = () => {
  const { createPost } = useMainContext()

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())

    const res = await fetch('http://localhost:3000/api/v1/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.status === 201) {
      const postFromServer = await res.json()
      createPost(postFromServer)
      e.target.reset()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
  }

  return (
    <>
      <PostForm onSubmit={submitHandler} />
      <SearchPostsForm />
    </>
  )
}

export default CreatePostForm
