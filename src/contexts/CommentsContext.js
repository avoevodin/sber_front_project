import { createContext } from "react"
import useComments from "../hooks/useComments"

const CommentsContext = createContext()

const CommentsContextProvider = ({ children }) => {
    const { comments, createComment } = useComments()
    return (
        <CommentsContext.Provider value={{ comments, createComment }}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsContextProvider

export {
    CommentsContext
}
