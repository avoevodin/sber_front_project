import { useState } from 'react'

const { v4: uuidv4 } = require('uuid')

const usePosts = () => {
    const [posts, setPosts] = useState([])
    console.log(posts)
    const createPost = async (inputs) => {
        const newPost = {
            id: uuidv4(),
            title: inputs.title,
            text: inputs.text,
            hashtag: inputs.hashtag,
            image: inputs.image,
        }
        setPosts(prev => [...prev, newPost])
    }

    return {
        posts,
        createPost,
    }
}

export default usePosts
