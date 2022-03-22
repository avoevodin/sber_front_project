import CommentsContextProvider from '../../../contexts/CommentsContext'
import { useMainContext } from '../../../contexts/MainContext'
import PostItem from './PostItem/PostItem'

function PostsList() {
  const { posts } = useMainContext()
  return (
    <ul className="d-flex flex-column-reverse list-group">
      {posts.map((post, index) => (
        <CommentsContextProvider key={post.id} postId={post.id}>
          <PostItem
            id={post.id}
            title={post.title}
            hashtag={post.hashtag}
            image={post.image}
            text={post.text}
            date={post.date}
            commentsExpanded={post.commentsExpanded}
            index={index}
          />
        </CommentsContextProvider>
      ))}
    </ul>
  )
}

export default PostsList
