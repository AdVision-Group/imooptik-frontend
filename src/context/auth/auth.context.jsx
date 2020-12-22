import React, { createContext, useState } from 'react'
import { getUser, createNewUser, resetPassword, setNewPassword } from './auth.queries'

export const AuthContext = createContext({
    currentUser: null,
    token: null,
    isLoading: false,
    isWaitingForResponse: false,
    errMessage: '',
    logIn: () => { },
    Register: () => { },
    setIsLoading: () => { },
    handleResetPassword: () => { },
    handleCreatingNewPassword: () => { }
})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useState(null)
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errMessage, setErrMessage] = useState('')

    const logIn = async (email, password) => {
        setIsLoading(true)
        setIsWaitingForResponse(true)

        if (!email) {
            console.log("Ziadny e-mail")
            setIsLoading(false)
            setIsWaitingForResponse(false)
            return
        }
        if (!password) {
            console.log("Ziadne heslo")
            setIsLoading(false)
            setIsWaitingForResponse(false)
            return
        }

        try {
            const response = await getUser({ email, password })
            const user = await response.json()

            setErrMessage(user.message)
            setIsWaitingForResponse(false)
            if (user) {
                setCurrentUser(user.user)
                setToken(user.authToken)
            }
        } catch (err) {
            console.log(err)
            setErrMessage("Nieco sa pokazilo")
            setIsWaitingForResponse(false)
        }
    }

    const Register = async (email, password, confirmPassword) => {
        setIsLoading(true)
        setIsWaitingForResponse(true)

        if (!email) {
            console.log("Ziadny e-mail")
            setIsLoading(false)
            setIsWaitingForResponse(false)
            return
        }
        if (!password) {
            console.log("Ziadne heslo")
            setIsLoading(false)
            setIsWaitingForResponse(false)
            return
        }


        if (password !== confirmPassword) {
            console.log("hesla sa nezhoduju")
            setIsLoading(false)
            setIsWaitingForResponse(false)
            return
        }


        try {
            const response = await createNewUser({ email, password })
            const data = await response.json()

            setErrMessage(data.message)
            setIsWaitingForResponse(false)

        } catch (err) {
            console.log(err)
            setErrMessage("Nieco sa pokazilo")
            setIsWaitingForResponse(false)
        }
    }

    const handleResetPassword = async (email) => {
        setIsLoading(true)
        setIsWaitingForResponse(true)

        if (!email) {
            console.log("Ziadny e-mail")
            setIsLoading(false)
            setIsWaitingForResponse(false)
            return
        }

        try {
            const response = await resetPassword(email)
            const user = await response.json()

            setErrMessage(user.message)
            setIsWaitingForResponse(false)
        } catch (err) {
            console.log(err)
            setErrMessage("Nieco sa pokazilo")
            setIsWaitingForResponse(false)
        }
    }

    const handleCreatingNewPassword = async (resetSecret, password) => {
        setIsLoading(true)
        setIsWaitingForResponse(true)

        if (!resetSecret) {
            console.log("Ziadny reset token")
            setIsLoading(false)
            setIsWaitingForResponse(false)
            return
        }
        if (!password) {
            console.log("Ziadne heslo")
            setIsLoading(false)
            setIsWaitingForResponse(false)
            return
        }

        try {
            const response = await setNewPassword(resetSecret, password)
            const user = await response.json()

            setErrMessage(user.message)
            setIsWaitingForResponse(false)
        } catch (err) {
            console.log(err)
            setErrMessage("Nieco sa pokazilo")
            setIsWaitingForResponse(false)
        }


    }

    return (
        <AuthContext.Provider
            value={{
                token,
                currentUser,
                isLoading,
                errMessage,
                isWaitingForResponse,
                logIn,
                Register,
                setIsLoading,
                handleResetPassword,
                handleCreatingNewPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider