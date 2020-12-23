import React, { useEffect, useContext, useState } from 'react'
import { BlogContext } from '../../context/blog/blog.context'
import { ImageContext } from '../../context/image/image.context'

import {
    ModalContainer,
    UploadButton,
    Modal,
    CloseButton,
    FlexContainer,
    ImageContainer,
    DeleteButton
} from './modal-images.styles'

const ModalImages = ({ close, setImage }) => {
    const {
        getImages,
        handleDeleteImage,
        handleImage,
        images,
    } = useContext(ImageContext)

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
                        <ImageContainer key={img._id}>
                            <DeleteButton onClick={() => handleDeleteImage(img._id)}>&#10005;</DeleteButton>
                            <img onClick={() => selectImage(img._id)} src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`} />
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
