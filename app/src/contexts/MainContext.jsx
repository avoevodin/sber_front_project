import { createContext } from 'react'
import usePosts from '../hooks/usePosts'

const MainContext = createContext()

function MainContextProvider({ children }) {
  const {
    posts, createPost, deletePost, collapseComments,
  } = usePosts()
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MainContext.Provider value={{
      posts, createPost, deletePost, collapseComments,
    }}
    >
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider
export {
  MainContext,
}
