import { motion } from 'framer-motion'
import CommentsContextProvider from '../../../contexts/CommentsContext'
import { useMainContext } from '../../../contexts/MainContext'
import PostItem from './PostItem/PostItem'

const postsListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}
function PostsList() {
  const { posts } = useMainContext()
  return (
    <motion.ul variants={postsListVariants} initial="start" animate="end" className="d-flex flex-column-reverse list-group">
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
    </motion.ul>
  )
}

export default PostsList
