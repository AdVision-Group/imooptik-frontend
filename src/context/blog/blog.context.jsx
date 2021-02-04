import React, { createContext, useState, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import {
    fetchPosts,
    createNewPost,
    fetchSinglePost,
    updatePost,
    deletePost,
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
    resetBlog: () => { }
})

const BlogProvider = ({ children }) => {
    const { token } = useContext(AuthContext)

    const {
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

        try {

            const response = await fetchSinglePost(id)
            const data = await response.json()

            console.log(data)

            if (data.blog) {
                setPost(data.blog)
                setIsLoading(false)
                getMessage(data.message)
                return
            }

            setIsLoading(false)
            getMessage(data.message)
            // setPosts(data.blogs)
            // setPostsCount(data.count)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }


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

    const resetBlog = () => {
        setPost(null)
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
                resetBlog,
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider