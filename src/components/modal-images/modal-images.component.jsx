import React, { useEffect, useContext } from 'react'
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
        setSelectedImage
    } = useContext(ImageContext)

    const selectImage = (img) => {
        setImage(img._id)
        setSelectedImage(img)
        close()
    }

    const handleUploadImage = (e) => {
        handleImage(e.target.files[0])
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
                            <DeleteButton onClick={(e) => handleDeleteImage(img._id, e)}>&#10005;</DeleteButton>
                            <img onClick={() => selectImage(img)} src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`} />
                        </ImageContainer>
                    ))}
                </FlexContainer>
                <UploadButton htmlFor='image'>
                    <input
                        id='image'
                        type='file'
                        name='image'
                        accept="image/png, image/jpeg"
                        onChange={e => handleUploadImage(e)}
                    />
                    Pridať obrázok
                </UploadButton>
            </Modal>
        </ModalContainer>
    )
}

export default ModalImages
