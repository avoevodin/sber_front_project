import { createContext, useContext } from 'react'
import usePosts from '../hooks/usePosts'

const MainContext = createContext()

function MainContextProvider({ children, loadPosts = true }) {
  const {
    posts, createPost, deletePost, collapseComments, updatePosts, getSearchParams,
  } = usePosts(loadPosts)
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MainContext.Provider value={{
      posts, createPost, deletePost, collapseComments, updatePosts, getSearchParams,
    }}
    >
      {children}
    </MainContext.Provider>
  )
}

const useMainContext = () => useContext(MainContext)
export default MainContextProvider
export {
  useMainContext,
}
