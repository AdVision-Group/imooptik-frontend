import React, { createContext, useState, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import {
    fetchPosts,
    uploadImage,
    createNewPost,
    fetchImages,
    fetchSinglePost,
    updatePost,
    deletePost,
    deleteImage
} from './blog.queries'


export const BlogContext = createContext({
    posts: null,
    post: null,
    postsCount: 0,
    getPosts: () => { },
    createPost: () => { },
    getPost: () => { },
    handlePostUpdate: () => { },
    handlePostDelete: () => { },
})

const BlogProvider = ({ children }) => {
    const { token } = useContext(AuthContext)

    const {
        closeModal,
        getMessage,
        setIsLoading,
        setShowModal
    } = useContext(LoadingModalContext)

    const [posts, setPosts] = useState(null)
    const [post, setPost] = useState(null)
    const [postsCount, setPostsCount] = useState(0)

    const getPosts = async () => {
        setShowModal(true)
        setIsLoading(true)

        const response = await fetchPosts()
        const data = await response.json()
        setPosts(data.blogs)
        setPostsCount(data.count)

        setShowModal(false)
        setIsLoading(false)
    }

    const getPost = async (id) => {
        setShowModal(true)
        setIsLoading(true)

        const response = await fetchSinglePost(id)
        const data = await response.json()
        if (data.blog) {
            setPost(data.blog)
            closeModal()
        }
        // setPosts(data.blogs)
        // setPostsCount(data.count)

        setShowModal(false)
        setIsLoading(false)
    }

    const createPost = async (img, name, description, draft, html) => {
        setShowModal(true)
        setIsLoading(true)

        try {
            const postResponse = await createNewPost(token, name, description, draft, html, img)
            const postData = await postResponse.json()

            getMessage(postData.message)
            setIsLoading(false)
            getPosts()
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const handlePostUpdate = async (name, description, draft, html, img, id) => {
        setShowModal(true)
        setIsLoading(true)

        try {
            const postResponse = await updatePost(token, name, description, draft, html, img, id)
            const postData = await postResponse.json()

            getMessage(postData.message)
            setIsLoading(false)
            getPosts()
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const handlePostDelete = async (id) => {
        setShowModal(true)
        setIsLoading(true)

        try {
            const postResponse = await deletePost(token, id)
            const postData = await postResponse.json()

            getMessage(postData.message)
            setIsLoading(false)
            getPosts()

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    return (
        <BlogContext.Provider
            value={{
                posts,
                post,
                postsCount,
                getPosts,
                createPost,
                getPost,
                handlePostUpdate,
                handlePostDelete,
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider