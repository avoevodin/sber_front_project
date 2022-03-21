import CommentsContextProvider from '../../../contexts/CommentsContext'
import { useMainContext } from '../../../contexts/MainContext'
import PostItem from './PostItem/PostItem'

function PostsList() {
  const { posts } = useMainContext()
  return (
    <CommentsContextProvider>
      <ul className="d-flex flex-column-reverse list-group">
        {posts.map((post, index) => (
          <>
            <hr />
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              hashtag={post.hashtag}
              image={post.image}
              text={post.text}
              date={post.date}
              commentsExpanded={post.commentsExpanded}
              index={index}
            />
          </>
        ))}
      </ul>
    </CommentsContextProvider>
  )
}

export default PostsList
