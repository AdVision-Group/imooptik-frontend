import React, { useState, useContext, useEffect } from 'react'
import { BlogContext } from '../../context/blog/blog.context'
import { useParams, useHistory } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import CustomTextarea from '../../components/custom-textarea/custom-textarea.component'
import Popup from '../../components/popup/pop-up.component'
import ModalImage from '../../components/modal-images/modal-images.component'

import {
    Header,
    GridContainer,
    PostImage,
    DeleteButton,
    AddButton,
    Title,
    ContentTextare,
    CheckboxContainer,
} from './post.styles'

const PostSection = () => {
    const { id } = useParams()
    const { push } = useHistory()
    const {
        createPost,
        isLoading,
        message,
        showLoading,
        setIsLoading,
        getPost,
        post,
        handlePostUpdate
    } = useContext(BlogContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [draft, toggleDraft] = useState(false)
    const [image, setImage] = useState('')
    const [showImageModal, setImageModal] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if (image.length <= 0) return

        if (id === 'novy-prispevok') {
            createPost(image, title, description, draft, content)
        } else {
            handlePostUpdate(title, description, draft, content, image, id)
        }

        push('/dashboard/blog')

    }

    useEffect(() => {
        if (id !== 'novy-prispevok') {
            getPost(id)
        }
    }, [id])

    useEffect(() => {
        console.log(post)
        if (post) {
            console.log(post)
            setTitle(post.name)
            setDescription(post.description)
            setContent(post.html)
            toggleDraft(post.draft)
            setImage(post.image._id)
        }
    }, [post])

    return (
        <section>
            {isLoading && <Popup loading={showLoading} title={message} close={() => setIsLoading(false)} />}
            {showImageModal && <ModalImage close={() => setImageModal(false)} setImage={setImage} />}

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
                        <PostImage onClick={() => setImageModal(true)} >
                            Vybrať obrázok
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
