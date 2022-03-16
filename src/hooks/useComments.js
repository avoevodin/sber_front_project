import { useEffect, useState } from "react"
import { LSCommentsKey, options } from "../settings"
const { v4: uuidv4 } = require("uuid")

const useComments = () => {
    const [comments, setComments] = useState([])

    const createComment = async (inputs) => {
        const newComment = {
            id: uuidv4(),
            postId: inputs.postId,
            text: inputs.text,
            date: new Date().toLocaleDateString("ru-RU", options),
        }
        setComments(prev => [...prev, newComment])
    }

    const deleteCommentsByPost = (postId) => {
        return setComments(prev => prev.filter((comment) => comment.postId !== postId))
    }

    const deleteComment = (id) => {
        return setComments(prev => prev.filter((comment) => comment.id !== id))
    }

    useEffect(() => {
        const dataFromLS = JSON.parse(localStorage.getItem(LSCommentsKey))
        if (dataFromLS) {
            setComments(dataFromLS)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LSCommentsKey, JSON.stringify(comments))
    }, [comments])

    return {
        comments,
        createComment,
        deleteCommentsByPost,
        deleteComment,
    }
}

export default useComments
