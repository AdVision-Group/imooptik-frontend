import React, { useEffect, useContext, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { ImageContext } from '../../context/image/image.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css'

import CustomButton from '../../components/custom-button/custom-button.component'

import CustomInput from '../custom-input/custom-input.component'

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
    CropButton,
    ButtonOptions,
    FetchButtons
} from './modal-images.styles'

const ModalImages = ({ close, setImage }) => {
    const {
        isDisabled,
        getImages,
        handleDeleteImage,
        handleImage,
        images,
        setSelectedImage,
        getNextImages,
        getPrevImage
    } = useContext(ImageContext)

    const {
        getMessage,
        setIsLoading,
        setShowModal,
        closeModal
    } = useContext(LoadingModalContext)

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
    // const [cropper, setCropper] = useState(null)
    // const [cropData, setCropData] = useState('');

    const [imageName, setImageName] = useState('')
    const [imageAlt, setImageAlt] = useState('')


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

    const getCropData = async (e) => {
        e.preventDefault()
        setShowModal(true)
        setIsLoading(true)

        try {
            // if (typeof cropper !== 'undefined') {
            toDataUrl(imgUrl, async (imgData) => {
                const data = await handleImage(imgData, imageName, imageAlt)

                if (data.image) {
                    setImage(data.image._id)
                    setSelectedImage(data.image)
                    getImages()
                    close()
                }
            })

            // }
            setShowModal(false)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }

        closeModal()
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        toDataUrl(imgUrl, (imgData) => {
            handleImage(imgData, imageName, imageAlt, setImage, close)
        })
    }

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
                                        <img src={imgUrl} />
                                        {/* <Cropper
                                            src={imgUrl}
                                            style={{ height: 400, width: '100%' }}
                                            initialAspectRatio={1}
                                            aspectRatio={1}
                                            scalable={true}
                                            zoomable={false}
                                            guides={false}
                                            cropBoxResizable={true}
                                            onInitialized={instance => {
                                                setCropper(instance)
                                            }}
                                        /> */}
                                    </ImagePreviewContainer>
                                    <CustomInput
                                        label="Názov"
                                        type='text'
                                        name='imageName'
                                        value={imageName}
                                        handleChange={(e) => setImageName(e.target.value)}
                                    />
                                    <CustomInput
                                        label="Alt"
                                        type='text'
                                        name='imageAlt'
                                        value={imageAlt}
                                        handleChange={(e) => setImageAlt(e.target.value)}
                                    />

                                    <CropButton onClick={(e) => handleSubmit(e)} disabled={isDisabled} >Orezať a nahrať</CropButton>
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
                                <ButtonOptions>
                                    <FetchButtons onClick={() => getPrevImage(2)}>
                                        {"<"}
                                    </FetchButtons>
                                    <FetchButtons onClick={() => getNextImages(2)}>
                                        {">"}
                                    </FetchButtons>
                                </ButtonOptions>
                            </div>
                        )
                }


            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export const toDataUrl = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const str = reader.result
            const lastPos = str.indexOf(';')
            const cuttedstr = str.slice(lastPos, str.length)
            const newStr = "data:image/png" + cuttedstr
            callback(newStr);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
};

export default ModalImages
