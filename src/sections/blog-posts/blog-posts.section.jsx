import React, { useState, useEffect, useContext } from 'react'
import { BlogContext } from '../../context/blog/blog.context'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from "../../components/scroll-container/scroll-container.component"
import Popup from '../../components/popup/pop-up.component'
import ListArrows from '../../components/list-arrows/list-arrows.component'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    PostContainer,
    PostImage,
    PostContent,
    Options,
    UpdateButton,
    DeleteButton
} from './blog-posts.styles'

const BlogPosts = () => {
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)
    const { postsCount, handlePostDelete } = useContext(BlogContext)
    const { push } = useHistory()

    const [posts, setPosts] = useState([])

    const [filterQuery, setFilterQuery] = useState({
        limit: 10,
        sortBy: {
            date: -1
        },
        // query: ""
    })
    const [searchQuery, setSearchQuery] = useState('')



    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
        {
            id: 0,
            name: "Zostupne"
        },
        {
            id: 1,
            name: "Vzostupne"
        },
    ]

    const blogsData = useFetchByQuery('api/blogs/filter', filterQuery)

    const handleSearch = () => {
        if (searchQuery !== '') {
            setFilterQuery({
                limit: 10,
                sortBy: {
                    date: -1
                },
                query: searchQuery
            })
            blogsData.refetch()
        }
    }

    const handlePostDeleteClick = (postID) => {
        handlePostDelete(postID)
        blogsData.refetch()
    }

    useEffect(() => {
        if (searchQuery === '') {
            setFilterQuery({
                limit: 10,
                sortBy: {
                    date: -1
                },
            })
            blogsData.refetch()
        }
    }, [searchQuery])

    useEffect(() => {
        if (activeIndex === 0) {
            setFilterQuery({
                limit: 10,
                sortBy: {
                    date: -1
                },
                // query: ""
            })
            blogsData.refetch()
        } else {
            setFilterQuery({
                limit: 10,
                sortBy: {
                    date: 1
                },
                // query: ""
            })
            blogsData.refetch()
        }
    }, [activeIndex])

    useEffect(() => {
        if (!blogsData.isLoading) {
            setPosts(blogsData.response?.blogs)
        }
    }, [blogsData.isLoading])

    useEffect(() => {
        return () => {
            closeModal()
            setSearchQuery('')
            setActiveIndex(0)
            setPosts([])
            setFilterQuery({
                limit: 10,
                sortBy: {
                    date: -1
                },
            })
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}

            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleSearch={handleSearch}
                handleAddButton={() => push('blog/novy-prispevok')}
                count={postsCount}
                title="Blog"
            />

            <SectionNavbar
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            <ScrollContainer>
                {posts && posts.length ? posts.map(post => (
                    <PostContainer key={post._id}>
                        <PostImage>
                            {post.image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${post.image.imagePath}`} alt={post.image.alt} />}
                        </PostImage>
                        <PostContent>
                            <h2>{post.name}</h2>
                            <p>{post.description}</p>
                        </PostContent>
                        <Options>
                            <UpdateButton onClick={() => push(`blog/${post._id}`)}>Upraviť</UpdateButton>
                            <DeleteButton onClick={() => handlePostDeleteClick(post._id)}>Vymazať</DeleteButton>
                        </Options>
                    </PostContainer>
                )) : (
                        <div>
                            Žiadne príspevky
                        </div>
                    )}

                <ListArrows
                    listItems={posts}
                />
            </ScrollContainer>
        </section>
    )
}

export default BlogPosts
