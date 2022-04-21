import { createContext, useContext } from 'react'
import useComments from '../hooks/useComments'

const CommentsContext = createContext()

const CommentsContextProvider = ({ children, postId }) => {
  const {
    comments, createComment, deleteCommentsByPost, deleteComment,
  } = useComments({ postId })
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CommentsContext.Provider value={{
      comments, postId, createComment, deleteCommentsByPost, deleteComment,
    }}
    >
      {children}
    </CommentsContext.Provider>
  )
}

const useCommentsContext = () => useContext(CommentsContext)
export default CommentsContextProvider
export {
  useCommentsContext,
}
