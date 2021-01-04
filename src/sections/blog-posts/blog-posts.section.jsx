import React, { useState, useEffect, useContext } from 'react'
import { BlogContext } from '../../context/blog/blog.context'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from "../../components/scroll-container/scroll-container.component"
import Popup from '../../components/popup/pop-up.component'

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
    const { getPosts, posts, postsCount, handlePostDelete } = useContext(BlogContext)
    const { push } = useHistory()
    const [searchQuery, setSearchQuery] = useState('')
    const items = [
        {
            id: 0,
            name: "Dátum pridania"
        },
        {
            id: 1,
            name: "Abecedne"
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (!posts) {
            getPosts(items[activeIndex])
        }
    }, [posts])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}

            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
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
                {
                    posts && posts.length ? posts.map(post => (
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
                                <DeleteButton onClick={() => handlePostDelete(post._id)}>Vymazať</DeleteButton>
                            </Options>
                        </PostContainer>
                    )) : (
                            <div>
                                Žiadne príspevky
                            </div>
                        )
                }

            </ScrollContainer>
        </section>
    )
}

export default BlogPosts
