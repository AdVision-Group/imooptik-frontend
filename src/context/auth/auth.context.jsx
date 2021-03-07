import React, { createContext, useState, useContext, useEffect } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { getUser, createNewUser, resetPassword, setNewPassword, fetchUser } from './auth.queries'

export const AuthContext = createContext({
    currentUser: null,
    isAdmin: false,
    isOptometrist: false,
    token: null,
    stats: null,
    logIn: () => { },
    logOut: () => { },
    register: () => { },
    handleResetPassword: () => { },
    handleCreatingNewPassword: () => { }
})

const AuthProvider = ({ children }) => {
    const { setShowModal, setIsLoading, getMessage, closeModal } = useContext(LoadingModalContext)
    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isOptometrist, setIsOptometrist] = useState(false)
    const [stats, setStats] = useState(null)

    const checkIfOptometrist = user => {
        if (user.optometrist) {
            setIsOptometrist(true)
        } else {
            setIsOptometrist(false)
        }
    }

    const checkIfAdmin = (user) => {
        if (user.admin > 1) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }

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
                localStorage.setItem(process.env.REACT_APP_ADMIN_TOKEN, user.authToken)
                checkIfAdmin(user.user)

                closeModal()
            }
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const logOut = () => {
        localStorage.removeItem(process.env.REACT_APP_ADMIN_TOKEN)
        setCurrentUser(null)
        setToken(null)
    }

    const register = async (name, email, password, confirmPassword) => {
        setShowModal(true)
        setIsLoading(true)

        if (!name) {
            console.log("Ziadne meno")
            setShowModal(false)
            setIsLoading(false)
            return
        }

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
            const response = await createNewUser({ name, email, password })
            const data = await response.json()

            setIsLoading(false)
            getMessage(data.messageSK)

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

            getMessage(user.messageSK)
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

            getMessage(user.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");


    const getStats = async () => {
        setShowModal(true)
        setIsLoading(true)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/stats/collectionCounts`, requestOptions)
            const data = await response.json()

            setStats(data)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_ADMIN_TOKEN)) {
            setToken(localStorage.getItem(process.env.REACT_APP_ADMIN_TOKEN))
        }
    }, [])

    useEffect(() => {
        if (token) {
            console.log("GET USER")
            const getUserProfile = async () => {
                const response = await fetchUser(token)
                const data = await response.json()
                console.log(data)
                if (data.user) {
                    setCurrentUser(data.user)
                    checkIfAdmin(data.user)
                    checkIfOptometrist(data.user)
                }
            }
            getUserProfile()
            getStats()
        }
    }, [token])

    return (
        <AuthContext.Provider
            value={{
                token,
                currentUser,
                isAdmin,
                isOptometrist,
                stats,
                logIn,
                logOut,
                register,
                handleResetPassword,
                handleCreatingNewPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider