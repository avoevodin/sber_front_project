import { createContext } from 'react'
import useComments from '../hooks/useComments'

const CommentsContext = createContext()

function CommentsContextProvider({ children }) {
  const {
    comments, createComment, deleteCommentsByPost, deleteComment,
  } = useComments()
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CommentsContext.Provider value={{
      comments, createComment, deleteCommentsByPost, deleteComment,
    }}
    >
      {children}
    </CommentsContext.Provider>
  )
}

export default CommentsContextProvider
export {
  CommentsContext,
}
