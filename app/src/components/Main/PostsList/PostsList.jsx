import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CommentsContextProvider from '../../../contexts/CommentsContext'
import useDebounce from '../../../hooks/useDebounce'
import { setPostsQuery } from '../../../redux/actionCreators/postsActionCreators'
import PostItem from './PostItem/PostItem'

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector((store) => store.posts)
  const filter = useSelector((store) => store.filter)
  const [searchParams] = useSearchParams()
  const delayedFilter = useDebounce(filter, 500)

  useEffect(() => {
    const parsedQuery = JSON.parse(searchParams.get('filter'))

    // TODO check if search params is filled, but filter hasn't set yet.
    // Is there another solution?
    if (!(parsedQuery && parsedQuery.title) || filter) {
      dispatch(
        setPostsQuery(delayedFilter),
      )
    }
  }, [delayedFilter])

  return (
    <ul className="d-flex flex-column-reverse list-group">
      {posts.map((post, index) => (
        <CommentsContextProvider key={post.id} postId={post.id}>
          <PostItem
            post={post}
            index={index}
          />
        </CommentsContextProvider>
      ))}
    </ul>
  )
}

export default PostsList
