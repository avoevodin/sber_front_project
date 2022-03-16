import { useEffect, useState } from "react"
import { LSCommentsKey, options } from "../settings"
const { v4: uuidv4 } = require("uuid")

const useComments = () => {
    const [comments, setComments] = useState([])

    const createComment = (inputs) => {
        const newComment = {
            id: uuidv4(),
            postId: inputs.postId,
            text: inputs.text,
            date: new Date().toLocaleDateString("ru-RU", options),
        }
        setComments(prev => [...prev, newComment])
    }

    useEffect(() => {
        const dataFromLS = localStorage.getItem(LSCommentsKey)
        if (dataFromLS) {
            setComments(JSON.parse(dataFromLS))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LSCommentsKey, JSON.stringify(comments))
    }, [comments])

    return {
        comments,
        createComment
    }
}

export default useComments
