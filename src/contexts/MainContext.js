import { createContext } from "react";
import usePosts from "../hooks/usePosts";

const MainContext = createContext()

const MainContextProvider = ({ children }) => {
    const { posts, createPost, deletePost } = usePosts()
    return (
        <MainContext.Provider value={{ posts, createPost, deletePost }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider

export {
    MainContext
}
