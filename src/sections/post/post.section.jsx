import React, { useState, useContext } from 'react'
import { BlogContext } from '../../context/blog/blog.context'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import CustomTextarea from '../../components/custom-textarea/custom-textarea.component'
import Popup from '../../components/popup/pop-up.component'

import {
    Header,
    GridContainer,
    PostImage,
    DeleteButton,
    AddButton,
    Title,
    ContentTextare,
    CheckboxContainer,
    UploadButton
} from './post.styles'

const PostSection = () => {
    const { createPost, isLoading, message, showLoading, setIsLoading } = useContext(BlogContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [draft, toggleDraft] = useState(false)
    const [files, setFiles] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()

        if (files === null) return
        createPost(files[0], title, description, draft, content)

    }

    return (
        <section>
            {isLoading && <Popup loading={showLoading} title={message} close={() => setIsLoading(false)} />}

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
                    <AddButton onClick={handleSubmit}>Pridať príspevok</AddButton>
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
                        <PostImage>
                            <UploadButton htmlFor='image'>
                                <input
                                    id='image'
                                    type='file'
                                    name='image'
                                    accept="image/png, image/jpeg"
                                    onChange={e => setFiles(e.target.files)}
                                />
                                    Pridať obrázok
                            </UploadButton>
                        </PostImage>
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
