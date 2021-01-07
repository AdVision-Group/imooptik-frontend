import React, { createContext, useState, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import { deleteImage, fetchImages, uploadImage } from './image.queries'

export const ImageContext = createContext({
    images: null,
    selectedImage: null,
    getImages: () => { },
    handleImage: () => { },
    handleDeleteImage: () => { },
    setSelectedImage: () => { }
})

const ImageProvider = ({ children }) => {
    const {
        getMessage,
        setIsLoading,
        setShowModal
    } = useContext(LoadingModalContext)

    const { token } = useContext(AuthContext)

    const [images, setImages] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImage = async (img, imgName, imgAlt) => {
        setShowModal(true)
        setIsLoading(true)

        console.log(img)
        console.log(imgName)
        console.log(imgAlt)

        try {
            const response = await uploadImage(token, img, imgName, imgAlt)
            const data = await response.json()
            console.log(data)

            if (data.image) {
                setSelectedImage(data.image)
                getImages()
            }

            setShowModal(false)
            setIsLoading(false)
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
            const response = await fetchImages()
            const data = await response.json()

            console.log(data)
            if (data.images) {
                setImages(data.images)
            }

            getMessage(data.message)
            setShowModal(false)
            setIsLoading(false)

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
                images,
                selectedImage,
                getImages,
                handleImage,
                handleDeleteImage,
                setSelectedImage
            }}
        >
            {children}
        </ImageContext.Provider>
    )
}

export default ImageProvider