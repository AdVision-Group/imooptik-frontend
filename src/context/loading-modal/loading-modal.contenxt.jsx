import React, { createContext, useState } from 'react'

export const LoadingModalContext = createContext({
    isLoading: false,
    showModal: false,
    message: '',
    closeModal: () => { },
    getMessage: () => { },
    setIsLoading: () => { },
    setShowModal: () => { }
})

const LoadingModalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('')

    const closeModal = () => {
        setIsLoading(false)
        setShowModal(false)
        setMessage('')
    }

    const getMessage = (string) => {
        setMessage(string)
    }

    return (
        <LoadingModalContext.Provider
            value={{
                isLoading,
                showModal,
                message,
                closeModal,
                getMessage,
                setIsLoading,
                setShowModal
            }}
        >
            {children}
        </LoadingModalContext.Provider>
    )
}

export default LoadingModalProvider