import React, { createContext, useState } from 'react'

export const BlogContext = createContext({
    posts: null,
    postsCount: 0,
    getPosts: () => { }
})

const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState(null)
    const [postsCount, setPostsCount] = useState(0)

    const getPosts = async () => {
        const response = await fetch('http://195.110.58.166:8080/api/blogs')
        const data = await response.json()
        console.log(data)
        setPosts(data.blogs)
        setPostsCount(data.count)
    }


    return (
        <BlogContext.Provider
            value={{
                posts,
                postsCount,
                getPosts
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider