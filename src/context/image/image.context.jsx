import React, { createContext, useState, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import {
    deleteImage,
    // fetchImages, 
    uploadImage,
    fetchFilteredImages
} from './image.queries'

export const ImageContext = createContext({
    isDisabled: false,
    images: null,
    selectedImage: null,
    getImages: () => { },
    handleImage: () => { },
    handleDeleteImage: () => { },
    setSelectedImage: () => { },
    getNextImages: () => { },
    getPrevImage: () => { }
})

const ImageProvider = ({ children }) => {
    const {
        getMessage,
        setIsLoading,
        setShowModal,
        closeModal
    } = useContext(LoadingModalContext)

    const { token } = useContext(AuthContext)

    const [isDisabled, setIsDisabled] = useState(false)
    const [images, setImages] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [limit] = useState(4)
    const [skip, setSkip] = useState(0)

    const handleImage = async (img, imgName, imgAlt, setImage, close) => {
        setShowModal(true)
        setIsLoading(true)
        setIsDisabled(true)

        try {
            const response = await uploadImage(token, img, imgName, imgAlt)
            const data = await response.json()
            if (data.image) {
                setSelectedImage(data.image)
                setImage(data.image._id)
                getImages()
                close()
            }

            setShowModal(false)
            setIsLoading(false)
            setIsDisabled(false)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
            setIsDisabled(false)
        }
    }

    const getNextImages = async (addToSkip) => {
        try {
            if (images.length !== limit) return

            const response = await fetchFilteredImages(token, limit, skip + addToSkip)
            const data = await response.json()

            if (data.images) {
                setImages(data.images)

                setSkip(skip + addToSkip)
            }


        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getPrevImage = async (addToSkip) => {
        if (skip === 0) return
        try {
            const response = await fetchFilteredImages(token, limit, skip - addToSkip)
            const data = await response.json()

            if (data.images) {
                setImages(data.images)

                setSkip(skip - addToSkip)

            }

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getImages = async () => {
        setShowModal(true)
        setIsLoading(true)

        try {
            // const response = await fetchImages()
            const response = await fetchFilteredImages(token, limit, skip)

            const data = await response.json()

            if (data.images) {
                setImages(data.images)
            }

            getMessage(data.message)
            setIsLoading(false)
            closeModal()

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const handleDeleteImage = async (id, e) => {
        e.preventDefault()
        setShowModal(true)
        setIsLoading(true)

        try {
            const respone = await deleteImage(token, id)
            const data = await respone.json()

            getMessage(data.message)
            setIsLoading(false)
            getImages()
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    return (
        <ImageContext.Provider
            value={{
                isDisabled,
                images,
                selectedImage,
                getImages,
                handleImage,
                handleDeleteImage,
                setSelectedImage,
                getNextImages,
                getPrevImage
            }}
        >
            {children}
        </ImageContext.Provider>
    )
}

export default ImageProvider