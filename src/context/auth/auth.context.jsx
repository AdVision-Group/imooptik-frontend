import React, { createContext, useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { getUser, createNewUser, resetPassword, setNewPassword, fetchUser } from './auth.queries'

export const AuthContext = createContext({
    userID: null,
    token: null,
    currentUser: null,
    isAuthenticated: false,
    isAuthorized: false,
    isAdmin: false,
    isEditor: false,
    isOptometrist: false,
    getToken: () => { },
    logout: () => { },

    stats: null,
    logIn: () => { },
    logOut: () => { },
    register: () => { },
    handleResetPassword: () => { },
    handleCreatingNewPassword: () => { }
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("accessToken") || null)
    const [currentUser, setCurrentUser] = useState(null)
    const [userID, setUserID] = useState(localStorage.getItem("userId") || null)
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("accessToken") ? true : false)
    const [isAuthorized, setIsAuthorized] = useState(false)

    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("admin") > 1 ? true : false )
    const [isOptometrist, setIsOptometrist] = useState(false)

    const getUserID = (id) => {
        setUserID(id)
        localStorage.setItem("userId", id)
    }

    const getToken = (token) => {
        setToken(token)
        // setUserID(user.sub)
        // localStorage.setItem("userId", user.sub)
        localStorage.setItem("accessToken", token)
        setIsAuthenticated(true)
        // client.resetStore()
    }

    const checkIfOptometrist = user => {
        if (user.optometrist) {
            localStorage.setItem("optimetrist", user.optometrist)
            setIsOptometrist(true)
        } else {
            setIsOptometrist(false)
        }
    }

    const checkIfAdmin = (user) => {
        if(user.admin === 0) return setIsAuthorized(false)
        if (user.admin > 1) {
            setIsAdmin(true)
            localStorage.setItem("admin", user.admin)

        } else {
            setIsAdmin(false)
        }
        setIsAuthorized(true)
    }


    const logout = () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("userId")
        setCurrentUser(null)
        setIsAuthenticated(false)
        setUserID(null)
        // client.resetStore()
    }

    const { setShowModal, setIsLoading, getMessage, closeModal } = useContext(LoadingModalContext)
    // const [currentUser, setCurrentUser] = useState(null)
    // const [token, setToken] = useState(localStorage.getItem(process.env.REACT_APP_ADMIN_TOKEN) || null)
    // const [isAdmin, setIsAdmin] = useState(false)
    // const [isOptometrist, setIsOptometrist] = useState(false)
    const [stats, setStats] = useState(null)


    const logIn = async (email, password, callback = () => {}) => {
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
                getUserID(user.user._id)
                getToken(user.authToken)
                closeModal()
                callback(user)
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

    // useEffect(() => {
    //     if (localStorage.getItem(process.env.REACT_APP_ADMIN_TOKEN)) {
    //         setToken(localStorage.getItem(process.env.REACT_APP_ADMIN_TOKEN))
    //     }
    // }, [])

    useEffect(() => {
        if (token) {
            // console.log("GET USER")
            const getUserProfile = async () => {
                const response = await fetchUser(token)
                const data = await response.json()
                // console.log(data)
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

    console.log(token)

    return (
        <AuthContext.Provider
            value={{
                token,
                userID,
                currentUser,
                isAuthenticated,
                isAuthorized,
                getToken,
                logout,

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