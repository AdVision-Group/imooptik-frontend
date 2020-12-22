import React, { useState, useContext, useEffect } from 'react'
import { BlogContext } from '../../context/blog/blog.context'
import { useParams, useHistory } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import CustomTextarea from '../../components/custom-textarea/custom-textarea.component'
import Popup from '../../components/popup/pop-up.component'
import ModalImage from '../../components/modal-images/modal-images.component'
import { Quill } from 'react-quill'

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
                        <QuillToolbar />
                        <ContentTextare
                            value={content}
                            onChange={setContent}
                            modules={modules}
                            formats={formats}
                        />
                    </div>

                </GridContainer>

            </ScrollContainer>
        </section>
    )
}


const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
        <path
            className="ql-stroke"
            d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
    </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
        <path
            className="ql-stroke"
            d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
        />
    </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange
        }
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    }
};

// Formats objects for setting up the Quill editor
const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block"
];

// Quill Toolbar component
const QuillToolbar = () => (
    <div id="toolbar" className="toolbar">
        <span className="ql-formats">
            <select className="ql-size" defaultValue="medium">
                <option value="extra-small">Size 1</option>
                <option value="small">Size 2</option>
                <option value="medium">Size 3</option>
                <option value="large">Size 4</option>
            </select>
            <select className="ql-header" defaultValue="3">
                <option value="1">Heading</option>
                <option value="2">Subheading</option>
                <option value="3">Normal</option>
            </select>
        </span>
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
        </span>
        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
        </span>
        <span className="ql-formats">
            <button className="ql-script" value="super" />
            <button className="ql-script" value="sub" />
            <button className="ql-blockquote" />
            <button className="ql-direction" />
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
            <select className="ql-color" />
            <select className="ql-background" />
        </span>
        <span className="ql-formats">
            <button className="ql-link" />
            <button className="ql-image" />
            <button className="ql-video" />
        </span>
        <span className="ql-formats">
            <button className="ql-formula" />
            <button className="ql-code-block" />
            <button className="ql-clean" />
        </span>
        <span className="ql-formats">
            <button className="ql-undo">
                <CustomUndo />
            </button>
            <button className="ql-redo">
                <CustomRedo />
            </button>
        </span>
    </div>
);


export default PostSection
