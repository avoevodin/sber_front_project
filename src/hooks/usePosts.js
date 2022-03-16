import { useEffect, useState } from "react"
import { LSPostsKey, options } from "../settings"

const { v4: uuidv4 } = require("uuid")

const usePosts = () => {
    const [posts, setPosts] = useState([])

    const createPost = (inputs) => {
        const newPost = {
            id: uuidv4(),
            title: inputs.title,
            text: inputs.text,
            hashtag: inputs.hashtag,
            image: inputs.image,
            date: new Date().toLocaleDateString("ru-RU", options),
            commentsExpanded: false,
        }
        setPosts(prev => [...prev, newPost])
    }

    const deletePost = (id) => {
        setPosts((prev) => prev.filter((post) => post.id !== id))
    }

    const collapseComments = (id) => {
        setPosts(prev => prev.map(post => {
            if (post.id === id) {
                return {
                    ...post,
                    commentsExpanded: !post.commentsExpanded,
                }
            }
            return post
        }))
    }

    useEffect(() => {
        const dataFromLS = localStorage.getItem(LSPostsKey)
        if (dataFromLS) {
            setPosts(JSON.parse(dataFromLS).map(post => {
                return {
                    ...post,
                    commentsExpanded: false,
                }
            }))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LSPostsKey, JSON.stringify(posts))
    }, [posts])

    return {
        posts,
        createPost,
        deletePost,
        collapseComments,
    }
}

export default usePosts
