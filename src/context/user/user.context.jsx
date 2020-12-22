import React, { createContext, useState, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { fetchUsers, fetchUser } from './user.queries'

export const UserContext = createContext({
    users: null,
    user: null,
    totalCount: 0,
    isLoading: false,
    showModal: false,
    message: '',
    closeModal: () => { },
    getUsers: () => { },
    getUser: () => { }
})

const UserProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const [users, setUsers] = useState(null)
    const [user, setUser] = useState(null)
    const [totalCount, setTotalCount] = useState(0)

    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('')

    const closeModal = () => {
        setShowModal(false)
    }

    const getUsers = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchUsers(token)
            const data = await response.json()

            console.log(data)
            if (data.users) {
                setUsers(data.users)
                setTotalCount(data.count)
                setIsLoading(false)
                setShowModal(false)
            } else {
                setMessage(data.message)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
            setMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getUser = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchUser(token, id)
            const data = await response.json()

            console.log(data)
            if (data.user) {
                setUser(data.user)
                setIsLoading(false)
                setShowModal(false)
            } else {
                setMessage(data.message)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
            setMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    return (
        <UserContext.Provider
            value={{
                users,
                user,
                isLoading,
                showModal,
                message,
                totalCount,
                closeModal,
                getUsers,
                getUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider