import React, { createContext, useState, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import {
    fetchPosts,
    uploadImage,
    createNewPost,
    fetchImages,
    fetchSinglePost,
    updatePost,
    deletePost
} from './blog.queries'


export const BlogContext = createContext({
    images: null,
    posts: null,
    post: null,
    postsCount: 0,
    isLoading: false,
    showLoading: false,
    message: "",
    getPosts: () => { },
    getImages: () => { },
    createPost: () => { },
    setIsLoading: () => { },
    handleImage: () => { },
    getPost: () => { },
    handlePostUpdate: () => { },
    handlePostDelete: () => { }
})

const BlogProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const [posts, setPosts] = useState(null)
    const [post, setPost] = useState(null)
    const [postsCount, setPostsCount] = useState(0)

    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [showLoading, setShowLoading] = useState(false)

    const [images, setImages] = useState(null)

    const getPosts = async () => {
        setIsLoading(true)
        setShowLoading(true)

        const response = await fetchPosts()
        const data = await response.json()
        setPosts(data.blogs)
        setPostsCount(data.count)

        setIsLoading(false)
        setShowLoading(false)
    }

    const getPost = async (id) => {
        setIsLoading(true)
        setShowLoading(true)

        const response = await fetchSinglePost(id)
        const data = await response.json()
        if (data.blog) {
            setPost(data.blog)
        }
        // setPosts(data.blogs)
        // setPostsCount(data.count)

        setIsLoading(false)
        setShowLoading(false)
    }

    const createPost = async (img, name, description, draft, html) => {
        setIsLoading(true)
        setShowLoading(true)

        try {
            const postResponse = await createNewPost(token, name, description, draft, html, img)
            const postData = await postResponse.json()

            setMessage(postData.message)
            setShowLoading(false)
            getPosts()
        } catch (err) {
            console.log(err)
            setMessage("Nieco sa pokazilo")
            setShowLoading(false)
        }
    }

    const handlePostUpdate = async (name, description, draft, html, img, id) => {
        setIsLoading(true)
        setShowLoading(true)

        try {
            const postResponse = await updatePost(token, name, description, draft, html, img, id)
            const postData = await postResponse.json()

            setMessage(postData.message)
            setShowLoading(false)
            getPosts()
        } catch (err) {
            console.log(err)
            setMessage("Nieco sa pokazilo")
            setShowLoading(false)
        }
    }

    const handlePostDelete = async (id) => {
        setIsLoading(true)
        setShowLoading(true)

        try {
            const postResponse = await deletePost(token, id)
            const postData = await postResponse.json()

            setMessage(postData.message)
            setShowLoading(false)
            getPosts()

        } catch (err) {
            console.log(err)
            setMessage("Nieco sa pokazilo")
            setShowLoading(false)
        }
    }

    const handleImage = async (img) => {
        setIsLoading(true)
        setShowLoading(true)

        try {
            const response = await uploadImage(token, img)
            const data = await response.json()
            if (data.image) {
                getImages()
            }

            setIsLoading(true)
            setShowLoading(true)
        } catch (err) {
            console.log(err)
            setMessage("Nieco sa pokazilo")
            setShowLoading(false)
        }



    }

    const getImages = async () => {
        setIsLoading(true)
        setShowLoading(true)

        try {
            const response = await fetchImages()
            const data = await response.json()

            console.log(data)
            if (data.images) {
                setImages(data.images)
            }

            setMessage(data.message)
            setIsLoading(false)
            setShowLoading(false)

        } catch (err) {
            console.log(err)
            setMessage("Nieco sa pokazilo")
            setShowLoading(false)
        }
    }


    return (
        <BlogContext.Provider
            value={{
                images,
                posts,
                post,
                postsCount,
                isLoading,
                showLoading,
                message,
                getPosts,
                createPost,
                setIsLoading,
                getImages,
                handleImage,
                getPost,
                handlePostUpdate,
                handlePostDelete
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider