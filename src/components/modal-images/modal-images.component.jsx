import React, { useEffect, useContext, useState } from 'react'
import { BlogContext } from '../../context/blog/blog.context'

import {
    ModalContainer,
    UploadButton,
    Modal,
    CloseButton,
    FlexContainer,
    ImageContainer
} from './modal-images.styles'

const ModalImages = ({ close, setImage }) => {
    const { getImages, images, handleImage } = useContext(BlogContext)
    const [files, setFiles] = useState(undefined)

    const selectImage = (id) => {
        setImage(id)
        close()
    }

    useEffect(() => {
        if (!images) {
            getImages()
        }
    }, [images])

    return (
        <ModalContainer >
            <CloseButton onClick={close} />
            <Modal>
                <h2>Nahrane obrazky</h2>
                <FlexContainer>
                    {images && images.map(img => (
                        <ImageContainer key={img._id} onClick={() => selectImage(img._id)}>
                            <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`} />
                        </ImageContainer>
                    ))}
                </FlexContainer>
                <UploadButton htmlFor='image'>
                    <input
                        id='image'
                        type='file'
                        name='image'
                        accept="image/png, image/jpeg"
                        onChange={e => handleImage(e.target.files[0])}
                    />
                    Pridať obrázok
                </UploadButton>
            </Modal>
        </ModalContainer>
    )
}

export default ModalImages
