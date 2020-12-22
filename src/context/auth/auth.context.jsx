import React, { createContext, useState, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { getUser, createNewUser, resetPassword, setNewPassword } from './auth.queries'

export const AuthContext = createContext({
    currentUser: null,
    token: null,
    logIn: () => { },
    Register: () => { },
    handleResetPassword: () => { },
    handleCreatingNewPassword: () => { }
})

const AuthProvider = ({ children }) => {
    const { setShowModal, setIsLoading, getMessage, closeModal } = useContext(LoadingModalContext)
    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useState(null)

    const logIn = async (email, password) => {
        setShowModal(true)
        setIsLoading(true)

        if (!email) {
            console.log("Ziadny e-mail")
            setShowModal(false)
            setIsLoading(false)
            return
        }
        if (!password) {
            console.log("Ziadne heslo")
            setShowModal(false)
            setIsLoading(false)
            return
        }

        try {
            const response = await getUser({ email, password })
            const user = await response.json()

            getMessage(user.message)
            setIsLoading(false)
            if (user.user) {
                setCurrentUser(user.user)
                setToken(user.authToken)
                closeModal()
            }
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const Register = async (email, password, confirmPassword) => {
        setShowModal(true)
        setIsLoading(true)

        if (!email) {
            console.log("Ziadny e-mail")
            setShowModal(false)
            setIsLoading(false)
            return
        }
        if (!password) {
            console.log("Ziadne heslo")
            setShowModal(false)
            setIsLoading(false)
            return
        }


        if (password !== confirmPassword) {
            console.log("hesla sa nezhoduju")
            setShowModal(false)
            setIsLoading(false)
            return
        }


        try {
            const response = await createNewUser({ email, password })
            const data = await response.json()

            getMessage(data.message)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const handleResetPassword = async (email) => {
        setShowModal(true)
        setIsLoading(true)

        if (!email) {
            console.log("Ziadny e-mail")
            setShowModal(false)
            setIsLoading(false)
            return
        }

        try {
            const response = await resetPassword(email)
            const user = await response.json()

            getMessage(user.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const handleCreatingNewPassword = async (resetSecret, password) => {
        setShowModal(true)
        setIsLoading(true)

        if (!resetSecret) {
            console.log("Ziadny reset token")
            setShowModal(false)
            setIsLoading(false)
            return
        }
        if (!password) {
            console.log("Ziadne heslo")
            setShowModal(false)
            setIsLoading(false)
            return
        }

        try {
            const response = await setNewPassword(resetSecret, password)
            const user = await response.json()

            getMessage(user.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }


    }

    return (
        <AuthContext.Provider
            value={{
                token,
                currentUser,
                logIn,
                Register,
                handleResetPassword,
                handleCreatingNewPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider