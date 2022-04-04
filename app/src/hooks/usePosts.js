import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setPostsQuery } from '../redux/actionCreators/postsActionCreators'

function handleCollapseField(post, reverse = false) {
  return {
    ...post,
    commentsExpanded: (reverse) ? !post.commentsExpanded : false,
  }
}

const usePosts = (loadPosts) => {
  const dispatch = useDispatch()
  const posts = useSelector((store) => store.posts)
  const [searchParams] = useSearchParams()
  const currentController = useRef(new AbortController()).current

  // TODO is it optimal?
  const getSearchParams = () => {
    const parsedQuery = JSON.parse(searchParams.get('filter'))
    if (parsedQuery && parsedQuery.title) {
      return parsedQuery.title
    }
    return null
  }

  useEffect(() => {
    dispatch(
      setPostsQuery({
        loadPosts, getSearchParams, handleCollapseField, signal: currentController.signal,
      }),
    )

    return () => {
      currentController.abort()
    }
  }, [])

  return {
    posts,
    getSearchParams,
  }
}

export default usePosts
