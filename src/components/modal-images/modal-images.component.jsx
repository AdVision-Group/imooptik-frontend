import React, { useEffect, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { ImageContext } from '../../context/image/image.context'
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'

import {
    ModalContainer,
    UploadButton,
    Modal,
    CloseButton,
    FlexContainer,
    ImageContainer,
    DeleteButton,
    ImagePreviewContainer,
    TabButton,
    TabOptions,
    CropButton
} from './modal-images.styles'

const ModalImages = ({ close, setImage }) => {
    const {
        getImages,
        handleDeleteImage,
        // handleImage,
        images,
        setSelectedImage
    } = useContext(ImageContext)

    const selectImage = (img) => {
        setImage(img._id)
        setSelectedImage(img)
        close()
    }

    // const handleUploadImage = (e) => {
    //     handleImage(e.target.files[0])
    //     close()
    // }

    const [showTab, setShowTab] = useState("upload")
    const [imageToUpload, setImageToUpload] = useState(null)
    const [imgUrl, setImgUrl] = useState('')
    const [cropper, setCropper] = useState(null)
    const [cropData, setCropData] = useState('');

    const handleClick = (e, tab) => {
        e.preventDefault()
        setShowTab(tab)

        if (tab === 'images') {
            if (!images) {
                console.log('API IMAGE CALL')
                getImages()
            }
        }
    }

    useEffect(() => {
        if (imageToUpload) {
            setImgUrl(URL.createObjectURL(imageToUpload))
        }
    }, [imageToUpload])

    const getCropData = (e) => {
        e.preventDefault()
        if (typeof cropper !== 'undefined') {
            // handleImage(cropper.getCroppedCanvas().toDataURL())
            setCropData(cropper.getCroppedCanvas().toDataURL());
            console.log(cropData)
        }
    };

    return ReactDOM.createPortal((
        <ModalContainer >
            <CloseButton onClick={close} />
            <Modal>
                <TabOptions>
                    <TabButton isActive={showTab === 'upload'} onClick={(e) => handleClick(e, "upload")}>Nový obrazok</TabButton>
                    <TabButton isActive={showTab === 'images'} onClick={(e) => handleClick(e, "images")}>Obrázky</TabButton>
                </TabOptions>
                {
                    showTab === 'upload' ? (
                        <div>
                            <UploadButton htmlFor='image'>
                                <input
                                    id='image'
                                    type='file'
                                    name='image'
                                    accept="image/png, image/jpeg"
                                    onChange={e => setImageToUpload(e.target.files[0])}
                                />
                                    Vybrať obrázok
                            </UploadButton>
                            {imgUrl && (
                                <React.Fragment>
                                    <ImagePreviewContainer>
                                        <Cropper
                                            src={imgUrl}
                                            style={{ height: 400, width: '100%' }}
                                            initialAspectRatio={1}
                                            aspectRatio={1}
                                            scalable={true}
                                            zoomable={true}
                                            guides={false}
                                            cropBoxResizable={true}
                                            onInitialized={instance => {
                                                setCropper(instance)
                                            }}
                                        />
                                    </ImagePreviewContainer>
                                    <CropButton onClick={getCropData}>Orezať a nahrať</CropButton>
                                </React.Fragment>
                            )}
                        </div>
                    ) : (
                            <div>
                                <h2>Nahrane obrazky</h2>
                                <FlexContainer>
                                    {images && images.map(img => (
                                        <ImageContainer key={img._id}>
                                            <DeleteButton onClick={(e) => handleDeleteImage(img._id, e)}>&#10005;</DeleteButton>
                                            <img onClick={() => selectImage(img)} src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`} />
                                        </ImageContainer>
                                    ))}
                                </FlexContainer>
                            </div>
                        )
                }


            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default ModalImages
