import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import CustomInput from '../custom-input/custom-input.component'
import CustomButton from '../custom-button/custom-button.component'

import ImageModal from '../modal-images/modal-images.component'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    ModalContainer,
    Modal,
    CloseButton,
    UploadButton,
    NewImageContainer,
    DeleteButton,
    NewImagesContainer,
    SubmitButton,
    UploadImageButton
} from './modal-product-image-gallery.styles'

const ProductImageGalleryModal = ({ close, setImage }) => {
    const tabs = [
        'upload',
        'select'
    ]
    const [tab, setTab] = useState(tabs[0])
    const [images, setImages] = useState([])
    const [files, setFiles] = useState([])

    const [isModalVisible, setIsModalVisible] = useState(false)

    const [selectedImages, setSelectedImages] = useState([])
    const [primaryImage, setPrimaryImage] = useState(null)

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        const filesArrWithUrl = filesArr.map((file) => ({
            file: file,
            url: URL.createObjectURL(file)
        }))
        setFiles(prevValue => ([...prevValue, ...filesArrWithUrl]))
    }

    const selectImage = (img) => {
        setSelectedImages(prevValue => ([...prevValue, img]))
    }

    const removeSelectedImage = img => {
        const arr = selectedImages.filter(image => image._id !== img._id)
        setSelectedImages(arr)
    }

    const selectPrimaryImage = img => {
        console.log(img)
        setPrimaryImage(img)
    }

    const handleSubmit = (primaryImg, otherImages) => {
        console.log(primaryImg)
        console.log(otherImages)

        // console.log(primaryImg._id)


        if (primaryImg) {
            const arr = otherImages.map(img => img._id)
            console.log(arr)
            const filteredArr = otherImages.filter(img => img._id !== primaryImg._id)
            console.log(filteredArr)
            setImage(primaryImg._id, filteredArr, primaryImg)
            close()
        } else {
            // const arr = otherImages.map(img => img._id)
            // console.log(arr)
            const firstIndex = otherImages[0]
            const filteredArr = otherImages.filter(img => img._id !== firstIndex._id)
            console.log(filteredArr)
            setImage(firstIndex._id, filteredArr, firstIndex)
            close()
        }


    }

    const { response, isLoading, refetch } = useFetchByQuery('api/images/filter', {
        sortBy: {
            dateCreated: -1
        },
        limit: 10,
        skip: 0
    })
    useEffect(() => {
        if (isLoading) return
        if (!response) return
        setImages(response.images)
    }, [isLoading])

    return ReactDOM.createPortal((
        <ModalContainer>
            {isModalVisible && <ImageModal close={() => setIsModalVisible(false)} setImage={refetch} />}

            <CloseButton onClick={close} />
            <Modal>
                <UploadImageButton onClick={() => setIsModalVisible(true)}>Pridať</UploadImageButton>

                <h2>1. Vybrať obrázky</h2>

                <NewImagesContainer>
                    {images?.length > 0 && images.map((img) => (
                        <NewImageContainer key={img._id}>
                            {/* <DeleteButton >&#10005;</DeleteButton> */}
                            <img onClick={() => selectImage(img)} src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`} alt={img.alt} />
                        </NewImageContainer>
                    ))}
                </NewImagesContainer>

                {selectedImages.length > 0 && <h2>2. Zvolené obrázky</h2>}
                {selectedImages.length > 0 && <p>Vybrať hlavný obrázok</p>}

                <NewImagesContainer>
                    {selectedImages.length > 0 && selectedImages.map((img) => (
                        <NewImageContainer key={img._id} isPrimary={img._id === primaryImage?._id}>
                            <DeleteButton onClick={() => removeSelectedImage(img)} >&#10005;</DeleteButton>
                            <img onClick={() => selectPrimaryImage(img)} src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`} alt={img.alt} />
                        </NewImageContainer>
                    ))}
                </NewImagesContainer>

                <SubmitButton onClick={() => handleSubmit(primaryImage, selectedImages)}>Dokončiť</SubmitButton>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default ProductImageGalleryModal

                // <h2>1. Vybrať obrázky</h2>

                // <UploadButton htmlFor='image'>
                //     <input
                //         id='image'
                //         type='file'
                //         name='image'
                //         multiple
                //         accept="image/png, image/jpeg"
                //         onChange={handleFileInputChange}
                //     />
                //     Vybrať
                // </UploadButton>

                // {files.length > 0 && (
                //     <div>
                //         <h2>2. Vybrat hlavný obrázok</h2>
                //     </div>
                // )}

                // <NewImagesContainer>
                //     {files.length > 0 && files.map(({ url }, idx) => (
                //         <NewImageContainer key={idx}>
                //             <DeleteButton >&#10005;</DeleteButton>
                //             <img src={url} alt={`new image ${idx}`} />
                //         </NewImageContainer>
                //     ))}
                // </NewImagesContainer>
