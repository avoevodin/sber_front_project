import { useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostQuery, getPostQuery, updatePostQuery } from '../../../../redux/actionCreators/postsActionCreators'

const usePostDetail = (postId, closeModal) => {
  const [loading, setLoading] = useState(true)
  const currentController = useRef(new AbortController()).current
  const dispatch = useDispatch()

  const post = useSelector((store) => store.posts.find((el) => el.id === postId)) || {}

  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1)
  }

  useLayoutEffect(() => {
    dispatch(getPostQuery(postId, currentController.signal, setLoading))

    return () => {
      currentController.abort()
    }
  }, [])

  const deleteHandler = async () => {
    dispatch(deletePostQuery(postId, navigateBack))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    dispatch(updatePostQuery(postId, formData, closeModal, e))
  }

  return {
    post,
    loading,
    submitHandler,
    deleteHandler,
  }
}

export default usePostDetail
