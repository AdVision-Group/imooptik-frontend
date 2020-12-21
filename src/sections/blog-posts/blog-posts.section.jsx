import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from "../../components/scroll-container/scroll-container.component"

import {
    PostContainer,
    PostImage,
    PostContent,
    Options,
    UpdateButton,
    DeleteButton
} from './blog-posts.styles'

const BlogPosts = () => {
    const { push } = useHistory()
    const [searchQuery, setSearchQuery] = useState('')
    const items = [
        {
            id: 1,
            name: "Dátum pridania"
        },
        {
            id: 2,
            name: "Abecedne"
        },
    ]

    const [activeIndex, setActiveIndex] = useState(2)

    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('blog/blog-id')}
                title="Blog"
            />

            <SectionNavbar
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            <ScrollContainer>

                <PostContainer>
                    <PostImage>
                        IMG
                    </PostImage>
                    <PostContent>
                        <h2>Nadpis</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione ad obcaecati dicta commodi. Officiis placeat libero reprehenderit tempora et at perferendis ab, rem esse neque quidem ducimus itaque velit nobis error voluptatum. Molestiae, ea deleniti. Aliquid, consectetur sapiente in amet, ipsum distinctio ipsam nihil itaque accusamus officia omnis provident.</p>
                    </PostContent>
                    <Options>
                        <UpdateButton onClick={() => push('blog/blog-id')}>Upraviť</UpdateButton>
                        <DeleteButton>Vymazať</DeleteButton>
                    </Options>
                </PostContainer>

            </ScrollContainer>
        </section>
    )
}

export default BlogPosts
