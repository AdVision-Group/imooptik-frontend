import React, { useState } from 'react'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import CustomTextarea from '../../components/custom-textarea/custom-textarea.component'

import {
    Header,
    GridContainer,
    PostImage,
    DeleteButton,
    AddButton,
    Title,
    ContentTextare,
    CheckboxContainer
} from './post.styles'

const PostSection = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [draft, toggleDraft] = useState(false)

    console.log(draft)

    return (
        <section>
            <Header>
                <div>
                    <h1>Post</h1>
                </div>
                <div>
                    <CheckboxContainer>Draft
                        <input type="checkbox" checked={draft} onChange={() => toggleDraft(!draft)} />
                        <span className="checkmark"></span>
                    </CheckboxContainer>
                    <DeleteButton>Vymazať</DeleteButton>
                    <AddButton>Pridať príspevok</AddButton>
                </div>
            </Header>

            <ScrollContainer>

                <GridContainer>
                    <div>
                        <h2>Informácia</h2>
                        <CustomInput
                            label="Nadpis"
                            type='text'
                            name='title'
                            value={title}
                            handleChange={(e) => setTitle(e.target.value)}
                        />
                        <CustomTextarea
                            label="Popis"
                            name='description'
                            rows='5'
                            value={description}
                            handleChange={(e) => setDescription(e.target.value)}
                        />
                        <h2>Titulná fotka</h2>
                        <PostImage>IMG</PostImage>
                    </div>
                    <div>
                        <Title>Obsah</Title>

                        <ContentTextare
                            value={content}
                            onChange={setContent}
                        />
                    </div>

                </GridContainer>

            </ScrollContainer>
        </section>
    )
}

export default PostSection
