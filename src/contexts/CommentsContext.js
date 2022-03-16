import { createContext } from "react"

const CommentsContext = createContext()
const CommentsContextProvider = ({ children }) => {
    return (
        <CommentsContext.Provider>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsContextProvider

export {
    CommentsContext
}
