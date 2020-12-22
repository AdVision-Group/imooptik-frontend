import React, { createContext, useState, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { fetchPosts, uploadImage, createNewPost } from './blog.queries'


export const BlogContext = createContext({
    posts: null,
    postsCount: 0,
    isLoading: false,
    showLoading: false,
    message: "",
    getPosts: () => { },
    createPost: () => { },
    setIsLoading: () => { }
})

const BlogProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const [posts, setPosts] = useState(null)
    const [postsCount, setPostsCount] = useState(0)

    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [showLoading, setShowLoading] = useState(false)

    const getPosts = async () => {
        setIsLoading(true)
        setShowLoading(true)

        const response = await fetchPosts()
        const data = await response.json()
        console.log(data)
        setPosts(data.blogs)
        setPostsCount(data.count)

        setIsLoading(false)
        setShowLoading(false)
    }

    const createPost = async (img, name, description, draft, html) => {
        setIsLoading(true)
        setShowLoading(true)
        const response = await uploadImage(token, img)
        const data = await response.json()
        console.log(data)

        if (data.image) {
            const postResponse = await createNewPost(token, name, description, draft, html)
            const postData = await postResponse.json()
            console.log(postData)

            setMessage(postData.message)
            setShowLoading(false)
        } else {
            setMessage(data.message)
            setShowLoading(false)
        }
    }


    return (
        <BlogContext.Provider
            value={{
                posts,
                postsCount,
                isLoading,
                showLoading,
                message,
                getPosts,
                createPost,
                setIsLoading
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider