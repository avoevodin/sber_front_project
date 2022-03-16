import { useEffect, useState } from "react"

const { v4: uuidv4 } = require("uuid")
const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
}
const LSPostsKey = "posts"

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
        }))
    }

    useEffect(() => {
        const dataFromLS = localStorage.getItem(LSPostsKey)
        if (dataFromLS) {
            setPosts(JSON.parse(dataFromLS))
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
